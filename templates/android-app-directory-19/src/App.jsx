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



        // App Data - Easy to Update
        const apps = [
            {
                id: 1,
                name: "WhatsApp Messenger",
                icon: "solar:chat-round-dots-linear",
                iconColor: "text-emerald-600",
                iconBg: "bg-emerald-100",
                category: "social",
                shortDesc: "Stay connected with friends and family",
                fullDesc: "WhatsApp Messenger is a FREE messaging app. Send messages, photos, videos, and voice messages. Make voice and video calls. Share your location and documents.",
                version: "2.24.1.5",
                size: "45 MB",
                rating: "4.5",
                downloads: "5B+",
                downloadLink: "https://play.google.com/store/apps/details?id=com.whatsapp"
            },
            {
                id: 2,
                name: "Telegram",
                icon: "solar:plain-linear",
                iconColor: "text-blue-600",
                iconBg: "bg-blue-100",
                category: "social",
                shortDesc: "Fast and secure messaging app",
                fullDesc: "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed. It's super-fast, simple, secure and free.",
                version: "10.5.0",
                size: "55 MB",
                rating: "4.4",
                downloads: "1B+",
                downloadLink: "https://play.google.com/store/apps/details?id=org.telegram.messenger"
            },
            {
                id: 3,
                name: "File Manager Pro",
                icon: "solar:folder-linear",
                iconColor: "text-amber-600",
                iconBg: "bg-amber-100",
                category: "tools",
                shortDesc: "Powerful file management tool",
                fullDesc: "File Manager Pro helps you manage all your files efficiently. Browse, copy, move, delete, rename files. Supports cloud storage integration.",
                version: "3.2.1",
                size: "12 MB",
                rating: "4.6",
                downloads: "100M+",
                downloadLink: "#"
            },
            {
                id: 4,
                name: "Video Player HD",
                icon: "solar:play-circle-linear",
                iconColor: "text-red-600",
                iconBg: "bg-red-100",
                category: "entertainment",
                shortDesc: "Play all video formats smoothly",
                fullDesc: "Video Player HD supports all video formats including MKV, MP4, AVI, FLV, etc. Features include subtitles, gestures, and background playback.",
                version: "2.1.0",
                size: "28 MB",
                rating: "4.3",
                downloads: "50M+",
                downloadLink: "#"
            },
            {
                id: 5,
                name: "Note Master",
                icon: "solar:document-text-linear",
                iconColor: "text-purple-600",
                iconBg: "bg-purple-100",
                category: "productivity",
                shortDesc: "Take notes and organize your life",
                fullDesc: "Note Master is the perfect app for taking notes, making to-do lists, and organizing your thoughts. Sync across devices with cloud backup.",
                version: "5.0.2",
                size: "18 MB",
                rating: "4.7",
                downloads: "10M+",
                downloadLink: "#"
            },
            {
                id: 6,
                name: "Instagram",
                icon: "solar:camera-linear",
                iconColor: "text-pink-600",
                iconBg: "bg-pink-100",
                category: "social",
                shortDesc: "Share photos and videos with friends",
                fullDesc: "Instagram is a photo and video sharing social networking app. Share moments with friends, explore content, and connect with creators.",
                version: "315.0.0",
                size: "65 MB",
                rating: "4.5",
                downloads: "5B+",
                downloadLink: "https://play.google.com/store/apps/details?id=com.instagram.android"
            },
            {
                id: 7,
                name: "PDF Reader",
                icon: "solar:file-text-linear",
                iconColor: "text-rose-600",
                iconBg: "bg-rose-100",
                category: "tools",
                shortDesc: "View and edit PDF documents",
                fullDesc: "PDF Reader is a free app to view, annotate, and sign PDF documents. Features include night mode, bookmarks, and text search.",
                version: "8.1.3",
                size: "22 MB",
                rating: "4.4",
                downloads: "100M+",
                downloadLink: "#"
            },
            {
                id: 8,
                name: "Puzzle Quest",
                icon: "solar:gamepad-linear",
                iconColor: "text-indigo-600",
                iconBg: "bg-indigo-100",
                category: "games",
                shortDesc: "Fun puzzle game for all ages",
                fullDesc: "Puzzle Quest is an addictive puzzle game with hundreds of levels. Challenge your brain with unique puzzles and compete with friends.",
                version: "1.5.0",
                size: "85 MB",
                rating: "4.6",
                downloads: "10M+",
                downloadLink: "#"
            }
        ];

        // Page Navigation
        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });
            document.getElementById('page-' + pageName).classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Render App Card
        function renderAppCard(app, isCompact = false) {
            return `
                <div class="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(${app.id})">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 ${app.iconBg} rounded-xl flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="${app.icon}" width="28" height="28" class="${app.iconColor}" style="stroke-width: 1.5"></iconify-icon>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-medium text-slate-900 truncate">${app.name}</h3>
                            <p class="text-sm text-slate-500 mt-1 line-clamp-2">${app.shortDesc}</p>
                            <div class="flex items-center gap-3 mt-3">
                                <span class="text-xs text-slate-400 flex items-center gap-1">
                                    <iconify-icon icon="solar:star-bold" width="12" height="12" class="text-amber-400"></iconify-icon>
                                    ${app.rating}
                                </span>
                                <span class="text-xs text-slate-400">${app.size}</span>
                            </div>
                        </div>
                    </div>
                    ${!isCompact ? `
                    <button onclick="event.stopPropagation(); window.open('${app.downloadLink}', '_blank')" class="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                        <iconify-icon icon="solar:download-minimalistic-linear" width="18" height="18" style="stroke-width: 1.5"></iconify-icon>
                        Download
                    </button>
                    ` : ''}
                </div>
            `;
        }

        // Show App Details
        function showAppDetails(appId) {
            const app = apps.find(a => a.id === appId);
            if (!app) return;

            const content = `
                <div class="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                    <div class="flex flex-col sm:flex-row items-start gap-6 mb-6">
                        <div class="w-20 h-20 ${app.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="${app.icon}" width="40" height="40" class="${app.iconColor}" style="stroke-width: 1.5"></iconify-icon>
                        </div>
                        <div class="flex-1">
                            <h1 class="text-2xl font-semibold tracking-tight text-slate-900 mb-2">${app.name}</h1>
                            <p class="text-slate-600 mb-4">${app.shortDesc}</p>
                            <div class="flex flex-wrap items-center gap-4">
                                <span class="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                                    <iconify-icon icon="solar:star-bold" width="14" height="14" class="text-amber-400"></iconify-icon>
                                    ${app.rating} Rating
                                </span>
                                <span class="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                                    <iconify-icon icon="solar:download-minimalistic-linear" width="14" height="14" style="stroke-width: 1.5"></iconify-icon>
                                    ${app.downloads}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-4 mb-6">
                        <div class="text-center p-4 bg-slate-50 rounded-xl">
                            <div class="text-lg font-medium text-slate-900">${app.version}</div>
                            <div class="text-xs text-slate-500 mt-1">Version</div>
                        </div>
                        <div class="text-center p-4 bg-slate-50 rounded-xl">
                            <div class="text-lg font-medium text-slate-900">${app.size}</div>
                            <div class="text-xs text-slate-500 mt-1">Size</div>
                        </div>
                        <div class="text-center p-4 bg-slate-50 rounded-xl">
                            <div class="text-lg font-medium text-slate-900 capitalize">${app.category}</div>
                            <div class="text-xs text-slate-500 mt-1">Category</div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h2 class="text-lg font-medium text-slate-900 mb-3">About this app</h2>
                        <p class="text-slate-600">${app.fullDesc}</p>
                    </div>
                    
                    <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                        <div class="flex items-center gap-2 text-emerald-700">
                            <iconify-icon icon="solar:shield-check-linear" width="20" height="20" style="stroke-width: 1.5"></iconify-icon>
                            <span class="text-sm font-medium">Verified Safe Download</span>
                        </div>
                        <p class="text-xs text-emerald-600 mt-1">This app has been scanned and verified for safety</p>
                    </div>
                    
                    <a href="${app.downloadLink}" target="_blank" class="w-full py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                        <iconify-icon icon="solar:download-minimalistic-linear" width="20" height="20" style="stroke-width: 1.5"></iconify-icon>
                        Download Now
                    </a>
                </div>
            `;

            document.getElementById('appDetailsContent').innerHTML = content;
            showPage('app-details');
        }

        // Filter Apps
        function filterApps() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const category = document.getElementById('categoryFilter').value;

            const filtered = apps.filter(app => {
                const matchesSearch = app.name.toLowerCase().includes(searchTerm) || 
                                     app.shortDesc.toLowerCase().includes(searchTerm);
                const matchesCategory = category === 'all' || app.category === category;
                return matchesSearch && matchesCategory;
            });

            const grid = document.getElementById('appsGrid');
            grid.innerHTML = filtered.map(app => renderAppCard(app)).join('');
        }

        // Contact Form Handler
        function handleContactSubmit(event) {
            event.preventDefault();
            document.getElementById('contactForm').reset();
            document.getElementById('contactSuccess').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('contactSuccess').classList.add('hidden');
            }, 5000);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Render popular apps on home page
            const popularAppsHome = document.getElementById('popularAppsHome');
            popularAppsHome.innerHTML = apps.slice(0, 4).map(app => renderAppCard(app, true)).join('');

            // Render all apps on apps page
            const appsGrid = document.getElementById('appsGrid');
            appsGrid.innerHTML = apps.map(app => renderAppCard(app)).join('');
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://youtube.com/shorts/lOPDr8C4z_A?si=bGObeCMk05gMX9Ty"></video></div>

<nav className="border-b sticky top-0 z-50 bg-white border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<a className="text-xl font-semibold tracking-tight text-slate-900" href="#home" onclick="showPage('home')">
<span className="text-indigo-600">App</span>Vault
                </a>

<button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600" href="#home" onclick="showPage('home')">Home</a>
<a className="transition-colors text-sm font-medium hover:text-indigo-600 text-slate-600" href="#apps" onclick="showPage('apps')">Apps</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600" href="#about" onclick="showPage('about')">About Us</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600" href="#contact" onclick="showPage('contact')">Contact</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-indigo-600" href="#privacy" onclick="showPage('privacy')">Privacy</a>
</div>
</div>

<div className="hidden md:hidden pb-4" id="mobileMenu">
<div className="flex flex-col gap-2">
<a className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100" href="#home" onclick="showPage('home'); toggleMobileMenu();">Home</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100" href="#apps" onclick="showPage('apps'); toggleMobileMenu();">Apps</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100" href="#about" onclick="showPage('about'); toggleMobileMenu();">About Us</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100" href="#contact" onclick="showPage('contact'); toggleMobileMenu();">Contact</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100" href="#privacy" onclick="showPage('privacy'); toggleMobileMenu();">Privacy</a>
</div>
</div>
</div>
</nav>

<div className="page" id="page-home">

<section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                        Download Safe &amp; Trusted Apps
                    </h1>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-indigo-100">
                        Get direct download links for the best Android apps and tools. All apps are verified and safe to use. No ads, no hassle - just pure downloads!
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl transition-colors bg-white text-indigo-600 hover:bg-indigo-50" onclick="showPage('apps')">
<iconify-icon height="20" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                            Browse Apps
                        </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500/30 font-medium rounded-xl hover:bg-indigo-500/40 transition-colors border text-white border-indigo-400/30" onclick="showPage('about')">
                            Learn More
                        </button>
</div>
</div>
</div>
</section>

<section className="md:py-20 pt-16 pb-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-900">Why Choose AppVault?</h2>
<p className="max-w-xl mx-auto text-slate-600">We provide the safest and most reliable app downloads</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="hover:shadow-lg transition-all hover:border-indigo-200 bg-white border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-indigo-100">
<iconify-icon className="text-indigo-600" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900">100% Safe Downloads</h3>
<p className="text-sm text-slate-600">All apps are scanned and verified for safety. No malware, no viruses.</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all bg-white border-slate-200 hover:border-indigo-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-100">
<iconify-icon className="text-emerald-600" height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900">Fast &amp; Direct Links</h3>
<p className="text-sm text-slate-600">No waiting time, no redirects. Get direct download links instantly.</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all bg-white border-slate-200 hover:border-indigo-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-amber-100">
<iconify-icon className="text-amber-600" height="24" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900">Regular Updates</h3>
<p className="text-sm text-slate-600">We keep all apps updated to the latest versions available.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-y bg-white border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex mb-8 items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Popular Apps</h2>
<a className="text-sm font-medium flex items-center gap-1 text-indigo-600 hover:text-indigo-700" href="#apps" onclick="showPage('apps')">
                        View All
                        <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="popularAppsHome">
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(1)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" height="28" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">WhatsApp Messenger</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Stay connected with friends and family</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.5
                                </span>
<span className="text-xs text-slate-400">45 MB</span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(2)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-600" height="28" icon="solar:plain-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Telegram</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Fast and secure messaging app</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.4
                                </span>
<span className="text-xs text-slate-400">55 MB</span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(3)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-amber-600" height="28" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">File Manager Pro</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Powerful file management tool</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.6
                                </span>
<span className="text-xs text-slate-400">12 MB</span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(4)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-600" height="28" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Video Player HD</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Play all video formats smoothly</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.3
                                </span>
<span className="text-xs text-slate-400">28 MB</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-indigo-600">500+</div>
<div className="text-sm mt-1 text-slate-600">Apps Available</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-indigo-600">1M+</div>
<div className="text-sm mt-1 text-slate-600">Downloads</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-indigo-600">100%</div>
<div className="text-sm mt-1 text-slate-600">Safe &amp; Verified</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-indigo-600">24/7</div>
<div className="text-sm mt-1 text-slate-600">Support</div>
</div>
</div>
</div>
</section>
</div>

<div className="page hidden" id="page-apps">
<section className="py-12 md:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-slate-900">All Apps</h1>
<p className="text-slate-600">Browse and download your favorite Android apps</p>
</div>

<div className="flex flex-col sm:flex-row gap-4 mb-8">
<div className="relative flex-1">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<input className="w-full pl-12 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white border-slate-200" id="searchInput" onkeyup="filterApps()" placeholder="Search apps..." type="text"/>
</div>
<div className="relative">
<select className="appearance-none px-4 py-3 pr-10 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer bg-white border-slate-200" id="categoryFilter" onchange="filterApps()">
<option value="all">All Categories</option>
<option value="social">Social</option>
<option value="tools">Tools</option>
<option value="entertainment">Entertainment</option>
<option value="productivity">Productivity</option>
<option value="games">Games</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="appsGrid">
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(1)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-600" height="28" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">WhatsApp Messenger</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Stay connected with friends and family</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.5
                                </span>
<span className="text-xs text-slate-400">45 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('https://play.google.com/store/apps/details?id=com.whatsapp', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(2)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-600" height="28" icon="solar:plain-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Telegram</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Fast and secure messaging app</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.4
                                </span>
<span className="text-xs text-slate-400">55 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('https://play.google.com/store/apps/details?id=org.telegram.messenger', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(3)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-amber-600" height="28" icon="solar:folder-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">File Manager Pro</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Powerful file management tool</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.6
                                </span>
<span className="text-xs text-slate-400">12 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('#', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(4)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-600" height="28" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Video Player HD</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Play all video formats smoothly</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.3
                                </span>
<span className="text-xs text-slate-400">28 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('#', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(5)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-purple-600" height="28" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Note Master</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Take notes and organize your life</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.7
                                </span>
<span className="text-xs text-slate-400">18 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('#', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(6)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-pink-600" height="28" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Instagram</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Share photos and videos with friends</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.5
                                </span>
<span className="text-xs text-slate-400">65 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('https://play.google.com/store/apps/details?id=com.instagram.android', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(7)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-rose-600" height="28" icon="solar:file-text-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">PDF Reader</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">View and edit PDF documents</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.4
                                </span>
<span className="text-xs text-slate-400">22 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('#', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer" onclick="showAppDetails(8)">
<div className="flex items-start gap-4">
<div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-indigo-600" height="28" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-slate-900 truncate">Puzzle Quest</h3>
<p className="text-sm text-slate-500 mt-1 line-clamp-2">Fun puzzle game for all ages</p>
<div className="flex items-center gap-3 mt-3">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon className="text-amber-400" height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                    4.6
                                </span>
<span className="text-xs text-slate-400">85 MB</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" onclick="event.stopPropagation(); window.open('#', '_blank')">
<iconify-icon height="18" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Download
                    </button>
</div>
</div>
</div>
</section>
</div>

<div className="page hidden" id="page-app-details">
<section className="py-12 md:py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="flex items-center gap-2 text-sm mb-8 text-slate-600 hover:text-indigo-600" onclick="showPage('apps')">
<iconify-icon height="20" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Back to Apps
                </button>
<div id="appDetailsContent">

</div>
</div>
</section>
</div>

<div className="page hidden" id="page-about">
<section className="py-12 md:py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-slate-900">About Us</h1>
<div className="rounded-2xl border p-6 md:p-8 bg-white border-slate-200">
<div className="prose max-w-none">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-indigo-100">
<iconify-icon className="text-indigo-600" height="32" icon="solar:smartphone-2-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h2 className="text-xl font-medium tracking-tight text-slate-900">AppVault</h2>
<p className="text-sm text-slate-600">Your Trusted App Download Platform</p>
</div>
</div>
<p className="mb-4 text-slate-600">
                            Welcome to  - aapka bharosemand platform for safe Android app downloads! Humne yeh website specially banaayi hai taaki aap bina kisi tension ke apps download kar sakein.
                        </p>
<h3 className="text-lg font-medium mt-6 mb-3 text-slate-900">Humara Mission</h3>
<p className="mb-4 text-slate-600">
                            Humara goal hai ki har user ko safe aur verified apps provide karein. Market mein bohot saari fake websites hain jo malware distribute karti hain, lekin AppVault par aap completely safe hain.
                        </p>
<h3 className="text-lg font-medium mt-6 mb-3 text-slate-900">Kya Milega Yahan?</h3>
<ul className="list-disc list-inside space-y-2 mb-4 text-slate-600">
<li>100% Safe &amp; Verified Apps</li>
<li>Direct Download Links - No Waiting</li>
<li>Regular App Updates</li>
<li>Clean &amp; Ad-Free Experience</li>
<li>Mobile-Friendly Website</li>
</ul>
<h3 className="text-lg font-medium mt-6 mb-3 text-slate-900">Our Promise</h3>
<p className="mb-4 text-slate-600">
                            Hum promise karte hain ki AppVault par available har app ko thoroughly scan kiya gaya hai. Aapki security humari top priority hai.
                        </p>
<div className="rounded-xl p-4 mt-6 bg-indigo-50">
<p className="text-sm text-indigo-700">
<strong>Note:</strong> Agar aapko koi issue ya suggestion ho, toh Contact page se humse zaroor connect karein!
                            </p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page hidden" id="page-contact">
<section className="py-12 md:py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-slate-900">Contact Us</h1>
<div className="grid md:grid-cols-2 gap-8">

<div className="rounded-2xl border p-6 md:p-8 bg-white border-slate-200">
<h2 className="text-lg font-medium mb-6 text-slate-900">Send us a Message</h2>
<form id="contactForm" onsubmit="handleContactSubmit(event)">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Your Name</label>
<input className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 border-slate-200" placeholder="Enter your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Email Address</label>
<input className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 border-slate-200" placeholder="Enter your email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Subject</label>
<input className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-50 border-slate-200" placeholder="What's this about?" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-slate-700">Message</label>
<textarea className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-slate-50 border-slate-200" placeholder="Type your message here..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700" type="submit">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                    Send Message
                                </button>
</div>
</form>
<div className="hidden mt-4 p-4 border rounded-xl bg-emerald-50 border-emerald-200" id="contactSuccess">
<p className="text-sm flex items-center gap-2 text-emerald-700">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Message sent successfully! We'll get back to you soon.
                            </p>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl border p-6 bg-white border-slate-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-100">
<iconify-icon className="text-indigo-600" height="20" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium mb-1 text-slate-900">Email Us</h3>
<p className="text-sm text-slate-600">support@appvault.com</p>
<p className="text-sm text-slate-600">business@appvault.com</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-6 bg-white border-slate-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-100">
<iconify-icon className="text-emerald-600" height="20" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium mb-1 text-slate-900">Response Time</h3>
<p className="text-sm text-slate-600">We typically respond within 24-48 hours</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-6 bg-white border-slate-200">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-100">
<iconify-icon className="text-amber-600" height="20" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium mb-1 text-slate-900">FAQs</h3>
<p className="text-sm text-slate-600">Check our FAQ section for quick answers to common questions</p>
</div>
</div>
</div>
<div className="rounded-2xl p-6 bg-indigo-50">
<h3 className="font-medium mb-2 text-indigo-900">App Submission</h3>
<p className="text-sm text-indigo-700">Want your app featured on AppVault? Send us details at submit@appvault.com</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page hidden" id="page-privacy">
<section className="py-12 md:py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-slate-900">Privacy Policy &amp; Disclaimer</h1>
<div className="rounded-2xl border p-6 md:p-8 bg-white border-slate-200">
<div className="prose max-w-none text-slate-600">
<p className="text-sm text-slate-500 mb-6">Last Updated: January 2025</p>
<h2 className="text-lg font-medium mt-0 mb-4 text-slate-900">Privacy Policy</h2>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">Information We Collect</h3>
<p className="mb-4">
                            At AppVault, we respect your privacy. We may collect basic information such as:
                        </p>
<ul className="list-disc list-inside space-y-2 mb-4">
<li>Device information (for analytics)</li>
<li>Usage data (pages visited, time spent)</li>
<li>Contact information (only if you submit a form)</li>
</ul>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">How We Use Your Information</h3>
<ul className="list-disc list-inside space-y-2 mb-4">
<li>To improve our website and services</li>
<li>To respond to your inquiries</li>
<li>To send important updates (if subscribed)</li>
</ul>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">Cookies</h3>
<p className="mb-4">
                            We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
                        </p>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">Third-Party Links</h3>
<p className="mb-4">
                            Our website contains links to external download sources. We are not responsible for the privacy practices of these external sites.
                        </p>
<div className="border-t my-8 border-slate-200"></div>
<h2 className="text-lg font-medium mb-4 text-slate-900">Disclaimer</h2>
<div className="border rounded-xl p-4 mb-4 bg-amber-50 border-amber-200">
<p className="text-sm text-amber-800">
<strong>Important:</strong> Please read this disclaimer carefully before using our website.
                            </p>
</div>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">General Disclaimer</h3>
<p className="mb-4">
                            AppVault provides download links for Android applications. We do not host any APK files on our servers. All download links redirect to official sources or trusted third-party platforms.
                        </p>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">No Warranty</h3>
<p className="mb-4">
                            While we strive to provide accurate information and safe download links, we cannot guarantee:
                        </p>
<ul className="list-disc list-inside space-y-2 mb-4">
<li>The availability of any app at any time</li>
<li>The compatibility of apps with all devices</li>
<li>That apps will be free from all vulnerabilities</li>
</ul>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">User Responsibility</h3>
<p className="mb-4">
                            Users are responsible for:
                        </p>
<ul className="list-disc list-inside space-y-2 mb-4">
<li>Scanning downloaded files with antivirus software</li>
<li>Ensuring their device meets app requirements</li>
<li>Complying with local laws regarding app usage</li>
</ul>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">Copyright Notice</h3>
<p className="mb-4">
                            All app names, logos, and trademarks belong to their respective owners. AppVault does not claim ownership of any third-party content.
                        </p>
<h3 className="text-base font-medium mt-6 mb-3 text-slate-900">Contact for Removal</h3>
<p className="mb-4">
                            If you are a copyright owner and believe your content should be removed, please contact us at legal@appvault.com with proper documentation.
                        </p>
<div className="rounded-xl p-4 mt-6 bg-slate-50">
<p className="text-sm text-slate-600">
                                By using AppVault, you agree to this Privacy Policy and Disclaimer. We reserve the right to update these terms at any time.
                            </p>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="text-xl font-semibold tracking-tight mb-4">
<span className="text-indigo-400">App</span>Vault
                    </div>
<p className="text-sm max-w-md mb-4 text-slate-400">
                        Your trusted platform for safe and verified Android app downloads. No ads, no hassle - just pure downloads!
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-slate-800 hover:bg-indigo-600" href="#">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="font-medium mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#home" onclick="showPage('home')">Home</a></li>
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#apps" onclick="showPage('apps')">All Apps</a></li>
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#about" onclick="showPage('about')">About Us</a></li>
</ul>
</div>
<div>
<h3 className="font-medium mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#privacy" onclick="showPage('privacy')">Privacy Policy</a></li>
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#privacy" onclick="showPage('privacy')">Disclaimer</a></li>
<li><a className="text-sm transition-colors text-slate-400 hover:text-white" href="#privacy" onclick="showPage('privacy')">Terms of Use</a></li>
</ul>
</div>
</div>
<div className="border-t mt-8 pt-8 text-center border-slate-800">
<p className="text-sm text-slate-500">© 2025 AppVault. All rights reserved. Made with ❤️ for safe app downloads.</p>
</div>
</div>
</footer>


    </>
  );
}
