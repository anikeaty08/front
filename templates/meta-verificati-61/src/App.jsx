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



        // --- DATA MANAGEMENT ---
        // Initial Dummy Data
        const initialPosts = [
            {
                id: '1',
                title: 'Meta Updates Verification Criteria for Q3 2024',
                category: 'Verification News',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
                body: 'New protocols suggest stricter requirements for organic verification. Business Manager verification remains the most reliable path.',
                date: 'Oct 12, 2023',
                slug: 'meta-updates-verification-q3-2024'
            },
            {
                id: '2',
                title: 'SEO Architecture for Luxury Brands',
                category: 'SEO Tips',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
                body: 'How to structure your headers and meta tags to dominate high-value keywords in the luxury sector.',
                date: 'Nov 04, 2023',
                slug: 'seo-architecture-luxury-brands'
            },
            {
                id: '3',
                title: 'Instagram Algorithm Shift: Reels vs Static',
                category: 'Brand Updates',
                image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop',
                body: 'Static posts are seeing a resurgence in engagement for business accounts. Here is the data breakdown.',
                date: 'Dec 01, 2023',
                slug: 'instagram-algorithm-shift-reels-static'
            }
        ];

        // Load posts from LocalStorage or use initial
        let posts = JSON.parse(localStorage.getItem('metaElitePosts')) || initialPosts;

        // --- PUBLIC FUNCTIONS ---
        
        function renderPosts(filter = 'all') {
            const grid = document.getElementById('posts-grid');
            const noPosts = document.getElementById('no-posts');
            grid.innerHTML = '';
            
            const filteredPosts = filter === 'all' 
                ? posts 
                : posts.filter(p => p.category === filter);

            if (filteredPosts.length === 0) {
                noPosts.classList.remove('hidden');
                return;
            }
            noPosts.classList.add('hidden');

            filteredPosts.forEach(post => {
                const card = `
                    <article class="glass-panel rounded-2xl overflow-hidden group hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full">
                        <div class="h-48 overflow-hidden relative">
                            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-lg">
                                ${post.category}
                            </div>
                        </div>
                        <div class="p-6 flex-1 flex flex-col">
                            <div class="flex items-center gap-2 mb-3 text-xs text-slate-500 font-mono">
                                <iconify-icon icon="lucide:calendar"></iconify-icon> ${post.date}
                            </div>
                            <h3 class="text-lg font-bold text-white mb-3 font-tech leading-tight group-hover:text-blue-400 transition-colors">${post.title}</h3>
                            <p class="text-sm text-slate-400 line-clamp-3 mb-4 flex-1">${post.body}</p>
                            <a href="#contact" class="inline-flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest hover:gap-3 transition-all">
                                Read Protocol <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                            </a>
                        </div>
                    </article>
                `;
                grid.innerHTML += card;
            });
        }

        function filterPosts(category) {
            renderPosts(category);
        }

        // --- ADMIN FUNCTIONS ---

        function toggleAdminPanel() {
            const panel = document.getElementById('admin-panel');
            const login = document.getElementById('admin-login');
            const dashboard = document.getElementById('admin-dashboard');
            
            if (panel.classList.contains('hidden')) {
                panel.classList.remove('hidden');
                // Check if already logged in this session
                if(sessionStorage.getItem('adminAuth') === 'true') {
                    login.classList.add('hidden');
                    dashboard.classList.remove('hidden');
                    renderAdminList();
                } else {
                    login.classList.remove('hidden');
                    dashboard.classList.add('hidden');
                }
            } else {
                panel.classList.add('hidden');
            }
        }

        function handleAdminLogin(e) {
            e.preventDefault();
            const pass = document.getElementById('admin-password').value;
            // Simple mock password
            if (pass === 'admin') {
                sessionStorage.setItem('adminAuth', 'true');
                document.getElementById('admin-login').classList.add('hidden');
                document.getElementById('admin-dashboard').classList.remove('hidden');
                renderAdminList();
            } else {
                alert('Access Denied: Invalid Credentials');
            }
        }

        function adminLogout() {
            sessionStorage.removeItem('adminAuth');
            toggleAdminPanel();
        }

        function createSlug(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
        }

        function handlePostSubmit(e) {
            e.preventDefault();
            
            const title = document.getElementById('post-title').value;
            const category = document.getElementById('post-category').value;
            const image = document.getElementById('post-image').value;
            const body = document.getElementById('post-body').value;
            
            const newPost = {
                id: Date.now().toString(),
                title,
                category,
                image: image || 'https://via.placeholder.com/400x300', // Fallback
                body,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                slug: createSlug(title)
            };

            posts.unshift(newPost); // Add to top
            savePosts();
            
            // Reset form
            e.target.reset();
            renderAdminList();
            renderPosts(); // Update public view
            alert('Protocol Initialized: Post Published Successfully');
        }

        function deletePost(id) {
            if(confirm('Warning: Confirm deletion of this record?')) {
                posts = posts.filter(p => p.id !== id);
                savePosts();
                renderAdminList();
                renderPosts();
            }
        }

        function savePosts() {
            localStorage.setItem('metaElitePosts', JSON.stringify(posts));
        }

        function renderAdminList() {
            const list = document.getElementById('admin-posts-list');
            list.innerHTML = '';

            posts.forEach(post => {
                const item = `
                    <div class="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <img src="${post.image}" class="w-12 h-12 rounded object-cover border border-white/10">
                        <div class="flex-1 min-w-0">
                            <h4 class="text-white font-medium truncate text-sm">${post.title}</h4>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">${post.category}</span>
                                <span class="text-[10px] text-slate-500 font-mono">/${post.slug}</span>
                            </div>
                        </div>
                        <button onclick="deletePost('${post.id}')" class="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors" title="Delete">
                            <iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
                        </button>
                    </div>
                `;
                list.innerHTML += item;
            });
        }

        // Initialize
        renderPosts();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#050A30] rounded-full blur-[100px] opacity-60"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="absolute inset-0 bg-grid-tech z-0"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#020413]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-[#050A30] border border-blue-400/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-white font-tech">META <span className="text-blue-500">ELITE</span></span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
<a className="hover:text-blue-400 transition-colors" href="#verification">Verification</a>
<a className="hover:text-blue-400 transition-colors" href="#services">Growth</a>
<a className="hover:text-blue-400 transition-colors" href="#insights">Insights</a>
<a className="hover:text-blue-400 transition-colors" href="#requirements">Requirements</a>
<a className="px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]" href="#contact">
                    Client Portal
                </a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-semibold tracking-widest text-blue-300 uppercase font-tech">System Operational</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 leading-none font-tech">
                Secure Your Status.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 text-glow">Get Verified.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The elite solution for securing your blue badge on Meta platforms. <br className="hidden md:block"/>Advanced privacy. No passwords required. 100% control.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group" href="#contact">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
                    Order Meta Verification
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#insights">
                    Latest Insights
                </a>
</div>
</div>
</header>

<section className="py-24 relative" id="verification">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-[#050A30]/50 backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
<div className="space-y-8">
<div>
<h2 className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2 font-tech">Flagship Service</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-tech">Priority Meta Verification</h3>
<p className="text-slate-400 leading-relaxed">
                                We verify accounts that are typically ineligible using advanced Business Manager (BM) access methods. This is not a hack; it is a legitimate, streamlined protocol.
                            </p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors group">
<div className="mt-1 text-blue-400 bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Security First Protocol</h4>
<p className="text-sm text-slate-400">Our process requires <span className="text-white font-semibold">no passwords</span>. Your account remains secure.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full"></div>
<div className="relative bg-[#020413] border border-blue-500/30 rounded-2xl p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
<div className="space-y-1"><div className="w-24 h-2 bg-white/20 rounded-full"></div><div className="w-16 h-2 bg-white/10 rounded-full"></div></div>
</div>
<div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-mono animate-pulse">VERIFICATION ACTIVE</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-blue-900/10 border border-blue-500/20">
<div className="flex items-center gap-3"><iconify-icon className="text-blue-500" icon="lucide:check-circle" width="20"></iconify-icon><span className="text-sm text-slate-300">Identity Confirmed</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030616] border-y border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-tech">Growth Protocols</h2>
<p className="text-slate-400">Data-driven optimization for elite entities.</p>
</div>
<div className="hidden md:block w-32 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-tech">Elite Copywriting</h3>
<p className="text-sm text-slate-400 leading-relaxed">High-converting, psychological narratives tailored for luxury brands.</p>
</div>
<div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-tech">Social Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">Data-driven organic growth plans designed to dominate your niche.</p>
</div>
<div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-tech">SEO Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed">Technical and content-driven structures to maximize visibility.</p>
</div>
<div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3 font-tech">Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Streamlining business processes through custom scripts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="insights">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<h2 className="text-xs font-bold text-blue-400 tracking-widest uppercase font-tech">Intelligence Feed</h2>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white font-tech">Elite Insights</h2>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 transition-colors" onclick="filterPosts('all')">All</button>
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors" onclick="filterPosts('Verification News')">Verification</button>
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors" onclick="filterPosts('SEO Tips')">SEO</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-grid">

</div>

<div className="hidden text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5" id="no-posts">
<iconify-icon className="text-slate-600 text-4xl mb-4" icon="lucide:inbox"></iconify-icon>
<p className="text-slate-500 font-tech">No insights currently available.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#030616] border-y border-white/5" id="requirements">
<div className="max-w-4xl mx-auto px-6">
<div className="rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-2xl">
<div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
<div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
<div className="text-xs text-slate-400 font-mono ml-4">root@metaelite:~/system-requirements</div>
</div>
<div className="p-8 font-mono text-sm leading-relaxed space-y-8">
<div>
<p className="text-blue-400 mb-2">$ cat client_requirements.txt</p>
<ul className="space-y-2 text-slate-300 pl-4 border-l border-slate-700">
<li><span className="text-green-500">✓</span> Must provide active email for Business Manager access.</li>
<li><span className="text-green-500">✓</span> Valid card required for Meta's subscription.</li>
</ul>
</div>
<div className="animate-pulse text-blue-400">$ _</div>
</div>
</div>
</div>
</section>

<footer className="py-20 relative overflow-hidden bg-[#020413]" id="contact">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/20 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-tech">Initiate Protocol</h2>
<p className="text-slate-400 mb-8 max-w-md">Ready to secure your digital authority? Submit your details below.</p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-blue-400" icon="lucide:mail"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider">Secure Comms</p>
<p className="font-medium">concierge@metaelite.shop</p>
</div>
</div>
</div>
</div>
<form className="glass-panel p-8 rounded-3xl space-y-6 shadow-2xl">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-[#050A30] border border-blue-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-slate-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Business Email</label>
<input className="w-full bg-[#050A30] border border-blue-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-slate-600" placeholder="john@company.com" type="email"/>
</div>
</div>
<button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] tracking-wide uppercase font-tech" type="button">
                    Submit Order Request
                </button>
</form>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 META ELITE SHOP. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="hover:text-blue-400 transition-colors" href="#">Terms</a>

<button className="text-slate-700 hover:text-blue-500 transition-colors" onclick="toggleAdminPanel()" title="Admin Login">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
</button>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden bg-[#020413]/95 backdrop-blur-xl overflow-y-auto" id="admin-panel">

<div className="min-h-screen flex items-center justify-center p-6" id="admin-login">
<div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
<div className="text-center mb-8">
<div className="w-12 h-12 mx-auto rounded bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="lucide:shield-alert" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-bold text-white font-tech">System Access</h2>
<p className="text-slate-400 text-sm mt-2">Restricted Area. Authorized Personnel Only.</p>
</div>
<form className="space-y-4" onsubmit="handleAdminLogin(event)">
<input className="w-full bg-[#050A30] border border-blue-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all text-center tracking-widest" id="admin-password" placeholder="ENTER PASSCODE" type="password"/>
<button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all uppercase font-tech tracking-wide" type="submit">Authenticate</button>
</form>
<button className="w-full mt-4 text-xs text-slate-500 hover:text-white transition-colors" onclick="toggleAdminPanel()">Cancel Access Request</button>
</div>
</div>

<div className="hidden min-h-screen" id="admin-dashboard">

<div className="sticky top-0 bg-[#020413]/90 border-b border-white/5 p-4 md:px-8 flex justify-between items-center backdrop-blur-md z-10">
<div className="flex items-center gap-3">
<span className="text-blue-500 font-bold font-tech">META ELITE SHOP </span>
<span className="px-2 py-0.5 rounded bg-blue-900/30 border border-blue-500/30 text-[10px] text-blue-300 uppercase">CMS v1.0</span>
</div>
<button className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1" onclick="adminLogout()">
<iconify-icon icon="lucide:log-out"></iconify-icon> Log Out
                </button>
</div>
<div className="max-w-6xl mx-auto p-6 md:p-8 grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="glass-panel p-6 rounded-xl sticky top-24">
<h3 className="text-white font-bold mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="lucide:plus-circle"></iconify-icon> New Entry
                        </h3>
<form className="space-y-4" onsubmit="handlePostSubmit(event)">
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-bold">Headline</label>
<input className="w-full bg-[#050A30] border border-white/10 rounded p-3 text-sm text-white focus:border-blue-500 focus:outline-none" id="post-title" placeholder="e.g. Meta Verification Update 2024" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-bold">Category</label>
<select className="w-full bg-[#050A30] border border-white/10 rounded p-3 text-sm text-white focus:border-blue-500 focus:outline-none" id="post-category">
<option value="Verification News">Verification News</option>
<option value="SEO Tips">SEO Tips</option>
<option value="Brand Updates">Brand Updates</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-bold">Feature Image URL</label>
<input className="w-full bg-[#050A30] border border-white/10 rounded p-3 text-sm text-white focus:border-blue-500 focus:outline-none" id="post-image" placeholder="https://..." type="url" value="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-bold">Content Body</label>
<textarea className="w-full bg-[#050A30] border border-white/10 rounded p-3 text-sm text-white focus:border-blue-500 focus:outline-none" id="post-body" placeholder="Enter detailed insights here..." required="" rows="6"></textarea>
</div>
<button className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" type="submit">
                                Publish to Grid
                            </button>
</form>
</div>
</div>

<div className="lg:col-span-2 space-y-4">
<h3 className="text-white font-bold mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="lucide:database"></iconify-icon> Database Records
                    </h3>
<div className="space-y-3" id="admin-posts-list">

</div>
</div>
</div>
</div>
</div>



    </>
  );
}
