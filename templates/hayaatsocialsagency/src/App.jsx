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



        // --- DATA STATE ---
        const defaultPortfolio = [
            { id: 1, title: 'Summer Campaign', category: 'Commercial', type: 'link', src: 'https://cdn.coverr.co/videos/coverr-surfer-at-sunset-105/1080p.mp4' },
            { id: 2, title: 'Urban Lifestyle', category: 'Socials', type: 'link', src: 'https://cdn.coverr.co/videos/coverr-skateboarding-in-the-street-5136/1080p.mp4' },
            { id: 3, title: 'Tech Showcase', category: 'Product', type: 'link', src: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-4137/1080p.mp4' }
        ];

        const defaultBlog = [
            { 
                id: 1, 
                title: 'Why Digital Marketing is your First Priority', 
                date: 'Oct 12, 2023', 
                img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
                content: 'In today\'s saturated market, having a great product isn\'t enough. Without a robust funnel and paid acquisition strategy, you are invisible. We breakdown how SEO and Meta Ads work together...' 
            },
            { 
                id: 2, 
                title: 'The Rise of AI in Content Creation', 
                date: 'Sep 28, 2023', 
                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
                content: 'Generative AI is not replacing creativity, it is amplifying it. We use Midjourney and LLMs to iterate concepts 10x faster than traditional agencies.' 
            }
        ];

        let state = {
            portfolio: JSON.parse(localStorage.getItem('hayaat_pf_v2')) || defaultPortfolio,
            blog: JSON.parse(localStorage.getItem('hayaat_bl_v2')) || defaultBlog
        };

        // --- NAVIGATION & ROUTING ---
        function router(viewName) {
            // Hide all main views
            document.querySelectorAll('.app-view').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => { if(!el.classList.contains('active')) el.style.display = 'none'; }, 400); 
            });

            // Specific logic for transitions
            const target = document.getElementById('view-' + viewName);
            if (target) {
                target.style.display = 'block';
                setTimeout(() => target.classList.add('active'), 10);
            }

            if(viewName === 'admin') {
                renderAdminPortfolio();
                renderAdminBlog();
            }
            
            // Scroll to top when switching full views
            window.scrollTo(0,0);
        }

        // --- SECURITY & HASH HANDLING ---
        function checkRoute() {
            const hash = window.location.hash;
            if (hash === '#admin') {
                router('login');
            } else if (hash.startsWith('#')) {
                // Normal navigation anchor
                if(document.getElementById('view-main').style.display === 'none' && !hash.includes('admin')) {
                    router('main');
                    setTimeout(() => {
                        const el = document.querySelector(hash);
                        if(el) el.scrollIntoView();
                    }, 100);
                }
            } else {
                router('main');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const pass = document.getElementById('admin-password').value;
            // Password Check (Static)
            if (pass === 'admin123') {
                router('admin');
            } else {
                alert('Incorrect password');
                document.getElementById('admin-password').value = '';
            }
        }

        function navigateToSection(sectionId, fromDetail = false) {
            // Set hash to support browser history, but handle view switching manually if needed
            window.history.pushState(null, null, `#${sectionId}`);
            
            if (fromDetail || document.getElementById('view-main').style.display === 'none') {
                router('main');
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const el = document.getElementById(sectionId);
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function openBlogDetail(id) {
            const post = state.blog.find(b => b.id === id);
            if(!post) return;

            const contentDiv = document.getElementById('blog-detail-content');
            contentDiv.innerHTML = `
                <div class="aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-white/10">
                    <img src="${post.img}" class="w-full h-full object-cover">
                </div>
                <h1 class="text-4xl font-bold text-white mb-4 tracking-tight">${post.title}</h1>
                <div class="text-indigo-400 text-sm font-medium mb-8">${post.date}</div>
                <div class="prose prose-invert prose-lg max-w-none text-zinc-400">
                    <p>${post.content}</p>
                    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            `;
            router('blog-detail');
        }

        // --- RENDERING ---
        
        function renderPortfolio() {
            const grid = document.getElementById('portfolio-grid');
            grid.innerHTML = state.portfolio.map(item => `
                <div class="group relative block rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                    <div class="aspect-video relative">
                        <video src="${item.src}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" muted loop onmouseover="this.play()" onmouseout="this.pause()"></video>
                        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div class="w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/10 group-hover:opacity-0 transition-opacity">
                                <span class="iconify pl-0.5" data-icon="lucide:play" data-width="16"></span>
                            </div>
                        </div>
                        <div class="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 class="text-white font-medium text-sm">${item.title}</h3>
                            <p class="text-xs text-zinc-400 uppercase">${item.category}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderBlogList() {
            const container = document.getElementById('blog-list-container');
            container.innerHTML = state.blog.map(post => `
                <div onclick="openBlogDetail(${post.id})" class="cursor-pointer group glass p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-white/20 transition-all">
                    <div class="w-full md:w-48 aspect-video rounded-lg overflow-hidden bg-zinc-800">
                        <img src="${post.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex-1">
                        <div class="text-xs text-indigo-400 font-medium mb-2">${post.date}</div>
                        <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">${post.title}</h3>
                        <p class="text-sm text-zinc-500 line-clamp-2">${post.content}</p>
                    </div>
                </div>
            `).join('');
        }

        // --- ADMIN FUNCTIONS ---

        function toggleVideoInput(type) {
            if(type === 'upload') {
                document.getElementById('video-input-upload').classList.remove('hidden');
                document.getElementById('video-input-link').classList.add('hidden');
            } else {
                document.getElementById('video-input-upload').classList.add('hidden');
                document.getElementById('video-input-link').classList.remove('hidden');
            }
        }

        function switchAdminTab(tabName) {
            document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById('admin-tab-' + tabName).classList.remove('hidden');
        }

        function renderAdminPortfolio() {
            const tbody = document.getElementById('admin-portfolio-list');
            tbody.innerHTML = state.portfolio.map(item => `
                <tr class="group hover:bg-white/5 transition-colors">
                    <td class="py-3 pl-2 text-white">${item.title}</td>
                    <td class="py-3 text-zinc-500 text-xs uppercase">${item.type || 'link'}</td>
                    <td class="py-3 text-right pr-2">
                        <button onclick="deletePortfolio(${item.id})" class="text-red-400 hover:text-red-300 text-xs font-medium border border-red-900/30 bg-red-900/10 px-2 py-1 rounded">Delete</button>
                    </td>
                </tr>
            `).join('');
        }

        function renderAdminBlog() {
            const list = document.getElementById('admin-blog-list');
            list.innerHTML = state.blog.map(item => `
                <div class="flex justify-between items-center p-4 bg-zinc-900/50 border border-white/5 rounded-lg">
                    <div>
                        <h4 class="text-white font-medium text-sm">${item.title}</h4>
                        <span class="text-xs text-zinc-500">${item.date}</span>
                    </div>
                    <button onclick="deleteBlog(${item.id})" class="text-red-400 hover:text-red-300 text-xs font-medium border border-red-900/30 bg-red-900/10 px-2 py-1 rounded">Delete</button>
                </div>
            `).join('');
        }

        // --- CMS LOGIC ---

        // Add Video
        document.getElementById('add-portfolio-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('pf-title').value;
            const category = document.getElementById('pf-cat').value;
            const inputType = document.querySelector('input[name="videoType"]:checked').value;
            
            let videoSrc = '';

            if (inputType === 'upload') {
                const fileInput = document.getElementById('pf-file');
                if (fileInput.files && fileInput.files[0]) {
                    videoSrc = URL.createObjectURL(fileInput.files[0]);
                } else {
                    alert("Please select a file");
                    return;
                }
            } else {
                videoSrc = document.getElementById('pf-link').value;
            }

            const newItem = {
                id: Date.now(),
                title: title,
                category: category,
                type: inputType,
                src: videoSrc
            };

            state.portfolio.unshift(newItem);
            saveState();
            renderAdminPortfolio();
            renderPortfolio();
            e.target.reset();
            alert("Video added!");
        });

        // Add Blog
        document.getElementById('add-blog-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const newItem = {
                id: Date.now(),
                title: document.getElementById('blog-title').value,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                img: document.getElementById('blog-img').value || 'https://via.placeholder.com/800x600',
                content: document.getElementById('blog-content').value
            };
            state.blog.unshift(newItem);
            saveState();
            renderAdminBlog();
            renderBlogList();
            e.target.reset();
        });

        window.deletePortfolio = (id) => {
            if(confirm('Delete this project?')) {
                state.portfolio = state.portfolio.filter(i => i.id !== id);
                saveState();
                renderAdminPortfolio();
                renderPortfolio();
            }
        };

        window.deleteBlog = (id) => {
            if(confirm('Delete this post?')) {
                state.blog = state.blog.filter(i => i.id !== id);
                saveState();
                renderAdminBlog();
                renderBlogList();
            }
        };

        function saveState() {
            const cleanPortfolio = state.portfolio.filter(p => !p.src.startsWith('blob:'));
            localStorage.setItem('hayaat_pf_v2', JSON.stringify(cleanPortfolio));
            localStorage.setItem('hayaat_bl_v2', JSON.stringify(state.blog));
        }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderPortfolio();
            renderBlogList();
            checkRoute();
        });
        
        window.addEventListener('hashchange', checkRoute);

    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tight text-sm uppercase hover:opacity-80 transition-opacity flex items-center gap-2" href="#" onclick="navigateToSection('home')">
                Hayaat Socials
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#home" onclick="navigateToSection('home')">Home</a>
<a className="hover:text-white transition-colors" href="#services" onclick="navigateToSection('services')">Services</a>
<a className="hover:text-white transition-colors" href="#work" onclick="navigateToSection('work')">Our Work</a>
<a className="hover:text-white transition-colors" href="#about" onclick="navigateToSection('about')">About</a>
<a className="hover:text-white transition-colors" href="#contact" onclick="navigateToSection('contact')">Contact</a>
</div>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<main className="flex-grow pt-0">

<div className="app-view active" id="view-main">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 animate-enter">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Accepting new visionaries
                    </div>
<h1 className="text-4xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 animate-enter delay-100">
                        We build brands that<br/>
<span className="text-gradient">dominate the feed.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-enter delay-200">
                        A full-service digital agency. We blend high-end production with aggressive growth strategies to turn views into revenue.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group" href="#work" onclick="navigateToSection('work')">
                            View Portfolio
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-colors" href="#contact" onclick="navigateToSection('contact')">
                            Start Project
                        </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Our Services</h2>
<p className="text-zinc-500 mt-2">Strategic solutions ordered by impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-active p-8 rounded-3xl hover:bg-indigo-900/10 transition-colors">
<span className="iconify text-indigo-400 mb-6" data-icon="lucide:trending-up" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">Digital Marketing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Comprehensive funnels, paid acquisition, and SEO strategies designed for conversion.</p>
</div>

<div className="glass-active p-8 rounded-3xl hover:bg-indigo-900/10 transition-colors">
<span className="iconify text-indigo-400 mb-6" data-icon="lucide:scissors" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">Video Editing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">High-retention editing for YouTube and long-form. Storytelling that keeps retention graphs flat.</p>
</div>

<div className="glass p-8 rounded-3xl hover:border-white/20 transition-colors">
<span className="iconify text-white mb-6" data-icon="lucide:pen-tool" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">Graphic Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Thumbnails, social assets, and brand identity kits that ensure visual consistency.</p>
</div>

<div className="glass p-8 rounded-3xl hover:border-white/20 transition-colors">
<span className="iconify text-white mb-6" data-icon="lucide:smartphone" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">Short-form &amp; Reels</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Vertical content optimized for viral reach on TikTok, Reels, and Shorts.</p>
</div>

<div className="glass p-8 rounded-3xl hover:border-white/20 transition-colors">
<span className="iconify text-white mb-6" data-icon="lucide:bot" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">AI-Powered Content</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Leveraging LLMs and generative image models to scale content output.</p>
</div>

<div className="glass p-8 rounded-3xl hover:border-white/20 transition-colors">
<span className="iconify text-white mb-6" data-icon="lucide:video" data-width="28"></span>
<h3 className="text-xl font-medium text-white mb-2">Video Production</h3>
<p className="text-sm text-zinc-400 leading-relaxed">On-location shooting, directing, and equipment rental for commercial advertisements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Selected Works</h2>
<p className="text-zinc-500 mt-2">Our latest campaigns and edits.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">

</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-900/30" id="blog-section">
<div className="max-w-4xl mx-auto">
<div className="mb-12 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight">Insights</h2>
<p className="text-zinc-500 mt-2">Latest thoughts from the team.</p>
</div>
<div className="space-y-6" id="blog-list-container">

</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="about">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Not just an agency. <br/> A growth partner.</h2>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Hayaat Socials was founded on the belief that speed and quality are not mutually exclusive. We leverage modern tools and a global network of talent to deliver premium creative assets without the bloat of traditional agencies.
                    </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8">
<div><div className="text-3xl font-bold text-white tracking-tight">50+</div><div className="text-xs text-zinc-500 uppercase mt-2">Clients</div></div>
<div><div className="text-3xl font-bold text-white tracking-tight">24h</div><div className="text-xs text-zinc-500 uppercase mt-2">Turnaround</div></div>
<div><div className="text-3xl font-bold text-white tracking-tight">10M+</div><div className="text-xs text-zinc-500 uppercase mt-2">Views</div></div>
<div><div className="text-3xl font-bold text-white tracking-tight">100%</div><div className="text-xs text-zinc-500 uppercase mt-2">Remote</div></div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="contact">
<div className="max-w-xl mx-auto w-full glass p-8 md:p-12 rounded-3xl">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Let's Talk</h2>
<p className="text-sm text-zinc-500 mt-1">Tell us about your project.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="input-base" placeholder="First Name" type="text"/>
<input className="input-base" placeholder="Last Name" type="text"/>
</div>
<input className="input-base" placeholder="Email Address" type="email"/>
<select className="input-base text-zinc-400">
<option>Digital Marketing</option>
<option>Video Production</option>
<option>Content Strategy</option>
<option>Other</option>
</select>
<textarea className="input-base" placeholder="Project Details" rows="4"></textarea>
<button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition-colors" type="button">
                            Send Message
                        </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-white font-semibold tracking-widest text-xs uppercase">Hayaat Socials</span>
<p className="text-xs text-zinc-600 mt-1">© 2024. All rights reserved.</p>

<a className="text-[10px] text-zinc-800 hover:text-zinc-600 transition-colors mt-2 inline-block font-medium" href="#admin">Admin Login</a>
</div>
<div className="flex gap-6 items-center">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>
</div>

<div className="app-view" id="view-blog-detail">
<div className="pt-24 pb-20 px-6 min-h-screen bg-zinc-950">
<div className="max-w-3xl mx-auto">
<button className="mb-8 flex items-center text-sm text-zinc-400 hover:text-white transition-colors group" onclick="navigateToSection('home', true)">
<span className="iconify mr-2 group-hover:-translate-x-1 transition-transform" data-icon="lucide:arrow-left" data-width="16"></span>
                        Back to Home
                    </button>
<div className="animate-enter" id="blog-detail-content">

</div>
</div>
</div>
</div>

<div className="app-view" id="view-login">
<div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
<div className="glass p-8 rounded-2xl w-full max-w-sm">
<div className="flex justify-center mb-6">
<div className="p-3 bg-white/5 rounded-full">
<span className="iconify text-zinc-400" data-icon="lucide:lock" data-width="24"></span>
</div>
</div>
<h2 className="text-center text-xl font-semibold text-white mb-2">Restricted Access</h2>
<p className="text-center text-sm text-zinc-500 mb-6">Enter admin password (admin123)</p>
<form className="space-y-4" onsubmit="handleLogin(event)">
<input className="input-base text-center tracking-widest" id="admin-password" placeholder="Password" required="" type="password"/>
<button className="w-full bg-white text-zinc-950 font-semibold py-2 rounded-lg hover:bg-zinc-200 transition-colors text-sm" type="submit">
                            Access Dashboard
                        </button>
</form>
<div className="text-center mt-6">
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#" onclick="window.location.hash=''; router('main');">Return to Website</a>
</div>
</div>
</div>
</div>

<div className="app-view" id="view-admin">
<div className="flex min-h-screen pt-16">

<aside className="w-64 border-r border-white/5 bg-zinc-900/50 hidden md:block fixed h-full z-40">
<div className="p-6">
<h2 className="text-white font-semibold tracking-tight">CMS Dashboard</h2>
</div>
<nav className="mt-4 px-4 space-y-2">
<button className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md" onclick="switchAdminTab('portfolio')">Portfolio Videos</button>
<button className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md" onclick="switchAdminTab('blog')">Blog Posts</button>
</nav>
</aside>

<div className="flex-1 md:ml-64 p-8 bg-zinc-950 min-h-screen">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-semibold text-white" id="admin-title">Manage Content</h2>
<button className="text-xs text-zinc-500 hover:text-white border border-white/10 px-3 py-1.5 rounded-md" onclick="window.location.hash=''; router('main')">Exit Dashboard</button>
</div>

<div className="admin-tab-content" id="admin-tab-portfolio">
<div className="glass p-6 rounded-xl mb-8">
<h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">Add New Video</h3>
<form className="grid grid-cols-1 md:grid-cols-2 gap-4" id="add-portfolio-form">
<input className="input-base" id="pf-title" placeholder="Project Title" required="" type="text"/>
<input className="input-base" id="pf-cat" placeholder="Category (e.g. Socials)" required="" type="text"/>
<div className="md:col-span-2 space-y-2">
<label className="text-xs text-zinc-500 block">Video Source</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" name="videoType" onclick="toggleVideoInput('upload')" type="radio" value="upload"/> <span className="text-sm text-zinc-300">Upload File</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input name="videoType" onclick="toggleVideoInput('link')" type="radio" value="link"/> <span className="text-sm text-zinc-300">Direct Link / Embed</span>
</label>
</div>
</div>

<div className="md:col-span-2" id="video-input-upload">
<input accept="video/*" className="text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700" id="pf-file" type="file"/>
<p className="text-[10px] text-zinc-500 mt-1">Supports MP4, WebM. Max 10MB recommended for demo.</p>
</div>

<div className="md:col-span-2 hidden" id="video-input-link">
<input className="input-base" id="pf-link" placeholder="https://..." type="url"/>
</div>
<button className="md:col-span-2 bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 mt-2" type="submit">Add Video to Gallery</button>
</form>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-zinc-400">
<thead className="border-b border-white/5 text-zinc-500 font-medium">
<tr>
<th className="pb-3 pl-2">Video Title</th>
<th className="pb-3">Type</th>
<th className="pb-3 text-right pr-2">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="admin-portfolio-list">

</tbody>
</table>
</div>
</div>

<div className="admin-tab-content hidden" id="admin-tab-blog">
<div className="glass p-6 rounded-xl mb-8">
<h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">Publish Article</h3>
<form className="space-y-4" id="add-blog-form">
<input className="input-base" id="blog-title" placeholder="Post Title" required="" type="text"/>
<input className="input-base" id="blog-img" placeholder="Thumbnail Image URL" type="url"/>
<textarea className="input-base" id="blog-content" placeholder="Article Content (Supports basic HTML)" required="" rows="6"></textarea>
<button className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-indigo-500" type="submit">Publish Post</button>
</form>
</div>
<div className="space-y-4" id="admin-blog-list">

</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
