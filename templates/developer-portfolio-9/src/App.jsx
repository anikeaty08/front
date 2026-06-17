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
dark: '#070A12',
navy: '#0B1020',
gold: '#D6B25E',
cyan: '#22D3EE',
offwhite: '#EAEAF0',
muted: '#9AA3B2',
glass: 'rgba(255, 255, 255, 0.05)'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Sora', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Sticky Navbar Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            const navBg = document.getElementById('nav-bg');
            if (window.scrollY > 50) {
                navBg.classList.remove('opacity-0');
                nav.classList.remove('mt-8');
                nav.classList.add('mt-0');
            } else {
                navBg.classList.add('opacity-0');
                nav.classList.remove('mt-0');
                nav.classList.add('mt-8');
            }
        });

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('-translate-x-full')) {
                menu.classList.remove('-translate-x-full');
            } else {
                menu.classList.add('-translate-x-full');
            }
        }

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (content.style.height) {
                content.style.height = null;
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('text-gold');
            } else {
                // Close others (optional)
                content.style.height = content.scrollHeight + "px";
                icon.style.transform = 'rotate(45deg)';
                button.classList.add('text-gold');
            }
        }

        // Modal Logic
        function openModal() {
            document.getElementById('quick-view-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('quick-view-modal').classList.add('hidden');
        }

        // Simple Cart Toast Simulation
        function toggleCart() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-24');
            setTimeout(() => {
                toast.classList.add('translate-y-24');
            }, 3000);
        }
    
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
      

<div className="noise-overlay"></div>

<div className="bg-navy border-b border-white/5 py-2 relative z-50">
<div className="container mx-auto px-4 flex justify-center items-center text-[10px] md:text-xs tracking-wide text-muted font-medium">
<span>Miễn phí vận chuyển đơn từ 2.000.000₫</span>
<span className="mx-3 text-gold">•</span>
<span>Đổi trả 14 ngày</span>
<span className="mx-3 text-gold">•</span>
<span>Bảo hành 24 tháng</span>
</div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-transparent mt-8" id="navbar">
<div className="absolute inset-0 bg-dark/80 backdrop-blur-md transition-opacity duration-300 opacity-0" id="nav-bg"></div>
<div className="container mx-auto px-6 py-4 relative flex justify-between items-center">

<button className="lg:hidden text-white/80 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-display font-semibold tracking-tighter uppercase text-white z-50" href="#">
                CHRONOS
            </a>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-muted">
<a className="hover:text-white transition-colors" href="#">Bộ sưu tập</a>
<a className="hover:text-white transition-colors" href="#">Nam</a>
<a className="hover:text-white transition-colors" href="#">Nữ</a>
<a className="text-gold/90 hover:text-gold transition-colors" href="#">Limited</a>
<a className="hover:text-white transition-colors" href="#">Phụ kiện</a>
<a className="hover:text-white transition-colors" href="#">Về chúng tôi</a>
</div>

<div className="flex items-center space-x-5 text-white/80">
<button className="hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hidden md:block hover:text-white transition-colors">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative hover:text-white transition-colors group" onclick="toggleCart()">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1.5 h-3.5 w-3.5 bg-gold rounded-full text-[9px] flex items-center justify-center text-dark font-bold">2</span>
</button>
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold tracking-wide border border-gold/40 text-gold rounded hover:bg-gold hover:text-dark transition-all duration-300" href="#shop">
                    MUA NGAY
                </a>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-dark transform -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobile-menu">
<div className="p-6 flex justify-between items-center border-b border-white/10">
<span className="text-xl font-display font-bold tracking-tight">MENU</span>
<button className="text-white/60 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
<div className="p-8 flex flex-col space-y-6 text-lg font-light">
<a className="text-white" href="#">Bộ sưu tập</a>
<a className="text-muted" href="#">Nam</a>
<a className="text-muted" href="#">Nữ</a>
<a className="text-gold" href="#">Limited Edition</a>
<a className="text-muted" href="#">Phụ kiện</a>
<div className="h-px bg-white/10 w-full my-4"></div>
<a className="text-sm text-muted" href="#">Tài khoản</a>
<a className="text-sm text-muted" href="#">Trợ giúp</a>
</div>
</div>

<section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 w-full h-full z-0">

<img alt="Luxury Watch Macro" className="w-full h-full object-cover animate-slow-zoom opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-navy/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-transparent to-dark/40"></div>
</div>

<div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
<div className="mb-6 animate-float">
<span className="inline-flex items-center px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-[10px] font-mono tracking-widest uppercase backdrop-blur-sm">
<span className="w-1.5 h-1.5 bg-cyan rounded-full mr-2 animate-pulse"></span>
                    New • Limited Drop 2025
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-white tracking-tighter leading-[0.9] mb-6 max-w-4xl text-glow">
                PRECISION <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">IN THE DARK.</span>
</h1>
<p className="text-muted text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed border-l-2 border-gold/50 pl-6">
                Thiết kế tối giản. Kính Sapphire nguyên khối. Chống nước 10ATM. Đẳng cấp trong từng nhịp đập.
            </p>
<div className="flex flex-col md:flex-row gap-4 mb-16">
<button className="bg-gold hover:bg-[#C5A354] text-dark font-medium px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(214,178,94,0.2)]">
                    Mua ngay
                </button>
<button className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium px-8 py-4 rounded text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white/10 flex items-center gap-2">
                    Khám phá bộ sưu tập
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap gap-8 text-xs text-muted/60 font-mono uppercase tracking-wider">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="lucide:shield-check"></iconify-icon>
                    Bảo hành chính hãng 5 năm
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="lucide:truck"></iconify-icon>
                    Giao hàng toàn quốc
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold" icon="lucide:lock"></iconify-icon>
                    Thanh toán an toàn
                </div>
</div>

<div className="absolute right-10 bottom-32 hidden lg:flex flex-col gap-3">
<div className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-white/80">Sapphire Crystal</div>
<div className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-white/80">Automatic Movement</div>
<div className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-white/80">316L Stainless Steel</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
</div>
</section>

<section className="py-24 bg-dark relative z-20">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="group relative overflow-hidden rounded-2xl cursor-pointer">
<img alt="Classic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-display font-medium text-white mb-2">Classic Series</h3>
<p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">Vẻ đẹp trường tồn với thời gian.</p>
<span className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Khám phá <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl cursor-pointer">
<img alt="Sport" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-display font-medium text-white mb-2">Sport Chrono</h3>
<p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">Mạnh mẽ, chính xác, bền bỉ.</p>
<span className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Khám phá <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl cursor-pointer md:col-span-1">
<img alt="Limited" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="absolute top-8 right-8">
<span className="px-3 py-1 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest rounded-full">Limited</span>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Midnight Edition</h3>
<p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">Số lượng giới hạn toàn cầu.</p>
<span className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Khám phá <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080C15] border-t border-white/5" id="shop">
<div className="container mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-2">Best Sellers</h2>
<p className="text-muted text-sm">Lựa chọn hàng đầu của quý ông.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-gold transition-colors" href="#">
                    Xem tất cả <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="bg-navy/40 rounded-xl overflow-hidden border border-white/5 relative">

<div className="absolute top-3 left-3 z-10">
<span className="bg-dark/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase">Best Seller</span>
</div>

<div className="relative aspect-[4/5] bg-[#121620] overflow-hidden">
<img className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute inset-x-0 bottom-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
<button className="flex-1 bg-white text-dark py-2.5 text-xs font-bold uppercase rounded shadow-lg hover:bg-gold transition-colors" onclick="openModal()">Thêm vào giỏ</button>
<button className="w-10 bg-dark/80 text-white flex items-center justify-center rounded border border-white/10 hover:text-gold" onclick="openModal()"><iconify-icon icon="lucide:eye"></iconify-icon></button>
</div>
</div>

<div className="p-5">
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-gold transition-colors">Chronos Model X</h3>
<div className="flex justify-between items-center">
<span className="text-muted text-sm">Automatic • 42mm</span>
<span className="text-gold font-mono font-medium">8.500.000₫</span>
</div>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="bg-navy/40 rounded-xl overflow-hidden border border-white/5 relative">
<div className="absolute top-3 left-3 z-10">
<span className="bg-cyan/10 text-cyan text-[10px] font-bold px-2 py-1 rounded border border-cyan/20 uppercase">New</span>
</div>
<div className="relative aspect-[4/5] bg-[#121620] overflow-hidden">
<img className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
<button className="flex-1 bg-white text-dark py-2.5 text-xs font-bold uppercase rounded shadow-lg hover:bg-gold transition-colors" onclick="openModal()">Thêm vào giỏ</button>
<button className="w-10 bg-dark/80 text-white flex items-center justify-center rounded border border-white/10 hover:text-gold" onclick="openModal()"><iconify-icon icon="lucide:eye"></iconify-icon></button>
</div>
</div>
<div className="p-5">
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-gold transition-colors">Phantom Diver</h3>
<div className="flex justify-between items-center">
<span className="text-muted text-sm">Titanium • 30ATM</span>
<span className="text-gold font-mono font-medium">12.200.000₫</span>
</div>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group">
<div className="bg-navy/40 rounded-xl overflow-hidden border border-white/5 relative">
<div className="relative aspect-[4/5] bg-[#121620] overflow-hidden">
<img className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
<button className="flex-1 bg-white text-dark py-2.5 text-xs font-bold uppercase rounded shadow-lg hover:bg-gold transition-colors" onclick="openModal()">Thêm vào giỏ</button>
<button className="w-10 bg-dark/80 text-white flex items-center justify-center rounded border border-white/10 hover:text-gold" onclick="openModal()"><iconify-icon icon="lucide:eye"></iconify-icon></button>
</div>
</div>
<div className="p-5">
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-gold transition-colors">Legacy Gold</h3>
<div className="flex justify-between items-center">
<span className="text-muted text-sm">Leather • 40mm</span>
<span className="text-gold font-mono font-medium">6.800.000₫</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-dark relative overflow-hidden">

<svg className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5"></path>
<path d="M0 100 C 30 20 60 20 100 100" fill="none" stroke="white" strokeWidth="0.5" style={{opacity: '0.5'}}></path>
</svg>
<div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-gold text-xs font-bold uppercase tracking-widest mb-4 block">The Philosophy</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8 leading-tight">
                    Chế tác cho người yêu <br/> sự chính xác.
                </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-gold text-xl" icon="lucide:gem"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Vật liệu cao cấp</h4>
<p className="text-muted text-sm leading-relaxed">Sử dụng thép 316L, kính Sapphire và Titanium cấp độ hàng không vũ trụ.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-gold text-xl" icon="lucide:search-check"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Độ hoàn thiện tỉ mỉ</h4>
<p className="text-muted text-sm leading-relaxed">Từng chi tiết được đánh bóng thủ công theo tiêu chuẩn Thụy Sĩ.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
<iconify-icon className="text-gold text-xl" icon="lucide:history"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Di sản bền vững</h4>
<p className="text-muted text-sm leading-relaxed">Thiết kế vượt thời gian, đồng hành cùng bạn qua nhiều thế hệ.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Craftsmanship" className="rounded-lg shadow-2xl opacity-80" src="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-[#1A1F2E] p-6 rounded border border-white/5 shadow-xl max-w-xs">
<p className="font-display text-2xl text-gold">2,400+</p>
<p className="text-xs text-muted mt-1 uppercase tracking-wide">Giờ thử nghiệm chất lượng cho mỗi mẫu</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1020] relative">
<div className="container mx-auto px-6 text-center mb-16">
<span className="text-cyan text-xs font-bold uppercase tracking-widest">Masterpiece</span>
<h2 className="text-3xl md:text-5xl font-display font-semibold text-white mt-2">The Apex Diver</h2>
</div>
<div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">

<img className="h-full object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan/20 blur-[100px] rounded-full"></div>

<div className="absolute top-1/3 left-1/4 group cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full relative z-20 flex items-center justify-center shadow-[0_0_10px_white]">
<div className="w-2 h-2 bg-dark rounded-full"></div>
</div>
<div className="absolute w-4 h-4 bg-white/50 rounded-full animate-ping top-0 left-0"></div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center">
<p className="text-xs font-bold text-white">Sapphire Crystal</p>
<p className="text-[10px] text-muted">Chống trầy xước tuyệt đối</p>
</div>
</div>
<div className="absolute top-1/2 right-1/4 group cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full relative z-20 flex items-center justify-center shadow-[0_0_10px_white]">
<div className="w-2 h-2 bg-dark rounded-full"></div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center">
<p className="text-xs font-bold text-white">Crown</p>
<p className="text-[10px] text-muted">Khóa vặn chống nước</p>
</div>
</div>
<div className="absolute bottom-1/4 left-1/3 group cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full relative z-20 flex items-center justify-center shadow-[0_0_10px_white]">
<div className="w-2 h-2 bg-dark rounded-full"></div>
</div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center">
<p className="text-xs font-bold text-white">Movement</p>
<p className="text-[10px] text-muted">Japan Automatic NH35</p>
</div>
</div>
</div>

<div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="glass-panel p-4 text-center rounded border border-white/5">
<p className="text-muted text-xs uppercase mb-1">Chống nước</p>
<p className="text-white font-mono text-lg">20 ATM</p>
</div>
<div className="glass-panel p-4 text-center rounded border border-white/5">
<p className="text-muted text-xs uppercase mb-1">Vỏ máy</p>
<p className="text-white font-mono text-lg">316L Steel</p>
</div>
<div className="glass-panel p-4 text-center rounded border border-white/5">
<p className="text-muted text-xs uppercase mb-1">Size</p>
<p className="text-white font-mono text-lg">41 mm</p>
</div>
<div className="glass-panel p-4 text-center rounded border border-white/5">
<p className="text-muted text-xs uppercase mb-1">Bảo hành</p>
<p className="text-white font-mono text-lg">5 Năm</p>
</div>
</div>
</section>

<section className="py-24 bg-dark border-t border-white/5">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<div className="flex justify-center gap-1 mb-4 text-gold">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Được tin dùng bởi hơn 10.000 khách hàng</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-navy p-6 rounded-xl border border-white/5 relative">
<iconify-icon className="text-white/10 text-4xl absolute top-4 right-4" icon="lucide:quote"></iconify-icon>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Chất lượng hoàn thiện vượt xa tầm giá. Mặt kính trong vắt và độ nặng đầm tay rất thích. Đóng gói cực kỳ sang trọng."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-600"></div>
<div>
<p className="text-white text-xs font-bold">Minh Hoàng</p>
<p className="text-muted text-[10px]">Đã mua Classic Series</p>
</div>
</div>
</div>

<div className="bg-navy p-6 rounded-xl border border-white/5 relative">
<iconify-icon className="text-white/10 text-4xl absolute top-4 right-4" icon="lucide:quote"></iconify-icon>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Mình mua tặng chồng dịp kỷ niệm. Nhân viên tư vấn nhiệt tình, giao hàng nhanh trong 2h tại Hà Nội. Rất hài lòng."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-600"></div>
<div>
<p className="text-white text-xs font-bold">Thảo Vy</p>
<p className="text-muted text-[10px]">Đã mua Sport Chrono</p>
</div>
</div>
</div>

<div className="bg-navy p-6 rounded-xl border border-white/5 relative">
<iconify-icon className="text-white/10 text-4xl absolute top-4 right-4" icon="lucide:quote"></iconify-icon>
<p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"Đồng hồ đẹp hơn trong ảnh. Thiết kế tối giản đúng gu mình. Sẽ ủng hộ thêm bộ sưu tập mới."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-600"></div>
<div>
<p className="text-white text-xs font-bold">Tuấn Anh</p>
<p className="text-muted text-[10px]">Đã mua Midnight Edition</p>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-display font-bold">FORBES</span>
<span className="text-xl font-display font-bold">GQ</span>
<span className="text-xl font-display font-bold">ESQUIRE</span>
<span className="text-xl font-display font-bold">VOGUE</span>
</div>
</div>
</section>

<section className="py-20 bg-dark">
<div className="container mx-auto px-6">
<h2 className="text-2xl font-display font-semibold text-white mb-8">Tìm theo phong cách</h2>
<div className="flex flex-wrap gap-3 mb-8">
<button className="px-4 py-2 rounded-full border border-gold text-gold text-xs font-bold uppercase hover:bg-gold hover:text-dark transition-colors">Tất cả</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-muted text-xs font-bold uppercase hover:border-white hover:text-white transition-colors">Dây da</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-muted text-xs font-bold uppercase hover:border-white hover:text-white transition-colors">Dây thép</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-muted text-xs font-bold uppercase hover:border-white hover:text-white transition-colors">Công sở</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-muted text-xs font-bold uppercase hover:border-white hover:text-white transition-colors">Thể thao</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-navy aspect-square rounded flex items-center justify-center text-muted hover:bg-navy/80 cursor-pointer border border-white/5">
<span className="text-xs">Leather Style</span>
</div>
<div className="bg-navy aspect-square rounded flex items-center justify-center text-muted hover:bg-navy/80 cursor-pointer border border-white/5">
<span className="text-xs">Steel Style</span>
</div>
<div className="bg-navy aspect-square rounded flex items-center justify-center text-muted hover:bg-navy/80 cursor-pointer border border-white/5">
<span className="text-xs">Nato Strap</span>
</div>
<div className="bg-navy aspect-square rounded flex items-center justify-center text-muted hover:bg-navy/80 cursor-pointer border border-white/5">
<span className="text-xs">Mesh Band</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#080C15] border-t border-white/5">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-2xl font-display font-semibold text-white mb-8 text-center">Câu hỏi thường gặp</h2>
<div className="space-y-4">

<div className="border-b border-white/10 pb-4">
<button className="flex justify-between items-center w-full text-left text-white hover:text-gold transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-sm">Chế độ bảo hành bao lâu?</span>
<iconify-icon className="text-muted transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pt-3 text-muted text-sm leading-relaxed">Chúng tôi bảo hành máy 24 tháng chính hãng và hỗ trợ thay pin miễn phí trọn đời cho tất cả các dòng máy Quartz.</p>
</div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="flex justify-between items-center w-full text-left text-white hover:text-gold transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-sm">Chính sách đổi trả như thế nào?</span>
<iconify-icon className="text-muted transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pt-3 text-muted text-sm leading-relaxed">Đổi mới trong vòng 14 ngày nếu có lỗi từ nhà sản xuất hoặc bạn muốn đổi sang mẫu khác (sản phẩm phải còn nguyên vẹn).</p>
</div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="flex justify-between items-center w-full text-left text-white hover:text-gold transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-sm">Đồng hồ có chống nước không?</span>
<iconify-icon className="text-muted transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pt-3 text-muted text-sm leading-relaxed">Tùy từng dòng, mức chống nước từ 5ATM (đi mưa, rửa tay) đến 20ATM (bơi lặn chuyên nghiệp). Thông số có ghi chi tiết trên từng sản phẩm.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-dark to-navy"></div>
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">Sẵn sàng nâng cấp phong cách?</h2>
<p className="text-muted mb-10 max-w-lg mx-auto">Tham gia danh sách ưu tiên để nhận thông tin về các bộ sưu tập Limited và ưu đãi độc quyền.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto mb-10">
<input className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded w-full focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50" placeholder="Email của bạn" type="email"/>
<button className="bg-gold hover:bg-[#C5A354] text-dark font-bold px-6 py-3 rounded uppercase tracking-wide whitespace-nowrap transition-colors">
                    Đăng ký
                </button>
</div>
<div className="flex gap-4 justify-center">
<button className="text-sm text-white underline hover:text-gold">Mua ngay</button>
<button className="text-sm text-white underline hover:text-gold">Nhận tư vấn</button>
</div>
</div>
</section>

<footer className="bg-dark border-t border-white/10 pt-16 pb-8 text-sm">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-4">Shop</h4>
<ul className="space-y-2 text-muted">
<li><a className="hover:text-gold transition-colors" href="#">Hàng mới về</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Bán chạy nhất</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Phụ kiện</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-4">Support</h4>
<ul className="space-y-2 text-muted">
<li><a className="hover:text-gold transition-colors" href="#">Trung tâm bảo hành</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Tra cứu đơn hàng</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Chính sách đổi trả</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-2 text-muted">
<li><a className="hover:text-gold transition-colors" href="#">Câu chuyện thương hiệu</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Tuyển dụng</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Showroom</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-4">Follow Us</h4>
<div className="flex gap-4 mb-4">
<a className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-white hover:text-gold transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-muted text-xs">© 2025 CHRONOS. All rights reserved.</p>
<div className="flex gap-3 opacity-50">
<iconify-icon icon="lucide:credit-card" width="24"></iconify-icon>

<div className="w-8 h-5 bg-white/10 rounded"></div>
<div className="w-8 h-5 bg-white/10 rounded"></div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="quick-view-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-[#121620] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

<button className="absolute top-4 right-4 text-white/50 hover:text-white z-50" onclick="closeModal()">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>

<div className="w-full md:w-1/2 bg-dark relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
<span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Best Seller</span>
<h3 className="text-3xl font-display font-semibold mb-2">Chronos Model X</h3>
<p className="text-xl font-mono text-cyan mb-4">8.500.000₫</p>
<p className="text-muted text-sm leading-relaxed mb-6">Sự kết hợp hoàn hảo giữa kỹ thuật cơ khí Nhật Bản và thiết kế tối giản hiện đại. Mặt kính Sapphire nguyên khối chống trầy xước tuyệt đối.</p>
<div className="mb-6">
<p className="text-xs font-bold uppercase mb-2">Thông số</p>
<div className="grid grid-cols-2 gap-2 text-sm text-muted">
<span>Đường kính: 42mm</span>
<span>Máy: Automatic</span>
<span>Kính: Sapphire</span>
<span>Chống nước: 10ATM</span>
</div>
</div>
<button className="w-full bg-gold hover:bg-[#C5A354] text-dark font-bold py-3 rounded uppercase tracking-wide transition-colors mb-3">
                    Thêm vào giỏ
                </button>
<a className="text-center text-xs text-muted underline hover:text-white" href="#">Xem chi tiết đầy đủ</a>
</div>
</div>
</div>

<div className="fixed bottom-8 right-8 bg-dark border border-gold/30 text-white px-6 py-4 rounded shadow-2xl transform translate-y-24 transition-transform duration-300 z-[100] flex items-center gap-3" id="toast">
<iconify-icon className="text-gold" icon="lucide:check-circle"></iconify-icon>
<div>
<h5 className="text-sm font-bold">Thành công</h5>
<p className="text-xs text-muted">Đã thêm sản phẩm vào giỏ hàng.</p>
</div>
</div>



    </>
  );
}
