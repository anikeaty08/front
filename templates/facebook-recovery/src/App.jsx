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
fontFamily: {
sans: ['"Hind Siliguri"', 'sans-serif'],
},
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
900: '#4c1d95',
950: '#0f0529', // Deep purple/black bg
}
},
animation: {
'blob': 'blob 7s infinite',
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Navbar Blur Effect on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.replace('bg-opacity-80', 'bg-opacity-95');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Ripple Effect
        document.querySelectorAll('.ripple-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                ripples.classList.add('ripple');
                this.appendChild(ripples);
                setTimeout(() => {
                    ripples.remove();
                }, 600);
            });
        });

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0', 'pointer-events-none');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                lightbox.classList.add('hidden');
            }, 300);
            document.body.style.overflow = 'auto';
        }
        
        // Close lightbox on outside click
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeLightbox();
        });

        // Testimonial Slider (Simple Fade)
        const slides = document.querySelectorAll('.testimonial-slide');
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0', 'pointer-events-none');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none');
            slides[currentSlide].classList.add('opacity-100');
        }, 5000);

        // Form Validation
        const form = document.getElementById('contactForm');
        const status = document.getElementById('formStatus');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const contact = document.getElementById('contactInfo').value;
            const message = document.getElementById('message').value;

            if (!name || !contact || !message) {
                status.innerText = "দয়া করে সব তথ্য পূরণ করুন।";
                status.className = "text-center text-sm mt-2 text-red-400";
                status.classList.remove('hidden');
                return;
            }

            // Simulate sending
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "পাঠানো হচ্ছে...";
            btn.disabled = true;
            btn.classList.add('opacity-70');

            setTimeout(() => {
                btn.innerText = "সফল হয়েছে!";
                btn.classList.replace('from-purple-600', 'from-green-600');
                btn.classList.replace('to-indigo-600', 'to-green-500');
                
                status.innerText = "আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। শীঘ্রই যোগাযোগ করা হবে।";
                status.className = "text-center text-sm mt-2 text-green-400";
                status.classList.remove('hidden');
                
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-70');
                    btn.classList.replace('from-green-600', 'from-purple-600');
                    btn.classList.replace('to-green-500', 'to-indigo-600');
                    status.classList.add('hidden');
                }, 3000);
            }, 1500);
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">

<a className="text-xl tracking-tight font-medium text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white">
<span className="font-bold">S</span>
</div>
<span>সিকিউর<span className="text-purple-400">আইটি</span></span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-slate-300">
<a className="hover:text-purple-400 transition-colors" href="#home">হোম</a>
<a className="hover:text-purple-400 transition-colors" href="#about">পরিচিতি</a>
<a className="hover:text-purple-400 transition-colors" href="#services">সেবাসমূহ</a>
<a className="hover:text-purple-400 transition-colors" href="#portfolio">সাফল্য</a>
<a className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all" href="#contact">যোগাযোগ</a>
</div>

<button className="md:hidden text-slate-300 focus:outline-none" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden glass-nav border-t border-slate-800" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4 text-center text-slate-300">
<a className="mobile-link hover:text-purple-400" href="#home">হোম</a>
<a className="mobile-link hover:text-purple-400" href="#about">পরিচিতি</a>
<a className="mobile-link hover:text-purple-400" href="#services">সেবাসমূহ</a>
<a className="mobile-link hover:text-purple-400" href="#portfolio">সাফল্য</a>
<a className="mobile-link text-purple-400 font-medium" href="#contact">যোগাযোগ করুন</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

<div className="md:w-1/2 text-center md:text-left z-10 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    সাইবার সিকিউরিটি স্পেশালিস্ট
                </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
                    আপনার ডিজিটাল জীবনের <br/>
<span className="text-gradient">সুরক্ষা ও রিকভারি</span> এক্সপার্ট
                </h1>
<p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed font-light">
                    ফেসবুক, ইনস্টাগ্রাম বা যেকোনো সোশ্যাল মিডিয়া অ্যাকাউন্ট হ্যাক বা ডিজেবল হয়েছে? চিন্তার কিছু নেই, আমরা আছি আপনার পাশে। ১০০% বিশ্বস্ততার সাথে সমাধান।
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<a className="ripple-btn relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm tracking-wide" href="#contact">
                        এখনই যোগাযোগ করুন
                    </a>
<a className="px-8 py-3.5 rounded-full glass-card text-white hover:bg-white/10 transition-all text-sm font-medium flex items-center justify-center gap-2" href="#portfolio">
                        কাজের প্রমাণ দেখুন
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="md:w-1/2 relative z-10 flex justify-center">
<div className="relative w-72 h-72 md:w-96 md:h-96">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-[60px] opacity-40"></div>
<img alt="Profile" className="relative w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg">
<div className="bg-green-500/20 p-2 rounded-lg text-green-400">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">সফল রিকভারি</p>
<p className="text-lg font-medium text-white">৫০০+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">আমার সম্পর্কে</h2>
<div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-transparent mx-auto rounded-full"></div>
</div>
<div className="glass-card rounded-2xl p-8 md:p-12 border-gradient">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 text-slate-300 leading-relaxed font-light text-justify">
<p className="mb-4">
                            আসসালামু আলাইকুম, আমি একজন প্রফেশনাল <strong className="text-purple-400 font-medium">এথিক্যাল হ্যাকার এবং সাইবার সিকিউরিটি এক্সপার্ট</strong>। গত ৪ বছর ধরে আমি সফলভাবে সোশ্যাল মিডিয়া সুরক্ষা এবং হ্যাকড অ্যাকাউন্ট রিকভারি নিয়ে কাজ করছি।
                        </p>
<p>
                            আমার লক্ষ্য হলো ডিজিটাল স্পেসে মানুষকে সুরক্ষা প্রদান করা। আপনার ব্যক্তিগত বা ব্যবসায়িক পেইজ, আইডি বা গ্রুপের যেকোনো সমস্যায় আমি সর্বোচ্চ গোপনীয়তা রক্ষা করে সমাধান দিয়ে থাকি।
                        </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div>
<h3 className="text-2xl font-medium text-white">৪+</h3>
<p className="text-sm text-slate-500">বছরের অভিজ্ঞতা</p>
</div>
<div>
<h3 className="text-2xl font-medium text-white">৯৮%</h3>
<p className="text-sm text-slate-500">সাফল্যের হার</p>
</div>
</div>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-3">
<div className="glass-card p-4 rounded-lg flex items-center gap-3">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm">১০০% সিকিউর</span>
</div>
<div className="glass-card p-4 rounded-lg flex items-center gap-3">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm">দ্রুত সাপোর্ট</span>
</div>
<div className="glass-card p-4 rounded-lg flex items-center gap-3">
<iconify-icon className="text-green-400 text-2xl" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-sm">গোপনীয়তা রক্ষা</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950/50" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-purple-400 text-sm tracking-widest uppercase mb-2 block">সেবাসমূহ</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">কিভাবে সাহায্য করতে পারি?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:facebook-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">ফেসবুক আইডি রিকভারি</h3>
<p className="text-slate-400 text-sm leading-relaxed">হ্যাক হওয়া বা লক হয়ে যাওয়া ফেসবুক আইডি সঠিক তথ্য যাচাইয়ের মাধ্যমে ফিরিয়ে আনা হয়।</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:camera-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">ইনস্টাগ্রাম রিকভারি</h3>
<p className="text-slate-400 text-sm leading-relaxed">ডিস্যাবল বা হ্যাকড ইনস্টাগ্রাম প্রোফাইল পুনরুদ্ধারে আমরা এক্সপার্ট সাপোর্ট প্রদান করি।</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">সিকিউরিটি অডিট</h3>
<p className="text-slate-400 text-sm leading-relaxed">আপনার অ্যাকাউন্টের নিরাপত্তা যাচাই এবং ভবিষ্যতে হ্যাকিং থেকে বাচার পরামর্শ।</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:verified-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">পেজ ভেরিফিকেশন</h3>
<p className="text-slate-400 text-sm leading-relaxed">বিজনেস বা পাবলিক ফিগার পেজ ব্লু-ব্যাজ ভেরিফিকেশনের জন্য প্রফেশনাল গাইডলাইন।</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">পেজ/গ্রুপ রিকভারি</h3>
<p className="text-slate-400 text-sm leading-relaxed">এডমিন এক্সেস হারানো বা হ্যাক হয়ে যাওয়া বিজনেস পেজ বা গ্রুপ রিকভারি সার্ভিস।</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-call-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-100">ইমার্জেন্সি সাপোর্ট</h3>
<p className="text-slate-400 text-sm leading-relaxed">জরুরি প্রয়োজনে দ্রুত সাড়া প্রদান এবং তাৎক্ষণিক ব্যবস্থা গ্রহণ।</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden" id="portfolio">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">সাফল্যের গ্যালারি</h2>
<p className="text-slate-400 text-sm">পূর্ববর্তী কিছু কাজের প্রমাণ</p>
</div>

<div className="flex gap-2 text-sm overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/10 hover:bg-purple-600 transition-colors">সব</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-slate-400 border border-white/5 hover:border-white/20 hover:text-white transition-colors">ফেসবুক</button>
<button className="px-4 py-1.5 rounded-full bg-transparent text-slate-400 border border-white/5 hover:border-white/20 hover:text-white transition-colors">ইনস্টাগ্রাম</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1614064641938-3bcee529cfc3?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<img alt="Work Proof" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:eye-linear"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<img alt="Work Proof" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:eye-linear"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<img alt="Work Proof" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:eye-linear"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop')">
<img alt="Work Proof" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-purple-500 text-4xl mb-6 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="relative h-48 md:h-32" id="testimonial-container">

<div className="testimonial-slide absolute inset-0 transition-opacity duration-700 opacity-100">
<p className="text-lg md:text-xl text-slate-200 leading-relaxed italic">"আমার ৬ বছরের পুরনো ফেসবুক আইডি হ্যাক হয়ে গিয়েছিল। ভাইয়ের সার্ভিসে আমি ২৪ ঘণ্টার মধ্যে আইডি ফেরত পেয়েছি। অশেষ ধন্যবাদ।"</p>
<div className="mt-6 flex flex-col items-center">
<h4 className="font-medium text-white">রাকিব হাসান</h4>
<div className="flex text-yellow-400 text-sm mt-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="testimonial-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none">
<p className="text-lg md:text-xl text-slate-200 leading-relaxed italic">"বিজনেস পেজের এডমিন এক্সেস হারিয়ে ফেলেছিলাম। খুব দ্রুত এবং বিশ্বস্ততার সাথে সমস্যা সমাধান করে দিয়েছেন।"</p>
<div className="mt-6 flex flex-col items-center">
<h4 className="font-medium text-white">সুমাইয়া আক্তার</h4>
<div className="flex text-yellow-400 text-sm mt-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">যোগাযোগ করুন</h2>
<p className="text-slate-400 font-light">যেকোনো প্রয়োজনে ফর্মটি পূরণ করুন অথবা সরাসরি সোশ্যাল মিডিয়ায় মেসেজ দিন। আমরা দ্রুত সাড়া দিবো।</p>
</div>
<div className="space-y-4">
<a className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Facebook</p>
<p className="text-sm font-medium text-slate-200">fb.com/username</p>
</div>
</a>
<a className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full bg-green-600/20 text-green-500 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">WhatsApp</p>
<p className="text-sm font-medium text-slate-200">+880 1XXX-XXXXXX</p>
</div>
</a>
<a className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors group" href="#">
<div className="w-10 h-10 rounded-full bg-sky-600/20 text-sky-500 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Telegram</p>
<p className="text-sm font-medium text-slate-200">t.me/username</p>
</div>
</a>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-gradient">
<form className="space-y-5" id="contactForm">
<div className="space-y-1">
<label className="text-sm text-slate-400">আপনার নাম</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 text-sm" id="name" placeholder="নাম লিখুন" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm text-slate-400">ইমেইল / ফোন</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 text-sm" id="contactInfo" placeholder="ইমেইল বা ফোন নাম্বার" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm text-slate-400">মেসেজ</label>
<textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600 text-sm resize-none" id="message" placeholder="আপনার সমস্যা বিস্তারিত লিখুন..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all ripple-btn" type="submit">
                            মেসেজ পাঠান
                        </button>
<p className="text-center text-sm mt-2 hidden" id="formStatus"></p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-xl font-medium text-white">সিকিউর<span className="text-purple-400">আইটি</span></span>
<p className="text-slate-500 text-xs mt-2">© ২০২৪ সর্বস্বত্ব সংরক্ষিত।</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-bold" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-bold" width="20"></iconify-icon></a>
</div>
<button className="p-3 rounded-full glass-card text-purple-400 hover:bg-white/10 transition-colors" onclick="window.scrollTo(0,0)">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black/90 hidden flex items-center justify-center p-4 backdrop-blur-sm opacity-0 pointer-events-none" id="lightbox">
<button className="absolute top-6 right-6 text-white/70 hover:text-white" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-linear" width="40"></iconify-icon>
</button>
<img alt="Full View" className="max-h-[90vh] max-w-full rounded-lg shadow-2xl border border-white/10" id="lightbox-img" src=""/>
</div>



    </>
  );
}
