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
theme: {
extend: {
colors: {
brand: {
orange: '#F47321',
navy: '#0A3B63',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        document.getElementById('year').textContent = new Date().getFullYear();

        // 1. Scroll Helper
        function scrollToBooking(dest) {
            const select = document.getElementById('fdest');
            if(select) select.value = dest;
            document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
        }

        // 2. Database Setup
        let db;
        const DB_NAME = "WesternSmartDB";
        const STORE_NAME = "submissions";

        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
            }
        };

        request.onsuccess = (e) => {
            db = e.target.result;
        };

        request.onerror = (e) => {
            console.error("Database error", e);
        };

        // 3. Form Handling
        const form = document.getElementById('bookingForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submission = {
                name: document.getElementById('fname').value,
                phone: document.getElementById('fphone').value,
                email: document.getElementById('femail').value,
                destination: document.getElementById('fdest').value,
                program1: document.getElementById('fprog1').value,
                program2: document.getElementById('fprog2').value,
                intake: document.getElementById('fintake').value,
                service: document.getElementById('fservice').value,
                message: document.getElementById('fmsg').value,
                type: 'Booking',
                timestamp: new Date().toISOString()
            };

            const tx = db.transaction(STORE_NAME, "readwrite");
            const store = tx.objectStore(STORE_NAME);
            store.add(submission);

            tx.oncomplete = () => {
                form.reset();
                const successMsg = document.getElementById('successMsg');
                successMsg.classList.remove('hidden');
                setTimeout(() => successMsg.classList.add('hidden'), 5000);
                if(!document.getElementById('adminContent').classList.contains('hidden')) {
                    loadSubmissions();
                }
            };
        });

        // 4. Admin Auth & Logic
        function verifyAdmin() {
            const pass = document.getElementById('adminPass').value;
            const errorMsg = document.getElementById('loginError');
            
            if (pass === 'admin123') {
                document.getElementById('adminLogin').classList.add('hidden');
                document.getElementById('adminContent').classList.remove('hidden');
                errorMsg.classList.add('hidden');
                loadSubmissions();
            } else {
                errorMsg.classList.remove('hidden');
            }
        }

        function logoutAdmin() {
            document.getElementById('adminLogin').classList.remove('hidden');
            document.getElementById('adminContent').classList.add('hidden');
            document.getElementById('adminPass').value = '';
        }

        let allData = [];

        function loadSubmissions() {
            if(!db) return;
            const tx = db.transaction(STORE_NAME, "readonly");
            const store = tx.objectStore(STORE_NAME);
            const req = store.getAll();

            req.onsuccess = () => {
                allData = req.result.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
                renderDashboard();
            };
        }

        function deleteSubmission(id) {
            if(confirm('Are you sure you want to delete this record?')) {
                const tx = db.transaction(STORE_NAME, "readwrite");
                const store = tx.objectStore(STORE_NAME);
                store.delete(id);
                tx.oncomplete = () => loadSubmissions();
            }
        }

        function renderDashboard() {
            const grid = document.getElementById('dashboardGrid');
            const search = document.getElementById('searchInput').value.toLowerCase();
            const filter = document.getElementById('filterInput').value;

            const filtered = allData.filter(item => {
                const matchesSearch = 
                    item.name.toLowerCase().includes(search) || 
                    item.phone.includes(search) || 
                    item.destination.toLowerCase().includes(search);
                
                const matchesType = filter === 'All' ? true : item.type === filter;
                return matchesSearch && matchesType;
            });

            if(filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                        <p class="text-slate-400 text-sm font-medium">No submissions found.</p>
                    </div>`;
                return;
            }

            grid.innerHTML = filtered.map(item => {
                const date = new Date(item.timestamp).toLocaleDateString();
                const time = new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const badgeColor = item.destination === 'Japan' ? 'bg-orange-50 text-[#F47321] border-orange-100' : 'bg-blue-50 text-[#0A3B63] border-blue-100';
                
                return `
                <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all relative group">
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide border rounded-md ${badgeColor}">
                            ${item.type}
                        </span>
                        <span class="text-[10px] text-slate-400 font-medium">${date} • ${time}</span>
                    </div>
                    
                    <h3 class="font-bold text-slate-900 truncate pr-6 text-lg mb-1">${item.name}</h3>
                    <div class="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
                        <i data-lucide="phone" class="w-3 h-3"></i> ${item.phone}
                    </div>

                    <div class="space-y-2.5 mb-5 border-t border-slate-100 pt-4">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400 font-medium">Destination</span>
                            <span class="font-bold ${item.destination === 'Japan' ? 'text-[#F47321]' : 'text-[#0A3B63]'}">${item.destination}</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400 font-medium">Program</span>
                            <span class="text-slate-700 font-medium truncate max-w-[140px] text-right">${item.program1}</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400 font-medium">Intake</span>
                            <span class="text-slate-700 font-medium">${item.intake || '-'}</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400 font-medium">Service</span>
                            <span class="text-slate-700 font-medium">${item.service}</span>
                        </div>
                    </div>

                    ${item.message ? `
                    <div class="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 italic mb-5 line-clamp-2 border border-slate-100">
                        "${item.message}"
                    </div>` : ''}

                    <div class="flex gap-2">
                        <a href="tel:${item.phone}" class="flex-1 py-2.5 text-xs font-semibold text-center text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors">
                            Call Student
                        </a>
                        <button onclick="deleteSubmission(${item.id})" class="p-2.5 text-rose-500 hover:text-white hover:bg-rose-500 rounded-lg border border-rose-100 hover:border-rose-500 transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
                `;
            }).join('');
            
            // Re-run Lucide on dynamic content
            lucide.createIcons();
        }

        document.getElementById('searchInput').addEventListener('input', renderDashboard);
        document.getElementById('filterInput').addEventListener('change', renderDashboard);
        document.getElementById('adminPass').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') verifyAdmin();
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" id="aura-video" loop="" muted="" playsinline="" src="https://www.facebook.com/share/v/1Yxr3aZeon/"></video></div>
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 blur-lg" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c5ca1b4-0a61-4b25-abd5-0799d908d8c9_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 border-b border-slate-200 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-3 select-none">

<div className="relative w-12 h-12 flex items-center justify-center">
<i className="absolute -top-1 -right-1 text-[#F47321] w-5 h-5 fill-current" data-lucide="star"></i>
<div className="w-10 h-10 bg-[#0A3B63] rounded-lg rounded-tr-[20px] flex items-center justify-center text-white relative overflow-hidden shadow-lg shadow-blue-900/20">
<i className="w-6 h-6 relative z-10" data-lucide="graduation-cap"></i>
<div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#F47321] rounded-full"></div>
</div>
</div>

<div className="flex flex-col justify-center h-full">
<div className="flex items-baseline gap-1.5 leading-none">
<span className="text-xl font-bold text-[#0A3B63] tracking-tight">WESTERN</span>
<span className="text-xl font-bold text-[#F47321] tracking-tight">SMART CITY</span>
</div>
<div className="w-full h-[2px] bg-gradient-to-r from-[#F47321] to-[#0A3B63] my-[3px]"></div>
<span className="text-[9px] font-bold text-[#0A3B63] tracking-[0.2em] uppercase w-full flex justify-between leading-none">
<span>Educational</span>
<span>Consultancy</span>
</span>
</div>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#1864cc] rounded-full transition-all hover:shadow-md hover:shadow-blue-500/20" href="https://www.facebook.com/share/1CbpxgrQct/" target="_blank">
<i className="w-3.5 h-3.5 fill-current" data-lucide="facebook"></i>
<span>Facebook</span>
</a>
<a className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full transition-all hover:shadow-md hover:shadow-green-500/20" href="https://wa.me/9779851427377" target="_blank">
<i className="w-3.5 h-3.5 fill-current" data-lucide="message-circle"></i>
<span>WhatsApp</span>
</a>
<a className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#F47321] hover:bg-[#d66219] rounded-full transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5" href="tel:+9779851427377">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
<span>Call Now</span>
</a>
</div>
</div>
</div>
</header>

<main className="w-full">

<section className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-xs font-medium text-[#F47321] bg-orange-50 rounded-full border border-orange-100 shadow-sm">
<i className="w-3 h-3" data-lucide="plane"></i>
                    Your Gateway to Global Education
                </span>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#0A3B63] mb-6 leading-[1.1]">
                    Build Your Future in <br/>
<span className="text-[#F47321] relative">Japan
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span> or <span className="text-[#0A3B63] relative">South Korea
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-100 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                    Expert guidance, visa support, and language preparation for students aspiring to study abroad. Start your journey with Western Smart City today.
                </p>
<div className="mt-8 flex justify-center gap-4">
<button className="px-6 py-3 bg-[#0A3B63] text-white rounded-xl font-medium shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:scale-[1.02] transition-all flex items-center gap-2" onclick="document.getElementById('booking-section').scrollIntoView({behavior:'smooth'})">
                        Start Your Application <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 md:gap-12 -mt-10 relative z-20">

<article className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col h-full">

<div className="relative h-64 w-full overflow-hidden">
<img alt="Japan Cherry Blossoms" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-8 text-white">
<span className="flex items-center gap-2 text-sm font-medium text-orange-200 mb-1">
<i className="w-4 h-4" data-lucide="map-pin"></i> East Asia
                        </span>
<h2 className="text-3xl font-semibold tracking-tight">Study in Japan</h2>
</div>
<div className="absolute top-6 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
<i className="text-[#F47321] w-8 h-8 fill-orange-500/20" data-lucide="sun"></i>
</div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow">
<p className="text-slate-500 mb-8 leading-relaxed">
                        One of the safest, most advanced nations offering high-quality education and excellent career pathways.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 group/item">
<i className="text-[#F47321] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">Legal part-time work (28hrs/week)</span>
</div>
<div className="flex items-start gap-3 group/item">
<i className="text-[#F47321] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">Affordable tuition &amp; living costs</span>
</div>
<div className="flex items-start gap-3 group/item">
<i className="text-[#F47321] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">Pathway to Permanent Residency</span>
</div>
</div>
<div className="bg-orange-50 rounded-xl p-6 border border-orange-100 mb-8 mt-auto">
<h3 className="text-xs font-bold text-[#F47321] uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="book-open"></i>
                            Language Classes
                        </h3>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-white p-3 rounded-lg border border-orange-200/50 shadow-sm">
<span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Morning</span>
<span className="block text-sm font-semibold text-slate-800">6:00 AM</span>
</div>
<div className="bg-white p-3 rounded-lg border border-orange-200/50 shadow-sm">
<span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Evening</span>
<span className="block text-sm font-semibold text-slate-800">6:00 PM</span>
</div>
</div>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F47321]"></div> <span className="font-medium">N5 – N2 Levels</span> (JLPT/NAT focused)
                            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F47321]"></div> Professional Instructors
                            </li>
</ul>
</div>
<button className="w-full py-4 bg-[#F47321] hover:bg-[#d66219] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.98]" onclick="scrollToBooking('Japan')">
                        Apply for Japan
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full">

<div className="relative h-64 w-full overflow-hidden">
<img alt="Seoul South Korea" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-8 text-white">
<span className="flex items-center gap-2 text-sm font-medium text-blue-200 mb-1">
<i className="w-4 h-4" data-lucide="globe"></i> East Asia
                        </span>
<h2 className="text-3xl font-semibold tracking-tight">Study in South Korea</h2>
</div>
<div className="absolute top-6 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
<i className="text-white w-8 h-8" data-lucide="plane"></i>
</div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow">
<p className="text-slate-500 mb-8 leading-relaxed">
                        A rising global education hub with modern lifestyle, high standards, and smooth pathways to higher education.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 group/item">
<i className="text-[#0A3B63] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">No IELTS for language programs</span>
</div>
<div className="flex items-start gap-3 group/item">
<i className="text-[#0A3B63] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">Accepts study gaps &amp; varied GPA</span>
</div>
<div className="flex items-start gap-3 group/item">
<i className="text-[#0A3B63] w-5 h-5 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-700 font-medium">Part-time work &amp; modern lifestyle</span>
</div>
</div>
<div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8 mt-auto">
<h3 className="text-xs font-bold text-[#0A3B63] uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="file-text"></i>
                            Visa Categories
                        </h3>
<div className="flex gap-3 mb-4 flex-wrap">
<span className="px-3 py-1.5 bg-white border border-blue-200 text-[#0A3B63] rounded-md text-[10px] font-bold uppercase tracking-wide">D-4-1 (Language)</span>
<span className="px-3 py-1.5 bg-white border border-blue-200 text-[#0A3B63] rounded-md text-[10px] font-bold uppercase tracking-wide">D-2 (University)</span>
</div>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#0A3B63]"></div> Interview Practice
                            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#0A3B63]"></div> Full Visa Application Assistance
                            </li>
</ul>
</div>
<button className="w-full py-4 bg-[#0A3B63] hover:bg-[#072d4d] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 active:scale-[0.98]" onclick="scrollToBooking('South Korea')">
                        Apply for Korea
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</article>
</div>

<section className="py-24 bg-white border-y border-slate-200 scroll-mt-20" id="booking-section">
<div className="max-w-3xl mx-auto px-4">
<div className="text-center mb-10">
<span className="text-[#F47321] text-xs font-bold uppercase tracking-widest border border-orange-100 bg-orange-50 px-3 py-1 rounded-full">Free Consultation</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0A3B63] tracking-tight mt-4">Book Your Appointment</h2>
<p className="text-slate-500 mt-3 text-lg">Start your study journey to Japan or South Korea with trusted guidance.</p>
</div>
<form className="space-y-6 bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm" id="bookingForm">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="fname" placeholder="e.g. Ram Sharma" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="fphone" placeholder="e.g. 9800000000" required="" type="tel"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="femail" placeholder="email@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Destination</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer" id="fdest">
<option value="Japan">Japan 🇯🇵</option>
<option value="South Korea">South Korea 🇰🇷</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Program 1</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="fprog1" placeholder="e.g. Language Course" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Program 2 (Optional)</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="fprog2" placeholder="e.g. Bachelor" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Preferred Intake</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 placeholder:font-normal placeholder:text-slate-400" id="fintake" placeholder="Month / Year" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Service Type</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer" id="fservice">
<option value="Counseling">Counseling</option>
<option value="Language Class">Language Class</option>
<option value="Visa Support">Visa Support</option>
<option value="Admission">Admission Support</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Message / Notes</label>
<textarea className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#F47321]/10 focus:border-[#F47321] transition-all text-sm font-medium text-slate-800 resize-none placeholder:font-normal placeholder:text-slate-400" id="fmsg" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#0A3B63] hover:bg-[#082a47] text-white font-semibold rounded-xl text-base shadow-xl shadow-blue-900/10 transition-all active:scale-[0.99] flex items-center justify-center gap-2 group" type="submit">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="check-circle-2"></i>
                        Confirm Booking
                    </button>
<p className="hidden text-center text-sm font-medium text-emerald-600 bg-emerald-50 py-3 rounded-xl border border-emerald-100 flex items-center justify-center gap-2" id="successMsg">
<i className="w-4 h-4" data-lucide="check-circle"></i> Booking saved! Our team will contact you shortly.
                    </p>
</form>
</div>
</section>

<section className="py-16 bg-slate-100 min-h-[600px] border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-sm mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center mt-12" id="adminLogin">
<div className="w-14 h-14 bg-blue-50 text-[#0A3B63] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-bold text-[#0A3B63] mb-1">Admin Access</h3>
<p className="text-sm text-slate-500 mb-6">Enter password to view dashboard</p>
<div className="space-y-4">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3B63]/20 focus:border-[#0A3B63] transition-all text-sm text-center tracking-widest placeholder:tracking-normal font-semibold" id="adminPass" placeholder="Password" type="password"/>
<button className="w-full py-3 bg-[#0A3B63] hover:bg-[#082a47] text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-900/10" onclick="verifyAdmin()">
                            Unlock Dashboard
                        </button>
</div>
<p className="text-rose-500 text-xs mt-3 hidden flex items-center justify-center gap-1 font-medium" id="loginError">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Incorrect password
                    </p>
<p className="text-[10px] text-slate-400 mt-6 font-mono">Default: admin123</p>
</div>

<div className="hidden" id="adminContent">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-bold text-[#0A3B63] tracking-tight">Admin Dashboard</h2>
<p className="text-sm text-slate-500 mt-1">View and manage all booking submissions.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative">
<i className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" data-lucide="search"></i>
<input className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3B63]/10 focus:border-[#0A3B63] outline-none w-full sm:w-64 transition-all" id="searchInput" placeholder="Search..." type="text"/>
</div>
<select className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3B63]/10 focus:border-[#0A3B63] outline-none cursor-pointer" id="filterInput">
<option value="All">All Submissions</option>
<option value="Booking">Booking Only</option>
<option value="Inquiry">Inquiry Only</option>
</select>
<button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-[#0A3B63] hover:border-[#0A3B63] transition-colors" onclick="loadSubmissions()">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
</button>
<button className="p-2.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 hover:bg-rose-100 transition-colors" onclick="logoutAdmin()" title="Logout">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="dashboardGrid">

<div className="col-span-full text-center py-20 text-slate-400 flex flex-col items-center">
<i className="w-12 h-12 mb-3 opacity-30" data-lucide="inbox"></i>
<p className="text-sm">Loading data from database...</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>

<div className="flex items-center gap-2 mb-6 select-none">
<div className="w-8 h-8 bg-[#0A3B63] rounded flex items-center justify-center text-white relative">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
<div className="absolute -top-1 -right-1">
<i className="w-3 h-3 text-[#F47321] fill-current" data-lucide="star"></i>
</div>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-bold text-[#0A3B63]">WESTERN</span>
<span className="text-sm font-bold text-[#F47321]">SMART CITY</span>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                        Trusted educational consultancy guiding students towards a brighter future in Japan and South Korea with over a decade of experience.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300" href="https://www.facebook.com/share/1CbpxgrQct/" target="_blank">
<i className="w-5 h-5 fill-current" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] transition-all duration-300" href="https://wa.me/9779851427377" target="_blank">
<i className="w-5 h-5 fill-current" data-lucide="message-circle"></i>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-bold text-[#0A3B63] uppercase tracking-widest mb-6">Gongabu, Kathmandu</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<i className="w-4 h-4 shrink-0 mt-0.5 text-[#F47321]" data-lucide="phone"></i>
<span className="font-medium">01-4973400 / 9851427377</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<i className="w-4 h-4 shrink-0 mt-0.5 text-[#F47321]" data-lucide="mail"></i>
<span>info.westernsmart@gmail.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-xs font-bold text-[#0A3B63] uppercase tracking-widest mb-6">Butwal Branch</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<i className="w-4 h-4 shrink-0 mt-0.5 text-[#F47321]" data-lucide="phone"></i>
<span className="font-medium">9851149649</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<i className="w-4 h-4 shrink-0 mt-0.5 text-[#F47321]" data-lucide="mail"></i>
<span>western.eduinfo@gmail.com</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-100 pt-8 mt-8 flex flex-col items-center gap-4">
<div className="text-center text-xs font-medium text-slate-400">
                    © <span id="year"></span> Western Smart City Educational Consultancy. All rights reserved.
                </div>

<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-semibold opacity-80">
<span className="flex items-center gap-1.5 hover:text-slate-600 transition-colors cursor-default">
<iconify-icon className="-mt-0.5" height="14" icon="solar:code-square-linear" width="14"></iconify-icon>
                        Made by Sujit
                    </span>
<span className="hidden md:inline text-slate-200">|</span>
<span className="flex items-center gap-1.5 hover:text-slate-600 transition-colors cursor-default">
<iconify-icon className="-mt-0.5" height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
                        Supported by Sujit Subedi
                    </span>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-6 right-6 left-6 z-40 flex gap-4">
<a className="flex-1 bg-[#25D366] text-white py-3.5 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 font-semibold text-sm backdrop-blur-sm" href="https://wa.me/9779851427377" target="_blank">
<i className="w-5 h-5 fill-current" data-lucide="message-circle"></i> Chat
        </a>
<a className="flex-1 bg-[#F47321] text-white py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 font-semibold text-sm backdrop-blur-sm" href="tel:+9779851427377">
<i className="w-5 h-5" data-lucide="phone"></i> Call
        </a>
</div>

<a className="hidden md:flex fixed bottom-10 right-10 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-600/20 items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 group" href="https://wa.me/9779851427377" target="_blank">
<i className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform" data-lucide="message-circle"></i>
</a>



    </>
  );
}
