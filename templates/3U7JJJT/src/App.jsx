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
      
      // --- Minimal staggered fade-in ---
      document.addEventListener('DOMContentLoaded', () => {
        const nodes = document.querySelectorAll('main, header');
        nodes.forEach((el, i) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(8px)';
          el.style.transition = 'opacity 600ms ease, transform 600ms ease';
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 120 + i*40);
        });
      });

      // --- Chart.js (same as before) ---
      const ctx = document.getElementById('trafficChart').getContext('2d');
      const trafficChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Requests',
            tension: 0.4,
            borderWidth: 2,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14,165,233,0.08)',
            data: [120, 170, 140, 220, 190, 210, 260]
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(15,23,42,0.04)' } }
          }
        }
      });

      // --- Language toggle: update both summary and page headings if present ---
      const en = {
        heroSub: 'From code templates to plugins and integration services — solutions for businesses and devs worldwide.',
        productsHeader: 'Featured products',
        demo: 'Interactive AI Chatbot (demo)',
        productsPageTitle: 'All Products'
      };
      const vn = {
        heroSub: 'Từ template mã nguồn đến plugin và dịch vụ tích hợp API — giải pháp cho doanh nghiệp và lập trình viên.',
        productsHeader: 'Sản phẩm nổi bật',
        demo: 'Trò chuyện AI (demo)',
        productsPageTitle: 'Tất cả sản phẩm'
      };
      document.getElementById('lang-en').addEventListener('click', () => {
        document.getElementById('hero-sub').textContent = en.heroSub;
        const prodHead = document.querySelector('#products h2'); if(prodHead) prodHead.textContent = en.productsHeader;
        const demoHead = document.querySelector('#demo h3'); if(demoHead) demoHead.textContent = en.demo;
        const pTitle = document.querySelector('#productsPage h1'); if(pTitle) pTitle.textContent = en.productsPageTitle;
      });
      document.getElementById('lang-vn').addEventListener('click', () => {
        document.getElementById('hero-sub').textContent = vn.heroSub;
        const prodHead = document.querySelector('#products h2'); if(prodHead) prodHead.textContent = vn.productsHeader;
        const demoHead = document.querySelector('#demo h3'); if(demoHead) demoHead.textContent = vn.demo;
        const pTitle = document.querySelector('#productsPage h1'); if(pTitle) pTitle.textContent = vn.productsPageTitle;
      });

      // --- Chat demo (unchanged) ---
      const messagesEl = document.getElementById('messages');
      const chatForm = document.getElementById('chatForm');
      const userInput = document.getElementById('userInput');
      const cache = new Map();
      chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const q = userInput.value.trim();
        if(!q) return;
        appendMsg('you', q);
        userInput.value = '';
        const key = q.toLowerCase();
        if(cache.has(key)) {
          appendMsg('bot', cache.get(key) + ' (cached)');
          return;
        }
        appendMsg('bot-wip','Thinking...');
        setTimeout(() => {
          const reply = generateDemoReply(q);
          cache.set(key, reply);
          const thinking = Array.from(messagesEl.querySelectorAll('div')).reverse().find(n => n.dataset && n.dataset.role === 'bot-wip');
          if(thinking) thinking.remove();
          appendMsg('bot', reply);
        }, 900 + Math.random()*500);
      });
      function appendMsg(role, text) {
        const div = document.createElement('div');
        if(role === 'you') {
          div.className = 'text-sm bg-sky-50 rounded-md p-2 text-slate-800 self-end';
          div.style.textAlign = 'right';
          div.textContent = text;
        } else if (role === 'bot') {
          div.className = 'text-sm bg-white rounded-md p-2 border border-slate-100 text-slate-700';
          div.textContent = text;
        } else if (role === 'bot-wip') {
          div.className = 'text-sm bg-white rounded-md p-2 border border-slate-100 text-slate-500 italic';
          div.dataset.role = 'bot-wip';
          div.textContent = text;
        }
        messagesEl.appendChild(div);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
      function generateDemoReply(q) {
        if(/wordpress|plugin|wp/i.test(q)) {
          return 'Để tích hợp plugin vào WordPress: cài plugin, thêm shortcode [wp_ai_chatbot], cấu hình API key trong settings.';
        }
        if(/install|setup|cài đặt/i.test(q)) return 'Hướng dẫn cài đặt: xem tài liệu PDF, hoặc dùng sandbox để test trước khi deploy.';
        return 'Demo trả lời: chúng tôi hỗ trợ tích hợp xAI và Hugging Face; liên hệ để tích hợp production với bảo mật.';
      }

      // --- Checkout simulation (unchanged) ---
      document.getElementById('checkoutBtn').addEventListener('click', async () => {
        const btn = document.getElementById('checkoutBtn');
        btn.disabled = true;
        btn.textContent = 'Processing...';
        setTimeout(() => {
          btn.textContent = 'Redirecting...';
          setTimeout(()=> {
            alert('Stripe sandbox: would redirect to checkout session. In production create session on server with SECRET_KEY env var.');
            btn.disabled = false;
            btn.textContent = 'Buy';
          },700);
        }, 900);
      });

      // --- Simple client-side "pages" router using hash ---
      const homeView = document.getElementById('homeView');
      const productsPage = document.getElementById('productsPage');
      const blogPage = document.getElementById('blogPage');

      function showView(name) {
        // hide all main views
        homeView.classList.add('hidden');
        productsPage.classList.add('hidden');
        blogPage.classList.add('hidden');

        if(name === 'products') {
          productsPage.classList.remove('hidden');
          window.scrollTo(0,0);
        } else if(name === 'blog') {
          blogPage.classList.remove('hidden');
          window.scrollTo(0,0);
        } else {
          homeView.classList.remove('hidden');
          window.scrollTo(0,0);
        }
      }

      function handleHash() {
        const h = location.hash || '#/';
        if(h.startsWith('#/products')) {
          showView('products');
        } else if(h.startsWith('#/blog')) {
          showView('blog');
        } else {
          showView('home');
        }
      }
      window.addEventListener('hashchange', handleHash, false);
      handleHash();

      // --- Populate Products page (minimal demo data) ---
      const products = [
        {id:1, category:'templates', title:'Flask Chatbot Starter', price:19, tag:'Freemium', desc:'Template Flask + Hugging Face integration. Tài liệu tiếng Việt.'},
        {id:2, category:'courses', title:'Học lập trình AI (VN)', price:39, tag:'Lifetime', desc:'Khóa học bằng tiếng Việt: từ cơ bản đến nâng cao.'},
        {id:3, category:'plugins', title:'WP AI Chatbot Plugin', price:29, tag:'License', desc:'Plugin mẫu cho WordPress + shortcode demo.'},
        {id:4, category:'templates', title:'Next.js AI Dashboard', price:49, tag:'Pro', desc:'Starter dashboard with AI widgets and examples.'},
        {id:5, category:'plugins', title:'Shopify AI Assist', price:59, tag:'Service', desc:'Product recommendations plugin (demo).'}
      ];
      const productGrid = document.getElementById('productGrid');
      const productCount = document.getElementById('productCount');
      const tpl = document.getElementById('productCardTpl').content;

      function renderProducts(list) {
        productGrid.innerHTML = '';
        list.forEach(p => {
          const node = tpl.cloneNode(true);
          node.querySelector('.product-category').textContent = p.category;
          node.querySelector('.product-title').textContent = p.title;
          node.querySelector('.product-price').textContent = '$' + p.price;
          node.querySelector('.product-tag').textContent = p.tag;
          node.querySelector('.product-desc').textContent = p.desc;
          node.querySelector('.buyBtn').addEventListener('click', ()=> alert('Checkout sandbox: ' + p.title));
          productGrid.appendChild(node);
        });
        productCount.textContent = list.length;
      }
      renderProducts(products);

      // search & filter handlers
      document.getElementById('searchProducts').addEventListener('input', (e) => {
        applyProductFilters();
      });
      document.getElementById('filterCategory').addEventListener('change', () => applyProductFilters());
      function applyProductFilters() {
        const q = document.getElementById('searchProducts').value.toLowerCase();
        const cat = document.getElementById('filterCategory').value;
        const filtered = products.filter(p => {
          return (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) && (cat ? p.category === cat : true);
        });
        renderProducts(filtered);
      }
      document.getElementById('loadMoreProducts').addEventListener('click', () => {
        alert('Load more: this demo uses a static dataset. In production, paginate server-side.');
      });

      // --- Populate Blog page (pagination demo) ---
      const blogData = [
        {id:1, tag:'Tutorial • VN', title:'Tích hợp AI vào website dễ dàng với các giải pháp của chúng tôi', excerpt:'Bài viết mẫu hướng dẫn cách triển khai plugin chatbot, tối ưu prompts và bảo mật dữ liệu người dùng (GDPR).'},
        {id:2, tag:'News • EN', title:'AI plugins: trends for 2025', excerpt:'Top plugin patterns and API best practices for scalable integrations.'},
        {id:3, tag:'Guide • VN', title:'Checklist triển khai GDPR cho chatbot', excerpt:'Các bước xử lý dữ liệu người dùng, yêu cầu xóa dữ liệu và lưu logs an toàn.'},
        {id:4, tag:'Tutorial • EN', title:'Securing AI APIs in production', excerpt:'Best practices for server-side proxies and token handling.'},
        {id:5, tag:'News • VN', title:'Các cập nhật mới cho model xAI', excerpt:'Tóm tắt các thay đổi và ảnh hưởng tới latency và cost.'}
      ];
      let blogPageIndex = 0;
      const pageSize = 2;
      const blogList = document.getElementById('blogList');
      function renderBlogPage(idx) {
        blogList.innerHTML = '';
        const start = idx * pageSize;
        const pageItems = blogData.slice(start, start + pageSize);
        pageItems.forEach(b => {
          const el = document.createElement('article');
          el.className = 'bg-white border border-slate-100 rounded-lg p-4 shadow-sm';
          el.innerHTML = `<div class="text-xs text-slate-500">${b.tag}</div>
            <h3 class="mt-2 text-lg font-semibold">${b.title}</h3>
            <p class="mt-2 text-sm text-slate-600">${b.excerpt}</p>
            <a class="mt-4 inline-block text-sky-600 hover:underline text-sm" href="#">Read article</a>`;
          blogList.appendChild(el);
        });
      }
      renderBlogPage(blogPageIndex);
      document.getElementById('prevPage').addEventListener('click', () => {
        if(blogPageIndex > 0) { blogPageIndex--; renderBlogPage(blogPageIndex); }
      });
      document.getElementById('nextPage').addEventListener('click', () => {
        if((blogPageIndex+1)*pageSize < blogData.length) { blogPageIndex++; renderBlogPage(blogPageIndex); }
      });

      // --- Accessibility focus outline ---
      document.addEventListener('focusin', (e) => {
        const el = e.target;
        if(el && el.classList) el.style.outline = '3px solid rgba(14,165,233,0.12)';
      });
      document.addEventListener('focusout', (e) => {
        const el = e.target;
        if(el && el.classList) el.style.outline = '';
      });

      // --- GDPR banner simulation ---
      setTimeout(()=> {
        const banner = document.createElement('div');
        banner.innerHTML = '<div style="font-size:13px;color:#0f172a">We use cookies for analytics. <a href="#" style="color:#0ea5e9">Privacy</a></div><div style="margin-left:12px"><button id="acceptCookies" style="background:#0ea5e9;color:white;padding:6px 10px;border-radius:6px">Accept</button></div>';
        banner.style.position='fixed'; banner.style.bottom='18px'; banner.style.left='18px'; banner.style.padding='12px'; banner.style.background='white'; banner.style.border='1px solid rgba(15,23,42,0.06)'; banner.style.borderRadius='8px'; banner.style.boxShadow='0 6px 20px rgba(2,6,23,0.06)';
        document.body.appendChild(banner);
        document.getElementById('acceptCookies').addEventListener('click', ()=> banner.remove());
      },1600);
    
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

<header className="bg-white shadow-sm sticky top-0 z-30" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-4">
<div className="text-slate-900 text-xl tracking-tight font-semibold">AIBX</div>
<nav aria-label="Main navigation" className="hidden md:flex gap-3 text-sm text-slate-600">
<a className="px-3 py-2 rounded hover:bg-slate-50" href="#/">Home</a>

<a className="px-3 py-2 rounded hover:bg-slate-50" href="#/products" id="nav-products">Products</a>
<a className="px-3 py-2 rounded hover:bg-slate-50" href="#demo" id="nav-demo">Demo</a>
<a className="px-3 py-2 rounded hover:bg-slate-50" href="#docs" id="nav-docs">Docs</a>
<a className="px-3 py-2 rounded hover:bg-slate-50" href="#/blog" id="nav-blog">Blog</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center space-x-2">
<button className="px-2 py-1 rounded text-xs bg-slate-50 border hover:bg-slate-100" id="lang-en">EN</button>
<button className="px-2 py-1 rounded text-xs bg-white border border-slate-200 hover:bg-slate-50" id="lang-vn">VN</button>
</div>
<a className="inline-flex items-center px-3 py-2 rounded-md text-sm bg-sky-600 text-white hover:bg-sky-700 focus:outline-none" href="#pricing" id="cta-top">Get Started</a>
</div>
</div>
</div>
</header>

<main className="flex-1" id="homeView">
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-slate-900 text-4xl sm:text-5xl leading-tight tracking-tight font-semibold" style={{letterSpacing: '-0.01em'}}>AI programming products &amp; services — nhanh, an toàn, hỗ trợ tiếng Việt</h1>
<p className="mt-4 text-slate-600 max-w-xl" id="hero-sub">Từ template mã nguồn đến plugin và dịch vụ tích hợp API — cung cấp giải pháp cho doanh nghiệp và lập trình viên trên toàn cầu.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="px-4 py-2 rounded-md text-sm bg-sky-600 text-white hover:bg-sky-700" href="#/products">Khám phá sản phẩm</a>
<a className="px-4 py-2 rounded-md text-sm border border-slate-200 hover:bg-slate-50" href="#demo">Thử demo trực tiếp</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
<div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
<div className="text-xs text-slate-500">Hỗ trợ</div>
<div className="mt-1 text-sm font-medium text-slate-800">Tiếng Việt đầy đủ</div>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
<div className="text-xs text-slate-500">Bắt đầu</div>
<div className="mt-1 text-sm font-medium text-slate-800">Mẫu miễn phí &amp; Freemium</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-tr from-slate-50 to-white rounded-2xl p-6 border border-slate-100 shadow">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-600">Live metrics</div>
<div className="text-xs text-slate-500">Realtime demo</div>
</div>
<div className="mt-4">
<div className="mt-3" style={{height: '220px'}}>
<div className="h-full">
<canvas aria-label="Traffic chart" height="220" id="trafficChart" role="img" style={{display: 'block', boxSizing: 'border-box', height: '220px', width: '440px'}} width="440"></canvas>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<svg aria-hidden="true" className="text-amber-500" fill="none" height="28" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28">
<path d="M2 3h20v18H2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 8v8l5-3-5-5z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="text-sm">
<div className="font-medium text-slate-800">xAI &amp; Hugging Face demos</div>
<div className="text-xs text-slate-500">Latency metrics, test requests</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 right-4 w-64 bg-white border border-slate-100 rounded-lg shadow p-3 text-sm">
<div className="flex items-center justify-between">
<div className="text-slate-600">Checkout simulation</div>
<div className="text-xs text-sky-600">Stripe sandbox</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-800 font-medium">AI Code Template — $19</div>
<button className="px-3 py-1 rounded bg-sky-600 text-white text-xs hover:bg-sky-700" id="checkoutBtn">Buy</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="products" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Featured products</h2>
<p className="mt-2 text-sm text-slate-600">Danh mục sản phẩm với mô tả song ngữ và mô hình freemium.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<div className="text-xs text-slate-500">AI Code Templates</div>
<h3 className="mt-1 text-lg font-semibold text-slate-900">Flask Chatbot Starter</h3>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-800">$19</div>
<div className="text-xs text-slate-500">Freemium</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">Template Flask + Hugging Face integration. Tài liệu tiếng Việt kèm theo.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="px-3 py-1 text-sm rounded border border-slate-200 hover:bg-slate-50" href="#/products">Xem thêm</a>
<button className="px-3 py-1 text-sm rounded bg-amber-50 text-amber-700 border border-amber-100">Free Tier</button>
</div>
<button className="px-3 py-1 rounded bg-sky-600 text-white text-sm hover:bg-sky-700">Buy</button>
</div>
</article>

</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="demo" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight">Interactive AI Chatbot (demo)</h3>
<p className="mt-2 text-sm text-slate-600">Trò chuyện với chatbot AI. Kết nối mô phỏng với xAI/Hugging Face.</p>
<div className="mt-4 bg-slate-50 rounded-lg p-3 h-80 overflow-auto" id="chatWrapper" style={{border: '1px solid rgba(15,23,42,0.04)'}}>
<div className="space-y-3 text-sm text-slate-700" id="messages">
<div className="opacity-75">System: Demo sandbox — requests are simulated.</div>
</div>
</div>
<form className="mt-3 flex gap-2" id="chatForm">
<input className="flex-1 rounded-md border border-slate-200 px-3 py-2 focus:outline-none" id="userInput" placeholder="Ask the demo bot (e.g., 'Cách tích hợp plugin vào WordPress?')"/>
<button className="px-4 py-2 rounded-md bg-sky-600 text-white">Send</button>
</form>
<div className="mt-3 text-xs text-slate-500">Note: In production, calls should use React Query with secure environment variables and server-side tokens.</div>
</div>
<aside className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<h4 className="text-sm font-semibold">Sandbox &amp; Plugin Simulation</h4>
<p className="mt-2 text-xs text-slate-600">Embedded code sandbox for testing templates.</p>
<div className="mt-3 w-full h-44 border border-slate-100 rounded overflow-hidden">
<iframe loading="lazy" src="https://codesandbox.io/embed/new?codemirror=1" style={{width: '100%', height: '100%', border: '0'}} title="codesandbox"></iframe>
</div>
<div className="mt-4">
<div className="text-xs text-slate-500">WordPress shortcode demo</div>
<div className="mt-2 p-3 bg-slate-50 rounded border border-slate-100 text-sm">
<div className="font-medium">[wp_ai_chatbot]</div>
<div className="mt-2 text-xs text-slate-600">Renders a React-based chatbot in WordPress using REST endpoint /api/chat.</div>
</div>
</div>
</aside>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="docs" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight">Documentation &amp; Support (Tiếng Việt)</h3>
<p className="mt-2 text-sm text-slate-600">Hướng dẫn cài đặt, API docs, và ví dụ tích hợp. PDF &amp; video kèm theo.</p>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<div className="text-sky-600 mt-1">•</div>
<div>
<div className="font-medium text-slate-800">Cách tích hợp plugin Chatbot AI vào WordPress</div>
<div className="text-xs text-slate-500">Bước-by-step, code snippet, tips tối ưu hiệu năng.</div>
<a className="mt-2 inline-block text-sky-600 text-xs hover:underline" download="wordress-integration-vn.pdf" href="#">Tải PDF (VN)</a>
</div>
</li>
<li className="flex items-start gap-3">
<div className="text-sky-600 mt-1">•</div>
<div>
<div className="font-medium text-slate-800">API integration docs</div>
<div className="text-xs text-slate-500">/api/chat, rate limiting, secure server-side proxy examples.</div>
</div>
</li>
</ul>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight">Community &amp; Support</h3>
<p className="mt-2 text-sm text-slate-600">Forum mockup and AI-powered support for quick answers.</p>
<div className="mt-4 space-y-3">
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-sm font-medium">Forum thread: Tích hợp API</div>
<div className="text-xs text-slate-500">3 replies • last updated 2d ago</div>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-sm font-medium">Support chatbot: Quick help (VN)</div>
<div className="text-xs text-slate-500">Available 24/7 — demo uses cached responses</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-10" id="blog" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<h2 className="text-2xl font-semibold tracking-tight">Latest insights</h2>
<div className="mt-4 grid md:grid-cols-3 gap-6">
<article className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="text-xs text-slate-500">Tutorial • VN</div>
<h3 className="mt-2 text-lg font-semibold">Tích hợp AI vào website dễ dàng với các giải pháp của chúng tôi</h3>
<p className="mt-2 text-sm text-slate-600">Bài viết mẫu hướng dẫn cách triển khai plugin chatbot, tối ưu prompts và bảo mật dữ liệu người dùng (GDPR).</p>
<a className="mt-4 inline-block text-sky-600 hover:underline text-sm" href="#/blog">Read article</a>
</article>
<article className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="text-xs text-slate-500">News • EN</div>
<h3 className="mt-2 text-lg font-semibold">AI plugins: trends for 2025</h3>
<p className="mt-2 text-sm text-slate-600">Top plugin patterns and API best practices for scalable integrations.</p>
<a className="mt-4 inline-block text-sky-600 hover:underline text-sm" href="#/blog">Read article</a>
</article>
<article className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="text-xs text-slate-500">Guide • VN</div>
<h3 className="mt-2 text-lg font-semibold">Checklist triển khai GDPR cho chatbot</h3>
<p className="mt-2 text-sm text-slate-600">Các bước xử lý dữ liệu người dùng, yêu cầu xóa dữ liệu và lưu logs an toàn.</p>
<a className="mt-4 inline-block text-sky-600 hover:underline text-sm" href="#/blog">Read article</a>
</article>
</div>
</section>
<footer className="border-t border-slate-100 mt-10 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
<div className="text-sm text-slate-600">© 2025 AIBX — AI programming products &amp; services. Tài liệu và hỗ trợ bằng tiếng Việt.</div>
<div className="flex gap-3 text-sm">
<a className="text-slate-600 hover:underline" href="#">Privacy</a>
<a className="text-slate-600 hover:underline" href="#">Terms</a>
<a className="text-slate-600 hover:underline" href="#">Vercel deploy</a>
</div>
</div>
</footer>
</main>

<main className="hidden min-h-screen bg-slate-50 py-8" id="productsPage">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="flex items-start justify-between">
<div>
<h1 className="text-3xl font-semibold tracking-tight">All Products</h1>
<p className="mt-2 text-sm text-slate-600">Danh sách đầy đủ sản phẩm, bộ lọc và chi tiết giá cả. Bạn có thể tìm kiếm hoặc lọc theo loại.</p>
</div>
<div className="flex items-center gap-3">
<a className="text-sm px-3 py-2 rounded border border-slate-200 hover:bg-slate-50" href="#/">Back</a>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<input className="px-3 py-2 border border-slate-200 rounded-md w-64 focus:outline-none" id="searchProducts" placeholder="Tìm sản phẩm..." type="search"/>
<select className="px-3 py-2 border border-slate-200 rounded-md text-sm" id="filterCategory">
<option value="">All categories</option>
<option value="templates">Templates</option>
<option value="courses">Courses</option>
<option value="plugins">Plugins</option>
</select>
</div>
<div className="text-sm text-slate-500">Tổng: <span id="productCount">—</span></div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="productGrid">

</div>
<div className="mt-6 flex justify-center">
<button className="px-4 py-2 bg-white border border-slate-200 rounded hover:bg-slate-50" id="loadMoreProducts">Load more</button>
</div>
</div>
</div>
</main>

<main className="hidden min-h-screen bg-slate-50 py-8" id="blogPage">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="flex items-start justify-between">
<div>
<h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
<p className="mt-2 text-sm text-slate-600">Bài viết, hướng dẫn và tin tức cập nhật về AI và các sản phẩm.</p>
</div>
<div className="flex items-center gap-3">
<a className="text-sm px-3 py-2 rounded border border-slate-200 hover:bg-slate-50" href="#/">Back</a>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-4" id="blogList">

</div>
<div className="mt-6 flex justify-center">
<nav aria-label="Pagination" className="inline-flex">
<button className="px-3 py-2 border border-slate-200 rounded-l hover:bg-slate-50" id="prevPage">Prev</button>
<button className="px-3 py-2 border-t border-b border-slate-200 rounded-r hover:bg-slate-50" id="nextPage">Next</button>
</nav>
</div>
</div>
</div>
</main>
</div>
<template id="productCardTpl">
<article className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<div className="text-xs text-slate-500 product-category">Category</div>
<h3 className="mt-1 text-lg font-semibold text-slate-900 product-title">Product Title</h3>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-800 product-price">$0</div>
<div className="text-xs text-slate-500 product-tag">Tag</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600 product-desc">Short description</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="px-3 py-1 text-sm rounded border border-slate-200 hover:bg-slate-50">Preview</button>
<button className="px-3 py-1 text-sm rounded bg-amber-50 text-amber-700 border border-amber-100">Free Tier</button>
</div>
<button className="px-3 py-1 rounded bg-sky-600 text-white text-sm hover:bg-sky-700 buyBtn">Buy</button>
</div>
</article>
</template>


    </>
  );
}
