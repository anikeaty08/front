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
colors: {
royal: {
50: '#eff6ff',
100: '#dbeafe',
500: '#1e3a5f',
600: '#162d4d',
700: '#0f1f35',
800: '#0a1628',
900: '#050b14'
},
gold: {
50: '#fefce8',
100: '#fef9c3',
300: '#d4af37',
400: '#c9a227',
500: '#b8960f',
600: '#a68a0d'
},
cream: {
50: '#fdfbf7',
100: '#faf6ed',
200: '#f5efe0'
}
}
}
}
}



{
"@context": "https://schema.org",
"@type": "Hotel",
"name": "Pensjonat i Restauracja Bartosz",
"description": "Luksusowy pensjonat i restauracja w Żaganiu oferujące zakwaterowanie premium i wyśmienitą kuchnię.",
"address": {
"@type": "PostalAddress",
"streetAddress": "Żarska 46",
"addressLocality": "Żagań",
"addressRegion": "Lubuskie",
"postalCode": "68-100",
"addressCountry": "PL"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": "51.6167",
"longitude": "15.3167"
},
"telephone": "+48 500 100 900",
"priceRange": "złzł",
"starRating": {
"@type": "Rating",
"ratingValue": "4.5"
}
}



    // ==================== DANE ====================
    // Zaktualizowane opisy pokoi i ceny na PLN (zł)
    const rooms = [
      { id: 1, name: 'Pokój Standard', price: 199, size: '20 m²', guests: 2, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop', amenities: ['WiFi', 'Łazienka', 'TV'] },
      { id: 2, name: 'Pokój Deluxe', price: 299, size: '30 m²', guests: 3, image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop', amenities: ['WiFi', 'Klimatyzacja', 'Smart TV', 'Zestaw kawowy'] },
      { id: 3, name: 'Apartament Rodzinny', price: 499, size: '55 m²', guests: 4, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop', amenities: ['WiFi', 'Aneks kuchenny', 'Salon', '2 sypialnie'] }
    ];

    // Zaktualizowane posty blogowe dotyczące Żagania
    const blogPosts = [
      { id: 1, title: 'Atrakcje turystyczne Żagania - Co warto zobaczyć?', category: 'Przewodnik', date: '15 Grudnia 2024', author: 'Anna Nowak', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop', excerpt: 'Odkryj bogatą historię i zabytki Księstwa Żagańskiego.', content: 'Żagań to miasto o niezwykle bogatej historii. Punktem obowiązkowym jest Pałac Książęcy, zwany perłą baroku, otoczony przepięknym parkiem w stylu angielskim. Warto również odwiedzić Zespół Poaugustiański z biblioteką o światowej sławie oraz Muzeum Obozów Jenieckich, które przypomina o trudnej historii regionu. Spacer nad rzeką Bóbr to idealny sposób na relaks po dniu pełnym zwiedzania.' },
      { id: 2, title: 'Smaki Kuchni Polskiej w Restauracji Bartosz', category: 'Kulinaria', date: '10 Grudnia 2024', author: 'Szef Kuchni Piotr', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', excerpt: 'Tradycyjne przepisy w nowoczesnym wydaniu - zapraszamy na ucztę.', content: 'W Restauracji Bartosz stawiamy na jakość i tradycję. Nasze menu to hołd dla kuchni polskiej. Serwujemy ręcznie lepione pierogi, aromatyczny żurek na zakwasie oraz wyśmienitą kaczkę z jabłkami. Korzystamy z produktów od lokalnych dostawców z województwa lubuskiego, co gwarantuje świeżość i niepowtarzalny smak każdej potrawy.' },
      { id: 3, title: 'Organizacja Wesela w Żaganiu - Nasza Oferta', category: 'Wydarzenia', date: '5 Grudnia 2024', author: 'Zespół Eventowy', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop', excerpt: 'Sprawimy, że ten dzień będzie niezapomniany dla Ciebie i Twoich gości.', content: 'Twój wymarzony ślub zasługuje na wyjątkową oprawę. Pensjonat Bartosz oferuje elegancką salę bankietową, która pomieści do 120 gości. Zapewniamy kompleksową obsługę: od wyśmienitego menu weselnego, przez dekoracje sali, aż po noclegi dla przyjezdnych gości. Nasze wieloletnie doświadczenie w organizacji przyjęć gwarantuje, że wszystko przebiegnie zgodnie z planem.' },
      { id: 4, title: 'Wyjazd Służbowy do Żagania? Wybierz Komfort', category: 'Biznes', date: '28 Listopada 2024', author: 'Recepcja', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', excerpt: 'Idealne warunki do pracy i wypoczynku w sercu miasta.', content: 'Dla osób podróżujących w interesach oferujemy pokoje z wygodnym biurkiem i szybkim, stabilnym łączem internetowym. Nasza lokalizacja przy ulicy Żarskiej zapewnia łatwy dojazd do głównych firm w regionie. Po pracy zapraszamy do naszej restauracji na kolację biznesową lub relaks przy kawie.' },
      { id: 5, title: 'Weekend w Lubuskim - Pomysł na Wypoczynek', category: 'Turystyka', date: '20 Listopada 2024', author: 'Bartek', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop', excerpt: 'Dlaczego warto wybrać Żagań na weekendowy wypad?', content: 'Województwo lubuskie to kraina lasów i jezior. Żagań stanowi świetną bazę wypadową do zwiedzania okolicy. Oprócz miejskich zabytków, w pobliżu znajdują się malownicze Bory Dolnośląskie, idealne na wycieczki rowerowe i grzybobranie. Wieczorem, po aktywnym dniu, Pensjonat Bartosz zapewni Ci zasłużony odpoczynek w komfortowych warunkach.' }
    ];

    // Zaktualizowane opinie
    const testimonials = [
      { name: 'Anna Kowalska', role: 'Turystka', initials: 'AK', text: 'Pyszne jedzenie i przemiła obsługa. Organizowaliśmy tu przyjęcie komunijne i wszystko było dopięte na ostatni guzik. Polecam!' },
      { name: 'Marek Kamiński', role: 'Przedstawiciel Handlowy', initials: 'MK', text: 'Czysto, schludnie i w bardzo dobrej lokalizacji. Idealne miejsce na nocleg podczas podróży służbowej. Śniadania rewelacja.' },
      { name: 'Piotr Zieliński', role: 'Gość Weselny', initials: 'PZ', text: 'Pensjonat Bartosz to klasa sama w sobie. Pokoje przestronne, łóżka wygodne, a obsługa bardzo pomocna. Na pewno tu wrócimy.' },
      { name: 'Tomasz Nowak', role: 'Mieszkaniec Żagania', initials: 'TN', text: 'Świetny catering, zamawialiśmy jedzenie na imprezę firmową. Wszystko świeże i na czas. Duży plus za elastyczność w menu.' },
      { name: 'Agnieszka Mazur', role: 'Turystka', initials: 'AM', text: 'Spędziliśmy tu weekend i jesteśmy zachwyceni. Blisko do atrakcji Żagania, a sam pensjonat cichy i spokojny.' },
      { name: 'Krzysztof Woźniak', role: 'Klient Restauracji', initials: 'KW', text: 'Restauracja serwuje najlepsze pierogi w mieście. Wystrój elegancki, idealny na randkę czy spotkanie rodzinne.' }
    ];

    // Zaktualizowane tytuły galerii
    const galleryImages = [
      { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop', title: 'Pensjonat Zewnątrz' },
      { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop', title: 'Recepcja' },
      { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop', title: 'Pokój Gościnny' },
      { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop', title: 'Teren Zielony' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop', title: 'Restauracja' },
      { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop', title: 'Apartament' },
      { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop', title: 'Kawa i Deser' },
      { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop', title: 'Sala Bankietowa' }
    ];

    // ==================== Magazyn w pamięci ====================
    let bookings = [];
    let contactMessages = [];

    // ==================== Efekt przewijania nagłówka ====================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('bg-white/95', 'backdrop-blur-lg', 'shadow-lg');
      } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-lg', 'shadow-lg');
      }
      
      lastScroll = currentScroll;
    });

    // ==================== Menu Mobilne ====================
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.add('hidden');
    }

    // ==================== Modal Rezerwacji ====================
    function openBookingModal(roomType = '') {
      const modal = document.getElementById('bookingModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      if (roomType) {
        document.getElementById('roomType').value = roomType;
      }
      
      // Ustawienie minimalnych dat
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('checkIn').min = today;
      document.getElementById('checkOut').min = today;
    }

    function closeBookingModal() {
      const modal = document.getElementById('bookingModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function handleBookingSubmit(event) {
      event.preventDefault();
      
      const form = event.target;
      const formData = new FormData(form);
      
      // Walidacja
      let isValid = true;
      
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const roomType = formData.get('roomType');
      const checkIn = formData.get('checkIn');
      const checkOut = formData.get('checkOut');
      
      if (!name) {
        document.getElementById('guestNameError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('guestNameError').classList.add('hidden');
      }
      
      if (!email || !email.includes('@')) {
        document.getElementById('guestEmailError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('guestEmailError').classList.add('hidden');
      }
      
      if (!phone) {
        document.getElementById('guestPhoneError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('guestPhoneError').classList.add('hidden');
      }
      
      if (new Date(checkOut) <= new Date(checkIn)) {
        document.getElementById('checkOutError').classList.remove('hidden');
        document.getElementById('checkOutError').textContent = 'Data wymeldowania musi być późniejsza niż zameldowania';
        isValid = false;
      } else {
        document.getElementById('checkOutError').classList.add('hidden');
      }
      
      if (!isValid) return;
      
      // Utworzenie rezerwacji
      const booking = {
        id: Date.now(),
        name,
        email,
        phone,
        roomType,
        checkIn,
        checkOut,
        adults: formData.get('adults'),
        children: formData.get('children'),
        specialRequests: formData.get('specialRequests'),
        createdAt: new Date().toISOString()
      };
      
      bookings.push(booking);
      console.log('Zapisano rezerwację:', booking);
      
      // Pokazanie potwierdzenia
      closeBookingModal();
      showConfirmation(booking);
      form.reset();
    }

    function showConfirmation(booking) {
      const modal = document.getElementById('confirmationModal');
      const details = document.getElementById('bookingDetails');
      
      details.innerHTML = `
        <p class="mb-2"><strong>ID Rezerwacji:</strong> #PB${booking.id}</p>
        <p class="mb-2"><strong>Imię i Nazwisko:</strong> ${booking.name}</p>
        <p class="mb-2"><strong>Pokój:</strong> ${booking.roomType}</p>
        <p class="mb-2"><strong>Zameldowanie:</strong> ${new Date(booking.checkIn).toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p><strong>Wymeldowanie:</strong> ${new Date(booking.checkOut).toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      `;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeConfirmationModal() {
      const modal = document.getElementById('confirmationModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    // ==================== Formularz Kontaktowy ====================
    function handleContactSubmit(event) {
      event.preventDefault();
      
      const form = event.target;
      const formData = new FormData(form);
      
      // Walidacja
      let isValid = true;
      
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      if (!name) {
        document.getElementById('contactNameError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('contactNameError').classList.add('hidden');
      }
      
      if (!email || !email.includes('@')) {
        document.getElementById('contactEmailError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('contactEmailError').classList.add('hidden');
      }
      
      if (!subject) {
        document.getElementById('contactSubjectError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('contactSubjectError').classList.add('hidden');
      }
      
      if (!message) {
        document.getElementById('contactMessageError').classList.remove('hidden');
        isValid = false;
      } else {
        document.getElementById('contactMessageError').classList.add('hidden');
      }
      
      if (!isValid) return;
      
      // Zapisanie wiadomości
      const contactMessage = {
        id: Date.now(),
        name,
        email,
        phone: formData.get('phone'),
        subject,
        message,
        createdAt: new Date().toISOString()
      };
      
      contactMessages.push(contactMessage);
      console.log('Zapisano wiadomość kontaktową:', contactMessage);
      
      // Komunikat sukcesu
      alert('Dziękujemy za wiadomość! Wkrótce się z Tobą skontaktujemy.');
      form.reset();
    }

    // ==================== Lightbox Galerii ====================
    let currentImageIndex = 0;

    function openLightbox(index) {
      currentImageIndex = index;
      const lightbox = document.getElementById('lightbox');
      const image = document.getElementById('lightboxImage');
      const counter = document.getElementById('lightboxCounter');
      
      image.src = galleryImages[index].src;
      image.alt = galleryImages[index].title;
      counter.textContent = `${index + 1} / ${galleryImages.length}`;
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightboxImage();
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      updateLightboxImage();
    }

    function updateLightboxImage() {
      const image = document.getElementById('lightboxImage');
      const counter = document.getElementById('lightboxCounter');
      
      image.src = galleryImages[currentImageIndex].src;
      image.alt = galleryImages[currentImageIndex].title;
      counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }

    // Nawigacja klawiaturą w lightboxie
    document.addEventListener('keydown', (e) => {
      const lightbox = document.getElementById('lightbox');
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    });

    // ==================== Blog ====================
    let currentBlogPage = 1;
    const postsPerPage = 3;

    function renderBlog() {
      const grid = document.getElementById('blogGrid');
      const pagination = document.getElementById('blogPagination');
      
      const startIndex = (currentBlogPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const currentPosts = blogPosts.slice(startIndex, endIndex);
      
      grid.innerHTML = currentPosts.map(post => `
        <article class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer" onclick="openBlogPost(${post.id})">
          <div class="relative h-48 overflow-hidden">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy">
            <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
              <span class="text-xs font-medium text-royal-700">${post.category}</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center space-x-2 text-xs text-royal-600/60 mb-3">
              <iconify-icon icon="lucide:calendar" width="14" height="14" style="stroke-width: 1.5"></iconify-icon>
              <span>${post.date}</span>
            </div>
            <h3 class="font-display text-xl font-medium text-royal-700 group-hover:text-gold-500 transition-colors">${post.title}</h3>
            <p class="mt-2 text-sm text-royal-600/70 line-clamp-2">${post.excerpt}</p>
            <div class="mt-4 flex items-center space-x-2 text-gold-500 font-medium text-sm group-hover:text-gold-600 transition-colors">
              <span>Czytaj Więcej</span>
              <iconify-icon icon="lucide:arrow-right" width="16" height="16" style="stroke-width: 1.5"></iconify-icon>
            </div>
          </div>
        </article>
      `).join('');
      
      // Renderowanie paginacji
      const totalPages = Math.ceil(blogPosts.length / postsPerPage);
      let paginationHTML = '';
      
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
          <button onclick="goToBlogPage(${})" class="w-10 h-10 rounded-full ${i === currentBlogPage ? 'gold-gradient text-royal-800' : 'bg-cream-100 text-royal-600 hover:bg-gold-100'} font-medium transition-all">
            ${}
          </button>
        `;
      }
      
      pagination.innerHTML = paginationHTML;
    }

    function goToBlogPage(page) {
      currentBlogPage = page;
      renderBlog();
      document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    }

    function openBlogPost(id) {
      const post = blogPosts.find(p => p.id === id);
      if (!post) return;
      
      document.getElementById('blogPostImage').src = post.image;
      document.getElementById('blogPostImage').alt = post.title;
      document.getElementById('blogPostCategory').textContent = post.category;
      document.getElementById('blogPostDate').textContent = post.date;
      document.getElementById('blogPostTitle').textContent = post.title;
      document.getElementById('blogPostContent').innerHTML = `<p>${post.content}</p>`;
      document.getElementById('blogPostAuthor').textContent = post.author;
      
      document.getElementById('blogPostModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeBlogPost() {
      document.getElementById('blogPostModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    // ==================== Slider Opinii ====================
    let currentTestimonialIndex = 0;
    let testimonialsPerView = 3;

    function updateTestimonialsPerView() {
      if (window.innerWidth < 768) {
        testimonialsPerView = 1;
      } else if (window.innerWidth < 1024) {
        testimonialsPerView = 2;
      } else {
        testimonialsPerView = 3;
      }
    }

    function renderTestimonialDots() {
      const dotsContainer = document.getElementById('testimonialDots');
      const totalDots = Math.ceil(testimonials.length / testimonialsPerView);
      
      let dotsHTML = '';
      for (let i = 0; i < totalDots; i++) {
        dotsHTML += `
          <button onclick="goToTestimonial(${})" class="w-3 h-3 rounded-full ${i === currentTestimonialIndex ? 'bg-gold-500' : 'bg-gold-200'} transition-colors" aria-label="Idź do opinii ${i + 1}"></button>
        `;
      }
      dotsContainer.innerHTML = dotsHTML;
    }

    function updateTestimonialSlider() {
      const track = document.getElementById('testimonialTrack');
      const slideWidth = 100 / testimonialsPerView;
      const offset = currentTestimonialIndex * slideWidth * testimonialsPerView;
      track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
      renderTestimonialDots();
    }

    function prevTestimonial() {
      const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);
      currentTestimonialIndex = (currentTestimonialIndex - 1 + totalSlides) % totalSlides;
      updateTestimonialSlider();
    }

    function nextTestimonial() {
      const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);
      currentTestimonialIndex = (currentTestimonialIndex + 1) % totalSlides;
      updateTestimonialSlider();
    }

    function goToTestimonial(index) {
      currentTestimonialIndex = index;
      updateTestimonialSlider();
    }

    // ==================== Animacja 3D Hero ====================
    function init3DHero() {
      const container = document.getElementById('hero3d');
      if (!container || typeof THREE === 'undefined') return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Tworzenie cząsteczek
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 500;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xd4af37,
        transparent: true,
        opacity: 0.8
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 5;

      // Animacja
      function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
      }

      animate();

      // Obsługa zmiany rozmiaru okna
      window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    }

    // ==================== Płynne przewijanie ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // ==================== Inicjalizacja ====================
    document.addEventListener('DOMContentLoaded', () => {
      renderBlog();
      updateTestimonialsPerView();
      renderTestimonialDots();
      init3DHero();

      // Automatyczne przewijanie opinii
      setInterval(() => {
        nextTestimonial();
      }, 5000);
    });

    window.addEventListener('resize', () => {
      updateTestimonialsPerView();
      updateTestimonialSlider();
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center space-x-2" href="#home">
<div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
<span className="font-display text-royal-800 font-semibold text-lg tracking-tighter">PB</span>
</div>
<div className="hidden sm:block">
<span className="font-display text-xl font-medium tracking-tight text-royal-700">Bartosz</span>
<span className="block text-xs text-gold-500 tracking-widest uppercase">Pensjonat &amp; Restauracja</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#home">Strona Główna</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#about">O Nas</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#rooms">Pokoje</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#services">Usługi</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#gallery">Galeria</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#blog">Blog</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#contact">Kontakt</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<button className="px-6 py-2.5 gold-gradient text-royal-800 text-sm font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105" onclick="openBookingModal()">
            Zarezerwuj
          </button>
</div>

<button aria-label="Przełącz menu" className="lg:hidden p-2 rounded-lg hover:bg-royal-100 transition-colors" id="mobileMenuBtn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="lg:hidden hidden bg-white/95 backdrop-blur-lg border-t border-cream-200" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#home" onclick="closeMobileMenu()">Strona Główna</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#about" onclick="closeMobileMenu()">O Nas</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#rooms" onclick="closeMobileMenu()">Pokoje</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#services" onclick="closeMobileMenu()">Usługi</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#gallery" onclick="closeMobileMenu()">Galeria</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#blog" onclick="closeMobileMenu()">Blog</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#contact" onclick="closeMobileMenu()">Kontakt</a>
<button className="w-full mt-4 px-6 py-3 gold-gradient text-royal-800 text-sm font-medium rounded-full" onclick="openBookingModal(); closeMobileMenu();">
          Zarezerwuj
        </button>
</div>
</div>
</header>

<section className="relative min-h-screen hero-gradient overflow-hidden" id="home">

<div className="absolute inset-0 opacity-30" id="hero3d"></div>

<div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&amp'}}></div>

<div className="absolute top-20 left-10 w-64 h-64 bg-gold-300/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl"></div>

<div className="relative z-10 min-h-screen flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="text-center lg:text-left">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
<iconify-icon className="text-gold-300" height="16" icon="lucide:sparkles" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-300 tracking-widest uppercase">Komfort i Tradycja w Żaganiu</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white tracking-tight leading-tight animate-slide-up">
              Wypocznij w <span className="text-gold-gradient">Komforcie</span>.<br/>
              Zasmakuj <span className="text-gold-gradient">Jakości</span>.
            </h1>
<p className="mt-6 text-base sm:text-lg text-cream-200/80 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Zapraszamy do Pensjonatu i Restauracji Bartosz. Miejsce, gdzie tradycyjna polska gościnność spotyka się z nowoczesnym standardem. Idealne miejsce na wypoczynek i spotkania biznesowe w Żaganiu.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-xl hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" onclick="openBookingModal()">
<span>Zarezerwuj Pobyt</span>
<iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 border border-gold-300/50 text-gold-300 font-medium rounded-full hover:bg-gold-300/10 transition-all flex items-center justify-center space-x-2" href="#rooms">
<span>Zobacz Pokoje</span>
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="mt-16 grid grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">20+</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Komfortowych Pokoi</div>
</div>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">10+</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Lat Tradycji</div>
</div>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">4.8</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Ocena Gości</div>
</div>
</div>
</div>

<div className="hidden lg:flex items-center justify-center perspective">
<div className="relative preserve-3d rotate-y">
<div className="w-72 h-72 rounded-full glass border border-gold-300/30 flex items-center justify-center animate-glow">
<div className="w-56 h-56 rounded-full bg-royal-600/50 border border-gold-300/50 flex items-center justify-center">
<div className="text-center">
<div className="font-display text-6xl font-semibold text-gold-300 tracking-tighter">PB</div>
<div className="text-xs text-gold-300/80 tracking-widest uppercase mt-2">Żagań</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-16 h-16 rounded-full gold-gradient flex items-center justify-center animate-float" style={{animationDelay: '0s'}}>
<iconify-icon className="text-royal-800" height="24" icon="lucide:star" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-gold-300" height="20" icon="lucide:utensils" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<a className="flex flex-col items-center text-gold-300/60 hover:text-gold-300 transition-colors" href="#about">
<span className="text-xs tracking-widest uppercase mb-2">Przewiń</span>
<iconify-icon height="24" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Luksusowy Pokój" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Hotelowe Lobby" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&amp;h=300&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Wykwintna Kolacja" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Relaks" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-full flex items-center justify-center shadow-xl">
<div className="text-center">
<div className="font-display text-2xl font-semibold text-royal-800">10+</div>
<div className="text-xs text-royal-700">Lat</div>
</div>
</div>
</div>

<div>
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:info" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Nasza Historia</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
            Wyjątkowe miejsce na mapie <span className="text-gold-500">Żagania</span>
</h2>
<p className="mt-6 text-base text-royal-600/80 leading-relaxed">
            Pensjonat i Restauracja Bartosz to miejsce stworzone z pasji do gościnności. Położony przy ulicy Żarskiej 46, oferujemy oazę spokoju zarówno dla podróżujących służbowo, jak i turystów odwiedzających malownicze województwo lubuskie.
          </p>
<p className="mt-4 text-base text-royal-600/80 leading-relaxed">
            Naszą dumą jest nie tylko komfortowy wypoczynek, ale przede wszystkim wyśmienita kuchnia. Łączymy tradycyjne polskie smaki z nowoczesnym podejściem kulinarnym, tworząc niezapomniane doznania dla podniebienia.
          </p>

<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Świetna Lokalizacja</h4>
<p className="text-sm text-royal-600/70 mt-1">ul. Żarska 46, Żagań</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:award" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Wysoki Standard</h4>
<p className="text-sm text-royal-600/70 mt-1">Ceniona jakość obsługi</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:users" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Zadowoleni Goście</h4>
<p className="text-sm text-royal-600/70 mt-1">Tysiące opinii</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Bezpieczeństwo</h4>
<p className="text-sm text-royal-600/70 mt-1">Monitoring i ochrona</p>
</div>
</div>
</div>
<a className="inline-flex items-center space-x-2 mt-10 text-gold-500 font-medium hover:text-gold-600 transition-colors group" href="#contact">
<span>Dowiedz się Więcej</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-cream-50" id="rooms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:bed-double" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Zakwaterowanie</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
          Komfortowe <span className="text-gold-500">Pokoje i Apartamenty</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
          Każdy pokój to sanktuarium komfortu, zaprojektowane tak, aby zapewnić niezrównane wrażenia i relaks po podróży.
        </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
<div className="relative h-64 overflow-hidden">
<img alt="Pokój Standard" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Standard</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">199 zł/noc</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Pokój Standard</h3>
<p className="mt-2 text-sm text-royal-600/70">Przytulny pokój, idealny dla osób podróżujących w pojedynkę lub par.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>20 m²</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>2 Osoby</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:wifi" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>WiFi</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 border-2 border-gold-400 text-gold-600 font-medium rounded-full hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="openBookingModal('Pokój Standard')">
              Rezerwuj ten pokój
            </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
<div className="relative h-64 overflow-hidden">
<img alt="Pokój Deluxe" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Deluxe</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">299 zł/noc</span>
</div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-royal-700 rounded-full">
<span className="text-xs font-medium text-gold-300">Popularny</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Pokój Deluxe</h3>
<p className="mt-2 text-sm text-royal-600/70">Większa przestrzeń i podwyższony standard dla wymagających gości.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>30 m²</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>3 Osoby</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:tv" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>Smart TV</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all" onclick="openBookingModal('Pokój Deluxe')">
              Rezerwuj ten pokój
            </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
<div className="relative h-64 overflow-hidden">
<img alt="Apartament" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Apartament</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">499 zł/noc</span>
</div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-gold-500 rounded-full">
<span className="text-xs font-medium text-royal-800">Premium</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Apartament Rodzinny</h3>
<p className="mt-2 text-sm text-royal-600/70">Idealne rozwiązanie dla rodzin, oferujące przestrzeń i wygodę jak w domu.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>55 m²</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>4 Osoby</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:coffee" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>Aneks</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 bg-royal-700 text-gold-300 font-medium rounded-full hover:bg-royal-800 transition-all" onclick="openBookingModal('Apartament Rodzinny')">
              Rezerwuj Apartament
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-royal-700" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
<iconify-icon className="text-gold-300" height="16" icon="lucide:sparkles" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-300 tracking-widest uppercase">Nasze Usługi</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
          Kompleksowa <span className="text-gold-gradient">Oferta</span>
</h2>
<p className="mt-4 text-base text-cream-200/70">
          Zadbamy o każdy detal Twojego pobytu.
        </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:utensils" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Restauracja</h3>
<p className="mt-3 text-sm text-cream-200/70">Domowa kuchnia polska oraz dania europejskie serwowane przez naszych kucharzy.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:party-popper" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Imprezy Okolicznościowe</h3>
<p className="mt-3 text-sm text-cream-200/70">Organizujemy wesela, komunie, chrzciny oraz bankiety firmowe.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:presentation" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Sala Szkoleniowa</h3>
<p className="mt-3 text-sm text-cream-200/70">Wyposażona sala na spotkania biznesowe i małe konferencje.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:chef-hat" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Catering</h3>
<p className="mt-3 text-sm text-cream-200/70">Oferujemy catering z dowozem na terenie Żagania i okolic.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:car" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Parking</h3>
<p className="mt-3 text-sm text-cream-200/70">Bezpłatny, monitorowany parking dla naszych gości.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:wifi" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Szybkie WiFi</h3>
<p className="mt-3 text-sm text-cream-200/70">Dostęp do szybkiego internetu w całym obiekcie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:image" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Galeria</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
          Zobacz Nasz <span className="text-gold-500">Obiekt</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
          Wirtualny spacer po wnętrzach Pensjonatu Bartosz.
        </p>
</div>

<div className="masonry">
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(0)">
<img alt="Hotel Exterior" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Zewnątrz</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(1)">
<img alt="Recepcja" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Recepcja</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(2)">
<img alt="Pokój Gościnny" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Pokój Gościnny</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(3)">
<img alt="Ogród" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Teren Zielony</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(4)">
<img alt="Restauracja" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Sala Restauracyjna</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(5)">
<img alt="Apartament" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&amp;h=700&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Apartament</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(6)">
<img alt="Kawa" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&amp;h=450&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Kawiarnia</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(7)">
<img alt="Conference" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Sala Bankietowa</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-cream-50" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:quote" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Opinie</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
          Co mówią o nas <span className="text-gold-500">Goście</span>
</h2>
</div>

<div className="relative">
<div className="overflow-hidden" id="testimonialSlider">
<div className="flex transition-transform duration-500 ease-out" id="testimonialTrack">

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Pyszne jedzenie i przemiła obsługa. Organizowaliśmy tu przyjęcie komunijne i wszystko było dopięte na ostatni guzik. Polecam!"</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">AK</span>
</div>
<div>
<p className="font-medium text-royal-700">Anna Kowalska</p>
<p className="text-sm text-royal-600/60">Zielona Góra</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Czysto, schludnie i w bardzo dobrej lokalizacji. Idealne miejsce na nocleg podczas podróży służbowej. Śniadania rewelacja."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">MK</span>
</div>
<div>
<p className="font-medium text-royal-700">Marek Kamiński</p>
<p className="text-sm text-royal-600/60">Wrocław</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Pensjonat Bartosz to klasa sama w sobie. Pokoje przestronne, łóżka wygodne, a obsługa bardzo pomocna. Na pewno tu wrócimy."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">PZ</span>
</div>
<div>
<p className="font-medium text-royal-700">Piotr Zieliński</p>
<p className="text-sm text-royal-600/60">Kraków</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Świetny catering, zamawialiśmy jedzenie na imprezę firmową. Wszystko świeże i na czas. Duży plus za elastyczność w menu."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">TN</span>
</div>
<div>
<p className="font-medium text-royal-700">Tomasz Nowak</p>
<p className="text-sm text-royal-600/60">Żagań</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Spędziliśmy tu weekend i jesteśmy zachwyceni. Blisko do atrakcji Żagania, a sam pensjonat cichy i spokojny."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">AM</span>
</div>
<div>
<p className="font-medium text-royal-700">Agnieszka Mazur</p>
<p className="text-sm text-royal-600/60">Poznań</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
<div className="bg-white rounded-3xl p-8 shadow-lg h-full">
<div className="flex items-center space-x-1 mb-4">
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
<iconify-icon className="text-gold-400" height="18" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#d4af37'}} width="18"></iconify-icon>
</div>
<p className="text-royal-600/80 leading-relaxed">"Restauracja serwuje najlepsze pierogi w mieście. Wystrój elegancki, idealny na randkę czy spotkanie rodzinne."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">KW</span>
</div>
<div>
<p className="font-medium text-royal-700">Krzysztof Woźniak</p>
<p className="text-sm text-royal-600/60">Żagań</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center space-x-4 mt-8">
<button aria-label="Poprzednia opinia" className="w-12 h-12 rounded-full border-2 border-gold-400 text-gold-500 flex items-center justify-center hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="prevTestimonial()">
<iconify-icon height="20" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="flex space-x-2" id="testimonialDots"></div>
<button aria-label="Następna opinia" className="w-12 h-12 rounded-full border-2 border-gold-400 text-gold-500 flex items-center justify-center hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="nextTestimonial()">
<iconify-icon height="20" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:newspaper" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Blog</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
          Aktualności z <span className="text-gold-500">Żagania</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
          Odkryj uroki okolicy, wskazówki dla turystów i nowości w Pensjonacie Bartosz.
        </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogGrid">

</div>

<div className="flex justify-center items-center space-x-2 mt-12" id="blogPagination">

</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-cream-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Skontaktuj się z Nami</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
            Bądźmy w <span className="text-gold-500">Kontakcie</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
            Chętnie odpowiemy na Twoje pytania. Skontaktuj się z nami w sprawie rezerwacji, organizacji imprez okolicznościowych lub cateringu.
          </p>

<div className="mt-10 space-y-6">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Adres</h4>
<p className="text-sm text-royal-600/70 mt-1">Żarska 46<br/>68-100 Żagań, Polska</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Telefon</h4>
<p className="text-sm text-royal-600/70 mt-1"><a className="hover:text-gold-600 transition-colors" href="tel:+48500100900">+48 500 100 900</a></p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Email</h4>
<p className="text-sm text-royal-600/70 mt-1"><a className="hover:text-gold-600 transition-colors" href="mailto:biuro@com.pl">biuro@com.pl</a></p>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl overflow-hidden shadow-lg h-64 bg-royal-100 relative">

<iframe allowfullscreen="" aria-label="Mapa pokazująca lokalizację Pensjonatu Bartosz w Żaganiu" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.0!2d15.3!3d51.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM2JzAwLjAiTiAxNcKwMTgnMDAuMCJF!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl" style={{border: '0'}} title="Lokalizacja Pensjonatu Bartosz w Żaganiu" width="100%">
</iframe>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
<h3 className="font-display text-2xl font-medium text-royal-700 mb-6">Wyślij Wiadomość</h3>
<form className="space-y-6" id="contactForm" onsubmit="handleContactSubmit(event)">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactName">Imię i Nazwisko *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactName" name="name" placeholder="Jan Kowalski" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactNameError">Proszę podać imię i nazwisko</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactEmail">Adres Email *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactEmail" name="email" placeholder="jan@przyklad.pl" required="" type="email"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactEmailError">Proszę podać prawidłowy email</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactPhone">Numer Telefonu</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactPhone" name="phone" placeholder="+48 500 100 900" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactSubject">Temat *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactSubject" name="subject" placeholder="W czym możemy pomóc?" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactSubjectError">Proszę podać temat</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactMessage">Wiadomość *</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors resize-none" id="contactMessage" name="message" placeholder="Napisz więcej o swoim zapytaniu..." required="" rows="4"></textarea>
<span className="text-xs text-red-500 mt-1 hidden" id="contactMessageError">Proszę wpisać treść wiadomości</span>
</div>
<button className="w-full px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" type="submit">
<span>Wyślij Wiadomość</span>
<iconify-icon height="18" icon="lucide:send" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-royal-800 text-cream-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="lg:col-span-1">
<div className="flex items-center space-x-2 mb-6">
<div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
<span className="font-display text-royal-800 font-semibold text-lg tracking-tighter">PB</span>
</div>
<div>
<span className="font-display text-xl font-medium text-white tracking-tight">Bartosz</span>
<span className="block text-xs text-gold-300 tracking-widest uppercase">Żagań</span>
</div>
</div>
<p className="text-sm text-cream-200/70 leading-relaxed">
            Twój przystanek w Żaganiu. Komfortowe pokoje, wyśmienita kuchnia i profesjonalna obsługa. Zapraszamy!
          </p>
<div className="flex space-x-4 mt-6">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Szybkie Linki</h4>
<ul className="space-y-3">
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#home">Strona Główna</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#about">O Nas</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#rooms">Pokoje</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Usługi</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#gallery">Galeria</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#blog">Blog</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Nasze Usługi</h4>
<ul className="space-y-3">
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Restauracja</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Imprezy Okolicznościowe</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Sala Szkoleniowa</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Catering</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Noclegi</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">Żarska 46, 68-100 Żagań</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">+48 500 100 900</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">biuro@com.pl</span>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-royal-700">
<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
<p className="text-xs text-cream-200/50">© 2024 Pensjonat i Restauracja Bartosz, Żagań.</p>
<div className="flex space-x-6">
<a className="text-xs text-cream-200/50 hover:text-gold-300 transition-colors" href="#">Polityka Prywatności</a>
<a className="text-xs text-cream-200/50 hover:text-gold-300 transition-colors" href="#">RODO</a>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="bookingModal">
<div className="absolute inset-0 bg-royal-900/80 backdrop-blur-sm" onclick="closeBookingModal()"></div>
<div className="relative min-h-screen flex items-center justify-center p-4">
<div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
<div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-cream-200 flex items-center justify-between">
<h3 className="font-display text-2xl font-medium text-royal-700">Zarezerwuj Pobyt</h3>
<button aria-label="Zamknij modal" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-cream-200 transition-colors" onclick="closeBookingModal()">
<iconify-icon height="20" icon="lucide:x" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<form className="p-6 space-y-6" id="bookingForm" onsubmit="handleBookingSubmit(event)">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestName">Imię i Nazwisko *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestName" name="name" placeholder="Jan Kowalski" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestNameError">Proszę podać imię i nazwisko</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestEmail">Email *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestEmail" name="email" placeholder="jan@przyklad.pl" required="" type="email"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestEmailError">Proszę podać prawidłowy email</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestPhone">Telefon *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestPhone" name="phone" placeholder="+48 500 100 900" required="" type="tel"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestPhoneError">Proszę podać numer telefonu</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="roomType">Rodzaj Pokoju *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="roomType" name="roomType" required="">
<option value="">Wybierz Pokój</option>
<option value="Pokój Standard">Pokój Standard - 199 zł/noc</option>
<option value="Pokój Deluxe">Pokój Deluxe - 299 zł/noc</option>
<option value="Apartament Rodzinny">Apartament Rodzinny - 499 zł/noc</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="checkIn">Data Zameldowania *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 focus:border-gold-400 transition-colors" id="checkIn" name="checkIn" required="" type="date"/>
<span className="text-xs text-red-500 mt-1 hidden" id="checkInError">Proszę wybrać datę zameldowania</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="checkOut">Data Wymeldowania *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 focus:border-gold-400 transition-colors" id="checkOut" name="checkOut" required="" type="date"/>
<span className="text-xs text-red-500 mt-1 hidden" id="checkOutError">Proszę wybrać datę wymeldowania</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="adults">Dorośli *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="adults" name="adults" required="">
<option value="1">1 Dorosły</option>
<option selected="" value="2">2 Dorosłych</option>
<option value="3">3 Dorosłych</option>
<option value="4">4 Dorosłych</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="children">Dzieci</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="children" name="children">
<option selected="" value="0">Bez Dzieci</option>
<option value="1">1 Dziecko</option>
<option value="2">2 Dzieci</option>
<option value="3">3 Dzieci</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="specialRequests">Życzenia Specjalne</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors resize-none" id="specialRequests" name="specialRequests" placeholder="Wszelkie specjalne wymagania lub preferencje..." rows="3"></textarea>
</div>
<button className="w-full px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" type="submit">
<span>Potwierdź Rezerwację</span>
<iconify-icon height="18" icon="lucide:check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="confirmationModal">
<div className="absolute inset-0 bg-royal-900/80 backdrop-blur-sm" onclick="closeConfirmationModal()"></div>
<div className="relative min-h-screen flex items-center justify-center p-4">
<div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center">
<div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
<iconify-icon className="text-green-500" height="40" icon="lucide:check-circle" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-royal-700 mb-4">Rezerwacja Potwierdzona!</h3>
<p className="text-royal-600/80 mb-6">Dziękujemy za wybór Pensjonatu Bartosz. E-mail z potwierdzeniem został wysłany na Twój adres.</p>
<div className="bg-cream-50 rounded-xl p-4 mb-6 text-left text-sm" id="bookingDetails">

</div>
<button className="px-8 py-3 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg transition-all" onclick="closeConfirmationModal()">
          Zamknij
        </button>
</div>
</div>
</div>

<div className="lightbox" id="lightbox" onclick="closeLightbox()">
<button aria-label="Zamknij lightbox" className="absolute top-4 right-4 text-white hover:text-gold-300 transition-colors">
<iconify-icon height="32" icon="lucide:x" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<button aria-label="Poprzednie zdjęcie" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" id="lightboxPrev" onclick="event.stopPropagation(); prevImage();">
<iconify-icon className="text-white" height="24" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<img alt="Zdjęcie Galerii" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" id="lightboxImage" onclick="event.stopPropagation();" src=""/>
<button aria-label="Następne zdjęcie" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" id="lightboxNext" onclick="event.stopPropagation(); nextImage();">
<iconify-icon className="text-white" height="24" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
<span id="lightboxCounter">1 / 8</span>
</div>
</div>

<div className="fixed inset-0 z-50 hidden overflow-y-auto" id="blogPostModal">
<div className="absolute inset-0 bg-royal-900/80 backdrop-blur-sm" onclick="closeBlogPost()"></div>
<div className="relative min-h-screen flex items-start justify-center p-4 py-20">
<div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl">
<div className="relative h-64 sm:h-80 rounded-t-3xl overflow-hidden">
<img alt="" className="w-full h-full object-cover" id="blogPostImage" src=""/>
<button aria-label="Zamknij post" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors" onclick="closeBlogPost()">
<iconify-icon height="20" icon="lucide:x" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="p-8">
<div className="flex items-center space-x-4 mb-4">
<span className="px-3 py-1 rounded-full bg-gold-100 text-gold-600 text-xs font-medium" id="blogPostCategory"></span>
<span className="text-sm text-royal-600/60" id="blogPostDate"></span>
</div>
<h2 className="font-display text-2xl sm:text-3xl font-medium text-royal-700 tracking-tight mb-4" id="blogPostTitle"></h2>
<div className="prose prose-royal max-w-none text-royal-600/80 leading-relaxed" id="blogPostContent"></div>
<div className="mt-8 pt-6 border-t border-cream-200 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center">
<iconify-icon className="text-royal-500" height="18" icon="lucide:user" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-royal-700" id="blogPostAuthor"></p>
<p className="text-xs text-royal-600/60">Autor</p>
</div>
</div>
<div className="flex space-x-2">
<button aria-label="Udostępnij na Facebooku" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
<iconify-icon className="text-royal-600" height="18" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button aria-label="Udostępnij na Twitterze" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
<iconify-icon className="text-royal-600" height="18" icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button aria-label="Kopiuj link" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
<iconify-icon className="text-royal-600" height="18" icon="lucide:link" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
