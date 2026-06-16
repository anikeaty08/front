import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#2D6BFF', // Electric Blue
hover: '#1A50D1',
dark: '#0f172a'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Data Arrays (Simulated)
        const colors = {
            'white': { name: 'Brahminy White (Trắng)', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop' },
            'black': { name: 'Jet Black (Đen)', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop' }, // Placeholder
            'grey': { name: 'Neptune Grey (Xám)', img: 'https://images.unsplash.com/photo-1606103920295-9a091573f160?q=80&w=2070&auto=format&fit=crop' }, // Placeholder
            'blue': { name: 'VinFast Blue (Xanh)', img: 'https://images.unsplash.com/photo-1594535182308-8ff240fde6a6?q=80&w=2804&auto=format&fit=crop' },
            'red': { name: 'Sunset Orange (Đỏ/Cam)', img: 'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=2070&auto=format&fit=crop' }, // Placeholder
            'green': { name: 'Deep Ocean (Xanh Rêu)', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop' } // Placeholder
        };

        // UI Interactions
        function changeColor(colorKey) {
            const img = document.getElementById('car-image');
            const name = document.getElementById('color-name');
            const swatches = document.getElementById('color-swatches').children;

            // Update Text
            name.textContent = colors[colorKey].name;

            // Reset Swatches
            for (let btn of swatches) {
                btn.classList.remove('ring-2', 'ring-brand', 'ring-offset-2', 'ring-offset-zinc-950', 'scale-110', 'shadow-lg');
                if (btn.getAttribute('onclick').includes(colorKey)) {
                    btn.classList.add('ring-2', 'ring-brand', 'ring-offset-2', 'ring-offset-zinc-950', 'scale-110', 'shadow-lg');
                }
            }

            // Simple Fade Effect for Image
            img.style.opacity = 0;
            setTimeout(() => {
                img.src = colors[colorKey].img;
                img.onload = () => {
                    img.style.opacity = 1;
                };
            }, 200);
        }

        function scrollToForm() {
            const form = document.getElementById('form-dang-ky');
            form.scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToFormWithOption(optionName) {
            scrollToForm();
            // Optional: You could populate a hidden field here
            console.log("User interested in: " + optionName);
        }

        function submitForm() {
            const form = document.querySelector('form');
            const success = document.getElementById('success-msg');
            
            // Simulate API call
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Đang gửi...";
            btn.disabled = true;

            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('hidden');
                success.classList.add('block');
            }, 1000);
        }

        // Reveal Animation on Scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-900/95 backdrop-blur border-t border-zinc-800 md:hidden p-3 pb-6 safe-area-pb">
<div className="grid grid-cols-3 gap-3">
<a className="flex flex-col items-center justify-center text-zinc-400 hover:text-white transition-colors" href="tel:0900000000">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs mt-1 font-medium">Gọi ngay</span>
</a>
<a className="flex flex-col items-center justify-center text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs mt-1 font-medium">Zalo</span>
</a>
<button className="bg-brand text-white rounded-lg flex flex-col items-center justify-center h-full shadow-lg shadow-brand/20" onclick="scrollToForm()">
<span className="text-xs font-semibold uppercase tracking-wide">Báo giá</span>
</button>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 sm:h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<span className="text-2xl font-bold tracking-tighter text-white">VF8</span>
<span className="hidden sm:block text-zinc-500 text-sm font-medium tracking-tight border-l border-zinc-700 pl-2 ml-2">STORE</span>
</div>

<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#phien-ban">ECO vs PLUS</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#mau-sac">Màu sắc</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#uu-dai">Ưu đãi</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="tel:0900000000">
<iconify-icon className="" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<button className="text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-full transition-all border border-zinc-700" onclick="scrollToForm()">
                        Báo giá
                    </button>
<button className="text-sm font-semibold text-white bg-brand hover:bg-brand-hover px-5 py-2.5 rounded-full shadow-lg shadow-brand/25 transition-all" onclick="scrollToForm()">
                        Đăng ký lái thử
                    </button>
</div>

<button className="md:hidden text-zinc-300 hover:text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-10">

<div className="absolute inset-0 z-0">
<img alt="VinFast VF8 Hero" className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950/50"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 flex flex-col text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur mb-6 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
<span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">Sẵn xe giao ngay tháng này</span>
</div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] reveal active">
                    VinFast VF8 <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">Lái xe điện đúng chất.</span>
</h1>
<p className="sm:text-xl leading-relaxed reveal active text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-8 ml-auto">
                    2 phiên bản ECO &amp; PLUS • Đa dạng màu sắc • Tư vấn chốt nhanh theo ngân sách của bạn.
                </p>

<div className="flex flex-wrap justify-center gap-3 mb-10 reveal active">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
<iconify-icon className="text-brand" icon="solar:bolt-linear" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">Êm – Bốc – Mượt</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
<iconify-icon className="text-brand" icon="solar:armchair-linear" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">Rộng rãi cho gia đình</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
<iconify-icon className="text-brand" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">An toàn 5 sao</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto reveal active">
<button className="sm:w-auto hover:bg-brand-hover shadow-brand/20 transition-all transform hover:scale-[1.02] text-lg font-semibold text-white w-full rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-xl" onclick="scrollToForm()">
                        Nhận báo giá VF8 hôm nay
                    </button>
<button className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-semibold text-lg border border-zinc-700 transition-all" onclick="scrollToForm()">
                        Đăng ký lái thử
                    </button>
</div>

<div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 reveal">
<div className="flex text-yellow-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="">Khách hàng phản hồi tích cực sau lái thử</span>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Từ "ngại xe điện" → "thích mê" chỉ sau 1 buổi
                    </h2>
<p className="text-zinc-400">Quy trình đơn giản để bạn sở hữu VF8</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-zinc-800 -z-10"></div>

<div className="relative flex flex-col items-center text-center reveal">
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/50">
<iconify-icon className="text-brand text-4xl" icon="solar:steering-wheel-linear" strokeWidth="1"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">1. Lái thử thực tế</h3>
<p className="text-sm text-zinc-400 max-w-xs">Trải nghiệm khả năng tăng tốc, cách âm và công nghệ ADAS trực tiếp.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/50">
<iconify-icon className="text-brand text-4xl" icon="solar:palette-linear" strokeWidth="1"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">2. Chọn bản &amp; Màu</h3>
<p className="text-sm text-zinc-400 max-w-xs">Tư vấn phiên bản ECO/PLUS phù hợp nhu cầu và phong thủy.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/50">
<iconify-icon className="text-brand text-4xl" icon="solar:key-linear" strokeWidth="1"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">3. Nhận xe &amp; HDSD</h3>
<p className="text-sm text-zinc-400 max-w-xs">Bàn giao xe, hướng dẫn sạc tại nhà và cài đặt App chi tiết.</p>
</div>
</div>
<div className="text-center mt-12 reveal">
<button className="text-sm font-semibold text-brand hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto" onclick="scrollToForm()">
                        Đặt lịch lái thử ngay
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group reveal">
<iconify-icon className="text-brand text-4xl mb-6 group-hover:scale-110 transition-transform" icon="solar:rocket-2-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Trải nghiệm lái khác biệt</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Động cơ điện mạnh mẽ, tăng tốc tức thì không độ trễ. Khung gầm đầm chắc, vào cua mượt mà.
                        </p>
<span className="text-xs font-medium text-brand uppercase tracking-wider">Vì sao đáng tiền?</span>
</div>

<div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-brand text-4xl mb-6 group-hover:scale-110 transition-transform" icon="solar:sofa-2-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Không gian hạng thương gia</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Chiều dài cơ sở lớn giúp khoang nội thất rộng rãi hàng đầu phân khúc D. Ghế da cao cấp.
                        </p>
<span className="text-xs font-medium text-brand uppercase tracking-wider">Thoải mái cả gia đình</span>
</div>

<div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group reveal" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-brand text-4xl mb-6 group-hover:scale-110 transition-transform" icon="solar:shield-user-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">An tâm tuyệt đối</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Hệ thống hỗ trợ lái nâng cao (ADAS) và chính sách bảo hành, hậu mãi số 1 thị trường.
                        </p>
<span className="text-xs font-medium text-brand uppercase tracking-wider">Hậu mãi cực tốt</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="phien-ban">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">ECO hay PLUS?</h2>
<p className="text-zinc-400">Chọn phiên bản phù hợp với nhu cầu và tài chính của bạn.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="flex flex-col p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all reveal">
<div className="mb-6">
<span className="px-3 py-1 rounded text-xs font-bold bg-zinc-800 text-zinc-300">TIÊU CHUẨN</span>
<h3 className="text-3xl font-bold text-white mt-4">VF8 ECO</h3>
<p className="text-zinc-400 mt-2 text-sm">Tối ưu ngân sách – Đủ dùng – Dễ chốt</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 text-sm">Phạm vi hoạt động ấn tượng (tùy pin)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 text-sm">Trang bị an toàn đầy đủ tiêu chuẩn 5 sao</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 text-sm">Nội thất da tổng hợp cao cấp, bền bỉ</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-800 transition-all" onclick="scrollToFormWithOption('ECO')">
                            Báo giá bản ECO
                        </button>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-zinc-900 border-2 border-brand/50 hover:border-brand transition-all relative reveal" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            CAO CẤP
                        </div>
<div className="mb-6">
<span className="px-3 py-1 rounded text-xs font-bold bg-brand/20 text-brand">NÂNG CAO</span>
<h3 className="text-3xl font-bold text-white mt-4">VF8 PLUS</h3>
<p className="text-zinc-400 mt-2 text-sm">Tiện nghi sang trọng &amp; Trải nghiệm tối đa</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-zinc-300 text-sm font-medium">Động cơ mạnh mẽ hơn, tăng tốc tốt hơn</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-zinc-300 text-sm font-medium">Cửa sổ trời toàn cảnh (tùy thời điểm)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-zinc-300 text-sm font-medium">Ghế da thật, chỉnh điện đa hướng, sấy/làm mát</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all" onclick="scrollToFormWithOption('PLUS')">
                            Báo giá bản PLUS
                        </button>
</div>
</div>
<div className="text-center mt-10">
<button className="text-zinc-400 hover:text-white underline text-sm transition-colors" onclick="scrollToFormWithOption('Chưa rõ')">
                        Bạn vẫn chưa quyết định được? Tư vấn chọn bản trong 5 phút
                    </button>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30 border-y border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl text-center hover:border-zinc-700 transition-colors reveal">
<iconify-icon className="text-3xl text-zinc-300 mb-3 mx-auto" icon="solar:display-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Màn hình 15.6"</h4>
<p className="text-zinc-500 text-xs">Giải trí đa phương tiện</p>
</div>
<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl text-center hover:border-zinc-700 transition-colors reveal">
<iconify-icon className="text-3xl text-zinc-300 mb-3 mx-auto" icon="solar:map-point-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Trợ lý ảo ViVi</h4>
<p className="text-zinc-500 text-xs">Điều khiển giọng nói</p>
</div>
<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl text-center hover:border-zinc-700 transition-colors reveal">
<iconify-icon className="text-3xl text-zinc-300 mb-3 mx-auto" icon="solar:battery-charge-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Sạc nhanh</h4>
<p className="text-zinc-500 text-xs">10% - 70% tối ưu</p>
</div>
<div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl text-center hover:border-zinc-700 transition-colors reveal">
<iconify-icon className="text-3xl text-zinc-300 mb-3 mx-auto" icon="solar:phone-linear"></iconify-icon>
<h4 className="text-white font-medium text-sm mb-1">Kết nối App</h4>
<p className="text-zinc-500 text-xs">Quản lý xe từ xa</p>
</div>
</div>
<p className="text-center text-zinc-600 text-xs mt-6 italic">*Một số tính năng có thể thay đổi tùy phiên bản và cập nhật phần mềm.</p>
</div>
</section>

<section className="bg-zinc-950 pt-24 pb-24" id="mau-sac">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-12 gap-12 gap-x-12 gap-y-12 items-center">
<div className="md:col-span-5 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                            Chọn màu VF8 <br/>
<span className="text-zinc-400">Sang trọng - Hợp gu</span>
</h2>
<p className="text-zinc-400 mb-8 text-sm">
                            Bảng màu đa dạng, sơn cao cấp bền màu. Lựa chọn màu sắc phù hợp với cá tính và phong thủy của chủ nhân.
                        </p>

<div className="space-y-4">
<p className="text-sm font-medium text-white">Màu ngoại thất:</p>
<div className="flex flex-wrap gap-3 gap-x-3 gap-y-3" id="color-swatches">

<button aria-label="White" className="w-10 h-10 rounded-full bg-white border-2 border-zinc-600 focus:ring-2 ring-brand ring-offset-2 ring-offset-zinc-950 transition-all scale-110 shadow-lg" onclick="changeColor('white')"></button>
<button aria-label="Black" className="hover:scale-110 transition-all bg-black w-10 h-10 border-zinc-700 border rounded-full" onclick="changeColor('black')"></button>
<button aria-label="Grey" className="hover:scale-110 transition-all bg-gray-500 w-10 h-10 border-zinc-700 border rounded-full" onclick="changeColor('grey')"></button>
<button aria-label="Blue" className="w-10 h-10 rounded-full bg-blue-700 border border-zinc-700 hover:scale-110 transition-all" onclick="changeColor('blue')"></button>
<button aria-label="Red" className="hover:scale-110 transition-all bg-red-700 w-10 h-10 border-zinc-700 border rounded-full" onclick="changeColor('red')"></button>
<button aria-label="Deep Green" className="w-10 h-10 rounded-full bg-emerald-800 border border-zinc-700 hover:scale-110 transition-all" onclick="changeColor('green')"></button>
</div>
<div className="mt-4">
<span className="text-xs text-zinc-500" id="color-name">Brahminy White (Trắng)</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-zinc-800">
<button className="flex items-center gap-2 text-brand hover:text-white transition-colors text-sm font-medium" onclick="scrollToFormWithOption('Bảng màu')">
<iconify-icon icon="solar:file-download-linear"></iconify-icon>
                                Gửi tôi bảng màu &amp; Xe có sẵn
                            </button>
</div>
</div>
<div className="md:col-span-7 reveal">
<div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">

<img alt="VF8 Color Preview" className="transition-opacity duration-500 w-full h-full object-cover" id="car-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-xs text-white">Ảnh minh họa studio</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10 reveal">
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">So sánh nhanh VF8 ECO vs PLUS</h2>
</div>
<div className="overflow-x-auto rounded-xl border border-zinc-800 reveal">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-900 border-b border-zinc-800">
<th className="p-4 text-zinc-400 font-medium text-sm w-1/3">Tính năng</th>
<th className="p-4 text-white font-semibold w-1/3 border-l border-zinc-800 text-center">ECO</th>
<th className="p-4 text-brand font-bold w-1/3 border-l border-zinc-800 text-center">PLUS</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-zinc-800 hover:bg-zinc-800/50">
<td className="p-4 text-zinc-300">Động cơ / Công suất</td>
<td className="p-4 text-center border-l border-zinc-800 text-zinc-400">Tiêu chuẩn</td>
<td className="p-4 text-center border-l border-zinc-800 text-white font-medium">Cao cấp (Mạnh hơn)</td>
</tr>
<tr className="border-b border-zinc-800 hover:bg-zinc-800/50">
<td className="p-4 text-zinc-300">Nội thất ghế</td>
<td className="p-4 text-center border-l border-zinc-800 text-zinc-400">Da tổng hợp</td>
<td className="p-4 text-center border-l border-zinc-800 text-white font-medium">Da thật</td>
</tr>
<tr className="border-b border-zinc-800 hover:bg-zinc-800/50">
<td className="p-4 text-zinc-300">Ghế lái &amp; phụ</td>
<td className="p-4 text-center border-l border-zinc-800 text-zinc-400">Chỉnh điện</td>
<td className="p-4 text-center border-l border-zinc-800 text-white font-medium">Chỉnh điện + Nhớ + Sấy/Mát</td>
</tr>
<tr className="border-b border-zinc-800 hover:bg-zinc-800/50">
<td className="p-4 text-zinc-300">Cửa sổ trời</td>
<td className="p-4 text-center border-l border-zinc-800 text-zinc-500">—</td>
<td className="p-4 text-center border-l border-zinc-800 text-white font-medium">Toàn cảnh (Tùy bản)</td>
</tr>
<tr className="hover:bg-zinc-800/50">
<td className="p-4 text-zinc-300">Cốp sau</td>
<td className="p-4 text-center border-l border-zinc-800 text-zinc-400">Chỉnh cơ/điện</td>
<td className="p-4 text-center border-l border-zinc-800 text-white font-medium">Đá cốp (Rảnh tay)</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-zinc-900 border border-zinc-800 border-t-0 rounded-b-xl p-4 text-center mb-8">
<p className="text-sm text-zinc-300">
<span className="text-white font-medium">Kết luận:</span> Muốn tối ưu chi phí → <span className="font-bold">ECO</span>. Muốn trải nghiệm tiện nghi cao cấp → <span className="font-bold text-brand">PLUS</span>.
                    </p>
</div>
<div className="text-center">
<button className="px-6 py-3 rounded-full border border-zinc-600 text-white hover:bg-zinc-800 transition-all text-sm font-medium" onclick="scrollToForm()">
                        Tư vấn chọn bản trong 5 phút
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="uu-dai">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Nhận báo giá lăn bánh &amp; Trả góp
                    </h2>
<p className="text-zinc-400 text-sm">Chính sách giá tốt nhất tại thời điểm hiện tại.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-800 relative group reveal">
<div className="absolute -top-3 left-6 px-3 py-1 bg-brand text-white text-xs font-bold rounded shadow-lg shadow-brand/20">HOT</div>
<h3 className="text-lg font-semibold text-white mb-2">Báo giá lăn bánh</h3>
<p className="text-zinc-400 text-sm mb-4">Giá xe + Phí đăng ký + Biển số theo khu vực của bạn.</p>
<div className="text-2xl font-bold text-white mb-1">... VNĐ</div>
<p className="text-xs text-zinc-500 mb-6">Liên hệ để có giá chính xác hôm nay</p>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium group-hover:bg-brand transition-colors" onclick="scrollToFormWithOption('Báo giá lăn bánh')">Nhận báo giá</button>
</div>

<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 group reveal" style={{transitionDelay: '100ms'}}>
<h3 className="text-lg font-semibold text-white mb-2">Dự toán trả góp</h3>
<p className="text-zinc-400 text-sm mb-4">Vay tới 70-80% giá trị xe. Thời gian linh hoạt 5-8 năm.</p>
<div className="text-lg font-medium text-white mb-1">Chỉ từ <span className="text-brand">X triệu/tháng</span></div>
<p className="text-xs text-zinc-500 mb-6">Tùy thuộc số tiền trả trước</p>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium group-hover:bg-zinc-700 transition-colors" onclick="scrollToFormWithOption('Trả góp')">Tính trả góp</button>
</div>

<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 group reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-lg font-semibold text-white mb-2">Thu cũ đổi mới</h3>
<p className="text-zinc-400 text-sm mb-4">Hỗ trợ thu mua xe xăng cũ giá tốt, đổi sang xe điện VinFast.</p>
<div className="text-lg font-medium text-white mb-1">Thủ tục nhanh gọn</div>
<p className="text-xs text-zinc-500 mb-6">Ưu đãi thêm cho chủ xe VinFast cũ</p>
<button className="w-full py-2.5 rounded-lg bg-zinc-800 text-white text-sm font-medium group-hover:bg-zinc-700 transition-colors" onclick="scrollToFormWithOption('Thu cũ đổi mới')">Tư vấn đổi xe</button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-white mb-10 text-center reveal">Khách hàng nói gì về VF8?</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 reveal">
<div className="flex text-yellow-500 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-4">"Lúc đầu cũng ngại xe điện, nhưng lái thử xong chốt luôn. Xe đầm, bốc, đi đường trường rất sướng."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">QA</div>
<div>
<p className="text-white text-xs font-bold">Anh Quốc Anh</p>
<p className="text-zinc-500 text-[10px]">Hà Nội • Chủ xe VF8 Plus</p>
</div>
</div>
</div>
<div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 reveal">
<div className="flex text-yellow-500 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-4">"Sale tư vấn nhiệt tình, phân tích rõ bản ECO với PLUS nên mình chọn ECO cho kinh tế, vẫn rất đủ dùng."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">M</div>
<div>
<p className="text-white text-xs font-bold">Chị Minh</p>
<p className="text-zinc-500 text-[10px]">Hải Phòng • Chủ xe VF8 Eco</p>
</div>
</div>
</div>
<div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 reveal">
<div className="flex text-yellow-500 mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-4">"Dịch vụ hậu mãi tốt, sạc điện giờ cũng tiện hơn nhiều rồi. Đi xuyên Việt vô tư."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">H</div>
<div>
<p className="text-white text-xs font-bold">Anh Hùng</p>
<p className="text-zinc-500 text-[10px]">TP.HCM • Chủ xe VF8 Plus</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-white mb-8 text-center reveal">Câu hỏi thường gặp</h2>
<div className="space-y-4 reveal">
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 open:border-zinc-700">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-zinc-200 font-medium hover:text-white">
<span>Sạc xe tại nhà có khó không?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-transparent group-open:border-zinc-800/50">
                            Rất đơn giản. Bạn sẽ được tặng kèm hoặc mua bộ sạc di động/treo tường. Chỉ cần cắm vào nguồn điện dân dụng (có tiếp địa) là sạc được qua đêm.
                        </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 open:border-zinc-700">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-zinc-200 font-medium hover:text-white">
<span>Chi phí bảo dưỡng so với xe xăng thế nào?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-transparent group-open:border-zinc-800/50">
                            Rẻ hơn rất nhiều. Xe điện ít chi tiết cơ khí phức tạp, không cần thay dầu máy, lọc dầu... Chi phí bảo dưỡng định kỳ tiết kiệm khoảng 50-70% so với xe xăng.
                        </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 open:border-zinc-700">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-zinc-200 font-medium hover:text-white">
<span>Thời gian bảo hành pin là bao lâu?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-transparent group-open:border-zinc-800/50">
                            Pin được bảo hành dài hạn (thường là 10 năm hoặc không giới hạn km tùy chính sách tại thời điểm mua), đảm bảo an tâm tuyệt đối khi sử dụng.
                        </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 open:border-zinc-700">
<summary className="flex justify-between items-center p-4 cursor-pointer list-none text-zinc-200 font-medium hover:text-white">
<span>Thủ tục trả góp cần những gì?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-transparent group-open:border-zinc-800/50">
                             Cần CCCD, chứng minh thu nhập (sao kê lương hoặc đăng ký kinh doanh). Chúng tôi hỗ trợ xử lý hồ sơ nhanh trong 24h.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-800 scroll-mt-20" id="form-dang-ky">
<div className="max-w-xl mx-auto px-4 sm:px-6 relative">

<div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full -z-10 transform scale-75"></div>
<div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-2xl reveal">
<div className="text-center mb-8">
<h2 className="text-2xl font-bold text-white mb-2">Để lại thông tin tư vấn</h2>
<p className="text-zinc-400 text-sm">Nhận báo giá chi tiết và ưu đãi độc quyền hôm nay.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); submitForm();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Họ và tên *</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" placeholder="Nguyễn Văn A" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Số điện thoại *</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" placeholder="09xx xxx xxx" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Khu vực đăng ký</label>
<select className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-all text-sm appearance-none">
<option>Hà Nội</option>
<option>TP. Hồ Chí Minh</option>
<option>Đà Nẵng</option>
<option>Khu vực khác</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Phiên bản quan tâm</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="version" type="radio" value="ECO"/>
<div className="text-center px-3 py-2 rounded-lg border border-zinc-800 text-zinc-400 text-sm peer-checked:bg-brand peer-checked:text-white peer-checked:border-brand transition-all hover:bg-zinc-900">VF8 ECO</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="version" type="radio" value="PLUS"/>
<div className="text-center px-3 py-2 rounded-lg border border-zinc-800 text-zinc-400 text-sm peer-checked:bg-brand peer-checked:text-white peer-checked:border-brand transition-all hover:bg-zinc-900">VF8 PLUS</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="version" type="radio" value="IDK"/>
<div className="text-center px-3 py-2 rounded-lg border border-zinc-800 text-zinc-400 text-sm peer-checked:bg-zinc-700 peer-checked:text-white peer-checked:border-zinc-600 transition-all hover:bg-zinc-900">Chưa rõ</div>
</label>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-brand peer-checked:border-brand transition-colors"></div>
<iconify-icon className="text-white absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">Gửi bảng giá lăn bánh chi tiết</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-brand peer-checked:border-brand transition-colors"></div>
<iconify-icon className="text-white absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">Đăng ký lái thử tại nhà</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-brand peer-checked:border-brand transition-colors"></div>
<iconify-icon className="text-white absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">Tư vấn trả góp ngân hàng</span>
</label>
</div>
<button className="w-full py-4 bg-brand hover:bg-brand-hover text-white rounded-xl font-bold text-lg shadow-lg shadow-brand/25 transition-all mt-4" type="submit">
                            Gửi yêu cầu ngay
                        </button>
<p className="text-[10px] text-zinc-600 text-center mt-4">Thông tin của bạn được bảo mật tuyệt đối.</p>
</form>

<div className="hidden text-center py-10" id="success-msg">
<div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-800">
<iconify-icon className="text-green-500 text-3xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-white text-xl font-bold mb-2">Đã nhận yêu cầu!</h3>
<p className="text-zinc-400 text-sm">Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút.</p>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-zinc-950 py-10 border-t border-zinc-900 pb-24 md:pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-xl font-bold tracking-tighter text-white">VF8 STORE</span>
<p className="text-zinc-500 text-xs mt-2 max-w-xs">
                        Đại lý ủy quyền chính hãng. Chuyên phân phối VinFast VF8 với chính sách tốt nhất.
                    </p>
</div>
<div className="flex gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
<a className="hover:text-white transition-colors" href="#">Điều khoản sử dụng</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-zinc-900 text-center md:text-left text-[10px] text-zinc-600">
<p>Thông tin, hình ảnh và giá xe có thể thay đổi theo chính sách của nhà sản xuất tại từng thời điểm. Vui lòng liên hệ hotline để được tư vấn chính xác nhất.</p>
<p className="mt-2">© 2023 VF8 Store. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
