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



{
"@context": "https://schema.org",
"@type": "Product",
"name": "Selltro SalesOS",
"description": "Order management, WhatsApp CRM, dan affiliate engine untuk business Malaysia",
"brand": {
"@type": "Organization",
"name": "Selltro Sdn Bhd"
},
"offers": {
"@type": "AggregateOffer",
"priceCurrency": "MYR"
}
}



        // Initialize Lucide icons
        lucide.createIcons();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // FAQ toggles
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('[data-lucide="chevron-down"]');
                
                // Close all other FAQs
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherContent = otherToggle.nextElementSibling;
                        const otherIcon = otherToggle.querySelector('[data-lucide="chevron-down"]');
                        otherContent.classList.add('hidden');
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current FAQ
                content.classList.toggle('hidden');
                if (content.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });

        // Pricing toggle
        const monthlyBtn = document.getElementById('monthly-btn');
        const annualBtn = document.getElementById('annual-btn');
        
        monthlyBtn.addEventListener('click', () => {
            monthlyBtn.classList.add('bg-[#824DEB]', 'text-white');
            monthlyBtn.classList.remove('text-gray-600');
            annualBtn.classList.remove('bg-[#824DEB]', 'text-white');
            annualBtn.classList.add('text-gray-600');
        });

        annualBtn.addEventListener('click', () => {
            annualBtn.classList.add('bg-[#824DEB]', 'text-white');
            annualBtn.classList.remove('text-gray-600');
            monthlyBtn.classList.remove('bg-[#824DEB]', 'text-white');
            monthlyBtn.classList.add('text-gray-600');
        });

        // Video modal
        const videoBtn = document.getElementById('video-btn');
        const videoModal = document.getElementById('video-modal');
        const closeVideo = document.getElementById('close-video');

        videoBtn.addEventListener('click', () => {
            videoModal.classList.remove('hidden');
            videoModal.classList.add('flex');
        });

        closeVideo.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            videoModal.classList.remove('flex');
        });

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.add('hidden');
                videoModal.classList.remove('flex');
            }
        });

        // Proposal modal
        const proposalBtn = document.getElementById('proposal-btn');
        const proposalModal = document.getElementById('proposal-modal');
        const closeProposal = document.getElementById('close-proposal');

        proposalBtn.addEventListener('click', () => {
            proposalModal.classList.remove('hidden');
            proposalModal.classList.add('flex');
        });

        closeProposal.addEventListener('click', () => {
            proposalModal.classList.add('hidden');
            proposalModal.classList.remove('flex');
        });

        proposalModal.addEventListener('click', (e) => {
            if (e.target === proposalModal) {
                proposalModal.classList.add('hidden');
                proposalModal.classList.remove('flex');
            }
        });

        // Reinitialize icons after dynamic content
        setTimeout(() => {
            lucide.createIcons();
        }, 100);
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0">
<a className="text-2xl font-bold tracking-tighter text-[#824DEB]" href="#home">SELLTRO</a>
</div>

<div className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#produk">Produk</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#kelebihan">Kelebihan</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#harga">Harga</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#testimoni">Testimoni</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#faq">Soalan Lazim</a>
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#hubungi">Hubungi</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<a className="text-sm font-medium text-[#111827] hover:text-[#824DEB] transition-colors" href="#">Lihat Dokumentasi</a>
<a className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#824DEB] rounded-xl hover:bg-[#7240D8] transition-all shadow-sm hover:shadow-md" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Book Live Demo
                    </a>
</div>

<button className="lg:hidden p-2" id="mobile-menu-btn">
<i className="w-6 h-6 text-[#111827]" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-gray-100" id="mobile-menu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#home">Home</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#produk">Produk</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#kelebihan">Kelebihan</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#harga">Harga</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#testimoni">Testimoni</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#faq">Soalan Lazim</a>
<a className="block text-base font-medium text-[#111827] hover:text-[#824DEB]" href="#hubungi">Hubungi</a>
<div className="pt-4 space-y-3">
<a className="block text-center text-sm font-medium text-[#111827] hover:text-[#824DEB]" href="#">Lihat Dokumentasi</a>
<a className="block text-center px-5 py-2.5 text-sm font-semibold text-white bg-[#824DEB] rounded-xl" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">Book Live Demo</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 gradient-fade"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
<span className="w-2 h-2 bg-[#10B981] rounded-full mr-2 animate-pulse"></span>
<span className="text-sm font-medium text-[#111827]">Dipercayai oleh brand di Malaysia</span>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#111827] leading-[1.1]">
                        Selltro — SalesOS:<br/>
<span className="text-[#824DEB]">Dari Leads → Order → Repeat</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                        Satu ekosistem untuk manage order, CRM WhatsApp, dan affiliate. Jimat kos, naikkan sales, repeat order jalan automatik.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#824DEB] rounded-xl hover:bg-[#7240D8] transition-all shadow-lg hover:shadow-xl" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
<i className="w-5 h-5 mr-2" data-lucide="message-circle"></i>
                            Book Live Demo
                        </a>
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#824DEB] bg-white rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-gray-200" id="video-btn">
<i className="w-5 h-5 mr-2" data-lucide="play-circle"></i>
                            Tengok Video 90 Saat
                        </button>
</div>

<div className="pt-8 border-t border-gray-200">
<p className="text-sm font-medium text-gray-500 mb-4">Dipercayai oleh:</p>
<div className="flex flex-wrap items-center gap-8 opacity-60">
<div className="px-6 py-3 bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-400">SACHAGANDA</div>
<div className="px-6 py-3 bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-400">GB GOLD</div>
<div className="px-6 py-3 bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-400">HAIRA</div>
<div className="px-6 py-3 bg-white rounded-lg border border-gray-200 text-sm font-semibold text-gray-400">ASTER EDU</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
<img alt="Selltro Dashboard" className="w-full h-auto" loading="eager" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#824DEB]/20 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 max-w-xs">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-[#10B981]" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-xs text-gray-500">Sales Hari Ini</p>
<p className="text-xl font-bold text-[#111827]">RM 127,500</p>
</div>
</div>
</div>
<div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-[#824DEB]/10 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-[#824DEB]" data-lucide="users"></i>
</div>
<div>
<p className="text-xs text-gray-500">Repeat Orders</p>
<p className="text-xl font-bold text-[#111827]">64%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="produk">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                    3 Komponen Yang Sync Satu Sama Lain
                </h2>
<p className="text-lg text-gray-600">
                    Pilih satu atau guna semua. Setiap modul berfungsi solo, lebih power bila digabung.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-[#F5F7FB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#824DEB]/30">
<div className="w-14 h-14 bg-[#824DEB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#824DEB] transition-colors">
<i className="w-7 h-7 text-[#824DEB] group-hover:text-white" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-2xl font-bold text-[#111827] mb-4">Founder HQ</h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                        Order &amp; Agent Management
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Urus order, stok, ejen/komisyen</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Courier &amp; payment gateway integration</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>5 cara kira komisyen (Flow/Fighter/Team Sale/Direct/Override)</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-[#824DEB] hover:text-[#7240D8] transition-colors" href="#founder-hq">
                        Lihat modul Founder HQ
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-[#F5F7FB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#824DEB]/30">
<div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10B981] transition-colors">
<i className="w-7 h-7 text-[#10B981] group-hover:text-white" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-bold text-[#111827] mb-4">Aftersale</h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                        Official Meta CRM WhatsApp
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Automation selepas pembelian → repeat order</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Broadcast 1–5 saat, kalis ban</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Sejuta contact pun jalan smooth</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-[#824DEB] hover:text-[#7240D8] transition-colors" href="#aftersale">
                        Lihat modul Aftersale
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-[#F5F7FB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#824DEB]/30">
<div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-7 h-7 text-orange-500 group-hover:text-white" data-lucide="link"></i>
</div>
<h3 className="text-2xl font-bold text-[#111827] mb-4">Cashkaw</h3>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                        Meta Affiliate Engine
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Recruit micro-affiliate dari WhatsApp</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Auto link, auto komisen</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Bank-in automatik dalam 1 hari</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-[#824DEB] hover:text-[#7240D8] transition-colors" href="#cashkaw">
                        Lihat modul Cashkaw
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F5F7FB]" id="founder-hq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-block px-4 py-1.5 bg-[#824DEB]/10 rounded-full text-sm font-semibold text-[#824DEB] mb-6">
                        Order &amp; Agent Management
                    </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                        Founder HQ
                    </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Centralize order, produk, komisyen, courier &amp; payment. Kurang silap manusia, lebih laju proses.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-start">
<div className="w-8 h-8 bg-[#824DEB]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-4 h-4 text-[#824DEB]" data-lucide="calculator"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">5 Kaedah Komisyen</h4>
<p className="text-sm text-gray-600">Flow, Fighter, Team Sale, Direct, Override — fleksibel ikut model jualan anda</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 bg-[#824DEB]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-4 h-4 text-[#824DEB]" data-lucide="shopping-cart"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">TikTok/Shopee/WooCommerce Sync</h4>
<p className="text-sm text-gray-600">Import order terus dari platform e-commerce favorite anda</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 bg-[#824DEB]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-4 h-4 text-[#824DEB]" data-lucide="truck"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Courier Normal/COD + Return Rate</h4>
<p className="text-sm text-gray-600">Track return rate, manage COD, integrate dengan courier pilihan</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 bg-[#824DEB]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-4 h-4 text-[#824DEB]" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Payment Gateway</h4>
<p className="text-sm text-gray-600">Billplz, ToyyibPay, dan lain-lain — semua dalam satu dashboard</p>
</div>
</div>
<div className="flex items-start">
<div className="w-8 h-8 bg-[#824DEB]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-4 h-4 text-[#824DEB]" data-lucide="bar-chart-3"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Superadmin Dashboard</h4>
<p className="text-sm text-gray-600">HQ usage, active users, PG usage, COD rate, top product/state, repeat vs new customer</p>
</div>
</div>
</div>
<a className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#824DEB] bg-white rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-[#824DEB]/20" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Mahu onboarding senang? Book demo
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">
<img alt="Founder HQ Dashboard" className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200" loading="lazy" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="aftersale">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<img alt="WhatsApp CRM" className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200" loading="lazy" src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&amp;h=600&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-4 py-1.5 bg-[#10B981]/10 rounded-full text-sm font-semibold text-[#10B981] mb-6">
                        CRM WhatsApp Rasmi (Official Meta)
                    </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                        Aftersale
                    </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Jimat kos, naikkan sales. Automation follow-up → repeat order; broadcast pantas &amp; kalis ban.
                    </p>
<div className="grid sm:grid-cols-2 gap-6 mb-10">
<div className="bg-[#F5F7FB] rounded-xl p-6 border border-gray-100">
<i className="w-8 h-8 text-[#10B981] mb-3" data-lucide="zap"></i>
<h4 className="font-semibold text-[#111827] mb-2">Automation Selepas Pembelian</h4>
<p className="text-sm text-gray-600">Follow-up auto, reminder restock, upsell jalan sendiri</p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-6 border border-gray-100">
<i className="w-8 h-8 text-[#10B981] mb-3" data-lucide="send"></i>
<h4 className="font-semibold text-[#111827] mb-2">Broadcast 1–5 Saat</h4>
<p className="text-sm text-gray-600">Skala sejuta contact, tetap kalis ban dengan Official Meta API</p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-6 border border-gray-100">
<i className="w-8 h-8 text-[#10B981] mb-3" data-lucide="users-2"></i>
<h4 className="font-semibold text-[#111827] mb-2">Segmen Pelanggan</h4>
<p className="text-sm text-gray-600">Filter new/repeat/no action — target betul-betul</p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-6 border border-gray-100">
<i className="w-8 h-8 text-[#10B981] mb-3" data-lucide="pie-chart"></i>
<h4 className="font-semibold text-[#111827] mb-2">Report Kempen</h4>
<p className="text-sm text-gray-600">Track purchased vs non-purchased untuk optimize ROI</p>
</div>
</div>

<div className="bg-gradient-to-br from-[#824DEB]/5 to-[#10B981]/5 rounded-2xl p-6 border border-gray-200 mb-8">
<h4 className="font-semibold text-[#111827] mb-4">Success Stories</h4>
<div className="space-y-3">
<div className="flex items-start">
<div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2"></div>
<p className="text-sm text-gray-700"><strong>Sachaganda:</strong> RM150k/hari guna broadcast, tanpa team sales</p>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2"></div>
<p className="text-sm text-gray-700"><strong>GB Gold:</strong> RM2 juta/bulan konsisten dengan 25k database (5–6 promo/bulan)</p>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2"></div>
<p className="text-sm text-gray-700"><strong>Haira Perfume:</strong> Solo founder; automation → sales naik bulanan, tiada ban</p>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2"></div>
<p className="text-sm text-gray-700"><strong>Aster EDU:</strong> Jual kelas RM19 kepada student sedia ada, upsell pakej 2026</p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-[#824DEB] to-[#9F7AEA] rounded-xl p-6 text-white">
<div className="flex items-start">
<i className="w-6 h-6 mr-3 flex-shrink-0 mt-1" data-lucide="calendar"></i>
<div>
<h4 className="font-semibold mb-2">Raya/Ramadan 2026 Ready</h4>
<p className="text-sm text-white/90">Setup awal sekarang untuk kempen Ramadan &amp; Raya 2026 — repeat order &amp; sales berganda tanpa tambah team</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F5F7FB]" id="cashkaw">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-block px-4 py-1.5 bg-orange-500/10 rounded-full text-sm font-semibold text-orange-600 mb-6">
                        Meta Affiliate Engine
                    </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                        Jadikan Pelanggan Jadi 'Meta Affiliate'
                    </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Recruit, manage, dan bayar affiliate terus dari WhatsApp. Zero friction, auto everything.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="bot"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Chatbot WhatsApp Rekrut &amp; Closing</h4>
<p className="text-sm text-gray-600">Affiliate apply &amp; dapat approve terus dalam WhatsApp — takde form panjang</p>
</div>
</div>
<div className="flex items-start bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="link-2"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Auto Generate Link Affiliate + Overriding</h4>
<p className="text-sm text-gray-600">Setiap affiliate dapat link unique, sistem track sales &amp; struktur overriding sendiri</p>
</div>
</div>
<div className="flex items-start bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="banknote"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Komisen Auto Bank-In</h4>
<p className="text-sm text-gray-600">1 hari bekerja masuk bank affiliate — no delay, no manual work</p>
</div>
</div>
<div className="flex items-start bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="smartphone"></i>
</div>
<div>
<h4 className="font-semibold text-[#111827] mb-1">Dashboard Affiliate Dalam WhatsApp</h4>
<p className="text-sm text-gray-600">Affiliate check sales, pending komisen, history — semua dalam WhatsApp chat</p>
</div>
</div>
</div>
<a className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-all shadow-sm" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Aktifkan affiliate channel brand anda
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">
<img alt="Cashkaw Affiliate System" className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200" loading="lazy" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="kelebihan">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                    Kenapa Brand Pilih Selltro
                </h2>
<p className="text-lg text-gray-600">
                    Bukan sekadar tools — ini sistem lengkap yang jimat masa, kos, dan scale sales anda.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#10B981]" data-lucide="piggy-bank"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Jimat Kos Support &amp; Ops</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Automation kurangkan beban team — no perlu hire banyak orang untuk handle repeat order &amp; follow-up
                    </p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-[#824DEB]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#824DEB]" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Sales Naik Melalui Repeat &amp; Affiliate</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Automation + affiliate network buat sales datang dari existing customer &amp; reseller — no perlu belanja ads besar
                    </p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#10B981]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Kalis Ban Broadcast WhatsApp</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Official Meta API — broadcast sejuta contact pun safe, takkan kena ban macam guna tools liar
                    </p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-orange-600" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Onboarding Pantas, Training Ringkas</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        1–2 minggu dah boleh live; kita guide setup, import data, train team — tak payah buang masa berbulan
                    </p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-[#824DEB]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#824DEB]" data-lucide="plug"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Integrasi E-commerce &amp; Payment Tempatan</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        TikTok Shop, Shopee, WooCommerce, Billplz, ToyyibPay — semua platform Malaysia ada
                    </p>
</div>
<div className="bg-[#F5F7FB] rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#10B981]" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-bold text-[#111827] mb-3">Data &amp; Report Real-Time</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Dashboard live untuk founder: sales harian, repeat rate, top product, agent performance — buat keputusan cepat
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F5F7FB]" id="harga">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                    Pilih Pakej Yang Sesuai
                </h2>
<p className="text-lg text-gray-600 mb-8">
                    Harga fleksibel ikut skala business. Boleh start dengan satu modul, expand bila ready.
                </p>

<div className="inline-flex items-center bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
<button className="px-6 py-2 text-sm font-semibold text-white bg-[#824DEB] rounded-lg transition-colors" id="monthly-btn">
                        Bulanan
                    </button>
<button className="px-6 py-2 text-sm font-semibold text-gray-600 rounded-lg transition-colors" id="annual-btn">
                        Tahunan <span className="ml-1 text-xs text-[#10B981]">(jimat 20%)</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">

<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow">
<div className="mb-6">
<h3 className="text-2xl font-bold text-[#111827] mb-2">Founder HQ</h3>
<p className="text-sm text-gray-600">Order &amp; Agent Management</p>
</div>
<div className="mb-6">
<div className="flex items-baseline mb-2">
<span className="text-4xl font-bold text-[#111827]">RM 299</span>
<span className="text-gray-500 ml-2">/bulan</span>
</div>
<p className="text-xs text-gray-500">Basic plan — sesuai untuk startup</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Unlimited orders</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Hingga 10 agents/users</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>5 kaedah komisyen</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>E-commerce sync (1 platform)</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Payment gateway integration</span>
</li>
</ul>
<a className="block w-full text-center px-6 py-3 text-sm font-semibold text-[#824DEB] bg-[#824DEB]/10 rounded-xl hover:bg-[#824DEB]/20 transition-colors" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Book Demo
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-[#824DEB] hover:shadow-xl transition-shadow relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#824DEB] text-white text-xs font-semibold rounded-full">
                        POPULAR
                    </div>
<div className="mb-6">
<h3 className="text-2xl font-bold text-[#111827] mb-2">Aftersale</h3>
<p className="text-sm text-gray-600">Official Meta CRM WhatsApp</p>
</div>
<div className="mb-6">
<div className="flex items-baseline mb-2">
<span className="text-4xl font-bold text-[#111827]">RM 1,999</span>
<span className="text-gray-500 ml-2">/bulan</span>
</div>
<p className="text-xs text-gray-500">Setup fee RM 3,000 (one-time)</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Official Meta WhatsApp API</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Broadcast hingga 100k contacts</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Automation flows unlimited</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Customer segmentation</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Campaign reporting &amp; analytics</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Integration dengan Founder HQ</span>
</li>
</ul>
<a className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-[#824DEB] rounded-xl hover:bg-[#7240D8] transition-colors" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Book Demo
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow">
<div className="mb-6">
<h3 className="text-2xl font-bold text-[#111827] mb-2">Cashkaw</h3>
<p className="text-sm text-gray-600">Meta Affiliate Engine</p>
</div>
<div className="mb-6">
<div className="flex items-baseline mb-2">
<span className="text-4xl font-bold text-[#111827]">RM 2,500</span>
<span className="text-gray-500 ml-2">setup</span>
</div>
<p className="text-xs text-gray-500">+ Profit-sharing model (nego)</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>WhatsApp affiliate recruitment</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Auto link generation</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Commission overriding system</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Auto bank-in (1 hari bekerja)</span>
</li>
<li className="flex items-start text-sm text-gray-600">
<i className="w-5 h-5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Affiliate dashboard in WhatsApp</span>
</li>
</ul>
<a className="block w-full text-center px-6 py-3 text-sm font-semibold text-[#824DEB] bg-[#824DEB]/10 rounded-xl hover:bg-[#824DEB]/20 transition-colors" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
                        Book Demo
                    </a>
</div>
</div>
<div className="text-center">
<p className="text-sm text-gray-600 max-w-2xl mx-auto">
<strong>Nota:</strong> Harga boleh disesuaikan ikut skala &amp; integrasi. Nak combo semua modul? Contact kami untuk quotation custom &amp; discount pakej.
                </p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="testimoni">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                    Brand Yang Dah Scale Dengan Selltro
                </h2>
<p className="text-sm text-gray-500">Disahkan oleh laporan dalaman &amp; penyedia pembayaran</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-[#824DEB] to-[#9F7AEA] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            S
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">Sachaganda</h4>
<p className="text-xs text-gray-500">Beauty &amp; Wellness</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "RM150k sehari guna broadcast Aftersale. Takde team sales pun, automation yang kerja. Setup awal memang detail, tapi lepas tu jalan smooth."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="trending-up"></i>
<span className="font-semibold text-[#10B981]">RM150k/hari</span>
</div>
</div>

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            GB
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">GB Gold</h4>
<p className="text-xs text-gray-500">Precious Metals</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "RM2 juta konsisten sebulan dengan database 25k je. 5–6 kali promo, broadcast power. Repeat customer naik 60%+."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="repeat"></i>
<span className="font-semibold text-[#10B981]">60% repeat rate</span>
</div>
</div>

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            H
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">Haira Perfume</h4>
<p className="text-xs text-gray-500">Fragrance</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "Solo founder je, tapi sales naik bulanan. Automation buat kerja follow-up, aku fokus product &amp; content. Zero ban issues."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="shield-check"></i>
<span className="font-semibold text-[#10B981]">Zero bans</span>
</div>
</div>

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            A
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">Aster EDU</h4>
<p className="text-xs text-gray-500">Education</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "Jual kelas RM19 kepada student lama, upsell pakej 2026 dalam broadcast. Conversion 12%, ROI gila. Setup cepat je."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="zap"></i>
<span className="font-semibold text-[#10B981]">12% conversion</span>
</div>
</div>

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            M
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">MariBeli (F&amp;B)</h4>
<p className="text-xs text-gray-500">Food Delivery</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "Guna Cashkaw untuk recruit rider jadi affiliate. Sekarang rider promote menu baru, dapat side income. Win-win."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="users-2"></i>
<span className="font-semibold text-[#10B981]">200+ affiliates</span>
</div>
</div>

<div className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            K
                        </div>
<div>
<h4 className="font-semibold text-[#111827]">Klinik K (Aesthetic)</h4>
<p className="text-xs text-gray-500">Healthcare</p>
</div>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-6">
                        "Follow-up appointment automation + promo treatment package. Repeat booking naik 45%, less no-show."
                    </p>
<div className="flex items-center text-sm">
<i className="w-4 h-4 text-[#10B981] mr-2" data-lucide="calendar-check"></i>
<span className="font-semibold text-[#10B981]">45% more bookings</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#F5F7FB]" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                    Soalan Lazim
                </h2>
<p className="text-lg text-gray-600">
                    Masih ada soalan? <a className="text-[#824DEB] font-semibold hover:underline" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">WhatsApp kami</a>
</p>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Adakah WhatsApp broadcast kalis ban?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Ya, 100%. Aftersale guna Official Meta WhatsApp Business API — fully compliant. Korang boleh broadcast berjuta contact tanpa risiko ban, selagi follow guideline Meta (no spam, proper opt-in). Kami setup betul-betul untuk anda.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Berapa cepat boleh live selepas sign up?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Founder HQ: 3–5 hari (import data, configure, train team).<br/>
                            Aftersale: 7–14 hari (tunggu approval Meta, setup automation).<br/>
                            Cashkaw: 5–7 hari (setup chatbot, integrate payment).<br/>
                            Kalau business anda dah organized, boleh lebih cepat. Kita akan guide step by step.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Integrasi apa yang disokong?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
<strong>E-commerce:</strong> TikTok Shop, Shopee, WooCommerce, Lazada (via API/webhook).<br/>
<strong>Payment:</strong> Billplz, ToyyibPay, Senangpay, PayEx, FPX direct.<br/>
<strong>Courier:</strong> Poslaju, J&amp;T, Ninja Van, DHL, custom couriers.<br/>
                            Kalau ada platform lain, boleh request — kita build custom integration.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Boleh guna modul berasingan atau mesti combo?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Boleh guna berasingan! Banyak client start dengan Aftersale (WhatsApp CRM) dulu, lepas tu baru tambah Founder HQ atau Cashkaw bila scale. Tapi kalau guna semua 3 modul, data sync automatik — lagi power.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Bagaimana dengan support &amp; training?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Masa onboarding: 1-on-1 session dengan team teknikal kami (via Zoom/on-site kalau perlu).<br/>
                            Lepas live: Support via WhatsApp group dedicated, response time &lt; 4 jam (business hours).<br/>
                            Training materials: Video tutorials, docs lengkap, walkthroughs untuk setiap modul.<br/>
                            Advanced setup? Ada professional services fee — kita tolong sampai settle.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Ada contract lock-in atau boleh cancel bila-bila?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Minimum commitment 3 bulan untuk Aftersale (sebab setup cost tinggi). Founder HQ &amp; Cashkaw boleh month-to-month. Takde auto-renew tersembunyi — kita notify awal sebelum renewal. Kalau nak pause/cancel, bagi notice 30 hari.
                        </p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
<button className="faq-toggle w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="font-semibold text-[#111827] pr-8">Data saya selamat tak? Ada backup?</span>
<i className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content hidden px-8 pb-6">
<p className="text-sm text-gray-600 leading-relaxed">
                            Data anda disimpan di server Malaysia (compliance PDPA). Daily automated backup, encrypted storage. Anda boleh request export data bila-bila masa dalam format CSV/Excel. Kita takkan share atau jual data anda — period.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="hubungi">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] mb-6">
                Nak Capai 100k Sehari<br/>Tanpa Tambah Staff?
            </h2>
<p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Kita tunjuk live macam brand lain capai dengan Aftersale + Founder HQ + Cashkaw. 30 minit demo, anda akan faham kenapa sistem ni berbeza.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#824DEB] rounded-xl hover:bg-[#7240D8] transition-all shadow-lg hover:shadow-xl" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
<i className="w-5 h-5 mr-2" data-lucide="message-circle"></i>
                    Book Live Demo Sekarang
                </a>
<button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#824DEB] bg-[#824DEB]/10 rounded-xl hover:bg-[#824DEB]/20 transition-all" id="proposal-btn">
<i className="w-5 h-5 mr-2" data-lucide="file-text"></i>
                    Mahu Proposal &amp; Harga
                </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 pt-8 border-t border-gray-200">
<div className="flex items-center">
<i className="w-4 h-4 mr-2 text-[#824DEB]" data-lucide="phone"></i>
<a className="hover:text-[#824DEB]" href="tel:+60102350439">+6010-235 0439</a>
</div>
<div className="flex items-center">
<i className="w-4 h-4 mr-2 text-[#824DEB]" data-lucide="mail"></i>
<a className="hover:text-[#824DEB]" href="mailto:hello@selltro.my">hello@selltro.my</a>
</div>
<div className="flex items-center">
<i className="w-4 h-4 mr-2 text-[#824DEB]" data-lucide="map-pin"></i>
<span>Kuala Lumpur, Malaysia</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#111827] text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<div className="text-3xl font-bold tracking-tighter text-[#824DEB] mb-4">SELLTRO</div>
<p className="text-sm text-gray-400 mb-6 max-w-md">
                        SalesOS lengkap untuk business Malaysia — dari order management, WhatsApp CRM Official Meta, hingga affiliate engine. Scale smart, bukan keras.
                    </p>
<div className="flex items-center space-x-4">
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#824DEB] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#824DEB] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#824DEB] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#10B981] transition-colors" href="https://wa.me/60102350439">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4">Produk</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#founder-hq">Founder HQ</a></li>
<li><a className="hover:text-white transition-colors" href="#aftersale">Aftersale</a></li>
<li><a className="hover:text-white transition-colors" href="#cashkaw">Cashkaw</a></li>
<li><a className="hover:text-white transition-colors" href="#harga">Harga</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Syarikat</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#testimoni">Success Stories</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dokumentasi</a></li>
<li><a className="hover:text-white transition-colors" href="https://wa.me/60102350439">Hubungi Kami</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">
                        © 2024 Selltro Sdn Bhd (SSM: 202401234567-X). Hak cipta terpelihara.
                    </p>
<p className="text-xs text-gray-500">
                        Official Meta Business Partner • PDPA Compliant
                    </p>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-4 right-4 lg:hidden z-40">
<a className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#10B981] rounded-xl shadow-2xl hover:bg-[#059669] transition-all" href="https://wa.me/60102350439?text=Saya%20nak%20demo%20Selltro">
<i className="w-5 h-5 mr-2" data-lucide="message-circle"></i>
            WhatsApp Demo
        </a>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="video-modal">
<div className="relative w-full max-w-4xl">
<button className="absolute -top-12 right-0 text-white hover:text-gray-300" id="close-video">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<div className="bg-white rounded-2xl overflow-hidden">
<div className="aspect-video bg-gray-900 flex items-center justify-center">
<p className="text-white text-lg">Video Demo 90 Saat (Placeholder)</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="proposal-modal">
<div className="relative w-full max-w-lg">
<button className="absolute -top-12 right-0 text-white hover:text-gray-300" id="close-proposal">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<div className="bg-white rounded-2xl p-8">
<h3 className="text-2xl font-bold text-[#111827] mb-2">Dapatkan Proposal &amp; Harga</h3>
<p className="text-sm text-gray-600 mb-6">Isi maklumat ringkas, kami akan hantar proposal dalam 24 jam</p>
<form className="space-y-4">
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Nama</label>
<input className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent" placeholder="Nama penuh anda" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Syarikat</label>
<input className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent" placeholder="Nama syarikat/brand" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Telefon</label>
<input className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent" placeholder="+60" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Email</label>
<input className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent" placeholder="email@contoh.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Saiz Database</label>
<select className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent">
<option>Bawah 5,000</option>
<option>5,000 - 20,000</option>
<option>20,000 - 50,000</option>
<option>50,000 - 100,000</option>
<option>Lebih 100,000</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-[#111827] mb-2">Platform Jualan Semasa</label>
<input className="w-full px-4 py-3 bg-[#F5F7FB] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#824DEB] focus:border-transparent" placeholder="Cth: TikTok Shop, Shopee, Website" type="text"/>
</div>
<button className="w-full px-6 py-3 text-base font-semibold text-white bg-[#824DEB] rounded-xl hover:bg-[#7240D8] transition-all shadow-sm" type="submit">
                        Hantar &amp; Dapatkan Proposal
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
