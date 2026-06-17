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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Form Validation & WhatsApp Integration
        const form = document.getElementById('landing-form');
        
        form.addEventListener('submit', e => {
            // 1. Prevent default submission
            e.preventDefault();
            
            // Get input elements
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const cityInput = document.getElementById('city');
            const projectTypeInput = document.getElementById('projectType');
            const notesInput = document.getElementById('notes');
            
            // Get error elements
            const errorName = document.getElementById('error-name');
            const errorPhone = document.getElementById('error-phone');
            const errorCity = document.getElementById('error-city');
            const formSuccess = document.getElementById('form-success');
            
            // Reset UI state
            errorName.classList.add('hidden');
            errorPhone.classList.add('hidden');
            errorCity.classList.add('hidden');
            formSuccess.classList.add('hidden');
            
            let isValid = true;
            
            // 2. Validate required fields
            if (!nameInput.value.trim()) {
                errorName.classList.remove('hidden');
                isValid = false;
            }
            if (!phoneInput.value.trim()) {
                errorPhone.classList.remove('hidden');
                isValid = false;
            }
            if (!cityInput.value.trim()) {
                errorCity.classList.remove('hidden');
                isValid = false;
            }
            
            // Stop if validation fails
            if (!isValid) return;

            // 3. Create the WhatsApp message
            const message = `طلب جديد:
الاسم: ${nameInput.value.trim()}
الهاتف: ${phoneInput.value.trim()}
المدينة: ${cityInput.value.trim()}
نوع المشروع: ${projectTypeInput.value || 'غير محدد'}
ملاحظات: ${notesInput.value.trim() || 'لا يوجد'}
الخدمة: Landing Page`;
            
            // 4. Encode the message
            const encodedMessage = encodeURIComponent(message);
            
            // 5. Generate reliable WhatsApp link
            const waUrl = `https://api.whatsapp.com/send?phone=212719943126&text=${encodedMessage}`;
            
            // 6. Open WhatsApp instantly in a new tab
            window.open(waUrl, '_blank');
            
            // Optional Improvement: Clear form and show success message
            form.reset();
            formSuccess.classList.remove('hidden');
        });

        // Popup Logic
        const popup = document.getElementById('promo-popup');
        const popupContent = document.getElementById('popup-content');
        
        setTimeout(() => {
            popup.classList.remove('opacity-0', 'pointer-events-none');
            popupContent.classList.remove('scale-95');
            popupContent.classList.add('scale-100');
        }, 5000);

        function closePopup() {
            popup.classList.add('opacity-0', 'pointer-events-none');
            popupContent.classList.remove('scale-100');
            popupContent.classList.add('scale-95');
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
      

<nav className="fixed w-full z-40 top-0 transition-all duration-300 glass-effect border-b border-[#C8A97E]/10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 md:h-20">
<div className="text-xl md:text-2xl font-semibold tracking-tighter text-[#1A1A1A] uppercase letter-spacing-tight">
                    L<span className="text-[#C8A97E]">N</span>D<span className="text-[#8B1E1E]">G</span>.
                </div>
<a className="hidden md:flex items-center gap-2 bg-[#8B1E1E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B3261E] transition-all shadow-lg shadow-[#8B1E1E]/20 hover:shadow-[#8B1E1E]/40 transform hover:-translate-y-0.5" href="#order">
                    اطلب الآن
                    <iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center overflow-visible">

<div className="absolute top-10 left-0 w-64 h-64 bg-[#C8A97E] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 -z-10"></div>
<div className="absolute bottom-0 right-10 w-80 h-80 bg-[#8B1E1E] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 -z-10"></div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3E8DC] border border-[#C8A97E]/30 text-xs font-medium text-[#A8895F] mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B1E1E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B1E1E]"></span>
</span>
            خدمة متاحة في جميع مدن المغرب
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#1A1A1A] mb-6 leading-[1.1]">
            صفحة هبوط جاهزة <br className="hidden md:block"/>
            لزيادة <span className="text-gradient-gold">مبيعاتك</span>
</h1>
<p className="text-xl md:text-3xl text-[#8B1E1E] font-medium mb-6 tracking-tight">
            صايب صفحتك الاحترافية غير بـ 150 درهم!
        </p>
<p className="text-base md:text-lg text-[#555555] max-w-2xl mb-12 leading-relaxed">
            كنصايب ليك صفحة هبوط عصرية، مربوطة بواتساب وGoogle Sheets باش تبدأ تجيب الطلبات بكل سهولة واحترافية.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex justify-center items-center gap-3 bg-[#8B1E1E] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#B3261E] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#8B1E1E]/20" href="#order">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="22"></iconify-icon>
                اطلب الآن عبر واتساب
            </a>
<a className="w-full sm:w-auto flex justify-center items-center gap-2 bg-transparent text-[#1A1A1A] px-8 py-4 rounded-full text-base font-medium border border-[#C8A97E]/40 hover:bg-[#F3E8DC] transition-all" href="tel:+212719943126">
<iconify-icon className="text-[#A8895F]" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span dir="ltr">+212 719 943126</span>
</a>
</div>
</section>

<section className="py-10 px-4">
<div className="max-w-3xl mx-auto bg-[#F3E8DC] border border-[#C8A97E]/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-[#C8A97E]/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C8A97E]/20 to-transparent rounded-bl-full"></div>
<span className="block text-sm font-medium text-[#A8895F] mb-2 uppercase tracking-widest">عرض حصري</span>
<div className="flex items-center justify-center gap-2 mb-4">
<iconify-icon className="text-[#8B1E1E]" icon="solar:fire-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1A1A1A]" dir="rtl">150 درهم <span className="text-xl md:text-2xl text-[#555555] font-normal">فقط</span></h2>
</div>
<p className="text-base md:text-lg text-[#555555]">ثمن مناسب باش تبدأ وتبيع منتجاتك ولا خدماتك اليوم.</p>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-4">شنو غتستافد؟</h2>
<p className="text-base text-[#555555]">كل ما تحتاجه لإطلاق حملتك الإعلانية بنجاح</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">صفحة احترافية</h3>
<p className="text-sm text-[#555555]">تصميم جذاب وعالي الجودة يزيد من ثقة الزبون.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">ربط بواتساب</h3>
<p className="text-sm text-[#555555]">استقبال الطلبات مباشرة في حسابك على واتساب.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">تسجيل الطلبات</h3>
<p className="text-sm text-[#555555]">تنظيم آلي للمعلومات في Google Sheets.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">تصميم عصري</h3>
<p className="text-sm text-[#555555]">ألوان متناسقة وخطوط واضحة تتماشى مع علامتك.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">سريعة جداً</h3>
<p className="text-sm text-[#555555]">برمجة نظيفة تضمن تحميل الصفحة في ثوانٍ معدودة.</p>
</div>

<div className="bg-white/40 p-8 rounded-2xl border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 transition-colors group">
<div className="w-12 h-12 bg-[#F3E8DC] rounded-xl flex items-center justify-center mb-6 text-[#A8895F] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1A1A1A] mb-2 tracking-tight">متوافقة مع الهاتف</h3>
<p className="text-sm text-[#555555]">Mobile-first design لأن أغلب الزوار من الهاتف.</p>
</div>
</div>
</section>

<section className="py-20 bg-[#F3E8DC]/50 border-y border-[#C8A97E]/10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full md:w-1/2">
<div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-[#F8F1E7] border border-[#C8A97E]/30 flex items-center justify-center p-8 shadow-inner">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNDOEE5N0UiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative z-10 space-y-4 w-full max-w-sm">

<div className="bg-white rounded-lg p-4 shadow-sm border border-[#C8A97E]/20 opacity-80 animate-pulse">
<div className="h-4 bg-[#F3E8DC] rounded w-1/3 mb-4"></div>
<div className="h-20 bg-[#F8F1E7] rounded mb-2"></div>
<div className="h-8 bg-[#8B1E1E]/10 rounded w-1/2 mx-auto"></div>
</div>
<div className="bg-white rounded-lg p-4 shadow-md border border-[#C8A97E]/40 transform -rotate-2 scale-105">
<div className="flex justify-between items-center mb-3">
<div className="h-3 bg-[#1A1A1A] rounded w-1/4"></div>
<div className="h-3 bg-[#C8A97E] rounded w-1/4"></div>
</div>
<div className="h-16 bg-[#F8F1E7] rounded mb-3"></div>
<div className="h-8 bg-[#8B1E1E] rounded w-full flex items-center justify-center">
<div className="h-2 bg-white/50 rounded w-1/3"></div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-6">شنو داخل فالعرض؟</h2>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8895F] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-base font-medium text-[#1A1A1A]">Landing Page كاملة</h4>
<p className="text-sm text-[#555555]">صفحة واحدة مجهزة من الألف للياء.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8895F] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-base font-medium text-[#1A1A1A]">WhatsApp Integration</h4>
<p className="text-sm text-[#555555]">زر عائم وفورم كيرسل ديريكت للواتساب ديالك.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8895F] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-base font-medium text-[#1A1A1A]">Google Sheets</h4>
<p className="text-sm text-[#555555]">قاعدة بيانات بسيطة باش متضيع حتى طلب.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8895F] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-base font-medium text-[#1A1A1A]">Copywriting أساسي</h4>
<p className="text-sm text-[#555555]">كتابة نصوص مقنعة تشجع على الشراء.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8895F] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-base font-medium text-[#1A1A1A]">Design premium</h4>
<p className="text-sm text-[#555555]">تصميم نقي، أنيق وكيبين قيمتك فالسوق.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-4">آراء عملائنا</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/60 p-6 rounded-2xl border border-[#C8A97E]/20">
<div className="flex gap-1 mb-4 text-[#C8A97E]">
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<p className="text-[#1A1A1A] font-medium mb-2">"خدمة زوينة بزاف"</p>
<p className="text-sm text-[#555555]">صايبت عندهم الصفحة ديالي فنهار، الخدمة نقية والتعامل محترف.</p>
</div>
<div className="bg-white/60 p-6 rounded-2xl border border-[#C8A97E]/20">
<div className="flex gap-1 mb-4 text-[#C8A97E]">
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<p className="text-[#1A1A1A] font-medium mb-2">"صفحة احترافية"</p>
<p className="text-sm text-[#555555]">الثمن مناسب جداً مقارنة مع الجودة، ربط الواتساب خدام مزيان.</p>
</div>
<div className="bg-white/60 p-6 rounded-2xl border border-[#C8A97E]/20">
<div className="flex gap-1 mb-4 text-[#C8A97E]">
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<p className="text-[#1A1A1A] font-medium mb-2">"نتائج حقيقية"</p>
<p className="text-sm text-[#555555]">من نهار درت الصفحة والطلبات تزادو، شكراً ليكم على المجهود.</p>
</div>
</div>
</section>

<section className="py-20 px-4" id="order">
<div className="max-w-2xl mx-auto bg-[#F3E8DC] rounded-3xl p-6 md:p-10 shadow-xl border border-[#C8A97E]/40 relative overflow-hidden">

<div className="absolute -top-20 -left-20 w-40 h-40 bg-[#C8A97E] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
<div className="text-center mb-8 relative z-10">
<span className="inline-block px-3 py-1 bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-semibold rounded-full mb-3 tracking-wide">العرض محدود</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-2">احجز دابا قبل ما يسالي</h2>
<p className="text-sm text-[#555555]">عمر الاستمارة وغادي نوجهوك للواتساب باش نأكدو الطلب</p>
</div>

<form className="space-y-4 relative z-10" id="landing-form" novalidate="">
<div>
<label className="block text-xs font-medium text-[#555555] mb-1 ms-1" htmlFor="name">الاسم الكامل</label>
<input className="w-full bg-white/70 border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#555555]/50 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all" id="name" name="name" placeholder="مثال: يوسف أمين" type="text"/>
<p className="hidden text-[#8B1E1E] text-xs mt-1.5 ms-1 font-medium" id="error-name">المرجو إدخال الاسم الكامل</p>
</div>
<div>
<label className="block text-xs font-medium text-[#555555] mb-1 ms-1" htmlFor="phone">رقم الهاتف (واتساب)</label>
<input className="w-full bg-white/70 border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] text-right placeholder-[#555555]/50 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all" dir="ltr" id="phone" name="phone" placeholder="06XX XX XX XX" type="tel"/>
<p className="hidden text-[#8B1E1E] text-xs mt-1.5 ms-1 font-medium" id="error-phone">المرجو إدخال رقم الهاتف</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-[#555555] mb-1 ms-1" htmlFor="city">المدينة</label>
<input className="w-full bg-white/70 border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#555555]/50 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all" id="city" name="city" placeholder="مثال: الدار البيضاء" type="text"/>
<p className="hidden text-[#8B1E1E] text-xs mt-1.5 ms-1 font-medium" id="error-city">المرجو إدخال المدينة</p>
</div>
<div className="relative">
<label className="block text-xs font-medium text-[#555555] mb-1 ms-1" htmlFor="projectType">نوع المشروع</label>
<select className="w-full bg-white/70 border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all pr-10 cursor-pointer" id="projectType" name="projectType">
<option disabled="" selected="" value="">اختر النوع...</option>
<option value="e-commerce">E-commerce (منتجات)</option>
<option value="services">خدمات (Services)</option>
<option value="personal">صفحة شخصية / Portfolio</option>
<option value="other">أخرى</option>
</select>
<div className="absolute left-3 top-9 pointer-events-none text-[#A8895F]">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#555555] mb-1 ms-1" htmlFor="notes">ملاحظات إضافية (اختياري)</label>
<textarea className="w-full bg-white/70 border border-[#C8A97E]/30 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#555555]/50 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all resize-none" id="notes" name="notes" placeholder="أضف تفاصيل مشروعك هنا..." rows="3"></textarea>
</div>
<div className="hidden bg-[#25D366]/10 border border-[#25D366]/20 text-[#1A1A1A] px-4 py-3 rounded-xl text-sm text-center font-medium" id="form-success">
                    تم توجيهك إلى واتساب لإتمام الطلب
                </div>
<button className="w-full relative flex justify-center items-center gap-2 bg-[#8B1E1E] text-white px-6 py-4 rounded-xl text-base font-medium hover:bg-[#B3261E] transition-all shadow-lg shadow-[#8B1E1E]/20 group mt-2" id="submit-btn" type="submit">
<span className="flex items-center gap-2" id="btn-text">
                        إرسال الطلب عبر واتساب
                        <iconify-icon className="transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</button>
</form>
</div>
</section>

<footer className="border-t border-[#C8A97E]/20 py-8 text-center bg-[#F8F1E7]">
<div className="text-xl font-semibold tracking-tighter text-[#1A1A1A] uppercase mb-4">L<span className="text-[#C8A97E]">N</span>D<span className="text-[#8B1E1E]">G</span>.</div>
<p className="text-xs text-[#555555]">جميع الحقوق محفوظة © 2023</p>
</footer>

<a className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:shadow-[#25D366]/40 group" href="https://api.whatsapp.com/send?phone=212719943126" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 group-hover:hidden"></span>
</a>

<div className="md:hidden fixed bottom-0 left-0 w-full glass-effect border-t border-[#C8A97E]/20 p-4 z-40">
<a className="w-full flex justify-center items-center gap-2 bg-[#8B1E1E] text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg" href="#order">
            اطلب الآن - 150 درهم
        </a>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-500 bg-[#1A1A1A]/40 backdrop-blur-sm" id="promo-popup">
<div className="bg-[#F8F1E7] border border-[#C8A97E]/30 w-full max-w-sm rounded-3xl p-6 md:p-8 text-center shadow-2xl relative transform scale-95 transition-transform duration-500" id="popup-content">
<button className="absolute top-4 right-4 text-[#555555] hover:text-[#1A1A1A] transition-colors p-1" onclick="closePopup()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="w-16 h-16 bg-[#F3E8DC] rounded-full flex items-center justify-center mx-auto mb-4 text-[#A8895F]">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-[#1A1A1A] mb-2">🎁 عرض خاص!</h3>
<p className="text-sm text-[#555555] mb-6">احصل على Landing Page احترافية بـ 150 درهم فقط. العرض محدود لفترة قصيرة.</p>
<a className="block w-full bg-[#8B1E1E] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#B3261E] transition-all shadow-md shadow-[#8B1E1E]/20" href="#order" onclick="closePopup()">
                اطلب الآن
            </a>
</div>
</div>



    </>
  );
}
