import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
luc: {
400: '#4ade80', // Green 400
500: '#22c55e', // Green 500
600: '#16a34a', // Green 600
900: '#14532d', // Dark Green
}
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(5px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



            function toggleAnswer(btn) {
                const answerDiv = btn.nextElementSibling;
                const icon = btn.querySelector('iconify-icon');
                
                if (answerDiv.classList.contains('hidden')) {
                    answerDiv.classList.remove('hidden');
                    btn.classList.add('bg-neutral-800', 'text-neutral-500');
                    btn.classList.remove('bg-luc-600', 'text-white');
                    btn.innerHTML = '<span>Đã mở</span> <iconify-icon icon="solar:eye-closed-linear"></iconify-icon>';
                }
            }
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-luc-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luc-500/30 bg-luc-900/20 text-luc-400 text-xs font-medium uppercase tracking-wider mb-4">
<iconify-icon icon="solar:gamepad-linear" width="16"></iconify-icon>
                Teambuilding 2026
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white text-glow leading-[1.1]">
                THÁNH SOI <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-luc-400 to-emerald-600">LỤC COFFEE</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-tight">
                PHIÊN BẢN HACK NÃO
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
<a className="group relative px-8 py-4 bg-luc-600 hover:bg-luc-500 text-white text-lg font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2" href="#rules">
                    BẮT ĐẦU NGAY
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</header>

<nav className="sticky top-4 z-50 px-4 mb-16 overflow-x-auto pb-4 md:pb-0">
<div className="glass-panel max-w-5xl mx-auto rounded-2xl p-2 flex items-center justify-start md:justify-center gap-2 whitespace-nowrap overflow-x-auto shadow-2xl">
<a className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2" href="#rules">
<iconify-icon icon="solar:book-2-linear"></iconify-icon> Luật Chơi
            </a>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-1">1. Menu</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-2">2. Nhân Sự</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-3">3. Chuyện Nghề</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-4">4. Địa Bàn</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-5">5. Bảo Bối</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-6">6. Khó Đỡ</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-7">7. Nguyên Liệu</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-8">8. Tâm Linh</a>
<a className="px-3 py-2 rounded-xl text-sm hover:text-white hover:bg-white/5 transition-colors" href="#topic-9">9. Đời Sống</a>
</div>
</nav>

<main className="max-w-6xl mx-auto px-4 space-y-32">

<section className="relative scroll-mt-32" id="rules">
<div className="absolute -inset-1 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl blur opacity-50"></div>
<div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-neutral-800">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 rounded-xl bg-luc-500/20 text-luc-400">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight">LUẬT CHƠI SINH TỒN</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-6">
<h3 className="text-xl font-medium text-white flex items-center gap-2">
<iconify-icon className="text-luc-400" icon="solar:play-circle-linear"></iconify-icon> Cách Chơi
                        </h3>
<ul className="space-y-4 text-neutral-400">
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white border border-neutral-700">1</span>
<span>Nhìn hình ảnh/icon trên thẻ bài.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white border border-neutral-700">2</span>
<span>Đọc to tên các sự vật.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white border border-neutral-700">3</span>
<span>Ghép âm, lái chữ để tìm ra từ khóa bí ẩn.</span>
</li>
<li className="flex gap-3">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-luc-900 text-luc-400 flex items-center justify-center text-xs border border-luc-500/30">!</span>
<span className="text-white">Giơ tay nhanh nhất sau hiệu lệnh để giành quyền trả lời.</span>
</li>
</ul>
</div>

<div className="rounded-2xl bg-red-950/20 border border-red-900/50 p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-xl font-medium text-red-400 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:bomb-emoji-linear"></iconify-icon> TWIST - LUẬT SINH TỒN
                        </h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-lg bg-luc-900/10 border border-luc-500/20">
<iconify-icon className="text-luc-400 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<div>
<div className="text-luc-400 font-medium">Trả lời ĐÚNG</div>
<div className="text-sm text-neutral-500">+1 Điểm ngay lập tức</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg bg-red-900/10 border border-red-500/20">
<iconify-icon className="text-red-400 text-2xl" icon="solar:close-circle-linear"></iconify-icon>
<div>
<div className="text-red-400 font-medium">Trả lời SAI</div>
<div className="text-sm text-neutral-500">"Đóng băng" - Mất quyền trả lời câu này</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="scroll-mt-32" id="topic-1">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 01</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">MENU HACK NÃO</h2>
</div>
<div className="text-neutral-500 text-sm hidden md:block">Thử thách IQ</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">1</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Hình Đôi Mắt + Người Cha + Cây Kem + Hạt Dẻ</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Món này "cười" rất tươi.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)">
<span>Xem Đáp Án</span>
<iconify-icon icon="solar:eye-linear"></iconify-icon>
</button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Matcha Kem Dẻ</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">2</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Lá Bài 3 Bích + Trọng tài đếm Knock-out</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Món cho người "yếu lòng".</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Bạc Xỉu</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">3</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Cân Đẩu Vân + Hoa Lài</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Một loại foam bồng bềnh.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Vân Lài</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">4</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Cái Chân + Châu Lục + Hủ Đường</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Topping quốc dân.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Trân Châu Đường Đen</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">5</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Cái Tắc + Xí Ngầu + Mũi</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Chua ngọt, giải nhiệt.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Tắc Xí Muội</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">6</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Ly Trà + Cuộn Vải</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Mùi thơm đặc trưng.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Trà Vải</span>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:border-luc-500/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-sm font-medium text-white border border-neutral-700">7</span>
<iconify-icon className="text-neutral-600 text-2xl group-hover:text-luc-400 transition-colors" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-grow">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Ông Tiên + Quả Đào</p>
</div>
<p className="text-sm text-neutral-500 italic mb-6">Gợi ý: Thức uống thần thoại.</p>
</div>
<div>
<button className="w-full py-3 rounded-xl bg-luc-600 hover:bg-luc-500 text-white font-medium transition-all flex items-center justify-center gap-2" onclick="toggleAnswer(this)"><span>Xem Đáp Án</span><iconify-icon icon="solar:eye-linear"></iconify-icon></button>
<div className="hidden mt-4 p-4 bg-luc-900/20 border border-luc-500/30 rounded-xl text-center animate-fade-in">
<span className="text-xl font-bold text-luc-400 uppercase tracking-wide">Trà Đào Tiên</span>
</div>
</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="topic-2">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 02</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">NHÂN SỰ BÍ ẨN</h2>
</div>
<div className="text-neutral-500 text-sm hidden md:block">Đoán tên đồng nghiệp</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Ca sĩ Mỹ Tâm + Tờ tiền</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">MỸ TIÊN</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Lá bài Bích + Ngân Lượng</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">BÍCH NGÂN</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Vua + Thành Cửa Bắc</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">HOÀNG THÀNH</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Bản đồ Việt Nam + Huy Hiệu</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">QUỐC HUY</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Lý Tiểu Long + Cái Ly</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">LÝ</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Mũi tên đi lên + Người cầm Cúp</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">TIẾN ĐẠT</div>
</article>

<article className="glass-panel p-6 rounded-2xl flex flex-col hover:border-luc-500/50 transition-colors">
<div className="min-h-[80px] flex items-center justify-center bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 mb-4 text-center">
<p className="text-lg font-medium text-white">Bình Minh + Lá Thư</p>
</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white text-sm font-medium mt-auto" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 animate-fade-in">MINH THƯ</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="topic-3">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 03</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">CHUYỆN NGHỀ F&amp;B</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Boom + Hàng hoá</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Tiếng lóng quen thuộc</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">BOOM HÀNG</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Cây Kiếm + Con Gà</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Việc làm khi giao ca</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">KIỂM KÊ</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Ổ Bánh Mì + Ly Trà (Tea)</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Làm thêm giờ</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">OT</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Full + Con Quay (Top) + Cái Bình (Ping)</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Khách order sướng hoặc mệt nhất</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">FULL TOPPING</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Chữ O + Mặt Đờ Đẫn</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Việc đầu tiên khi khách vào</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">ORDER</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Cái Ca + Đánh nhau + Hộp Sữa</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Dụng cụ Barista</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">CA ĐÁNH SỮA</div>
</article>
<article className="glass-panel p-6 rounded-2xl">
<div className="text-lg font-medium text-white mb-2 text-center">Shipper + Món ăn + Máy POS</div>
<div className="text-sm text-neutral-500 text-center mb-4 italic">Quy trình mới 1/2026</div>
<button className="w-full py-2 rounded-lg bg-luc-600 text-white font-medium" onclick="toggleAnswer(this)">Xem Đáp Án</button>
<div className="hidden mt-2 text-center font-bold text-luc-400 text-lg animate-fade-in">NHẬP POS APP</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="topic-4">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 04</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">ĐỊA BÀN HOẠT ĐỘNG</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
<article className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
<div className="flex-1">
<div className="text-lg font-medium text-white">Trái Lê + Hào Quang + Cái Đinh</div>
<div className="text-sm text-neutral-500 mt-1">Gợi ý: Chi nhánh em út.</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-4 py-2 rounded-lg bg-luc-600 text-white text-sm whitespace-nowrap" onclick="toggleAnswer(this)">Đáp Án</button>
<div className="hidden font-bold text-luc-400 text-right animate-fade-in">LÊ QUANG ĐỊNH</div>
</div>
</article>
<article className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
<div className="flex-1">
<div className="text-lg font-medium text-white">Trần Nhà + Huy Chương + Cái Lều</div>
<div className="text-sm text-neutral-500 mt-1">Gợi ý: Đường sầm uất.</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-4 py-2 rounded-lg bg-luc-600 text-white text-sm whitespace-nowrap" onclick="toggleAnswer(this)">Đáp Án</button>
<div className="hidden font-bold text-luc-400 text-right animate-fade-in">TRẦN HUY LIỆU</div>
</div>
</article>
<article className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
<div className="flex-1">
<div className="text-lg font-medium text-white">Cái Bình + Củ Hành</div>
<div className="text-sm text-neutral-500 mt-1">Gợi ý: Quận "đóng đô" nhiều nhất.</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-4 py-2 rounded-lg bg-luc-600 text-white text-sm whitespace-nowrap" onclick="toggleAnswer(this)">Đáp Án</button>
<div className="hidden font-bold text-luc-400 text-right animate-fade-in">BÌNH THẠNH</div>
</div>
</article>
<article className="glass-panel p-6 rounded-2xl flex items-center justify-between gap-4">
<div className="flex-1">
<div className="text-lg font-medium text-white">Trường Học + Sa Mạc</div>
<div className="text-sm text-neutral-500 mt-1">Gợi ý: Nơi khởi nguồn.</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-4 py-2 rounded-lg bg-luc-600 text-white text-sm whitespace-nowrap" onclick="toggleAnswer(this)">Đáp Án</button>
<div className="hidden font-bold text-luc-400 text-right animate-fade-in">TRƯỜNG SA</div>
</div>
</article>
</div>
</section>

<section className="scroll-mt-32" id="topic-5">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 05</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">BẢO BỐI PHA CHẾ</h2>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel p-4 rounded-2xl text-center">
<div className="h-16 flex items-center justify-center text-white font-medium">Tạp Chí + Con Dê</div>
<button className="mt-2 w-full text-xs py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300" onclick="toggleAnswer(this)">Hiện</button>
<div className="hidden mt-2 text-luc-400 font-bold animate-fade-in">TẠP DỀ</div>
</div>
<div className="glass-panel p-4 rounded-2xl text-center">
<div className="h-16 flex items-center justify-center text-white font-medium">Cái Ly + Tờ Giấy</div>
<button className="mt-2 w-full text-xs py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300" onclick="toggleAnswer(this)">Hiện</button>
<div className="hidden mt-2 text-luc-400 font-bold animate-fade-in">LY GIẤY</div>
</div>
<div className="glass-panel p-4 rounded-2xl text-center">
<div className="h-16 flex items-center justify-center text-white font-medium">Trái Me + Nude</div>
<button className="mt-2 w-full text-xs py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300" onclick="toggleAnswer(this)">Hiện</button>
<div className="hidden mt-2 text-luc-400 font-bold animate-fade-in">MENU</div>
</div>
<div className="glass-panel p-4 rounded-2xl text-center">
<div className="h-16 flex items-center justify-center text-white font-medium">Chim Sẻ + Lá Cờ</div>
<button className="mt-2 w-full text-xs py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300" onclick="toggleAnswer(this)">Hiện</button>
<div className="hidden mt-2 text-luc-400 font-bold animate-fade-in">SHAKER</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="topic-6">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 06</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">TÌNH HUỐNG KHÓ ĐỠ</h2>
</div>
</div>
<div className="space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<div className="text-white font-medium">Cái Chuông + Mũi khoan</div>
<div className="text-xs text-neutral-500">"Ở đây có nhận... không em?"</div>
</div>
<div className="text-right">
<button className="text-xs text-luc-500 hover:underline mb-1 block ml-auto" onclick="toggleAnswer(this)">Xem</button>
<div className="hidden text-lg font-bold text-white animate-fade-in">CHUYỂN KHOẢN</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<div className="text-white font-medium">Bát cơm + Wifi</div>
<div className="text-xs text-neutral-500">"Cho xin..."</div>
</div>
<div className="text-right">
<button className="text-xs text-luc-500 hover:underline mb-1 block ml-auto" onclick="toggleAnswer(this)">Xem</button>
<div className="hidden text-lg font-bold text-white animate-fade-in">PASS WIFI</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<div className="text-white font-medium">Tắc Kè + Cái Quây</div>
<div className="text-xs text-neutral-500">Mua mang về</div>
</div>
<div className="text-right">
<button className="text-xs text-luc-500 hover:underline mb-1 block ml-auto" onclick="toggleAnswer(this)">Xem</button>
<div className="hidden text-lg font-bold text-white animate-fade-in">TAKE AWAY</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<div className="text-white font-medium">Biển + Tay cầm Game</div>
<div className="text-xs text-neutral-500">Sự kiện thể thao</div>
</div>
<div className="text-right">
<button className="text-xs text-luc-500 hover:underline mb-1 block ml-auto" onclick="toggleAnswer(this)">Xem</button>
<div className="hidden text-lg font-bold text-white animate-fade-in">SEA GAMES</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<div className="text-white font-medium">Cái Ly + Xì hơi</div>
<div className="text-xs text-neutral-500">Tiết mục Tết</div>
</div>
<div className="text-right">
<button className="text-xs text-luc-500 hover:underline mb-1 block ml-auto" onclick="toggleAnswer(this)">Xem</button>
<div className="hidden text-lg font-bold text-white animate-fade-in">LÌ XÌ</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="topic-7">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 07</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">KHO TÀNG NGUYÊN LIỆU</h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Si mê + Cá Rô</h3>
<p className="text-sm text-neutral-500 mb-4">Gợi ý: Tạo mùi, tạo màu.</p>
<button className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700" onclick="toggleAnswer(this)">Đáp án</button>
<div className="hidden mt-3 text-2xl font-bold text-luc-400 animate-fade-in">SIRO</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Sửa xe + Hoa Tươi</h3>
<p className="text-sm text-neutral-500 mb-4">Gợi ý: Nền tảng Latte.</p>
<button className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700" onclick="toggleAnswer(this)">Đáp án</button>
<div className="hidden mt-3 text-2xl font-bold text-luc-400 animate-fade-in">SỮA TƯƠI</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Cookie + Đá + Xay</h3>
<p className="text-sm text-neutral-500 mb-4">Gợi ý: Món đá xay hot.</p>
<button className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700" onclick="toggleAnswer(this)">Đáp án</button>
<div className="hidden mt-3 text-2xl font-bold text-luc-400 animate-fade-in">COOKIE ĐÁ XAY</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Quả Đào + Miếng rửa chén</h3>
<p className="text-sm text-neutral-500 mb-4">Gợi ý: Topping giòn.</p>
<button className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700" onclick="toggleAnswer(this)">Đáp án</button>
<div className="hidden mt-3 text-2xl font-bold text-luc-400 animate-fade-in">ĐÀO MIẾNG</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="topic-8">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 08</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">TÂM LINH HỆ QUÁN</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center">
<div className="mb-4 text-white font-medium h-12 flex items-center">Mở Cửa + Kiện Hàng</div>
<button className="w-8 h-8 rounded-full bg-luc-600 flex items-center justify-center text-white" onclick="toggleAnswer(this)"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></button>
<div className="hidden mt-2 text-luc-400 font-bold text-sm animate-fade-in">MỞ HÀNG</div>
</div>
<div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center">
<div className="mb-4 text-white font-medium h-12 flex items-center">Gió + Nước</div>
<button className="w-8 h-8 rounded-full bg-luc-600 flex items-center justify-center text-white" onclick="toggleAnswer(this)"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></button>
<div className="hidden mt-2 text-luc-400 font-bold text-sm animate-fade-in">PHONG THỦY</div>
</div>
<div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center">
<div className="mb-4 text-white font-medium h-12 flex items-center">Số 3 + Cái Tai</div>
<button className="w-8 h-8 rounded-full bg-luc-600 flex items-center justify-center text-white" onclick="toggleAnswer(this)"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></button>
<div className="hidden mt-2 text-luc-400 font-bold text-sm animate-fade-in">TAM TAI</div>
</div>
<div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center">
<div className="mb-4 text-white font-medium h-12 flex items-center">Dấu Chấm + Con Công</div>
<button className="w-8 h-8 rounded-full bg-luc-600 flex items-center justify-center text-white" onclick="toggleAnswer(this)"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></button>
<div className="hidden mt-2 text-luc-400 font-bold text-sm animate-fade-in">CHẤM CÔNG</div>
</div>
<div className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center">
<div className="mb-4 text-white font-medium h-12 flex items-center">Cây Vía + Quả Tạ</div>
<button className="w-8 h-8 rounded-full bg-luc-600 flex items-center justify-center text-white" onclick="toggleAnswer(this)"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></button>
<div className="hidden mt-2 text-luc-400 font-bold text-sm animate-fade-in">VÍA NẶNG</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="topic-9">
<div className="flex items-end justify-between mb-8 border-b border-neutral-800 pb-4">
<div>
<span className="text-luc-500 font-mono text-sm tracking-widest uppercase mb-1 block">Chủ đề 09</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">ĐỜI SỐNG NHÂN VIÊN</h2>
</div>
</div>
<div className="flex flex-col gap-4">
<article className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-luc-500">
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-mono">01</span>
<div className="text-white">Con Lươn + Mũi tên về</div>
</div>
<div className="flex gap-4 items-center">
<span className="text-neutral-500 text-sm hidden sm:block">Ngày vui nhất tháng</span>
<button className="text-luc-500 hover:text-luc-400 font-medium text-sm" onclick="toggleAnswer(this)">Hiện</button>
<span className="hidden font-bold text-white animate-fade-in">LƯƠNG VỀ</span>
</div>
</article>
<article className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-neutral-700">
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-mono">02</span>
<div className="text-white">Xe Tăng + Cái Ca</div>
</div>
<div className="flex gap-4 items-center">
<span className="text-neutral-500 text-sm hidden sm:block">Kiếm thêm lúa</span>
<button className="text-luc-500 hover:text-luc-400 font-medium text-sm" onclick="toggleAnswer(this)">Hiện</button>
<span className="hidden font-bold text-white animate-fade-in">TĂNG CA</span>
</div>
</article>
<article className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-neutral-700">
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-mono">03</span>
<div className="text-white">Con Ếch + Sắc Đẹp</div>
</div>
<div className="flex gap-4 items-center">
<span className="text-neutral-500 text-sm hidden sm:block">Tình trạng quan hệ</span>
<button className="text-luc-500 hover:text-luc-400 font-medium text-sm" onclick="toggleAnswer(this)">Hiện</button>
<span className="hidden font-bold text-white animate-fade-in">Ế SẮC (Ế)</span>
</div>
</article>
<article className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-neutral-700">
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-mono">04</span>
<div className="text-white">Cái Chảo + Con Mực</div>
</div>
<div className="flex gap-4 items-center">
<span className="text-neutral-500 text-sm hidden sm:block">Bị đuổi việc</span>
<button className="text-luc-500 hover:text-luc-400 font-medium text-sm" onclick="toggleAnswer(this)">Hiện</button>
<span className="hidden font-bold text-white animate-fade-in">XÀO MỰC</span>
</div>
</article>
<article className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-neutral-700">
<div className="flex items-center gap-4">
<span className="text-neutral-500 font-mono">05</span>
<div className="text-white">Lửa Cháy + Cái Túi</div>
</div>
<div className="flex gap-4 items-center">
<span className="text-neutral-500 text-sm hidden sm:block">Cuối tháng</span>
<button className="text-luc-500 hover:text-luc-400 font-medium text-sm" onclick="toggleAnswer(this)">Hiện</button>
<span className="hidden font-bold text-white animate-fade-in">CHÁY TÚI</span>
</div>
</article>
</div>
</section>
</main>

<footer className="mt-32 border-t border-neutral-900 bg-black py-12 text-center">
<p className="text-neutral-500 text-sm">Copyright © 2026 Lục Coffee - Team Building Game.</p>
<p className="text-neutral-700 text-xs mt-2">Designed for Gen Z</p>
</footer>

    </>
  );
}
