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



        // Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Navbar Blur Effect on Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.replace('bg-[#09090b]/80', 'bg-[#09090b]/95');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.replace('bg-[#09090b]/95', 'bg-[#09090b]/80');
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
      

<header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-lime-400 rounded-lg transform group-hover:rotate-12 transition-transform duration-500">
<span className="iconify text-black" data-icon="lucide:dumbbell" data-strokeWidth="2.5" data-width="20"></span>
</div>
<span className="font-heading font-semibold text-xl tracking-tighter text-white">SS<span className="text-lime-400">GYM</span></span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#about">VỀ CHÚNG TÔI</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#gallery">KHÔNG GIAN</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#classes">LỚP HỌC</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#pricing">BẢNG GIÁ</a>
</nav>
<a className="relative group px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full overflow-hidden" href="#join">
<span className="relative z-10 group-hover:text-black transition-colors">Đăng Ký Ngay</span>
<div className="absolute inset-0 bg-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
</a>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 opacity-30"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/20 bg-lime-400/5 text-lime-400 text-[10px] font-bold uppercase tracking-widest mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>
                        Khẳng định bản lĩnh
                    </div>
<h1 className="text-5xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
                        BỨT PHÁ <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400">GIỚI HẠN</span> <br/>
                        BẢN THÂN
                    </h1>
<p className="text-base text-zinc-400 mb-10 max-w-md font-light leading-relaxed">
                        Hệ thống phòng tập chuẩn 5 sao với không gian kiến trúc vị lai, thiết bị Technogym Artis Line cao cấp nhất và đội ngũ chuyên gia hàng đầu.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 bg-lime-400 text-black font-semibold uppercase tracking-wider text-xs rounded-lg hover:bg-lime-300 hover:shadow-[0_0_40px_-10px_rgba(190,242,100,0.5)] transition-all duration-300 flex items-center gap-2" href="#join">
                            Tư Vấn Miễn Phí
                            <span className="iconify" data-icon="lucide:arrow-up-right" data-width="18"></span>
</a>
<a className="px-8 py-4 border border-zinc-700 bg-zinc-900/50 text-white font-semibold uppercase tracking-wider text-xs rounded-lg hover:bg-white hover:text-black transition-all flex items-center gap-2 backdrop-blur-sm" href="#video">
<span className="iconify" data-icon="lucide:play" data-width="18"></span>
                            Virtual Tour
                        </a>
</div>
</div>

<div className="relative hidden lg:block h-[600px] reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-lime-400 to-blue-500 opacity-20 rounded-2xl transform rotate-6 scale-95 blur-xl"></div>
<div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
<img alt="Gym Hero" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<div className="text-3xl font-bold text-white tracking-tight">SSGYM Center</div>
<div className="text-xs text-lime-400 uppercase tracking-widest mt-1">Premium Fitness &amp; Yoga</div>
</div>
<div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
<span className="iconify" data-icon="lucide:move-down" data-width="24"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#09090b] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="flex gap-12">
<div>
<div className="text-3xl font-bold text-white tracking-tight">5k+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">Hội viên</div>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">50+</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">HLV Quốc tế</div>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight">Top 1</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">Dịch vụ 2023</div>
</div>
</div>

<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-zinc-900/50">
<span className="iconify text-yellow-500" data-icon="lucide:trophy" data-width="20"></span>
<div className="text-left">
<div className="text-[10px] text-zinc-400 uppercase">Best Luxury Gym</div>
<div className="text-xs font-bold text-white">Asia Awards 2023</div>
</div>
</div>
<div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-zinc-900/50">
<span className="iconify text-blue-400" data-icon="lucide:award" data-width="20"></span>
<div className="text-left">
<div className="text-[10px] text-zinc-400 uppercase">Certified By</div>
<div className="text-xs font-bold text-white">ISO 9001:2015</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 reveal-on-scroll">
<span className="text-lime-400 font-bold tracking-wider uppercase text-[10px] mb-2 block">Về SSGYM</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight">
                            TIÊU CHUẨN <br/>
                            QUỐC TẾ
                        </h2>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
                            Chúng tôi không chỉ cung cấp máy móc, chúng tôi mang đến giải pháp toàn diện cho sức khỏe và vóc dáng của bạn thông qua công nghệ và khoa học.
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-lime-400/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-lime-400/10 text-lime-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-semibold text-sm">Công Nghệ Biometrics</h4>
<p className="text-zinc-500 text-xs">Phân tích chỉ số cơ thể bằng AI</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-lime-400/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:droplets" data-width="20"></span>
</div>
<div>
<h4 className="text-white font-semibold text-sm">Hệ Thống Lọc Khí</h4>
<p className="text-zinc-500 text-xs">Không khí tươi Ozone &amp; Ion âm</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">

<div className="reveal-on-scroll group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-lime-400/30 hover-glow cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-[40px] group-hover:bg-lime-400/10 transition-colors"></div>
<span className="iconify text-zinc-600 group-hover:text-lime-400 transition-colors mb-4" data-icon="lucide:dumbbell" data-width="32"></span>
<h3 className="text-lg font-bold text-white mb-2">Technogym Artis</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Dòng máy tập cao cấp nhất thế giới, tích hợp màn hình giải trí và theo dõi chỉ số tập luyện realtime.</p>
</div>

<div className="reveal-on-scroll group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-lime-400/30 hover-glow cursor-default relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<span className="iconify text-zinc-600 group-hover:text-lime-400 transition-colors mb-4" data-icon="lucide:users" data-width="32"></span>
<h3 className="text-lg font-bold text-white mb-2">LesMills Classes</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Độc quyền các chương trình tập luyện bản quyền quốc tế: BodyPump, BodyCombat, RPM...</p>
</div>

<div className="reveal-on-scroll group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-lime-400/30 hover-glow cursor-default relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<span className="iconify text-zinc-600 group-hover:text-lime-400 transition-colors mb-4" data-icon="lucide:activity" data-width="32"></span>
<h3 className="text-lg font-bold text-white mb-2">Private PT Zone</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Khu vực tập luyện riêng tư 1:1 với HLV cá nhân, đầy đủ dụng cụ chức năng chuyên biệt.</p>
</div>

<div className="reveal-on-scroll group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-lime-400/30 hover-glow cursor-default relative overflow-hidden" style={{transitionDelay: '300ms'}}>
<span className="iconify text-zinc-600 group-hover:text-lime-400 transition-colors mb-4" data-icon="lucide:coffee" data-width="32"></span>
<h3 className="text-lg font-bold text-white mb-2">Lounge &amp; Relax</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Quầy bar dinh dưỡng, phòng xông hơi ướt/khô (Sauna/Steam) chuẩn resort 5 sao.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div>
<span className="text-lime-400 font-bold tracking-wider uppercase text-[10px]">Gallery</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tighter">KHÔNG GIAN TẬP LUYỆN</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group reveal-on-scroll">
<div className="img-zoom-container h-full w-full">
<img alt="Gym Main Floor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<h3 className="text-xl font-bold text-white">Khu Vực Máy Tạ</h3>
<p className="text-zinc-300 text-xs">Đầy đủ các dòng máy chuyên sâu cho từng nhóm cơ.</p>
</div>
</div>

<div className="md:col-span-2 relative rounded-2xl overflow-hidden group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="img-zoom-container h-full w-full">
<img alt="Cardio Zone" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] font-bold text-white uppercase tracking-wide">Cardio View Thành Phố</span>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="img-zoom-container h-full w-full">
<img alt="Yoga Studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white font-bold tracking-tight">Yoga Studio</span>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="img-zoom-container h-full w-full">
<img alt="Locker Room" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-white font-bold tracking-tight">Luxury Locker</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#09090b] relative overflow-hidden" id="classes">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-lime-400 font-bold tracking-wider uppercase text-[10px]">Lịch tập đa dạng</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tighter">CÁC BỘ MÔN HOT</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] reveal-on-scroll">
<img alt="CrossFit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-black transition-all text-white">
<span className="iconify" data-icon="lucide:flame" data-width="24"></span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">CrossFit</h3>
<p className="text-zinc-400 text-xs line-clamp-2 mb-4">Rèn luyện sức mạnh và sức bền với cường độ cao ngắt quãng.</p>
<a className="inline-flex items-center text-lime-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors" href="#">
                                Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<img alt="Yoga" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-black transition-all text-white">
<span className="iconify" data-icon="lucide:flower" data-width="24"></span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Yoga Flow</h3>
<p className="text-zinc-400 text-xs line-clamp-2 mb-4">Cân bằng tâm trí và cơ thể, tăng độ dẻo dai linh hoạt.</p>
<a className="inline-flex items-center text-lime-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors" href="#">
                                Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<img alt="Boxing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-lime-400 group-hover:border-lime-400 group-hover:text-black transition-all text-white">
<span className="iconify" data-icon="lucide:swords" data-width="24"></span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Kick Boxing</h3>
<p className="text-zinc-400 text-xs line-clamp-2 mb-4">Xả stress cực đỉnh, đốt mỡ thừa và rèn luyện phản xạ.</p>
<a className="inline-flex items-center text-lime-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors" href="#">
                                Xem chi tiết <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="trainers">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<span className="text-lime-400 font-bold tracking-wider uppercase text-[10px]">Chuyên gia của bạn</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tighter">MENTOR HÀNG ĐẦU</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group reveal-on-scroll">
<div className="h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 relative">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<h3 className="text-lg font-bold text-white">Alex Nguyễn</h3>
<p className="text-lime-400 text-[10px] font-bold uppercase tracking-wider">Head Coach</p>
</div>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 relative">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<h3 className="text-lg font-bold text-white">Sarah Trần</h3>
<p className="text-lime-400 text-[10px] font-bold uppercase tracking-wider">Master Yoga</p>
</div>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 relative">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<h3 className="text-lg font-bold text-white">Mike Đặng</h3>
<p className="text-lime-400 text-[10px] font-bold uppercase tracking-wider">Master Kickfit</p>
</div>
</div>
</div>

<div className="group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="h-[400px] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 relative">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
<h3 className="text-lg font-bold text-white">Linh Phạm</h3>
<p className="text-lime-400 text-[10px] font-bold uppercase tracking-wider">Zumba Coach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-lime-400 font-bold tracking-wider uppercase text-[10px]">Membership</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tighter">GÓI TẬP LINH HOẠT</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-white/10 bg-[#121215] hover:bg-[#151518] transition-colors reveal-on-scroll">
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">Cơ Bản</h3>
<div className="text-3xl font-bold text-white tracking-tight">699K<span className="text-sm font-normal text-zinc-500">/tháng</span></div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="iconify text-white" data-icon="lucide:check"></span> Truy cập Gym Area</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="iconify text-white" data-icon="lucide:check"></span> Tủ đồ miễn phí</li>
<li className="flex items-center gap-3 text-xs text-zinc-500 line-through"><span className="iconify text-zinc-700" data-icon="lucide:x"></span> Tham gia lớp Group X</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-xs uppercase hover:bg-white hover:text-black transition-all">Đăng Ký</button>
</div>

<div className="p-8 rounded-3xl border border-lime-400 bg-[#121215] relative shadow-[0_0_40px_rgba(190,242,100,0.15)] reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Best Value</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-lime-400 mb-2">Premium</h3>
<div className="text-4xl font-bold text-white tracking-tight">1.299K<span className="text-sm font-normal text-zinc-500">/tháng</span></div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-white"><span className="iconify text-lime-400" data-icon="lucide:check"></span> Tất cả đặc quyền cơ bản</li>
<li className="flex items-center gap-3 text-xs text-white"><span className="iconify text-lime-400" data-icon="lucide:check"></span> Full Class Access (Yoga, Boxing...)</li>
<li className="flex items-center gap-3 text-xs text-white"><span className="iconify text-lime-400" data-icon="lucide:check"></span> Xông hơi Sauna &amp; Steam</li>
<li className="flex items-center gap-3 text-xs text-white"><span className="iconify text-lime-400" data-icon="lucide:check"></span> Khăn tập &amp; Nước uống</li>
</ul>
<button className="w-full py-3 rounded-xl bg-lime-400 text-black font-bold text-xs uppercase hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20">Đăng Ký Ngay</button>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-[#121215] hover:bg-[#151518] transition-colors reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">VIP Passport</h3>
<div className="text-3xl font-bold text-white tracking-tight">2.499K<span className="text-sm font-normal text-zinc-500">/tháng</span></div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="iconify text-white" data-icon="lucide:check"></span> Tập luyện toàn hệ thống</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="iconify text-white" data-icon="lucide:check"></span> Tủ đồ cá nhân VIP</li>
<li className="flex items-center gap-3 text-xs text-zinc-300"><span className="iconify text-white" data-icon="lucide:check"></span> 2 buổi PT 1:1 mỗi tháng</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-xs uppercase hover:bg-white hover:text-black transition-all">Liên Hệ</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="join">
<div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden bg-[#121215] border border-white/10 reveal-on-scroll">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-lime-500/20 to-transparent blur-[80px]"></div>
<div className="relative z-10 px-8 py-20 md:px-20 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">SẴN SÀNG THAY ĐỔI?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">Đăng ký ngay hôm nay để nhận ưu đãi <span className="text-lime-400 font-bold">GIẢM 30%</span> và 1 buổi tập thử miễn phí cùng HLV.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-5 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors text-sm" placeholder="Số điện thoại của bạn..." type="text"/>
<button className="px-8 py-3 rounded-lg bg-lime-400 text-black font-bold text-sm uppercase tracking-wide hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 whitespace-nowrap" type="button">
                            Gửi Ngay
                        </button>
</form>
<p className="text-[10px] text-zinc-600 mt-4">*Chúng tôi cam kết bảo mật thông tin của bạn.</p>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-lime-400" data-icon="lucide:dumbbell" data-width="24"></span>
<span className="font-heading font-bold text-lg tracking-tighter text-white">SS<span className="text-lime-400">GYM</span></span>
</a>
<p className="text-zinc-500 text-xs leading-relaxed mb-6">Kiến tạo sức mạnh và vóc dáng hoàn hảo với tiêu chuẩn quốc tế.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-lime-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-lime-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-lime-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="18"></span></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Khám Phá</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Về SSGYM</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Câu chuyện thương hiệu</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Tuyển dụng</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Dịch Vụ</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Huấn luyện cá nhân</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Lớp học nhóm</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Gói hội viên</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Liên Hệ</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li>123 Nguyễn Văn Linh, Q.7, TP.HCM</li>
<li>Hotline: 1900 6666</li>
<li>Email: info@ssgym.vn</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-zinc-600">© 2024 SSGYM. All rights reserved.</div>
<div className="flex gap-6 text-[10px] text-zinc-600">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
