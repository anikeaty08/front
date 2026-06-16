import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
cream: {
50: '#FFFCF9',
100: '#FFF8F3',
200: '#F5EBE0',
},
brown: {
400: '#D4A373', // Gold/Tan
500: '#A97142', // Copper
800: '#5D4037', // Deep Coffee
900: '#432818', // Darkest Brown
},
sage: {
100: '#E8EFE8',
500: '#8DA399',
},
blue: {
100: '#E3F2FD',
200: '#BBDEFB',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')",
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Intersection Observer for Fade Up Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.fade-up').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 bg-gradient-to-b from-black/20 to-transparent w-full top-0">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flower-2 text-white w-6 h-6" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
<span className="text-xl font-serif text-white tracking-widest uppercase">La Nina</span>
</div>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase text-white/90">
<a className="hover:text-white transition-colors" href="#">Về chúng tôi</a>
<a className="hover:text-white transition-colors" href="#">Dịch vụ</a>
<a className="hover:text-white transition-colors" href="#">Liệu trình</a>
<a className="hover:text-white transition-colors" href="#">Thư viện</a>
</div>
<button className="hidden md:flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-brown-900 transition-all">
                Đặt lịch ngay
                <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="overflow-hidden w-full h-screen relative">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Spa Treatment" className="w-full h-full object-cover brightness-[0.85]" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent"></div>
<div className="flex flex-col text-center pt-20 pr-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] mb-6 fade-up visible">Welcome to your personal sanctuary</p>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 tracking-tighter opacity-95 fade-up visible" style={{}}>
                Skin Detox
            </h1>
<div className="flex items-center gap-4 fade-up visible" style={{}}>
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 object-cover border-white/20 border-2 rounded-full" src="https://lh3.googleusercontent.com/a-/ALV-UjWpxS0yQK28krhEZJG9jRkGopw_j3kl9KUWYa7L6177fb1JwSR7=w36-h36-p-rp-mo-br100?w=800&amp;q=80"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/20 backdrop-blur-md flex items-center justify-center text-xs text-white font-medium">50+</div>
</div>
<span className="text-white/90 text-sm font-light italic">Happy Clients this week</span>
</div>
<div className="absolute bottom-12 md:bottom-20 w-full text-center fade-up visible" style={{}}>
<h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white/20 uppercase tracking-widest select-none">
                    Pure &amp; Natural
                </h2>
</div>
</div>
</header>

<div className="bg-cream-100 border-b border-brown-900/10 py-4 overflow-hidden whitespace-nowrap">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-brown-800 gap-4 md:gap-0">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brown-500"></div>
<span>TTTM Vinhomes Westpoint, Hà Nội</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brown-500"></div>
<span>Mon-Sun: 9:00 AM - 8:00 PM</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brown-500"></div>
<span>Hotline: 0983 208 320</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-cream-100 relative">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-7xl font-serif text-brown-400 mb-8 leading-tight fade-up">
                Where Science
                <span className="inline-block align-middle mx-2 w-24 h-16 md:w-32 md:h-20 rounded-full overflow-hidden border border-brown-200 rotate-3">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</span>
                Meets
                <br/>
<span className="inline-block align-middle mx-2 w-24 h-16 md:w-32 md:h-20 rounded-full overflow-hidden border border-brown-200 -rotate-3">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</span>
                Nature
            </h2>
<div className="flex flex-col items-center gap-6 max-w-2xl mx-auto fade-up" style={{}}>
<span className="text-xs font-bold tracking-[0.3em] text-brown-500 uppercase">Ưu đãi giới hạn</span>
<p className="text-lg md:text-xl text-brown-800/70 font-light leading-relaxed">
                    Mua <strong className="text-brown-900 font-medium">01 Skin Detox</strong>, tặng ngay <strong className="text-brown-900 font-medium">01 buổi gội thanh lọc</strong>. 
                    Chúng tôi kết hợp công nghệ oxy tươi với liệu pháp thiên nhiên để tạo ra một không gian thư giãn đích thực.
                </p>
<div className="h-12 w-[1px] bg-brown-300 mt-4"></div>
</div>
</div>
</section>

<section className="pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h3 className="text-3xl md:text-4xl font-serif text-brown-900 mb-3">Chosen For Your Skin</h3>
<p className="text-brown-500 uppercase text-sm tracking-wider">Giải pháp toàn diện</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group relative fade-up" style={{}}>
<div className="relative overflow-hidden rounded-t-[2rem] aspect-[4/5] bg-white">
<span className="absolute top-4 right-4 z-10 bg-brown-900/10 backdrop-blur-md text-brown-900 px-3 py-1 rounded-full text-xs font-semibold">$50</span>
<img alt="Detox" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06e08107-4165-4407-b209-e92d2f7d72e0_1600w.jpg"/>
</div>
<div className="-mt-4 z-10 shadow-brown-900/5 text-center bg-white rounded-b-[2rem] mr-4 ml-4 pt-6 pr-6 pb-6 pl-6 relative shadow-xl">
<h4 className="font-serif text-xl text-brown-900 mb-2">Cuốn trôi bụi mịn</h4>
<p className="text-xs text-brown-500 uppercase tracking-widest">Làm sạch sâu</p>
</div>
</div>

<div className="group relative fade-up" style={{}}>
<div className="relative overflow-hidden rounded-t-[2rem] aspect-[4/5] bg-white">
<span className="absolute top-4 right-4 z-10 bg-brown-900/10 backdrop-blur-md text-brown-900 px-3 py-1 rounded-full text-xs font-semibold">$60</span>
<img alt="Purify" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90dc02ec-edea-4f01-be8a-0957d89c64b9_1600w.jpg"/>
</div>
<div className="bg-white p-6 rounded-b-[2rem] text-center -mt-4 relative z-10 mx-4 shadow-xl shadow-brown-900/5">
<h4 className="font-serif text-xl text-brown-900 mb-2">Đào thải độc tố</h4>
<p className="text-xs text-brown-500 uppercase tracking-widest">Phục hồi da</p>
</div>
</div>

<div className="group relative fade-up" style={{}}>
<div className="relative overflow-hidden rounded-t-[2rem] aspect-[4/5] bg-white">
<span className="absolute top-4 right-4 z-10 bg-brown-900/10 backdrop-blur-md text-brown-900 px-3 py-1 rounded-full text-xs font-semibold">$80</span>
<img alt="Oil" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30951a6e-7ec8-415e-b623-fbd7a76fccbe_1600w.jpg"/>
</div>
<div className="bg-white p-6 rounded-b-[2rem] text-center -mt-4 relative z-10 mx-4 shadow-xl shadow-brown-900/5">
<h4 className="font-serif text-xl text-brown-900 mb-2">Kiểm soát bã nhờn</h4>
<p className="text-xs text-brown-500 uppercase tracking-widest">Cân bằng độ ẩm</p>
</div>
</div>
</div>
<div className="flex justify-center mt-12 fade-up">
<a className="inline-flex items-center gap-3 px-8 py-4 border border-brown-300 rounded-full text-brown-800 text-sm uppercase tracking-widest hover:bg-brown-800 hover:text-white transition-all duration-300" href="#booking">
                    Đặt lịch tư vấn
                </a>
</div>
</div>
</section>

<section className="flex flex-col text-center pt-24 pr-6 pb-24 pl-6 items-center justify-center">
<svg className="lucide lucide-wheat text-brown-400 w-8 h-8 mb-8 fade-up" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
<blockquote className="max-w-3xl font-serif text-2xl md:text-4xl text-brown-800 leading-normal fade-up">
            "Everyone deserves a place to find their inner peace. At La Nina, we create moments of <span className="italic text-brown-400">care, comfort, and refreshment</span>."
        </blockquote>
</section>

<section className="py-20 bg-cream-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-3 flex flex-col min-h-[300px] fade-up bg-[#EAD8C8] rounded-3xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<p className="text-xs font-bold uppercase tracking-widest text-brown-900/60 mb-2">Our Philosophy</p>
<h3 className="font-serif text-2xl text-brown-900">Crafted For Calm</h3>
</div>
<div className="flex justify-center py-8">
<svg className="lucide lucide-flower w-12 h-12 text-brown-800 opacity-20" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
</div>
<p className="text-xs text-brown-900/70 leading-relaxed">
                        We create more than treatments — we create space to breathe.
                    </p>
</div>

<div className="md:col-span-6 bg-blue-100 rounded-3xl overflow-hidden relative min-h-[400px] group fade-up" style={{}}>
<div className="absolute inset-0 z-10 p-8 flex flex-col items-center text-center justify-between">
<div>
<span className="text-4xl font-serif text-brown-800 mb-2 block">- SPA -</span>
<p className="text-[10px] uppercase tracking-widest text-brown-600 max-w-xs mx-auto">
                                Tặng gội thanh lọc da đầu khi mua liệu trình Skin Detox
                            </p>
</div>

<div className="w-48 h-48 relative">
<img alt="Spa illustration" className="w-full h-full object-contain mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<a className="text-xs font-bold uppercase tracking-widest text-brown-800 hover:text-brown-600 transition-colors" href="#">
                            www.laninaspa.com
                        </a>
</div>
</div>

<div className="md:col-span-3 flex flex-col gap-6">
<div className="bg-gray-100 rounded-3xl p-6 flex-1 flex flex-col justify-center fade-up" style={{}}>
<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Customer Satisfaction</p>
<p className="font-serif text-4xl text-gray-800">98%</p>
</div>
<div className="bg-[#EAEAEA] rounded-3xl p-6 flex-1 flex flex-col justify-center fade-up" style={{}}>
<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Slots Left</p>
<p className="font-serif text-4xl text-gray-800">12<span className="text-lg text-gray-500 align-top">+</span></p>
</div>
<div className="bg-gray-100 rounded-3xl p-6 flex-1 flex flex-col justify-center fade-up" style={{}}>
<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Rating</p>
<p className="font-serif text-4xl text-gray-800">4.9/5</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-center text-4xl md:text-5xl font-serif text-brown-400 mb-20 fade-up">Our Soft Services</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 border-t border-brown-200/50 pt-12">

<div className="fade-up" style={{}}>
<div className="flex items-start justify-between mb-8">
<h3 className="font-serif text-xl uppercase tracking-wider text-brown-900 w-12 leading-tight">Hair Spa</h3>
<svg className="lucide lucide-sparkles w-6 h-6 text-brown-300 font-light" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<p className="text-xs text-brown-500 leading-relaxed mb-8 h-20">
                        Indulge in a rejuvenating journey. Our Hair Spa treatment restores every strand, leaving your hair deeply nourished.
                    </p>
<ul className="space-y-6">
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Soft Mind</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$40</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">60 Minutes</div>
</div>
</li>
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Full Mind</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$80</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">90 Minutes</div>
</div>
</li>
</ul>
</div>

<div className="fade-up" style={{}}>
<div className="flex items-start justify-between mb-8">
<h3 className="font-serif text-xl uppercase tracking-wider text-brown-900 w-12 leading-tight">Body Massage</h3>
<svg className="lucide lucide-waves w-6 h-6 text-brown-300 font-light" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<p className="text-xs text-brown-500 leading-relaxed mb-8 h-20">
                        Relax and recharge with our Body Massage. Soothing touch and gentle oils to melt stress and ease tension.
                    </p>
<ul className="space-y-6">
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Syndrome Mini</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$40</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">60 Minutes</div>
</div>
</li>
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Full Body</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$90</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">100 Minutes</div>
</div>
</li>
</ul>
</div>

<div className="fade-up" style={{}}>
<div className="flex items-start justify-between mb-8">
<h3 className="font-serif text-xl uppercase tracking-wider text-brown-900 w-12 leading-tight">Face Massage</h3>
<svg className="lucide lucide-sun w-6 h-6 text-brown-300 font-light" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<p className="text-xs text-brown-500 leading-relaxed mb-8 h-20">
                        A refreshing treatment that enhances your natural glow. Combining soothing techniques that restore your complexion.
                    </p>
<ul className="space-y-6">
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Glowing Skin</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$40</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">60 Minutes</div>
</div>
</li>
<li className="flex items-end justify-between group">
<div className="w-full">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-brown-800 uppercase tracking-wider">Face Lifting</span>
<span className="text-xs font-bold bg-cream-200 px-2 py-0.5 rounded text-brown-600">$80</span>
</div>
<div className="text-[10px] text-brown-400 uppercase tracking-widest">90 Minutes</div>
</div>
</li>
</ul>
</div>
</div>
<div className="text-center mt-20 fade-up">
<p className="text-sm text-brown-600 mb-8 max-w-lg mx-auto">
                    Discover true relaxation at La Nina. Enjoy our Head, Body, and Face Treatments, crafted to nurture your body, mind, and soul.
                </p>
<a className="inline-block border border-brown-300 px-8 py-3 rounded-full text-xs uppercase tracking-widest text-brown-800 hover:bg-brown-800 hover:text-white hover:border-brown-800 transition-all" href="#">Learn More</a>
</div>
</div>
</section>

<section className="py-24 bg-cream-50 relative overflow-hidden">
<div className="text-center mb-16 px-6 fade-up">
<div className="inline-flex items-center gap-2 mb-4">
<svg className="w-4 h-4 text-brown-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="text-xs font-bold tracking-[0.2em] text-brown-500 uppercase">Client Love</span>
<svg className="w-4 h-4 text-brown-400" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-brown-900">Stories of Relaxation</h2>
</div>
<div className="marquee-container flex flex-col gap-8">

<div className="flex overflow-hidden relative w-full">
<div className="flex animate-scroll hover:pause gap-6 pl-6">

<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Vợ chồng tôi đã có trải nghiệm tuyệt vời với dịch vụ chăm sóc da mặt và massage chân tại La Niña! Nhân viên rất chuyên nghiệp, sạch sẽ và thân thiện."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">DF</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Danny Florentin</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Không gian sạch sẽ. Kỹ thuật viên tư vấn nhiệt tình. Phục vụ rất tốt. Mình đau vai gáy làm xong thấy nhẹ dễ chịu hẳn."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">DH</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Dung Hoàng</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Dịch vụ chuyên nghiệp, giá cả hợp lý, không gian ấm áp +1000 điểm 👌🫶❤️"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">BN</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Bình Nguyễn</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Mình đã cho con gái điều trị mụn tại đây, rất Ok la hiệu quả sau 3 tháng khỏi hoàn toàn."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">HN</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Huyền Nguyễn</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Spa sạch sẽ, sang trọng, nhân viên làm việc chuyên nghiệp, dịch vụ tốt 🤩🤩🥰"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">HT</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Huyen Trang</span>
</div>
</div>

<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Vợ chồng tôi đã có trải nghiệm tuyệt vời với dịch vụ chăm sóc da mặt và massage chân tại La Niña! Nhân viên rất chuyên nghiệp, sạch sẽ và thân thiện."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">DF</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Danny Florentin</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Không gian sạch sẽ. Kỹ thuật viên tư vấn nhiệt tình. Phục vụ rất tốt. Mình đau vai gáy làm xong thấy nhẹ dễ chịu hẳn."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">DH</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Dung Hoàng</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Dịch vụ chuyên nghiệp, giá cả hợp lý, không gian ấm áp +1000 điểm 👌🫶❤️"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">BN</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Bình Nguyễn</span>
</div>
</div>
</div>
</div>

<div className="flex overflow-hidden relative w-full">
<div className="flex animate-scroll-reverse hover:pause gap-6 pl-6">

<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Làm việc rất chú tâm đến khách hàng, nhân viên rất hiền lành."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">QN</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Quách Nhật Nam</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Rất hài lòng với trải nghiệm lần này, chắc chắn sẽ quay lại."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">MT</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Myy Trà</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Dịch vụ rất tốt (Very good)."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">ZP</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Zbigniew Pluta</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Dịch vụ tốt, các bạn nhân viên thân thiện và nhiệt tình 🥰"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">MB</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Minh Thanh Benjamin</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Trải nghiệm rất dễ chịu."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">LH</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Lan Hương</span>
</div>
</div>
<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Tôi thích cách phản hồi đặt chỗ qua KakaoTalk ngay lập tức."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">QL</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Q LEE</span>
</div>
</div>

<div className="flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl border border-brown-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brown-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-sm text-brown-800 leading-relaxed mb-6 font-light italic line-clamp-4">"Làm việc rất chú tâm đến khách hàng, nhân viên rất hiền lành."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brown-200 flex items-center justify-center text-brown-800 font-serif text-xs font-bold">QN</div>
<span className="text-xs font-semibold uppercase tracking-wider text-brown-900">Quách Nhật Nam</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream-100 border-t border-brown-100/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center items-center gap-4 text-brown-300 mb-6">
<svg className="lucide lucide-leaf w-5 h-5 rotate-45" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs uppercase tracking-widest text-brown-800">Wellness Delivered</span>
<svg className="lucide lucide-leaf w-5 h-5 -rotate-45" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-brown-900 mb-4 fade-up">Subscribe &amp; Stay Inspired</h2>
<p className="text-brown-500 mb-10 text-sm">Fresh updates, Self-Care Rituals &amp; Special Rewards - Straight To Your Inbox.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto fade-up">
<input className="w-full sm:w-auto flex-1 bg-transparent border-b border-brown-200 py-2 px-4 focus:outline-none focus:border-brown-500 text-brown-800 placeholder-brown-300 text-center sm:text-left transition-colors font-serif" placeholder="yourspa@gmail.com" type="email"/>
<button className="px-8 py-2 border border-brown-200 rounded-full text-xs uppercase tracking-widest text-brown-600 hover:bg-brown-800 hover:text-white hover:border-brown-800 transition-all" type="submit">
                    Subscribe
                </button>
</form>

<div className="mt-16 flex justify-center gap-8 text-brown-200 opacity-50">
<svg className="lucide lucide-fan w-4 h-4 animate-bounce" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0s'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
<svg className="lucide lucide-fan w-4 h-4 animate-bounce" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0.2s'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
<svg className="lucide lucide-fan w-4 h-4 animate-bounce" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0.4s'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
</div>
</div>
</section>

<footer className="bg-brown-500 relative overflow-hidden text-brown-100 pt-24 pb-12" id="booking">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

<div>
<h4 className="font-serif text-2xl text-white mb-8">Connect With Us</h4>
<address className="not-italic text-sm leading-relaxed opacity-80 mb-6">
<strong className="block text-white mb-2">Address:</strong>
                        Tầng 1 - TTTM Vinhomes Westpoint<br/>
                        Nam Từ Liêm, Hà Nội
                    </address>
<div className="text-sm opacity-80">
<strong className="block text-white mb-2">Opening Hours:</strong>
                        09:00 am - 08:00 pm
                    </div>
<div className="mt-6 text-sm opacity-80">
<strong className="block text-white mb-2">Mobile:</strong>
                        0983 208 320
                    </div>
</div>

<div className="flex flex-col items-start md:items-center">
<h4 className="font-serif text-2xl text-white mb-8">Follow Us</h4>
<div className="flex flex-col gap-3 text-sm font-medium tracking-widest uppercase">
<a className="hover:text-white opacity-70 hover:opacity-100 transition-opacity" href="#">Instagram</a>
<a className="hover:text-white opacity-70 hover:opacity-100 transition-opacity" href="#">Facebook</a>
<a className="hover:text-white opacity-70 hover:opacity-100 transition-opacity" href="#">LinkedIn</a>
<a className="hover:text-white opacity-70 hover:opacity-100 transition-opacity" href="#">Zalo</a>
</div>
</div>

<div>
<h4 className="font-serif text-2xl text-white mb-8">Book An Appointment</h4>
<p className="text-sm opacity-80 mb-8 leading-relaxed">
                        Your well-being starts here. Take the first step toward serenity with La Nina moments. Unwind, Refresh, and let us create the perfect moment just for you.
                    </p>
<button className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-xs uppercase tracking-widest text-white hover:bg-white hover:text-brown-900 transition-all">
                        Book An Appointment
                        <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-60">
<p>2024 © La Nina Beauty &amp; Spa. All Rights Reserved.</p>
<p>Website designed by AI</p>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-20 select-none">
<h1 className="text-[12rem] md:text-[20rem] font-serif text-white whitespace-nowrap leading-none text-center transform translate-y-1/3 tracking-tighter mix-blend-overlay">
                LA NINA
            </h1>
</div>
</footer>


    </>
  );
}
