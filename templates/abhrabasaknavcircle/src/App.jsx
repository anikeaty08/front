import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: { 850: '#1f1f22', 950: '#09090b' }
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // --- DATA STATE ---
        const defaultProjects = [
            { id: 1, title: 'Nebula UI', desc: 'React component library for SaaS', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', link: 'https://example.com' },
            { id: 2, title: 'FinDash', desc: 'AI-powered financial analytics dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', link: 'https://example.com' },
            { id: 3, title: 'Chronos', desc: 'Time management protocol for remote teams', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', link: 'https://example.com' }
        ];

        const defaultPosts = [
            { id: 1, title: 'The Future of Interface Design', content: 'Exploring the shift towards spatial computing and how it affects flat design systems...', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', date: 'Oct 24, 2023' },
            { id: 2, title: 'Optimizing Animation Performance', content: 'Technical deep dive into using GPU acceleration for 60fps web animations.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80', date: 'Sep 12, 2023' }
        ];

        let projects = JSON.parse(localStorage.getItem('abhra_projects')) || defaultProjects;
        let posts = JSON.parse(localStorage.getItem('abhra_posts')) || defaultPosts;
        let config = JSON.parse(localStorage.getItem('abhra_config')) || { tagline: 'Design Engineer & Creative Developer building digital experiences.', about: 'I am a multidisciplinary developer focused on creating fluid, user-centric interfaces. With a passion for clean code and modern design systems, I help brands elevate their digital presence.' };

        // --- AUTHENTICATION STATE ---
        const passwords = ["abhra0299abhra", "9593624493", "9593767648"];
        let authStep = 0;
        let isAuthenticated = sessionStorage.getItem('abhra_auth') === 'true';

        // --- INIT ---
        document.addEventListener('DOMContentLoaded', () => {
            loadContent();
            if(isAuthenticated) {
                // If already logged in this session, admin button goes straight to dashboard
            }
        });

        // --- NAVIGATION ---
        function showSection(id) {
            document.querySelectorAll('.section-view').forEach(el => {
                el.classList.add('hidden');
            });
            const target = document.getElementById(id);
            target.classList.remove('hidden');
            
            // Re-trigger animations
            target.querySelectorAll('.fade-in, .slide-up').forEach(el => {
                el.style.animationName = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animationName = '';
            });

            window.scrollTo(0, 0);
        }

        // --- RENDERING ---
        function loadContent() {
            // Update Text
            document.getElementById('hero-tagline').textContent = config.tagline;
            document.getElementById('about-text').textContent = config.about;
            document.getElementById('admin-tagline').value = config.tagline;
            document.getElementById('admin-about').value = config.about;

            // Render Projects (Public)
            const pGrid = document.getElementById('projects-grid');
            pGrid.innerHTML = projects.map(p => `
                <a href="${p.link}" target="_blank" class="group block bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all card-hover">
                    <div class="aspect-video w-full overflow-hidden">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                    </div>
                    <div class="p-5">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-zinc-100 font-medium text-lg tracking-tight">${p.title}</h3>
                            <iconify-icon icon="solar:arrow-right-up-linear" class="text-zinc-500 group-hover:text-white transition-colors"></iconify-icon>
                        </div>
                        <p class="text-zinc-500 text-sm leading-relaxed">${p.desc}</p>
                    </div>
                </a>
            `).join('');

            // Render Posts (Public)
            const bGrid = document.getElementById('posts-grid');
            bGrid.innerHTML = posts.map(p => `
                <article class="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all card-hover group">
                    <div class="aspect-[2/1] w-full overflow-hidden">
                         <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                    </div>
                    <div class="p-6">
                        <span class="text-xs font-mono text-zinc-500 mb-2 block">${p.date}</span>
                        <h3 class="text-zinc-100 font-semibold text-xl tracking-tight mb-3 group-hover:text-white">${p.title}</h3>
                        <p class="text-zinc-400 text-sm line-clamp-3 leading-relaxed">${p.content}</p>
                    </div>
                </article>
            `).join('');

            // Render Admin Lists
            renderAdminLists();
        }

        function renderAdminLists() {
            document.getElementById('admin-project-list').innerHTML = projects.map(p => `
                <div class="flex items-center justify-between p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <span class="text-zinc-300 text-sm truncate w-1/2">${p.title}</span>
                    <button onclick="deleteProject(${p.id})" class="text-red-400 hover:text-red-300 text-sm px-2">Delete</button>
                </div>
            `).join('');

            document.getElementById('admin-post-list').innerHTML = posts.map(p => `
                <div class="flex items-center justify-between p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <span class="text-zinc-300 text-sm truncate w-1/2">${p.title}</span>
                    <button onclick="deletePost(${p.id})" class="text-red-400 hover:text-red-300 text-sm px-2">Delete</button>
                </div>
            `).join('');
        }

        // --- ADMIN AUTH LOGIC ---
        function openAdminModal() {
            if (isAuthenticated) {
                document.getElementById('admin-dashboard').classList.remove('hidden');
            } else {
                authStep = 0;
                document.getElementById('login-error').classList.add('hidden');
                document.getElementById('auth-input').value = '';
                document.getElementById('auth-input').placeholder = "Enter Password 1";
                document.getElementById('security-step').textContent = "1";
                document.getElementById('admin-modal').classList.remove('hidden');
                document.getElementById('auth-input').focus();
            }
        }

        function closeAdminModal() {
            document.getElementById('admin-modal').classList.add('hidden');
        }

        function handleLogin(e) {
            e.preventDefault();
            const input = document.getElementById('auth-input');
            const error = document.getElementById('login-error');
            
            if (input.value === passwords[authStep]) {
                authStep++;
                error.classList.add('hidden');
                input.value = '';
                
                if (authStep < 3) {
                    // Next step
                    document.getElementById('security-step').textContent = authStep + 1;
                    input.placeholder = `Enter Password ${authStep + 1}`;
                } else {
                    // Success
                    isAuthenticated = true;
                    sessionStorage.setItem('abhra_auth', 'true');
                    closeAdminModal();
                    document.getElementById('admin-dashboard').classList.remove('hidden');
                }
            } else {
                error.classList.remove('hidden');
                input.classList.add('border-red-500');
                setTimeout(() => input.classList.remove('border-red-500'), 2000);
            }
        }

        function logoutAdmin() {
            isAuthenticated = false;
            sessionStorage.removeItem('abhra_auth');
            document.getElementById('admin-dashboard').classList.add('hidden');
        }

        function closeDashboard() {
            document.getElementById('admin-dashboard').classList.add('hidden');
        }

        // --- CRUD OPERATIONS ---
        function addProject(e) {
            e.preventDefault();
            const form = e.target;
            const newProject = {
                id: Date.now(),
                title: form.title.value,
                desc: form.desc.value,
                image: form.image.value,
                link: form.link.value
            };
            projects.unshift(newProject);
            saveData();
            form.reset();
        }

        function deleteProject(id) {
            if(confirm('Delete this project?')) {
                projects = projects.filter(p => p.id !== id);
                saveData();
            }
        }

        function addPost(e) {
            e.preventDefault();
            const form = e.target;
            const newPost = {
                id: Date.now(),
                title: form.title.value,
                content: form.content.value,
                image: form.image.value,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };
            posts.unshift(newPost);
            saveData();
            form.reset();
        }

        function deletePost(id) {
            if(confirm('Delete this post?')) {
                posts = posts.filter(p => p.id !== id);
                saveData();
            }
        }

        function updateGlobal(e) {
            e.preventDefault();
            config.tagline = document.getElementById('admin-tagline').value;
            config.about = document.getElementById('admin-about').value;
            saveData();
            alert('Settings updated');
        }

        function saveData() {
            localStorage.setItem('abhra_projects', JSON.stringify(projects));
            localStorage.setItem('abhra_posts', JSON.stringify(posts));
            localStorage.setItem('abhra_config', JSON.stringify(config));
            loadContent(); // Refresh UI
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-900/30 rounded-full blur-[128px] mix-blend-screen animate-pulse-slow delay-1000"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tight text-lg z-50 hover:opacity-80 transition-opacity" href="#" onclick="showSection('home')">ABHRA</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<button className="hover:text-zinc-100 transition-colors" onclick="showSection('home')">Home</button>
<button className="hover:text-zinc-100 transition-colors" onclick="showSection('work')">Work</button>
<button className="hover:text-zinc-100 transition-colors" onclick="showSection('posts')">Posts</button>
<button className="hover:text-zinc-100 transition-colors" onclick="showSection('contact')">Contact</button>
</div>

<button className="md:hidden text-zinc-100" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-zinc-950 border-b border-white/5 absolute w-full left-0 top-16 p-4 flex flex-col gap-4 text-sm font-medium" id="mobile-menu">
<button className="text-left hover:text-zinc-100" onclick="showSection('home'); document.getElementById('mobile-menu').classList.add('hidden')">Home</button>
<button className="text-left hover:text-zinc-100" onclick="showSection('work'); document.getElementById('mobile-menu').classList.add('hidden')">Work</button>
<button className="text-left hover:text-zinc-100" onclick="showSection('posts'); document.getElementById('mobile-menu').classList.add('hidden')">Posts</button>
<button className="text-left hover:text-zinc-100" onclick="showSection('contact'); document.getElementById('mobile-menu').classList.add('hidden')">Contact</button>
</div>
</nav>

<main className="flex-grow z-10 pt-24 px-6 max-w-6xl mx-auto w-full pb-20" id="app-content">

<section className="min-h-[80vh] flex flex-col justify-center section-view" id="home">
<div className="max-w-3xl">
<h1 className="text-6xl md:text-8xl font-semibold text-zinc-100 tracking-tighter mb-6 slide-up">
                    Abhra
                </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-light tracking-tight mb-8 slide-up delay-100 leading-relaxed" id="hero-tagline">
                    Design Engineer &amp; Creative Developer building digital experiences.
                </p>
<div className="flex gap-4 slide-up delay-200">
<button className="group relative px-6 py-3 bg-zinc-100 text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:bg-white hover:scale-105" onclick="showSection('work')">
<span className="relative z-10 flex items-center gap-2">
                            View Work <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-white transition-all" onclick="showSection('contact')">
                        Contact Me
                    </button>
</div>
</div>

<div className="mt-32 border-t border-zinc-800 pt-16 grid md:grid-cols-2 gap-12 slide-up delay-300">
<div>
<h2 className="text-zinc-100 text-lg font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:user-circle-linear"></iconify-icon> About Me
                    </h2>
</div>
<div>
<p className="text-zinc-400 leading-7" id="about-text">
                        I am a multidisciplinary developer focused on creating fluid, user-centric interfaces. With a passion for clean code and modern design systems, I help brands elevate their digital presence.
                    </p>
</div>
</div>
</section>

<section className="hidden section-view pt-10" id="work">
<h2 className="text-3xl text-zinc-100 font-semibold tracking-tight mb-12 fade-in">Selected Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">

</div>
</section>

<section className="hidden section-view pt-10" id="posts">
<h2 className="text-3xl text-zinc-100 font-semibold tracking-tight mb-12 fade-in">Thoughts &amp; Updates</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="posts-grid">

</div>
</section>

<section className="hidden section-view pt-10 min-h-[60vh] flex flex-col justify-center" id="contact">
<div className="max-w-2xl">
<h2 className="text-3xl text-zinc-100 font-semibold tracking-tight mb-6 fade-in">Let's create something meaningful.</h2>
<p className="text-zinc-400 mb-8 fade-in delay-100">Open for collaborations and new opportunities.</p>
<div className="flex flex-col gap-4 fade-in delay-200">
<a className="flex items-center gap-3 text-zinc-200 hover:text-white transition-colors p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900" href="mailto:hello@abhra.dev">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon> hello@abhra.dev
                    </a>
<div className="flex gap-4 mt-4" id="social-links">

<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 mt-auto py-8 text-center text-xs text-zinc-600 relative z-10">
<div className="flex justify-center items-center gap-4 mb-4">
<button className="hover:text-zinc-400 transition-colors flex items-center gap-1" onclick="openAdminModal()">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Admin Access
            </button>
</div>
        © 2024 Abhra. All rights reserved.
    </footer>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm hidden flex items-center justify-center" id="admin-modal">
<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300" onclick="closeAdminModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-8">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-100">
<iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg">Admin Authentication</h3>
<p className="text-xs text-zinc-500 mt-2">Security Level <span id="security-step">1</span>/3</p>
</div>
<form className="flex flex-col gap-4" id="admin-login-form" onsubmit="handleLogin(event)">
<div>
<input autofocus="" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition-colors" id="auth-input" placeholder="Enter Password 1" required="" type="password"/>
<p className="text-red-500 text-xs mt-2 hidden" id="login-error">Incorrect password.</p>
</div>
<button className="w-full bg-zinc-100 text-black font-semibold text-sm py-3 rounded-lg hover:bg-white transition-all" type="submit">
                    Verify
                </button>
</form>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black hidden overflow-y-auto" id="admin-dashboard">
<div className="max-w-6xl mx-auto px-6 py-8">
<header className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6">
<h2 className="text-2xl text-zinc-100 font-semibold tracking-tight">Control Panel</h2>
<div className="flex items-center gap-4">
<button className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1" onclick="logoutAdmin()">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Logout
                    </button>
<button className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 border border-zinc-800 px-3 py-1.5 rounded-md" onclick="closeDashboard()">
<iconify-icon icon="solar:eye-linear"></iconify-icon> View Site
                    </button>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
<h3 className="text-zinc-100 font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Add New Project
                        </h3>
<form className="space-y-4" onsubmit="addProject(event)">
<input className="admin-input" name="title" placeholder="Project Title" required="" type="text"/>
<input className="admin-input" name="desc" placeholder="Short Description" required="" type="text"/>
<input className="admin-input" name="image" placeholder="Image URL (Poster)" required="" type="url"/>
<input className="admin-input" name="link" placeholder="Project Link" required="" type="url"/>
<button className="admin-btn" type="submit">Add Project</button>
</form>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
<h3 className="text-zinc-100 font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:document-add-linear"></iconify-icon> Add New Post
                        </h3>
<form className="space-y-4" onsubmit="addPost(event)">
<input className="admin-input" name="title" placeholder="Post Title" required="" type="text"/>
<textarea className="admin-input min-h-[100px]" name="content" placeholder="Content" required=""></textarea>
<input className="admin-input" name="image" placeholder="Cover Image URL" required="" type="url"/>
<button className="admin-btn" type="submit">Publish Post</button>
</form>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
<h3 className="text-zinc-100 font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Global Settings
                        </h3>
<form className="space-y-4" onsubmit="updateGlobal(event)">
<input className="admin-input" id="admin-tagline" placeholder="Hero Tagline" type="text"/>
<textarea className="admin-input min-h-[100px]" id="admin-about" placeholder="About Text"></textarea>
<button className="admin-btn" type="submit">Update Details</button>
</form>
</div>
</div>

<div className="space-y-8">
<div>
<h3 className="text-zinc-100 font-medium mb-4">Manage Projects</h3>
<div className="space-y-3" id="admin-project-list"></div>
</div>
<div>
<h3 className="text-zinc-100 font-medium mb-4">Manage Posts</h3>
<div className="space-y-3" id="admin-post-list"></div>
</div>
</div>
</div>
</div>
</div>

<style>
        .admin-input { width: 100%; background: #000; border: 1px solid #27272a; border-radius: 0.5rem; padding: 0.75rem; color: #fff; font-size: 0.875rem; outline: none; transition: border-color 0.2s; }
        .admin-input:focus { border-color: #52525b; }
        .admin-btn { width: 100%; background: #fff; color: #000; font-weight: 600; font-size: 0.875rem; padding: 0.75rem; border-radius: 0.5rem; transition: background 0.2s; }
        .admin-btn:hover { background: #e4e4e7; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
    </style>


    </>
  );
}
