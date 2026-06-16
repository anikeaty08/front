import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
tech: ['Michroma', 'sans-serif'],
grotesk: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'shine': 'shine 4s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
shine: {
'0%': { backgroundPosition: '200% center' },
'100%': { backgroundPosition: '-200% center' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        
        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/50 dark:border-white/5 bg-white/70 dark:bg-black/50 backdrop-blur-xl transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500 blur-sm opacity-20 group-hover:opacity-50 transition-opacity rounded-full"></div>
<i className="w-5 h-5 text-indigo-600 dark:text-white relative z-10" data-lucide="aperture"></i>
</div>
<span className="font-tech text-xs tracking-[0.2em] text-slate-900 dark:text-white font-bold">PAYT CLUB</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
<a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#about">Về chúng tôi</a>
<a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#activities">Hoạt động</a>
<a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#departments">Ban chuyên môn</a>
<a className="text-indigo-600 dark:text-white font-bold" href="#recruitment">Tuyển dụng</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors" onclick="toggleTheme()">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>
<a className="hidden sm:flex px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-bold rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/10" href="#apply">
                    Đăng ký
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-float pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-40 pointer-events-none"></div>
<div className="relative z-10 container mx-auto px-6 text-center">
<div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-50/50 dark:border-white/10 dark:bg-white/5 mb-8 backdrop-blur-sm cursor-default hover:border-indigo-500/40 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] tracking-widest uppercase text-indigo-900 dark:text-indigo-200 font-bold">Recruitment Gen 15 Open</span>
</div>
</div>
<div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<h1 className="font-tech text-5xl md:text-7xl lg:text-9xl tracking-tighter mb-6 leading-[0.9]">
<span className="block text-gradient-main drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">CODE THE</span>
<span className="block text-slate-300 dark:text-white/30 text-4xl md:text-6xl lg:text-8xl mt-2 tracking-tight">FUTURE</span>
</h1>
</div>
<p className="animate-fade-in-up font-grotesk text-sm md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light" style={{animationDelay: '0.3s'}}>
                Cộng đồng đam mê công nghệ hàng đầu tại PTIT. Nơi những dòng code thay đổi tư duy và những ý tưởng kiến tạo tương lai.
            </p>
<div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationDelay: '0.4s'}}>
<a className="group relative px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-lg overflow-hidden shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all" href="#recruitment">
<span className="relative z-10 flex items-center gap-2">Ứng tuyển ngay <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></span>
</a>
<a className="px-8 py-3.5 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors backdrop-blur-sm" href="#about">
                    Tìm hiểu thêm
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent dark:from-white dark:to-transparent"></div>
</div>
</section>

<section className="py-12 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01]">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left group cursor-default">
<div className="font-tech text-3xl text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">10+</div>
<div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Năm thành lập</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="font-tech text-3xl text-slate-900 dark:text-white mb-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">500+</div>
<div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Thành viên</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="font-tech text-3xl text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">50+</div>
<div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Dự án thực tế</div>
</div>
<div className="text-center md:text-left group cursor-default">
<div className="font-tech text-3xl text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">∞</div>
<div className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold">Cơ hội</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="about">
<div className="container mx-auto px-6">
<div className="mb-20 md:w-2/3">
<span className="text-indigo-600 dark:text-indigo-400 font-tech text-xs tracking-widest uppercase mb-4 block">Who we are</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">Không chỉ là CLB,<br/>là bệ phóng sự nghiệp.</h2>
<p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl">
                    PAYT (ProIT and Young Technology) là môi trường chuyên nghiệp mô phỏng doanh nghiệp thu nhỏ. Nơi mọi giới hạn bị phá bỏ và tài năng được mài giũa.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel glass-hover p-10 rounded-3xl flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
<div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center border border-indigo-100 dark:border-white/10 mb-8 text-indigo-600 dark:text-indigo-400 shadow-sm">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl text-slate-900 dark:text-white font-medium mb-3 tracking-tight">Môi trường chuyên nghiệp</h3>
<p className="text-sm text-slate-600 dark:text-gray-400 max-w-md leading-relaxed">Làm việc theo mô hình Agile/Scrum. Sử dụng Jira, Git, Docker trong quy trình phát triển sản phẩm thực tế.</p>
</div>
</div>

<div className="glass-panel glass-hover p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-white/5 flex items-center justify-center border border-pink-100 dark:border-white/10 mb-8 text-pink-600 dark:text-pink-400 shadow-sm">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-2xl text-slate-900 dark:text-white font-medium mb-3 tracking-tight">Kết nối Alumni</h3>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">Network rộng lớn với các anh chị đang làm việc tại Big Tech (Viettel, FPT, Google, Shopee...).</p>
</div>
</div>

<div className="glass-panel glass-hover p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
<div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-white/5 flex items-center justify-center border border-emerald-100 dark:border-white/10 mb-8 text-emerald-600 dark:text-emerald-400 shadow-sm">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-2xl text-slate-900 dark:text-white font-medium mb-3 tracking-tight">Đào tạo chuyên sâu</h3>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">Mentorship 1:1. Lộ trình từ cơ bản đến nâng cao: Algorithms, Web Fullstack, AI/ML, Mobile.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel glass-hover p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
<div className="flex-1 relative z-10">
<div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-white/5 flex items-center justify-center border border-amber-100 dark:border-white/10 mb-8 text-amber-600 dark:text-amber-400 shadow-sm">
<i className="w-6 h-6" data-lucide="trophy"></i>
</div>
<h3 className="text-2xl text-slate-900 dark:text-white font-medium mb-3 tracking-tight">Dấu ấn thành tích</h3>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                            Thành viên PAYT liên tục chinh phục các giải thưởng cao tại Olympic Tin học, ICPC, Hackathon và NCKH cấp Bộ.
                        </p>
</div>

<div className="flex gap-4 opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700">
<div className="w-16 h-32 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
<div className="w-16 h-24 bg-gradient-to-tr from-blue-400 to-emerald-400 rounded-full blur-2xl opacity-20 dark:opacity-40 mt-12"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-100/50 dark:bg-[#080808] border-y border-slate-200 dark:border-white/5 relative" id="departments">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<span className="text-indigo-600 dark:text-indigo-400 font-tech text-xs tracking-widest uppercase mb-4 block">Organization</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight">Cơ cấu tổ chức</h2>
</div>
<a className="group text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-white/10 transition-colors" href="#">
                    Chi tiết JD <i className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">

<div className="bg-white dark:bg-[#0a0a0a] p-8 hover:bg-slate-50 dark:hover:bg-[#111] transition-colors group h-full">
<div className="mb-8 w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="code-2"></i>
</div>
<h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-3">Ban Chuyên Môn</h3>
<p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed mb-6">Trái tim công nghệ của CLB. Nghiên cứu thuật toán, phát triển phần mềm, training kỹ thuật.</p>
<ul className="text-xs text-slate-400 dark:text-gray-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Software Development</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Artificial Intelligence</li>
</ul>
</div>

<div className="bg-white dark:bg-[#0a0a0a] p-8 hover:bg-slate-50 dark:hover:bg-[#111] transition-colors group h-full">
<div className="mb-8 w-14 h-14 rounded-full bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="aperture"></i>
</div>
<h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-3">Ban Truyền Thông</h3>
<p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed mb-6">Xây dựng thương hiệu và hình ảnh CLB qua nội dung sáng tạo và thiết kế viral.</p>
<ul className="text-xs text-slate-400 dark:text-gray-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div>Content Marketing</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-pink-500 rounded-full"></div>Graphic Design</li>
</ul>
</div>

<div className="bg-white dark:bg-[#0a0a0a] p-8 hover:bg-slate-50 dark:hover:bg-[#111] transition-colors group h-full">
<div className="mb-8 w-14 h-14 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="users-2"></i>
</div>
<h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-3">Ban Nhân Sự</h3>
<p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed mb-6">Quản trị nguồn nhân lực, tuyển dụng và gắn kết các thế hệ thành viên.</p>
<ul className="text-xs text-slate-400 dark:text-gray-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div>Internal Comms</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div>Talent Acquisition</li>
</ul>
</div>

<div className="bg-white dark:bg-[#0a0a0a] p-8 hover:bg-slate-50 dark:hover:bg-[#111] transition-colors group h-full">
<div className="mb-8 w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="calendar-check"></i>
</div>
<h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-3">Ban Sự Kiện</h3>
<p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed mb-6">Phù thủy sân khấu. Tổ chức các sự kiện công nghệ và văn hóa quy mô lớn.</p>
<ul className="text-xs text-slate-400 dark:text-gray-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div>Event Planning</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"></div>Logistics</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="recruitment">

<div className="absolute top-1/2 left-0 w-1/2 h-full bg-indigo-500/5 dark:bg-indigo-900/10 blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-indigo-600 dark:text-indigo-400 font-tech text-xs tracking-widest uppercase mb-4 block">Roadmap</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight">Lộ trình tuyển thành viên</h2>
</div>
<div className="max-w-4xl mx-auto space-y-8">

<div className="flex gap-6 md:gap-10 group">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-indigo-500 outline outline-4 outline-slate-100 dark:outline-black z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="flex-1 w-px bg-slate-200 dark:bg-white/10 my-2 group-hover:bg-indigo-500/50 transition-colors"></div>
</div>
<div className="pb-10 w-full">
<div className="glass-panel glass-hover p-8 rounded-2xl border-l-4 border-l-indigo-500">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
<h3 className="text-slate-900 dark:text-white font-bold text-xl">Vòng 1: Đăng ký Online</h3>
<span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-md border border-indigo-100 dark:border-indigo-500/20">01/09 - 15/09</span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">Hãy dành thời gian trau chuốt CV và đơn đăng ký. Đây là cơ hội đầu tiên để bạn gây ấn tượng với chúng mình.</p>
</div>
</div>
</div>

<div className="flex gap-6 md:gap-10 group">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-white/20 outline outline-4 outline-slate-100 dark:outline-black z-10 group-hover:bg-white transition-colors"></div>
<div className="flex-1 w-px bg-slate-200 dark:bg-white/10 my-2 group-hover:bg-indigo-500/50 transition-colors"></div>
</div>
<div className="pb-10 w-full">
<div className="glass-panel glass-hover p-8 rounded-2xl">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
<h3 className="text-slate-900 dark:text-white font-bold text-xl">Vòng 2: Interview &amp; Test</h3>
<span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-md">20/09 - 25/09</span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
<strong className="text-slate-900 dark:text-slate-200">Ban Chuyên Môn:</strong> Bài test Tư duy Logic hoặc Coding.<br/>
<strong className="text-slate-900 dark:text-slate-200">Các ban khác:</strong> Phỏng vấn xử lý tình huống và đánh giá độ phù hợp văn hóa.
                            </p>
</div>
</div>
</div>

<div className="flex gap-6 md:gap-10 group">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-white/20 outline outline-4 outline-slate-100 dark:outline-black z-10 group-hover:bg-white transition-colors"></div>
<div className="flex-1 w-px bg-slate-200 dark:bg-white/10 my-2 group-hover:bg-indigo-500/50 transition-colors"></div>
</div>
<div className="pb-10 w-full">
<div className="glass-panel glass-hover p-8 rounded-2xl">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
<h3 className="text-slate-900 dark:text-white font-bold text-xl">Vòng 3: The Challenge</h3>
<span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-md">01/10 - 15/10</span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">Giai đoạn thử thách 2 tuần. Bạn sẽ được tham gia Training và làm việc nhóm (Teamwork) để giải quyết một bài toán cụ thể.</p>
</div>
</div>
</div>

<div className="flex gap-6 md:gap-10 group">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-white/20 outline outline-4 outline-slate-100 dark:outline-black z-10 group-hover:bg-white transition-colors"></div>
</div>
<div className="w-full">
<div className="glass-panel glass-hover p-8 rounded-2xl">
<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
<h3 className="text-slate-900 dark:text-white font-bold text-xl">Welcome to PAYT</h3>
<span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-500 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-md">20/10</span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">Trở thành thành viên chính thức và nhận đồng phục CLB.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-12 text-center tracking-tight">Câu hỏi thường gặp</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:ring-2 open:ring-indigo-500/20 dark:open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 dark:text-white font-semibold select-none">
                        Mình chưa biết code thì có vào được Ban Chuyên Môn không?
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
<span className="font-bold text-indigo-600 dark:text-indigo-400">Hoàn toàn được!</span> PAYT quan trọng tư duy (logic mindset) và thái độ cầu tiến. CLB có lộ trình training bài bản từ C++ cơ bản cho Fresher.
                    </div>
</details>

<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:ring-2 open:ring-indigo-500/20 dark:open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 dark:text-white font-semibold select-none">
                        Có thể đăng ký nhiều ban cùng lúc không?
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                        Bạn có thể đăng ký tối đa <span className="font-bold">2 nguyện vọng</span>. Tuy nhiên, chúng mình khuyên bạn nên tập trung vào thế mạnh lớn nhất để có sự chuẩn bị tốt nhất.
                    </div>
</details>

<details className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:ring-2 open:ring-indigo-500/20 dark:open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 dark:text-white font-semibold select-none">
                        Lệ phí thành viên như thế nào?
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                        PAYT hoạt động phi lợi nhuận. Quỹ CLB đóng theo kỳ học dùng để tổ chức sự kiện nội bộ, in ấn và duy trì server, mức phí rất phù hợp với sinh viên.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative text-center overflow-hidden" id="apply">
<div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 via-white to-white dark:from-indigo-950/30 dark:via-black dark:to-black"></div>
<div className="relative z-10 container mx-auto px-6">
<h2 className="font-tech text-4xl md:text-7xl text-slate-900 dark:text-white mb-8 tracking-tight">READY TO JOIN US?</h2>
<p className="text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto text-lg font-light">
                Đừng ngần ngại. Hãy điền đơn ngay hôm nay để trở thành một mảnh ghép của đại gia đình PAYT.
            </p>
<button className="bg-slate-900 dark:bg-white text-white dark:text-black px-12 py-5 rounded-xl font-bold text-sm tracking-widest uppercase hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-white/20 transition-all duration-300">
                Điền đơn đăng ký
            </button>
</div>
</section>

<footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 pt-20 pb-10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-indigo-600 dark:text-white" data-lucide="aperture"></i>
<span className="font-tech text-slate-900 dark:text-white text-lg tracking-widest font-bold">PAYT CLUB</span>
</div>
<p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
                        Câu lạc bộ ProIT &amp; Young Technology<br/>
                        Học viện Công nghệ Bưu chính Viễn thông.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-white/10 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-pink-600 hover:text-white dark:hover:bg-white/10 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-red-500 hover:text-white dark:hover:bg-white/10 dark:hover:text-white transition-all border border-slate-200 dark:border-white/5" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
<div>
<h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-wider">Liên kết</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-gray-500">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Về chúng tôi</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Các ban chuyên môn</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Dự án &amp; Sản phẩm</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Tuyển thành viên</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-wider">Liên hệ</h4>
<ul className="space-y-4 text-sm text-slate-500 dark:text-gray-500">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-indigo-500" data-lucide="map-pin"></i>
<span>Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0 text-indigo-500" data-lucide="mail"></i>
<span>paytclub.ptit@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-gray-600">
<p>© 2024 PAYT Club. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600 dark:hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 dark:hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
