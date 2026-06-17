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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e',
900: '#881337',
},
dark: {
900: '#0a0a0a',
800: '#171717',
700: '#262626',
600: '#404040'
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'fade-in': 'fadeIn 1s ease-out both',
'blur-in': 'blurIn 0.8s ease-out both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(10px)' },
'100%': { opacity: '1', filter: 'blur(0)' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



(function () {
    console.log('[ContactForm] Initializing…');

    // --- Supabase Client (same project you’ll use in admin) ---
    const SUPABASE_URL = 'https://atlihrrlfxpmplldomoa.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0bGlocnJsZnhwbXBsbGRvbW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3NTY3ODMsImV4cCI6MjA4MTMzMjc4M30.7NZdMQ3baRO1s10La5PA4RcQDcPmDcBemq_MjTk1tm0';

    if (typeof window.supabase === 'undefined') {
        console.error('[ContactForm] Supabase JS not loaded – check <script src> in <head>');
        return;
    }

    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function handleContactSubmit(e) {
        e.preventDefault();

        const btn = document.getElementById('submitBtn');
        const status = document.getElementById('formStatus');
        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const messageEl = document.getElementById('message');

        const name = (nameEl && nameEl.value || '').trim();
        const email = (emailEl && emailEl.value || '').trim();
        const message = (messageEl && messageEl.value || '').trim();

        if (!name || !email || !message) {
            status.textContent = 'Please complete all fields.';
            status.classList.remove('text-green-500');
            status.classList.add('text-red-500');
            return;
        }

        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<span>Sending...</span>';
        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');

        try {
            const payload = { name, email, message, answered: false };

            // Insert into Supabase table "contacts"
            const { error } = await supabaseClient
                .from('contacts')
                .insert([payload]);

            if (error) {
                console.error('[ContactForm] Supabase insert error:', error);
                throw error;
            }

            // 1) Clear fields
            const form = document.getElementById('contactForm');
            if (form) form.reset();

            // 2) Show notification text + alert
            status.textContent = 'We have received your message.';
            status.classList.remove('text-red-500');
            status.classList.add('text-green-500');
            alert('We have received your message.');

            // Button success state
            btn.innerHTML = '<span>Sent Successfully</span>';
            btn.classList.remove('bg-neutral-900', 'dark:bg-white');
            btn.classList.add('bg-green-600', 'text-white');

        } catch (err) {
            console.error('[ContactForm] Submission error:', err);
            status.textContent = 'Something went wrong. Please try again.';
            status.classList.remove('text-green-500');
            status.classList.add('text-red-500');
        } finally {
            // Reset button after a short delay
            setTimeout(() => {
                btn.innerHTML = originalHtml;
                btn.disabled = false;
                btn.classList.remove('opacity-70', 'cursor-not-allowed', 'bg-green-600', 'text-white');
                btn.classList.add('bg-neutral-900', 'dark:bg-white', 'dark:text-neutral-900');
            }, 2500);
        }
    }

    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.warn('[ContactForm] contactForm not found');
            return;
        }
        contactForm.addEventListener('submit', handleContactSubmit);
        console.log('[ContactForm] Listener attached');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();



// --- ADMIN DATABASE CONFIG (Must match the one in contact form script) ---
const ADMIN_SUPABASE_URL = 'https://atlihrrlfxpmplldomoa.supabase.co';
const ADMIN_SUPABASE_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0bGlocnJsZnhwbXBsbGRvbW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3NTY3ODMsImV4cCI6MjA4MTMzMjc4M30.7NZdMQ3baRO1s10La5PA4RcQDcPmDcBemq_MjTk1tm0';
        
        const isAdminLiveMode = ADMIN_SUPABASE_URL.startsWith('http');
        const adminSupabase = isAdminLiveMode && typeof window.supabase !== 'undefined'
            ? window.supabase.createClient(ADMIN_SUPABASE_URL, ADMIN_SUPABASE_KEY)
            : null;

        // Toggle Admin Portal Visibility
        function toggleAdminPortal() {
            const portal = document.getElementById('admin-portal');
            const publicSite = document.getElementById('public-site');

            if (portal.classList.contains('hidden')) {
                portal.classList.remove('hidden');
                publicSite.classList.add('hidden');
                document.getElementById('admin-pass').value = '';
            } else {
                portal.classList.add('hidden');
                publicSite.classList.remove('hidden');
                document.getElementById('admin-login').classList.remove('hidden');
                document.getElementById('dashboard-content').classList.add('hidden');
            }
        }

        // Login Check (new password)
        function checkLogin() {
            const pass = document.getElementById('admin-pass').value;
            if (pass === 'Baandlaw2025!') {
                document.getElementById('admin-login').classList.add('hidden');
                document.getElementById('dashboard-content').classList.remove('hidden');
                renderDashboard();
            } else {
                alert('Incorrect password. Please try again.');
            }
        }

        // Add Enter key support for login
        document.getElementById('admin-pass').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') checkLogin();
        });

        // Render Dashboard Data
        async function renderDashboard() {
            const tbody = document.getElementById('messages-table-body');
            const emptyState = document.getElementById('empty-state');
            const totalCount = document.getElementById('total-count');
            const pendingCount = document.getElementById('pending-count');

            let messages = [];

            if (isAdminLiveMode && adminSupabase) {
                // Live Mode: Fetch from Database
                const { data, error } = await adminSupabase
                    .from('contacts')
                    .select('*')
                    .order('created_at', { ascending: false })
;
                
                if (!error && data) {
                    messages = data;
                } else {
                    console.error("DB Error", error);
                }
            } else {
                // Demo Mode: Fetch from LocalStorage
                messages = JSON.parse(localStorage.getItem('adminMessages')) || [];
            }

            tbody.innerHTML = '';
            
            // Counts
            totalCount.textContent = messages.length;
            pendingCount.textContent = messages.filter(m => !m.answered).length;

            if (messages.length === 0) {
                emptyState.classList.remove('hidden');
                return;
            } else {
                emptyState.classList.add('hidden');
            }

            messages.forEach(msg => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors";
                
                // Format date if it's timestamp or string
                const displayDate = msg.date || msg.created_at?.split('T')[0] || '-';

                const toggleHtml = `
                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle-${msg.id}" 
                            class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-neutral-300"
                            ${msg.answered ? 'checked' : ''} 
                            onchange="toggleMessageStatus('${msg.id}', ${!msg.answered})"/>
                        <label for="toggle-${msg.id}" class="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-300 cursor-pointer"></label>
                    </div>
                    <span class="text-xs font-medium ${msg.answered ? 'text-green-500' : 'text-orange-500'}">
                        ${msg.answered ? 'Done' : 'Pending'}
                    </span>
                `;

                tr.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                           ${toggleHtml}
                        </div>
                    </td>
                    <td class="px-6 py-4 font-medium whitespace-nowrap">${escapeHtml(msg.name)}</td>
                    <td class="px-6 py-4 text-neutral-500 dark:text-neutral-400 whitespace-nowrap">${escapeHtml(msg.email)}</td>
                    <td class="px-6 py-4 max-w-xs truncate" title="${escapeHtml(msg.message)}">${escapeHtml(msg.message)}</td>
                    <td class="px-6 py-4 text-neutral-500 dark:text-neutral-400 whitespace-nowrap text-xs">${displayDate}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        // Toggle Status Logic
        async function toggleMessageStatus(id, newStatus) {
            if (isAdminLiveMode && adminSupabase) {
                // Live Mode Update
                const { error } = await adminSupabase
                    .from('contacts')
                    .update({ answered: newStatus })
                    .eq('id', id);
                
                if (!error) renderDashboard();
            } else {
                // Demo Mode Update
                const messages = JSON.parse(localStorage.getItem('adminMessages')) || [];
                // Handle string/number ID mismatch
                const index = messages.findIndex(m => String(m.id) === String(id));
                if (index !== -1) {
                    messages[index].answered = newStatus;
                    localStorage.setItem('adminMessages', JSON.stringify(messages));
                    renderDashboard();
                }
            }
        }

        // Simple XSS protection
        function escapeHtml(text) {
            if (!text) return '';
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Initialize Lucide Icons
        if (typeof lucide !== 'undefined') {
             lucide.createIcons();
        }

        // Animation Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => { observer.observe(el); });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-white/0', 'dark:bg-dark-900/0');
                navBg.classList.add('bg-white/90', 'dark:bg-dark-900/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100', 'dark:border-neutral-800');
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.remove('text-white');
                     logoText.classList.add('text-neutral-900');
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.remove('text-white/80', 'hover:text-white');
                         link.classList.add('text-neutral-500', 'hover:text-neutral-900');
                     });
                }
            } else {
                navBg.classList.add('bg-white/0', 'dark:bg-dark-900/0');
                navBg.classList.remove('bg-white/90', 'dark:bg-dark-900/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100', 'dark:border-neutral-800');
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.add('text-white');
                     logoText.classList.remove('text-neutral-900');
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.add('text-white/80', 'hover:text-white');
                         link.classList.remove('text-neutral-500', 'hover:text-neutral-900');
                     });
                }
            }
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
      

<div className="" id="public-site">

<nav className="fixed z-50 transition-all duration-300 w-full top-0" id="navbar">
<div className="transition-all duration-300 border-transparent absolute top-0 right-0 bottom-0 left-0 backdrop-blur-none bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800" id="nav-bg"></div>
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="text-white w-8 h-8 overflow-hidden rounded-full" id="logo-icon">
<img alt="Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffd536ef-bf79-4ff9-9300-cc222d47dfb1_320w.jpg"/>
</div>
<span className="group-hover:opacity-80 transition-opacity text-base font-medium text-slate-50 tracking-tight font-serif text-neutral-900" id="logo-text">Belgica Aranas Alim-Baldueza Ng Dela Cruz &amp; Associates</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80" id="nav-links">
<a className="transition-colors text-neutral-500 hover:text-neutral-900" href="#services">Services</a>
<a className="transition-colors text-neutral-500 hover:text-neutral-900" href="#portfolio">About Us</a>
<a className="transition-colors text-neutral-500 hover:text-neutral-900" href="#reviews">Partners</a>

<a className="transition-colors hover:text-neutral-900 text-neutral-500" href="#associates">Associates</a>

<a className="transition-colors text-neutral-500 hover:text-neutral-900" href="#ai-rulebook">Articles</a>
<a className="transition-colors text-neutral-500 hover:text-neutral-900" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-neutral-100 transition-colors text-xs font-medium text-neutral-900 tracking-wide bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">Inquire</a>
</div>

<button className="md:hidden p-2 text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white dark:bg-dark-900 border-b border-neutral-100 dark:border-neutral-800 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#services" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Services</a>
<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#portfolio" onclick="document.getElementById('mobile-menu').classList.add('hidden')">About Us</a>
<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#reviews" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Partners</a>

<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#associates" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Associates</a>
<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#ai-rulebook" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Articles</a>
<a className="text-lg font-serif text-neutral-900 dark:text-white font-sans" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Contact</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[850px] overflow-hidden bg-dark-900">
<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Luxury Beauty" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0136a19-d74a-496f-8a38-3b3ea1abc329_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-dark-900"></div>
<div className="bg-gradient-to-r from-black/60 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="flex flex-col z-10 h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative justify-center">
<div className="max-w-2xl mt-8">
<h1 className="md:text-8xl leading-[0.9] animate-fade-in-up text-6xl font-semibold text-white tracking-tight mb-8" style={{animationDelay: '200ms'}}>Armed with Skill and Heart</h1>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="sm:w-auto hover:bg-neutral-200 transition-colors text-sm font-semibold text-neutral-900 text-center bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="#booking">Inquire
                            Now</a>
<a className="sm:w-auto glass-panel hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group text-sm font-medium text-white w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="#services">
                            Explore Services
                            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="mt-12 animate-fade-in-up" style={{animationDelay: '600ms'}}>
<a className="group relative flex items-center gap-5 p-4 rounded-2xl bg-neutral-900/40 backdrop-blur-md border border-white/10 hover:bg-neutral-900/60 hover:border-white/20 transition-all duration-300 max-w-lg cursor-pointer" href="#ai-rulebook">
<div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-300 border border-yellow-500/30">
<svg className="lucide lucide-file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-yellow-300 font-semibold font-sans">Latest Insight</span>
</div>
<h3 className="text-sm font-medium text-white leading-snug group-hover:text-indigo-200 transition-colors font-sans line-clamp-2">
                                    The Philippines’ AI Rulebook (So Far): Laws, Guidelines &amp; What’s Next
                                </h3>
</div>
<div className="shrink-0 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all pr-2">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>

</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
<span className="text-[10px] uppercase tracking-widest text-white font-sans">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</div>
</header>

<section className="dark:bg-dark-900 bg-white pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row reveal-on-scroll is-visible mb-16 items-start justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-2">Our Services</h2>
<p className="dark:text-neutral-400 text-sm font-light text-neutral-500">Legal Services</p>
</div>
<a className="flex items-center gap-2 hover:text-indigo-400 transition-colors md:mt-0 text-sm font-medium mt-4" href="#all-services">
                        Explore All Services<svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Litigation" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec126bd3-f7cb-4a18-a579-e46cf1bf2254_800w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic font-sans">Litigation</h3>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Corporate" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3260197e-e112-44aa-9156-58b9728a4358_800w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic font-sans">Corporate Law</h3>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Immigration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85a7171a-bb70-4fe5-9c23-f053187e94a1_800w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic font-sans">Immigration</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-dark-800 bg-neutral-50 pt-24 pr-6 pb-24 pl-6" id="portfolio">
<div className="max-w-7xl mr-auto ml-auto">
<div className="reveal-on-scroll text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight">BAAND Law at its core</h2>
</div>
<div className="reveal-on-scroll max-w-4xl mr-auto mb-24 ml-auto">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Firm" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a31681cf-8b7d-4560-b8f9-7c90c90cd55b_1600w.jpg"/>
</div>
</div>
</div>
<section className="reveal-on-scroll max-w-6xl mx-auto mb-24 px-4 md:px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-4">
<p className="text-xs tracking-widest uppercase font-sans mb-3 text-[#800020]">ABOUT US</p>
<h2 className="text-4xl md:text-5xl font-serif leading-tight">Built for complex matters, grounded in
                            trust.</h2>
</div>
<div className="lg:col-span-8">
<div className="space-y-6 text-neutral-600 font-sans leading-relaxed">
<p>We are a Philippine-based law firm providing clear, strategic counsel to individuals and
                                businesses. Our approach is practical and thorough—focused on protecting rights,
                                managing risk, and achieving results.</p>
<p>Whether you need representation in disputes, support for corporate growth, or guidance on
                                immigration matters, we combine careful preparation with responsive client service at
                                every step.</p>
</div>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl overflow-hidden shadow-2xl border border-black/5">
<img alt="Client meeting" className="w-full h-72 md:h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54fc2c31-892b-4088-9dbe-9ca5092d5465_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden shadow-2xl border border-black/5">
<img alt="Team collaboration" className="w-full h-72 md:h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a1935d-7264-4866-b46b-22f0572fd11d_1600w.jpg"/>
</div>
</div>
</section>
</section>

<section className="dark:bg-dark-900 dark:border-neutral-800 bg-white border-neutral-100 border-t pt-24 pr-6 pb-24 pl-6" id="all-services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
<div className="lg:col-span-5 relative">
<div className="sticky top-32 flex flex-col gap-6 reveal-on-scroll">
<div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl">
<img alt="Menu Visual" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eecbb9e-7fdf-4819-8b3d-1e9207e8f928_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<h3 className="text-2xl text-white mb-2 font-sans font-semibold">Legal Services</h3>
<p className="text-white/80 text-xs font-light leading-relaxed mb-4 font-sans">We
                                            provide clear and strategic legal services. From litigation to corporate and
                                            immigration matters, we help you move forward with confidence.
                                            <a className="inline-flex items-center gap-2 text-white text-xs font-medium tracking-wide uppercase hover:text-indigo-300 transition-colors font-sans mt-2" href="#booking">Inquire
                                                Now <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></a>
</p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-8 reveal-on-scroll">
<span className="text-[#800020] font-bold text-[12px] tracking-[0.2em] uppercase font-sans">Services</span>
<h2 className="text-4xl md:text-5xl text-neutral-900 dark:text-white font-serif font-semibold">
                                    Areas of practice</h2>
</div>
<div className="reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
<svg className="lucide lucide-scale" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="m2 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight font-sans">Litigation</h3>
</div>
<div className="grid gap-3">
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Criminal Law</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                                Prosecution and defense for criminal cases</p>
</div>
</div>
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Family Law</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                                Annulment Proceedings, Recognition of Foreign Divorce Decrees, Child Custody, Property Relations, etc.</p>
</div>
</div>
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Labor Law</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                                Dispute resolution on labor issues</p>
</div>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500">
<svg className="lucide lucide-building-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">
</path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight font-sans">Corporate Services</h3>
</div>
<div className="grid gap-3">
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Document Drafting</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                                Preparation of corporate documents such as contracts, deeds,
                                                certificate, etc.</p>
</div>
</div>
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Corporate Development</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                                Mergers, Acquisition, Expansion, etc.</p>
</div>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
<svg className="lucide lucide-globe" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight font-sans">Immigration</h3>
</div>
<div className="grid gap-3">
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Visa Processing</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                               Preparing visa applications such as Special Resident Retiree’s Visa (SRRV), Alien Employment Permits (AEP), 13(a) Non-Quota Immigrant/Spouse Visas, and other family-based visas </p>
</div>
</div>
<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white font-sans">Partnership with Davies and Associates - New York</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%] font-sans">
                                               Structuring and registering U.S. entities for L-1 and E-2 visas, followed by continuous compliance and corporate housekeeping post-immigration, as well as preparing for L-1 and E-2 Visa applications.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-dark-900 bg-neutral-50 border-t border-neutral-100 dark:border-neutral-800 pt-24 pb-24 px-6" id="ai-rulebook">
<div className="max-w-5xl mx-auto">
<div className="mb-8">
<p className="text-xs tracking-[0.25em] uppercase text-[#800020] font-sans mb-3">Insight</p>
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-3">
                        The Philippines’ AI Rulebook (So Far): Laws, New Guidelines, Sector Rules, and What’s Next
                    </h2>
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                        Updated Sept 16, 2025
                    </p>
</div>
<div className="space-y-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 font-sans">
<p>
                        Artificial Intelligence (AI) is no longer a futuristic concept — it is embedded in our everyday lives.
                        Students use AI to enhance research, professionals leverage it to streamline workflows, and creatives
                        employ it to bring bold ideas to life. But as AI becomes more powerful, it also raises pressing questions
                        about privacy, accountability, and ethical use. This article aims to provide organizations, innovators,
                        and compliance teams with a clear baseline to build responsible and lawful AI systems.
                    </p>
<p>
                         There’s no single, comprehensive AI law in force in the Philippines yet.
                        But there are enforceable rules that apply to AI development and use today, led by the Data Privacy Act (DPA)
                        and the National Privacy Commission’s (NPC) 2024 Advisory on AI, plus e-commerce rules, financial-sector
                        model risk proposals, crypto-asset regulations, policy direction from the Supreme Court, and
                        national-security guidance. Congress also has multiple AI bills pending.
                    </p>
<h3 className="text-lg font-semibold mt-8">Data Privacy</h3>
<p>
                        The core privacy law that applies to AI right now is the Data Privacy Act of 2012 (RA 10173) and its
                        Implementing Rules and Regulations. This law is technology-neutral and applies to any processing of personal
                        data, including data used to train, test, and deploy AI systems. The NPC Advisory 2024-04 reminds personal
                        information controllers to ensure accuracy, fairness, transparency, and purpose limitation when processing
                        data through AI workflows. Organizations must disclose the purpose, explain the extent to which AI impacts
                        data, and make such information easily accessible to data subjects.
                    </p>
<p>
                        NPC Advisory Opinion No. 2024-002 (January 2024) further clarifies that the use of AI is permissible under
                        the Data Privacy Act of 2012 (RA 10173), provided that Personal Information Controllers (PICs) continue to
                        comply with the Act’s general privacy principles. PICs using AI must:
                    </p>
<ul className="list-disc pl-6 space-y-2">
<li>Ensure lawful basis for processing personal data, regardless of whether AI technology is used.</li>
<li>Uphold transparency and data subject rights (right to be informed, right to rectification) by providing adequate information and accessible mechanisms.</li>
<li>Conduct a Privacy Impact Assessment (PIA) to evaluate whether AI use is fair, proportional, and necessary considering potential risks to data subjects.</li>
<li>Implement reasonable safeguards to protect personal data when using AI tools such as ChatGPT or other generative models.</li>
</ul>
<p>
                        NPC emphasized that there is “no manifest conflict” between AI use and the DPA, but accountability for
                        AI-driven processing remains with the organization.
                    </p>
<p>
                        NPC Advisory No. 2024-03 (Guidelines on Child-Oriented Transparency) goes further by requiring additional
                        safeguards when AI systems process or are likely to process children’s personal data. Key obligations include:
                    </p>
<ul className="list-disc pl-6 space-y-2">
<li>Conducting Child Privacy Impact Assessments (CPIAs) before launching products or services likely to be accessed by children, and updating these assessments as products evolve.</li>
<li>Implementing high-privacy settings by default, such as disabling geolocation and setting profiles to private.</li>
<li>Providing child-friendly privacy notices that use plain language, are layered for clarity, and can be delivered in alternative formats (videos, infographics, audio) for comprehension.</li>
<li>Engaging parents or guardians when risks are high and verifying their involvement through appropriate methods.</li>
</ul>
<p>
                        These measures should be applied to any AI system targeting or likely to be used by minors.
                    </p>
<h3 className="text-lg font-semibold mt-8">
                        E-Commerce &amp; Consumer Protection: Duties for AI-Enabled Platforms
                    </h3>
<p>
                        With the rise of digital commerce, AI-enabled platforms face heightened obligations under the Internet
                        Transactions Act of 2023 (RA 11967) and its IRR. These rules cover business-to-business and
                        business-to-consumer transactions, requiring platforms and merchants to be transparent, register when
                        required, and implement takedown procedures for scams and unsafe products. AI-powered chatbots,
                        recommendation engines, and ad-tech systems must be fair, accurate, and explainable to consumers.
                    </p>
<h3 className="text-lg font-semibold mt-8">Cross-Cutting Laws &amp; Cybercrime Risks</h3>
<p>
                        AI tools may inadvertently create exposure under other laws. The Cybercrime Prevention Act (RA 10175)
                        penalizes online fraud, identity theft, and hacking — risks amplified by generative AI misuse.
                        The Electronic Commerce Act (RA 8792) protects the integrity of e-documents and signatures, which AI
                        systems must not forge or falsify. The Consumer Act (RA 7394) prohibits deceptive or unfair trade
                        practices, including misleading AI-generated ads or fake reviews. Likewise, the Intellectual Property
                        Code (RA 8293, as amended) may be triggered when AI systems generate works that infringe on existing
                        IP rights.
                    </p>
<h3 className="text-lg font-semibold mt-8">Digital Assets &amp; Crypto Rules</h3>
<p>
                        The Philippines has seen rapid growth in crypto-assets, with AI playing a dual role as both risk vector
                        and security solution. The SEC Memorandum Circular Nos. 4 &amp; 5 (2025) set out the Crypto-Asset Service
                        Provider (CASP) Rules and Guidelines, requiring registration, capital adequacy, and risk monitoring.
                        CASPs are encouraged to deploy AI tools for fraud detection, anti-money laundering monitoring, and
                        market integrity surveillance.
                    </p>
<h3 className="text-lg font-semibold mt-8">Courts &amp; Legal Profession: AI in Justice</h3>
<p>
                        The judiciary is also embracing AI. The Supreme Court’s Strategic Plan for Judicial Innovations (SPJI)
                        2022–2027 includes AI research to improve court efficiency. In November 2024, Senior Associate Justice
                        Marvic M.V.F. Leonen shared that the Supreme Court was drafting an AI Governance Framework for the Judiciary
                        to ensure ethical and responsible use. In May 2025, Chief Justice Alexander G. Gesmundo shared the positive
                        results of the pilot implementation of an artificial intelligence (AI)-powered voice-to-text transcription
                        tool (Scriptix). Chief Justice Gesmundo emphasized that AI will support — not replace — human court
                        stenographers.
                    </p>
<p>
                        However, courts have warned against misuse. The Sandiganbayan admonished a lawyer for submitting AI-generated
                        pleadings with fictitious citations, citing the Code of Professional Responsibility and Accountability (CPRA)
                        which forbids misleading courts.
                    </p>
<h3 className="text-lg font-semibold mt-8">National AI Strategy &amp; Policy Signals</h3>
<p>
                        In July 2024, the Department of Trade and Industry (DTI) launched the National AI Strategy Roadmap 2.0,
                        aiming to position the Philippines as a leading AI research hub. The plan promotes industry adoption,
                        workforce upskilling, and responsible use guided by principles of transparency, fairness, and accountability.
                        In parallel, a memorandum was issued by Defense Secretary Teodoro cautioning AFP and DND personnel against
                        AI-generated photos and apps that pose identity theft and phishing risks.
                    </p>
<h3 className="text-lg font-semibold mt-8">Proposed AI-Specific Legislation</h3>
<p>Lawmakers have filed several measures to create a comprehensive AI regulatory framework. These include:</p>
<ul className="list-disc pl-6 space-y-2">
<li>House Bill No. 7396 (AIDA): Establishes an Artificial Intelligence Development Authority to issue ethical guidelines and oversee AI development.</li>
<li>House Bill No. 3195 and Senate Bill No. 852: Creates the Philippine Council on Artificial Intelligence and a National Center for AI Research; propose an AI Bill of Rights to protect citizens and workers.</li>
<li>Senate Bill No. 25: Requires a national registry for AI systems, meaning tools must be cleared before deployment.</li>
<li>House Bill No. 3214 (Deepfake Regulation Act): Penalizes non-consensual deepfake creation with imprisonment (2–5 years) and fines (₱50,000–₱200,000), and grants victims a right to damages.</li>
</ul>
<p>
                        Together, these measures promise to establish clear guardrails for safe, ethical, and accountable AI.
                    </p>
<h3 className="text-lg font-semibold mt-8">Practical Compliance Checklist</h3>
<p>
                        The checklist below translates key legal requirements and policy guidance into practical actions for AI
                        development teams and compliance officers:
                    </p>
<ul className="list-disc pl-6 space-y-2">
<li> Inventory personal data, identify lawful basis under RA 10173, and document data flows using privacy-by-design principles.</li>
<li> Align AI deployments with NPC Advisory Opinion No. 2024-002 by confirming lawful basis, conducting a PIA, and enabling data subject rights before production rollout.</li>
<li> Disclose AI use to data subjects.</li>
<li> For AI systems likely to be accessed by minors, conduct a Child PIA (CPIA), use high-privacy defaults, provide child-friendly layered notices, and involve parents or guardians as required by NPC Advisory 2024-03.</li>
</ul>
<h3 className="text-lg font-semibold mt-8">Things to Watch</h3>
<p>
                        The Philippine regulatory landscape for AI is evolving rapidly, and several key developments are on the horizon:
                    </p>
<ul className="list-disc pl-6 space-y-2">
<li>BSP’s upcoming Model Risk Management Circulars and potential AI ethics guidance.</li>
<li>The NPC’s Advisory Opinion No. 2024-002 signals the Commission’s proactive stance on AI. Expect more sector-specific guidance and possible updates to PIA templates to address algorithmic decision-making and generative AI use cases.</li>
<li>Supreme Court’s forthcoming AI Governance Framework for judiciary operations.</li>
<li>The NPC is also moving toward stronger protection for vulnerable groups. Its 2024-03 Guidelines on Child-Oriented Transparency set a precedent for child-specific AI compliance and may shape future regulations for “AI for kids” solutions.</li>
</ul>
<h3 className="text-lg font-semibold mt-8">Frequently Asked Questions (FAQs)</h3>
<ul className="list-disc pl-6 space-y-2">
<li> No. AI is currently regulated through the DPA, NPC advisories, e-commerce, crypto, and sectoral rules.</li>
<li> Yes, if personal data is involved, DPA obligations still apply.</li>
<li> Other laws (Consumer Act, Cybercrime Act, IP Code, RA 11967) may still apply.</li>
<li> Prepare for BSP’s MRM guidelines, maintain model inventories, and perform independent validations.</li>
</ul>
<h3 className="text-lg font-semibold mt-8">Practical Insights &amp; Takeaways</h3>
<p>
                        Organizations should not wait for the Philippine “AI Act” to be enacted before acting. By building governance
                        programs now, they can reduce risk and build user trust. Key steps include:
                    </p>
<ul className="list-disc pl-6 space-y-2">
<li>Maintaining a living AI model inventory.</li>
<li>Conducting regular validation and bias testing.</li>
<li>Implementing privacy-by-design across all projects.</li>
<li>Monitoring legislative and regulatory developments.</li>
</ul>
<p>
                        Compliance should be seen not as a cost, but as a strategic investment that positions the organization as a
                        leader in responsible and ethical AI.
                    </p>
<h3 className="text-lg font-semibold mt-10">Sources</h3>
<ol className="list-decimal pl-6 space-y-2 text-sm">
<li>
<a className="underline hover:text-indigo-600" href="https://privacy.gov.ph/wp-content/uploads/2025/02/Advisory-2024.12.19-Guidelines-on-Artificial-Intelligence-w-SGD.pdf" rel="noopener noreferrer" target="_blank">
                                NPC AI Advisory 2024-04
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://privacy.gov.ph/wp-content/uploads/2024/12/Advisory-2024.12.17-Guidelines-on-Child-Oriented-Transparency-w-SGD.pdf" rel="noopener noreferrer" target="_blank">
                                NPC Advisory 2024-03
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://privacy.gov.ph/wp-content/uploads/2024/01/Advisory-Opinion-No.-2024-002.pdf" rel="noopener noreferrer" target="_blank">
                                NPC Advisory Opinion 2024-002
                            </a>
</li>
<li>
                            Data Privacy Act (
                            <a className="underline hover:text-indigo-600" href="https://privacy.gov.ph/data-privacy-act/" rel="noopener noreferrer" target="_blank">
                                RA 10173
                            </a>
                            ) and
                            <a className="underline hover:text-indigo-600" href="https://privacy.gov.ph/implementing-rules-regulations-data-privacy-act-2012/" rel="noopener noreferrer" target="_blank">
                                IRR
                            </a>
</li>
<li>
                            Internet Transactions Act (
                            <a className="underline hover:text-indigo-600" href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/96902" rel="noopener noreferrer" target="_blank">
                                RA 11967
                            </a>
                            ); 
                            <a className="underline hover:text-indigo-600" href="https://ecommerce.dti.gov.ph/implementing-rules-and-regulations/" rel="noopener noreferrer" target="_blank">
                                IRR (JAO 24-03)
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://www.officialgazette.gov.ph/2000/06/14/republic-act-no-8792-s-2000/" rel="noopener noreferrer" target="_blank">
                                Electronic Commerce Act
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://www.officialgazette.gov.ph/1992/04/13/republic-act-no-7394-s-1992/" rel="noopener noreferrer" target="_blank">
                                Consumer Act
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://lawphil.net/statutes/repacts/ra2013/ra_10372_2013.html" rel="noopener noreferrer" target="_blank">
                                Intellectual Property Code
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://thecoinomist.com/insights/ai-deepfakes-crypto-losses-2025/" rel="noopener noreferrer" target="_blank">
                                AI Deepfakes Fuel $4.6B Crypto Losses: Report
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://www.bsp.gov.ph/Regulations/Issuances%20of%20Policy%20Exposure%20Drafts/Draft-Circular-on-Model-Risk-Management-Guidelines.pdf" rel="noopener noreferrer" target="_blank">
                                BSP MRM exposure
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://insightplus.bakermckenzie.com/bm/micrositeRedirect.action?microSiteUrl=/503.html" rel="noopener noreferrer" target="_blank">
                                SEC CASP Rules/Guidelines
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="http://sc.judiciary.gov.ph/sc-to-use-artificial-intelligence-to-improve-court-operations/" rel="noopener noreferrer" target="_blank">
                                Supreme Court press releases on AI
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://sc.judiciary.gov.ph/chief-justice-gesmundo-highlights-ai-powered-transcription-success-at-stenographers-convention/" rel="noopener noreferrer" target="_blank">
                                Chief Justice Gesmundo Highlights AI-Powered Transcription Success at Stenographer’s Convention
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://sc.judiciary.gov.ph/chief-justice-gesmundo-ai-can-assist-judges-but-should-never-replace-human-elements-of-justice/" rel="noopener noreferrer" target="_blank">
                                Chief Justice Gesmundo: AI Can Assist Judges, But Should Never Replace Human Elements of Justice
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://tribune.net.ph/2025/02/21/cj-gesmundo-bets-on-ai-to-beef-up-litigation-arbitration" rel="noopener noreferrer" target="_blank">
                                CJ Gesmundo bets on AI to beef up litigation, arbitration
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://sc.judiciary.gov.ph/spji/" rel="noopener noreferrer" target="_blank">
                                Supreme Court SPJI
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://sc.judiciary.gov.ph/sc-to-establish-ai-governance-framework-for-the-judiciary/" rel="noopener noreferrer" target="_blank">
                                SC to Establish AI Governance Framework for the Judiciary
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://www.philstar.com/headlines/2025/08/14/2465312/sandigan-calls-out-lawyer-who-used-ai-pleadings" rel="noopener noreferrer" target="_blank">
                                Sandiganbayan reprimanded lawyer who used AI
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://gorricetalaw.com/philippines-powered-by-ai-the-philippines-national-ai-strategy-roadmap-2-0/" rel="noopener noreferrer" target="_blank">
                                NAISR 2.0
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://www.abs-cbn.com/news/10/20/23/afp-dnd-told-to-refrain-from-using-ai-image-generator-app" rel="noopener noreferrer" target="_blank">
                                DND/AFP memo
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://docs.congress.hrep.online/legisdocs/basic_19/HB07396.pdf" rel="noopener noreferrer" target="_blank">
                                House bill no. 7396
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://docs.congress.hrep.online/legisdocs/basic_20/HB03195.pdf" rel="noopener noreferrer" target="_blank">
                                House bill no. 3195
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://web.senate.gov.ph/lisdata/4649942502!.pdf" rel="noopener noreferrer" target="_blank">
                                Senate bill no. 852
                            </a>
</li>
<li>
<a className="underline hover:text-indigo-600" href="https://web.senate.gov.ph/lisdata/4649942502!.pdf" rel="noopener noreferrer" target="_blank">
                                Senate bill no. 25
                            </a>
</li>
</ol>
</div>
</div>
</section>

<section className="dark:bg-black overflow-hidden text-white bg-neutral-900 pt-24 pr-6 pb-24 pl-6 relative" id="booking">
<div className="-translate-x-1/2 -translate-y-1/2 bg-indigo-500/10 w-96 h-96 rounded-full absolute top-0 left-0 blur-3xl">
</div>
<div className="bg-indigo-500/10 w-96 h-96 rounded-full absolute right-0 bottom-0 blur-3xl translate-x-1/2 translate-y-1/2">
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 flex flex-col reveal-on-scroll justify-center">
<h2 className="md:text-5xl text-4xl font-semibold mb-6">Get in
                        <br/><span className="font-semibold text-[#D4AF37]">Touch</span></h2>
<p className="font-light text-neutral-400 mb-8 leading-relaxed">Have a legal inquiry or need
                            assistance? Fill out the form, and our team will get back to you shortly.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 text-sm text-neutral-300">
<div className="p-3 rounded-full bg-white/5 border border-white/10 shrink-0">
<svg className="w-5 h-5 text-indigo-400" fill="none" height="24" stroke="#D4AF37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div>
<span className="block font-semibold text-white mb-1 font-sans">Email Us</span><span className="font-sans text-neutral-400">eric.delacruz@rocketmail.com</span>
</div>
</div>
<div className="flex items-start gap-4 text-sm text-neutral-300">
<div className="p-3 rounded-full bg-white/5 border border-white/10 shrink-0">
<svg className="w-5 h-5 text-indigo-400" fill="none" height="24" stroke="#D4AF37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<span className="block font-semibold text-white mb-1 font-sans">Office</span><span className="font-sans text-neutral-400">E-1209 Tektite Tower East, Ortigas Center, Pasig City</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 bg-white dark:bg-dark-800 rounded-3xl p-6 md:p-10 shadow-2xl text-neutral-900 dark:text-white reveal-on-scroll delay-200 border border-neutral-100 dark:border-neutral-700">
<form className="space-y-5" id="contactForm" novalidate="">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-sans" htmlFor="name">Full Name</label>
<input className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm font-sans focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" id="name" name="name" placeholder="Juan Dela Cruz" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-sans" htmlFor="email">Email Address</label>
<input className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm font-sans focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" id="email" name="email" placeholder="juan@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-sans" htmlFor="message">Message or Question</label>
<textarea className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm font-sans focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none" id="message" name="message" placeholder="How can we help you?" required="" rows="5"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl py-4 font-semibold text-sm hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 group font-sans" id="submitBtn" type="submit">
<span>Send Message</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button>
<p className="text-center text-xs text-neutral-500 mt-4 h-4 font-sans" id="formStatus"></p>
</div>
</form>
</div>
</div>
</div>


</section>

<section className="dark:bg-dark-900 overflow-hidden bg-white pt-24 pb-10" id="reviews">
<div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
<div className="partners-slider relative">
<input checked="" hidden="" id="partner-1" name="partner" type="radio"/>
<input hidden="" id="partner-2" name="partner" type="radio"/>
<input hidden="" id="partner-3" name="partner" type="radio"/>
<input hidden="" id="partner-4" name="partner" type="radio"/>
<input hidden="" id="partner-5" name="partner" type="radio"/>
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-sans font-semibold">Our Partners</h2>
<p className="text-sm text-neutral-500 mt-2 font-sans">Meet the lawyers who lead our practice.
                            </p>
</div>
<div className="partners-controls">
<div className="c1 flex gap-2">
<span className="p-2 rounded-full border border-neutral-200 text-neutral-300 cursor-not-allowed"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></span><label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-2"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></label>
</div>
<div className="c2 flex gap-2">
<label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-1"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></label><label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-3"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></label>
</div>
<div className="c3 flex gap-2">
<label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-2"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></label><label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-4"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></label>
</div>
<div className="c4 flex gap-2">
<label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-3"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></label><label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-5"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></label>
</div>
<div className="c5 flex gap-2">
<label className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors cursor-pointer" htmlFor="partner-4"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></label><span className="p-2 rounded-full border border-neutral-200 text-neutral-300 cursor-not-allowed"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
<div className="overflow-hidden">
<div className="partners-track flex transition-transform duration-500 ease-out">

<article className="w-full shrink-0">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85cdf72d-106c-46f0-80a7-bce3dd009dcf_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                                Melchor Jaemond Aranas</p>
<p className="text-xs text-neutral-500 font-sans">Managing Partner • Corporate
                                                Law</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                                        Atty. Aranas serves as the firm's managing partner, specializing in business and
                                        corporate law.</p>
</div>
</article>
<article className="w-full shrink-0">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/174b6dfa-4093-476b-8ff7-5f354495c70f_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                                Ayla Alim-Baldueza</p>
<p className="text-xs text-neutral-500 font-sans">Co-Managing Partner •
                                                Administration</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                                        Atty. Alim-Baldueza handles the firm's administrative matters and specializes in
                                        administrative law.</p>
</div>
</article>
<article className="w-full shrink-0">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cb88e0c-53d2-4001-99de-0b32bbe3d941_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                                Eric Dela Cruz</p>
<p className="text-xs text-neutral-500 font-sans">Partner • Immigration &amp;
                                                Banking</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                                        Atty. Dela Cruz is a legal/compliance leader who specializes in regulated financial services, corporate governance, M&amp;A/bank consolidation, investigations/data privacy, and building AI-enabled legal operations systems.</p>
</div>
</article>
<article className="w-full shrink-0">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8b7718f-565c-46ab-948f-a4883ca2da97_800w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                                Jeremiah Belgica</p>
<p className="text-xs text-neutral-500 font-sans">Partner • Litigation</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                                        Atty. Belgica formerly served as the Director-General of the Anti-Red Tape
                                        Authority.</p>
</div>
</article>
<article className="w-full shrink-0">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200"><img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94cbf7c1-34ca-40c8-b7c8-a5cab0e06578_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                                Jedrek Ng</p>
<p className="text-xs text-neutral-500 font-sans">Partner • Litigation</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                                        Atty. Ng formerly served as the Assistant City Prosecutor of Manila.</p>
</div>
</article>
</div>
</div>
<style>
                        .partners-controls .c1,
                        .partners-controls .c2,
                        .partners-controls .c3,
                        .partners-controls .c4,
                        .partners-controls .c5 {
                            display: none
                        }

                        #partner-1:checked~.flex .partners-controls .c1 {
                            display: flex
                        }

                        #partner-2:checked~.flex .partners-controls .c2 {
                            display: flex
                        }

                        #partner-3:checked~.flex .partners-controls .c3 {
                            display: flex
                        }

                        #partner-4:checked~.flex .partners-controls .c4 {
                            display: flex
                        }

                        #partner-5:checked~.flex .partners-controls .c5 {
                            display: flex
                        }

                        #partner-1:checked~.overflow-hidden .partners-track {
                            transform: translateX(0%)
                        }

                        #partner-2:checked~.overflow-hidden .partners-track {
                            transform: translateX(-100%)
                        }

                        #partner-3:checked~.overflow-hidden .partners-track {
                            transform: translateX(-200%)
                        }

                        #partner-4:checked~.overflow-hidden .partners-track {
                            transform: translateX(-300%)
                        }

                        #partner-5:checked~.overflow-hidden .partners-track {
                            transform: translateX(-400%)
                        }
                    </style>
</div>
</div>
</section>

<section className="dark:bg-dark-900 overflow-hidden bg-white pt-10 pb-24 border-t border-neutral-200 dark:border-neutral-800" id="associates">
<div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-sans font-semibold">Our Associates</h2>
<p className="text-sm text-neutral-500 mt-2 font-sans">
                    Meet the associates supporting our practice.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f1aca72-c35d-4e20-96d6-0aaf6c0d565f_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Ed Vinson Quintin</p>
<p className="text-xs text-neutral-500 font-sans">Senior Associate • Litigation</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Quintin graduated from University of Santo Tomas and was an exemplary passer last 2020 Bar Examinations.
                    </p>
</div>
</article>

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c452217-42d4-4daa-86ec-bc4ee38ff5c6_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Mera Lyka Timan</p>
<p className="text-xs text-neutral-500 font-sans">Senior Associate • Labor </p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Timan graduated from Pamantasan ng Lungsod ng Maynila, specializing in labor practice.
                    </p>
</div>
</article>

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/394f38f9-40e4-4e0b-8846-924319d4dbf8_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Aileen Bobadilla</p>
<p className="text-xs text-neutral-500 font-sans">Junior Associate • Corporation and Tax</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Bobadilla is a Certified Public Accountant and serves as the firm's lawyer handling tax and corporate cases.
                    </p>
</div>
</article>

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13fee8e9-23f5-4822-9023-c092a4ca106a_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Precius Aiah Anies</p>
<p className="text-xs text-neutral-500 font-sans">Junior Associate • Intellectual Property</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Anies graduated from Pamantasan ng Lungsod ng Maynila, specializing in intellectual property cases.
                    </p>
</div>
</article>

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 5" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83f5eeaf-023d-4617-b6cc-7a0e689d5e70_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Ma. Patricia Atayde</p>
<p className="text-xs text-neutral-500 font-sans">Junior Associate • Corporate </p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Atayde graduated from Pamantasan ng Lungsod ng Maynila, specializing in the firm's corporate practice.
                    </p>
</div>
</article>

<article className="w-full">
<div className="bg-neutral-50 dark:bg-dark-800 rounded-2xl p-8 border border-black/5">
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
<img alt="Associate 6" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e69b885b-4710-465c-af5f-262f8e3d52e5_320w.jpg"/>
</div>
<div>
<p className="text-base font-semibold font-sans text-neutral-900 dark:text-neutral-100">
                                Arthur Melindo</p>
<p className="text-xs text-neutral-500 font-sans">Junior Associate • Litigation</p>
</div>
</div>
<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans">
                        Atty. Melindo graduated as batch valedictorian from the Polytechnic University of the Philippines, handling criminal and civil cases.
                    </p>
</div>
</article>
</div>
</div>
</section>

<footer className="text-neutral-300 bg-neutral-900 border-neutral-800 border-t pt-20 pr-6 pb-20 pl-6" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="space-y-6">
<div className="flex items-center gap-2 text-indigo-400">
<svg "="" className="lucide lucide-scale w-6 h-6" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="m2 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
<path d="M12 2L9 9l-7 3l7 3l3 7l3-7l7-3l-7-3z" fill="currentColor"></path>
<span className="text-xl text-white tracking-tight font-serif font-sans">BAAND Law</span>
</div>
<p className="leading-relaxed text-xs font-light text-neutral-500 max-w-xs font-sans">Providing clear,
                        strategic counsel to individuals and businesses. Located in the heart of Pasig.</p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm font-sans">Explore</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-indigo-400 transition-colors font-sans" href="#about">About Us</a></li>
<li><a className="hover:text-indigo-400 transition-colors font-sans" href="#services">Services
                        </a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm font-sans">Contact</h4>
<ul className="space-y-3 text-xs font-light">
<li className="flex gap-2 items-start"><svg className="lucide lucide-map-pin w-4 h-4 shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</svg><span className="font-sans">E-1209 Tektite Tower East, Ortigas Center, Pasig City</span>
</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-phone w-4 h-4 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg><span className="font-sans">+63 947 898 9889</span></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm font-sans">Internal</h4>
<ul className="space-y-3 text-xs font-light">

<li><button className="hover:text-indigo-400 transition-colors font-sans text-neutral-600 hover:underline" onclick="toggleAdminPortal()">Admin Login</button>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p className="font-sans">©2025 BAAND Law. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0"><a className="hover:text-white font-sans" href="#">Privacy</a><a className="hover:text-white font-sans" href="#">Terms</a></div>
</div>
</footer>
</div>


<div className="hidden fixed inset-0 z-[100] bg-neutral-100 dark:bg-dark-900 overflow-auto font-sans" id="admin-portal">

<div className="absolute inset-0 z-[110] bg-white dark:bg-dark-900 flex items-center justify-center" id="admin-login">
<div className="w-full max-w-sm p-8 bg-neutral-50 dark:bg-dark-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-2xl">
<h3 className="text-2xl font-semibold mb-6 text-center text-neutral-900 dark:text-white">Admin Dashboard
                </h3>
<div className="space-y-4">
<input className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-neutral-200 dark:border-neutral-700 outline-none focus:ring-2 ring-indigo-500 transition-all text-sm" id="admin-pass" placeholder="Enter admin password" type="password"/>
<button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors text-sm" onclick="checkLogin()">Access Dashboard</button>
<button className="w-full py-2 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="toggleAdminPortal()">Return to Site</button>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col md:flex-row" id="dashboard-content">

<aside className="w-full md:w-64 bg-white dark:bg-dark-800 border-r border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
<div className="flex items-center gap-2 mb-10 text-[#800020] dark:text-[#800020]">
<svg className="w-5 h-5 text-[#800020] lucide lucide-scale" fill="none" height="18" stroke="#800020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="m2 16 3-8 3 8c0 1.1-1.34 2-3 2s-3-.9-3-2Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
<span className="font-bold tracking-tight">BAAND Admin</span>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#800020]/5 dark:bg-[#800020]/20 text-[#800020] dark:text-[#800020] text-sm font-medium" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
            Inbox
        </a>
</nav>
<button className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-red-500 transition-colors text-sm font-medium mt-auto" onclick="toggleAdminPortal()">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
        Logout
    </button>
</aside>

<main className="flex-1 p-6 md:p-10 overflow-y-auto">
<header className="flex justify-between items-center mb-8">
<h1 className="text-2xl font-semibold text-neutral-900 dark:text-white font-sans">Inbox Messages</h1>
<div className="flex gap-4">
<div className="px-4 py-2 bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 text-sm">
<span className="text-neutral-500">Total:</span>
<span className="font-bold ml-1" id="total-count">0</span>
</div>
<div className="px-4 py-2 bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 text-sm">
<span className="text-orange-500">Pending:</span>
<span className="font-bold ml-1" id="pending-count">0</span>
</div>
</div>
</header>
<div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-neutral-500 uppercase bg-neutral-50 dark:bg-dark-900 border-b border-neutral-200 dark:border-neutral-700">
<tr>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium">Name</th>
<th className="px-6 py-4 font-medium">Email</th>
<th className="px-6 py-4 font-medium">Message</th>
<th className="px-6 py-4 font-medium">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200 dark:divide-neutral-700 text-neutral-700 dark:text-neutral-300" id="messages-table-body">

</tbody>
</table>
</div>

<div className="hidden flex flex-col items-center justify-center p-12 text-neutral-400" id="empty-state">
<svg className="mb-4 opacity-50" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<p>No messages yet.</p>
</div>
</div>
</main>
</div>
</div>



    </>
  );
}
