import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data for About Tabs
        const aboutData = {
            vision: {
                title: "Our Vision",
                points: [
                    "To raise a generation deeply rooted in Christ.",
                    "To equip believers for effective ministry.",
                    "To spread the Gospel across nations.",
                    "To build strong families and thriving communities."
                ]
            },
            mission: {
                title: "Our Mission",
                points: [
                    "Providing sound Biblical teaching for spiritual growth.",
                    "Offering prophetic direction through fervent prayer.",
                    "Engaging in active and impactful evangelism.",
                    "Fostering community development and welfare."
                ]
            },
            beliefs: {
                title: "Core Beliefs",
                points: [
                    "We believe in the One true and living God.",
                    "Jesus Christ is Lord, Savior, and the Son of God.",
                    "Empowerment and guidance by the Holy Spirit.",
                    "Salvation is attained through grace by faith.",
                    "The absolute authority of the Holy Scripture."
                ]
            }
        };

        // About Tabs Logic
        function switchTab(tabId) {
            const contentDiv = document.getElementById('tab-content');
            const data = aboutData[tabId];
            
            // Reset button styles
            ['vision', 'mission', 'beliefs'].forEach(id => {
                const btn = document.getElementById(`tab-${id}`);
                if(id === tabId) {
                    btn.className = "px-5 py-2 rounded-lg text-sm font-medium transition-all bg-white text-[#2C1E16] shadow-sm";
                } else {
                    btn.className = "px-5 py-2 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-[#2C1E16] bg-transparent shadow-none";
                }
            });

            // Format lists
            const listHtml = data.points.map(point => 
                `<li class="flex items-start gap-3 mb-3 text-stone-600">
                    <iconify-icon icon="solar:check-circle-linear" class="text-[#D4AF37] mt-1 shrink-0"></iconify-icon>
                    <span>${point}</span>
                </li>`
            ).join('');

            contentDiv.style.opacity = '0';
            setTimeout(() => {
                contentDiv.innerHTML = `
                    <h4 class="text-xl font-semibold text-[#2C1E16] mb-4 animate-fade-in">${data.title}</h4>
                    <ul class="animate-fade-in" style="animation-delay: 0.1s;">${listHtml}</ul>
                `;
                contentDiv.style.opacity = '1';
            }, 200);
        }

        // Initialize About Tab
        switchTab('vision');

        // Data for Ministries
        const ministriesData = {
            children: { title: "Children's Ministry", desc: "A safe, fun, and engaging environment where kids learn about God's love, memorize scripture, and build a strong biblical foundation from an early age." },
            youth: { title: "Youth & Teens Ministry", desc: "Empowering teenagers and young adults to navigate life's challenges through faith, fostering deep connections, and preparing them to be leaders in their generation." },
            women: { title: "Women of Virtue", desc: "A fellowship focused on uplifting, praying for, and empowering women to fulfill their God-given potential in their homes, careers, and the church." },
            men: { title: "Men of Impact", desc: "Equipping men to be strong spiritual leaders, responsible fathers, and dedicated servants of Christ who positively influence their communities." },
            choir: { title: "Choir & Music Ministry", desc: "Leading the congregation into the presence of God through anointed, skillful, and passionate worship and praise." },
            media: { title: "Media & Technical Team", desc: "The creative and technical backbone ensuring the seamless broadcasting of services, sound engineering, and digital outreach to the world." },
            evangelism: { title: "Evangelism Team", desc: "Taking the Great Commission seriously by reaching out to the local community, sharing the Gospel, and winning souls for Christ." }
        };

        // Modal Logic
        const modal = document.getElementById('ministry-modal');
        const modalContent = document.getElementById('modal-content-box');
        const modalBody = document.getElementById('modal-body');

        document.querySelectorAll('.ministry-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-min');
                const data = ministriesData[key];
                const icon = btn.querySelector('iconify-icon').getAttribute('icon');

                modalBody.innerHTML = `
                    <div class="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                        <iconify-icon icon="${icon}" width="32"></iconify-icon>
                    </div>
                    <h3 class="text-2xl font-semibold text-[#2C1E16] mb-4">${data.title}</h3>
                    <div class="h-1 w-12 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
                    <p class="text-stone-600 leading-relaxed">${data.desc}</p>
                `;

                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('glass-panel-light');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90');
                nav.classList.add('glass-panel-light');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel-light transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-[#2C1E16] flex items-center gap-3" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center text-white">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
                VVCI
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A3B2C]">
<a className="hover:text-[#D4AF37] transition-colors" href="#about">About Us</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#leadership">Leadership</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#services">Services</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#ministries">Ministries</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#media">Media</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#give">Give</a>
<a className="bg-[#2C1E16] text-white px-5 py-2.5 rounded-full hover:bg-[#4A3B2C] transition-colors flex items-center gap-2" href="https://wa.me/233246209473" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    Contact
                </a>
</div>
<button className="lg:hidden text-[#2C1E16] hover:text-[#D4AF37] transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-[#D4AF37]/20 p-6 flex flex-col gap-4 lg:hidden shadow-xl" id="mobile-menu">
<a className="text-[#4A3B2C] font-medium py-2 border-b border-stone-100" href="#about">About Us</a>
<a className="text-[#4A3B2C] font-medium py-2 border-b border-stone-100" href="#leadership">Leadership</a>
<a className="text-[#4A3B2C] font-medium py-2 border-b border-stone-100" href="#services">Services &amp; Events</a>
<a className="text-[#4A3B2C] font-medium py-2 border-b border-stone-100" href="#ministries">Ministries</a>
<a className="text-[#4A3B2C] font-medium py-2 border-b border-stone-100" href="#give">Give Online</a>
<a className="text-[#D4AF37] font-medium py-2 flex items-center gap-2" href="https://wa.me/233246209473">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon> WhatsApp Us
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1A110B]">

<div className="absolute inset-0 z-0">
<img alt="Heavenly light rays" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/963a10ce-56a8-459e-9073-e6b407124150_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1A110B]/80 via-[#2C1E16]/60 to-[#FAFAFA]"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[128px] animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-float-delayed"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 pb-20">
<div className="max-w-3xl text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs font-medium text-[#F3E5AB] mb-8 backdrop-blur-sm animate-fade-in">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
                    Victory Vine Chapel International
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.05] animate-fade-in" style={{animationDelay: '0.1s'}}>
                    Raising <br/>
<span className="gold-gradient-text italic pr-4">Victorious Believers</span><br/>
                    in Christ.
                </h1>
<p className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                    Experience the power of the Word, vibrant worship, and the transforming presence of the Holy Spirit. Welcome to your new home.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#1A110B] rounded-full font-medium hover:bg-[#F3E5AB] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]" href="#about">
                        Plan a Visit
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#media">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Online
                    </a>
</div>
</div>

<div className="w-full max-w-sm glass-panel-dark p-8 rounded-3xl animate-fade-in hidden lg:block" style={{animationDelay: '0.4s'}}>
<div className="mb-6 pb-6 border-b border-white/10">
<p className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium mb-1">General Overseer</p>
<p className="text-xl text-white font-medium">Rev. E.K. Ansah Gyan</p>
</div>
<div className="mb-6 pb-6 border-b border-white/10 space-y-4">
<div className="flex items-start gap-3 text-stone-300 text-sm">
<iconify-icon className="text-[#D4AF37] shrink-0 mt-0.5" icon="solar:map-point-linear" width="20"></iconify-icon>
<p>Nkunimdie Fie, Darkuman Junction, Accra</p>
</div>
<div className="flex items-center gap-3 text-stone-300 text-sm">
<iconify-icon className="text-[#D4AF37] shrink-0" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<p>Sundays at 8:00 AM</p>
</div>
</div>
<a className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors" href="https://wa.me/233246209473">
<iconify-icon className="text-[#D4AF37]" icon="solar:whatsapp-linear" width="18"></iconify-icon>
                    Contact on WhatsApp
                </a>
</div>
</div>
</header>

<section className="relative -mt-10 z-20 px-6 max-w-6xl mx-auto" id="events">
<div className="bg-[#2C1E16] rounded-3xl p-1 shadow-2xl overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
<div className="relative bg-gradient-to-r from-[#2C1E16] via-[#2C1E16]/95 to-[#4A3B2C]/90 rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/20">
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium mb-4">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Upcoming Major Event
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">OPEN HEAVENS 2026</h2>
<p className="text-[#F3E5AB] font-medium text-lg mb-2">Theme: Glory &amp; Honour <span className="text-stone-400 text-sm font-normal">(Rev. 4:11, 1 Chron. 29:11)</span></p>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-stone-300 mt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-date-linear"></iconify-icon> 19th Jan – 1st Feb</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5:00 PM Daily</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> VVCI Nkunimdie Fie</span>
</div>
</div>
<div className="flex flex-col items-center gap-4 shrink-0">

<div className="flex gap-3 text-center">
<div className="bg-white/5 border border-white/10 rounded-lg p-3 min-w-[70px]">
<span className="block text-2xl font-semibold text-white">45</span>
<span className="text-[10px] text-stone-400 uppercase tracking-wider">Days</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-3 min-w-[70px]">
<span className="block text-2xl font-semibold text-white">12</span>
<span className="text-[10px] text-stone-400 uppercase tracking-wider">Hrs</span>
</div>
</div>
<a className="w-full px-6 py-3 bg-white text-[#2C1E16] rounded-xl font-medium hover:bg-stone-200 transition-colors text-sm text-center" href="https://wa.me/233246209473?text=I%20want%20to%20register%20for%20Open%20Heavens%202026">
                        Register Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200 relative group">
<img alt="Worship congregation" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/80 via-transparent to-transparent"></div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl opacity-30"></div>
</div>
</div>
<div>
<h2 className="text-xs font-medium text-[#8B7355] uppercase tracking-widest mb-3 flex items-center gap-2">
<div className="w-8 h-[1px] bg-[#D4AF37]"></div> Who We Are
                </h2>
<h3 className="text-3xl md:text-5xl font-semibold text-[#2C1E16] tracking-tight mb-6">
                    A dynamic ministry transforming lives.
                </h3>
<p className="text-stone-600 leading-relaxed text-base md:text-lg mb-8">
                    Victory Vine Chapel International (VVCI) is committed to transforming lives through the power of the Word, worship, and the Holy Spirit. Our mission is to build victorious believers, strengthen families, and raise leaders who will influence the nations for Christ.
                </p>

<div className="mt-12">
<div className="flex gap-2 p-1 bg-stone-100 rounded-xl w-fit mb-6">
<button className="px-5 py-2 rounded-lg text-sm font-medium transition-all bg-white text-[#2C1E16] shadow-sm" id="tab-vision" onclick="switchTab('vision')">Vision</button>
<button className="px-5 py-2 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-[#2C1E16]" id="tab-mission" onclick="switchTab('mission')">Mission</button>
<button className="px-5 py-2 rounded-lg text-sm font-medium transition-all text-stone-500 hover:text-[#2C1E16]" id="tab-beliefs" onclick="switchTab('beliefs')">Beliefs</button>
</div>
<div className="min-h-[160px]" id="tab-content">

</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100 relative" id="leadership">

<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-xs font-medium text-[#8B7355] uppercase tracking-widest mb-3">Our Leadership</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight">Guided by the Spirit</h3>
</div>
<div className="max-w-4xl mx-auto bg-[#FAFAFA] border border-stone-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-10 items-center">
<div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl relative">

<img alt="Rev. E.K. Ansah Gyan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43c8ab02-a8e1-4520-98aa-1ad972e52a74_800w.jpg"/>
<div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></div>
</div>
<div>
<div className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#8B7355] rounded-full text-xs font-medium mb-4">General Overseer</div>
<h4 className="text-2xl md:text-3xl font-semibold text-[#2C1E16] mb-3">Rev. E.K. Ansah Gyan</h4>
<p className="text-stone-600 text-sm leading-relaxed mb-6">
                        With a profound calling and years of dedicated ministry, Rev. Ansah Gyan leads VVCI with a passion for evangelism, deep biblical teaching, and fervent prayer. His vision is to see a generation deeply rooted in Christ, equipped for ministry, and impacting their communities with the Gospel.
                    </p>
<div className="flex gap-4">
<button className="text-sm font-medium text-[#2C1E16] border-b border-[#D4AF37] pb-0.5 hover:text-[#D4AF37] transition-colors">Read Full Bio</button>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center opacity-60">
<div>
<div className="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 border-2 border-white shadow-sm flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#2C1E16]">Resident Pastor</p>
</div>
<div>
<div className="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 border-2 border-white shadow-sm flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#2C1E16]">Youth Pastor</p>
</div>
<div>
<div className="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 border-2 border-white shadow-sm flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#2C1E16]">Worship Leader</p>
</div>
<div>
<div className="w-20 h-20 mx-auto rounded-full bg-stone-200 mb-3 border-2 border-white shadow-sm flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-[#2C1E16]">Admin Head</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-xs font-medium text-[#8B7355] uppercase tracking-widest mb-3">Join Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight">Weekly Services</h3>
</div>
<p className="text-stone-500 text-sm max-w-md md:text-right">Encounter God's presence, receive sound teaching, and experience miracles in our weekly gatherings.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-[#2C1E16] mb-2">Celebration Service</h4>
<p className="text-stone-500 text-sm mb-6">A powerful time of worship, prophetic word, and fellowship.</p>
<div className="flex items-center gap-2 text-sm font-medium text-[#8B7355]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Sundays, 8:00 AM - 12:00 PM
                    </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#8B7355]/10 rounded-xl flex items-center justify-center text-[#8B7355] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-[#2C1E16] mb-2">Teaching Service</h4>
<p className="text-stone-500 text-sm mb-6">Deep dive into the scriptures to build a solid foundation.</p>
<div className="flex items-center gap-2 text-sm font-medium text-[#8B7355]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Wednesdays, 7:00 PM
                    </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#4A3B2C]/10 rounded-xl flex items-center justify-center text-[#4A3B2C] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-[#2C1E16] mb-2">Miracle Service</h4>
<p className="text-stone-500 text-sm mb-6">Fervent prayer, deliverance, and manifestation of God's power.</p>
<div className="flex items-center gap-2 text-sm font-medium text-[#8B7355]">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Fridays, 6:00 PM
                    </div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap justify-center gap-4 text-sm text-stone-600">
<span className="font-medium text-[#2C1E16]">Other Programs:</span>
<span className="px-3 border-l border-stone-300">Monthly Fire Night</span>
<span className="px-3 border-l border-stone-300">Home Cell Meetings</span>
</div>
</div>
</section>

<section className="py-24 bg-[#2C1E16] relative overflow-hidden" id="ministries">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544427920-c49ccf08c146?q=80&amp;w=2627&amp;auto=format&amp;fit=crop')] opacity-[0.03] mix-blend-overlay object-cover"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center">
<h2 className="text-xs font-medium text-[#D4AF37] uppercase tracking-widest mb-3">Get Involved</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Ministries</h3>
<p className="text-stone-400 max-w-2xl mx-auto text-sm">Find your place to serve, grow, and connect. Click to learn more.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="children">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Children</h4>
<p className="text-xs text-stone-400">Building early foundations</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="youth">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:routing-2-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Youth &amp; Teens</h4>
<p className="text-xs text-stone-400">Raising the next generation</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="women">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:crown-star-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Women of Virtue</h4>
<p className="text-xs text-stone-400">Empowered for impact</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="men">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:shield-star-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Men of Impact</h4>
<p className="text-xs text-stone-400">Leading with purpose</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="choir">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:music-notes-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Choir &amp; Music</h4>
<p className="text-xs text-stone-400">Leading heavenly worship</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="media">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Media &amp; Tech</h4>
<p className="text-xs text-stone-400">Broadcasting the Gospel</p>
</button>
<button className="ministry-btn group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all text-left backdrop-blur-sm" data-min="evangelism">
<div className="mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">
<iconify-icon icon="solar:megaphone-linear" width="28"></iconify-icon>
</div>
<h4 className="text-sm md:text-base font-medium text-white mb-1">Evangelism</h4>
<p className="text-xs text-stone-400">Reaching the lost</p>
</button>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-center">
<p className="text-sm text-stone-400">And many more areas to serve...</p>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[60] hidden flex items-center justify-center px-4" id="ministry-modal">
<div className="absolute inset-0 bg-[#1A110B]/90 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="bg-white relative w-full max-w-md rounded-3xl p-8 shadow-2xl transform transition-all scale-95 opacity-0 border border-stone-200" id="modal-content-box">
<button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-stone-100 rounded-full text-stone-500 hover:text-[#2C1E16] hover:bg-stone-200 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="text-center" id="modal-body">

</div>
<div className="mt-8 pt-6 border-t border-stone-100 text-center">
<a className="text-sm font-medium text-[#D4AF37] hover:text-[#8B7355] transition-colors" href="https://wa.me/233246209473?text=I%20am%20interested%20in%20joining%20a%20ministry">Contact leader to join →</a>
</div>
</div>
</div>

<section className="py-24 bg-white" id="media">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-stone-100 pb-8">
<div>
<h2 className="text-3xl font-semibold text-[#2C1E16] tracking-tight">Latest Messages</h2>
</div>
<div className="flex gap-4">
<button className="text-sm font-medium text-[#D4AF37] border-b border-[#D4AF37] pb-1">Sunday Messages</button>
<button className="text-sm font-medium text-stone-400 hover:text-[#2C1E16] transition-colors pb-1">Teachings</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden relative mb-4">
<img alt="Sermon thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544427920-c49ccf08c146?q=80&amp;w=2627&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#2C1E16] shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-medium">45:20</div>
</div>
<div className="flex gap-2 text-xs text-[#8B7355] font-medium mb-1">
<span>Rev. E.K. Ansah Gyan</span> • <span>Last Sunday</span>
</div>
<h4 className="text-lg font-medium text-[#2C1E16] group-hover:text-[#D4AF37] transition-colors line-clamp-2">Understanding the Glory and Honour of God</h4>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-[#4A3B2C] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" icon="solar:music-library-2-linear" width="40"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#2C1E16] shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex gap-2 text-xs text-[#8B7355] font-medium mb-1">
<span>Guest Minister</span> • <span>2 weeks ago</span>
</div>
<h4 className="text-lg font-medium text-[#2C1E16] group-hover:text-[#D4AF37] transition-colors line-clamp-2">The Power of Prophetic Direction</h4>
</div>

<div className="bg-[#FAFAFA] border border-stone-200 rounded-2xl p-6 flex flex-col justify-center text-center hover:border-[#D4AF37]/30 transition-colors cursor-pointer">
<div className="w-14 h-14 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm text-[#4A3B2C] mb-4">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-[#2C1E16] mb-2">Photo Galleries</h4>
<p className="text-sm text-stone-500 mb-4">Relive the moments from our past events and services.</p>
<span className="text-sm font-medium text-[#D4AF37]">View Galleries →</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-stone-100 relative overflow-hidden" id="give">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 skew-x-12 translate-x-1/4 rounded-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<div className="w-16 h-16 bg-white rounded-2xl mx-auto shadow-sm border border-stone-100 flex items-center justify-center text-[#D4AF37] mb-6">
<iconify-icon icon="solar:hand-money-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight mb-4">Partner With Us</h2>
<p className="text-stone-500 max-w-xl mx-auto text-sm">Your generosity enables us to spread the Gospel, build the community, and advance the Kingdom of God.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-all text-center">
<h3 className="text-lg font-medium text-[#2C1E16] mb-4">Mobile Money</h3>
<div className="bg-stone-50 rounded-xl p-4 mb-6">
<p className="text-xs text-stone-400 uppercase tracking-wider mb-1">MTN MoMo</p>
<p className="text-xl font-semibold text-[#2C1E16] tracking-widest">0246 209 473</p>
<p className="text-xs text-stone-500 mt-1">Name: Victory Vine Chapel</p>
</div>
<p className="text-xs text-stone-400">Include "Tithe", "Offering", or "Seed" in reference.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-all text-center relative overflow-hidden border-t-4 border-t-[#D4AF37]">
<div className="absolute top-3 right-3 text-[#D4AF37]/20"><iconify-icon icon="solar:banknotes-linear" width="40"></iconify-icon></div>
<h3 className="text-lg font-medium text-[#2C1E16] mb-4 relative z-10">Bank Transfer</h3>
<div className="space-y-3 text-sm relative z-10 text-left bg-stone-50 rounded-xl p-4">
<div>
<span className="block text-xs text-stone-400 mb-0.5">Bank Name</span>
<span className="font-medium text-[#2C1E16]">[Bank Placeholder]</span>
</div>
<div>
<span className="block text-xs text-stone-400 mb-0.5">Account Name</span>
<span className="font-medium text-[#2C1E16]">Victory Vine Chapel Int.</span>
</div>
<div>
<span className="block text-xs text-stone-400 mb-0.5">Account Number</span>
<span className="font-mono font-semibold text-[#2C1E16]">000000000000</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-all text-center flex flex-col justify-center">
<h3 className="text-lg font-medium text-[#2C1E16] mb-2">Online Giving</h3>
<p className="text-sm text-stone-500 mb-6">Give securely via debit/credit card or international platforms.</p>
<button className="w-full py-3 bg-[#2C1E16] text-white rounded-xl font-medium hover:bg-[#4A3B2C] transition-colors text-sm">
                        Give Online Now
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A110B] text-stone-300 pt-20 pb-10 border-t border-[#D4AF37]/20" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-5 pr-4">
<a className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 rounded bg-[#D4AF37] flex items-center justify-center text-[#1A110B]">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
                    VVCI
                </a>
<p className="text-sm leading-relaxed text-stone-400 mb-8 max-w-sm">
                    Raising victorious believers in Christ. Join us to experience the transforming power of the Word and the Holy Spirit.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<p className="text-sm">Nkunimdie Fie, Opposite ACTS Commercials Ltd<br/>Behind Tecno Building<br/>Darkuman Junction, Accra - Ghana</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<div className="text-sm">
<a className="hover:text-white transition-colors block" href="tel:0246209473">0246 209 473</a>
<a className="hover:text-white transition-colors block mt-1" href="tel:0538486671">0538 486 671</a>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 text-sm">
<h4 className="text-white font-medium mb-6">Send us a message</h4>
<form className="space-y-4">
<input className="w-full bg-[#2C1E16] border border-[#D4AF37]/20 rounded-lg px-4 py-2.5 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your Name" type="text"/>
<input className="w-full bg-[#2C1E16] border border-[#D4AF37]/20 rounded-lg px-4 py-2.5 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your Email" type="email"/>
<textarea className="w-full bg-[#2C1E16] border border-[#D4AF37]/20 rounded-lg px-4 py-2.5 text-white placeholder:text-stone-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" placeholder="How can we help?" rows="3"></textarea>
<button className="bg-[#D4AF37] text-[#1A110B] px-6 py-2.5 rounded-lg font-medium hover:bg-[#F3E5AB] transition-colors w-full" type="button">Send Message</button>
</form>
</div>

<div className="md:col-span-4 h-64 md:h-full bg-[#2C1E16] rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative min-h-[250px]">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.431267595567!2d-0.24580452424057864!3d5.584594234149864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a175f560e9d%3A0xea4cc914cc7d6c62!2sDarkuman%20Junction!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh" style={{border: '0', filter: 'grayscale(0.8) contrast(1.2) opacity(0.8)'}} width="100%"></iframe>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
<p>© 2024 Victory Vine Chapel International. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-[#D4AF37] transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="18"></iconify-icon> Facebook</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon> YouTube</a>
</div>
</div>
</footer>



    </>
  );
}
