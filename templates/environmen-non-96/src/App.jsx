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
heading: ['Montserrat', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff', /* Sky 50 */
100: '#e0f2fe', /* Sky 100 */
500: '#0ea5e9', /* Sky 500 */
600: '#0284c7', /* Sky 600 */
700: '#0369a1', /* Sky 700 */
800: '#075985',
900: '#0c4a6e', /* Sky 900 */
},
secondary: {
50: '#ecfdf5', /* Emerald 50 */
100: '#d1fae5', /* Emerald 100 */
400: '#34d399', /* Emerald 400 */
500: '#10b981', /* Emerald 500 */
600: '#059669', /* Emerald 600 */
700: '#047857', /* Emerald 700 */
},
sky: {
500: '#0ea5e9',
},
accent: {
400: '#fbbf24', /* Amber 400 */
500: '#f59e0b',
}
},
backgroundImage: {
'hero-pattern': "url('https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
}
}
}
}



      // Initialize Lucide Icons
      lucide.createIcons();

      // 1. Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          // Change icon based on state (optional simple logic)
      });

      // 2. Sticky Navbar Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('shadow-md', 'bg-white/80');
              navbar.classList.remove('bg-white/70', 'border-white/20');
          } else {
              navbar.classList.remove('shadow-md', 'bg-white/80');
              navbar.classList.add('bg-white/70', 'border-white/20');
          }
      });

      // 3. Count Up Animation with Intersection Observer
      const counters = document.querySelectorAll('.counter');
      const speed = 200; // The lower the slower

      const animateCounters = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const counter = entry.target;
                  const target = +counter.getAttribute('data-target');

                  const updateCount = () => {
                      const count = +counter.innerText.replace(/,/g, ''); // Remove commas for calculation
                      const inc = target / speed;

                      if (count < target) {
                          counter.innerText = Math.ceil(count + inc).toLocaleString();
                          setTimeout(updateCount, 20);
                      } else {
                          counter.innerText = target.toLocaleString();
                      }
                  };
                  updateCount();
                  observer.unobserve(counter); // Only run once
              }
          });
      };

      const sectionObserver = new IntersectionObserver(animateCounters, {
          root: null,
          threshold: 0.5 // Trigger when 50% visible
      });

      counters.forEach(counter => {
          sectionObserver.observe(counter);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b border-white/40" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="p-2 bg-brand-50 rounded-xl group-hover:bg-brand-100 transition-colors">
<svg className="lucide lucide-leaf w-6 h-6 text-secondary-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="font-heading font-bold text-xl tracking-tight text-slate-800">
              Svwao
            </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#about">
              Về Chúng Tôi
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#activities">
              Hoạt Động
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#news">
              Tin Tức
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#footer">
              Liên Hệ
            </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-600 text-brand-600 text-sm font-semibold hover:bg-brand-50 transition-all shadow-sm hover:shadow-md" href="#volunteer">
              Đăng Ký Tình Nguyện
            </a>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4 origin-top animate-fade-in-down" id="mobile-menu">
<a className="text-slate-700 font-medium py-2" href="#about">
          Về Chúng Tôi
        </a>
<a className="text-slate-700 font-medium py-2" href="#activities">
          Hoạt Động
        </a>
<a className="text-slate-700 font-medium py-2" href="#news">Tin Tức</a>
<a className="text-slate-700 font-medium py-2" href="#footer">Liên Hệ</a>
<a className="w-full text-center py-3 rounded-xl bg-brand-600 text-white font-semibold" href="#volunteer">
          Đăng Ký Tình Nguyện
        </a>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-fixed transform scale-105"></div>
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

<div className="text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-white/20 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="inline-flex w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide uppercase">
            Tham gia cùng 5,000+ tình nguyện viên
          </span>
</div>
<h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-6 text-shadow">
          Hành Động Nhỏ,
          <br/>

<span className="bg-clip-text text-blue-200">
            Thay Đổi Lớn
          </span>
          Cho Môi Trường.
        </h1>
<p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-90">
          Chúng tôi cam kết dọn sạch rác thải nhựa, phục hồi hệ sinh thái biển
          và trồng 1 triệu cây xanh trên khắp Việt Nam vào năm 2030.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-400 text-slate-900 font-semibold hover:bg-accent-500 transition-all shadow-lg hover:shadow-accent-500/20 transform hover:-translate-y-1 flex items-center justify-center gap-2" href="#volunteer">
            Tham Gia Ngay
          </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 group" href="#about">
            Tìm Hiểu Thêm
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
<svg className="lucide lucide-chevron-down text-white w-8 h-8" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="py-20 bg-white relative z-20 -mt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="stats-container">

<div className="text-center group">
<p className="text-4xl md:text-5xl font-heading font-bold text-slate-800 tracking-tight mb-2">
<span className="counter" data-target="25">2</span>
              +
            </p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
              Tấn Rác Thải
            </p>
</div>

<div className="text-center group">
<p className="text-4xl md:text-5xl font-heading font-bold text-slate-800 tracking-tight mb-2">
<span className="counter" data-target="10000">100</span>
              +
            </p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider transition-colors group-hover:text-secondary-600">
              Cây Xanh
            </p>
</div>

<div className="text-center group">
<p className="text-4xl md:text-5xl font-heading font-bold text-slate-800 tracking-tight mb-2">
<span className="counter" data-target="150">2</span>
              +
            </p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
              Chiến Dịch
            </p>
</div>

<div className="text-center group">
<p className="text-4xl md:text-5xl font-heading font-bold text-slate-800 tracking-tight mb-2">
<span className="counter" data-target="50">2</span>
</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider group-hover:text-brand-600 transition-colors">
              Tỉnh Thành
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="activities">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-600 font-bold tracking-wider text-xs uppercase bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Sứ Mệnh Của Svwao
          </span>
<h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4 tracking-tight">
            Kiến Tạo Tương Lai Xanh
          </h2>
<p className="text-slate-500 text-lg">
            Chúng tôi tập trung vào ba trụ cột chính để tạo ra tác động bền vững
            cho cộng đồng và môi trường.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-14 h-14 bg-secondary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors duration-300">
<svg className="lucide lucide-trash-2 w-7 h-7 group-hover:text-white transition-colors text-secondary-600" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
              Làm Sạch Môi Trường
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Tổ chức các buổi ra quân dọn rác tại bãi biển, công viên và khu
              dân cư, tập trung vào việc giảm thiểu rác thải nhựa dùng một lần.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
<svg className="lucide lucide-wind text-sky-500 w-7 h-7 group-hover:text-white transition-colors" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
              Năng Lượng Xanh
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Thúc đẩy trồng cây xanh đô thị và hỗ trợ các giải pháp năng lượng
              tái tạo quy mô nhỏ cho các vùng sâu vùng xa.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group cursor-pointer">
<div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors duration-300">
<svg className="lucide lucide-graduation-cap text-amber-500 w-7 h-7 group-hover:text-white transition-colors" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
              Giáo Dục Thế Hệ Trẻ
            </h3>
<p className="text-slate-500 leading-relaxed text-sm">
              Các chương trình workshop, ngoại khóa nhằm nâng cao nhận thức về
              biến đổi khí hậu cho học sinh, sinh viên.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="news">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-sky-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Báo Chí Nói Về Chúng Tôi
            </h2>
<p className="text-slate-500 mt-2">
              Cập nhật những hoạt động mới nhất và sự ghi nhận từ cộng đồng.
            </p>
</div>
<a className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1 group" href="#">
            Xem tất cả tin tức
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
<img alt="News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                VnExpress
              </div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>2 ngày trước</span>
</div>
<h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                Chiến dịch 'Biển Xanh' thu hút hàng nghìn bạn trẻ tại Đà Nẵng
              </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                Hơn 2,000 tình nguyện viên đã cùng nhau thu gom 15 tấn rác thải
                nhựa dọc bờ biển Mỹ Khê...
              </p>
</div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
<img alt="News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                VTV24
              </div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>5 ngày trước</span>
</div>
<h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                Svwao phát động trồng cây gây rừng tại Vườn Quốc Gia Cúc Phương
              </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                Dự án nhằm phục hồi hệ sinh thái rừng nguyên sinh và bảo vệ động
                vật hoang dã quý hiếm.
              </p>
</div>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
<img alt="News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                Tuổi Trẻ
              </div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>1 tuần trước</span>
</div>
<h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                Gen Z và xu hướng sống xanh: Khi hành động nhỏ tạo nên làn sóng
                lớn
              </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                Phỏng vấn độc quyền với nhà sáng lập Svwao về tầm nhìn và sứ
                mệnh của tổ chức trong thập kỷ tới.
              </p>
</div>
</article>
</div>
</div>
</section>
<section className="py-24 bg-slate-50" id="blog">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Góc Chia Sẻ &amp; Kiến Thức Xanh
          </h2>
<div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full"></div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:pb-0 no-scrollbar">

<div className="snap-center shrink-0 w-[85vw] md:w-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
<div className="relative h-48 overflow-hidden">
<img alt="Plastic Free" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-secondary-600">
                Sống Xanh
              </span>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-lg text-slate-900 mb-3 line-clamp-2">
                5 Cách giảm rác thải nhựa tại nhà đơn giản
              </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">
                Những thay đổi nhỏ trong thói quen hàng ngày có thể tạo nên tác
                động lớn...
              </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#">
                Đọc tiếp
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
<div className="relative h-48 overflow-hidden">
<img alt="Volunteer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-brand-600">
                Nhật Ký
              </span>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-lg text-slate-900 mb-3 line-clamp-2">
                Nhật ký 24h làm tình nguyện viên tại Cần Giờ
              </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">
                Trải nghiệm thực tế về công việc trồng rừng ngập mặn và dọn sạch
                bãi biển...
              </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#">
                Đọc tiếp
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
<div className="relative h-48 overflow-hidden">
<img alt="Recycle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-amber-500">
                Mẹo Tái Chế
              </span>
</div>
<div className="p-6">
<h3 className="font-heading font-bold text-lg text-slate-900 mb-3 line-clamp-2">
                Phân loại rác thải nguồn: Hướng dẫn từ A-Z
              </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">
                Cách nhận biết và phân loại rác hữu cơ, vô cơ và rác tái chế
                đúng chuẩn...
              </p>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#">
                Đọc tiếp
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-brand-500" id="volunteer">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="bg-brand-700 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="lg:p-16 flex flex-col pt-10 pr-10 pb-10 pl-10 relative justify-center">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-transparent"></div>
<h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Sẵn Sàng Hành Động?
              </h2>
<p className="text-brand-100 text-lg mb-8 leading-relaxed">
                Mỗi đôi tay góp sức là thêm một niềm hy vọng cho Trái Đất. Hãy
                điền thông tin bên cạnh để trở thành thành viên của đại gia đình
                Svwao.
              </p>
<ul className="space-y-4 text-brand-50">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-accent-400 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Nhận thông báo về các chiến dịch mới nhất.</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-accent-400 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Tham gia các buổi đào tạo kỹ năng mềm.</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 text-accent-400 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Cấp giấy chứng nhận tình nguyện viên.</span>
</li>
</ul>
</div>

<div className="bg-white p-10 lg:p-16">
<form className="space-y-6">
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="name">
                    Họ và Tên
                  </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" id="name" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                      Email
                    </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" id="email" placeholder="email@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="phone">
                      Số Điện Thoại
                    </label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-slate-800 placeholder:text-slate-400" id="phone" placeholder="090 123 4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="campaign">
                    Tôi muốn tham gia...
                  </label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-slate-800 appearance-none cursor-pointer" id="campaign">
<option>Dọn rác bãi biển (Clean Up)</option>
<option>Trồng cây gây rừng</option>
<option>Hỗ trợ giáo dục</option>
<option>Tài trợ / Đối tác</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-600/30 transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
                  Gửi Đăng Ký
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800" id="footer">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="lucide lucide-leaf text-brand-500 w-6 h-6" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="font-heading font-bold text-xl tracking-tight text-white">
                Svwao
              </span>
</a>
<p className="text-sm leading-relaxed mb-6">
              Save Vietnam - We Are One. Tổ chức phi lợi nhuận vì một Việt Nam
              xanh, sạch và bền vững cho thế hệ mai sau.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold font-heading mb-6">
              Liên Kết Nhanh
            </h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-brand-500 transition-colors" href="#about">
                  Về Svwao
                </a>
</li>
<li>
<a className="hover:text-brand-500 transition-colors" href="#activities">
                  Dự Án Đang Chạy
                </a>
</li>
<li>
<a className="hover:text-brand-500 transition-colors" href="#">
                  Báo Cáo Tài Chính
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold font-heading mb-6">Liên Hệ</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-brand-500 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>
                  Tầng 5, Tòa nhà Xanh, Quận 1, TP. Hồ Chí Minh, Việt Nam
                </span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-brand-500 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>contact@svwao.org.vn</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-brand-500 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+84 90 123 4567</span>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white font-bold font-heading mb-6">Bản Tin</h4>
<p className="text-sm mb-4">
              Đăng ký để nhận thông tin cập nhật hàng tháng.
            </p>
<form className="flex flex-col gap-3">
<input className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-brand-500 outline-none" placeholder="Email của bạn" type="email"/>
<button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                Đăng Ký
              </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Svwao Organization. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Điều khoản sử dụng</a>
<a className="hover:text-white" href="#">Chính sách bảo mật</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
