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



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "THE URBAN OVEN",
"image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
"address": {
"@type": "PostalAddress",
"streetAddress": "Ram Path, Near Saryu Ghat",
"addressLocality": "Ayodhya",
"addressRegion": "Uttar Pradesh",
"postalCode": "224123",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 26.7922,
"longitude": 82.1998
},
"url": "https://theurbanoven.com",
"telephone": "+91-9876543210",
"servesCuisine": ["Indian", "Continental", "Asian Fusion"],
"priceRange": "₹₹₹₹",
"openingHours": "Mo-Su 07:00-23:00"
}



tailwind.config = {
theme: {
extend: {
colors: {
gold: '#C9A227',
'gold-light': '#E8D5A3',
'gold-dark': '#9A7B1A',
cream: '#FDF8F3',
'cream-dark': '#F5EDE3',
charcoal: '#1A1A1A',
'charcoal-light': '#2D2D2D',
'warm-orange': '#D4763A'
},
fontFamily: {
'display': ['Playfair Display', 'serif'],
'body': ['Inter', 'sans-serif']
}
}
}
}



        // ==========================================
        // DATA STORE
        // ==========================================
        const menuData = {
            starters: [
                { name: 'Truffle Mushroom Cappuccino', description: 'Silky mushroom soup with truffle foam and crispy shallots', price: '₹495', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80', tags: ['Vegetarian', 'Chef\'s Special'] },
                { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower puree and golden raisins', price: '₹895', image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=400&q=80', tags: ['Seafood'] },
                { name: 'Burrata & Heirloom Tomatoes', description: 'Fresh burrata with vine tomatoes, basil oil, and aged balsamic', price: '₹595', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80', tags: ['Vegetarian'] },
                { name: 'Lamb Seekh Kebab', description: 'Charcoal-grilled lamb skewers with mint chutney', price: '₹695', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80', tags: ['Signature'] },
                { name: 'Crispy Calamari', description: 'Golden-fried calamari rings with sriracha aioli', price: '₹545', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', tags: ['Seafood'] },
                { name: 'Paneer Tikka', description: 'Tandoori spiced cottage cheese with bell peppers', price: '₹445', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80', tags: ['Vegetarian', 'Indian'] }
            ],
            mains: [
                { name: 'Slow-Roasted Lamb Shank', description: 'Twelve-hour braised lamb with root vegetables and red wine jus', price: '₹1,495', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', tags: ['Signature', 'Chef\'s Special'] },
                { name: 'Grilled Atlantic Salmon', description: 'Norwegian salmon with asparagus and lemon butter sauce', price: '₹1,295', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80', tags: ['Seafood', 'Healthy'] },
                { name: 'Butter Chicken', description: 'Classic North Indian curry with tender chicken in tomato-cream sauce', price: '₹695', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', tags: ['Indian', 'Signature'] },
                { name: 'Wagyu Ribeye Steak', description: 'A5 Wagyu with truffle mash and peppercorn sauce', price: '₹2,995', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', tags: ['Premium'] },
                { name: 'Wild Mushroom Risotto', description: 'Arborio rice with porcini, shiitake, and parmesan', price: '₹795', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80', tags: ['Vegetarian'] },
                { name: 'Dal Makhani', description: 'Slow-cooked black lentils with butter and cream', price: '₹495', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80', tags: ['Vegetarian', 'Indian'] }
            ],
            desserts: [
                { name: 'Molten Chocolate Fondant', description: 'Dark chocolate lava cake with vanilla bean ice cream', price: '₹395', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80', tags: ['Signature'] },
                { name: 'Gulab Jamun Cheesecake', description: 'Fusion dessert combining two classics', price: '₹345', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', tags: ['Indian Fusion'] },
                { name: 'Crème Brûlée', description: 'Classic French custard with caramelized sugar', price: '₹295', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80', tags: ['Classic'] },
                { name: 'Mango Kulfi', description: 'Traditional Indian frozen dessert with Alphonso mango', price: '₹245', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80', tags: ['Indian', 'Seasonal'] },
                { name: 'Tiramisu', description: 'Italian classic with espresso-soaked ladyfingers', price: '₹345', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', tags: ['Italian'] },
                { name: 'Rasmalai', description: 'Soft paneer dumplings in saffron-cardamom milk', price: '₹275', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80', tags: ['Indian'] }
            ],
            beverages: [
                { name: 'Signature Urban Oven Cocktail', description: 'House-crafted blend with premium spirits and fresh citrus', price: '₹595', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80', tags: ['Signature', 'Alcohol'] },
                { name: 'Masala Chai', description: 'Traditional spiced tea with house blend', price: '₹145', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80', tags: ['Indian', 'Hot'] },
                { name: 'Fresh Fruit Mocktail', description: 'Seasonal fruits blended with mint and lime', price: '₹295', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80', tags: ['Non-Alcoholic'] },
                { name: 'Espresso Martini', description: 'Vodka, Kahlua, and fresh espresso', price: '₹645', image: 'https://images.unsplash.com/photo-1545438102-799c3991ab33?w=400&q=80', tags: ['Alcohol', 'Coffee'] },
                { name: 'Mango Lassi', description: 'Creamy yogurt drink with Alphonso mango', price: '₹195', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80', tags: ['Indian', 'Cold'] },
                { name: 'Premium Wine Selection', description: 'Curated selection from world-renowned vineyards', price: '₹795+', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80', tags: ['Alcohol', 'Premium'] }
            ]
        };

        const galleryImages = [
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
            'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
            'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=1200&q=80',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80'
        ];

        const testimonials = [
            { name: 'Priya Sharma', role: 'Food Blogger', text: 'THE URBAN OVEN exceeded all my expectations. The lamb shank was divine, and the ambiance transported me to another world. A must-visit in Ayodhya!', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
            { name: 'Rajesh Gupta', role: 'Business Executive', text: 'Perfect for corporate dinners. The private dining room offered excellent privacy, and the service was impeccable. The wine selection impressed our international clients.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
            { name: 'Meera Patel', role: 'Travel Writer', text: 'In a city known for its spiritual significance, THE URBAN OVEN adds a touch of culinary luxury. The fusion of Indian and Continental flavors is masterful.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
            { name: 'Amit Singh', role: 'Local Resident', text: 'As an Ayodhya native, I\'m proud to have such a world-class establishment in our city. We celebrate every family occasion here now. The staff treats us like family.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
            { name: 'Dr. Anjali Verma', role: 'Cardiologist', text: 'The attention to dietary requirements is remarkable. They crafted a perfect meal for my specific health needs without compromising on taste. Truly thoughtful dining.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
            { name: 'Vikram Malhotra', role: 'Hotel Critic', text: 'The Royal Suite is nothing short of spectacular. Waking up to the Saryu view, followed by their exceptional room service breakfast - pure bliss. Five stars without hesitation.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' }
        ];

        const blogPosts = [
            { id: 1, title: 'The Art of Slow Cooking: Behind Our Signature Lamb Shank', excerpt: 'Discover the 12-hour journey that transforms simple ingredients into culinary poetry.', date: 'December 15, 2024', author: 'Chef Arjun Mehta', category: 'Kitchen Stories', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', content: 'Our signature lamb shank is more than just a dish—it\'s a labor of love that begins at dawn. Chef Arjun shares the secrets behind the slow-roasting technique passed down through generations...\n\nThe process begins with selecting the finest lamb from local farms in Uttar Pradesh. Each shank is carefully trimmed and marinated in a blend of 24 spices, then left to rest overnight.\n\nThe next morning, the lamb enters our custom-built slow cooker at precisely 120°C. For the next twelve hours, it undergoes a transformation that breaks down every fiber, creating meat so tender it falls off the bone.\n\nThe accompanying red wine jus is prepared in parallel, using a reduction of aged Bordeaux, fresh thyme, and our house-made veal stock. The result is a symphony of flavors that has become the most requested dish at THE URBAN OVEN.' },
            { id: 2, title: 'Ayodhya\'s Culinary Heritage: A Journey Through Time', excerpt: 'Exploring the rich food traditions of the sacred city and how they inspire our menu.', date: 'December 10, 2024', author: 'Priya Krishnan', category: 'Culture', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', content: 'Ayodhya, the birthplace of Lord Rama, holds culinary secrets as rich as its spiritual heritage. From the ghats of Saryu to the bustling markets, every corner tells a story through food...\n\nThe city\'s vegetarian traditions have inspired many dishes on our menu, including our famous Dal Makhani, prepared using a recipe that dates back centuries. Local ingredients like the aromatic Ayodhya tulsi and the unique Saryu river fish feature prominently in our seasonal offerings.\n\nWe\'ve also incorporated modern techniques to present these traditional flavors in innovative ways, creating a bridge between ancient wisdom and contemporary gastronomy.' },
            { id: 3, title: 'Wine Pairing 101: Elevating Your Dining Experience', excerpt: 'Our sommelier shares expert tips on matching wines with Indian and Continental cuisines.', date: 'December 5, 2024', author: 'Sommelier Kavita Rao', category: 'Wine & Dine', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80', content: 'The art of wine pairing with Indian cuisine is often misunderstood. Our sommelier Kavita Rao breaks down the principles that guide her recommendations at THE URBAN OVEN...\n\nContrary to popular belief, Indian spices can create beautiful harmony with the right wines. A Gewürztraminer, for instance, with its floral notes and slight sweetness, pairs magnificently with our Butter Chicken.\n\nFor our Wagyu Ribeye, we recommend a bold Shiraz that can stand up to the rich flavors while complementing the peppercorn sauce. The key is balance—neither the wine nor the dish should overpower the other.' },
            { id: 4, title: 'Sustainable Dining: Our Farm-to-Table Philosophy', excerpt: 'How we source ingredients locally and minimize our environmental footprint.', date: 'November 28, 2024', author: 'Operations Team', category: 'Sustainability', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', content: 'At THE URBAN OVEN, sustainability isn\'t a trend—it\'s a core value. We work directly with farmers within a 100-kilometer radius of Ayodhya to source the freshest produce...\n\nOur kitchen operates on a zero-waste philosophy. Vegetable trimmings become stocks, fruit peels are candied for desserts, and coffee grounds are composted for our rooftop herb garden.\n\nWe\'ve also invested in energy-efficient equipment and water recycling systems, reducing our carbon footprint by 40% over the past year. Every meal at THE URBAN OVEN is a step toward a more sustainable future.' },
            { id: 5, title: 'The Perfect Private Dining Experience', excerpt: 'Planning an intimate celebration? Here\'s how to make it unforgettable.', date: 'November 20, 2024', author: 'Events Team', category: 'Events', image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=600&q=80', content: 'Our private dining spaces have hosted everything from intimate anniversaries to landmark business deals. Here\'s what makes an Urban Oven private event truly special...\n\nIt begins with a consultation where our events team understands your vision. Whether you prefer a formal multi-course dinner or a relaxed family-style feast, we customize every detail.\n\nOur three private rooms—The Saryu Suite, The Heritage Room, and The Garden Pavilion—each offer unique atmospheres. Add personalized menus, curated wine flights, and our signature service, and you have the recipe for an unforgettable occasion.' }
        ];

        // In-memory storage for bookings
        const bookings = [];
        const messages = [];

        // ==========================================
        // INITIALIZATION
        // ==========================================
        document.addEventListener('DOMContentLoaded', () => {
            // Hide loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 700);
            }, 1500);

            // Initialize components
            initHeader();
            initMobileMenu();
            initMenu();
            initTestimonials();
            initBlog();
            initForms();
            initSmoothScroll();
            init3DHero();
            initIntersectionObserver();
            initKeyboardNavigation();
            setMinBookingDate();
        });

        // ==========================================
        // HEADER
        // ==========================================
        function initHeader() {
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // ==========================================
        // MOBILE MENU
        // ==========================================
        function initMobileMenu() {
            const menuBtn = document.getElementById('mobileMenuBtn');
            const closeBtn = document.getElementById('closeMobileMenu');
            const menu = document.getElementById('mobileMenu');
            const links = menu.querySelectorAll('.mobile-nav-link');

            menuBtn.addEventListener('click', () => {
                menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-full');
                menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-x-0');
                document.body.style.overflow = 'hidden';
            });

            const closeMenu = () => {
                menu.classList.add('opacity-0', 'pointer-events-none', 'translate-x-full');
                menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-x-0');
                document.body.style.overflow = '';
            };

            closeBtn.addEventListener('click', closeMenu);
            links.forEach(link => link.addEventListener('click', closeMenu));
        }

        // ==========================================
        // MENU SECTION
        // ==========================================
        function initMenu() {
            const tabs = document.querySelectorAll('.menu-tab');
            const grid = document.getElementById('menuGrid');
            
            renderMenuItems('starters');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => {
                        t.classList.remove('bg-gold', 'text-charcoal');
                        t.classList.add('bg-cream/10', 'text-cream');
                    });
                    tab.classList.remove('bg-cream/10', 'text-cream');
                    tab.classList.add('bg-gold', 'text-charcoal');
                    renderMenuItems(tab.dataset.category);
                });
            });
        }

        function renderMenuItems(category) {
            const grid = document.getElementById('menuGrid');
            const items = menuData[category];
            
            grid.innerHTML = items.map(item => `
                <div class="group bg-charcoal-light rounded-xl overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-500">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${item.image}" alt="${item.name} - Placeholder" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
                        <div class="absolute top-3 right-3 flex gap-2">
                            ${item.tags.map(tag => `<span class="px-2 py-1 bg-gold/90 text-charcoal text-xs rounded">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="font-display text-lg text-cream tracking-tight">${item.name}</h3>
                            <span class="text-gold font-medium">${item.price}</span>
                        </div>
                        <p class="text-cream/60 text-sm leading-relaxed">${item.description}</p>
                    </div>
                </div>
            `).join('');
        }

        // ==========================================
        // TESTIMONIALS CAROUSEL
        // ==========================================
        let currentTestimonial = 0;
        const testimonialsPerView = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

        function initTestimonials() {
            renderTestimonials();
            renderTestimonialDots();
            window.addEventListener('resize', () => {
                renderTestimonialDots();
                updateTestimonialPosition();
            });
        }

        function renderTestimonials() {
            const track = document.getElementById('testimonialTrack');
            track.innerHTML = testimonials.map(t => `
                <div class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                    <div class="bg-charcoal p-8 rounded-xl border border-cream/10 h-full">
                        <div class="flex items-center space-x-1 mb-4">
                            ${Array(t.rating).fill('<span class="iconify w-5 h-5 text-gold" data-icon="lucide:star" style="stroke-width: 1.5; fill: #C9A227"></span>').join('')}
                        </div>
                        <p class="text-cream/80 leading-relaxed mb-6 italic">"${t.text}"</p>
                        <div class="flex items-center space-x-4">
                            <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover">
                            <div>
                                <h4 class="text-cream font-medium">${t.name}</h4>
                                <span class="text-cream/50 text-sm">${t.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderTestimonialDots() {
            const dotsContainer = document.getElementById('testimonialDots');
            const maxIndex = Math.max(0, testimonials.length - testimonialsPerView());
            dotsContainer.innerHTML = Array(maxIndex + 1).fill(0).map((_, i) => 
                `<button class="w-2 h-2 rounded-full ${i === currentTestimonial ? 'bg-gold' : 'bg-cream/30'} transition-colors duration-300" onclick="goToTestimonial(${i})" aria-label="Go to testimonial ${i + 1}"></button>`
            ).join('');
        }

        function updateTestimonialPosition() {
            const track = document.getElementById('testimonialTrack');
            const slideWidth = 100 / testimonialsPerView();
            track.style.transform = `translateX(-${currentTestimonial * slideWidth}%)`;
            renderTestimonialDots();
        }

        function nextTestimonial() {
            const maxIndex = Math.max(0, testimonials.length - testimonialsPerView());
            currentTestimonial = (currentTestimonial + 1) > maxIndex ? 0 : currentTestimonial + 1;
            updateTestimonialPosition();
        }

        function prevTestimonial() {
            const maxIndex = Math.max(0, testimonials.length - testimonialsPerView());
            currentTestimonial = (currentTestimonial - 1) < 0 ? maxIndex : currentTestimonial - 1;
            updateTestimonialPosition();
        }

        function goToTestimonial(index) {
            currentTestimonial = index;
            updateTestimonialPosition();
        }

        // ==========================================
        // BLOG SECTION
        // ==========================================
        let currentBlogPage = 1;
        const postsPerPage = 3;

        function initBlog() {
            renderBlog();
        }

        function renderBlog() {
            const grid = document.getElementById('blogGrid');
            const start = (currentBlogPage - 1) * postsPerPage;
            const end = start + postsPerPage;
            const pagePosts = blogPosts.slice(start, end);

            grid.innerHTML = pagePosts.map(post => `
                <article class="group bg-charcoal-light rounded-xl overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-500 cursor-pointer" onclick="openBlogPost(${post.id})">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${post.image}" alt="${post.title} - Placeholder" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                        <div class="absolute top-4 left-4">
                            <span class="px-3 py-1 bg-gold text-charcoal text-xs font-medium rounded">${post.category}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center space-x-4 text-cream/50 text-sm mb-3">
                            <span class="flex items-center">
                                <span class="iconify w-4 h-4 mr-1" data-icon="lucide:calendar" style="stroke-width: 1.5"></span>
                                ${post.date}
                            </span>
                            <span class="flex items-center">
                                <span class="iconify w-4 h-4 mr-1" data-icon="lucide:user" style="stroke-width: 1.5"></span>
                                ${post.author}
                            </span>
                        </div>
                        <h3 class="font-display text-xl text-cream mb-3 tracking-tight group-hover:text-gold transition-colors duration-300">${post.title}</h3>
                        <p class="text-cream/60 text-sm leading-relaxed mb-4">${post.excerpt}</p>
                        <span class="inline-flex items-center text-gold text-sm group-hover:text-gold-light transition-colors duration-300">
                            Read More
                            <span class="iconify w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style="stroke-width: 1.5"></span>
                        </span>
                    </div>
                </article>
            `).join('');

            renderBlogPagination();
        }

        function renderBlogPagination() {
            const pagination = document.getElementById('blogPagination');
            const totalPages = Math.ceil(blogPosts.length / postsPerPage);
            
            pagination.innerHTML = Array(totalPages).fill(0).map((_, i) => `
                <button onclick="goToBlogPage(${i + 1})" class="w-10 h-10 rounded-full ${currentBlogPage === i + 1 ? 'bg-gold text-charcoal' : 'border border-cream/20 text-cream hover:border-gold hover:text-gold'} transition-all duration-300 font-medium">
                    ${i + 1}
                </button>
            `).join('');
        }

        function goToBlogPage(page) {
            currentBlogPage = page;
            renderBlog();
            document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
        }

        function openBlogPost(id) {
            const post = blogPosts.find(p => p.id === id);
            if (!post) return;

            const modal = document.getElementById('blogModal');
            const content = document.getElementById('blogModalContent');
            
            content.innerHTML = `
                <article>
                    <img src="${post.image}" alt="${post.title}" class="w-full h-64 md:h-96 object-cover rounded-xl mb-8">
                    <div class="flex items-center space-x-4 text-cream/50 text-sm mb-4">
                        <span class="px-3 py-1 bg-gold text-charcoal text-xs font-medium rounded">${post.category}</span>
                        <span class="flex items-center">
                            <span class="iconify w-4 h-4 mr-1" data-icon="lucide:calendar" style="stroke-width: 1.5"></span>
                            ${post.date}
                        </span>
                        <span class="flex items-center">
                            <span class="iconify w-4 h-4 mr-1" data-icon="lucide:user" style="stroke-width: 1.5"></span>
                            ${post.author}
                        </span>
                    </div>
                    <h1 class="font-display text-3xl md:text-4xl text-cream tracking-tight mb-6">${post.title}</h1>
                    <div class="prose prose-invert prose-gold max-w-none">
                        ${post.content.split('\n\n').map(p => `<p class="text-cream/80 leading-relaxed mb-4">${p}</p>`).join('')}
                    </div>
                </article>
            `;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }

        function closeBlogModal() {
            const modal = document.getElementById('blogModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }

        // ==========================================
        // GALLERY LIGHTBOX
        // ==========================================
        let currentImageIndex = 0;

        function openLightbox(index) {
            currentImageIndex = index;
            const lightbox = document.getElementById('lightbox');
            const img = document.getElementById('lightboxImage');
            img.src = galleryImages[index];
            lightbox.classList.remove('opacity-0', 'pointer-events-none');
            lightbox.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('opacity-0', 'pointer-events-none');
            lightbox.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            document.getElementById('lightboxImage').src = galleryImages[currentImageIndex];
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            document.getElementById('lightboxImage').src = galleryImages[currentImageIndex];
        }

        // ==========================================
        // ROOM BOOKING
        // ==========================================
        function openRoomBooking(roomType, price) {
            document.getElementById('roomType').textContent = roomType;
            document.getElementById('roomTypeInput').value = roomType;
            document.getElementById('roomPriceInput').value = price;
            document.getElementById('roomPriceDisplay').textContent = `₹${price.toLocaleString()}`;
            
            const modal = document.getElementById('roomBookingModal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
            
            // Set min dates
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('roomCheckIn').min = today;
            document.getElementById('roomCheckOut').min = today;
        }

        function closeRoomBooking() {
            const modal = document.getElementById('roomBookingModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }

        // ==========================================
        // FORMS
        // ==========================================
        function initForms() {
            // Booking Form
            document.getElementById('bookingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const booking = Object.fromEntries(formData);
                booking.id = Date.now();
                booking.type = 'table';
                bookings.push(booking);
                
                showSuccessModal('Reservation Confirmed!', `Thank you, ${booking.name}! Your table for ${booking.guests} guests on ${booking.date} at ${booking.time} has been reserved. We've sent a confirmation to ${booking.email}.`);
                e.target.reset();
            });

            // Contact Form
            document.getElementById('contactForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const message = Object.fromEntries(formData);
                message.id = Date.now();
                messages.push(message);
                
                showSuccessModal('Message Sent!', `Thank you for reaching out, ${message.name}! We've received your message and will respond to ${message.email} within 24 hours.`);
                e.target.reset();
            });

            // Room Booking Form
            document.getElementById('roomBookingForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const booking = {
                    id: Date.now(),
                    type: 'room',
                    roomType: document.getElementById('roomTypeInput').value,
                    price: document.getElementById('roomPriceInput').value,
                    checkIn: document.getElementById('roomCheckIn').value,
                    checkOut: document.getElementById('roomCheckOut').value,
                    name: document.getElementById('roomGuestName').value,
                    email: document.getElementById('roomGuestEmail').value,
                    phone: document.getElementById('roomGuestPhone').value
                };
                bookings.push(booking);
                
                closeRoomBooking();
                showSuccessModal('Room Booked!', `Your ${booking.roomType} has been reserved from ${booking.checkIn} to ${booking.checkOut}. Confirmation sent to ${booking.email}.`);
                e.target.reset();
            });
        }

        function showSuccessModal(title, message) {
            document.getElementById('successTitle').textContent = title;
            document.getElementById('successMessage').textContent = message;
            const modal = document.getElementById('successModal');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100', 'pointer-events-auto');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
        }

        function closeSuccessModal() {
            const modal = document.getElementById('successModal');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.classList.remove('opacity-100', 'pointer-events-auto');
        }

        function setMinBookingDate() {
            const today = new Date().toISOString().split('T')[0];
            const dateInput = document.getElementById('bookingDate');
            if (dateInput) dateInput.min = today;
        }

        // ==========================================
        // SMOOTH SCROLL
        // ==========================================
        function initSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }

        // ==========================================
        // 3D HERO (Simple Particle Effect)
        // ==========================================
        function init3DHero() {
            const canvas = document.getElementById('heroCanvas');
            if (!canvas || typeof THREE === 'undefined') return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            canvas.appendChild(renderer.domElement);

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
                color: 0xC9A227,
                transparent: true,
                opacity: 0.6
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            camera.position.z = 3;

            // Animation
            function animate() {
                requestAnimationFrame(animate);
                particlesMesh.rotation.x += 0.0003;
                particlesMesh.rotation.y += 0.0005;
                renderer.render(scene, camera);
            }
            animate();

            // Resize handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // ==========================================
        // INTERSECTION OBSERVER FOR ANIMATIONS
        // ==========================================
        function initIntersectionObserver() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        }

        // ==========================================
        // KEYBOARD NAVIGATION
        // ==========================================
        function initKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                // Close modals with Escape
                if (e.key === 'Escape') {
                    closeLightbox();
                    closeBlogModal();
                    closeSuccessModal();
                    closeRoomBooking();
                }
                
                // Navigate lightbox with arrows
                const lightbox = document.getElementById('lightbox');
                if (!lightbox.classList.contains('opacity-0')) {
                    if (e.key === 'ArrowRight') nextImage();
                    if (e.key === 'ArrowLeft') prevImage();
                }
            });
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
      

<div className="fixed inset-0 bg-charcoal z-50 flex items-center justify-center transition-opacity duration-700" id="loader">
<div className="text-center">
<div className="relative w-24 h-24 mx-auto mb-6">
<div className="absolute inset-0 border-2 border-gold rounded-full animate-ping opacity-30"></div>
<div className="absolute inset-2 border border-gold-light rounded-full animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-gold text-2xl font-medium tracking-tighter">UO</span>
</div>
</div>
<p className="text-gold-light text-sm tracking-widest uppercase animate-pulse">Loading Experience</p>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500" id="header">
<div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-transparent pointer-events-none"></div>
<nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 lg:h-24">

<a className="flex items-center space-x-3 group" href="#home">
<div className="relative">
<div className="w-10 h-10 lg:w-12 lg:h-12 border border-gold rounded-full flex items-center justify-center group-hover:border-gold-light transition-colors duration-300">
<span className="font-display text-gold text-lg lg:text-xl font-medium tracking-tighter group-hover:text-gold-light transition-colors duration-300">UO</span>
</div>
<div className="absolute -inset-1 border border-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="hidden sm:block">
<span className="font-display text-cream text-lg lg:text-xl tracking-tight">THE URBAN OVEN</span>
<span className="block text-gold-light text-xs tracking-widest uppercase">Ayodhya</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-1">
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#home">
                        Home
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#about">
                        About
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#services">
                        Services
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#menu">
                        Menu
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#rooms">
                        Rooms
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#gallery">
                        Gallery
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#blog">
                        Blog
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="nav-link px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors duration-300 relative group" href="#contact">
                        Contact
                        <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold text-charcoal text-sm font-medium rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20" href="#booking">
                        Book a Table
                    </a>
<button aria-label="Toggle menu" className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group" id="mobileMenuBtn">
<span className="block w-6 h-0.5 bg-cream transition-all duration-300 group-hover:bg-gold hamburger-line-1"></span>
<span className="block w-6 h-0.5 bg-cream transition-all duration-300 group-hover:bg-gold hamburger-line-2"></span>
<span className="block w-4 h-0.5 bg-cream transition-all duration-300 group-hover:bg-gold group-hover:w-6 hamburger-line-3"></span>
</button>
</div>
</div>
</nav>

<div className="lg:hidden fixed inset-0 bg-charcoal/98 backdrop-blur-lg z-50 opacity-0 pointer-events-none transition-all duration-500 transform translate-x-full" id="mobileMenu">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between px-6 h-20">
<span className="font-display text-cream text-xl tracking-tight">THE URBAN OVEN</span>
<button aria-label="Close menu" className="w-10 h-10 flex items-center justify-center" id="closeMobileMenu">
<span className="iconify w-6 h-6 text-cream" data-icon="lucide:x" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<nav className="flex-1 flex flex-col items-center justify-center space-y-6">
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#home">Home</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#about">About</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#services">Services</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#menu">Menu</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#rooms">Rooms</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#gallery">Gallery</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#blog">Blog</a>
<a className="mobile-nav-link text-2xl font-display text-cream hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
</nav>
<div className="p-6">
<a className="mobile-nav-link block w-full py-4 bg-gold text-charcoal text-center font-medium rounded hover:bg-gold-light transition-colors duration-300" href="#booking">
                        Book a Table
                    </a>
</div>
</div>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0" id="heroCanvas"></div>

<div className="absolute inset-0 z-0">
<img alt="Luxury dining" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal"></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warm-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-8 animate-fade-in">
<span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
<span className="text-gold-light text-xs tracking-widest uppercase">Now Open in Ayodhya</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream font-medium tracking-tight leading-tight mb-6 animate-slide-up">
                            Where Culinary
                            <span className="block text-gold">Art Meets Soul</span>
</h1>
<p className="text-cream/70 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
                            Experience the essence of luxury dining at THE URBAN OVEN. Nestled in the sacred city of Ayodhya, we blend contemporary cuisine with timeless hospitality.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
<a className="group inline-flex items-center px-8 py-4 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-1" href="#booking">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:calendar" style={{strokeWidth: '1.5'}}></span>
                                Book a Table
                                <span className="iconify w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="group inline-flex items-center px-8 py-4 border border-cream/30 text-cream font-medium rounded hover:border-gold hover:text-gold transition-all duration-300" href="#menu">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:utensils" style={{strokeWidth: '1.5'}}></span>
                                Explore Menu
                            </a>
</div>

<div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cream/10 animate-slide-up" style={{animationDelay: '0.6s'}}>
<div className="text-center lg:text-left">
<span className="block font-display text-3xl lg:text-4xl text-gold tracking-tight">15+</span>
<span className="text-cream/60 text-sm">Years Experience</span>
</div>
<div className="text-center lg:text-left">
<span className="block font-display text-3xl lg:text-4xl text-gold tracking-tight">50+</span>
<span className="text-cream/60 text-sm">Signature Dishes</span>
</div>
<div className="text-center lg:text-left">
<span className="block font-display text-3xl lg:text-4xl text-gold tracking-tight">4.9</span>
<span className="text-cream/60 text-sm">Guest Rating</span>
</div>
</div>
</div>

<div className="relative hidden lg:flex items-center justify-center">
<div className="relative w-full aspect-square max-w-lg" id="oven3D">

<div className="absolute inset-0 flex items-center justify-center">
<div className="absolute w-full h-full border border-gold/20 rounded-full animate-spin-slow"></div>
<div className="absolute w-4/5 h-4/5 border border-gold/30 rounded-full animate-spin-reverse"></div>
<div className="absolute w-3/5 h-3/5 border border-gold/40 rounded-full animate-spin-slow" style={{animationDuration: '15s'}}></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">

<div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>

<div className="relative w-48 h-48 bg-charcoal-light border-2 border-gold rounded-full flex items-center justify-center">

<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
<div className="w-1 h-8 bg-gradient-to-t from-gold/50 to-transparent rounded-full animate-steam" style={{animationDelay: '0s'}}></div>
<div className="w-1 h-12 bg-gradient-to-t from-gold/50 to-transparent rounded-full animate-steam" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-6 bg-gradient-to-t from-gold/50 to-transparent rounded-full animate-steam" style={{animationDelay: '0.6s'}}></div>
</div>
<div className="text-center">
<span className="iconify w-16 h-16 text-gold" data-icon="lucide:flame" style={{strokeWidth: '1'}}></span>
<span className="block font-display text-gold text-xl tracking-tighter mt-2">URBAN OVEN</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
<a aria-label="Scroll down" className="flex flex-col items-center text-cream/50 hover:text-gold transition-colors duration-300" href="#about">
<span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
<span className="iconify w-5 h-5" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="relative z-10">
<img alt="THE URBAN OVEN Interior - Placeholder" className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl" loading="lazy" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 bg-gold text-charcoal p-6 rounded-lg shadow-xl">
<span className="block font-display text-4xl tracking-tight">15+</span>
<span className="text-sm font-medium">Years of Excellence</span>
</div>
</div>

<div className="absolute top-8 -left-8 w-full h-full border-2 border-gold/20 rounded-lg -z-10"></div>
</div>

<div className="lg:pl-8">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                            Our Story
                        </span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-6">
                            A Legacy of
                            <span className="text-gold">Culinary Excellence</span>
</h2>
<p className="text-cream/70 leading-relaxed mb-6">
                            Born from a passion for authentic flavors and impeccable hospitality, THE URBAN OVEN stands as Ayodhya's premier destination for discerning diners and travelers. Our journey began with a simple vision: to create a space where traditional warmth meets contemporary luxury.
                        </p>
<p className="text-cream/70 leading-relaxed mb-8">
                            Nestled in the heart of the sacred city, we draw inspiration from Ayodhya's rich cultural heritage while embracing modern culinary innovations. Every dish tells a story, every room offers sanctuary, and every moment becomes a cherished memory.
                        </p>

<div className="grid sm:grid-cols-2 gap-6 mb-10">
<div className="flex items-start space-x-4 group">
<div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-6 h-6 text-gold" data-icon="lucide:heart" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-display text-cream text-lg mb-1">Our Mission</h3>
<p className="text-cream/60 text-sm">Crafting unforgettable experiences through exceptional cuisine and heartfelt service.</p>
</div>
</div>
<div className="flex items-start space-x-4 group">
<div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-6 h-6 text-gold" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-display text-cream text-lg mb-1">Our Vision</h3>
<p className="text-cream/60 text-sm">To be the benchmark of luxury hospitality in the sacred land of Ayodhya.</p>
</div>
</div>
</div>
<a className="group inline-flex items-center text-gold hover:text-gold-light transition-colors duration-300" href="#services">
<span className="font-medium">Discover Our Services</span>
<span className="iconify w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal-light relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        What We Offer
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Premium <span className="text-gold">Services</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        From exquisite dining to luxurious accommodations, we offer a complete hospitality experience tailored to your desires.
                    </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="service-card group relative bg-charcoal p-8 rounded-xl border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative">
<div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:utensils-crossed" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl text-cream mb-3 tracking-tight">Fine Dining</h3>
<p className="text-cream/60 text-sm leading-relaxed mb-6">Experience culinary artistry in our elegant dining hall, featuring seasonal menus crafted by master chefs.</p>
<a className="inline-flex items-center text-gold text-sm group-hover:text-gold-light transition-colors duration-300" href="#menu">
                                View Menu
                                <span className="iconify w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="service-card group relative bg-charcoal p-8 rounded-xl border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative">
<div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:wine" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl text-cream mb-3 tracking-tight">Private Dining</h3>
<p className="text-cream/60 text-sm leading-relaxed mb-6">Intimate spaces for special occasions, complete with personalized menus and dedicated service.</p>
<a className="inline-flex items-center text-gold text-sm group-hover:text-gold-light transition-colors duration-300" href="#booking">
                                Book Now
                                <span className="iconify w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="service-card group relative bg-charcoal p-8 rounded-xl border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative">
<div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:party-popper" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl text-cream mb-3 tracking-tight">Events &amp; Banquets</h3>
<p className="text-cream/60 text-sm leading-relaxed mb-6">From weddings to corporate gatherings, our venues and team ensure flawless celebrations.</p>
<a className="inline-flex items-center text-gold text-sm group-hover:text-gold-light transition-colors duration-300" href="#contact">
                                Enquire
                                <span className="iconify w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div className="service-card group relative bg-charcoal p-8 rounded-xl border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative">
<div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:concierge-bell" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl text-cream mb-3 tracking-tight">24/7 Room Service</h3>
<p className="text-cream/60 text-sm leading-relaxed mb-6">Enjoy our full menu from the comfort of your room, available around the clock.</p>
<a className="inline-flex items-center text-gold text-sm group-hover:text-gold-light transition-colors duration-300" href="#rooms">
                                View Rooms
                                <span className="iconify w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden" id="menu">
<div className="absolute inset-0 opacity-5">
<div %3e%3c="" 0="" 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v0h-2v4h-4v2h4v4h2v6h4v4h-4zm6="" 34v-4h4v4h0v2h4v4h2v-4h4v-2h6zm6="" 4v0h4v4h0v2h4v4h2v6h4v4h6z\"="" 60="" 60\"="" className="absolute inset-0" d='\"M36' fill='\"none\"' fillOpacity='\"0.4\"%3E%3Cpath' fill-rule='\"evenodd\"%3E%3Cg' g%3e%3c="" height='\"60\"' style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg width=\'}} svg%3e');"="" viewbox='\"0' xmlns='\"http://www.w3.org/2000/svg\"%3E%3Cg'></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        Our Menu
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Signature <span className="text-gold">Dishes</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        Curated selections from our award-winning kitchen, blending global techniques with local flavors.
                    </p>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<button className="menu-tab active px-6 py-3 bg-gold text-charcoal font-medium rounded-full transition-all duration-300" data-category="starters">Starters</button>
<button className="menu-tab px-6 py-3 bg-cream/10 text-cream hover:bg-gold hover:text-charcoal font-medium rounded-full transition-all duration-300" data-category="mains">Main Course</button>
<button className="menu-tab px-6 py-3 bg-cream/10 text-cream hover:bg-gold hover:text-charcoal font-medium rounded-full transition-all duration-300" data-category="desserts">Desserts</button>
<button className="menu-tab px-6 py-3 bg-cream/10 text-cream hover:bg-gold hover:text-charcoal font-medium rounded-full transition-all duration-300" data-category="beverages">Beverages</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid">

</div>
<div className="text-center mt-12">
<a className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20" href="#booking">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:calendar" style={{strokeWidth: '1.5'}}></span>
                        Reserve Your Table
                    </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal-light relative" id="rooms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        Accommodations
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Luxurious <span className="text-gold">Rooms</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        Rest in refined comfort after your culinary journey. Each room is a sanctuary of elegance.
                    </p>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="group bg-charcoal rounded-xl overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<img alt="Deluxe Room - Placeholder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
<div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded text-sm font-medium">
                                ₹4,999/night
                            </div>
</div>
<div className="p-6">
<h3 className="font-display text-2xl text-cream mb-2 tracking-tight">Deluxe Room</h3>
<p className="text-cream/60 text-sm mb-4">Perfect for solo travelers or couples seeking comfort and style.</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:bed" style={{strokeWidth: '1.5'}}></span>
                                    King Bed
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:wifi" style={{strokeWidth: '1.5'}}></span>
                                    Free WiFi
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:tv" style={{strokeWidth: '1.5'}}></span>
                                    Smart TV
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:snowflake" style={{strokeWidth: '1.5'}}></span>
                                    AC
                                </span>
</div>
<button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal rounded transition-all duration-300" onclick="openRoomBooking('Deluxe Room', 4999)">
                                Book Now
                            </button>
</div>
</div>

<div className="group bg-charcoal rounded-xl overflow-hidden border border-gold/30 transition-all duration-500 relative">
<div className="absolute top-0 left-0 right-0 bg-gold text-charcoal text-center py-2 text-sm font-medium z-10">
                            Most Popular
                        </div>
<div className="relative h-64 overflow-hidden mt-8">
<img alt="Premium Room - Placeholder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
<div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded text-sm font-medium">
                                ₹7,999/night
                            </div>
</div>
<div className="p-6">
<h3 className="font-display text-2xl text-cream mb-2 tracking-tight">Premium Room</h3>
<p className="text-cream/60 text-sm mb-4">Spacious luxury with stunning city views and premium amenities.</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:bed-double" style={{strokeWidth: '1.5'}}></span>
                                    Twin Beds
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:bath" style={{strokeWidth: '1.5'}}></span>
                                    Jacuzzi
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:coffee" style={{strokeWidth: '1.5'}}></span>
                                    Mini Bar
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:mountain" style={{strokeWidth: '1.5'}}></span>
                                    City View
                                </span>
</div>
<button className="w-full py-3 bg-gold text-charcoal hover:bg-gold-light rounded transition-all duration-300 font-medium" onclick="openRoomBooking('Premium Room', 7999)">
                                Book Now
                            </button>
</div>
</div>

<div className="group bg-charcoal rounded-xl overflow-hidden border border-cream/10 hover:border-gold/30 transition-all duration-500">
<div className="relative h-64 overflow-hidden">
<img alt="Royal Suite - Placeholder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
<div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded text-sm font-medium">
                                ₹14,999/night
                            </div>
</div>
<div className="p-6">
<h3 className="font-display text-2xl text-cream mb-2 tracking-tight">Royal Suite</h3>
<p className="text-cream/60 text-sm mb-4">The pinnacle of luxury with private lounge and butler service.</p>
<div className="flex flex-wrap gap-3 mb-6">
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:crown" style={{strokeWidth: '1.5'}}></span>
                                    King Suite
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:sofa" style={{strokeWidth: '1.5'}}></span>
                                    Private Lounge
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:user-check" style={{strokeWidth: '1.5'}}></span>
                                    Butler
                                </span>
<span className="inline-flex items-center text-cream/50 text-xs">
<span className="iconify w-4 h-4 mr-1" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
                                    Spa Access
                                </span>
</div>
<button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal rounded transition-all duration-300" onclick="openRoomBooking('Royal Suite', 14999)">
                                Book Now
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal relative" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        Visual Journey
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Our <span className="text-gold">Gallery</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        A glimpse into the world of THE URBAN OVEN — where every frame tells a story.
                    </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer" onclick="openLightbox(0)">
<img alt="Signature Dish - Placeholder" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer row-span-2" onclick="openLightbox(1)">
<img alt="Restaurant Interior - Placeholder" className="w-full h-full min-h-48 md:min-h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer" onclick="openLightbox(2)">
<img alt="Chef at Work - Placeholder" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer" onclick="openLightbox(3)">
<img alt="Cocktail Bar - Placeholder" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer col-span-2" onclick="openLightbox(4)">
<img alt="Private Dining - Placeholder" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="gallery-item group relative overflow-hidden rounded-lg cursor-pointer" onclick="openLightbox(5)">
<img alt="Dessert Plating - Placeholder" className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="iconify w-8 h-8 text-gold" data-icon="lucide:expand" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</section>

<div aria-label="Image gallery" aria-modal="true" className="fixed inset-0 bg-charcoal/95 z-50 opacity-0 pointer-events-none transition-opacity duration-500 flex items-center justify-center" id="lightbox" role="dialog">
<button aria-label="Close gallery" className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-cream hover:text-gold transition-colors duration-300 z-10" onclick="closeLightbox()">
<span className="iconify w-8 h-8" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
<button aria-label="Previous image" className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream hover:text-gold transition-colors duration-300" onclick="prevImage()">
<span className="iconify w-8 h-8" data-icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></span>
</button>
<button aria-label="Next image" className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream hover:text-gold transition-colors duration-300" onclick="nextImage()">
<span className="iconify w-8 h-8" data-icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="max-w-5xl max-h-[80vh] mx-4">
<img alt="Gallery image" className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" id="lightboxImage" src=""/>
</div>
</div>

<section className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden" id="testimonials">
<div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        Guest Reviews
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        What Our Guests <span className="text-gold">Say</span>
</h2>
</div>

<div className="relative">
<div className="overflow-hidden" id="testimonialCarousel">
<div className="flex transition-transform duration-500 ease-out" id="testimonialTrack">

</div>
</div>

<div className="flex justify-center items-center space-x-4 mt-8">
<button aria-label="Previous testimonial" className="w-12 h-12 border border-cream/20 rounded-full flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors duration-300" onclick="prevTestimonial()">
<span className="iconify w-5 h-5" data-icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="flex space-x-2" id="testimonialDots">

</div>
<button aria-label="Next testimonial" className="w-12 h-12 border border-cream/20 rounded-full flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors duration-300" onclick="nextTestimonial()">
<span className="iconify w-5 h-5" data-icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal relative" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        From Our Kitchen
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Latest <span className="text-gold">Stories</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        Culinary insights, behind-the-scenes moments, and the passion behind every dish.
                    </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogGrid">

</div>

<div className="flex justify-center items-center space-x-2 mt-12" id="blogPagination">

</div>
</div>
</section>

<div aria-modal="true" className="fixed inset-0 bg-charcoal/98 z-50 opacity-0 pointer-events-none transition-opacity duration-500 overflow-y-auto" id="blogModal" role="dialog">
<div className="min-h-screen py-12 px-4">
<div className="max-w-3xl mx-auto">
<button aria-label="Close article" className="fixed top-6 right-6 w-12 h-12 bg-charcoal-light rounded-full flex items-center justify-center text-cream hover:text-gold transition-colors duration-300 z-10" onclick="closeBlogModal()">
<span className="iconify w-6 h-6" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
<div id="blogModalContent">

</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden" id="booking">
<div className="absolute inset-0">
<img alt="Restaurant ambiance" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&amp;q=80"/>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                            Reservations
                        </span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-6">
                            Book Your <span className="text-gold">Experience</span>
</h2>
<p className="text-cream/70 leading-relaxed mb-8">
                            Reserve your table at THE URBAN OVEN and embark on a culinary journey unlike any other. For groups larger than 8, please contact us directly.
                        </p>

<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify w-6 h-6 text-gold" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-cream font-medium mb-1">Call Us</h4>
<a className="text-cream/60 hover:text-gold transition-colors duration-300" href="tel:+919876543210">+91 98765 43210</a>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify w-6 h-6 text-gold" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-cream font-medium mb-1">Opening Hours</h4>
<p className="text-cream/60">Mon - Sun: 7:00 AM - 11:00 PM</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify w-6 h-6 text-gold" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="text-cream font-medium mb-1">Location</h4>
<p className="text-cream/60">Ram Path, Near Saryu Ghat<br/>Ayodhya, Uttar Pradesh 224123</p>
</div>
</div>
</div>
</div>

<div className="bg-charcoal p-8 lg:p-10 rounded-xl border border-cream/10">
<form className="space-y-6" id="bookingForm">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingName">Full Name *</label>
<input className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="bookingName" name="name" placeholder="John Doe" required="" type="text"/>
<span className="text-red-400 text-xs mt-1 hidden" id="bookingNameError">Please enter your name</span>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingEmail">Email *</label>
<input className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="bookingEmail" name="email" placeholder="john@example.com" required="" type="email"/>
<span className="text-red-400 text-xs mt-1 hidden" id="bookingEmailError">Please enter a valid email</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingPhone">Phone *</label>
<input className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="bookingPhone" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
<span className="text-red-400 text-xs mt-1 hidden" id="bookingPhoneError">Please enter a valid phone number</span>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingGuests">Guests *</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer" id="bookingGuests" name="guests" required="">
<option value="">Select guests</option>
<option value="1">1 Guest</option>
<option value="2">2 Guests</option>
<option value="3">3 Guests</option>
<option value="4">4 Guests</option>
<option value="5">5 Guests</option>
<option value="6">6 Guests</option>
<option value="7">7 Guests</option>
<option value="8">8 Guests</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50 pointer-events-none" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingDate">Date *</label>
<input className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300" id="bookingDate" name="date" required="" type="date"/>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingTime">Time *</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer" id="bookingTime" name="time" required="">
<option value="">Select time</option>
<option value="12:00">12:00 PM</option>
<option value="12:30">12:30 PM</option>
<option value="13:00">1:00 PM</option>
<option value="13:30">1:30 PM</option>
<option value="19:00">7:00 PM</option>
<option value="19:30">7:30 PM</option>
<option value="20:00">8:00 PM</option>
<option value="20:30">8:30 PM</option>
<option value="21:00">9:00 PM</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50 pointer-events-none" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingOccasion">Special Occasion</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer" id="bookingOccasion" name="occasion">
<option value="">None</option>
<option value="birthday">Birthday</option>
<option value="anniversary">Anniversary</option>
<option value="business">Business Dinner</option>
<option value="date">Date Night</option>
<option value="other">Other</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/50 pointer-events-none" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="bookingNotes">Special Requests</label>
<textarea className="w-full px-4 py-3 bg-charcoal-light border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 resize-none" id="bookingNotes" name="notes" placeholder="Any dietary restrictions or special requests..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300 flex items-center justify-center space-x-2" type="submit">
<span className="iconify w-5 h-5" data-icon="lucide:calendar-check" style={{strokeWidth: '1.5'}}></span>
<span>Confirm Reservation</span>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-charcoal relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-flex items-center text-gold text-sm tracking-widest uppercase mb-4">
<span className="w-8 h-px bg-gold mr-3"></span>
                        Get In Touch
                        <span className="w-8 h-px bg-gold ml-3"></span>
</span>
<h2 className="font-display text-3xl lg:text-4xl xl:text-5xl text-cream tracking-tight mb-4">
                        Contact <span className="text-gold">Us</span>
</h2>
<p className="text-cream/60 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="bg-charcoal-light p-8 lg:p-10 rounded-xl border border-cream/10">
<form className="space-y-6" id="contactForm">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-cream text-sm mb-2" htmlFor="contactName">Name *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="contactName" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="contactEmail">Email *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="contactEmail" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="contactSubject">Subject *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="contactSubject" name="subject" placeholder="How can we help?" required="" type="text"/>
</div>
<div>
<label className="block text-cream text-sm mb-2" htmlFor="contactMessage">Message *</label>
<textarea className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300 resize-none" id="contactMessage" name="message" placeholder="Your message..." required="" rows="5"></textarea>
</div>
<button className="w-full py-4 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300 flex items-center justify-center space-x-2" type="submit">
<span className="iconify w-5 h-5" data-icon="lucide:send" style={{strokeWidth: '1.5'}}></span>
<span>Send Message</span>
</button>
</form>
</div>

<div className="relative h-96 lg:h-auto rounded-xl overflow-hidden border border-cream/10">

<div className="absolute inset-0 bg-charcoal-light">
<iframe allowfullscreen="" className="w-full h-full border-0 grayscale opacity-70" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28513.36193799!2d82.18!3d26.7922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin" title="THE URBAN OVEN Location Map">
</iframe>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-charcoal/95 backdrop-blur p-6 rounded-lg border border-gold/20">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify w-6 h-6 text-charcoal" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h4 className="font-display text-cream text-lg mb-1">THE URBAN OVEN</h4>
<p className="text-cream/60 text-sm">Ram Path, Near Saryu Ghat<br/>Ayodhya, Uttar Pradesh 224123</p>
<a className="inline-flex items-center text-gold text-sm mt-2 hover:text-gold-light transition-colors duration-300" href="https://maps.google.com/?q=26.7922,82.1998" rel="noopener noreferrer" target="_blank">
                                        Get Directions
                                        <span className="iconify w-4 h-4 ml-1" data-icon="lucide:external-link" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-charcoal border-t border-cream/10 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<a className="flex items-center space-x-3 mb-6" href="#home">
<div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center">
<span className="font-display text-gold text-xl tracking-tighter">UO</span>
</div>
<div>
<span className="block font-display text-cream text-lg tracking-tight">THE URBAN OVEN</span>
<span className="block text-gold-light text-xs tracking-widest uppercase">Ayodhya</span>
</div>
</a>
<p className="text-cream/60 text-sm leading-relaxed mb-6">
                        Where culinary artistry meets timeless hospitality in the sacred city of Ayodhya.
                    </p>
<div className="flex space-x-3">
<a aria-label="Facebook" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal transition-all duration-300" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook" style={{strokeWidth: '1.5'}}></span>
</a>
<a aria-label="Instagram" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal transition-all duration-300" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
<a aria-label="Twitter" className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal transition-all duration-300" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:twitter" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div>
<h4 className="font-display text-cream text-lg mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#about">About Us</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#menu">Our Menu</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#rooms">Rooms</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#gallery">Gallery</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#blog">Blog</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-cream text-lg mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#services">Fine Dining</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#services">Private Events</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#rooms">Room Service</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#contact">Catering</a></li>
<li><a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="#booking">Reservations</a></li>
</ul>
</div>

<div>
<h4 className="font-display text-cream text-lg mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start space-x-3">
<span className="iconify w-5 h-5 text-gold flex-shrink-0 mt-0.5" data-icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></span>
<span className="text-cream/60 text-sm">Ram Path, Near Saryu Ghat<br/>Ayodhya, UP 224123</span>
</li>
<li className="flex items-center space-x-3">
<span className="iconify w-5 h-5 text-gold flex-shrink-0" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
<a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="tel:+919876543210">+91 98765 43210</a>
</li>
<li className="flex items-center space-x-3">
<span className="iconify w-5 h-5 text-gold flex-shrink-0" data-icon="lucide:mail" style={{strokeWidth: '1.5'}}></span>
<a className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm" href="mailto:hello@theurbanoven.com">hello@theurbanoven.com</a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
<p className="text-cream/50 text-sm">
                    © 2024 THE URBAN OVEN, Ayodhya. All rights reserved.
                </p>
<div className="flex space-x-6">
<a className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm" href="#">Privacy Policy</a>
<a className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 bg-charcoal/95 z-50 opacity-0 pointer-events-none transition-opacity duration-500 flex items-center justify-center" id="successModal" role="dialog">
<div className="bg-charcoal-light border border-gold/30 rounded-xl p-8 max-w-md mx-4 text-center transform scale-95 transition-transform duration-300">
<div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="iconify w-10 h-10 text-gold" data-icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-2xl text-cream mb-3 tracking-tight" id="successTitle">Success!</h3>
<p className="text-cream/70 mb-6" id="successMessage">Your reservation has been confirmed. We look forward to welcoming you!</p>
<button className="px-8 py-3 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300" onclick="closeSuccessModal()">
                Close
            </button>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 bg-charcoal/95 z-50 opacity-0 pointer-events-none transition-opacity duration-500 flex items-center justify-center overflow-y-auto" id="roomBookingModal" role="dialog">
<div className="bg-charcoal-light border border-cream/20 rounded-xl p-8 max-w-lg mx-4 my-8">
<div className="flex items-center justify-between mb-6">
<h3 className="font-display text-2xl text-cream tracking-tight">Book <span className="text-gold" id="roomType">Room</span></h3>
<button aria-label="Close" className="w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors duration-300" onclick="closeRoomBooking()">
<span className="iconify w-6 h-6" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<form className="space-y-4" id="roomBookingForm">
<input id="roomTypeInput" name="roomType" type="hidden"/>
<input id="roomPriceInput" name="roomPrice" type="hidden"/>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-cream text-sm mb-2">Check-in *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300" id="roomCheckIn" required="" type="date"/>
</div>
<div>
<label className="block text-cream text-sm mb-2">Check-out *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream focus:border-gold focus:outline-none transition-colors duration-300" id="roomCheckOut" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-cream text-sm mb-2">Guest Name *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="roomGuestName" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-cream text-sm mb-2">Email *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="roomGuestEmail" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-cream text-sm mb-2">Phone *</label>
<input className="w-full px-4 py-3 bg-charcoal border border-cream/20 rounded text-cream placeholder-cream/40 focus:border-gold focus:outline-none transition-colors duration-300" id="roomGuestPhone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div className="pt-4 border-t border-cream/10">
<div className="flex justify-between items-center mb-4">
<span className="text-cream/60">Price per night:</span>
<span className="text-gold font-display text-xl" id="roomPriceDisplay">₹0</span>
</div>
<button className="w-full py-4 bg-gold text-charcoal font-medium rounded hover:bg-gold-light transition-all duration-300" type="submit">
                        Confirm Booking
                    </button>
</div>
</form>
</div>
</div>
<style>
        /* Custom Animations */
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        
        @keyframes steam {
            0%, 100% { 
                opacity: 0; 
                transform: translateY(0) scaleY(1); 
            }
            50% { 
                opacity: 0.8; 
                transform: translateY(-20px) scaleY(1.5); 
            }
        }
        
        .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
            opacity: 0;
            animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
            animation: spin-reverse 25s linear infinite;
        }
        
        .animate-steam {
            animation: steam 2s ease-in-out infinite;
        }
        
        /* Smooth scroll */
        html {
            scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #1A1A1A;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #C9A227;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #E8D5A3;
        }
        
        /* Form input date/select styling */
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.8);
            cursor: pointer;
        }
        
        select option {
            background: #1A1A1A;
            color: #FDF8F3;
        }
        
        /* 3D card hover effect */
        .service-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .service-card:hover {
            transform: translateY(-8px) rotateX(2deg);
        }
        
        /* Header scroll state */
        #header.scrolled {
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(12px);
        }
        
        #header.scrolled .absolute {
            opacity: 0;
        }
    </style>


    </>
  );
}
