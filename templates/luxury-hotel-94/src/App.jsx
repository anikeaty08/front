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
"name": "Regal Residency",
"description": "Luxury hotel in Patna offering premium accommodation and world-class amenities",
"address": {
"@type": "PostalAddress",
"streetAddress": "Fraser Road",
"addressLocality": "Patna",
"addressRegion": "Bihar",
"postalCode": "800001",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": "25.6093",
"longitude": "85.1376"
},
"telephone": "+91-612-2345678",
"priceRange": "₹₹₹₹",
"starRating": {
"@type": "Rating",
"ratingValue": "5"
}
}



        // ==================== DATA ====================
        const rooms = [
            { id: 1, name: 'Deluxe Room', price: 4999, size: '350 sq.ft', guests: 2, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop', amenities: ['Free WiFi', 'AC', 'TV', 'Mini Bar'] },
            { id: 2, name: 'Executive Room', price: 7999, size: '500 sq.ft', guests: 3, image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop', amenities: ['Free WiFi', 'Jacuzzi', 'TV', 'Mini Bar', 'Workspace'] },
            { id: 3, name: 'Presidential Suite', price: 14999, size: '1000 sq.ft', guests: 4, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop', amenities: ['Free WiFi', 'Butler Service', 'Private Pool', 'Kitchen', 'Living Room'] }
        ];

        const blogPosts = [
            { id: 1, title: 'Top 10 Places to Visit in Patna', category: 'Travel Guide', date: 'December 15, 2024', author: 'Anita Sharma', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop', excerpt: 'Discover the rich cultural heritage and historical landmarks of Bihar\'s capital city.', content: 'Patna, one of the oldest continuously inhabited cities in the world, offers a fascinating blend of ancient history and modern development. From the historic ruins of Pataliputra to the sacred Mahavir Mandir, the city is a treasure trove of experiences. Visit the Golghar for panoramic views, explore the Patna Museum for ancient artifacts, and take a serene boat ride on the Ganges. The Buddha Smriti Park and the magnificent Takht Sri Patna Sahib are must-visits for spiritual seekers.' },
            { id: 2, title: 'Experience Luxury Dining at Regal Residency', category: 'Dining', date: 'December 10, 2024', author: 'Chef Vikram', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', excerpt: 'Our award-winning chefs bring you an unforgettable culinary journey.', content: 'At Regal Residency, dining is an art form. Our multi-cuisine restaurant offers an exquisite menu crafted by internationally trained chefs. From authentic Bihari delicacies like Litti Chokha and Sattu Paratha to continental favorites and pan-Asian cuisine, every dish is a masterpiece. Our sommelier curates the finest wines to complement your meal, while the elegant ambiance sets the stage for memorable dining experiences.' },
            { id: 3, title: 'Planning the Perfect Wedding at Our Banquet Hall', category: 'Events', date: 'December 5, 2024', author: 'Priya Events Team', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop', excerpt: 'Create magical memories with our world-class wedding services.', content: 'Your dream wedding deserves a dream venue. Our grand banquet hall accommodates up to 500 guests in opulent surroundings. Our dedicated wedding planners work closely with you to create personalized celebrations that reflect your style. From traditional Bihari weddings to contemporary ceremonies, we handle every detail - décor, catering, entertainment, and accommodation for your guests. Let us turn your special day into an unforgettable celebration.' },
            { id: 4, title: 'Business Travel Made Comfortable', category: 'Business', date: 'November 28, 2024', author: 'Business Concierge', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', excerpt: 'Everything you need for a productive business trip to Patna.', content: 'For the modern business traveler, Regal Residency offers more than just a place to stay. Our Executive Rooms feature dedicated workspaces with high-speed internet, while our business center provides secretarial services, video conferencing facilities, and private meeting rooms. The hotel\'s central location provides easy access to major business districts, government offices, and the airport. After a long day of meetings, unwind at our spa or enjoy a drink at the rooftop lounge.' },
            { id: 5, title: 'Wellness Retreats: Rejuvenate Your Body and Mind', category: 'Wellness', date: 'November 20, 2024', author: 'Spa Director', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop', excerpt: 'Discover our holistic wellness programs designed for complete relaxation.', content: 'Escape the stress of daily life with our comprehensive wellness programs. Our spa features traditional Ayurvedic treatments, aromatherapy sessions, and modern therapeutic massages. The fitness center is equipped with state-of-the-art equipment, while our yoga pavilion offers daily sessions led by certified instructors. Try our signature \'Royal Rejuvenation\' package, which includes a full-body massage, facial treatment, and meditation session - the perfect way to restore your inner balance.' }
        ];

        const testimonials = [
            { name: 'Rajesh Kumar', role: 'Business Executive, Delhi', initials: 'RK', text: 'An absolutely magnificent experience! The staff went above and beyond to make our anniversary special. The Presidential Suite was breathtaking.' },
            { name: 'Priya Singh', role: 'Event Manager, Mumbai', initials: 'PS', text: 'Perfect venue for our corporate conference. The facilities were top-notch and the catering was exceptional. Highly recommended!' },
            { name: 'Anita & Mohan', role: 'Newlyweds, Patna', initials: 'AM', text: 'Our wedding reception was a dream come true. The banquet hall was stunning and the team made every moment memorable.' },
            { name: 'Vikram Gupta', role: 'Consultant, Bangalore', initials: 'VG', text: 'As a frequent business traveler, Regal Residency is my go-to hotel in Patna. The Executive Room has everything I need.' },
            { name: 'Sunita Mishra', role: 'Doctor, Ranchi', initials: 'SM', text: 'The spa services were divine! A perfect getaway from the city hustle. Will definitely return with my family.' },
            { name: 'Amit Jha', role: 'Food Critic, Kolkata', initials: 'AJ', text: 'Exceptional hospitality that truly reflects the warmth of Bihar. The culinary experience was extraordinary!' }
        ];

        const galleryImages = [
            { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop', title: 'Hotel Exterior' },
            { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop', title: 'Grand Lobby' },
            { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop', title: 'Deluxe Room' },
            { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop', title: 'Infinity Pool' },
            { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop', title: 'Fine Dining' },
            { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop', title: 'Presidential Suite' },
            { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop', title: 'Spa & Wellness' },
            { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop', title: 'Conference Hall' }
        ];

        // ==================== In-Memory Storage ====================
        let bookings = [];
        let contactMessages = [];

        // ==================== Header Scroll Effect ====================
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

        // ==================== Mobile Menu ====================
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.add('hidden');
        }

        // ==================== Booking Modal ====================
        function openBookingModal(roomType = '') {
            const modal = document.getElementById('bookingModal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            if (roomType) {
                document.getElementById('roomType').value = roomType;
            }
            
            // Set minimum dates
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
            
            // Validation
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
                document.getElementById('checkOutError').textContent = 'Check-out must be after check-in';
                isValid = false;
            } else {
                document.getElementById('checkOutError').classList.add('hidden');
            }
            
            if (!isValid) return;
            
            // Create booking
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
            console.log('Booking saved:', booking);
            
            // Show confirmation
            closeBookingModal();
            showConfirmation(booking);
            form.reset();
        }

        function showConfirmation(booking) {
            const modal = document.getElementById('confirmationModal');
            const details = document.getElementById('bookingDetails');
            
            details.innerHTML = `
                <p class="mb-2"><strong>Booking ID:</strong> #RR${booking.id}</p>
                <p class="mb-2"><strong>Name:</strong> ${booking.name}</p>
                <p class="mb-2"><strong>Room:</strong> ${booking.roomType}</p>
                <p class="mb-2"><strong>Check-in:</strong> ${new Date(booking.checkIn).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Check-out:</strong> ${new Date(booking.checkOut).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            `;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeConfirmationModal() {
            const modal = document.getElementById('confirmationModal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // ==================== Contact Form ====================
        function handleContactSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            
            // Validation
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
            
            // Save message
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
            console.log('Contact message saved:', contactMessage);
            
            // Show success
            alert('Thank you for your message! We will get back to you shortly.');
            form.reset();
        }

        // ==================== Gallery Lightbox ====================
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

        // Keyboard navigation for lightbox
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
                        <h3 class="font-display text-xl font-medium text-royal-700 group-hover:text-gold-500 transition-colors">${post.title}</h3>${post.title}</h3>
                        <p class="mt-2 text-sm text-royal-600/70 line-clamp-2">${post.excerpt}</p>
                        <div class="mt-4 flex items-center space-x-2 text-gold-500 font-medium text-sm group-hover:text-gold-600 transition-colors">
                            <span>Read More</span>
                            <iconify-icon icon="lucide:arrow-right" width="16" height="16" style="stroke-width: 1.5"></iconify-icon>
                        </div>
                    </div>
                </article>
            `).join('');
            
            // Render pagination
            const totalPages = Math.ceil(blogPosts.length / postsPerPage);
            let paginationHTML = '';
            
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `
                    <button onclick="goToBlogPage(${i})" class="w-10 h-10 rounded-full ${i === currentBlogPage ? 'gold-gradient text-royal-800' : 'bg-cream-100 text-royal-600 hover:bg-gold-100'} font-medium transition-all">
                        ${i}
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

        // ==================== Testimonials Slider ====================
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
                    <button onclick="goToTestimonial(${i})" class="w-3 h-3 rounded-full ${i === currentTestimonialIndex ? 'bg-gold-500' : 'bg-gold-200'} transition-colors" aria-label="Go to testimonial ${i + 1}"></button>
                `;
            }
            dotsContainer.innerHTML = dotsHTML;
        }

        function updateTestimonialSlider() {
            const track = document.getElementById('testimonialTrack');
            const slideWidth = 100 / testimonialsPerView;
            const offset = currentTestimonialIndex * slideWidth * testimonialsPerView;
            track.style.transform = `translateX(-${offset}%)`;
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

        // ==================== 3D Hero Animation ====================
        function init3DHero() {
            const container = document.getElementById('hero3d');
            if (!container || typeof THREE === 'undefined') return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Create particles
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

            // Animation
            function animate() {
                requestAnimationFrame(animate);
                particlesMesh.rotation.x += 0.0005;
                particlesMesh.rotation.y += 0.001;
                renderer.render(scene, camera);
            }

            animate();

            // Handle resize
            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        }

        // ==================== Smooth Scroll ====================
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

        // ==================== Initialize ====================
        document.addEventListener('DOMContentLoaded', () => {
            renderBlog();
            updateTestimonialsPerView();
            renderTestimonialDots();
            init3DHero();

            // Auto-play testimonials
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
<span className="font-display text-royal-800 font-semibold text-lg tracking-tighter">RR</span>
</div>
<div className="hidden sm:block">
<span className="font-display text-xl font-medium tracking-tight text-royal-700">Regal Residency</span>
<span className="block text-xs text-gold-500 tracking-widest uppercase">Patna</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#home">Home</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#about">About</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#rooms">Rooms</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#services">Services</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#gallery">Gallery</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#blog">Blog</a>
<a className="nav-link text-sm font-medium text-royal-600 hover:text-gold-500 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<button className="px-6 py-2.5 gold-gradient text-royal-800 text-sm font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105" onclick="openBookingModal()">
                        Book Now
                    </button>
</div>

<button aria-label="Toggle menu" className="lg:hidden p-2 rounded-lg hover:bg-royal-100 transition-colors" id="mobileMenuBtn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="lg:hidden hidden bg-white/95 backdrop-blur-lg border-t border-cream-200" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#home" onclick="closeMobileMenu()">Home</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#about" onclick="closeMobileMenu()">About</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#rooms" onclick="closeMobileMenu()">Rooms</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#services" onclick="closeMobileMenu()">Services</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#gallery" onclick="closeMobileMenu()">Gallery</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#blog" onclick="closeMobileMenu()">Blog</a>
<a className="block py-2 text-base font-medium text-royal-600 hover:text-gold-500" href="#contact" onclick="closeMobileMenu()">Contact</a>
<button className="w-full mt-4 px-6 py-3 gold-gradient text-royal-800 text-sm font-medium rounded-full" onclick="openBookingModal(); closeMobileMenu();">
                    Book Now
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
<span className="text-xs font-medium text-gold-300 tracking-widest uppercase">Premium Luxury Hotel</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white tracking-tight leading-tight animate-slide-up">
                            Stay in <span className="text-gold-gradient">Luxury</span>.<br/>
                            Live in <span className="text-gold-gradient">Comfort</span>.
                        </h1>
<p className="mt-6 text-base sm:text-lg text-cream-200/80 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
                            Experience unparalleled hospitality at Regal Residency, Patna's premier luxury destination. Where timeless elegance meets modern sophistication.
                        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-xl hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" onclick="openBookingModal()">
<span>Book Your Stay</span>
<iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 border border-gold-300/50 text-gold-300 font-medium rounded-full hover:bg-gold-300/10 transition-all flex items-center justify-center space-x-2" href="#rooms">
<span>Explore Rooms</span>
<iconify-icon height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="mt-16 grid grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">50+</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Luxury Rooms</div>
</div>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">15+</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Years Legacy</div>
</div>
<div className="text-center lg:text-left">
<div className="font-display text-3xl sm:text-4xl font-medium text-gold-300">4.9</div>
<div className="text-xs sm:text-sm text-cream-200/60 mt-1">Guest Rating</div>
</div>
</div>
</div>

<div className="hidden lg:flex items-center justify-center perspective">
<div className="relative preserve-3d rotate-y">
<div className="w-72 h-72 rounded-full glass border border-gold-300/30 flex items-center justify-center animate-glow">
<div className="w-56 h-56 rounded-full bg-royal-600/50 border border-gold-300/50 flex items-center justify-center">
<div className="text-center">
<div className="font-display text-6xl font-semibold text-gold-300 tracking-tighter">RR</div>
<div className="text-xs text-gold-300/80 tracking-widest uppercase mt-2">Est. 2009</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-16 h-16 rounded-full gold-gradient flex items-center justify-center animate-float" style={{animationDelay: '0s'}}>
<iconify-icon className="text-royal-800" height="24" icon="lucide:star" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-gold-300" height="20" icon="lucide:crown" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<a className="flex flex-col items-center text-gold-300/60 hover:text-gold-300 transition-colors" href="#about">
<span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
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
<img alt="Luxury Room" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Hotel Lobby" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&amp;h=300&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Fine Dining" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&amp;h=300&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
<img alt="Pool Area" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-full flex items-center justify-center shadow-xl">
<div className="text-center">
<div className="font-display text-2xl font-semibold text-royal-800">15+</div>
<div className="text-xs text-royal-700">Years</div>
</div>
</div>
</div>

<div>
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:info" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Our Story</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
                        A Legacy of <span className="text-gold-500">Luxury</span> in the Heart of Patna
                    </h2>
<p className="mt-6 text-base text-royal-600/80 leading-relaxed">
                        Since 2009, Regal Residency has been the crown jewel of Patna's hospitality landscape. Nestled in the heart of Bihar's capital, our hotel combines the rich cultural heritage of the region with contemporary luxury that discerning travelers expect.
                    </p>
<p className="mt-4 text-base text-royal-600/80 leading-relaxed">
                        From the moment you step through our doors, you'll experience the warmth of Indian hospitality elevated to an art form. Our commitment to excellence has made us the preferred choice for dignitaries, business leaders, and families seeking an unforgettable stay.
                    </p>

<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Prime Location</h4>
<p className="text-sm text-royal-600/70 mt-1">Fraser Road, Patna</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:award" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">5-Star Rating</h4>
<p className="text-sm text-royal-600/70 mt-1">Award-winning service</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:users" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">10,000+ Guests</h4>
<p className="text-sm text-royal-600/70 mt-1">Happy customers</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="18" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Safe &amp; Secure</h4>
<p className="text-sm text-royal-600/70 mt-1">24/7 security</p>
</div>
</div>
</div>
<a className="inline-flex items-center space-x-2 mt-10 text-gold-500 font-medium hover:text-gold-600 transition-colors group" href="#contact">
<span>Learn More About Us</span>
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
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Accommodations</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
                    Luxurious <span className="text-gold-500">Rooms &amp; Suites</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
                    Each room is a sanctuary of comfort, designed to provide an unparalleled experience of luxury and relaxation.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
<div className="relative h-64 overflow-hidden">
<img alt="Deluxe Room" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Deluxe</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">₹4,999/night</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Deluxe Room</h3>
<p className="mt-2 text-sm text-royal-600/70">Elegant comfort with city views, perfect for business travelers seeking refinement.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>350 sq.ft</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>2 Guests</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:wifi" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>Free WiFi</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 border-2 border-gold-400 text-gold-600 font-medium rounded-full hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="openBookingModal('Deluxe Room')">
                            Book This Room
                        </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
<div className="relative h-64 overflow-hidden">
<img alt="Executive Room" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Executive</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">₹7,999/night</span>
</div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-royal-700 rounded-full">
<span className="text-xs font-medium text-gold-300">Popular Choice</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Executive Room</h3>
<p className="mt-2 text-sm text-royal-600/70">Spacious luxury with premium amenities and a private workspace for executives.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>500 sq.ft</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>3 Guests</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:bath" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>Jacuzzi</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all" onclick="openBookingModal('Executive Room')">
                            Book This Room
                        </button>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
<div className="relative h-64 overflow-hidden">
<img alt="Presidential Suite" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
<span className="text-xs font-medium text-royal-700">Suite</span>
</div>
<div className="absolute top-4 right-4 px-3 py-1 gold-gradient rounded-full">
<span className="text-xs font-semibold text-royal-800">₹14,999/night</span>
</div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-gold-500 rounded-full">
<span className="text-xs font-medium text-royal-800">Premium</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-xl font-medium text-royal-700">Presidential Suite</h3>
<p className="mt-2 text-sm text-royal-600/70">The pinnacle of luxury living with panoramic views and butler service.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:maximize-2" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>1000 sq.ft</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:users" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>4 Guests</span>
</span>
<span className="inline-flex items-center space-x-1 px-2 py-1 bg-cream-100 rounded-lg text-xs text-royal-600">
<iconify-icon height="12" icon="lucide:concierge-bell" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<span>Butler</span>
</span>
</div>
<button className="w-full mt-6 px-6 py-3 bg-royal-700 text-gold-300 font-medium rounded-full hover:bg-royal-800 transition-all" onclick="openBookingModal('Presidential Suite')">
                            Book This Suite
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
<span className="text-xs font-medium text-gold-300 tracking-widest uppercase">Our Services</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                    World-Class <span className="text-gold-gradient">Amenities</span>
</h2>
<p className="mt-4 text-base text-cream-200/70">
                    Experience a full spectrum of services designed to make your stay extraordinary.
                </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:utensils" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">24/7 Room Service</h3>
<p className="mt-3 text-sm text-cream-200/70">Gourmet dining delivered to your room any time of day or night.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:party-popper" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Banquet Hall</h3>
<p className="mt-3 text-sm text-cream-200/70">Grand venues for weddings, celebrations, and special occasions.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:presentation" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Conference Hall</h3>
<p className="mt-3 text-sm text-cream-200/70">State-of-the-art facilities for corporate meetings and seminars.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:wine" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Fine Dining</h3>
<p className="mt-3 text-sm text-cream-200/70">Multi-cuisine restaurants with award-winning chefs.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:car" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Travel Desk</h3>
<p className="mt-3 text-sm text-cream-200/70">Airport transfers, city tours, and travel arrangements.</p>
</div>

<div className="group p-8 rounded-3xl glass border border-gold-300/20 hover:border-gold-300/50 transition-all duration-500 hover:transform hover:scale-105">
<div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
<iconify-icon className="text-royal-800" height="28" icon="lucide:flower-2" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="font-display text-xl font-medium text-white">Spa &amp; Wellness</h3>
<p className="mt-3 text-sm text-cream-200/70">Rejuvenating treatments and wellness experiences.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-50 mb-6">
<iconify-icon className="text-gold-500" height="16" icon="lucide:image" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Gallery</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
                    Explore Our <span className="text-gold-500">Spaces</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
                    Take a visual journey through the elegance and grandeur of Regal Residency.
                </p>
</div>

<div className="masonry">
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(0)">
<img alt="Hotel Exterior" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Hotel Exterior</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(1)">
<img alt="Luxury Lobby" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Grand Lobby</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(2)">
<img alt="Deluxe Room" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Deluxe Room</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(3)">
<img alt="Pool Area" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Infinity Pool</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(4)">
<img alt="Restaurant" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Fine Dining</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(5)">
<img alt="Suite" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&amp;h=700&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Presidential Suite</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(6)">
<img alt="Spa" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&amp;h=450&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Spa &amp; Wellness</p>
</div>
</div>
</div>
</div>
<div className="masonry-item">
<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox(7)">
<img alt="Conference" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-4 left-4">
<p className="text-sm font-medium text-white">Conference Hall</p>
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
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Testimonials</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
                    What Our <span className="text-gold-500">Guests Say</span>
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
<p className="text-royal-600/80 leading-relaxed">"An absolutely magnificent experience! The staff went above and beyond to make our anniversary special. The Presidential Suite was breathtaking."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">RK</span>
</div>
<div>
<p className="font-medium text-royal-700">Rajesh Kumar</p>
<p className="text-sm text-royal-600/60">Business Executive, Delhi</p>
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
<p className="text-royal-600/80 leading-relaxed">"Perfect venue for our corporate conference. The facilities were top-notch and the catering was exceptional. Highly recommended!"</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">PS</span>
</div>
<div>
<p className="font-medium text-royal-700">Priya Singh</p>
<p className="text-sm text-royal-600/60">Event Manager, Mumbai</p>
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
<p className="text-royal-600/80 leading-relaxed">"Our wedding reception was a dream come true. The banquet hall was stunning and the team made every moment memorable."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">AM</span>
</div>
<div>
<p className="font-medium text-royal-700">Anita &amp; Mohan</p>
<p className="text-sm text-royal-600/60">Newlyweds, Patna</p>
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
<p className="text-royal-600/80 leading-relaxed">"As a frequent business traveler, Regal Residency is my go-to hotel in Patna. The Executive Room has everything I need."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">VG</span>
</div>
<div>
<p className="font-medium text-royal-700">Vikram Gupta</p>
<p className="text-sm text-royal-600/60">Consultant, Bangalore</p>
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
<p className="text-royal-600/80 leading-relaxed">"The spa services were divine! A perfect getaway from the city hustle. Will definitely return with my family."</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">SM</span>
</div>
<div>
<p className="font-medium text-royal-700">Sunita Mishra</p>
<p className="text-sm text-royal-600/60">Doctor, Ranchi</p>
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
<p className="text-royal-600/80 leading-relaxed">"Exceptional hospitality that truly reflects the warmth of Bihar. The culinary experience was extraordinary!"</p>
<div className="mt-6 flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-royal-100 flex items-center justify-center">
<span className="font-display text-lg font-medium text-royal-600">AJ</span>
</div>
<div>
<p className="font-medium text-royal-700">Amit Jha</p>
<p className="text-sm text-royal-600/60">Food Critic, Kolkata</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center space-x-4 mt-8">
<button aria-label="Previous testimonial" className="w-12 h-12 rounded-full border-2 border-gold-400 text-gold-500 flex items-center justify-center hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="prevTestimonial()">
<iconify-icon height="20" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="flex space-x-2" id="testimonialDots"></div>
<button aria-label="Next testimonial" className="w-12 h-12 rounded-full border-2 border-gold-400 text-gold-500 flex items-center justify-center hover:bg-gold-400 hover:text-royal-800 transition-all" onclick="nextTestimonial()">
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
                    Latest <span className="text-gold-500">Stories</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
                    Discover travel tips, local insights, and news from Regal Residency.
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
<span className="text-xs font-medium text-gold-600 tracking-widest uppercase">Contact Us</span>
</div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-royal-700 tracking-tight">
                        Get in <span className="text-gold-500">Touch</span>
</h2>
<p className="mt-4 text-base text-royal-600/80">
                        We'd love to hear from you. Whether you have a question about reservations, services, or anything else, our team is ready to answer.
                    </p>

<div className="mt-10 space-y-6">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Address</h4>
<p className="text-sm text-royal-600/70 mt-1">Fraser Road, Near Gandhi Maidan<br/>Patna, Bihar 800001, India</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Phone</h4>
<p className="text-sm text-royal-600/70 mt-1">+91 612-234-5678<br/>+91 612-234-5679</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold-500" height="20" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-royal-700">Email</h4>
<p className="text-sm text-royal-600/70 mt-1">reservations@regalresidency.com<br/>info@regalresidency.com</p>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl overflow-hidden shadow-lg h-64 bg-royal-100 relative">
<iframe allowfullscreen="" aria-label="Map showing Regal Residency location in Patna" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8711726068287!2d85.13760431502393!3d25.609300083703407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58a5e3a7a8f5%3A0x3d2e0f2f0f2f0f2f!2sPatna%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} title="Regal Residency Location - Patna" width="100%">
</iframe>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
<h3 className="font-display text-2xl font-medium text-royal-700 mb-6">Send us a Message</h3>
<form className="space-y-6" id="contactForm" onsubmit="handleContactSubmit(event)">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactName">Full Name *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactName" name="name" placeholder="John Doe" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactNameError">Please enter your name</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactEmail">Email Address *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactEmail" name="email" placeholder="john@example.com" required="" type="email"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactEmailError">Please enter a valid email</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactPhone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactPhone" name="phone" placeholder="+91 98765 43210" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactSubject">Subject *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="contactSubject" name="subject" placeholder="How can we help?" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="contactSubjectError">Please enter a subject</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="contactMessage">Message *</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors resize-none" id="contactMessage" name="message" placeholder="Tell us more about your inquiry..." required="" rows="4"></textarea>
<span className="text-xs text-red-500 mt-1 hidden" id="contactMessageError">Please enter your message</span>
</div>
<button className="w-full px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" type="submit">
<span>Send Message</span>
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
<span className="font-display text-royal-800 font-semibold text-lg tracking-tighter">RR</span>
</div>
<div>
<span className="font-display text-xl font-medium text-white tracking-tight">Regal Residency</span>
<span className="block text-xs text-gold-300 tracking-widest uppercase">Patna</span>
</div>
</div>
<p className="text-sm text-cream-200/70 leading-relaxed">
                        Experience the epitome of luxury hospitality in the heart of Patna. Where tradition meets contemporary elegance.
                    </p>
<div className="flex space-x-4 mt-6">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:text-royal-800 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:linkedin" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#rooms">Rooms &amp; Suites</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#blog">Blog</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Our Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Room Service</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Banquet Hall</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Conference Hall</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Fine Dining</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Travel Desk</a></li>
<li><a className="text-sm text-cream-200/70 hover:text-gold-300 transition-colors" href="#services">Spa &amp; Wellness</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-lg font-medium text-white mb-6">Contact Info</h4>
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">Fraser Road, Near Gandhi Maidan, Patna, Bihar 800001</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">+91 612-234-5678</span>
</li>
<li className="flex items-start space-x-3">
<iconify-icon className="text-gold-300 mt-0.5" height="16" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm text-cream-200/70">info@regalresidency.com</span>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-royal-700">
<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
<p className="text-xs text-cream-200/50">© 2024 Regal Residency, Patna. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-xs text-cream-200/50 hover:text-gold-300 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-cream-200/50 hover:text-gold-300 transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-cream-200/50 hover:text-gold-300 transition-colors" href="#">Sitemap</a>
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
<h3 className="font-display text-2xl font-medium text-royal-700">Book Your Stay</h3>
<button aria-label="Close modal" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-cream-200 transition-colors" onclick="closeBookingModal()">
<iconify-icon height="20" icon="lucide:x" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<form className="p-6 space-y-6" id="bookingForm" onsubmit="handleBookingSubmit(event)">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestName">Full Name *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestName" name="name" placeholder="John Doe" required="" type="text"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestNameError">Please enter your name</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestEmail">Email *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestEmail" name="email" placeholder="john@example.com" required="" type="email"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestEmailError">Please enter a valid email</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="guestPhone">Phone *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors" id="guestPhone" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
<span className="text-xs text-red-500 mt-1 hidden" id="guestPhoneError">Please enter your phone number</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="roomType">Room Type *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="roomType" name="roomType" required="">
<option value="">Select Room</option>
<option value="Deluxe Room">Deluxe Room - ₹4,999/night</option>
<option value="Executive Room">Executive Room - ₹7,999/night</option>
<option value="Presidential Suite">Presidential Suite - ₹14,999/night</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="checkIn">Check-in Date *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 focus:border-gold-400 transition-colors" id="checkIn" name="checkIn" required="" type="date"/>
<span className="text-xs text-red-500 mt-1 hidden" id="checkInError">Please select check-in date</span>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="checkOut">Check-out Date *</label>
<input className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 focus:border-gold-400 transition-colors" id="checkOut" name="checkOut" required="" type="date"/>
<span className="text-xs text-red-500 mt-1 hidden" id="checkOutError">Please select check-out date</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="adults">Adults *</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="adults" name="adults" required="">
<option value="1">1 Adult</option>
<option selected="" value="2">2 Adults</option>
<option value="3">3 Adults</option>
<option value="4">4 Adults</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="children">Children</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 appearance-none focus:border-gold-400 transition-colors cursor-pointer" id="children" name="children">
<option selected="" value="0">No Children</option>
<option value="1">1 Child</option>
<option value="2">2 Children</option>
<option value="3">3 Children</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-royal-400 pointer-events-none" height="18" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-royal-700 mb-2" htmlFor="specialRequests">Special Requests</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-royal-700 placeholder-royal-400 focus:border-gold-400 transition-colors resize-none" id="specialRequests" name="specialRequests" placeholder="Any special requirements or preferences..." rows="3"></textarea>
</div>
<button className="w-full px-8 py-4 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg hover:shadow-gold-300/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2" type="submit">
<span>Confirm Booking</span>
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
<h3 className="font-display text-2xl font-medium text-royal-700 mb-4">Booking Confirmed!</h3>
<p className="text-royal-600/80 mb-6">Thank you for choosing Regal Residency. A confirmation email has been sent to your email address.</p>
<div className="bg-cream-50 rounded-xl p-4 mb-6 text-left text-sm" id="bookingDetails">

</div>
<button className="px-8 py-3 gold-gradient text-royal-800 font-medium rounded-full hover:shadow-lg transition-all" onclick="closeConfirmationModal()">
                    Close
                </button>
</div>
</div>
</div>

<div className="lightbox" id="lightbox" onclick="closeLightbox()">
<button aria-label="Close lightbox" className="absolute top-4 right-4 text-white hover:text-gold-300 transition-colors">
<iconify-icon height="32" icon="lucide:x" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<button aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" id="lightboxPrev" onclick="event.stopPropagation(); prevImage();">
<iconify-icon className="text-white" height="24" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<img alt="Gallery Image" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg" id="lightboxImage" onclick="event.stopPropagation();" src=""/>
<button aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" id="lightboxNext" onclick="event.stopPropagation(); nextImage();">
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
<button aria-label="Close post" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors" onclick="closeBlogPost()">
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
<p className="text-xs text-royal-600/60">Author</p>
</div>
</div>
<div className="flex space-x-2">
<button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
<iconify-icon className="text-royal-600" height="18" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
<iconify-icon className="text-royal-600" height="18" icon="lucide:twitter" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button aria-label="Copy link" className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center hover:bg-gold-100 transition-colors">
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
