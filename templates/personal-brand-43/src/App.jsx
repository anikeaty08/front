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



    (function () {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    })();
  


        // Initialize Icons
    lucide.createIcons();

    // ============================================
    // WEBHOOK CONFIGURATION - DEMO FORM
    // ============================================
    const WEBHOOK_CONFIG = {
        production: 'https://n8n.srv909918.hstgr.cloud/webhook/f309ac8b-b805-45c3-9839-c104fb77ba02',
        test: 'https://n8n.srv909918.hstgr.cloud/webhook-test/f309ac8b-b805-45c3-9839-c104fb77ba02',
        get active() {
            return this.test;
        }
    };

    // ============================================
    // WEBHOOK CONFIGURATION - CONTACT FORM
    // ============================================
    const CONTACT_WEBHOOK_CONFIG = {
        production: 'https://n8n.srv909918.hstgr.cloud/webhook/e9603410-568d-42a1-846f-8ec92774fbbe',
        test: 'https://n8n.srv909918.hstgr.cloud/webhook-test/e9603410-568d-42a1-846f-8ec92774fbbe',
        get active() {
            return this.test;
        }
    };
    // ============================================

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tab Switching Logic
    function openTab(tabName) {
        const allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(content => {
            content.classList.remove('active');
        });

        const selectedContent = document.getElementById('content-' + tabName);
        if(selectedContent) {
            selectedContent.classList.add('active');
        }

        const allButtons = document.querySelectorAll('.tab-btn');
        allButtons.forEach(btn => {
            btn.classList.remove('bg-neutral-50', 'border-neutral-200', 'shadow-sm', 'ring-1', 'ring-neutral-200/50');
            btn.classList.add('border-transparent', 'hover:bg-neutral-50', 'hover:border-neutral-100');
        });

        const activeButton = document.getElementById('btn-' + tabName);
        if(activeButton) {
            activeButton.classList.remove('border-transparent', 'hover:bg-neutral-50', 'hover:border-neutral-100');
            activeButton.classList.add('bg-neutral-50', 'border-neutral-200', 'shadow-sm', 'ring-1', 'ring-neutral-200/50');
        }
    }

    // Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // --- DEMO FORM HANDLER (POST REQUEST) ---
    const demoForm = document.getElementById('demo-form');
    if(demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span></span>
            `;

            // Pobierz dane z formularza
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone')
            };

            // Wyślij jako POST z JSON body
            fetch(WEBHOOK_CONFIG.active, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>System dzwoni!</span>
                `;
                lucide.createIcons();
                this.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 5000);
            })
            .catch(() => {
                submitBtn.innerHTML = '<span>ĐÃ GỬI THÀNH CÔNG.</span>';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 3000);
            });
        });
    }

    // --- CONTACT FORM HANDLER (POST REQUEST) ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Wysyłanie...</span>
            `;

            // Pobierz dane z formularza
            const formData = new FormData(this);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message') || ''
            };

            // Wyślij jako POST z JSON body
            fetch(CONTACT_WEBHOOK_CONFIG.active, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>Wysłano!</span>
                `;
                lucide.createIcons();
                this.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 5000);
            })
            .catch(() => {
                submitBtn.innerHTML = '<span>.</span>';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 3000);
            });
        });
    }
    


        // URL Ứng dụng Web mới của bạn
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwcFWzuMestlpwcVqwurXv52trhAQRKQYyuIUP_PUd6o4neN6x6D5PRLTQrNMy1F5T4/exec';
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Trạng thái khi đang gửi
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>ĐANG GỬI...</span>';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert("Gửi thành công! Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.");
        form.reset(); // Xóa trắng form sau khi gửi
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      })
      .catch(error => {
        console.error('Lỗi hệ thống:', error.message);
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
    


  let tabOrder = ['med', 'estate', 'ecom'];
  let currentIndex = 0;
  let autoPlayTimer;
  let resumeTimer;

  // Hàm bắt đầu vòng lặp tự động
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabOrder.length;
      openTab(tabOrder[currentIndex]);
    }, 3000); // 5 giây nhảy một lần
  }

  // Hàm dừng vòng lặp
  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
    clearTimeout(resumeTimer);
  }

  // Cải tiến hàm openTab hiện tại của bạn
  // Lưu ý: Đảm bảo hàm openTab gốc của bạn có logic hiển thị nội dung tương ứng
  const originalOpenTab = window.openTab; 

  window.openTab = function(tabId, isUserClick = false) {
    // Gọi logic hiển thị tab của bạn
    // (Nếu bạn chưa có hàm openTab, hãy xem gợi ý bên dưới)
    if (typeof showTabLogic === "function") {
        showTabLogic(tabId);
    }

    // Cập nhật vị trí hiện tại trong vòng lặp
    currentIndex = tabOrder.indexOf(tabId);

    // Nếu là người dùng bấm
    if (isUserClick) {
      stopAutoPlay();
      // Sau 10 giây không làm gì sẽ tự động chạy lại
      resumeTimer = setTimeout(() => {
        startAutoPlay();
      }, 10000); 
    }
  };

  // Khởi chạy khi trang web tải xong
  document.addEventListener('DOMContentLoaded', () => {
    // Gán sự kiện click cho tất cả các nút tab để nhận diện User Click
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Lấy ID từ hàm onclick trong HTML (ví dụ: 'med' từ openTab('med'))
        const tabId = btn.id.replace('btn-', '');
        window.openTab(tabId, true);
      });
    });

    startAutoPlay();
  });

  // HÀM LOGIC HIỂN THỊ (Bạn có thể điều chỉnh tùy theo cấu trúc CSS của mình)
  function showTabLogic(tabId) {
    // 1. Cập nhật trạng thái Active của Button
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('bg-neutral-50', 'border-neutral-200', 'ring-neutral-200/50', 'ring-1', 'shadow-sm');
      btn.classList.add('border-transparent');
    });
    const activeBtn = document.getElementById('btn-' + tabId);
    activeBtn.classList.add('bg-neutral-50', 'border-neutral-200', 'ring-neutral-200/50', 'ring-1', 'shadow-sm');
    activeBtn.classList.remove('border-transparent');

    // 2. Cập nhật hiển thị Nội dung (Phần Card bên phải)
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
      content.classList.remove('active');
    });
    const activeContent = document.getElementById('content-' + tabId);
    if (activeContent) {
      activeContent.classList.remove('hidden');
      activeContent.classList.add('active');
    }
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
      

<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="flex bg-center text-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0955d299-fd3f-44df-91ad-c9b572057578_320w.png)] bg-cover rounded-lg items-center justify-center">
</div>
<span className="text-lg font-bold text-fuchsia-950 tracking-normal">NHATTU</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600" style={{}}>
<a className="transition-colors hover:text-neutral-900 font-bold text-fuchsia-950" href="/home">TRANG CHỦ</a>
<a className="transition-colors hover:text-neutral-900 font-bold text-purple-950" href="#use-cases">VỀ TÔI</a>
<a className="transition-colors hover:text-neutral-900 font-bold text-fuchsia-950" href="/#contact">LIÊN LẠC</a>
<a className="inline-flex items-center gap-2 transition-all shadow-neutral-500/10 hover:shadow-neutral-500/20 hover:bg-neutral-800 text-white bg-purple-950 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg" href="https://dangnhapnhattu.netlify.app/">
<span className="font-medium">ĐĂNG NHẬP</span>
<svg aria-hidden="true" className="lucide lucide-backpack" data-icon-replaced="true" data-icon-set="lucide" data-lucide="backpack" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10h8"></path><path d="M8 18h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
</a>
</nav>

<button className="md:hidden p-2 text-neutral-600" style={{}}>
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
<main className="">

<section className="overflow-hidden lg:pb-32 lg:pt-24 font-bold text-fuchsia-950 pt-24 pb-32 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex animate-fade-in-up text-xs font-medium text-neutral-600 bg-white/80 border-neutral-200 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur gap-x-2 gap-y-2 items-center">
          Mục tiêu: Khẳng định tầm vóc và tư duy ngay từ giây đầu tiên</div>
<h1 className="leading-[1.05] lg:text-[68px] text-5xl font-medium text-fuchsia-950 tracking-tight font-roboto mb-6">Chào mừng bạn đến với NHATTU <br className=""/></h1>
<p className="leading-relaxed text-lg font-light text-gray-950 font-roboto max-w-lg mb-8">Tôi là Nhật Tú – Sinh viên Quản trị Kinh doanh Tổng hợp tại Đại học Duy Tân. Với tâm thế của một người trẻ chuyển mình cùng thời đại, tôi định hướng phát triển tư duy chiến lược dựa trên sức mạnh của Công nghệ &amp; AI để giải quyết những bài toán biến động của thế giới kinh doanh.</p>
<div className="flex flex-col sm:flex-row sm:items-center gap-6 gap-x-6 gap-y-6 items-start">

<a className="shiny-cta" href="/#contact">
<span className="">LIÊN HỆ</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 px-2 py-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center overflow-hidden border-white bg-neutral-200" style={{}}>
<img alt="User" className="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center overflow-hidden border-white bg-neutral-200" style={{}}>
<img alt="User" className="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" style={{}}/>
</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center overflow-hidden border-white bg-neutral-200" style={{}}>
<img alt="User" className="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"/>
</div>
</div>
<div className="text-sm">
<span className="block font-semibold text-neutral-900" style={{}}>Kết nối chiến lược</span>
<span className="text-neutral-500" style={{}}>50+ Kết nối</span>
</div>
</div>
</div>
</div>

<div className="lg:h-[700px] flex lg:justify-end w-full h-[600px] relative items-center justify-center">

<div className="overflow-hidden border-[6px] bg-[#ffffff] w-[340px] h-[680px] border-slate-400 rounded-[45px] relative shadow-[0_0_0_12px_rgba(0,0,0,0.1),0_30px_60px_-10px_rgba(0,0,0,0.5)]">

<div className="absolute inset-0 z-0">

<img alt="AI Agent" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30">
</div>
</div>



<div className="flex flex-col bg-center z-10 bg-slate-50 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1934b7f9-27b3-4b94-b576-ef380c44d9f3_800w.jpg)] bg-cover pt-24 pb-6 relative">



</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10" style={{}}></div>
<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] -z-10" style={{}}></div>
</div>
</div>
</div>
</section><section className="border-y bg-white/70 w-full border-neutral-200 backdrop-blur">
<div className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>

</div>
<style>
    @keyframes marquee-dang {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  </style>

</section>


<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex">
<h2 className="text-3xl font-semibold text-fuchsia-950 tracking-tight mt-5 mb-5">Tin tức &amp; Sự kiện</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-stone-200 aspect-video mb-6">
<img alt="Hội nghị" className="group-hover:scale-105 transition-transform duration-500 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5532e60-20b6-4b57-9c62-dfad0cca08a8_3840w.webp"/>
<div className="absolute bottom-4 left-4 bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
        Tiêu
        điểm</div>
</div>
<h3 className="group-hover:text-red-700 transition-colors text-2xl font-semibold text-stone-900 font-poppins mb-3">
      Tổng Bí thư Tô Lâm: Khát vọng, đột phá và mệnh lệnh hành động cho tương lai dân tộc</h3>
<p className="leading-relaxed line-clamp-3 text-slate-950 max-w-full max-h-full">Đại hội XIV của Đảng là dấu mốc mở
      ra chặng đường phát triển mới của đất nước trong bối cảnh, cục diện và mục tiêu mới; là Đại hội của ý chí tự
      chủ chiến lược, tự lực, tự cường, tự hào dân tộc, của khát vọng vươn lên, của niềm tin son sắt vào con đường
      mà Đảng, Bác Hồ và nhân dân ta đã lựa chọn.</p>
</article>

<div className="" style={{width: '100%', maxWidth: '600px', aspectRatio: '1/1.2', background: '#ffffff', border: '1px solid #e0e0e0', borderTop: '5px solid #d40000', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 'px auto', fontFamily: '\'Segoe UI\', Arial, sans-serif', boxShadow: '0 10px 30px rgba(0,0,0,0.15)'}}>

<div className="" style={{position: 'absolute', top: '0', left: '0', width: '100%', background: 'linear-gradient(to bottom, #fffcfc, #fff1f1)', padding: '15px', borderBottom: 'px solid #d40000', fontWeight: 'bold', color: '#d40000', zIndex: '100', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
<span style={{fontSize: '13px', letterSpacing: '2px', color: '#888'}}>
      ĐỊNH HƯỚNG CHIẾN LƯỢC
    </span>
<span className="" style={{fontSize: '18px', lineHeight: '1.3'}}>
      ĐỔI MỚI 2026 – KHÁT VỌNG PHÁT TRIỂN
    </span>
</div>

<div className="" style={{marginTop: '85px', height: 'calc(100% - 85px)', overflow: 'hidden', position: 'relative'}}>
<div className="xiv-election-flow">

<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">01</div>
<div className="xiv-info">
<p className="xiv-name">ĐỔI MỚI TƯ DUY</p>
<p className="xiv-position">Người dân là trung tâm</p>
</div>
<div className="xiv-status xiv-core">Trọng tâm</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">02</div>
<div className="xiv-info">
<p className="xiv-name">HOÀN THIỆN THỂ CHẾ</p>
<p className="xiv-position">Minh bạch – hiệu quả</p>
</div>
<div className="xiv-status xiv-break">Đột phá</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">03</div>
<div className="xiv-info">
<p className="xiv-name">CHUYỂN ĐỔI SỐ</p>
<p className="xiv-position">Chính phủ – kinh tế số</p>
</div>
<div className="xiv-status xiv-strategy">Chiến lược</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">04</div>
<div className="xiv-info">
<p className="xiv-name">KINH TẾ XANH</p>
<p className="xiv-position">Tăng trưởng bền vững</p>
</div>
<div className="xiv-status xiv-sustain">Bền vững</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">05</div>
<div className="xiv-info">
<p className="xiv-name">XÂY DỰNG ĐẢNG</p>
<p className="xiv-position">Trong sạch – vững mạnh</p>
</div>
<div className="xiv-status xiv-core">Cốt lõi</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">06</div>
<div className="xiv-info">
<p className="xiv-name">QUỐC PHÒNG – AN NINH</p>
<p className="xiv-position">Ổn định để phát triển</p>
</div>
<div className="xiv-status xiv-strategy">Nền tảng</div>
</div>
<div className="xiv-member-card xiv-infographic">
<div className="xiv-order">07</div>
<div className="xiv-info">
<p className="xiv-name">HỘI NHẬP QUỐC TẾ</p>
<p className="xiv-position">Nâng tầm vị thế</p>
</div>
<div className="xiv-status xiv-break">Mở rộng</div>
</div>
</div>
</div>

<style>
    @keyframes xivScrollVertical {
      0% { transform: translateY(0); }
      100% { transform: translateY(-60%); }
    }

    .xiv-election-flow {
      display: flex;
      flex-direction: column;
      animation: xivScrollVertical 40s linear infinite;
    }

    .xiv-election-flow:hover {
      animation-play-state: paused;
    }

    .xiv-member-card {
      padding: 18px 20px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      transition: background 0.3s;
    }

    .xiv-member-card:hover {
      background: #fff5f5;
    }

    .xiv-order {
      font-weight: bold;
      color: #d40000;
      font-size: 18px;
      min-width: 36px;
    }

    .xiv-info {
      flex-grow: 1;
      padding-right: 10px;
    }

    .xiv-name {
      margin: 0;
      color: #222;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .xiv-position {
      margin: 4px 0 0;
      color: #777;
      font-size: 12.5px;
    }

    .xiv-status {
      font-size: 9px;
      padding: 4px 8px;
      border-radius: 12px;
      text-transform: uppercase;
      font-weight: bold;
      white-space: nowrap;
      color: #fff;
    }

    /* BADGE COLORS */
    .xiv-core {
      background: linear-gradient(135deg, #d40000, #ff5252);
    }

    .xiv-break {
      background: linear-gradient(135deg, #f57c00, #ff9800);
    }

    .xiv-strategy {
      background: linear-gradient(135deg, #1565c0, #42a5f5);
    }

    .xiv-sustain {
      background: linear-gradient(135deg, #2e7d32, #66bb6a);
    }
  </style>
</div>
<style className="">
    /* CSS bắt buộc phải có để kích hoạt chuyển động */
    @keyframes xivSlideUp {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-50%);
      }
    }

    .xiv-animation-box {
      display: flex;
      flex-direction: column;
      animation: xivSlideUp 20s linear infinite;
      /* Nếu vẫn không chạy, hãy tăng số 20s này lên */
    }

    .xiv-animation-box:hover {
      animation-play-state: paused;
    }

    .xiv-item {
      padding: 20px;
      border-bottom: 1px solid #f0f0f0;
      text-align: left !important;
      /* Luôn căn trái */
    }

    .xiv-tag {
      color: #d40000;
      font-size: 11px;
      font-weight: bold;
      background: #fff0f0;
      padding: 2px 6px;
      border-radius: 3px;
    }

    .xiv-p {
      margin: 8px 0 0 0;
      color: #333;
      font-size: 15px;
      line-height: 1.5;
      text-align: left !important;
    }
  </style>
</div>
</div>
<section className="lg:px-8 bg-[#ffffff] max-w-7xl mr-auto ml-auto pt-2 pr-6 pb-2 pl-6" id="use-cases">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="reveal-on-scroll is-visible">
<span className="uppercase text-xs font-semibold text-indigo-950 tracking-wide font-roboto">Cách tôi nhìn về quản trị trong kỷ nguyên số</span>
<h2 className="lg:text-5xl text-4xl font-medium text-fuchsia-950 tracking-tight font-roboto mt-2 mb-6">Một vài góc nhìn cá nhân về vận hành, công nghệ và con người.</h2>
<p className="text-lg text-slate-950 mb-8">Đây là những góc nhìn tôi đang dần hình thành trong quá trình học tập và quan sát thực tiễn,
được trình bày ngắn gọn để người đọc có thể khám phá sâu hơn khi cần</p>
<div className="space-y-4">

<button className="tab-btn flex transition-all duration-300 text-left bg-neutral-50 w-full border-neutral-200 border rounded-2xl ring-neutral-200/50 ring-1 pt-4 pr-4 pb-4 pl-4 shadow-sm gap-x-4 gap-y-4" id="btn-med" onclick="openTab('med')">
<div className="mt-1 text-indigo-600" style={{}}><svg aria-hidden="true" className="lucide lucide-stethoscope w-6 h-6" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900">Tối ưu hóa quy trình</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Tư duy Lean để làm việc hiệu quả hơn, không làm nhiều hơn</p>
</div>
</button>

<button className="tab-btn flex transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-100 text-left w-full border-transparent border rounded-2xl pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4" id="btn-estate" onclick="openTab('estate')">
<div className="mt-1 text-indigo-600" style={{}}><svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900">Chiến lược số hóa</h4>
<p className="text-sm text-neutral-600 mt-1">Cách công nghệ hỗ trợ con người ra quyết định tốt hơn.</p>
</div>
</button>

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl border border-transparent transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-100" id="btn-ecom" onclick="openTab('ecom')" style={{}}>
<div className="mt-1 text-indigo-600" style={{}}><svg aria-hidden="true" className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Quản trị sự thay đổi</h4>
<p className="text-sm text-neutral-600 mt-1">Thích ứng linh hoạt trong môi trường kinh doanh biến động.</p>
</div>
</button>
</div>
</div>

<div className="relative reveal-on-scroll is-visible">
<div className="-inset-4 bg-gradient-to-r opacity-70 -z-10 rounded-[40px] absolute blur-xl from-indigo-100 to-cyan-50" style={{}}></div>

<div className="overflow-hidden min-h-[420px] flex flex-col text-slate-950 bg-neutral-50 rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-center">
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
<svg aria-hidden="true" className="lucide lucide-quote w-24 h-24" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="tab-content active space-y-8 relative z-10" id="content-med">
<div className="">
<p className="uppercase text-xs font-bold text-cyan-950 tracking-wider mb-4">Tối ưu hóa quy trình</p>
<div className="text-sm font-mono space-y-4">
<div className="flex gap-3">
<span className="text-slate-950 font-roboto" id="btn-estate" style={{}}>Trong quá trình học tập, tôi đặc biệt chú ý đến cách các quy trình vận hành trong doanh nghiệp. Tôi nhận ra rằng nhiều vấn đề không đến từ việc thiếu nỗ lực, mà đến từ cách quy trình được thiết kế chưa hợp lý. Tư duy Lean giúp tôi nhìn rõ hơn các điểm lãng phí, điểm nghẽn và cơ hội cải tiến trong công việc hàng ngày. Với tôi, tối ưu quy trình không phải để chạy nhanh hơn, mà để đi đúng hướng ngay từ đầu.</span>
</div>
</div>
</div>
<div className="border-gray-200 border-t pt-6">
<div className="flex items-center justify-between">
<div className="">
<p className="text-2xl font-bold text-slate-950">NHATTU</p>
<p className="text-xs text-gray-600">Tối ưu hóa điểm chạm trong hành trình khách hàng</p>
</div>
<div className="flex bg-blue-500 w-10 h-10 rounded-full shadow-lg shadow-blue-500/20 items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-check w-6 h-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>
<div className="tab-content space-y-8 relative z-10" id="content-estate">
<div>
<p className="text-xs uppercase tracking-wider mb-4 font-bold text-indigo-950">TÍCH HỢP HỆ THỐNG &amp; ĐỒNG BỘ DỮ LIỆU THỜI GIAN THỰC</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-slate-950 font-roboto">Tôi quan tâm đến việc doanh nghiệp ứng dụng công nghệ không chỉ để số hóa, mà để quản trị hiệu quả hơn.
            Các công cụ như CRM, ERP hay tự động hóa giúp giảm tải công việc thủ công và tăng tính minh bạch trong vận hành.
            Tuy nhiên, theo tôi, công nghệ chỉ thực sự có giá trị khi được triển khai phù hợp với con người và văn hóa tổ chức.
            Vì vậy, tôi xem số hóa là một hành trình học hỏi, không phải một đích đến.
          </span>
</div>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-slate-950">NHATTU</p>
<p className="text-xs text-gray-600">Tối ưu hóa dòng chảy thông tin xuyên suốt doanh nghiệp</p>
</div>
<div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
<svg aria-hidden="true" className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
</div>
</div>
</div>
<div className="tab-content space-y-8 relative z-10" id="content-ecom">
<div>
<p className="text-xs uppercase tracking-wider mb-4 font-bold text-indigo-950">QUẢN TRỊ RỦI RO &amp; DỰ BÁO CHIẾN LƯỢC</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-slate-950 font-roboto">Trong thời đại số, thay đổi không còn là ngoại lệ mà là điều bình thường.
            Tôi quan tâm đến cách các tổ chức và cá nhân phản ứng trước sự không chắc chắn và rủi ro.
            Quản trị sự thay đổi, theo tôi, bắt đầu từ việc chuẩn bị tư duy, chứ không chỉ là kế hoạch.
            Khả năng thích ứng nhanh và học hỏi liên tục sẽ là lợi thế bền vững nhất của một nhà quản trị trẻ.
          </span>
</div>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-slate-950">NHATTU</p>
<p className="text-xs text-gray-600">Nâng cao năng lực phản ứng nhanh trước biến động thị trường</p>
</div>
<div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
<svg aria-hidden="true" className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-slate-950 bg-[#ffffff] max-w-7xl rounded-none mr-auto ml-au pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '0'}}>


<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col w-full gap-x-10 gap-y-10">

<div className="flex items-center gap-6">
<span className="text-xs text-blue-400 tracking-widest font-mono"></span>
<div className="h-px flex-1 bg-white/10"></div>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-10 gap-y-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="leading-[1.05] md:text-5xl lg:text-6xl text-4xl font-black text-purple-950 font-roboto">Dự án định hướng <span className="block font-black text-fuchsia-950 font-roboto">trong kỷ nguyên số.</span></h2>
<p className="leading-relaxed text-lg font-light text-gray-950 font-sans max-w-xl">Những hướng đi tôi mong muốn được học hỏi, thử nghiệm và phát triển</p>
</div>

<button className="group flex items-center gap-2 px-6 py-3 border text-sm font-medium rounded-full transition font-sans whitespace-nowrap border-white/15 text-white hover:bg-white/5">
<span className="font-sans">CÙNG KHÁM PHÁ</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-x-6 gap-y-6">

<div className="group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 md:col-span-1 bg-indigo-700 border-white/10 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<style>
              @keyframes orbit-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes breathe-glow {
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
                50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(59, 130, 246, 0.3); }
              }
              @keyframes ripple-expand {
                0% { transform: scale(0.8); opacity: 0.6; border-width: 1px; }
                100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
              }
              @keyframes dot-handoff {
                0%, 100% { opacity: 0.3; r: 2px; fill: #60A5FA; }
                50% { opacity: 1; r: 3.5px; fill: #3B82F6; }
              }
            </style>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 rounded-full blur-3xl transform scale-75"></div>

<div className="absolute w-16 h-16 rounded-full border z-0 border-blue-400/30" style={{animation: 'ripple-expand 4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<svg className="z-10 w-[313px] h-[192px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '313px', height: '192px', color: 'rgb(59, 130, 246)'}} viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<g className="" style={{transformOrigin: '100px 100px', animation: 'orbit-slow 12s linear infinite'}}>

<circle className="opacity-30" cx="100" cy="100" r="80" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" cx="100" cy="20" fill="#60A5FA" r="3"></circle>
<circle className="opacity-60" cx="180" cy="100" fill="#3B82F6" r="2.5"></circle>
<circle className="opacity-60" cx="20" cy="100" fill="#3B82F6" r="2.5"></circle>
</g>

<circle className="opacity-40" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"></circle>


<circle className="" cx="100" cy="50" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '0s'}}></circle>

<circle className="" cx="150" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '1s'}}></circle>

<circle className="" cx="100" cy="150" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '2s'}}></circle>

<circle className="" cx="50" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '3s'}}></circle>
</svg>

<div className="absolute flex items-center justify-center w-16 h-16 bg-[#15151A] rounded-full border z-20 border-white/10" style={{animation: 'breathe-glow 4s ease-in-out infinite'}}>
<div className="bg-purple-50/10 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-sm"></div>
<svg className="z-10 relative w-[28px] h-[28px]" data-icon-replaced="true" fill="currentColor" height="28" stroke="none" strokeWidth="2" style={{color: 'rgb(243, 244, 246)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl font-light text-white font-oswald text-left">Phân tích Insight Khách hàng</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-sans text-left mt-2">Nghiên cứu dữ liệu hành vi khách hàng từ các kênh số để hiểu rõ hơn nhu cầu, trải nghiệm và cách doanh nghiệp có thể phục vụ khách hàng tốt hơn.</p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-indigo-700 border-white/10 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<style>
              @keyframes flowData {
                0% { stroke-dashoffset: 120; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              @keyframes breatheDiamond {
                0%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 30px rgba(59,130,246,0.3); border-color: rgba(59,130,246,0.3); }
                50% { transform: rotate(45deg) scale(1.05); box-shadow: 0 0 50px rgba(59,130,246,0.5); border-color: rgba(59,130,246,0.6); }
              }
              @keyframes orbitSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            </style>

<div className="absolute top-0 right-0 w-[300px] h-[300px] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700 bg-indigo-600/20"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<svg className="absolute top-0 right-0 bottom-0 left-0 w-[716px] h-[192px]" data-icon-replaced="true" fill="none" preserveaspectratio="xMidYMid meet" strokeWidth="2" style={{color: 'rgb(2, 6, 23)', width: '716px', height: '192px'}} viewbox="0 0 400 200">
<defs className="">
<lineargradient className="" id="flowGradientLeft" x1="0%" x2="100%" y1="0%" y2="0%">
<stop className="" offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop className="" offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop className="" offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient className="" id="flowGradientRight" x1="100%" x2="0%" y1="0%" y2="0%">
<stop className="" offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop className="" offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop className="" offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="text-white/10" d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1"></path>
<path className="text-white/10" d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1"></path>

<path className="" d="M50 100 L120 100 L150 70" stroke="url(#flowGradientLeft)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
<path className="" d="M350 100 L280 100 L250 130" stroke="url(#flowGradientRight)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '1.5s'}}></path>

<g className="" transform="translate(50 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
<g className="" transform="translate(350 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
</svg>

<div className="relative flex items-center justify-center">
<div className="absolute inset-0 blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-blue-600"></div>

<div className="w-24 h-24 border border-blue-500/30 bg-gradient-to-br backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10 relative overflow-hidden from-indigo-900/50 to-blue-900/20" style={{animation: 'breatheDiamond 4s ease-in-out infinite'}}>

<div className="flex bg-center bg-blue-50/5 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12204563-6873-436f-8b6c-fe85487d612b_320w.png)] bg-cover z-20 border-blue-400/50 border rounded-lg relative items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#60A5FA] bg-blue-400"></div>
</div>

<div className="absolute inset-0 z-10 opacity-30" style={{animation: 'orbitSpin 8s linear infinite'}}>
<div className="w-full h-full border-blue-400/40 rounded-2xl border-t border-r"></div>
</div>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="group-hover:text-blue-50 transition-colors duration-300 text-4xl font-light text-white font-oswald text-left">Hỗ trợ chuyển đổi số cho doanh nghiệp vừa và nhỏ</h3>
<p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-lg font-light text-gray-400 font-sans text-left mt-2">Tham gia vào các dự án chuyển đổi số ở quy mô phù hợp, học cách tích hợp các công cụ quản lý như CRM, ERP vào hoạt động kinh doanh thực tế.</p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-indigo-700 border-white/10 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<style>
              @keyframes shimmer-lock {
                0%, 100% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); }
                50% { opacity: 0.8; border-color: rgba(255,255,255,0.25); transform: scale(1.05); }
              }
              @keyframes active-pulse {
                0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4); transform: scale(1); border-color: rgba(255,255,255,0.1); }
                50% { box-shadow: 0 0 35px rgba(79, 70, 229, 0.6); transform: scale(1.02); border-color: rgba(79, 70, 229, 0.5); }
              }
              @keyframes scan-sweep {
                0% { transform: translateY(-150%) rotate(15deg); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(250%) rotate(15deg); opacity: 0; }
              }
              @keyframes bg-pulse-soft {
                0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(0.9); }
                50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.1); }
              }
              @keyframes progress-spin {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 25; }
              }
            </style>

<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full pointer-events-none bg-blue-600/20" style={{animation: 'bg-pulse-soft 4s ease-in-out infinite'}}></div>

<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center border-white/10 text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '0s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center text-gray-500 border-white/10" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '1s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>

<div className="relative w-20 h-20 rounded-2xl bg-[#4F46E5] flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] z-10 border ring-4 ring-[#08080A] text-white border-white/10" style={{animation: 'active-pulse 3s ease-in-out infinite'}}>

<div className="absolute inset-0 overflow-hidden rounded-2xl">
<div className="w-full h-1/3 bg-gradient-to-b absolute top-0 left-0 from-white/0 via-white/20 to-white/0" style={{animation: 'scan-sweep 3s ease-in-out infinite'}}></div>
</div>

<svg className="pt-1 pr-1 pb-1 pl-1 absolute top-0 right-0 bottom-0 left-0 -rotate-90 w-[78px] h-[78px]" data-icon-replaced="true" strokeWidth="2" style={{width: '78px', height: '78px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 36 36">
<path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] text-white" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="2" style={{animation: 'progress-spin 1.5s ease-out forwards'}}></path>
</svg>

<svg className="z-10 relative w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>

<div className="absolute -bottom-3 bg-[#08080A] border px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg text-white border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono tracking-wider font-semibold font-sans" style={{}}>
                      LIVE
                    </span>
</div>
</div>

<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center text-gray-500 border-white/10" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '2s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border bg-[#121215] flex items-center justify-center border-white/10 text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '3s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl font-light text-white font-oswald text-left">Cải tiến quy trình làm việc dựa trên tư duy Lean</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-sans text-left mt-2">Áp dụng kiến thức Lean đã học để quan sát, phân tích và đề xuất cải tiến quy trình, nhằm giảm lãng phí và nâng cao hiệu quả làm việc trong tổ chức.</p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#08080A] border rounded-[2rem] p-8 relative justify-between border-white/10">
<style>
              @keyframes drift-vertical-slow {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes drift-vertical-reverse {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(8px); }
              }
              @keyframes signal-flow {
                0% { stroke-dashoffset: 20; opacity: 0.3; }
                100% { stroke-dashoffset: 0; opacity: 0.6; }
              }
              @keyframes signal-pulse {
                0%, 100% { stroke-width: 1; opacity: 0.2; }
                50% { stroke-width: 1.5; opacity: 0.8; stroke: #60A5FA; }
              }
              @keyframes node-activate {
                0%, 90%, 100% { fill: white; r: 3px; filter: none; }
                92% { fill: #3B82F6; r: 4.5px; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); }
                95% { fill: #60A5FA; r: 4px; }
              }
              @keyframes grid-pan-diagonal {
                0% { background-position: 0% 0%; }
                100% { background-position: 100px 100px; }
              }
            </style>

<div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'scale(1.5) rotate(15deg)', animation: 'grid-pan-diagonal 60s linear infinite'}}></div>
<div className="z-0 bg-indigo-700 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<svg className="w-[313px] h-[192px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '313px', height: '192px'}} viewbox="0 0 200 200">

<line className="" stroke="currentColor" strokeWidth="1" x1="100" x2="100" y1="20" y2="180"></line>

<line className="" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 3s linear infinite'}} x1="60" x2="60" y1="20" y2="180"></line>

<line className="" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 4s linear infinite reverse'}} x1="140" x2="140" y1="20" y2="180"></line>

<g className="" style={{animation: 'drift-vertical-slow 7s ease-in-out infinite'}}>
<path className="" d="M60 80 C 80 80, 80 100, 100 100" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 0s'}}></path>
<circle className="" cx="60" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0.5s'}}></circle>
</g>

<g className="" style={{animation: 'drift-vertical-reverse 8s ease-in-out infinite 1s'}}>
<path className="" d="M100 60 C 120 60, 120 80, 140 80" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 2.5s'}}></path>
<circle className="" cx="140" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 3s'}}></circle>
</g>

<g className="" style={{animation: 'drift-vertical-slow 6s ease-in-out infinite 2s'}}>
<path className="" d="M100 120 C 80 120, 80 140, 60 140" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 1.5s'}}></path>
<circle className="" cx="60" cy="140" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 5.5s'}}></circle>
</g>

<circle className="" cx="100" cy="60" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0s'}}></circle>
<circle className="" cx="100" cy="100" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 2s'}}></circle>
<circle className="" cx="100" cy="150" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 4s'}}></circle>

<circle className="opacity-50" cx="120" cy="40" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-reverse 10s ease-in-out infinite'}}></circle>
<circle className="opacity-50" cx="80" cy="160" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-slow 9s ease-in-out infinite'}}></circle>
</svg>
</div>

<div className="relative z-10">
<h3 className="group-hover:text-blue-50 transition-colors duration-300 text-4xl font-light text-white font-oswald text-left">Trợ lý AI hỗ trợ vận hành </h3>
<p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-lg font-light text-gray-400 font-sans text-left mt-2">Tìm hiểu và tham gia xây dựng các hệ thống AI đơn giản giúp hỗ trợ trả lời khách hàng, theo dõi đơn hàng và giảm áp lực cho bộ phận vận hành.</p>
</div>
</div>
</div>
</div>

</section>



<section className="bg-white pt-24 pb-24" id="contact">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
<div className="reveal-on-scroll">
<h2 className="text-3xl font-medium text-fuchsia-950 tracking-tight font-roboto mb-6">Bạn ưu tiên sự
                            tương tác trực tiếp?</h2>
<p className="leading-relaxed text-neutral-950 mb-8">Dù công nghệ có phát triển đến đâu,
                            giá trị thực sự của quản trị vẫn nằm ở sự thấu hiểu giữa người với người. Tôi luôn sẵn lòng
                            lắng nghe và cùng bạn tìm ra lời giải tối ưu cho những bài toán kinh doanh thực tế.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-neutral-100" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-orange-900">Phân tích vấn đề chuyên
                                        sâu</h4>
<p className="text-sm text-neutral-950 mt-1">Tôi không chỉ lắng nghe, tôi cùng
                                        bạn mổ xẻ vấn đề để tìm ra giải pháp cốt lõi nhất.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-neutral-100" style={{}}>
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-orange-800">Phản hồi trong vòng 24h
                                    </h4>
<p className="text-sm text-neutral-950 mt-1">Thời gian là tài nguyên quý giá
                                        nhất trong kinh doanh, tôi cam kết không để bạn phải chờ đợi lâu.</p>
</div>
</div>
</div>
</div>
<div className="reveal-on-scroll lg:p-10 bg-slate-50 border-neutral-200 border rounded-[32px] pt-8 pr-8 pb-8 pl-8">
<form className="space-y-4" id="contact-form">
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 text-neutral-600" style={{}}>Họ và tên</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all bg-white border-neutral-200 text-neutral-900" name="firstName" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 text-neutral-600" style={{}}>Tên tổ chức/Công ty</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all bg-white border-neutral-200 text-neutral-900" name="lastName" required="" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 text-neutral-600" style={{}}>Adres Email</label>
<input className="w-full border rounded-xl px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all bg-white border-neutral-200 text-neutral-900" name="email" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 text-neutral-600" style={{}}>Số điện thoại</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-neutral-500 text-sm font-medium" style={{}}>+84</span>
</div>
<input className="placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all w-full border rounded-xl pt-3 pr-4 pb-3 pl-12 text-neutral-900 bg-white border-neutral-200" name="phone" placeholder="000 000 000" required="" style={{}} type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 text-neutral-600" style={{}}>Lời nhắn/Yêu cầu cụ thể</label>
<textarea className="w-full border rounded-xl px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all bg-white border-neutral-200 text-neutral-900" name="message" rows="3" style={{}}></textarea>
</div>
<button className="transition-colors flex disabled:opacity-70 disabled:cursor-not-allowed hover:bg-neutral-800 font-medium text-slate-50 bg-purple-950 w-full h-12 rounded-xl mt-2 gap-x-2 gap-y-2 items-center justify-center" type="submit">
<span className="">GỬI YÊU CẦU KẾT NỐI</span>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(248, 250, 252)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="lg:py-16 bg-white border-neutral-200 border-t pt-12 pb-12">
<div className="lg:px-8 flex flex-col md:flex-row gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-start justify-between">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="flex w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cb136e1-5934-4e3c-9ab7-586d405e8850_320w.jpg)] bg-cover bg-center rounded-lg items-center justify-center text-white bg-neutral-900" style={{}}>
</div>
<span className="text-lg font-medium tracking-tight text-neutral-900" style={{}}>NHATTU</span>
</a>
<p className="leading-relaxed text-sm text-neutral-950 mb-6">Sinh viên chuyên ngành Quản trị Kinh doanh Tổng hợp tại Đại học Duy Tân. Định hướng trở thành nhà quản trị tiên phong, kết nối tư duy chiến lược với công nghệ hiện đại để tạo ra giá trị đột phá cho doanh nghiệp.</p>
<div className="flex gap-2 text-sm font-medium gap-x-2 gap-y-2 items-center text-neutral-900" style={{}}>
                        Đà Nẵng, Việt Nam.</div>
</div>
<div className="flex gap-16 flex-wrap gap-x-16 gap-y-16">
<div className="">
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Về tôi</h4>
<ul className="text-sm text-neutral-500 space-y-3" style={{}}>
<li className=""><a className="hover:text-neutral-900 text-neutral-950" href="#">Hành trình sự nghiệp.</a>
</li>
<li className=""><a className="hover:text-neutral-900 text-neutral-950" href="#">Dự án tiêu biểu.</a></li>
<li className=""><a className="hover:text-neutral-900 text-neutral-950" href="#">Bảng kỹ năng.</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Dịch vụ/Lĩnh vực</h4>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li className=""><a className="hover:text-neutral-900 text-zinc-950" href="#">Tư vấn vận hành</a></li>
<li className=""><a className="hover:text-neutral-900 text-zinc-950" href="#">Chiến lược thương hiệu.</a>
</li>
<li className=""><a className="hover:text-neutral-900 text-zinc-950" href="#">Chuyển đổi số doanh
                                    nghiệp.</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Kết nối mạng xã hội</h4>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li className="cursor-pointer" onclick="window.location.href='https://www.linkedin.com/in/nhattuz/'" role="button"><a className="hover:text-neutral-900 text-gray-950" href="#">LinkedIn</a></li>
<li className=""><a className="hover:text-neutral-900 text-gray-950" href="#">Facebook/Behance</a></li>
</ul>
</div>
</div>
</div>
<div className="lg:px-8 md:text-left text-sm text-center max-w-7xl border-t mt-12 mr-auto ml-auto pt-8 pr-6 pl-6 text-neutral-400 border-neutral-100" style={{}}>© 2026 Trần Viết Nhật Tú - Mọi quyền được bảo lưu.</div>
</footer>
</main>




    </>
  );
}
