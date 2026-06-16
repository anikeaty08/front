import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: { "stroke-width": 1.5 }
        });

        // Modal Logic
        const modal = document.getElementById('auth-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');
        
        // UI Elements
        const tabLogin = document.getElementById('tab-login');
        const tabRegister = document.getElementById('tab-register');
        const tabBg = document.getElementById('tab-bg');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const submitBtn = document.getElementById('submit-btn');
        const forgotLink = document.getElementById('forgot-link');

        function openModal(type = 'login') {
            modal.classList.remove('hidden');
            // Trigger animations
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'translate-y-4');
                panel.classList.add('modal-enter');
            }, 10);
            
            switchTab(type);
        }

        function closeModal() {
            backdrop.classList.add('opacity-0');
            panel.classList.add('opacity-0', 'translate-y-4');
            panel.classList.remove('modal-enter');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function switchTab(type) {
            if (type === 'login') {
                // UI Styling for Login
                tabBg.style.transform = 'translateX(0)';
                tabLogin.classList.remove('text-slate-500');
                tabLogin.classList.add('text-slate-900');
                tabRegister.classList.remove('text-slate-900');
                tabRegister.classList.add('text-slate-500');
                
                // Content
                modalTitle.innerText = "Chào mừng trở lại";
                modalDesc.innerText = "Nhập thông tin của bạn để tiếp tục truy cập AI Coach.";
                submitBtn.innerText = "Đăng nhập";
                forgotLink.style.display = "block";
            } else {
                // UI Styling for Register
                tabBg.style.transform = 'translateX(100%)';
                tabRegister.classList.remove('text-slate-500');
                tabRegister.classList.add('text-slate-900');
                tabLogin.classList.remove('text-slate-900');
                tabLogin.classList.add('text-slate-500');
                
                // Content
                modalTitle.innerText = "Tạo tài khoản mới";
                modalDesc.innerText = "Bắt đầu xây dựng AI Coach của bạn miễn phí ngay hôm nay.";
                submitBtn.innerText = "Tạo tài khoản";
                forgotLink.style.display = "none";
            }
        }

        // Close on backdrop click
        backdrop.addEventListener('click', closeModal);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-[#0D47A1]">AI COACH</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

<button className="hidden md:inline-block text-slate-600 hover:text-[#1565C0] font-medium text-sm px-4 py-2.5 mr-2 transition-colors" onclick="openModal('login')" type="button">
                    Đăng nhập
                </button>

<button className="text-white bg-[#1565C0] hover:bg-[#0D47A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors duration-200 shadow-lg shadow-blue-500/30" onclick="openModal('register')" type="button">
                    Bắt đầu ngay
                </button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Mở menu</span>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#1565C0] md:p-0 transition-colors" href="#">Giới thiệu</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#1565C0] md:p-0 transition-colors" href="#features">Tính năng</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#1565C0] md:p-0 transition-colors" href="#pricing">Bảng giá</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#1565C0] md:p-0 transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#1E88E5]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="px-4 mx-auto max-w-7xl text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-[#1565C0] bg-blue-50 rounded-full border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E88E5] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1565C0]"></span>
</span>
                Huấn Luyện Viên &amp; Chuyên Gia AI Của Riêng Bạn
            </div>
<h1 className="mb-4 text-4xl font-semibold tracking-tight leading-tight text-slate-900 md:text-6xl lg:leading-tight">
<span className="text-gradient">Khám Phá Sức Mạnh</span> <br className="hidden md:block"/>
                Của AI Do Chính Bạn Tạo Ra
            </h1>
<p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48">
                Xây dựng, tùy chỉnh và ra mắt ứng dụng AI Coach hoặc Chuyên gia của riêng bạn cho người dùng cuối. 
                Không cần lập trình. Kiếm tiền từ chuyên môn của bạn ngay lập tức.
            </p>
<div className="flex flex-col mb-12 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
<button className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-[#1565C0] hover:bg-[#0D47A1] focus:ring-4 focus:ring-blue-300 shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5" onclick="openModal('register')">
                    Dùng thử miễn phí (50 Credit)
                    <i className="ml-2 -mr-1 w-4 h-4" data-lucide="arrow-right"></i>
</button>
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-50 hover:text-[#1565C0] focus:ring-4 focus:ring-slate-100 transition-all" href="#">
<i className="mr-2 w-4 h-4" data-lucide="play-circle"></i>
                    Xem Demo
                </a>
</div>

<div className="relative mx-auto border-slate-200 bg-slate-50 border-[6px] rounded-t-2xl h-fit w-fit max-w-4xl shadow-2xl">
<div className="rounded-t-lg overflow-hidden bg-white">
<div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
<div className="w-3 h-3 bg-red-400 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
<div className="w-3 h-3 bg-green-400 rounded-full"></div>
<div className="ml-4 w-64 h-4 bg-white rounded-md shadow-sm"></div>
</div>
<div className="grid grid-cols-12 gap-0 h-[300px] md:h-[450px] overflow-hidden">
<div className="col-span-3 bg-slate-50 border-r border-slate-100 p-4 hidden sm:block">
<div className="h-8 w-24 bg-slate-200 rounded mb-6 animate-pulse"></div>
<div className="space-y-3">
<div className="h-4 w-full bg-slate-200 rounded opacity-60"></div>
<div className="h-4 w-3/4 bg-slate-200 rounded opacity-60"></div>
<div className="h-4 w-5/6 bg-slate-200 rounded opacity-60"></div>
</div>
<div className="mt-12 space-y-3">
<div className="h-4 w-full bg-[#1565C0]/10 rounded text-[#1565C0] font-medium text-xs flex items-center px-2">Người dùng Active</div>
<div className="h-16 w-full bg-white border border-slate-200 rounded shadow-sm"></div>
</div>
</div>
<div className="col-span-12 sm:col-span-9 p-6 bg-white relative">
<div className="flex justify-between items-center mb-8">
<div>
<div className="h-6 w-48 bg-slate-200 rounded mb-2"></div>
<div className="h-4 w-32 bg-slate-100 rounded"></div>
</div>
<div className="h-8 w-8 rounded-full bg-[#1E88E5] shadow-lg shadow-blue-500/30"></div>
</div>
<div className="space-y-4 max-w-2xl mx-auto">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0"></div>
<div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-xs text-slate-400 w-3/4 border border-slate-100">
<div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-slate-200 rounded"></div>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-[#1565C0] flex-shrink-0"></div>
<div className="bg-[#1565C0] p-3 rounded-2xl rounded-tr-none text-xs text-white/80 w-2/3 shadow-md">
<div className="h-2 w-full bg-white/30 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-white/30 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm font-medium text-slate-400 mb-6">Được tin dùng bởi hơn 10.000 nhà sáng tạo trên toàn cầu.</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<div className="flex items-center gap-1 font-semibold text-lg text-slate-800"><i className="w-5 h-5" data-lucide="hexagon"></i> NEXUS</div>
<div className="flex items-center gap-1 font-semibold text-lg text-slate-800"><i className="w-5 h-5" data-lucide="layers"></i> STACK</div>
<div className="flex items-center gap-1 font-semibold text-lg text-slate-800"><i className="w-5 h-5" data-lucide="command"></i> COMMAND</div>
<div className="flex items-center gap-1 font-semibold text-lg text-slate-800"><i className="w-5 h-5" data-lucide="zap"></i> BOLT</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-4">Tại Sao Nên Chọn Chúng Tôi?</h2>
<p className="text-slate-500 text-lg">Mọi thứ bạn cần để biến kiến thức của mình thành doanh nghiệp huấn luyện tự động 24/7.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-[#1565C0]">
<i className="w-6 h-6" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Trình Tạo App</h3>
<p className="text-sm text-slate-500 leading-relaxed">Kéo, thả và tùy chỉnh. Không cần viết mã.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-[#1565C0]">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">CMS Tích Hợp</h3>
<p className="text-sm text-slate-500 leading-relaxed">Quản lý kiến thức và cá tính AI dễ dàng.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-[#1565C0]">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chế Độ Dùng Thử</h3>
<p className="text-sm text-slate-500 leading-relaxed">Thu hút người dùng bằng các phiên miễn phí.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-[#1565C0]">
<i className="w-6 h-6" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Kiếm Tiền Ngay</h3>
<p className="text-sm text-slate-500 leading-relaxed">Nhận tiền trực tiếp qua Stripe.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">Bảng Giá Đơn Giản</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="p-8 bg-white border border-slate-200 rounded-2xl flex flex-col">
<h3 className="text-lg font-medium text-slate-900">Miễn phí</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-4xl font-bold tracking-tight">$0</span>
</div>
<button className="mt-8 block w-full py-3 px-6 border border-[#1565C0] text-[#1565C0] font-medium rounded-lg text-center hover:bg-blue-50 transition-colors" onclick="openModal('register')">Bắt đầu ngay</button>
</div>
<div className="relative p-8 bg-[#1565C0] text-white rounded-2xl flex flex-col shadow-xl md:-translate-y-4">
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight">$29</span>
</div>
<button className="mt-8 block w-full py-3 px-6 bg-white text-[#1565C0] font-medium rounded-lg text-center hover:bg-blue-50 transition-colors" onclick="openModal('register')">Nâng cấp Pro</button>
</div>
<div className="p-8 bg-white border border-slate-200 rounded-2xl flex flex-col">
<h3 className="text-lg font-medium text-slate-900">Elite</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-4xl font-bold tracking-tight">$99</span>
</div>
<button className="mt-8 block w-full py-3 px-6 border border-[#1565C0] text-[#1565C0] font-medium rounded-lg text-center hover:bg-blue-50 transition-colors" onclick="openModal('register')">Liên hệ</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2023 AI Coach Platform.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-[#1565C0]" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-[#1565C0]" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="auth-modal" role="dialog">

<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>

<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md opacity-0 translate-y-4" id="modal-panel">

<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="p-8">

<div className="flex justify-center mb-6">
<div className="w-10 h-10 bg-[#1565C0] rounded-lg flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
</div>

<div className="flex p-1 bg-slate-100 rounded-lg mb-6 relative">
<div className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded shadow-sm transition-all duration-300 ease-out" id="tab-bg"></div>
<button className="relative z-10 w-1/2 py-2 text-sm font-medium text-center rounded transition-colors text-slate-900" id="tab-login" onclick="switchTab('login')">Đăng nhập</button>
<button className="relative z-10 w-1/2 py-2 text-sm font-medium text-center rounded transition-colors text-slate-500 hover:text-slate-700" id="tab-register" onclick="switchTab('register')">Đăng ký</button>
</div>

<h3 className="text-xl font-semibold text-center text-slate-900 mb-2" id="modal-title">Chào mừng trở lại</h3>
<p className="text-sm text-center text-slate-500 mb-6" id="modal-desc">Nhập thông tin của bạn để tiếp tục truy cập AI Coach.</p>

<div className="space-y-3 mb-6">
<button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                            Tiếp tục với Google
                        </button>
</div>
<div className="relative mb-6">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
<div className="relative flex justify-center text-xs font-medium text-slate-400 uppercase"><span className="bg-white px-2">Hoặc</span></div>
</div>

<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="password">Mật khẩu</label>
<a className="text-xs text-[#1565C0] hover:underline" href="#" id="forgot-link">Quên mật khẩu?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="lock"></i>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-all" id="password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#1565C0] hover:bg-[#0D47A1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200" id="submit-btn" type="submit">
                            Đăng nhập
                        </button>
</form>
<p className="mt-6 text-center text-xs text-slate-500">
                        Bằng cách tiếp tục, bạn đồng ý với <a className="text-[#1565C0] hover:underline" href="#">Điều khoản</a> và <a className="text-[#1565C0] hover:underline" href="#">Chính sách bảo mật</a> của chúng tôi.
                    </p>
</div>
</div>
</div>
</div>


    </>
  );
}
