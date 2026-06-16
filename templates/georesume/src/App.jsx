import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Thumbnails toggle functionality
      let thumbnailsEnabled = true;

      function toggleThumbnails() {
        const container = document.getElementById('resume-container');
        const toggleText = document.getElementById('thumbnails-toggle-text');

        thumbnailsEnabled = !thumbnailsEnabled;

        if (thumbnailsEnabled) {
          container.classList.add('thumbnails-enabled');
          toggleText.textContent = 'Hide portfolio';
        } else {
          container.classList.remove('thumbnails-enabled');
          toggleText.textContent = 'Show portfolio';
        }
      }

      // Panel content templates
      const panelContent = {
        about: {
          title: 'About Me',
          showFooter: false,
          content: `
            <div class="space-y-6">
              <div class="w-48 h-48 mx-auto">
                <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369297620_10100284904073141_3171073919037120253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0TBgbYFPlBMQ7kNvwHUkjH6&_nc_oc=AdnbnOTrK1wK6mfCdZkn0f6j2e-xoHvjugAVpyvTiG3uNQhXO0RsxRLc2qqJAXSlRNzeNgGaF415hOl6Oe11MnjJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=6sdBuvC5fm8WaBA9ll6mhQ&oh=00_AfmVONjF-ryl4_CmTyfHgCPW8-mL8begs-FZ9FnarjzzlA&oe=694ED5ED" alt="Cory MacVie" class="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity" onclick="openLightbox('https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/369297620_10100284904073141_3171073919037120253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0TBgbYFPlBMQ7kNvwHUkjH6&_nc_oc=AdnbnOTrK1wK6mfCdZkn0f6j2e-xoHvjugAVpyvTiG3uNQhXO0RsxRLc2qqJAXSlRNzeNgGaF415hOl6Oe11MnjJ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=6sdBuvC5fm8WaBA9ll6mhQ&oh=00_AfmVONjF-ryl4_CmTyfHgCPW8-mL8begs-FZ9FnarjzzlA&oe=694ED5ED', 'Cory MacVie')">
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-900 tracking-tight">Cory MacVie</h3>
                <p class="text-sm text-slate-500">Strategic Product Leader</p>
              </div>
              <div class="prose prose-sm text-slate-600">
                <p class="text-sm leading-relaxed">I'm a product leader passionate about building software that solves real problems. With over a decade of experience spanning healthcare compliance, legal tech, and field data collection, I've learned that the best products come from deeply understanding user needs and translating them into elegant solutions.</p>
                <p class="text-sm leading-relaxed mt-4">When I'm not thinking about product strategy, you'll find me exploring new places, diving into a good audiobook, or experimenting with the latest AI tools.</p>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What Drives Me</h4>
                <ul class="space-y-3 text-sm text-slate-600">
                  <li class="flex items-start gap-2">
                    <span class="iconify text-blue-500 mt-0.5 flex-shrink-0" data-icon="lucide:book-open" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I will never stop learning.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:hand" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I won't just work on things that are assigned to me.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-purple-500 mt-0.5 flex-shrink-0" data-icon="lucide:refresh-cw" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I know there's no such thing as a status quo.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-orange-500 mt-0.5 flex-shrink-0" data-icon="lucide:users" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I will never pass up an opportunity to help out a colleague, and I'll remember the days before I knew everything.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-rose-500 mt-0.5 flex-shrink-0" data-icon="lucide:heart" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I am more motivated by impact than money.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-teal-500 mt-0.5 flex-shrink-0" data-icon="lucide:footprints" data-width="16" style="stroke-width: 1.5"></span>
                    <span>I am in a marathon, not a sprint; no matter how far away the goal is, the only way to get there is to put one foot in front of the other every day.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="iconify text-amber-500 mt-0.5 flex-shrink-0" data-icon="lucide:mountain" data-width="16" style="stroke-width: 1.5"></span>
                    <span>Given time, there is no problem that's insurmountable.</span>
                  </li>
                </ul>
              </div>
            </div>
          `
        },
        posts: {
          title: 'Posts',
          showFooter: false,
          content: `
            <div class="space-y-4">
              <p class="text-sm text-slate-500">Thoughts on product, technology, and leadership.</p>
              <div id="posts-container" class="grid grid-cols-1 gap-4">
                <div class="flex items-center justify-center py-8">
                  <span class="iconify animate-spin text-slate-400" data-icon="lucide:loader-2" data-width="24" style="stroke-width: 1.5"></span>
                  <span class="ml-2 text-sm text-slate-500">Loading posts...</span>
                </div>
              </div>
            </div>
          `
        },
        books: {
          title: 'Recent Audibles/Reads',
          showFooter: false,
          content: `
            <div class="space-y-4">
              <p class="text-sm text-slate-500">What I've been reading and listening to lately.</p>
              <div id="books-container" class="grid grid-cols-2 gap-3">
                <div class="col-span-2 flex items-center justify-center py-8">
                  <span class="iconify animate-spin text-slate-400" data-icon="lucide:loader-2" data-width="24" style="stroke-width: 1.5"></span>
                  <span class="ml-2 text-sm text-slate-500">Loading books...</span>
                </div>
              </div>
            </div>
          `
        },
        work: {
          title: 'Work with Me',
          showFooter: true,
          content: `
            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-slate-900 tracking-tight mb-3">Build Your Product With Confidence</h3>
                <p class="text-sm text-slate-600 leading-relaxed">I help founders and teams design, build, and launch software products—from early ideas to production-ready platforms. I specialize in turning complex requirements into simple, usable products.</p>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <h4 class="text-sm font-semibold text-slate-900 mb-3">What I Can Help You Build</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-blue-500 mt-0.5 flex-shrink-0" data-icon="lucide:check" data-width="16" style="stroke-width: 1.5"></span>
                    SaaS, Marketplaces, eCommerce, mobile apps, and internal tools
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-blue-500 mt-0.5 flex-shrink-0" data-icon="lucide:check" data-width="16" style="stroke-width: 1.5"></span>
                    AI-powered products (chat, RAG, automation)
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-blue-500 mt-0.5 flex-shrink-0" data-icon="lucide:check" data-width="16" style="stroke-width: 1.5"></span>
                    Legal, healthcare, culinary, and platforms
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-blue-500 mt-0.5 flex-shrink-0" data-icon="lucide:check" data-width="16" style="stroke-width: 1.5"></span>
                    MVPs, redesigns, and feature expansions
                  </li>
                </ul>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <h4 class="text-sm font-semibold text-slate-900 mb-3">How I Work</h4>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:compass" data-width="16" style="stroke-width: 1.5"></span>
                    Product strategy and scoping
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:palette" data-width="16" style="stroke-width: 1.5"></span>
                    UI/UX design and user flows
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:code" data-width="16" style="stroke-width: 1.5"></span>
                    Technical execution and team leadership
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-600">
                    <span class="iconify text-green-500 mt-0.5 flex-shrink-0" data-icon="lucide:repeat" data-width="16" style="stroke-width: 1.5"></span>
                    Iterative delivery with clear milestones
                  </li>
                </ul>
                <p class="text-sm text-slate-500 mt-3 italic">I focus on outcomes, not just output. You get a product that is usable, scalable, and ready to grow.</p>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <h4 class="text-sm font-semibold text-slate-900 mb-3">Ways to Work Together</h4>
                <div class="space-y-3">
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="iconify text-purple-500" data-icon="lucide:package" data-width="16" style="stroke-width: 1.5"></span>
                      <p class="text-sm font-medium text-slate-900">Project-based builds</p>
                    </div>
                    <p class="text-xs text-slate-500">End-to-end delivery</p>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="iconify text-purple-500" data-icon="lucide:users" data-width="16" style="stroke-width: 1.5"></span>
                      <p class="text-sm font-medium text-slate-900">Fractional product leadership</p>
                    </div>
                    <p class="text-xs text-slate-500">Strategy, execution, and oversight</p>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="iconify text-purple-500" data-icon="lucide:lightbulb" data-width="16" style="stroke-width: 1.5"></span>
                      <p class="text-sm font-medium text-slate-900">Advisory & product audits</p>
                    </div>
                    <p class="text-xs text-slate-500">Direction, clarity, and next steps</p>
                  </div>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <div class="flex items-center gap-2 mb-2">
                  <span class="iconify text-amber-500" data-icon="lucide:clock" data-width="16" style="stroke-width: 1.5"></span>
                  <h4 class="text-sm font-semibold text-slate-900">Availability</h4>
                </div>
                <p class="text-sm text-slate-600">Currently accepting a limited number of new projects.</p>
              </div>
              <div class="pt-4 border-t border-slate-100">
                <h4 class="text-sm font-semibold text-slate-900 mb-2">Let's Talk</h4>
                <p class="text-sm text-slate-600">Have an idea, an MVP, or an existing product that needs improvement?</p>
              </div>
            </div>
          `
        }
      };

      // Lightbox functionality
      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightbox-image');
      const lightboxCaption = document.getElementById('lightbox-caption');
      const lightboxClose = document.getElementById('lightbox-close');

      function openLightbox(imageUrl, caption = '') {
        lightboxImage.src = imageUrl;
        lightboxCaption.textContent = caption;
        lightbox.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
        lightbox.classList.add('opacity-100', 'pointer-events-auto');
      }

      function closeLightbox() {
        lightbox.classList.add('opacity-0', 'pointer-events-none');
        lightbox.classList.remove('opacity-100', 'pointer-events-auto');
        setTimeout(() => {
          lightbox.classList.add('hidden');
          lightboxImage.src = '';
          lightboxCaption.textContent = '';
        }, 300);
      }

      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

      // Work thumbnail click handlers
      document.querySelectorAll('.work-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          const imageUrl = thumb.dataset.image;
          const caption = thumb.dataset.caption || '';
          openLightbox(imageUrl, caption);
        });
      });

      // Escape key to close lightbox
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeLightbox();
        }
      });

      // Slide-out panel functionality
      const slideoutPanel = document.getElementById('slideout-panel');
      const slideoutOverlay = document.getElementById('slideout-overlay');
      const panelTitle = document.getElementById('panel-title');
      const panelContentEl = document.getElementById('panel-content');
      const panelFooter = document.getElementById('panel-footer');
      const closePanel = document.getElementById('close-panel');

      let isPanelOpen = false;

      function openPanel(panelType) {
        const content = panelContent[panelType];
        if (!content) return;

        panelTitle.textContent = content.title;
        panelContentEl.innerHTML = content.content;

        // Show/hide footer based on panel type
        if (content.showFooter) {
          panelFooter.classList.remove('hidden');
          panelContentEl.classList.add('pb-4');
          panelContentEl.classList.remove('pb-32');
        } else {
          panelFooter.classList.add('hidden');
          panelContentEl.classList.remove('pb-4');
          panelContentEl.classList.add('pb-32');
        }

        slideoutPanel.classList.remove('translate-x-full');
        slideoutOverlay.classList.remove('opacity-0', 'pointer-events-none');
        slideoutOverlay.classList.add('opacity-100', 'pointer-events-auto');
        isPanelOpen = true;

        if (panelType === 'posts') {
          fetchMediumPosts();
        }

        if (panelType === 'books') {
          fetchGoodreadsBooks();
        }
      }

      function closePanelFn() {
        slideoutPanel.classList.add('translate-x-full');
        slideoutOverlay.classList.add('opacity-0', 'pointer-events-none');
        slideoutOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        isPanelOpen = false;
      }

      closePanel.addEventListener('click', closePanelFn);
      slideoutOverlay.addEventListener('click', closePanelFn);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isPanelOpen) {
          closePanelFn();
        }
      });

      // Fetch Medium RSS feed
      async function fetchMediumPosts() {
        const postsContainer = document.getElementById('posts-container');

        try {
          const rssUrl = 'https://medium.com/feed/@corymacvie';
          const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

          const response = await fetch(proxyUrl);
          const data = await response.json();

          if (data.status === 'ok' && data.items && data.items.length > 0) {
            const postsHtml = data.items.slice(0, 6).map(item => {
              const pubDate = new Date(item.pubDate);
              const formattedDate = pubDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              });

              const textContent = item.description.replace(/<[^>]+>/g, '');
              const wordCount = textContent.split(/\s+/).length;
              const readTime = Math.max(1, Math.ceil(wordCount / 200));

              const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
              const thumbnail = item.thumbnail || (imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop');

              return `
                <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="block overflow-hidden rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer bg-white">
                  <div class="aspect-video w-full overflow-hidden bg-slate-100">
                    <img src="${thumbnail}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop'">
                  </div>
                  <div class="p-4">
                    <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>${formattedDate}</span>
                      <span>•</span>
                      <span>${readTime} min read</span>
                    </div>
                    <h3 class="text-sm font-medium text-slate-900 mb-1 line-clamp-2">${item.title}</h3>
                    <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">${textContent.substring(0, 100)}...</p>
                  </div>
                </a>
              `;
            }).join('');

            postsContainer.innerHTML = postsHtml;
          } else {
            throw new Error('No posts found');
          }
        } catch (error) {
          postsContainer.innerHTML = `
            <div class="text-center py-6">
              <span class="iconify text-slate-300 mb-3" data-icon="lucide:file-x" data-width="32" style="stroke-width: 1.5"></span>
              <p class="text-sm text-slate-500">Unable to load posts at this time.</p>
              <a href="https://medium.com/@corymacvie" target="_blank" class="text-xs text-blue-600 hover:underline mt-2 inline-block">View on Medium →</a>
            </div>
          `;
        }
      }

      // Fetch Goodreads RSS feed
      async function fetchGoodreadsBooks() {
        const booksContainer = document.getElementById('books-container');

        try {
          const rssUrl = 'https://www.goodreads.com/review/list_rss/6857196?key=X1zehKAV7nSuPJ2I8zn7_v2Ydgut0KVxaLxgZr3MVOpQXwxH&shelf=%23ALL%23';
          const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

          const response = await fetch(proxyUrl);
          const data = await response.json();

          if (data.status === 'ok' && data.items && data.items.length > 0) {
            const booksHtml = data.items.slice(0, 8).map(item => {
              const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
              const coverUrl = imgMatch ? imgMatch[1].replace(/\._\w+_\./, '._SX200_.') : 'https://via.placeholder.com/200x300?text=No+Cover';

              const authorMatch = item.description.match(/author:\s*([^<]+)/i);
              const author = authorMatch ? authorMatch[1].trim() : 'Unknown Author';

              return `
                <a href="${item.link}" target="_blank" class="block overflow-hidden rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-white">
                  <div class="aspect-[2/3] w-full overflow-hidden bg-slate-100">
                    <img src="${coverUrl}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'">
                  </div>
                  <div class="p-3">
                    <h4 class="text-xs font-medium text-slate-900 line-clamp-2 mb-1">${item.title}</h4>
                    <p class="text-xs text-slate-500 line-clamp-1">${author}</p>
                  </div>
                </a>
              `;
            }).join('');

            booksContainer.innerHTML = booksHtml;
          } else {
            throw new Error('No books found');
          }
        } catch (error) {
          booksContainer.innerHTML = `
            <div class="col-span-2 text-center py-6">
              <span class="iconify text-slate-300 mb-3" data-icon="lucide:book-x" data-width="32" style="stroke-width: 1.5"></span>
              <p class="text-sm text-slate-500">Unable to load books at this time.</p>
              <a href="https://www.goodreads.com/user/show/6857196" target="_blank" class="text-xs text-blue-600 hover:underline mt-2 inline-block">View on Goodreads →</a>
            </div>
          `;
        }
      }

      // Initialize map
      const map = L.map('map', {
        zoomControl: false,
        attributionControl: false
      }).setView([37, -115], 5);

      // Add CartoDB Positron tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      // Custom marker icon
      const createMarkerIcon = (isActive = false) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            width: ${isActive ? '20px' : '12px'};
            height: ${isActive ? '20px' : '12px'};
            background: ${isActive ? '#2563eb' : '#64748b'};
            border: ${isActive ? '3px' : '2px'} solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
          "></div>`,
          iconSize: [isActive ? 20 : 12, isActive ? 20 : 12],
          iconAnchor: [isActive ? 10 : 6, isActive ? 10 : 6]
        });
      };

      // Store markers
      const markers = [];

      // Add markers for all events
      const events = document.querySelectorAll('.resume-event');
      events.forEach((event, index) => {
        const lat = parseFloat(event.dataset.lat);
        const lng = parseFloat(event.dataset.lng);
        const title = event.dataset.title;

        if (lat && lng) {
          const marker = L.marker([lat, lng], {
            icon: createMarkerIcon(false)
          }).addTo(map);

          markers.push({ marker, lat, lng, title, element: event });
        }
      });

      // Info card elements
      const infoCard = document.getElementById('info-card');
      const infoPhoto = document.getElementById('info-photo');
      const infoName = document.getElementById('info-name');
      const infoQuote = document.getElementById('info-quote');

      let hideTimeout;

      // Function to calculate offset center for flyTo
      const getOffsetCenter = (lat, lng) => {
        const resumePanelWidth = 580;
        const viewportWidth = window.innerWidth;
        const offsetRatio = resumePanelWidth / viewportWidth / 2;
        const zoom = 10;
        const lngOffset = (360 / Math.pow(2, zoom)) * offsetRatio * 4;
        return [lat, lng - lngOffset];
      };

      // Handle hover events
      events.forEach((event, index) => {
        event.addEventListener('mouseenter', () => {
          clearTimeout(hideTimeout);

          const lat = parseFloat(event.dataset.lat);
          const lng = parseFloat(event.dataset.lng);
          const title = event.dataset.title;
          const photo = event.dataset.photo;
          const name = event.dataset.name;
          const quote = event.dataset.quote;
          const hideQuote = event.dataset.hideQuote === 'true';

          if (!lat || !lng) return;

          const offsetCenter = getOffsetCenter(lat, lng);
          map.flyTo(offsetCenter, 10, {
            duration: 3.5
          });

          markers.forEach((m, i) => {
            if (m.element === event) {
              m.marker.setIcon(createMarkerIcon(true));
            } else {
              m.marker.setIcon(createMarkerIcon(false));
            }
          });

          // Show info card on desktop if hideQuote is not true
          if (window.innerWidth >= 768 && !hideQuote) {
            infoPhoto.src = photo;
            infoName.textContent = name;
            infoQuote.textContent = `"${quote}"`;
            infoCard.style.opacity = '1';
            infoCard.style.transform = 'translateY(0)';
          } else if (hideQuote) {
            infoCard.style.opacity = '0';
            infoCard.style.transform = 'translateY(16px)';
          }

          event.style.backgroundColor = '#f8fafc';
          event.style.boxShadow = '0 0 0 2px #e2e8f0';
        });

        event.addEventListener('mouseleave', () => {
          event.style.backgroundColor = '';
          event.style.boxShadow = '';

          hideTimeout = setTimeout(() => {
            if (window.innerWidth >= 768) {
              infoCard.style.opacity = '0';
              infoCard.style.transform = 'translateY(16px)';
            }
          }, 300);
        });
      });

      infoCard.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
      });

      infoCard.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
          infoCard.style.opacity = '0';
          infoCard.style.transform = 'translateY(16px)';
        }, 300);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full z-0 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" id="map" tabindex="0"></div>

<nav className="fixed md:top-3 md:right-3 lg:top-4 lg:right-4 z-30 hidden md:flex gap-2 bg-white/95 border-slate-200/50 border rounded-xl pt-2 pr-2 pb-2 pl-2 top-2 right-2 shadow-lg backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<button className="nav-btn flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" onclick="openPanel('about')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
<span>About</span>
</button>
<button className="nav-btn flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" onclick="openPanel('posts')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="">Posts</span>
</button>
<button className="nav-btn flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all" onclick="openPanel('books')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Books</span>
</button>
<div className="w-px h-6 bg-slate-200 mx-1"></div>
<button className="flex hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 rounded-lg pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" onclick="openPanel('work')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</g>
</svg>
<span>Work with Me</span>
</button>
</nav>

<div className="fixed inset-0 bg-black/20 z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="slideout-overlay"></div>

<div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-out" id="slideout-panel">
<div className="h-full flex flex-col">

<div className="flex items-center justify-between p-6 border-b border-slate-200">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight" id="panel-title">
            About Me
          </h2>
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" id="close-panel">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 pb-32" id="panel-content"></div>

<div className="hidden border-t border-slate-200 bg-white p-4 space-y-2" id="panel-footer">
<a className="flex items-center justify-center gap-2 w-full p-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all text-sm font-medium" href="https://zcal.co/corymacvie" target="_blank">
<span className="iconify" data-icon="lucide:calendar" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Schedule a Call
          </a>
<div className="flex gap-2 mt-2">
<a className="flex items-center justify-center gap-2 flex-1 p-3 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-all text-sm font-medium" href="mailto:cory@corymacvie.com">
<span className="iconify" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
              Email me
            </a>
<a className="flex items-center justify-center gap-2 flex-1 p-3 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-all text-sm font-medium" href="http://www.linkedin.com/in/macvie" target="_blank">
<span className="iconify" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5'}}></span>
              Connect with me
            </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/90 z-60 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4 md:p-8 hidden" id="lightbox" style={{zIndex: '60'}}>
<button className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10" id="lightbox-close">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="flex flex-col items-center max-w-full max-h-full">
<img alt="Work sample" className="max-w-full max-h-[calc(100vh-120px)] object-contain rounded-lg shadow-2xl" id="lightbox-image" src=""/>
<p className="text-white text-sm mt-4 text-center max-w-lg opacity-80" id="lightbox-caption"></p>
</div>
</div>

<div className="relative z-20 min-h-screen flex items-start justify-start p-2 md:p-3 lg:p-4 thumbnails-enabled" id="resume-container">
<div className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden" style={{maxHeight: 'calc(100vh - 2rem)'}}>

<div className="h-full overflow-y-auto" style={{maxHeight: 'calc(100vh - 2rem)'}}>
<div className="md:p-8 px-6 py-6">

<header className="mb-6 border-b border-slate-200 pb-5">
<div className="flex justify-between items-start mb-1">
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  Cory MacVie
                </h1>

<div className="flex gap-2">
<a className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" href="http://www.linkedin.com/in/macvie" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" href="https://instagram.com/whatsupcory" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" href="http://x.com/corymacvie" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" href="https://github.com/corymacvie" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4m-4-2c.64 1.37 1.98 2 4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
<p className="text-sm text-slate-600 mb-3">
                Strategic Product Leader
              </p>
<div className="flex flex-wrap gap-3 text-xs text-slate-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                  Los Angeles, CA
                </span>
<a className="flex items-center gap-1 hover:text-slate-700 transition-colors" href="mailto:cory@corymacvie.com">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
                  cory@corymacvie.com
                </a>
</div>
</header>

<section className="mb-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Summary
              </h2>
<p className="leading-relaxed text-xs text-slate-600">
                Strategic product leader with extensive experience guiding
                successful SaaS products from concept to market. Skilled in
                translating complex user needs into intuitive, high-ROI
                solutions that drive adoption and retention. Adept at leading
                cross-functional teams through product lifecycles while
                balancing technical constraints, business goals, and customer
                needs.
              </p>
</section>

<section className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Experience
                </h2>

<button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors" id="thumbnails-toggle" onclick="toggleThumbnails()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</g>
</svg>
<span className="" id="thumbnails-toggle-text">
                    Hide portfolio
                  </span>
</button>
</div>
<div className="space-y-4">

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-hide-quote="true" data-lat="40.7757" data-lng="-111.8883" data-name="James Mitchell" data-photo="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&amp;h=80&amp;fit=crop&amp;crop=face" data-quote="Cory is one of the most talented and loyal colleagues I've ever had the chance to work with." data-title="Salt Lake City, UT">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Senior Director of Product - Compliance
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      04/2025 - Current
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.healthicity.com">
                      Healthicity
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li className="">
                      Owns the strategy and roadmap for Healthicity's compliance
                      solutions.
                    </li>
<li className="">
                      Drives customer value, adoption, and differentiation
                      through data and market insight.
                    </li>
<li className="">
                      Partners cross-functionally to improve retention, revenue,
                      and client satisfaction.
                    </li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Salt Lake City, UT
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-hide-quote="true" data-lat="33.7881" data-lng="-118.1560" data-name="David Chen" data-photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;h=80&amp;fit=crop&amp;crop=face" data-quote="Revolutionizing legal research with AI-powered intelligence." data-title="Long Beach, CA">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Head of Product
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      10/2024 - Current
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.compfox.io">
                      CompFox
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li className="">
                      Led end-to-end UI/UX design and managed an offshore
                      engineering team to build and launch CompFox, a legal
                      research and document-generation platform.
                    </li>
<li className="">
                      Implemented LangChain-based AI chat agents to analyze and
                      extract insights from legal documents.
                    </li>
<li className="">
                      Built a pipeline to automate legal document drafting using
                      case law and uploaded files.
                    </li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Long Beach, CA
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="27.7676" data-lng="-82.6403" data-name="Pat Hustad, Peer" data-photo="https://media.licdn.com/dms/image/v2/D5603AQHpPv5zvKEmaQ/profile-displayphoto-shrink_100_100/B56ZarPDKJGoAY-/0/1746629571927?e=1767830400&amp;v=beta&amp;t=XF9zQ3Q8JWB_T9gXyGJWQcOrrYiTWcD6MBKiX-3oPoI" data-quote="Cory is one of the most talented and loyal colleagues I've ever had the chance to work with. His energy and dedication to the team are contagious, and he always finds a way to bring people together to accomplish big goals. When it comes to product, I've never met anyone who can drive growth as fast as he can—he doesn't just build, he transforms companies." data-title="St. Petersburg, FL">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Enterprise Sales Engineer
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      11/2022 - 01/2025
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.fulcrumapp.com">
                      Fulcrum
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li className="">
                      Collaborated with sales and product teams to design
                      customized solutions for enterprise clients
                    </li>
<li className="">
                      Hired and trained all sales engineers across the sales
                      teams
                    </li>
<li className="">
                      Provided technical guidance throughout the sales cycle
                    </li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    St Petersburg, FL
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="27.7676" data-lng="-82.6403" data-name="Chris Brown, Manager" data-photo="https://media.licdn.com/dms/image/v2/D4E03AQE2YIp5kvVBuw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1670385509856?e=1767830400&amp;v=beta&amp;t=QWFdBUNCIk3S-QJwktM4sHIYpPNCNuA-lFenFHoltKc" data-quote="CSM doesn't quite do him justice, as he was quite literally the go-to person for any and all things customer-related. You wanted someone to connect the dots between value and how to execute in the software...Cory was your guy. During his time at Fulcrum, he wore just about every hat you could think of...he is a man of many talents! Cory has his hands in all sorts of things and brought new thoughts and ideas to the team regularly - he was a force multiplier!" data-title="St. Petersburg, FL">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Enterprise Customer Success Manager
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      09/2018 - 11/2022
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.fulcrumapp.com">
                      Fulcrum
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li>
                      Championed clients' success through strong relationships
                      and goal fulfillment
                    </li>
<li>
                      Collaborated across teams to align solutions and guide
                      onboarding
                    </li>
<li>
                      Tracked metrics to suggest optimizations and ensure
                      commitments were met
                    </li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    St Petersburg, FL
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="27.7676" data-lng="-82.6403" data-name="Richards Jacques, Peer" data-photo="https://media.licdn.com/dms/image/v2/D4E03AQEdYaAgMqHPIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725072581713?e=1767830400&amp;v=beta&amp;t=bwE20sJ9t_vXbYdK0e2ZQkhftlFnAmP3NL3iq7l8jaA" data-quote="I was highly impressed with his productivity, positive attitude, and endless curiosity. Cory genuinely cares about the work he does, the people he works with, and the customers he interacts with daily. His tenacity and perspicacity show in the messaging he carefully crafts and the intricate problems he solves each and every day. I highly recommend Cory as a product manager." data-title="St. Petersburg, FL">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Product Manager
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      09/2014 - 09/2018
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.fulcrumapp.com">
                      Fulcrum
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li>
                      Led end-to-end product lifecycle management, from ideation
                      to release
                    </li>
<li>
                      Conducted comprehensive market research and user
                      interviews
                    </li>
<li>
                      Created strategic product roadmaps with 95% on-time
                      delivery
                    </li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    St. Petersburg, FL
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="39.0997" data-lng="-94.5786" data-name="Chris Hartnett, Director" data-photo="https://media.licdn.com/dms/image/v2/D4E03AQEH4hROzKx7YQ/profile-displayphoto-shrink_400_400/B4EZY8hjBZHcAg-/0/1744772149979?e=1767830400&amp;v=beta&amp;t=QVto5yzkWEiWlLMZW7XE0cvNF6eOdhHlPd_wQ854vbY" data-quote="His attention to detail and willingness to go above and beyond were second to none. His talent and understanding of the GIS needs of the State facilitated the development of many viable products still in use today." data-title="Kansas City, KS">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Regional Geospatial Coordinator
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      06/2010 - 09/2014
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">
<a className="hover:text-blue-600 transition-colors" href="http://www.fema.gov">
                      FEMA - Region 7 &amp; 9
                    </a>
</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li>
                      Developed advanced geospatial systems for disaster
                      response
                    </li>
<li>
                      Enhanced regional GIS and remote sensing capabilities
                    </li>
<li>Built strong partnerships with State GIS partners</li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Kansas City, KS
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>

<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="34.2011" data-lng="-118.6015" data-name="Ron Green, Peer" data-photo="https://media.licdn.com/dms/image/v2/C5603AQFEffkVFqt2aQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1523400537598?e=1768435200&amp;v=beta&amp;t=81UEqUe2UT2t1ghj6UuNOL-eEb9q6DJx6hLDDxk286c" data-quote="Cory is possibly the most intelligent, innovative, and motivated person I've ever worked with." data-title="Canoga Park, CA">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Specialist &amp; Genius Bar Technician
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      08/2008 - 05/2011
                    </span>
</div>
<p className="text-sm text-slate-600 mb-1.5">Apple</p>
<ul className="text-xs text-slate-500 leading-relaxed space-y-1 list-disc list-inside">
<li>
                      Achieved top sales associate status for computers and
                      mobile devices
                    </li>
<li>
                      Developed and delivered effective training to diverse
                      audiences
                    </li>
<li>Resolved technical challenges under tight deadlines</li>
</ul>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Canoga Park, CA
                  </div>
<div className="work-thumbnails flex gap-2">
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=100&amp;h=100&amp;fit=crop"/>
</button>
<button className="work-thumbnail w-12 h-12 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors" data-caption="Work sample" data-image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&amp;h=600&amp;fit=crop">
<img alt="Work sample" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>
</div>
</section>

<section className="mb-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Education
              </h2>
<div className="space-y-4">
<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-lat="34.0511" data-lng="-117.2633" data-name="Don Gaede, DrPH, Professor" data-photo="https://media.licdn.com/dms/image/v2/C4E03AQHenjh-j9Kn0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517682233830?e=1767830400&amp;v=beta&amp;t=rQBrgxu3t7DavITd2uCSZp0EtYMsIgijsx9LoMvNWYg" data-quote="He is bright, articulate and creative. He is also very honest and open and will give you a very honest assessment of what he is willing to take on. I have truly enjoyed working with him in our classes." data-title="Loma Linda, CA">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Global Health | MPH
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      2006 - 2008
                    </span>
</div>
<p className="text-sm text-slate-600">Loma Linda University</p>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Loma Linda, CA
                  </div>
</div>
<div className="resume-event cursor-pointer p-2.5 -mx-2.5 rounded-lg transition-all hover:bg-slate-50" data-hide-quote="true" data-lat="33.9292" data-lng="-117.4254" data-name="Prof. Daniel Wright" data-photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;h=80&amp;fit=crop&amp;crop=face" data-quote="Building a foundation of purpose-driven leadership." data-title="Riverside, CA">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900">
                      Theology | BAT
                    </h3>
<span className="text-xs text-slate-400 whitespace-nowrap ml-3">
                      2002 - 2006
                    </span>
</div>
<p className="text-sm text-slate-600">
                    California Baptist University
                  </p>
<div className="flex items-center gap-1 mt-1.5 text-xs text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                    Riverside, CA
                  </div>
</div>
</div>
</section>

<section className="mb-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Strengths
              </h2>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Owner Attitude
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Business Development
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Strategic Thinker
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Strong Communicator
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Detail-oriented
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Creative Problem Solver
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Data-driven
                </span>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  Team Player
                </span>
</div>
</section>

<section className="pb-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Tools
              </h2>
<div className="space-y-2 text-xs text-slate-600">
<p>
<span className="font-medium text-slate-700">Product:</span>
                  Jira, Confluence, Github, GitLab, Linear, Pendo, Mixpanel,
                  Amplitude, AWS, Google Cloud
                </p>
<p>
<span className="font-medium text-slate-700">Design:</span>
                  Figma, Framer, Adobe Suite, Radix
                </p>
<p>
<span className="font-medium text-slate-700">AI:</span>
                  LangChain Framework
                </p>
<p>
<span className="font-medium text-slate-700">Sales:</span>
                  Salesforce, Hubspot CRM, Outreach, LinkedIn Sales Navigator
                </p>
<p>
<span className="font-medium text-slate-700">Analytics:</span>
                  Tableau, Power BI, Looker
                </p>
</div>
</section>
</div>
</div>
</div>
</div>

<div className="fixed z-30 hidden md:block bottom-3 lg:bottom-4 opacity-0 transition-all duration-500 transform translate-y-4" id="info-card" style={{left: 'calc(38.25rem)', right: '1rem', maxWidth: '400px', opacity: '0', transform: 'translateY(16px)'}}>
<div className="bg-white rounded-xl shadow-2xl p-4 border border-slate-200/50">

<div className="flex items-end gap-3">

<img alt="Profile" className="w-8 h-8 rounded-full object-cover flex-shrink-0" id="info-photo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="flex-1">
<p className="text-xs font-medium text-slate-500 mb-1.5" id="info-name">
              Pat Hustad, Peer
            </p>
<div className="bg-slate-100 rounded-2xl px-4 py-3">
<p className="text-xs text-slate-600 leading-relaxed" id="info-quote">
                "Cory is one of the most talented and loyal colleagues I've ever
                had the chance to work with. His energy and dedication to the
                team are contagious, and he always finds a way to bring people
                together to accomplish big goals. When it comes to product, I've
                never met anyone who can drive growth as fast as he can—he
                doesn't just build, he transforms companies."
              </p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
