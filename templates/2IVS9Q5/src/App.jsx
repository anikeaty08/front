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
      
    // --- Data --- //
    const categories = [
      {
        id: 'travel', name: 'Travel', color: 'bg-blue-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><path d="M10.5 21.5l-8-8 6-6 8 8-6 6zm10.5-10.5l-6-6-8 8 6 6 8-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 1, name: 'Booking.com', commission: '25%', description: 'Leading hotel booking platform with global reach and high conversion rates.' },
          { id: 2, name: 'Expedia', commission: '4-7%', description: 'Comprehensive travel booking site for flights, hotels, and vacation packages.' },
          { id: 3, name: 'Airbnb', commission: '$15-75', description: 'Unique accommodation platform connecting travelers with local hosts worldwide.' }
        ]
      },
      {
        id: 'technology', name: 'Technology', color: 'bg-purple-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="12" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21h-8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 4, name: 'NordVPN', commission: '30%', description: 'Premium VPN service with strong security features and global server network.' },
          { id: 5, name: 'Shopify', commission: '200%', description: 'Leading e-commerce platform for building and managing online stores.' },
          { id: 6, name: 'Adobe Creative Cloud', commission: '85%', description: 'Professional creative software suite for designers and content creators.' }
        ]
      },
      {
        id: 'finance', name: 'Finance', color: 'bg-green-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8v8m-4-4h8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 7, name: 'eToro', commission: '$600', description: 'Social trading platform for stocks, crypto, and commodities investment.' },
          { id: 8, name: 'Coinbase', commission: '$10', description: 'Leading cryptocurrency exchange platform with user-friendly interface.' },
          { id: 9, name: 'Personal Capital', commission: '$100', description: 'Comprehensive financial planning and wealth management tools.' }
        ]
      },
      {
        id: 'wellness', name: 'Wellness', color: 'bg-pink-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.5 3 12 5 12 5C12 5 12.5 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 10, name: 'Headspace', commission: '50%', description: 'Popular meditation and mindfulness app with guided sessions.' },
          { id: 11, name: 'MyFitnessPal', commission: '25%', description: 'Comprehensive fitness and nutrition tracking application.' },
          { id: 12, name: 'Calm', commission: '30%', description: 'Sleep and meditation app with relaxing content and stories.' }
        ]
      },
      {
        id: 'skincare', name: 'Skin Care', color: 'bg-orange-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0112 21c-5 0-9-4-9-9S7 3 12 3a9 9 0 019 9.79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7v5l3 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 13, name: 'The Ordinary', commission: '15%', description: 'Affordable, science-based skincare products with transparent ingredients.' },
          { id: 14, name: 'Glossier', commission: '10%', description: 'Modern beauty brand focused on natural, effortless skincare and makeup.' },
          { id: 15, name: "Paula's Choice", commission: '20%', description: 'Research-backed skincare solutions for various skin concerns.' }
        ]
      },
      {
        id: 'ai-tools', name: 'AI Tools', color: 'bg-indigo-500',
        icon: `<svg width="32" height="32" fill="none" stroke="currentColor" class="mx-auto" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        programs: [
          { id: 16, name: 'ChatGPT Plus', commission: '30%', description: 'Advanced AI assistant for writing, coding, and creative tasks.' },
          { id: 17, name: 'Midjourney', commission: '25%', description: 'AI-powered image generation tool for creative professionals.' },
          { id: 18, name: 'Jasper AI', commission: '30%', description: 'AI writing assistant for marketing content and copywriting.' }
        ]
      }
    ];

    const blogArticles = [
      {
        id: 1,
        title: 'Top 10 High-Converting Affiliate Programs for 2025',
        excerpt: 'Discover the most profitable affiliate programs that are driving serious revenue for marketers this year.',
        date: '2025-06-10',
        author: 'Sarah Johnson',
        category: 'Strategy',
        content: 'In the ever-evolving world of affiliate marketing, finding programs that convert well is crucial for success. This comprehensive guide explores the top-performing affiliate programs across various niches, analyzing their commission structures, conversion rates, and earning potential. From technology giants to emerging fintech platforms, we have compiled data-driven insights to help you make informed decisions about which programs to promote.'
      },
      {
        id: 2,
        title: 'How to Optimize Your Affiliate Links for Maximum Conversions',
        excerpt: 'Learn proven strategies to increase your click-through rates and boost your affiliate earnings.',
        date: '2025-06-08',
        author: 'Mike Chen',
        category: 'Optimization',
        content: 'Link optimization is often overlooked but can dramatically impact your affiliate earnings. This article covers advanced techniques including strategic placement, compelling call-to-actions, A/B testing methodologies, and tracking analytics. We will also explore how to build trust with your audience while maintaining transparency about affiliate relationships.'
      },
      {
        id: 3,
        title: 'Building Trust: The Key to Successful Affiliate Marketing',
        excerpt: 'Why authenticity and transparency are essential for long-term affiliate marketing success.',
        date: '2025-06-05',
        author: 'Emma Rodriguez',
        category: 'Trust Building',
        content: 'Trust is the foundation of successful affiliate marketing. This in-depth analysis explores how to build genuine relationships with your audience, maintain transparency about affiliate partnerships, and create content that provides real value. We will discuss disclosure best practices, authentic product reviews, and strategies for maintaining credibility in a competitive market.'
      }
    ];

    // --- State --- //
    let view = 'home'; // can be: home, programs-page, blog-page, category, program, article, contact, help-center, privacy-policy, terms-of-service
    let selectedCategory = null; // category object
    let selectedProgram = null; // program object
    let selectedArticle = null; // article object

    // --- DOM Utilities --- //
    function $(sel) { return document.querySelector(sel); }
    function $all(sel) { return Array.from(document.querySelectorAll(sel)); }
    function escapeHTML(str) { return (str+"").replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }

    // --- Rendering Functions --- //
    function renderHome() {
      $('#hero-section').classList.remove('hidden');
      $('#dynamic-sections').innerHTML = `
      <section class="mb-20" id="programs">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Affiliate Program Categories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore our carefully curated selection of high-paying affiliate programs across diverse industries. Each category contains verified programs with proven track records and competitive commission structures.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${categories.map(cat => `
            <div class="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="${cat.id}">
              <div class="inline-flex p-4 rounded-2xl ${cat.color} text-white mb-6">${cat.icon}</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">${cat.name}</div>
              <div class="text-gray-600 mb-8">${cat.programs.length} premium programs available</div>
              <button class="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          `).join('')}
        </div>
      </section>
      <section class="mb-20" id="blog">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Insights & Strategies</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Stay ahead of the curve with expert insights, proven strategies, and the latest trends in affiliate marketing. Learn from successful marketers and optimize your campaigns.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${blogArticles.map(article => `
            <div class="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col" data-article="${article.id}">
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  ${new Date(article.date).toLocaleDateString()}
                </div>
                <span class="bg-gray-100 text-gray-700 rounded px-2">${escapeHTML(article.category)}</span>
              </div>
              <div class="text-xl font-bold text-gray-900 mb-4 leading-tight">${escapeHTML(article.title)}</div>
              <div class="text-gray-600 leading-relaxed mb-8">${escapeHTML(article.excerpt)}</div>
              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20v-2a4 4 0 1 1 8 0v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  ${escapeHTML(article.author)}
                </div>
                <button class="read-more-btn text-blue-600 hover:text-blue-700 flex items-center font-semibold">Read More<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
      <section class="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Up-to-Date!</h2>
        <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay up to date with the latest affiliate programs, opportunities, and expert insights delivered straight to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" placeholder="Enter your email address..." class="flex-1 max-w-sm px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
          <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Subscribe Now</button>
        </div>
      </section>
      `;
    }

    function renderProgramsPage() {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Home</button>
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All Affiliate Program Categories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore our carefully curated selection of high-paying affiliate programs across diverse industries. Each category contains verified programs with proven track records and competitive commission structures.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${categories.map(cat => `
            <div class="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="${cat.id}">
              <div class="inline-flex p-4 rounded-2xl ${cat.color} text-white mb-6">${cat.icon}</div>
              <div class="text-2xl font-bold text-gray-900 mb-4">${cat.name}</div>
              <div class="text-gray-600 mb-8">${cat.programs.length} premium programs available</div>
              <button class="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }

    function renderCategoryPage(category) {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Categories</button>
        <div class="text-center mb-16">
          <div class="inline-flex p-4 rounded-2xl ${category.color} text-white mb-6">${category.icon}</div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${escapeHTML(category.name)} Programs</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Explore the best affiliate programs in the ${escapeHTML(category.name)} industry. All programs are handpicked for high payouts, reliability, and proven results.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          ${category.programs.map(program => `
            <div class="cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col border border-gray-100" data-prog="${program.id}">
              <div class="flex justify-between items-center mb-6">
                <div class="text-2xl font-bold text-gray-900">${escapeHTML(program.name)}</div>
                <span class="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-1 rounded-full">${escapeHTML(program.commission)} commission</span>
              </div>
              <div class="text-gray-600 mb-6">${escapeHTML(program.description)}</div>
              <button class="view-program-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold mt-auto">
                Learn More
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }

    function renderProgramPage(category, program) {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to ${escapeHTML(category.name)}</button>
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">
          <div class="inline-flex p-4 rounded-2xl ${category.color} text-white mb-6">${category.icon}</div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">${escapeHTML(program.name)}</h2>
          <span class="inline-block bg-blue-50 text-blue-700 text-md font-medium px-4 py-1 rounded-full mb-6">${escapeHTML(category.name)} Program</span>
          <div class="text-lg text-gray-600 mb-8">${escapeHTML(program.description)}</div>
          <div class="flex flex-col items-center gap-2 mb-8">
            <span class="text-2xl font-bold text-green-600">${escapeHTML(program.commission)} <span class="text-base font-normal text-gray-500">commission</span></span>
            <span class="text-gray-500">Payouts are verified and updated regularly.</span>
          </div>
          <button class="join-program-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg transition-all">Join Program Now<svg class="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="mt-8 text-gray-400 text-sm">* Actual commissions and terms may vary. Please review the program's site for the latest details.</div>
        </div>
      `;
    }

    function renderBlogPage() {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Home</button>
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Insights & Strategies</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Stay ahead of the curve with expert insights, proven strategies, and the latest trends in affiliate marketing. Learn from successful marketers and optimize your campaigns.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${blogArticles.map(article => `
            <div class="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col" data-article="${article.id}">
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  ${new Date(article.date).toLocaleDateString()}
                </div>
                <span class="bg-gray-100 text-gray-700 rounded px-2">${escapeHTML(article.category)}</span>
              </div>
              <div class="text-xl font-bold text-gray-900 mb-4 leading-tight">${escapeHTML(article.title)}</div>
              <div class="text-gray-600 leading-relaxed mb-8">${escapeHTML(article.excerpt)}</div>
              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20v-2a4 4 0 1 1 8 0v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  ${escapeHTML(article.author)}
                </div>
                <button class="read-more-btn text-blue-600 hover:text-blue-700 flex items-center font-semibold">Read More<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    function renderArticlePage(article) {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Blog</button>
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <div class="mb-6 flex items-center gap-4 text-sm text-gray-500">
            <div class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${new Date(article.date).toLocaleDateString()}
            </div>
            <span class="bg-gray-100 text-gray-700 rounded px-2">${escapeHTML(article.category)}</span>
            <div class="flex items-center gap-2 text-sm text-gray-500 ml-auto">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 20v-2a4 4 0 1 1 8 0v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${escapeHTML(article.author)}
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">${escapeHTML(article.title)}</h2>
          <div class="prose max-w-none text-gray-700 text-lg leading-relaxed">${escapeHTML(article.content)}</div>
        </div>
      `;
    }

    function renderContactPage() {
      $('#hero-section').classList.add('hidden');
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Home</button>
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p class="text-gray-600 mb-8">Have questions, partnership inquiries, or need support? Fill out the form below and our team will get back to you promptly.</p>
          <form class="space-y-6" id="contact-form">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="name">Name</label>
              <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="email">Email</label>
              <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1" for="message">Message</label>
              <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-bold text-lg shadow-lg transition-all">Send Message</button>
          </form>
          <div id="contact-success" class="hidden mt-8 text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>
        </div>
      `;
    }

    function renderPolicyPage(type) {
      $('#hero-section').classList.add('hidden');
      let title = '', content = '';
      if (type === 'help-center') {
        title = 'Help Center';
        content = 'Welcome to our Help Center. For any questions about affiliate programs, troubleshooting, or partnership opportunities, please contact our support team using the Contact page.';
      } else if (type === 'privacy-policy') {
        title = 'Privacy Policy';
        content = 'We value your privacy. All data submitted to Bridge2Affiliate is treated with care and is never sold or shared with third parties. For more info, contact our support.';
      } else if (type === 'terms-of-service') {
        title = 'Terms of Service';
        content = 'By using Bridge2Affiliate, you agree to our terms: all information is for educational purposes only and not financial advice. Affiliate programs may change at any time.';
      }
      $('#dynamic-sections').innerHTML = `
        <button class="back-btn mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to Home</button>
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">${title}</h2>
          <div class="prose max-w-none text-gray-700 text-lg leading-relaxed">${content}</div>
        </div>
      `;
    }

    // --- Navigation Logic --- //
    function setView(newView, options = {}) {
      view = newView;
      selectedCategory = options.category || null;
      selectedProgram = options.program || null;
      selectedArticle = options.article || null;

      if (view === 'home') renderHome();
      else if (view === 'programs-page') renderProgramsPage();
      else if (view === 'category' && selectedCategory) renderCategoryPage(selectedCategory);
      else if (view === 'program' && selectedCategory && selectedProgram) renderProgramPage(selectedCategory, selectedProgram);
      else if (view === 'blog-page') renderBlogPage();
      else if (view === 'article' && selectedArticle) renderArticlePage(selectedArticle);
      else if (view === 'contact') renderContactPage();
      else if (['help-center','privacy-policy','terms-of-service'].includes(view)) renderPolicyPage(view);
      else renderHome();

      attachDynamicEventListeners();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Event Attachments --- //
    function attachDynamicEventListeners() {
      // Category cards
      $all('[data-cat]').forEach(el => {
        el.onclick = () => {
          const cat = categories.find(c => c.id === el.getAttribute('data-cat'));
          setView('category', { category: cat });
        };
      });
      // Program cards in category view
      $all('[data-prog]').forEach(el => {
        el.onclick = () => {
          const progId = parseInt(el.getAttribute('data-prog'), 10);
          const cat = selectedCategory || categories.find(c => c.programs.some(p => p.id === progId));
          const prog = cat.programs.find(p => p.id === progId);
          setView('program', { category: cat, program: prog });
        };
      });
      // Blog article cards
      $all('[data-article]').forEach(el => {
        el.onclick = () => {
          const article = blogArticles.find(a => a.id === parseInt(el.getAttribute('data-article'), 10));
          setView('article', { article });
        };
      });
      // Read more buttons (blog cards)
      $all('.read-more-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const card = btn.closest('[data-article]');
          if (!card) return;
          const article = blogArticles.find(a => a.id === parseInt(card.getAttribute('data-article'), 10));
          setView('article', { article });
        };
      });
      // View details buttons (category cards)
      $all('.view-details-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const card = btn.closest('[data-cat]');
          if (!card) return;
          const cat = categories.find(c => c.id === card.getAttribute('data-cat'));
          setView('category', { category: cat });
        };
      });
      // View program buttons
      $all('.view-program-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const card = btn.closest('[data-prog]');
          if (!card) return;
          const progId = parseInt(card.getAttribute('data-prog'), 10);
          const cat = selectedCategory || categories.find(c => c.programs.some(p => p.id === progId));
          const prog = cat.programs.find(p => p.id === progId);
          setView('program', { category: cat, program: prog });
        };
      });
      // Join program button (for demo - open external site?)
      $all('.join-program-btn').forEach(btn => {
        btn.onclick = () => {
          alert('You will be redirected to the official affiliate program sign-up page (demo).');
        };
      });
      // Back buttons
      $all('.back-btn').forEach(btn => {
        btn.onclick = () => {
          if (view === 'program') setView('category', { category: selectedCategory });
          else if (view === 'category') setView('programs-page');
          else if (view === 'programs-page' || view === 'blog-page' || view === 'contact') setView('home');
          else if (view === 'article') setView('blog-page');
          else if (['help-center','privacy-policy','terms-of-service'].includes(view)) setView('home');
        };
      });
      // Footer navigation and nav bar links
      $all('.footer-link, .nav-link, .action-btn').forEach(link => {
        link.onclick = (e) => {
          e.preventDefault();
          const section = link.getAttribute('data-section');
          if (section === 'programs-page') setView('programs-page');
          else if (section === 'blog-page') setView('blog-page');
          else if (section === 'contact') setView('contact');
          else if (['help-center','privacy-policy','terms-of-service'].includes(section)) setView(section);
        };
      });
      // Logo click returns home
      $all('#nav-logo, #footer-logo').forEach(logo => {
        logo.onclick = () => setView('home');
      });
      // Contact form
      if ($('#contact-form')) {
        $('#contact-form').onsubmit = function(e) {
          e.preventDefault();
          this.reset();
          $('#contact-success').classList.remove('hidden');
        };
      }
    }

    // --- Mobile Menu Toggle --- //
    const menuBtn = $('#mobile-menu-btn');
    if (menuBtn) {
      menuBtn.onclick = () => {
        const menu = $('#mobile-menu');
        const openIcon = $('#menu-open-icon');
        const closeIcon = $('#menu-close-icon');
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          openIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
        } else {
          menu.classList.add('hidden');
          openIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      };
    }
    // Hide mobile menu on nav click
    $all('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          $('#mobile-menu').classList.add('hidden');
          $('#menu-open-icon').classList.remove('hidden');
          $('#menu-close-icon').classList.add('hidden');
        }
      });
    });

    // Initial render
    setView('home');
  
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
      

<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center">
<img alt="Bridge2Affiliate Logo" className="h-10 cursor-pointer mr-3" id="nav-logo" src="https://i.imgur.com/EK9l12M.png"/>
<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bridge2Affiliate
          </h1>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-4">
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" data-section="programs-page" href="#">Programs</a>
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" data-section="blog-page" href="#">Blog</a>
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors" data-section="contact" href="#">Contact</a>
</div>
</div>
<div className="md:hidden">
<button className="p-2 rounded-full focus:outline-none hover:bg-gray-100" id="mobile-menu-btn">
<svg className="h-6 w-6 block" fill="none" id="menu-open-icon" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-6 w-6 hidden" fill="none" id="menu-close-icon" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
<a className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600" data-section="programs-page" href="#">Programs</a>
<a className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600" data-section="blog-page" href="#">Blog</a>
<a className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600" data-section="contact" href="#">Contact</a>
</div>
</div>
</nav>

<div className="" id="main-content">

<section className="relative py-20 px-4 sm:px-6 lg:px-8" id="hero-section">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 16l4-9 5 9 5-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          Discover High-Paying Opportunities
        </div>
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Earn More with
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
            Premium Affiliate Programs
          </span>
</h1>
<p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Access curated, high-converting affiliate programs across multiple industries. 
          From travel and technology to finance and wellness, find the perfect programs 
          to maximize your earning potential with transparent commission structures and proven performance.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="action-btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg font-semibold flex items-center justify-center" data-section="programs-page">
            Explore Programs
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="action-btn border-2 border-gray-300 hover:border-blue-600 px-8 py-3 text-lg rounded-lg font-semibold flex items-center justify-center" data-section="blog-page">
            Read Success Stories
          </button>
</div>
</div>
</section>

<div className="" id="dynamic-sections">
<section className="mb-20" id="programs">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Affiliate Program Categories</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our carefully curated selection of high-paying affiliate programs across diverse industries. Each category contains verified programs with proven track records and competitive commission structures.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="travel">
<div className="inline-flex p-4 rounded-2xl bg-blue-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><path d="M10.5 21.5l-8-8 6-6 8 8-6 6zm10.5-10.5l-6-6-8 8 6 6 8-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">Travel</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="technology">
<div className="inline-flex p-4 rounded-2xl bg-purple-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><rect height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="7"></rect><path d="M16 21h-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">Technology</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="finance">
<div className="inline-flex p-4 rounded-2xl bg-green-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 8v8m-4-4h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">Finance</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="wellness">
<div className="inline-flex p-4 rounded-2xl bg-pink-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.5 3 12 5 12 5C12 5 12.5 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">Wellness</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="skincare">
<div className="inline-flex p-4 rounded-2xl bg-orange-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><path d="M21 12.79A9 9 0 0112 21c-5 0-9-4-9-9S7 3 12 3a9 9 0 019 9.79" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">Skin Care</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col items-center" data-cat="ai-tools">
<div className="inline-flex p-4 rounded-2xl bg-indigo-500 text-white mb-6"><svg className="mx-auto" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-2xl font-bold text-gray-900 mb-4">AI Tools</div>
<div className="text-gray-600 mb-8">3 premium programs available</div>
<button className="view-details-btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg flex items-center justify-center font-semibold">
                View Details
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>
<section className="mb-20" id="blog">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Insights &amp; Strategies</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay ahead of the curve with expert insights, proven strategies, and the latest trends in affiliate marketing. Learn from successful marketers and optimize your campaigns.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col" data-article="1">
<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
<div className="flex items-center gap-1">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="4"></rect></svg>
                  10/06/2025
                </div>
<span className="bg-gray-100 text-gray-700 rounded px-2">Strategy</span>
</div>
<div className="text-xl font-bold text-gray-900 mb-4 leading-tight">Top 10 High-Converting Affiliate Programs for 2025</div>
<div className="text-gray-600 leading-relaxed mb-8">Discover the most profitable affiliate programs that are driving serious revenue for marketers this year.</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2 text-sm text-gray-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M6 20v-2a4 4 0 1 1 8 0v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Sarah Johnson
                </div>
<button className="read-more-btn text-blue-600 hover:text-blue-700 flex items-center font-semibold">Read More<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col" data-article="2">
<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
<div className="flex items-center gap-1">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="4"></rect></svg>
                  08/06/2025
                </div>
<span className="bg-gray-100 text-gray-700 rounded px-2">Optimization</span>
</div>
<div className="text-xl font-bold text-gray-900 mb-4 leading-tight">How to Optimize Your Affiliate Links for Maximum Conversions</div>
<div className="text-gray-600 leading-relaxed mb-8">Learn proven strategies to increase your click-through rates and boost your affiliate earnings.</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2 text-sm text-gray-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M6 20v-2a4 4 0 1 1 8 0v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Mike Chen
                </div>
<button className="read-more-btn text-blue-600 hover:text-blue-700 flex items-center font-semibold">Read More<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
<div className="cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 rounded-2xl p-8 flex flex-col" data-article="3">
<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
<div className="flex items-center gap-1">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="4"></rect></svg>
                  05/06/2025
                </div>
<span className="bg-gray-100 text-gray-700 rounded px-2">Trust Building</span>
</div>
<div className="text-xl font-bold text-gray-900 mb-4 leading-tight">Building Trust: The Key to Successful Affiliate Marketing</div>
<div className="text-gray-600 leading-relaxed mb-8">Why authenticity and transparency are essential for long-term affiliate marketing success.</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2 text-sm text-gray-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M6 20v-2a4 4 0 1 1 8 0v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Emma Rodriguez
                </div>
<button className="read-more-btn text-blue-600 hover:text-blue-700 flex items-center font-semibold">Read More<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
</div>
</div>
</section>
<section className="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-xl text-center">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Up-to-Date!</h2>
<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Stay up to date with the latest affiliate programs, opportunities, and expert insights delivered straight to your inbox.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-sm px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your email address..." type="email"/>
<button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold">Subscribe Now</button>
</div>
</section>
</div>
</div>

<footer className="bg-gray-900 text-white py-16 mt-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<img alt="Bridge2Affiliate Logo" className="h-10 mb-4 cursor-pointer" id="footer-logo" src="https://i.imgur.com/EK9l12M.png"/>
<p className="text-gray-400 mb-6 max-w-md">
            Your trusted partner in affiliate marketing success. Discover high-paying programs, 
            learn proven strategies, and maximize your earning potential.
          </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white" href="https://twitter.com" rel="noopener noreferrer" target="_blank"><svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M19.633 7.997c.013.176.013.353.013.53C19.646 14 15.504 21 7.548 21a12.98 12.98 0 0 1-7.006-2.048c.254.029.508.042.763.042a9.192 9.192 0 0 0 5.72-1.97 4.59 4.59 0 0 1-4.284-3.18c.286.055.574.085.872.085.418 0 .836-.056 1.223-.162a4.585 4.585 0 0 1-3.675-4.492v-.057a4.567 4.567 0 0 0 2.072.577 4.582 4.582 0 0 1-2.043-3.813c0-.841.225-1.626.617-2.302a13.024 13.024 0 0 0 9.445 4.792 5.19 5.19 0 0 1-.113-1.048 4.587 4.587 0 0 1 7.942-4.183 9.142 9.142 0 0 0 2.905-1.11 4.573 4.573 0 0 1-2.017 2.526A9.23 9.23 0 0 0 24 5.53a9.86 9.86 0 0 1-2.367 2.467z"></path></svg></a>
<a className="text-gray-400 hover:text-white" href="https://linkedin.com" rel="noopener noreferrer" target="_blank"><svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.037-1.85-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.237V9h3.106v1.561h.043c.433-.82 1.494-1.684 3.073-1.684 3.287 0 3.89 2.163 3.89 4.977v6.598zM5.337 7.433a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76zm1.623 13.019H3.715V9h3.245v11.452z"></path></svg></a>
<a className="text-gray-400 hover:text-white" href="https://youtube.com" rel="noopener noreferrer" target="_blank"><svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.106-2.11C19.396 3.5 12 3.5 12 3.5s-7.396 0-9.393.576a2.994 2.994 0 0 0-2.106 2.11C0 8.183 0 12 0 12s0 3.817.501 5.814a2.994 2.994 0 0 0 2.106 2.11C4.604 20.5 12 20.5 12 20.5s7.396 0 9.393-.576a2.994 2.994 0 0 0 2.106-2.11C24 15.817 24 12 24 12s0-3.817-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
<a className="text-gray-400 hover:text-white" href="https://tiktok.com" rel="noopener noreferrer" target="_blank">
<svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white" href="https://instagram.com" rel="noopener noreferrer" target="_blank"><svg className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.78.13 4.659.357 3.678 1.337 2.698 2.317 2.47 3.438 2.412 4.71c-.059 1.28-.072 1.689-.072 5.29s.013 4.01.072 5.29c.058 1.272.286 2.393 1.266 3.373.98.98 2.101 1.208 3.373 1.266 1.28.059 1.689.072 5.29.072s4.01-.013 5.29-.072c1.272-.058 2.393-.286 3.373-1.266.98-.98 1.208-2.101 1.266-3.373.059-1.28.072-1.689.072-5.29s-.013-4.01-.072-5.29c-.058-1.272-.286-2.393-1.266-3.373C19.393.357 18.272.13 17 .072 15.72.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-gray-400">
<li><a className="footer-link hover:text-white transition-colors" data-section="programs-page" href="#">Programs</a></li>
<li className=""><a className="footer-link hover:text-white transition-colors" data-section="blog-page" href="#">Blog</a></li>
<li className=""><a className="footer-link hover:text-white transition-colors" data-section="contact" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-lg font-semibold mb-4">Support</h4>
<ul className="space-y-2 text-gray-400">
<li className=""><a className="footer-link hover:text-white transition-colors" data-section="help-center" href="#">Help Center</a></li>
<li className=""><a className="footer-link hover:text-white transition-colors" data-section="privacy-policy" href="#">Privacy Policy</a></li>
<li className=""><a className="footer-link hover:text-white transition-colors" data-section="terms-of-service" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
<p>© 2025 Bridge2Affiliate. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
