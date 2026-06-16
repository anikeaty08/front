import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
orange: {
100: '#ffedd5', // Background
200: '#fed7aa', // Border
500: '#f97316', // Accent
}
},
fontFamily: {
quicksand: ['Quicksand', 'sans-serif'],
nunito: ['Nunito', 'sans-serif'],
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
          // Scroll Observer for Animations
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('in-view');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.scroll-trigger').forEach(el => {
              observer.observe(el);
          });

          // Trigger Hero manually on load
          document.querySelector('header').classList.add('in-view');

          // Carousel Logic
          const track = document.getElementById('carouselTrack');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');
          const scrollAmount = 400; // Scroll distance

          if(track && prevBtn && nextBtn) {
              prevBtn.addEventListener('click', () => {
                  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              });

              nextBtn.addEventListener('click', () => {
                  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              });
          }

          // Flashlight Effect Logic
          const flashlightRows = document.querySelectorAll('.flashlight-row');
          flashlightRows.forEach(row => {
              row.addEventListener('mousemove', (e) => {
                  const rect = row.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  row.style.setProperty('--mouse-x', `${x}px`);
                  row.style.setProperty('--mouse-y', `${y}px`);
              });
          });
      });

      // Modal Logic
      const modal = document.getElementById('listingModal');
      const images = {
          '1PN': 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout1pn_52m2_ch16.jpg',
          '2PN': 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout2pn_ch03_ch06.jpg',
          '2PN+': 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout2pn_ch03_ch06.jpg',
          '3PN': 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout3pn_ch01_ch05.jpg',
          'default': 'https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout1pn_52m2_ch16.jpg'
      };

      function openModal(data) {
          document.getElementById('modalTitle').textContent = data.type;
          document.getElementById('modalType').textContent = data.type;
          document.getElementById('modalArea').textContent = data.area + ' m²';
          document.getElementById('modalView').textContent = data.view;
          document.getElementById('modalPrice').textContent = data.price;

          // Image selection logic
          const imgUrl = images[data.type] || images['default'];
          document.getElementById('modalImage').src = imgUrl;

          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }

      function closeModal() {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = ''; // Restore scrolling
      }

      // Docs Section Tabs Logic
      function switchTab(id) {
          // Remove active state from all buttons
          document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.classList.remove('active');
          });
          // Add active state to clicked button
          document.getElementById('tab-btn-' + id).classList.add('active');

          // Hide all tab content on desktop
          document.querySelectorAll('.tab-content').forEach(content => {
              content.classList.remove('md:block');
              content.classList.add('hidden'); // Reset to hidden
          });

          // Show target content on desktop
          const target = document.getElementById('content-' + id);
          target.classList.remove('hidden');
          target.classList.add('md:block');
      }

      function toggleAccordion(btn) {
          const content = btn.nextElementSibling;
          const expanded = btn.getAttribute('aria-expanded') === 'true';

          // Toggle current
          btn.setAttribute('aria-expanded', !expanded);
          content.classList.toggle('hidden');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center py-4 md:py-6">
<div className="flex items-center gap-2 text-white glass-panel px-4 py-2 rounded-full shadow-xl">
<iconify-icon height="24" icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-quicksand font-semibold text-sm tracking-tighter uppercase">
          Masteri Park Place
        </span>
</div>
<div className="hidden md:flex gap-6 text-white/90 text-sm font-semibold tracking-tight">
<a className="hover:text-white transition-colors" href="#">Tổng quan</a>
<a className="hover:text-white transition-colors" href="#">Vị trí</a>
<a className="hover:text-white transition-colors" href="#">Tiện ích</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden scroll-trigger in-view">

<div className="absolute inset-0 z-0">
<img alt="Masteri Park Place Background" className="w-full h-full object-cover object-center" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_phoicanhtongthi.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>

<div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-12">
<h1 className="font-quicksand font-normal md:text-6xl text-white tracking-tight leading-tight mb-4 text-4xl">
<span className="animate-element delay-1 inline-block">Masteri</span>
<span className="animate-element delay-2 inline-block">Park</span>
<span className="animate-element delay-3 inline-block">Place</span>
</h1>
<p className="font-nunito text-xl md:text-2xl text-white/90 font-light mb-6 animate-element delay-4">
          Sống đầy mỗi bình minh — Live fully with every sunrise
        </p>
<div className="font-nunito text-sm md:text-base text-white/80 max-w-2xl whitespace-pre-line leading-relaxed mb-10 animate-element delay-5">
          Masteri Park Place tọa lạc tại trung tâm khu đô thị phức hợp The
          Global City (An Phú, TP. Thủ Đức), phát triển bởi Masterise Homes. Dự
          án định hướng kiến tạo phong cách sống quốc tế giữa “siêu đô thị” mới
          của thành phố.
        </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mb-8 md:mb-12 animate-element delay-5">
<div className="glass-panel rounded-2xl p-3 md:p-5 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1 duration-300">
<div className="text-orange-500 mb-2">
<iconify-icon height="32" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">
              Vị trí
            </span>
<span className="text-white text-sm font-semibold">
              Trung tâm The Global City
            </span>
</div>
<div className="glass-panel rounded-2xl p-3 md:p-5 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1 duration-300">
<div className="text-orange-500 mb-2">
<iconify-icon height="32" icon="solar:buildings-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">
              Quy hoạch
            </span>
<span className="text-white text-sm font-semibold">
              4 tòa căn hộ cao cấp
            </span>
</div>
<div className="glass-panel rounded-2xl p-3 md:p-5 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1 duration-300 col-span-2 md:col-span-1">
<div className="text-orange-500 mb-2">
<iconify-icon height="32" icon="solar:calendar-date-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">
              Bàn giao
            </span>
<span className="text-white text-sm font-semibold">Dự kiến 2028</span>
</div>
</div>
<a className="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-quicksand font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 animate-element delay-5" href="#section-2">
<span className="">Cuộn xem thông tin dự án</span>
<iconify-icon className="transition-transform group-hover:translate-y-1" height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</div>
</header>

<section className="px-6 bg-orange-100 scroll-trigger py-16 md:py-24" id="section-2">
<div className="container mx-auto max-w-6xl">

<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight mb-4">
<span className="animate-element delay-1 inline-block">Thông</span>
<span className="animate-element delay-2 inline-block">số</span>
<span className="animate-element delay-3 inline-block">nhanh</span>
</h2>
<p className="font-nunito text-xl md:text-2xl text-slate-600 mb-6 font-light animate-element delay-4">
            Các con số cốt lõi của Masteri Park Place
          </p>
<p className="font-nunito text-xs md:text-sm text-slate-500 leading-relaxed animate-element delay-5">
            Tổng quan quy mô được công bố cho phân khu Masteri Park Place tại
            The Global City.
          </p>
</div>

<div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-200 mb-12 animate-element delay-1">
<img alt="Flycam Masteri Park Place" className="w-full h-64 md:h-[420px] object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_quimo_flycam.jpg"/>
</div>

<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-1">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:map-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              3,12 ha
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Quy mô khu đất
            </div>
</div>

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-2">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:widget-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              35%
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Mật độ xây dựng
            </div>
</div>

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-3">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:buildings-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              4 tòa
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Số tòa căn hộ
            </div>
</div>

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-1">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:layers-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              23–27 tầng
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Chiều cao
            </div>
</div>

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-2">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:shop-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              3 tầng
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Khối đế thương mại
            </div>
</div>

<div className="bg-white p-4 md:p-8 rounded-2xl border border-orange-200 shadow-xl flex flex-col items-center text-center hover:border-orange-500 transition-colors duration-300 group animate-element delay-3">
<div className="text-orange-500 mb-3 md:mb-5 p-3 md:p-4 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="32" icon="solar:home-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="font-quicksand font-bold text-xl md:text-3xl text-slate-800 mb-1 md:mb-2 tracking-tight">
              ~1.728 căn
            </div>
<div className="font-nunito text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wide">
              Tổng số căn hộ
            </div>
</div>
</div>
</div>
</section>

<section className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24" id="about">
<div className="container mx-auto max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-10">
<div className="space-y-3">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none">
<span className="animate-element delay-1 inline-block">Tổng</span>
<span className="animate-element delay-2 inline-block">quan</span>
<span className="animate-element delay-3 inline-block">dự</span>
<span className="animate-element delay-4 inline-block">án</span>
</h2>
<h3 className="md:text-2xl animate-element delay-5 text-xl font-normal text-slate-600 tracking-tight font-quicksand">Urban International Living giữa
The Global City</h3>
</div>
<div className="font-nunito text-sm md:text-sm text-slate-500 leading-relaxed space-y-4 animate-element delay-5">
<p className="">
                Masteri Park Place là phân khu căn hộ cao cấp tại trung tâm khu
                đô thị phức hợp The Global City, An Phú, TP. Thủ Đức, TP.HCM;
                chủ đầu tư Masterise Homes.
              </p>
<p className="">
                Dự án phát triển theo ngôn ngữ thiết kế “Urban International
                Living”, chú trọng tối ưu hóa không gian và cá nhân hóa trải
                nghiệm sống. Mặt bằng các tòa căn hộ theo mô hình chữ Z, tối ưu
                tầm nhìn ra sông và kênh đào.
              </p>
<p>
                Quy hoạch gồm 4 tòa căn hộ cao 23–27 tầng, khối đế thương mại 3
                tầng liên thông và 1 tòa văn phòng hạng sang.
              </p>
</div>

<div className="grid grid-cols-1 gap-3 animate-element delay-5">
<div className="group flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl shadow-xl border border-orange-200 hover:border-orange-500 transition-all duration-300">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:sparkles-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-sm mb-0.5">
                    Định hướng
                  </div>
<div className="font-nunito text-xs text-slate-500">
                    Phong cách sống quốc tế giữa “siêu đô thị” mới
                  </div>
</div>
</div>
<div className="group flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl shadow-xl border border-orange-200 hover:border-orange-500 transition-all duration-300">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:pen-tool-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-sm mb-0.5">
                    Thiết kế
                  </div>
<div className="font-nunito text-xs text-slate-500">
                    Mặt bằng chữ Z, tối ưu tầm nhìn
                  </div>
</div>
</div>
<div className="group flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl shadow-xl border border-orange-200 hover:border-orange-500 transition-all duration-300">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:briefcase-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-sm mb-0.5">
                    Bổ sung
                  </div>
<div className="font-nunito text-xs text-slate-500">
                    1 tòa văn phòng hạng sang
                  </div>
</div>
</div>
</div>
</div>

<div className="relative animate-element delay-3 h-full flex items-center">
<div className="w-full bg-white rounded-xl shadow-xl border border-orange-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">

<div className="bg-orange-50/80 backdrop-blur-sm border-b border-orange-200 p-3 flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
<div className="ml-4 w-full max-w-[200px] h-4 bg-orange-100/50 rounded-full"></div>
</div>

<div className="relative overflow-hidden aspect-[4/3] group">
<img alt="Mặt bằng Masteri Park Place" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tienich_tientichtongthe_matbangduan.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24" id="location">
<div className="container mx-auto max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1 space-y-10">
<div className="space-y-3">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none">
<span className="animate-element delay-1 inline-block">Vị</span>
<span className="animate-element delay-2 inline-block">trí</span>
<span className="animate-element delay-3 inline-block">&amp;</span>
<span className="animate-element delay-4 inline-block">kết</span>
<span className="animate-element delay-5 inline-block">nối</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 tracking-tight animate-element delay-5">
                Trung tâm The Global City — kết nối nhanh Thảo Điền, Thủ Thiêm
                và các trục hạ tầng lớn
              </h3>
</div>
<div className="font-nunito text-xs md:text-sm text-slate-500 leading-relaxed whitespace-pre-line animate-element delay-5">
              Masteri Park Place nằm tại trung tâm The Global City, mặt tiền
              đường Đỗ Xuân Hợp, thuộc khu vực trọng điểm phát triển phía Đông
              TP.HCM. Từ dự án, cư dân thuận tiện di chuyển 5–10 phút đến Thảo
              Điền và Thủ Thiêm; kết nối nhanh các tuyến trọng điểm như cao tốc
              TP.HCM – Long Thành – Dầu Giây, Vành đai 2, Vành đai 3 và nút giao
              An Phú. Theo thông tin vận hành Metro số 1 Bến Thành – Suối Tiên,
              tuyến metro đã vận hành thương mại từ 22/12/2024; dự án được nhắc
              đến với kết nối gần ga Metro An Phú (Line 1) và phương án shuttle
              kết nối.
            </div>

<div className="grid grid-cols-2 gap-3 animate-element delay-5">
<div className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 border border-orange-200 rounded-xl bg-white/50 backdrop-blur-sm hover:border-orange-500 transition-colors shadow-sm">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-quicksand font-semibold text-slate-800 text-sm">
                    Thảo Điền
                  </span>
<span className="font-nunito text-xs text-slate-500">
                    5–10 phút
                  </span>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 border border-orange-200 rounded-xl bg-white/50 backdrop-blur-sm hover:border-orange-500 transition-colors shadow-sm">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-quicksand font-semibold text-slate-800 text-sm">
                    Thủ Thiêm
                  </span>
<span className="font-nunito text-xs text-slate-500">
                    5–10 phút
                  </span>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 border border-orange-200 rounded-xl bg-white/50 backdrop-blur-sm hover:border-orange-500 transition-colors shadow-sm col-span-2">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:plane-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-quicksand font-semibold text-slate-800 text-sm">
                    Sân bay Long Thành / TSN
                  </span>
<span className="font-nunito text-xs text-slate-500">
                    Khoảng 30 phút
                  </span>
</div>
</div>
<div className="group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 border border-orange-200 rounded-xl bg-white/50 backdrop-blur-sm hover:border-orange-500 transition-colors shadow-sm col-span-2">
<div className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:route-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-quicksand font-semibold text-slate-800 text-sm">
                    Kết nối vùng
                  </span>
<span className="font-nunito text-xs text-slate-500">
                    Cao tốc + Vành đai 2/3 + nút giao An Phú
                  </span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 h-full flex items-center animate-element delay-3">
<div className="w-full bg-white rounded-xl shadow-xl border border-orange-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">

<div className="bg-orange-50/80 backdrop-blur-sm border-b border-orange-200 p-3 flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
<div className="ml-4 w-full max-w-[200px] h-4 bg-orange-100/50 rounded-full"></div>
</div>

<div className="relative overflow-hidden aspect-[4/3] lg:aspect-[3/4] group">
<img alt="Bản đồ vị trí Masteri Park Place" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_vitri_bandovitri_ketnoigt.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger md:py-24 bg-orange-100 border-orange-200/50 border-t pt-6 pr-6 pb-6 pl-6" id="gallery">
<div className="container mx-auto max-w-6xl flex flex-col items-center">

<div className="text-center max-w-4xl mx-auto mb-16">

<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none mb-6">
<span className="animate-word delay-1 inline-block">Hệ</span>
<span className="animate-word delay-2 inline-block">tiện</span>
<span className="animate-word delay-3 inline-block">ích</span>
<span className="animate-word delay-4 inline-block">&amp;</span>
<span className="animate-word delay-5 inline-block">phong</span>
<span className="animate-word delay-6 inline-block">cách</span>
<span className="animate-word delay-7 inline-block">sống</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 mb-6 animate-element delay-3">
            Hơn 30 tiện ích nội – ngoại khu, chuẩn quốc tế tại The Global City
          </h3>
<div className="leading-relaxed whitespace-pre-line animate-element delay-4 md:text-sm text-xs text-slate-500 font-nunito text-left max-w-3xl mr-auto ml-auto">Masteri Park Place sở hữu hệ tiện ích đa lớp: thư viện, sảnh đón tiếp, gym, yoga, không gian thiếu niên &amp; trẻ em; cùng loạt tiện ích ngoài trời như hồ bơi phong cách resort, công viên ven sông, khu BBQ, sân tennis, vườn hoa bốn mùa, sàn yoga ngoài trời, cabanas và đường chạy bộ. Cư dân đồng thời thừa hưởng hệ sinh thái “all-in-one” của The Global City: công viên bờ sông, công viên Vịnh Tình Yêu, cầu Ánh Trăng, kênh đào nhạc nước, trung tâm thương mại 123.000 m², trường học quốc tế, khu thể thao và dãy phố thương mại SOHO.</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full mb-10 md:mb-16 animate-element delay-5">
<div className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-5 border border-orange-200 shadow-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 hover:border-orange-500 transition-colors duration-300">
<div className="p-2 md:p-3 bg-orange-500 text-white rounded-xl md:rounded-2xl flex-shrink-0">
<iconify-icon height="20" icon="solar:water-sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-xs md:text-sm">
                Hồ bơi
              </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                Phong cách resort
              </div>
</div>
</div>
<div className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-5 border border-orange-200 shadow-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 hover:border-orange-500 transition-colors duration-300">
<div className="p-2 md:p-3 bg-orange-500 text-white rounded-xl md:rounded-2xl flex-shrink-0">
<iconify-icon height="20" icon="solar:dumbbell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-xs md:text-sm">
                Sức khỏe
              </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                Gym, yoga
              </div>
</div>
</div>
<div className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-5 border border-orange-200 shadow-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 hover:border-orange-500 transition-colors duration-300">
<div className="p-2 md:p-3 bg-orange-500 text-white rounded-xl md:rounded-2xl flex-shrink-0">
<iconify-icon height="20" icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-xs md:text-sm">
                Ngoài trời
              </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                Công viên, cabanas
              </div>
</div>
</div>
<div className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-3 md:p-5 border border-orange-200 shadow-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 hover:border-orange-500 transition-colors duration-300">
<div className="p-2 md:p-3 bg-orange-500 text-white rounded-xl md:rounded-2xl flex-shrink-0">
<iconify-icon height="20" icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="font-quicksand font-semibold text-slate-800 text-xs md:text-sm">
                Tiện ích đô thị
              </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                TTTM + SOHO
              </div>
</div>
</div>
</div>

<div className="w-full relative group/carousel animate-element delay-5">

<button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md text-orange-500 p-3 rounded-full shadow-lg border border-orange-200 hover:scale-110 transition-transform hidden md:flex items-center justify-center" id="prevBtn">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md text-orange-500 p-3 rounded-full shadow-lg border border-orange-200 hover:scale-110 transition-transform hidden md:flex items-center justify-center" id="nextBtn">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:px-0 scroll-smooth pr-6 pb-6 pl-6 gap-x-6 gap-y-6" id="carouselTrack">

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Hồ bơi nội khu" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tienich_hoboi_noikhu.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Hồ bơi nội khu phong cách resort
                </span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Sảnh đón tiếp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_thietke_sanhchung_hoboi_phonggym.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Sảnh đón tiếp, hồ bơi và gym
                </span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Đường dạo ven kênh" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tienich_tienichngoaitroi_sanhlounge.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Đường dạo ven kênh &amp; lounge
                </span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Thiết kế sảnh chung" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_thietke_sanhchung.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Thiết kế sảnh chung sang trọng
                </span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Mặt bằng tiện ích" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tienich_tientichtongthe_matbangduan.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Mặt bằng tổng thể tiện ích
                </span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] h-[300px] md:h-[350px] snap-center relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 group flex-shrink-0">
<img alt="Không gian sống" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_phoicanhtongthi_khonggiansong_ho.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white font-quicksand font-semibold text-lg">
                  Không gian sống bên hồ trung tâm
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-trigger md:py-24 bg-orange-100 border-orange-200/50 border-t pt-16 pr-6 pb-16 pl-6" id="explore">
<div className="container mx-auto max-w-6xl flex flex-col items-center">

<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none mb-6">
<span className="animate-word delay-1 inline-block">Danh</span>
<span className="animate-word delay-2 inline-block">mục</span>
<span className="animate-word delay-3 inline-block">căn</span>
<span className="animate-word delay-4 inline-block">hộ</span>
<span className="animate-word delay-5 inline-block">(tham</span>
<span className="animate-word delay-6 inline-block">khảo</span>
<span className="animate-word delay-7 inline-block">theo</span>
<span className="animate-word delay-8 inline-block">loại</span>
<span className="animate-word delay-9 inline-block">căn)</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 mb-6 animate-element delay-3">
            Bộ lọc theo loại căn – phòng ngủ – diện tích – tầm nhìn – khoảng giá
          </h3>
<div className="font-nunito text-xs md:text-sm text-slate-500 leading-relaxed whitespace-pre-line animate-element delay-4 max-w-3xl mx-auto">
            Masteri Park Place phát triển đa dạng dòng sản phẩm: căn hộ 1–4
            phòng ngủ, Duplex, Penthouse, Penthouse Duplex và shophouse tại khối
            đế. Bảng dưới đây trình bày danh mục theo loại căn và khoảng giá
            tham khảo (giá có thể thay đổi theo vị trí, tầng, hướng view và thời
            điểm mở bán chính thức).
          </div>
</div>

<div className="w-full bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden flex flex-col animate-element delay-5">

<div className="bg-orange-50/80 backdrop-blur-sm border-b border-orange-200 p-4 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="ml-4 w-full max-w-[300px] h-5 bg-orange-100/50 rounded-full"></div>
</div>

<div className="flex flex-col">

<div className="w-full h-48 md:h-64 relative overflow-hidden">
<img alt="Mặt bằng tầng điển hình" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_flycam_matbangtangdienhinh.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="bg-white border-b border-orange-200 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex items-center gap-4">
<div className="p-3 bg-orange-100 text-orange-500 rounded-full">
<iconify-icon height="24" icon="solar:home-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="font-nunito text-xs text-slate-500 uppercase tracking-wide">
                    Loại căn
                  </div>
<div className="font-quicksand font-bold text-slate-800">
                    1–4PN, Duplex, Penthouse
                  </div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-orange-100 text-orange-500 rounded-full">
<iconify-icon height="24" icon="solar:ruler-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="font-nunito text-xs text-slate-500 uppercase tracking-wide">
                    Diện tích căn hộ tiêu chuẩn
                  </div>
<div className="font-quicksand font-bold text-slate-800">
                    48–150 m² (tùy loại)
                  </div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-orange-100 text-orange-500 rounded-full">
<iconify-icon height="24" icon="solar:tag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="font-nunito text-xs text-slate-500 uppercase tracking-wide">
                    Giá tham khảo 2025
                  </div>
<div className="font-quicksand font-bold text-slate-800">
                    125–145 triệu/m² (đã gồm VAT &amp; KPBT)
                  </div>
</div>
</div>
</div>

<div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-200 p-4 md:p-6 shadow-sm">
<div className="flex flex-col lg:flex-row gap-6 justify-between">

<div className="flex flex-wrap gap-4 items-end flex-grow">
<div className="flex flex-col gap-1">
<label className="font-nunito text-xs font-bold text-slate-500">
                      Loại căn
                    </label>
<select className="bg-orange-50 border border-orange-200 text-slate-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 font-quicksand font-semibold outline-none cursor-pointer hover:bg-white transition-colors">
<option>Tất cả</option>
<option>1PN</option>
<option>2PN</option>
<option>2PN+</option>
<option>3PN</option>
<option>4PN</option>
<option>Duplex</option>
<option>Penthouse</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-nunito text-xs font-bold text-slate-500">
                      Số phòng ngủ
                    </label>
<select className="bg-orange-50 border border-orange-200 text-slate-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 font-quicksand font-semibold outline-none cursor-pointer hover:bg-white transition-colors">
<option>Tất cả</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-nunito text-xs font-bold text-slate-500">
                      Tầm nhìn
                    </label>
<select className="bg-orange-50 border border-orange-200 text-slate-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 font-quicksand font-semibold outline-none cursor-pointer hover:bg-white transition-colors">
<option>Tất cả</option>
<option>Sông/kênh đào</option>
<option>Nhạc nước</option>
<option>Nội khu/hồ bơi</option>
</select>
</div>
<div className="flex flex-col gap-1 w-full md:w-40">
<label className="font-nunito text-xs font-bold text-slate-500">
                      Diện tích (48-150m²)
                    </label>
<input className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer" max="150" min="48" type="range" value="48"/>
</div>
<div className="flex flex-col gap-1 w-full md:w-40">
<label className="font-nunito text-xs font-bold text-slate-500">
                      Khoảng giá
                    </label>
<input className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer" type="range"/>
</div>
</div>

<div className="flex flex-col gap-1 lg:items-end">
<label className="font-nunito text-xs font-bold text-slate-500">
                    Sắp xếp
                  </label>
<select className="bg-white border border-orange-200 text-slate-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 font-quicksand font-semibold outline-none cursor-pointer shadow-sm">
<option>Giá thấp→cao</option>
<option>Diện tích</option>
<option>Mới nhất</option>
</select>
</div>
</div>
</div>

<div className="bg-orange-50/30 p-4 md:p-6 min-h-[400px]">

<div className="hidden md:block overflow-x-auto rounded-xl border border-orange-200 shadow-sm bg-white">
<table className="w-full text-left">
<thead className="bg-orange-100/50 text-slate-700 font-quicksand font-bold text-sm">
<tr>
<th className="px-6 py-4">Loại căn</th>
<th className="px-6 py-4">PN</th>
<th className="px-6 py-4">Diện tích (m²)</th>
<th className="px-6 py-4">View (tag)</th>
<th className="px-6 py-4">Khoảng giá tham khảo</th>
<th className="px-6 py-4">Trạng thái</th>
</tr>
</thead>
<tbody className="font-nunito text-sm text-slate-600 divide-y divide-orange-100">

<tr className="flashlight-row group cursor-pointer hover:bg-orange-50/50 transition-all hover:shadow-md hover:-translate-y-0.5" onclick="openModal({type: '1PN', pn: 1, area: '48 - 52', view: 'Nội khu', price: '~6 - 7 tỷ', status: 'Đang cập nhật giỏ hàng'})">
<td className="px-6 py-4 font-bold text-slate-800">
                        Căn hộ 1PN
                      </td>
<td className="px-6 py-4">1</td>
<td className="px-6 py-4">48 - 52</td>
<td className="px-6 py-4">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                          Nội khu
                        </span>
</td>
<td className="px-6 py-4 font-semibold text-orange-600">
                        ~6 - 7 tỷ
                      </td>
<td className="px-6 py-4 text-slate-400 italic">
                        Đang cập nhật giỏ hàng
                      </td>
</tr>

<tr className="flashlight-row group cursor-pointer hover:bg-orange-50/50 transition-all hover:shadow-md hover:-translate-y-0.5" onclick="openModal({type: '2PN', pn: 2, area: '68 - 72', view: 'Sông', price: '~9 - 10 tỷ', status: 'Đang cập nhật giỏ hàng'})">
<td className="px-6 py-4 font-bold text-slate-800">
                        Căn hộ 2PN
                      </td>
<td className="px-6 py-4">2</td>
<td className="px-6 py-4">68 - 72</td>
<td className="px-6 py-4">
<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                          Sông
                        </span>
</td>
<td className="px-6 py-4 font-semibold text-orange-600">
                        ~9 - 10 tỷ
                      </td>
<td className="px-6 py-4 text-slate-400 italic">
                        Đang cập nhật giỏ hàng
                      </td>
</tr>

<tr className="flashlight-row group cursor-pointer hover:bg-orange-50/50 transition-all hover:shadow-md hover:-translate-y-0.5" onclick="openModal({type: '2PN+', pn: 2, area: '78 - 82', view: 'Nhạc nước', price: '~11 - 12 tỷ', status: 'Đang cập nhật giỏ hàng'})">
<td className="px-6 py-4 font-bold text-slate-800">
                        Căn hộ 2PN+
                      </td>
<td className="px-6 py-4">2</td>
<td className="px-6 py-4">78 - 82</td>
<td className="px-6 py-4">
<span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">
                          Nhạc nước
                        </span>
</td>
<td className="px-6 py-4 font-semibold text-orange-600">
                        ~11 - 12 tỷ
                      </td>
<td className="px-6 py-4 text-slate-400 italic">
                        Đang cập nhật giỏ hàng
                      </td>
</tr>

<tr className="flashlight-row group cursor-pointer hover:bg-orange-50/50 transition-all hover:shadow-md hover:-translate-y-0.5" onclick="openModal({type: '3PN', pn: 3, area: '98 - 110', view: 'Panorama', price: '~14 - 16 tỷ', status: 'Đang cập nhật giỏ hàng'})">
<td className="px-6 py-4 font-bold text-slate-800">
                        Căn hộ 3PN
                      </td>
<td className="px-6 py-4">3</td>
<td className="px-6 py-4">98 - 110</td>
<td className="px-6 py-4">
<span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
                          Panorama
                        </span>
</td>
<td className="px-6 py-4 font-semibold text-orange-600">
                        ~14 - 16 tỷ
                      </td>
<td className="px-6 py-4 text-slate-400 italic">
                        Đang cập nhật giỏ hàng
                      </td>
</tr>
</tbody>
</table>
</div>

<div className="md:hidden grid grid-cols-1 gap-4">

<div className="flashlight-row bg-white rounded-xl p-5 border border-orange-200 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-3" onclick="openModal({type: '1PN', pn: 1, area: '48 - 52', view: 'Nội khu', price: '~6 - 7 tỷ', status: 'Đang cập nhật giỏ hàng'})" style={{-MouseX: '21.200000762939453px', -MouseY: '139px'}}>
<div className="flex justify-between items-start">
<div>
<h4 className="font-quicksand font-bold text-lg text-slate-800">
                        Căn hộ 1PN
                      </h4>
<span className="font-nunito text-xs text-slate-500">
                        1 Phòng ngủ • 48-52m²
                      </span>
</div>
<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                      Nội khu
                    </span>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-orange-600 font-bold font-quicksand">
                      ~6 - 7 tỷ
                    </div>
<div className="text-xs text-slate-400 italic">
                      Đang cập nhật giỏ hàng
                    </div>
</div>
</div>

<div className="flashlight-row bg-white rounded-xl p-5 border border-orange-200 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-3" onclick="openModal({type: '2PN', pn: 2, area: '68 - 72', view: 'Sông', price: '~9 - 10 tỷ', status: 'Đang cập nhật giỏ hàng'})" style={{-MouseX: '25.200000762939453px', -MouseY: '105px'}}>
<div className="flex justify-between items-start">
<div>
<h4 className="font-quicksand font-bold text-lg text-slate-800">
                        Căn hộ 2PN
                      </h4>
<span className="font-nunito text-xs text-slate-500">
                        2 Phòng ngủ • 68-72m²
                      </span>
</div>
<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                      Sông
                    </span>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-orange-600 font-bold font-quicksand">
                      ~9 - 10 tỷ
                    </div>
<div className="text-xs text-slate-400 italic">
                      Đang cập nhật giỏ hàng
                    </div>
</div>
</div>

<div className="flashlight-row bg-white rounded-xl p-5 border border-orange-200 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col gap-3" onclick="openModal({type: '3PN', pn: 3, area: '98 - 110', view: 'Panorama', price: '~14 - 16 tỷ', status: 'Đang cập nhật giỏ hàng'})">
<div className="flex justify-between items-start">
<div>
<h4 className="font-quicksand font-bold text-lg text-slate-800">
                        Căn hộ 3PN
                      </h4>
<span className="font-nunito text-xs text-slate-500">
                        3 Phòng ngủ • 98-110m²
                      </span>
</div>
<span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
                      Panorama
                    </span>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-orange-600 font-bold font-quicksand">
                      ~14 - 16 tỷ
                    </div>
<div className="text-xs text-slate-400 italic">
                      Đang cập nhật giỏ hàng
                    </div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="hover:border-orange-500 hover:text-orange-500 transition-all hover:-translate-y-1 flex gap-2 font-semibold text-slate-600 font-quicksand bg-white border-orange-200 border rounded-full pt-2 pr-6 pb-2 pl-6 shadow-sm gap-x-2 gap-y-2 items-center">
<span className="">Xem thêm</span>
<iconify-icon height="18" icon="solar:refresh-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<a className="mt-8 inline-flex items-center gap-2 text-orange-600 font-quicksand font-bold hover:text-orange-500 hover:underline transition-colors" href="#section-7">
<span>Xem mặt bằng theo loại căn</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24" id="section-7">
<div className="container mx-auto max-w-6xl">

<div className="text-center max-w-4xl mx-auto mb-16">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none mb-6">
<span className="animate-word delay-1 inline-block">Mặt</span>
<span className="animate-word delay-2 inline-block">bằng</span>
<span className="animate-word delay-3 inline-block">&amp;</span>
<span className="animate-word delay-4 inline-block">loại</span>
<span className="animate-word delay-5 inline-block">căn</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 mb-6 animate-element delay-3">
            Danh mục 1–4PN, 2PN+ và các dòng Duplex/Penthouse
          </h3>
<div className="font-nunito text-xs md:text-sm text-slate-500 leading-relaxed whitespace-pre-line animate-element delay-4 max-w-3xl mx-auto">
            Căn hộ tiêu chuẩn gồm: 1PN (48–56 m²), 2PN (66–81 m²), 3PN (90–128
            m²), 4PN (110–150 m²). Dòng sản phẩm cao cấp gồm Duplex, Penthouse,
            Penthouse Duplex với diện tích lên đến 258,8 m².
          </div>

<div className="flex flex-wrap justify-center gap-4 mt-8 animate-element delay-5">
<div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full border border-orange-200 shadow-sm">
<div className="text-orange-500">
<iconify-icon height="24" icon="solar:bed-double-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="font-nunito text-[10px] text-slate-500 uppercase tracking-wide">
                  Căn tiêu chuẩn
                </div>
<div className="font-quicksand font-bold text-slate-800 text-sm">
                  1–4 phòng ngủ
                </div>
</div>
</div>
<div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full border border-orange-200 shadow-sm">
<div className="text-orange-500">
<iconify-icon height="24" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="font-nunito text-[10px] text-slate-500 uppercase tracking-wide">
                  Diện tích lớn nhất
                </div>
<div className="font-quicksand font-bold text-slate-800 text-sm">
                  Lên đến 258,8 m²
                </div>
</div>
</div>
</div>
</div>

<div className="w-full bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden animate-element delay-5 flex flex-col">

<div className="bg-orange-50/80 backdrop-blur-sm border-b border-orange-200 p-4 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="ml-4 w-full max-w-[300px] h-5 bg-orange-100/50 rounded-full"></div>
</div>

<div className="w-full h-48 md:h-80 relative bg-orange-50">
<img alt="Mặt bằng tổng thể" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_matbangcanho_1pn_duplex_penthouse.jpg"/>
</div>

<div className="hidden md:flex border-b border-orange-200 bg-orange-50/50 overflow-x-auto">
<button className="tab-btn active px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-1pn" onclick="switchTab('1pn')">
              1PN
            </button>
<button className="tab-btn px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-2pn" onclick="switchTab('2pn')">
              2PN
            </button>
<button className="tab-btn px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-2pnplus" onclick="switchTab('2pnplus')">
              2PN+
            </button>
<button className="tab-btn px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-3pn" onclick="switchTab('3pn')">
              3PN
            </button>
<button className="tab-btn px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-4pn" onclick="switchTab('4pn')">
              4PN
            </button>
<button className="tab-btn px-6 py-4 font-quicksand font-bold text-slate-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all flex-shrink-0" id="tab-btn-duplex" onclick="switchTab('duplex')">
              Duplex &amp; Penthouse
            </button>
</div>

<div className="bg-white min-h-[400px]">

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="false" className="md:hidden flex hover:bg-orange-50 transition-colors accordion-btn bg-white w-full pt-5 pr-5 pb-5 pl-5 items-center justify-between" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  1PN
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content hidden md:block p-6 md:p-10 accordion-content" id="content-1pn">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout1pn_ch03a_ch05.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Căn hộ 1 Phòng ngủ
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">48–56 m²</span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="true" className="md:hidden w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition-colors accordion-btn" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  2PN
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content p-6 md:p-10 accordion-content" id="content-2pn">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout2pn_ch03_ch06.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Căn hộ 2 Phòng ngủ
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">66–81 m²</span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="true" className="md:hidden w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition-colors accordion-btn" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  2PN+
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content p-6 md:p-10 accordion-content" id="content-2pnplus">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout2pn_76m2_ch10.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Căn hộ 2 Phòng ngủ +
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">76,8 m²</span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="false" className="md:hidden w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition-colors accordion-btn" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  3PN
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content hidden p-6 md:p-10 accordion-content" id="content-3pn">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout3pn_95m2.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Căn hộ 3 Phòng ngủ
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">90–128 m²</span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="false" className="md:hidden w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition-colors accordion-btn" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  4PN
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content hidden p-6 md:p-10 accordion-content" id="content-4pn">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_layout4pn_ch01_ch08.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Căn hộ 4 Phòng ngủ
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">110–150 m²</span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-orange-100 md:border-none">
<button aria-expanded="false" className="md:hidden w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition-colors accordion-btn" onclick="toggleAccordion(this)">
<span className="text-sm font-bold text-slate-800 font-quicksand">
                  Duplex &amp; Penthouse
                </span>
<iconify-icon className="accordion-icon text-orange-500" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="tab-content hidden p-6 md:p-10 accordion-content" id="content-duplex">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-orange-50 rounded-xl p-4 border border-orange-100 flex justify-center">
<img className="w-full h-auto object-contain max-h-[400px]" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_layout_matbangcanho_1pn_duplex_penthouse.jpg"/>
</div>
<div className="space-y-6">
<h4 className="font-quicksand font-bold text-3xl text-slate-800">
                      Duplex &amp; Penthouse
                    </h4>
<div className="space-y-2">
<p className="font-nunito text-slate-600">
                        Diện tích:
                        <span className="font-bold text-slate-800">
                          lên đến 258,8 m²
                        </span>
</p>
<p className="font-nunito text-xs text-slate-400 italic">
                        diện tích/biến thể có thể thay đổi theo mã căn/tòa/tầng
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24" id="payment">
<div className="container mx-auto max-w-5xl">

<div className="flex justify-center mb-8">
<span className="bg-orange-200/50 text-orange-600 font-nunito font-bold text-xs tracking-wider px-4 py-2 rounded-full uppercase animate-element delay-1">
            THAM KHẢO / CÓ THỂ CẬP NHẬT
          </span>
</div>

<div className="text-center mb-12">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none mb-4">
<span className="animate-word delay-1 inline-block">Giá</span>
<span className="animate-word delay-2 inline-block">bán</span>
<span className="animate-word delay-3 inline-block">&amp;</span>
<span className="animate-word delay-4 inline-block">phương</span>
<span className="animate-word delay-5 inline-block">án</span>
<span className="animate-word delay-6 inline-block">thanh</span>
<span className="animate-word delay-7 inline-block">toán</span>
<span className="animate-word delay-8 inline-block">(tham</span>
<span className="animate-word delay-9 inline-block">khảo)</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 animate-element delay-3">
            Tổng hợp dải giá, ưu đãi và lịch thanh toán tham chiếu
          </h3>
</div>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-element delay-4 flex flex-col lg:flex-row">

<div className="p-8 lg:p-10 flex-1 order-2 lg:order-1">

<div className="md:text-sm leading-relaxed whitespace-pre-line text-xs text-slate-600 font-nunito mb-8 space-y-4">Giá bán tham khảo năm 2025 được công bố theo dải từ khoảng 125–145 triệu đồng/m² (đã gồm VAT và KPBT).
Một số thông tin chính sách ra mắt cũng ghi nhận mức “từ 109 triệu đồng/m²”.
Giá chi tiết tham khảo theo loại căn: Lịch thanh toán chi tiết chưa được công bố chính thức; tài liệu tham chiếu theo chính sách thanh toán chuẩn của Masterise Homes tại các phân khu khác trong The Global City (đặt cọc và chia nhiều đợt đến khi bàn giao/sổ hồng).</div>

<div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-8">

<div className="p-3 md:p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex flex-col md:flex-row gap-2 md:gap-3 items-start">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:percent-linear" width="24"></iconify-icon>
<div>
<div className="font-quicksand font-bold text-slate-800 text-sm">
                    Chiết khấu
                  </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                    1% - 12% (tùy PTTT)
                  </div>
</div>
</div>

<div className="p-3 md:p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex flex-col md:flex-row gap-2 md:gap-3 items-start">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:wallet-linear" width="24"></iconify-icon>
<div className="">
<div className="font-quicksand font-bold text-slate-800 text-sm">
                    Quà tặng
                  </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                    Miễn 24 tháng phí QL
                  </div>
</div>
</div>

<div className="p-3 md:p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex flex-col md:flex-row gap-2 md:gap-3 items-start">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:banknote-linear" width="24"></iconify-icon>
<div className="">
<div className="font-quicksand font-bold text-slate-800 text-sm">
                    Hỗ trợ vay
                  </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                    Vốn 30%, Bank 70%
                  </div>
</div>
</div>

<div className="p-3 md:p-4 rounded-xl bg-orange-50/50 border border-orange-100 flex flex-col md:flex-row gap-2 md:gap-3 items-start">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:calendar-days-linear" width="24"></iconify-icon>
<div className="">
<div className="font-quicksand font-bold text-slate-800 text-sm">
                    Tiến độ
                  </div>
<div className="font-nunito text-[10px] md:text-xs text-slate-500">
                    Thanh toán dãn 9 đợt
                  </div>
</div>
</div>
</div>

<div className="border-t border-orange-100 pt-6">
<div className="font-quicksand font-bold text-slate-800 text-sm mb-4">
                Tiến độ thanh toán chuẩn (tham chiếu)
              </div>
<div className="relative pt-2">

<div className="h-2 bg-orange-100 rounded-full w-full flex overflow-hidden">
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-300 w-[10%] border-r border-white"></div>
<div className="h-full bg-orange-500 w-[25%] border-r border-white"></div>
<div className="h-full bg-orange-600 w-[5%]"></div>
</div>

<div className="flex justify-between mt-2 font-nunito text-[10px] text-slate-400">
<span>Đợt 1-7 (10%/đợt)</span>
<span className="text-orange-600 font-bold">Bàn giao (25%)</span>
<span className="">Sổ hồng (5%)</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/3 relative min-h-[300px] lg:min-h-full order-1 lg:order-2">
<img alt="Payment Info" className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_thongtintonghop.jpg"/>
</div>
</div>
</div>
</section>

<section className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24" id="legal-features">
<div className="container mx-auto max-w-6xl">

<div className="text-center mb-12">
<h2 className="md:text-6xl leading-none text-3xl font-normal text-slate-800 tracking-tight font-quicksand mb-4">
<span className="animate-word delay-1 inline-block">Chủ</span>
<span className="animate-word delay-2 inline-block">đầu</span>
<span className="animate-word delay-3 inline-block">tư</span>
<span className="animate-word delay-4 inline-block">&amp;</span>
<span className="animate-word delay-5 inline-block">pháp</span>
<span className="animate-word delay-6 inline-block">lý</span>
<span className="animate-word delay-7 inline-block">—</span>
<span className="animate-word delay-8 inline-block">nền</span>
<span className="animate-word delay-9 inline-block">tảng</span>
<span className="animate-word delay-10 inline-block">an</span>
<span className="animate-word delay-11 inline-block">tâm</span>
</h2>
<h3 className="md:text-2xl animate-element delay-3 text-base font-normal text-slate-600 font-quicksand">Các điểm tin cậy được công bố
Masteri Park Place</h3>
</div>

<div className="bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden animate-element delay-4">

<div className="w-full h-48 md:h-64 overflow-hidden relative">
<img alt="Thông tin tổng hợp" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_thongtintonghop.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="p-6 md:p-8 lg:p-10">

<div className="font-nunito text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-8">
              Masteri Park Place do Masterise Homes phát triển tại The Global
              City. Về pháp lý, dự án công bố định hướng đáp ứng các yêu cầu
              công khai theo quy định hiện hành về kinh doanh bất động sản tại
              Việt Nam và các hạng mục theo Luật Kinh doanh bất động sản 2023
              (thiết kế được thẩm định, giấy tờ quyền sử dụng đất, bảo lãnh ngân
              hàng, văn bản đủ điều kiện bán nhà ở hình thành trong tương lai,
              công khai các hạn chế/biện pháp bảo đảm nếu có…). Quyền sở hữu
              được nêu: công dân Việt Nam sở hữu lâu dài; người nước ngoài sở
              hữu 50 năm. Thông tin cũng ghi nhận các dự án trước của Masterise
              Homes trong The Global City (như khu nhà phố thương mại SOHO) đã
              hoàn tất bàn giao và nhận sổ hồng đúng tiến độ.
            </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">

<div className="flashlight-row bg-white/50 backdrop-blur-sm border border-orange-200 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden">
<div className="flex flex-col items-start gap-2 md:gap-4">
<div className="text-orange-500">
<iconify-icon height="28" icon="solar:building-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-quicksand font-bold text-sm md:text-lg text-slate-800 mb-1">
                      Chủ đầu tư
                    </h4>
<p className="font-nunito text-[10px] md:text-xs text-slate-500">
                      Masterise Homes
                    </p>
</div>
</div>
</div>

<div className="flashlight-row bg-white/50 backdrop-blur-sm border border-orange-200 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden" style={{-MouseX: '117.19999694824219px', -MouseY: '36.25px'}}>
<div className="flex flex-col items-start gap-2 md:gap-4">
<div className="text-orange-500">
<iconify-icon height="28" icon="solar:key-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-quicksand font-bold text-sm md:text-lg text-slate-800 mb-1">
                      Sở hữu
                    </h4>
<p className="font-nunito text-[10px] md:text-xs text-slate-500">
                      Lâu dài (VN) / 50 năm
                    </p>
</div>
</div>
</div>

<div className="flashlight-row bg-white/50 backdrop-blur-sm border border-orange-200 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden col-span-2 md:col-span-1">
<div className="flex flex-col items-start gap-2 md:gap-4">
<div className="text-orange-500">
<iconify-icon height="28" icon="solar:file-text-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-quicksand font-bold text-sm md:text-lg text-slate-800 mb-1">
                      Pháp lý
                    </h4>
<p className="font-nunito text-[10px] md:text-xs text-slate-500">
                      Tuân thủ luật KDBĐS
                    </p>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flashlight-row bg-white/50 backdrop-blur-sm border border-orange-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4">
<div className="text-orange-500 flex-shrink-0">
<iconify-icon height="32" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<h4 className="font-quicksand font-bold text-lg text-slate-800 mb-1">
                    Cam kết minh bạch
                  </h4>
<p className="font-nunito text-xs md:text-sm text-slate-500">
                    Khuyến nghị yêu cầu xuất trình hồ sơ pháp lý trước giao dịch
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="px-6 bg-orange-100 scroll-trigger border-t border-orange-200/50 py-16 md:py-24">
<div className="container mx-auto max-w-6xl">

<div className="text-center mb-12">
<h2 className="font-quicksand font-normal text-5xl md:text-6xl text-slate-800 tracking-tight leading-none mb-4">
<span className="animate-word delay-1 inline-block">Masteri</span>
<span className="animate-word delay-2 inline-block">Park</span>
<span className="animate-word delay-3 inline-block">Place</span>
<span className="animate-word delay-4 inline-block">—</span>
<span className="animate-word delay-5 inline-block">The</span>
<span className="animate-word delay-6 inline-block">Global</span>
<span className="animate-word delay-7 inline-block">City</span>
</h2>
<h3 className="font-quicksand font-normal text-xl md:text-2xl text-slate-600 animate-element delay-3">
            Kênh thông tin chính thức &amp; liên hệ
          </h3>
</div>

<div className="bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden animate-element delay-4">

<div className="w-full h-48 md:h-64 relative overflow-hidden">
<img alt="Footer Visual" className="w-full h-full object-cover object-center" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/masteri-park-place/masteri-park-place_tongquan_loisong.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>

<div className="p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="space-y-4">
<h4 className="font-quicksand font-bold text-xl text-slate-800">
                  Giới thiệu
                </h4>
<ul className="space-y-3">
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#about">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Tổng quan dự án
                    </a>
</li>
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#location">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Vị trí &amp; kết nối
                    </a>
</li>
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#gallery">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Tiện ích &amp; phong cách sống
                    </a>
</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="font-quicksand font-bold text-xl text-slate-800">
                  Nội dung tham khảo
                </h4>
<ul className="space-y-3">
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#explore">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Danh mục loại căn
                    </a>
</li>
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#section-7">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Mặt bằng &amp; layout
                    </a>
</li>
<li>
<a className="group flex items-center gap-2 font-nunito text-sm text-slate-600 hover:text-orange-500 transition-colors" href="#payment">
<iconify-icon className="text-orange-300 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
                      Giá bán &amp; chính sách (tham khảo)
                    </a>
</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="font-quicksand font-bold text-xl text-slate-800">
                  Liên hệ
                </h4>
<ul className="space-y-3 font-nunito text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:globe-linear"></iconify-icon>
<span>
                      Website:
                      masterisehomes.com/the-global-city/masteri-park-place
                    </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:facebook-linear"></iconify-icon>
<span>Facebook: facebook.com/OfficialMasteriParkPlace</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>
                      Project &amp; Sales Gallery: The Global City, đường Đỗ
                      Xuân Hợp, TP. Thủ Đức, TP.HCM
                    </span>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-6 border-t border-orange-100 text-center">
<p className="font-nunito text-xs text-slate-400">
                Thông tin mang tính tham khảo và có thể thay đổi theo thông báo
                của Chủ đầu tư tại từng thời điểm.
              </p>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="listingModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="flex justify-between items-center p-6 border-b border-orange-100">
<h3 className="font-quicksand font-bold text-2xl text-slate-800" id="modalTitle">
            Chi tiết căn hộ
          </h3>
<button className="text-slate-400 hover:text-orange-500 transition-colors" onclick="closeModal()">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="overflow-y-auto p-6 flex-grow">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-orange-50 rounded-2xl p-4 flex items-center justify-center border border-orange-200">
<img alt="Floor Plan" className="w-full h-auto object-contain max-h-[400px]" id="modalImage" src=""/>
</div>

<div className="space-y-6">
<div className="space-y-4">
<div className="flex justify-between border-b border-orange-100 pb-2">
<span className="text-slate-500 font-nunito">Loại căn</span>
<span className="font-quicksand font-bold text-slate-800" id="modalType"></span>
</div>
<div className="flex justify-between border-b border-orange-100 pb-2">
<span className="text-slate-500 font-nunito">Diện tích</span>
<span className="font-quicksand font-bold text-slate-800" id="modalArea"></span>
</div>
<div className="flex justify-between border-b border-orange-100 pb-2">
<span className="text-slate-500 font-nunito">Tầm nhìn</span>
<span className="font-quicksand font-bold text-slate-800" id="modalView"></span>
</div>
<div className="flex justify-between border-b border-orange-100 pb-2">
<span className="text-slate-500 font-nunito">Giá tham khảo</span>
<span className="font-quicksand font-bold text-orange-600 text-xl" id="modalPrice"></span>
</div>
</div>
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-xs text-blue-700 font-nunito leading-relaxed">
                    Hình ảnh mặt bằng và giá chỉ mang tính chất tham khảo. Vui
                    lòng liên hệ để nhận bảng hàng chính xác nhất cho từng vị
                    trí tầng và hướng.
                  </p>
</div>
</div>
<button className="w-full bg-slate-200 text-slate-400 font-quicksand font-bold py-4 px-6 rounded-xl cursor-not-allowed flex flex-col items-center justify-center gap-1" disabled="">
<span>Liên hệ tư vấn</span>
<span className="text-[10px] font-normal font-nunito">
                  chưa có hotline trong dữ liệu
                </span>
</button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
