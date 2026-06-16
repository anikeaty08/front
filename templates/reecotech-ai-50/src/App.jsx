import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // UI Logic
        function switchTab(tab) {
            const views = {
                chat: document.getElementById('view-chat'),
                marketplace: document.getElementById('view-marketplace'),
                about: document.getElementById('view-about')
            };
            
            const navs = {
                chat: document.getElementById('nav-chat'),
                marketplace: document.getElementById('nav-market'),
                about: document.getElementById('nav-about')
            };

            // Active & Inactive Styles
            const activeClass = ['bg-zinc-100', 'text-zinc-900'];
            const inactiveClass = ['bg-transparent', 'text-zinc-500', 'hover:bg-zinc-50', 'hover:text-zinc-900'];

            // Hide all views
            Object.values(views).forEach(el => el.classList.add('hidden'));

            // Reset all nav buttons
            Object.values(navs).forEach(btn => {
                btn.classList.remove(...activeClass);
                btn.classList.add(...inactiveClass);
                const icon = btn.querySelector('i');
                if(icon) {
                    icon.classList.remove('text-zinc-900');
                    icon.classList.add('text-zinc-400');
                }
            });

            // Activate selected
            views[tab].classList.remove('hidden');
            views[tab].classList.add('fade-in');
            
            const activeBtn = navs[tab];
            if(activeBtn) {
                activeBtn.classList.remove(...inactiveClass);
                activeBtn.classList.add(...activeClass);
                const icon = activeBtn.querySelector('i');
                if(icon) {
                    icon.classList.remove('text-zinc-400');
                    icon.classList.add('text-zinc-900');
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

<div className="flex flex-col items-center justify-center cursor-pointer select-none group" onclick="switchTab('about')">
<div className="flex items-center">
<span className="text-3xl font-bold text-[#007cc2] tracking-normal leading-none">REECO</span>
<div className="ml-1 relative h-6 w-6">
<svg className="w-full h-full text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path className="text-[#007cc2] stroke-2" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle className="text-[#007cc2] fill-current opacity-20" cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
<span className="text-[0.6rem] font-semibold text-[#e1231e] tracking-wider uppercase leading-none mt-0.5 group-hover:opacity-80 transition-opacity">reecotech.com.vn</span>
</div>

<nav className="flex items-center gap-1 sm:gap-4">
<button className="group flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-all text-zinc-900 bg-zinc-100" id="nav-chat" onclick="switchTab('chat')">
<i className="w-4 h-4 text-zinc-900 transition-colors" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Chat AI</span>
</button>
<button className="group flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all" id="nav-market" onclick="switchTab('marketplace')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="store" strokeWidth="1.5"></i>
<span>Marketplace</span>
</button>
<button className="group flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all" id="nav-about" onclick="switchTab('about')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" data-lucide="building-2" strokeWidth="1.5"></i>
<span>About Company</span>
</button>

<div className="ml-2 w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600 cursor-pointer hover:border-zinc-300 transition-colors">
                    RC
                </div>
</nav>
</div>
</header>

<main className="pt-28 pb-12 px-4 min-h-screen flex flex-col items-center">

<section className="w-full max-w-5xl fade-in flex flex-col justify-center min-h-[60vh]" id="view-chat">
<div className="text-center mb-10 space-y-4 max-w-2xl mx-auto">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900">Giới thiệu Chat AI của Reecotech</h1>
<p className="text-zinc-500 text-lg sm:text-xl font-light leading-relaxed">
                    Hệ thống Chat AI được tích hợp nhằm hỗ trợ người dùng tra cứu thông tin về Reecotech, sản phẩm, dịch vụ, giải pháp quan trắc môi trường – khí tượng – hải văn, và các nội dung liên quan đến hoạt động kỹ thuật trên biển.
                </p>
</div>

<div className="relative group w-full max-w-2xl mx-auto">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<i className="w-5 h-5 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full py-5 pl-14 pr-32 bg-white border border-zinc-200 rounded-2xl shadow-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-lg" placeholder="Hỏi về sản phẩm, dịch vụ hoặc giải pháp..." type="text"/>
<div className="absolute inset-y-0 right-3 flex items-center gap-2">
<button className="p-2.5 rounded-xl hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-5 h-5" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
<button className="p-2.5 rounded-xl bg-[#007cc2] hover:bg-[#006bb3] text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto w-full">

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">An ninh biển và nội địa</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600 shrink-0">
<i className="w-5 h-5" data-lucide="umbrella" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Bảo vệ tài sản trước thiên tai</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-sky-50 rounded-lg text-sky-600 shrink-0">
<i className="w-5 h-5" data-lucide="cloud-lightning" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Hệ thống khí tượng thủy văn và cảnh báo sớm</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 shrink-0">
<i className="w-5 h-5" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Ngành hàng hải và công nghiệp ngoài khơi</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-teal-50 rounded-lg text-teal-600 shrink-0">
<i className="w-5 h-5" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Kinh tế biển và phát triển đại dương bền vững</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600 shrink-0">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Đô thị thông minh</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600 shrink-0">
<i className="w-5 h-5" data-lucide="flask-conical" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Ngành sản xuất và R&amp;D</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
<i className="w-5 h-5" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Nông nghiệp thông minh</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-cyan-50 rounded-lg text-cyan-600 shrink-0">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Quan trắc môi trường</span>
</div>

<div className="p-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-blue-200 cursor-pointer transition-all group shadow-sm hover:shadow-md flex items-center gap-4">
<div className="p-2 bg-violet-50 rounded-lg text-violet-600 shrink-0">
<i className="w-5 h-5" data-lucide="database" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Dữ liệu và phần mềm</span>
</div>
</div>
</section>

<section className="w-full max-w-7xl hidden fade-in" id="view-marketplace">
<div className="mb-10 border-b border-zinc-100 pb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-3xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Giới thiệu Marketplace của Reecotech</h2>
<p className="text-zinc-500 text-lg mt-3 font-light">
                            Marketplace trưng bày các thiết bị, giải pháp và dịch vụ kỹ thuật do Reecotech cung cấp trong lĩnh vực quan trắc môi trường, khí tượng thủy hải văn, giám sát biển, phòng chống thiên tai và hệ thống đo đạc chuyên dụng.
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="pl-10 pr-4 py-2 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-200 w-64 text-sm shadow-sm" placeholder="Tìm kiếm thiết bị..." type="text"/>
</div>
<button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 text-zinc-600 bg-white shadow-sm">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
<i className="w-6 h-6" data-lucide="thermometer" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Thiết bị</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Thiết bị đo đạc môi trường</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Các giải pháp đo đạc chính xác các chỉ tiêu môi trường nước, không khí và đất.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Sẵn sàng</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="cloud-rain" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Hệ thống</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Quan trắc khí tượng – hải văn</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Hệ thống quan trắc tự động các thông số khí tượng và hải văn phục vụ dự báo và nghiên cứu.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Tự động hóa</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<i className="w-6 h-6" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Thiết bị</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Lấy mẫu môi trường trên tàu</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Thiết bị chuyên dụng lấy mẫu nước, trầm tích phục vụ phân tích phòng thí nghiệm.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Chuyên dụng</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
<i className="w-6 h-6" data-lucide="monitor-play" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Giám sát</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Hệ thống giám sát trực tuyến</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Giải pháp giám sát online hoạt động độc lập, đảm bảo số liệu liên tục.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Real-time</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Phần mềm</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Quản lý dữ liệu &amp; giám sát</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Phần mềm quản lý, xử lý và phân phối số liệu thời gian thực cho các dự án.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Tối ưu</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Dịch vụ</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Cài đặt – Bảo trì – Vận hành</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Dịch vụ kỹ thuật chuyên nghiệp đảm bảo hệ thống hoạt động ổn định và bền bỉ.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Hỗ trợ 24/7</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-zinc-200/40 hover:border-blue-200 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 border border-zinc-200">Giải pháp</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-[#007cc2] transition-colors">Giải pháp tích hợp theo yêu cầu</h3>
<p className="text-base text-zinc-500 mt-2 font-light line-clamp-3">Thiết kế và tích hợp hệ thống đo đạc tùy chỉnh theo đặc thù từng dự án.</p>
<div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Linh hoạt</span>
<i className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 mb-4 shadow-sm group-hover:text-[#007cc2]">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900">Liên hệ tư vấn</h3>
<p className="text-sm text-zinc-500 mt-1">Bạn cần giải pháp riêng? Hãy liên hệ với chúng tôi.</p>
</div>
</div>
</section>

<section className="w-full max-w-5xl hidden fade-in" id="view-about">

<div className="mb-12 text-center space-y-4">
<span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#007cc2] text-xs font-semibold uppercase tracking-wider border border-blue-100">Về chúng tôi</span>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900">Giới thiệu Reecotech</h1>
<p className="max-w-3xl mx-auto text-xl text-zinc-500 font-light">
                    Công ty TNHH Khoa học và Kỹ thuật REECO
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-8 space-y-8 text-lg font-light leading-relaxed text-zinc-600 text-justify">
<p>
                        Công ty TNHH Khoa học và Kỹ thuật REECO (viết tắt là Reecotech) được thành lập năm 2012, là một trong những công ty hàng đầu Việt Nam trong lĩnh vực cung cấp, thiết kế, tích hợp và chuyển giao các giải pháp giám sát môi trường, khí tượng thủy hải văn, phòng chống thiên tai và hỗ trợ vận hành an toàn các hoạt động trên biển.
                    </p>
<p>
                        Reecotech có bề dày kinh nghiệm trong việc cung cấp các hệ thống quan trắc tự động khí tượng hải văn và môi trường, cũng như hệ thống quản lý, xử lý và phân phối số liệu thời gian thực để hỗ trợ các dự án phát triển năng lượng, cảng biển và nuôi trồng hải sản tại Việt Nam. Với sự hiểu biết vững chắc về pháp luật, tiêu chuẩn quốc tế và kiến thức sâu rộng đối với các ngành công nghiệp trên biển, Reecotech cung cấp các giải pháp toàn diện và chuyên môn để hỗ trợ khách hàng hiệu quả trong suốt quá trình triển khai và vận hành dự án.
                    </p>
<p>
                        Reecotech được công nhận là đối tác đáng tin cậy cả trong nước và quốc tế nhờ cung cấp các giải pháp quan trắc và đo đạc chất lượng cao, đúng tiến độ. Công ty đã xây dựng được những mối quan hệ phát triển lâu dài với khách hàng. Đội ngũ kỹ thuật viên giàu kinh nghiệm trong nước và sự hợp tác với các chuyên gia quốc tế đảm bảo cung cấp dịch vụ chất lượng cao, đáp ứng các yêu cầu khắt khe về tiến độ dự án.
                    </p>
<p>
                        Với phương pháp tiếp cận linh hoạt, Reecotech cung cấp nhiều loại sản phẩm và dịch vụ từ thiết bị lấy mẫu môi trường trên tàu đến hệ thống giám sát online hoạt động độc lập, dịch vụ phần mềm quản lý dữ liệu, dịch vụ cài đặt và bảo trì, đảm bảo dữ liệu được thu thập và truyền tải liên tục, góp phần đảm bảo tiến độ và chất lượng của các dự án.
                    </p>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-lg">
<h3 className="text-lg font-medium mb-6">Thống kê nổi bật</h3>
<div className="space-y-6">
<div>
<div className="text-3xl font-semibold tracking-tight">11+</div>
<div className="text-zinc-400 text-sm mt-1">Năm kinh nghiệm</div>
</div>
<div className="w-full h-px bg-zinc-800"></div>
<div>
<div className="text-3xl font-semibold tracking-tight">ISO 45001</div>
<div className="text-zinc-400 text-sm mt-1">Chứng nhận quốc tế</div>
</div>
<div className="w-full h-px bg-zinc-800"></div>
<div>
<div className="text-3xl font-semibold tracking-tight">219+</div>
<div className="text-zinc-400 text-sm mt-1">Dịch vụ đa dạng</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-[#007cc2]" data-lucide="award"></i>
<h3 className="text-lg font-medium text-zinc-900">Chứng nhận ISO</h3>
</div>
<p className="text-sm text-zinc-500 mb-4">Reecotech tự hào đạt được hai chứng nhận quốc tế từ SGS (Thụy Sỹ):</p>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-zinc-700">
<i className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span>ISO 9001:2015 (Chất lượng)</span>
</li>
<li className="flex items-start gap-2 text-sm text-zinc-700">
<i className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span>ISO 45001:2018 (An toàn)</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<h3 className="text-xl font-medium text-zinc-900 mb-4">Phạm vi áp dụng ISO</h3>
<ul className="space-y-3 text-base text-zinc-600 font-light">
<li className="flex items-start gap-2">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></div>
<span>Cung cấp thiết bị đo và dịch vụ kỹ thuật cho các phòng thí nghiệm, trạm quan trắc đo đạc môi trường.</span>
</li>
<li className="flex items-start gap-2">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></div>
<span>Thiết kế và cung cấp các giải pháp đo đạc, quan trắc, truyền nhận, lưu trữ và xử lý số liệu.</span>
</li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-[#007cc2]/5 border border-[#007cc2]/10">
<h3 className="text-xl font-medium text-[#007cc2] mb-4">Tầm nhìn &amp; Sứ mệnh</h3>
<div className="text-base text-zinc-600 font-light space-y-4 text-justify">
<p>
                            Reecotech hướng tới cung cấp giải pháp tiên tiến, tin cậy và hiệu quả, đồng hành cùng khách hàng trong việc vận hành an toàn, bền vững và tối ưu hiệu quả các dự án trên biển.
                        </p>
<p>
                            Công ty đặt mục tiêu trở thành đơn vị dẫn đầu trong lĩnh vực quan trắc và đo đạc môi trường tại Việt Nam và quốc tế, xây dựng quan hệ hợp tác lâu dài dựa trên chất lượng cao và sự tin cậy.
                        </p>
</div>
</div>
</div>
<div className="mt-12 p-6 rounded-xl border border-dashed border-zinc-300 text-center">
<h4 className="text-lg font-medium text-zinc-900">Đôi nét về Reeco Tech</h4>
<p className="mt-2 text-zinc-500 font-light max-w-3xl mx-auto">
                    Công ty TNHH Khoa học và Kỹ thuật REECO được thành lập năm 2012, chuyên cung cấp giải pháp giám sát môi trường, khí tượng thủy hải văn, phòng chống thiên tai và hỗ trợ vận hành an toàn trên biển.
                </p>
</div>
</section>
</main>

<footer className="fixed bottom-4 w-full text-center pointer-events-none z-40">
<div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full border border-zinc-200/60 shadow-lg shadow-zinc-200/10 pointer-events-auto">
<span className="text-xs font-medium text-zinc-500">© 2024 Reecotech</span>
<span className="text-zinc-300 text-[10px]">•</span>
<a className="text-xs text-zinc-400 hover:text-[#007cc2] transition-colors" href="#">Privacy</a>
<span className="text-zinc-300 text-[10px]">•</span>
<a className="text-xs text-zinc-400 hover:text-[#007cc2] transition-colors" href="#">Terms</a>
</div>
</footer>


    </>
  );
}
