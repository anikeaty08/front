import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- DATA LAYER (Mock Database) ---
        const siteSettings = {
            siteName: "Dimsumnews",
            tagline: "Modern Culture & Lifestyle",
            homepageIntro: "Curated stories shaping Asian culture, tech, and modern living.",
            newsletterTitle: "Get the weekly edit.",
            newsletterText: "Join 50,000+ readers getting our curated dispatch of culture, design, and tech.",
            footerDescription: "Dimsumnews is a contemporary digital magazine exploring the intersection of modern Asian culture, lifestyle, and global trends.",
            aboutBlurb: "We are an editorial platform..."
        };

        const categories = ['arts', 'culture', 'technology', 'gadgets', 'fashion', 'food'];
        const mockImages = {
            arts: ['https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop'],
            culture: ['https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop'],
            technology: ['https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1531297172867-4d2847526715?q=80&w=800&auto=format&fit=crop'],
            gadgets: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop'],
            fashion: ['https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'],
            food: ['https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop']
        };

        // Seed 30 articles
        let articles = [];
        let idCounter = 1;
        categories.forEach(cat => {
            for(let i=1; i<=5; i++) {
                articles.push({
                    id: idCounter.toString(),
                    slug: `${cat}-story-${i}-` + Math.random().toString(36).substring(7),
                    title: `The Future of ${cat.charAt(0).toUpperCase() + cat.slice(1)}: Trends to Watch in 2026`,
                    subtitle: `Exploring how innovation is reshaping our experience of ${cat}.`,
                    summary: `A deep dive into the evolving landscape of ${cat}, featuring interviews with industry leaders and an analysis of upcoming consumer shifts that will define the next decade.`,
                    category: cat,
                    author: ['Alex Chen', 'Maya Lin', 'Jordan Lee'][Math.floor(Math.random() * 3)],
                    publishedDate: `2023-10-${Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0')}`,
                    heroImage: mockImages[cat][i%2],
                    imageCaption: `A visual representation of modern ${cat}.`,
                    body: `<p>The landscape of ${cat} is undergoing a paradigm shift. As we look towards the future, several key trends are emerging that promise to redefine how we interact with and consume content in this space.</p><p>Experts predict a move towards more sustainable and integrated practices. "The integration of digital tools has opened up unprecedented avenues for creativity," says leading analyst Jamie Wong. "We are seeing a convergence that was unimaginable just five years ago."</p><p>Furthermore, consumer expectations are shifting. There is a growing demand for authenticity and transparency. Brands and creators who can navigate this nuanced environment will likely thrive in the coming years.</p><p>As these developments unfold, Dimsumnews will continue to provide comprehensive coverage and critical analysis.</p>`,
                    tags: [cat, 'trends', 'future'],
                    isFeatured: (i === 1 && cat === 'culture'), // Make one global featured
                    isEditorsPick: (i === 2),
                    isPublished: true,
                    createdAt: new Date().toISOString()
                });
                idCounter++;
            }
        });

        // Add a specific highly-featured article for the home hero
        articles[0].isFeatured = true;
        articles[0].title = "Neon & Tradition: The New Wave of Asian Cinema";
        articles[0].subtitle = "How independent filmmakers are blending ancient folklore with cyberpunk aesthetics to create a fresh global narrative.";
        articles[0].heroImage = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop";
        articles[0].category = "culture";

        let authState = { isAuthenticated: false };

        // --- UTILS ---
        const getArticles = () => articles.filter(a => a.isPublished).sort((a,b) => new Date(b.publishedDate) - new Date(a.publishedDate));
        const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const formatCategory = (cat) => cat === 'gadgets' ? 'Trendy Gadgets' : cat;

        // --- COMPONENTS ---
        const ArticleCard = (article, type = 'standard') => {
            if(type === 'hero') {
                return `
                    <a href="#/article/${article.slug}" class="group flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-4 md:p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-all">
                        <div class="w-full md:w-3/5 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 relative">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-neutral-900">${formatCategory(article.category)}</div>
                        </div>
                        <div class="w-full md:w-2/5 flex flex-col gap-4">
                            <h2 class="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors leading-tight">${article.title}</h2>
                            <p class="text-neutral-500 font-light text-base md:text-lg line-clamp-3">${article.summary}</p>
                            <div class="flex items-center gap-3 text-xs text-neutral-400 font-light mt-2">
                                <span class="font-medium text-neutral-900">${article.author}</span>
                                <span>&middot;</span>
                                <span>${formatDate(article.publishedDate)}</span>
                            </div>
                        </div>
                    </a>
                `;
            }
            if(type === 'compact') {
                return `
                    <a href="#/article/${article.slug}" class="group flex gap-4 items-start">
                        <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                        </div>
                        <div class="flex flex-col gap-1.5">
                            <span class="text-[10px] font-medium uppercase tracking-widest text-neutral-400">${formatCategory(article.category)}</span>
                            <h3 class="text-sm font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2">${article.title}</h3>
                        </div>
                    </a>
                `;
            }
            return `
                <a href="#/article/${article.slug}" class="group flex flex-col gap-4">
                    <div class="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-[10px] font-medium uppercase tracking-widest text-neutral-500">${formatCategory(article.category)}</span>
                        <h3 class="text-lg md:text-xl font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors leading-snug line-clamp-2">${article.title}</h3>
                        <p class="text-sm text-neutral-500 font-light line-clamp-2">${article.summary}</p>
                    </div>
                </a>
            `;
        };

        // --- RENDER FUNCTIONS ---
        const renderHome = () => {
            const pubArticles = getArticles();
            const featured = pubArticles.find(a => a.isFeatured) || pubArticles[0];
            const editorsPicks = pubArticles.filter(a => a.isEditorsPick && a.id !== featured?.id).slice(0, 4);
            const latestMain = pubArticles.filter(a => a.id !== featured?.id && !editorsPicks.includes(a)).slice(0, 6);
            const trending = pubArticles.slice(6, 11);

            document.getElementById('home-hero').innerHTML = featured ? ArticleCard(featured, 'hero') : '';
            document.getElementById('home-editors-picks').innerHTML = editorsPicks.map(a => ArticleCard(a)).join('');
            document.getElementById('home-latest-main').innerHTML = latestMain.map(a => ArticleCard(a)).join('');
            document.getElementById('home-trending-sidebar').innerHTML = trending.map(a => ArticleCard(a, 'compact')).join('');

            document.getElementById('newsletter-title').textContent = siteSettings.newsletterTitle;
            document.getElementById('newsletter-text').textContent = siteSettings.newsletterText;
            document.getElementById('footer-desc').textContent = siteSettings.footerDescription;
        };

        const renderCategory = (catSlug) => {
            const catArticles = getArticles().filter(a => a.category === catSlug);
            document.getElementById('cat-title').textContent = formatCategory(catSlug);
            document.getElementById('cat-desc').textContent = `Explore the latest stories, trends, and deep dives in ${formatCategory(catSlug)}.`;
            
            if(catArticles.length > 0) {
                document.getElementById('cat-grid').innerHTML = catArticles.map(a => ArticleCard(a)).join('');
            } else {
                document.getElementById('cat-grid').innerHTML = `<div class="col-span-full text-center py-20 text-neutral-500 font-light">No articles published in this category yet.</div>`;
            }
        };

        const renderArticle = (slug) => {
            const article = getArticles().find(a => a.slug === slug);
            if(!article) {
                document.getElementById('art-title').textContent = "Article Not Found";
                document.getElementById('art-body').innerHTML = "<p>The article you are looking for does not exist or has been unpublished.</p>";
                return;
            }

            document.getElementById('art-category-link').textContent = formatCategory(article.category);
            document.getElementById('art-category-link').href = `#/` + article.category;
            document.getElementById('art-title').textContent = article.title;
            document.getElementById('art-subtitle').textContent = article.subtitle;
            document.getElementById('art-author').textContent = article.author;
            document.getElementById('art-date').textContent = formatDate(article.publishedDate);
            document.getElementById('art-image').src = article.heroImage;
            document.getElementById('art-caption').textContent = article.imageCaption;
            document.getElementById('art-body').innerHTML = article.body;
            document.getElementById('art-tags').innerHTML = article.tags.map(t => `<span class="bg-neutral-100 text-neutral-600 px-2 py-1 rounded text-xs">${t}</span>`).join('');
        };

        const renderCMSList = () => {
            const tbody = document.getElementById('cms-article-list');
            tbody.innerHTML = articles.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map(a => `
                <tr class="hover:bg-neutral-50 group cursor-pointer" onclick="openEditor('${a.id}')">
                    <td class="px-6 py-4 border-b border-neutral-100">
                        <div class="font-medium text-neutral-900 truncate max-w-xs">${a.title}</div>
                        <div class="text-xs text-neutral-400 mt-1">${a.slug}</div>
                    </td>
                    <td class="px-6 py-4 border-b border-neutral-100 text-xs uppercase tracking-wider">${formatCategory(a.category)}</td>
                    <td class="px-6 py-4 border-b border-neutral-100">
                        ${a.isPublished ? '<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-medium uppercase">Published</span>' : '<span class="bg-neutral-200 text-neutral-600 px-2 py-1 rounded text-[10px] font-medium uppercase">Draft</span>'}
                    </td>
                    <td class="px-6 py-4 border-b border-neutral-100 text-xs">${formatDate(a.publishedDate)}</td>
                    <td class="px-6 py-4 border-b border-neutral-100 text-right">
                        <button class="text-neutral-400 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
                    </td>
                </tr>
            `).join('');
        };

        // --- CMS LOGIC ---
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const pwd = document.getElementById('login-password').value;
            if(email === 'admin@dimsumnews.com' && pwd === 'Dimsum2026!') {
                authState.isAuthenticated = true;
                window.location.hash = '#/cms';
            } else {
                document.getElementById('login-error').classList.remove('hidden');
            }
        });

        const handleLogout = () => {
            authState.isAuthenticated = false;
            window.location.hash = '#/cms/login';
        };

        const openEditor = (id = null) => {
            const modal = document.getElementById('cms-editor-modal');
            const form = document.getElementById('editor-form');
            form.reset();

            if(id) {
                const a = articles.find(x => x.id === id);
                document.getElementById('editor-title').textContent = "Edit Article";
                document.getElementById('edit-id').value = a.id;
                document.getElementById('edit-title').value = a.title;
                document.getElementById('edit-slug').value = a.slug;
                document.getElementById('edit-summary').value = a.summary;
                document.getElementById('edit-category').value = a.category;
                document.getElementById('edit-author').value = a.author;
                document.getElementById('edit-date').value = a.publishedDate;
                document.getElementById('edit-image').value = a.heroImage;
                document.getElementById('edit-body').value = a.body;
                document.getElementById('edit-published').checked = a.isPublished;
                document.getElementById('edit-featured').checked = a.isFeatured;
                document.getElementById('edit-editors-pick').checked = a.isEditorsPick;
                document.getElementById('btn-delete').classList.remove('hidden');
                document.getElementById('btn-delete').onclick = () => deleteArticle(a.id);
            } else {
                document.getElementById('editor-title').textContent = "New Article";
                document.getElementById('edit-id').value = "";
                document.getElementById('edit-date').value = new Date().toISOString().split('T')[0];
                document.getElementById('btn-delete').classList.add('hidden');
            }
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        };

        const closeEditor = () => {
            const modal = document.getElementById('cms-editor-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        };

        const saveArticle = () => {
            const id = document.getElementById('edit-id').value;
            const newArticle = {
                id: id || Date.now().toString(),
                title: document.getElementById('edit-title').value,
                slug: document.getElementById('edit-slug').value || `slug-${Date.now()}`,
                summary: document.getElementById('edit-summary').value,
                subtitle: document.getElementById('edit-summary').value, // Mirroring for simplicity
                category: document.getElementById('edit-category').value,
                author: document.getElementById('edit-author').value || 'Admin',
                publishedDate: document.getElementById('edit-date').value,
                heroImage: document.getElementById('edit-image').value || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800',
                imageCaption: 'Updated via CMS',
                body: document.getElementById('edit-body').value,
                tags: [document.getElementById('edit-category').value],
                isPublished: document.getElementById('edit-published').checked,
                isFeatured: document.getElementById('edit-featured').checked,
                isEditorsPick: document.getElementById('edit-editors-pick').checked,
                createdAt: id ? articles.find(a=>a.id===id).createdAt : new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            if(id) {
                const index = articles.findIndex(a => a.id === id);
                articles[index] = newArticle;
            } else {
                articles.push(newArticle);
            }

            closeEditor();
            renderCMSList();
            renderHome(); // Update public views behind the scenes
        };

        const deleteArticle = (id) => {
            if(confirm("Are you sure you want to delete this article?")) {
                articles = articles.filter(a => a.id !== id);
                closeEditor();
                renderCMSList();
            }
        };

        // --- ROUTER ---
        const router = () => {
            const hash = window.location.hash || '#/';
            const path = hash.replace('#', '');
            
            // Hide all views
            document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
            const nav = document.getElementById('public-nav');
            const footer = document.getElementById('public-footer');

            // CMS Routes
            if(path.startsWith('/cms')) {
                nav.style.display = 'none';
                footer.style.display = 'none';
                
                if(path === '/cms/login') {
                    if(authState.isAuthenticated) window.location.hash = '#/cms';
                    document.getElementById('view-cms-login').classList.add('active');
                } else if(path === '/cms') {
                    if(!authState.isAuthenticated) {
                        window.location.hash = '#/cms/login';
                        return;
                    }
                    document.getElementById('view-cms-dashboard').classList.add('active');
                    renderCMSList();
                }
                return;
            }

            // Public Routes
            nav.style.display = 'block';
            footer.style.display = 'block';
            
            // Update Active Nav State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-neutral-900');
                if(link.getAttribute('href') === hash) link.classList.add('text-neutral-900');
            });

            if(path === '/' || path === '') {
                document.getElementById('view-home').classList.add('active');
                renderHome();
            } 
            else if(categories.includes(path.replace('/',''))) {
                document.getElementById('view-category').classList.add('active');
                renderCategory(path.replace('/',''));
            }
            else if(path.startsWith('/article/')) {
                const slug = path.split('/article/')[1];
                document.getElementById('view-article').classList.add('active');
                renderArticle(slug);
            }
            
            window.scrollTo(0,0);
        };

        // Init
        window.addEventListener('hashchange', router);
        document.getElementById('current-year').textContent = new Date().getFullYear();
        router(); // Initial load

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 transition-all duration-300" id="public-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-8">
<a className="flex-shrink-0 flex items-center" href="#/">
<span className="font-medium tracking-tighter text-xl uppercase text-neutral-900">Dimsumnews</span>
</a>
<div className="hidden md:flex space-x-6">
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/arts">Arts</a>
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/culture">Culture</a>
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/technology">Technology</a>
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/gadgets">Gadgets</a>
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/fashion">Fashion</a>
<a className="nav-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#/food">Food</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 uppercase tracking-widest border border-neutral-200 px-3 py-1.5 rounded-full transition-colors" href="#/cms/login">CMS</a>
</div>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col w-full">

<div className="app-view active flex-grow w-full" id="view-home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">

<div className="w-full" id="home-hero"></div>

<div className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-neutral-200 pb-4">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900">Editor's Picks</h2>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1" href="#">
                            View all <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="home-editors-picks"></div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center justify-between border-b border-neutral-200 pb-4">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900">Latest Stories</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8" id="home-latest-main"></div>
<div className="lg:col-span-4 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-10">
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Trending</h3>
<div className="flex flex-col gap-6" id="home-trending-sidebar"></div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3" id="newsletter-title"></h2>
<p className="text-neutral-400 font-light text-sm md:text-base" id="newsletter-text"></p>
</div>
<form className="w-full max-w-md flex gap-2" onsubmit="event.preventDefault();">
<input className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-white/40 transition-colors" placeholder="Your email address" type="email"/>
<button className="bg-white text-neutral-900 font-medium text-sm px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
</div>

<div className="app-view flex-grow w-full" id="view-category">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col gap-12">
<div className="max-w-2xl text-center mx-auto flex flex-col gap-4">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 capitalize" id="cat-title"></h1>
<p className="text-neutral-500 font-light text-base md:text-lg" id="cat-desc"></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12" id="cat-grid"></div>
</div>
</div>

<div className="app-view flex-grow w-full bg-white" id="view-article">
<article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col gap-8">
<div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-neutral-900 transition-colors" href="#" id="art-category-link"></a>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight" id="art-title"></h1>
<p className="text-lg md:text-xl text-neutral-500 font-light" id="art-subtitle"></p>
<div className="flex items-center gap-4 text-sm text-neutral-400 font-light mt-4">
<span className="font-medium text-neutral-900" id="art-author"></span>
<span>·</span>
<span id="art-date"></span>
</div>
</div>
<div className="w-full flex flex-col gap-3 my-4">
<img alt="" className="w-full aspect-[21/9] object-cover rounded-xl bg-neutral-100" id="art-image" src=""/>
<p className="text-xs text-neutral-400 font-light text-center" id="art-caption"></p>
</div>
<div className="prose prose-neutral max-w-prose mx-auto w-full font-light text-neutral-700 leading-relaxed text-base md:text-lg">
<div className="flex flex-col gap-6" id="art-body"></div>
</div>
<div className="max-w-prose mx-auto w-full border-t border-neutral-200 mt-12 pt-8 flex flex-col gap-4">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Tags</h4>
<div className="flex flex-wrap gap-2" id="art-tags"></div>
</div>
</article>
</div>

<div className="app-view flex-grow w-full bg-neutral-50 flex items-center justify-center py-20 px-4" id="view-cms-login">
<div className="max-w-md w-full bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 flex flex-col gap-8">
<div className="text-center flex flex-col gap-2">
<span className="font-medium tracking-tighter text-xl uppercase text-neutral-900">Dimsumnews Admin</span>
<p className="text-sm font-light text-neutral-500">Sign in to manage editorial content.</p>
</div>
<form className="flex flex-col gap-5" id="login-form">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Email Address</label>
<input className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all font-light" id="login-email" type="email" value="admin@dimsumnews.com"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Password</label>
<input className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all font-light" id="login-password" type="password" value="Dimsum2026!"/>
</div>
<div className="text-xs text-red-500 hidden" id="login-error">Invalid credentials.</div>
<button className="w-full bg-neutral-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-neutral-800 transition-colors mt-2" type="submit">Sign In</button>
</form>
<div className="text-center">
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#/">← Back to publication</a>
</div>
</div>
</div>

<div className="app-view flex-grow w-full bg-neutral-50 flex flex-col md:flex-row min-h-screen" id="view-cms-dashboard">

<aside className="w-full md:w-64 bg-white border-r border-neutral-200 flex-shrink-0 flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-neutral-200">
<span className="font-medium tracking-tighter text-lg uppercase text-neutral-900">Workspace</span>
</div>
<div className="p-4 flex flex-col gap-2 flex-grow">
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md w-full text-left">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon> Articles
                    </button>
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md w-full text-left transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Site Settings
                    </button>
</div>
<div className="p-4 border-t border-neutral-200">
<button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md w-full text-left transition-colors" onclick="handleLogout()">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon> Sign Out
                    </button>
</div>
</aside>

<main className="flex-grow flex flex-col h-screen overflow-hidden">
<header className="h-16 flex items-center justify-between px-8 bg-white border-b border-neutral-200 flex-shrink-0">
<h1 className="text-lg font-medium tracking-tight text-neutral-900">Articles</h1>
<button className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-2" onclick="openEditor()">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon> New Article
                    </button>
</header>
<div className="flex-grow p-8 overflow-y-auto">
<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-neutral-50 border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-medium">Title</th>
<th className="px-6 py-4 font-medium">Category</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200 font-light text-neutral-700" id="cms-article-list">

</tbody>
</table>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] bg-neutral-900/40 backdrop-blur-sm hidden items-center justify-center p-4 md:p-8" id="cms-editor-modal">
<div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-full flex flex-col overflow-hidden">
<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 flex-shrink-0">
<h2 className="text-lg font-medium tracking-tight text-neutral-900" id="editor-title">Edit Article</h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="closeEditor()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-grow overflow-y-auto p-6">
<form className="flex flex-col gap-6" id="editor-form">
<input id="edit-id" type="hidden"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Title</label>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light" id="edit-title" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Slug</label>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light" id="edit-slug" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Subtitle / Summary</label>
<textarea className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light resize-none" id="edit-summary" rows="2"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Category</label>
<select className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light bg-white" id="edit-category">
<option value="arts">Arts</option>
<option value="culture">Culture</option>
<option value="technology">Technology</option>
<option value="gadgets">Trendy Gadgets</option>
<option value="fashion">Fashion</option>
<option value="food">Food</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Author</label>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light" id="edit-author" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Date</label>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light text-neutral-500" id="edit-date" type="date"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Image URL</label>
<input className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light" id="edit-image" type="url"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Body Content (HTML allowed)</label>
<textarea className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-neutral-900 font-light font-mono text-xs" id="edit-body" rows="8"></textarea>
</div>
<div className="flex items-center gap-6 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
<label className="flex items-center gap-2 cursor-pointer">
<input className="sr-only peer" id="edit-published" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-900 relative"></div>
<span className="text-sm font-medium text-neutral-700">Published</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="sr-only peer" id="edit-featured" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-900 relative"></div>
<span className="text-sm font-medium text-neutral-700">Featured</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="sr-only peer" id="edit-editors-pick" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-900 relative"></div>
<span className="text-sm font-medium text-neutral-700">Editor's Pick</span>
</label>
</div>
</form>
</div>
<div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50 flex-shrink-0">
<button className="text-red-600 text-sm font-medium px-4 py-2 hover:bg-red-50 rounded-md transition-colors hidden" id="btn-delete" type="button">Delete Article</button>
<div className="flex gap-3 ml-auto">
<button className="text-neutral-600 text-sm font-medium px-4 py-2 border border-neutral-200 bg-white hover:bg-neutral-50 rounded-md transition-colors" onclick="closeEditor()" type="button">Cancel</button>
<button className="bg-neutral-900 text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-neutral-800 transition-colors" onclick="saveArticle()" type="button">Save Changes</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-neutral-200 bg-white mt-auto" id="public-footer">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<span className="font-medium tracking-tighter text-xl uppercase text-neutral-900">Dimsumnews</span>
<p className="text-sm text-neutral-500 font-light max-w-sm" id="footer-desc"></p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest">Sections</h4>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/arts">Arts</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/culture">Culture</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/technology">Technology</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/gadgets">Gadgets</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/fashion">Fashion</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/food">Food</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest">System</h4>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#/cms/login">Admin Login</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About Aura.build</a>
</div>
</div>
<div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 font-light">© <span id="current-year"></span> Dimsumnews. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
