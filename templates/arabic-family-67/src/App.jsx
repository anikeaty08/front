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



        // --- WhatsApp Automation Blueprint (As requested) ---
        /*
        Message 1 (Immediate):
        السلام عليكم ورحمة الله وبركاته 👋
        أهلاً بك مع المستشار أحمد خالد.
        رابط الفيديو المجاني "كيف تتعامل مع ابنك المراهق دون أن تخسره":
        [رابط صفحة الفيديو]
        أتمنى أن تجد فيه الفائدة لأسرة مستقرة بإذن الله.
        
        Message 2 (After 30 min):
        كيف وجدت الفيديو؟ أتمنى أن تكون استفدت.
        أحب أن أهديك نسخة إلكترونية من كتابي "دليل الإنقاذ السريع لمشاكل المراهقة"
        رابط التحميل المباشر (PDF): [رابط جوجل درايف]
        
        Message 3 (After 24 hours - Upsell):
        لدي كورس متكامل بعنوان "تربية الأبناء في زمن الشاشات"
        السعر العادي: 297$ | عرض خاص: 197$
        رابط التسجيل: [رابط الكورس]
        
        Message 4 (After purchase - Upsell 2):
        مبارك انضمامك للكورس 🎉
        فرصة للانضمام لبرنامج الإرشاد المكثف (10 مشاركين فقط)
        سعر خاص: 697$ بدلاً من 997$.
        للحجز: [رابط الإرشاد]
        */

        // Simple router function to switch between views
        function navigateTo(viewId) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show requested view
            const targetView = document.getElementById('view-' + viewId);
            if(targetView) {
                targetView.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Header state management
            const headerBadge = document.getElementById('header-badge');
            if (viewId === 'video') {
                headerBadge.classList.remove('hidden');
            } else {
                headerBadge.classList.add('hidden');
            }
        }

        // Handle WhatsApp form submission with validation and delay
        function handleWhatsappSubmit(e, formId) {
            e.preventDefault();
            const form = document.getElementById(formId);
            const input = form.querySelector('input[type="tel"]');
            const btn = form.querySelector('button');
            const btnText = btn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            
            const rawValue = input.value;
            // Clean non-digits
            const cleanNum = rawValue.replace(/\D/g, '');
            
            // Validation: 9 to 15 digits
            if (cleanNum.length < 9 || cleanNum.length > 15) {
                alert('عذراً، يرجى إدخال رقم هاتف صحيح يتكون من 9 إلى 15 رقماً.');
                input.focus();
                return;
            }

            // UI feedback: Loading state
            btnText.innerText = 'جاري الإرسال...';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Hide icon if exists
            const icon = form.querySelector('.btn-icon');
            if(icon) icon.style.display = 'none';

            // Simulate delay then action
            setTimeout(() => {
                // Open WhatsApp link
                const waLink = `https://wa.me/${cleanNum}?text=${encodeURIComponent('السلام عليكم، أود الحصول على الفيديو المجاني للمستشار أحمد خالد: [رابط الفيديو]')}`;
                window.open(waLink, '_blank');
                
                // Reset form button
                btnText.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
                if(icon) icon.style.display = 'inline-block';
                input.value = '';

                // Navigate to Thank you page
                navigateTo('thank-you');
            }, 3000);
        }

        // Handle Ebook request from Thank You page
        function handleEbookRequest() {
            // In a real scenario, this would trigger an API call or another WA message.
            alert("تم تسجيل طلبك! سيصلك رابط تحميل الكتاب على الواتساب قريباً.");
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
      

<nav className="absolute top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="navigateTo('landing')">
<div className="w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-white text-sm font-medium tracking-tight title-font shadow-sm">
                    AK
                </div>
<div>
<div className="flex items-center gap-2 text-base font-semibold text-[#1E293B] title-font tracking-tight">
                        المستشار أحمد خالد
                        <span className="hidden bg-[#25D366]/10 text-[#25D366] text-xs px-2 py-0.5 rounded-full font-medium" id="header-badge">محتوى حصري</span>
</div>
<div className="text-xs text-slate-500">خبير الإرشاد الأسري</div>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<span className="hover:text-[#1E293B] transition-colors cursor-pointer" onclick="navigateTo('landing')">الرئيسية</span>
<span className="hover:text-[#1E293B] transition-colors cursor-pointer" onclick="navigateTo('course')">الكورس الشامل</span>
<span className="hover:text-[#1E293B] transition-colors cursor-pointer" onclick="navigateTo('membership')">نادي الأسرة</span>
</div>
</div>
</nav>



<div className="page-view active pt-20" id="view-landing">

<section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center">
<div className="absolute top-0 start-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 bg-[#FEF3C7]/60 border border-amber-200/60 text-amber-800 rounded-lg px-3 py-2 text-xs font-medium mb-6 shadow-sm">
<iconify-icon className="text-base text-amber-600" icon="solar:clock-circle-linear"></iconify-icon>
                            تم مشاهدة هذا الفيديو 5,342 مرة هذا الأسبوع. 27 شخصاً يتابعونه الآن.
                        </div>
<h1 className="title-font text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E293B] leading-[1.3] mb-6">
                            كيف تتعامل مع ابنك المراهق <span className="text-[#25D366]">دون أن تخسره؟</span>
</h1>
<p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                            احصل على فيديو تدريبي مجاني مدته 20 دقيقة يشرح لك الحلول العملية والنهائية لتحديات المراهقة، وكيفية إعادة بناء جسور التواصل مع أبنائك.
                        </p>

<div className="max-w-md">
<div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm relative z-20">
<form className="flex flex-col sm:flex-row gap-2" id="hero-form" onsubmit="handleWhatsappSubmit(event, 'hero-form')">
<div className="relative flex-1">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:phone-rounded-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border-0 text-[#1E293B] text-sm rounded-lg block ps-10 p-3.5 focus:ring-2 focus:ring-[#25D366]/20 focus:bg-white outline-none transition-all placeholder:text-slate-400" dir="ltr" placeholder="رقم الواتساب الخاص بك" required="" type="tel"/>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium rounded-lg px-6 py-3.5 transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap min-w-[160px]" type="submit">
<span className="btn-text">أرسل الفيديو الآن</span>
<iconify-icon className="text-base btn-icon" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-5">
<div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
<iconify-icon className="text-[#25D366] text-base" icon="solar:shield-check-linear"></iconify-icon>
                                    خصوصية تامة
                                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
<iconify-icon className="text-[#25D366] text-base" icon="solar:history-linear"></iconify-icon>
                                    تسليم فوري
                                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
<iconify-icon className="text-[#25D366] text-base" icon="solar:wad-of-money-linear"></iconify-icon>
                                    مجاني بالكامل
                                </div>
</div>
</div>
</div>

<div className="relative mx-auto w-full max-w-md lg:max-w-full z-10">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative bg-slate-100">
<img alt="المستشار أحمد خالد" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-6 start-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-lg max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold title-font text-[#1E293B] tracking-tight">فيديو تدريبي</div>
</div>
<div className="text-xs text-slate-500">جاهز للمشاهدة فوراً عبر واتساب</div>
</div>
</div>
<div className="absolute -z-10 -bottom-6 -end-6 w-32 h-32 bg-slate-100 rounded-full"></div>
<div className="absolute -z-10 top-12 -start-6 w-16 h-16 border-4 border-[#25D366]/20 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce cursor-pointer" onclick="window.scrollBy({top: 500, behavior: 'smooth'})">
<span className="text-[10px] font-semibold tracking-tight title-font uppercase">اكتشف المزيد</span>
<iconify-icon className="text-xl" icon="solar:round-alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="title-font text-2xl md:text-3xl font-semibold tracking-tight text-[#1E293B] mb-4">هل يبدو هذا مألوفاً لك؟</h2>
<p className="text-base text-slate-500">نحن نتفهم تماماً التحديات اليومية التي تواجهها مع أبنائك المراهقين.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:user-cross-linear"></iconify-icon>
</div>
<h3 className="title-font text-lg font-semibold tracking-tight text-[#1E293B] mb-3 leading-snug">غربة وتحدي</h3>
<p className="text-sm text-slate-500 leading-relaxed">هل تشعر أن ابنك المراهق أصبح غريباً عنك ويتحداك في كل قرار تتخذه؟</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h3 className="title-font text-lg font-semibold tracking-tight text-[#1E293B] mb-3 leading-snug">صراع مستمر</h3>
<p className="text-sm text-slate-500 leading-relaxed">هل تحولت جلساتكم العائلية إلى حلبة صراع وصراخ دائم بدلاً من الحوار الهادئ؟</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:heart-broken-linear"></iconify-icon>
</div>
<h3 className="title-font text-lg font-semibold tracking-tight text-[#1E293B] mb-3 leading-snug">خوف من الفقدان</h3>
<p className="text-sm text-slate-500 leading-relaxed">هل تخشى أن تفقد السيطرة تماماً وتدمر علاقتك به إلى الأبد إذا استمر الوضع؟</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="title-font text-2xl md:text-3xl font-semibold tracking-tight text-[#1E293B] mb-6">
                    لا تدع الفجوة تتسع أكثر
                </h2>
<p className="text-base text-slate-500 mb-8">
                    أدخل رقم الواتساب الخاص بك وسنرسل لك رابط الفيديو المجاني في ثوانٍ.
                </p>
<div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm mx-auto max-w-md">
<form className="flex flex-col sm:flex-row gap-2" id="footer-form" onsubmit="handleWhatsappSubmit(event, 'footer-form')">
<div className="relative flex-1">
<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:phone-rounded-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border-0 text-[#1E293B] text-sm rounded-lg block ps-10 p-3.5 focus:ring-2 focus:ring-[#25D366]/20 focus:bg-white outline-none transition-all placeholder:text-slate-400" dir="ltr" placeholder="رقم الواتساب الخاص بك" required="" type="tel"/>
</div>
<button className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium rounded-lg px-8 py-3.5 transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap min-w-[160px]" type="submit">
<span className="btn-text">أرسل الفيديو الآن</span>
</button>
</form>
</div>
</div>
</section>
</div>



<div className="page-view pt-32 pb-20" id="view-thank-you">
<div className="max-w-3xl mx-auto px-6 text-center">

<div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#25D366]">
<iconify-icon className="text-4xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h1 className="title-font text-3xl md:text-4xl font-semibold tracking-tight text-[#1E293B] mb-4">
                تم إرسال رابط الفيديو إلى واتسابك!
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
                تفقد هاتفك خلال دقائق، ستجد رسالة منا تحتوي على رابط الفيديو المجاني.
            </p>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-sm text-slate-600 mb-12 max-w-lg mx-auto text-start space-y-3">
<p className="font-medium text-[#1E293B] mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500 text-lg" icon="solar:info-circle-linear"></iconify-icon>
                    إذا لم يصلك الرابط خلال 5 دقائق، تحقق من:
                </p>
<ul className="list-disc list-inside space-y-2 text-slate-500 ps-2">
<li>أن رقمك مسجل بشكل صحيح في واتساب.</li>
<li>أنك لم تحظر الرسائل من أرقام غير معروفة.</li>
<li>أضف رقمنا إلى جهات الاتصال: <span className="font-medium text-[#1E293B]" dir="ltr">+966 5X XXX XXXX</span></li>
</ul>
</div>

<div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl p-8 mb-10 shadow-sm">
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-[#25D366] border border-[#25D366]/10 mb-4 shadow-sm">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
                    هدية إضافية
                </div>
<h3 className="title-font text-xl md:text-2xl font-semibold tracking-tight text-[#1E293B] mb-3">
                    قبل أن تغادر... هل تريد نسخة من الكتاب الإلكتروني المجاني؟
                </h3>
<p className="text-base text-slate-500 mb-6">
                    كتاب "دليل الإنقاذ السريع لمشاكل المراهقة" يقدم حلولاً عملية لـ 10 مشاكل حقيقية تواجه الآباء يومياً.
                </p>
<button className="bg-[#1E293B] hover:bg-slate-800 text-white text-sm font-medium rounded-lg px-8 py-3.5 transition-colors shadow-md inline-flex items-center justify-center gap-2" onclick="handleEbookRequest()">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                    نعم، أرسل لي الكتاب مجاناً
                </button>
</div>
<div className="flex items-center justify-center gap-4">
<button className="text-sm font-medium text-slate-400 hover:text-[#1E293B] transition-colors" onclick="navigateTo('landing')">العودة للصفحة الرئيسية</button>
<span className="text-slate-300">•</span>
<button className="text-sm font-medium text-[#25D366] hover:text-[#20bd5a] transition-colors flex items-center gap-1" onclick="navigateTo('video')">
                    (للتجربة) الانتقال لصفحة الفيديو 
                    <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
</div>



<div className="page-view pt-24 pb-20 bg-slate-50 min-h-screen" id="view-video">
<div className="max-w-4xl mx-auto px-6">

<div className="bg-[#1E293B] aspect-video rounded-2xl shadow-xl overflow-hidden relative mb-10 border border-slate-200">
<img alt="Video Placeholder" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
<button className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-4xl ms-1" icon="solar:play-linear"></iconify-icon>
</button>
</div>
<div className="absolute top-4 start-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-medium tracking-tight title-font flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    الخطأ القاتل في تربية المراهقين
                </div>
<div className="absolute bottom-4 end-4 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded text-xs font-medium">
                    20:00
                </div>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="md:col-span-2">
<h2 className="title-font text-2xl font-semibold tracking-tight text-[#1E293B] mb-6">ملخص النقاط الرئيسية</h2>
<ul className="space-y-4">
<li className="flex gap-3">
<iconify-icon className="text-[#25D366] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 leading-relaxed">السبب الجذري لتمرد المراهق وكيفية تفكيك هذا السلوك بهدوء وبدون صراخ.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#25D366] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 leading-relaxed">استراتيجية "الإنصات النشط" التي تجبر ابنك على التحدث معك ومشاركتك أسراره.</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#25D366] text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 leading-relaxed">كيف تضع حدوداً صارمة دون أن تبدو كالسجان، وتحافظ على احترامه لك.</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-slate-200">
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#25D366] transition-colors">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
                            شارك الفيديو مع صديق عبر واتساب
                        </button>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
<h3 className="text-xs font-semibold title-font text-slate-400 uppercase tracking-widest mb-4">آراء سريعة</h3>
<div className="space-y-4">
<div className="text-xs text-slate-600 italic border-s-2 border-[#25D366] ps-3">"طبقت نصيحة الدقيقة 8، ولأول مرة منذ شهور يأتي ابني ليتحدث معي من تلقاء نفسه!" <br/><span className="font-semibold text-slate-400 mt-1 block">- أم يوسف</span></div>
<div className="text-xs text-slate-600 italic border-s-2 border-[#25D366] ps-3">"فيديو قصير لكنه غيّر نظرتي تماماً للصراخ المستمر في بيتنا." <br/><span className="font-semibold text-slate-400 mt-1 block">- أبو عبدالله</span></div>
</div>
</div>
</div>

<div className="bg-[#25D366] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg border border-[#20bd5a]">
<div className="absolute top-0 end-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
<div className="md:col-span-3">
<h2 className="title-font text-2xl md:text-3xl font-semibold tracking-tight mb-3">استفدت من الفيديو؟ تخيل لو حصلت على كورس كامل!</h2>
<p className="text-green-50 text-sm md:text-base mb-6 leading-relaxed">
                            كورس "تربية الأبناء في زمن الشاشات" برنامج متكامل بخصم خاص وحصري لمشاهدي هذا الفيديو فقط.
                        </p>
<div className="flex items-end gap-3 mb-8">
<span className="text-3xl font-semibold tracking-tight title-font">$197</span>
<span className="text-lg text-green-200 line-through mb-1">$297</span>
<span className="text-xs bg-white text-[#25D366] px-2 py-1 rounded font-semibold mb-1 ms-2">توفير 100$</span>
</div>
</div>
<div className="md:col-span-2 text-center md:text-end">
<button className="w-full bg-[#1E293B] hover:bg-slate-800 text-white text-base font-medium rounded-xl px-8 py-4 transition-all shadow-xl flex items-center justify-center gap-2" onclick="navigateTo('course')">
                            احصل على الكورس الآن
                            <iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<p className="text-xs text-green-100 mt-3 flex items-center justify-center md:justify-end gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            ضمان استرجاع 14 يوماً
                        </p>
</div>
</div>
</div>
</div>
</div>



<div className="page-view pt-24 pb-20" id="view-course">
<div className="max-w-5xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
<div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-6 border border-blue-100">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                        البرنامج الأكثر مبيعاً
                    </div>
<h1 className="title-font text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E293B] leading-[1.2] mb-4">
                        كورس تربية الأبناء في زمن الشاشات
                    </h1>
<p className="text-lg text-slate-500 mb-8">
                        برنامج متكامل لاستعادة التوازن والثقة في علاقتك بأبنائك المراهقين بخطوات علمية وعملية مجربة.
                    </p>
<div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
<div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
<span className="text-3xl font-semibold tracking-tight title-font text-[#25D366]">$197</span>
<span className="text-lg text-slate-400 line-through">$297</span>
<span className="text-xs bg-[#25D366]/10 text-[#25D366] px-2 py-1 rounded font-semibold">خصم 100$ لفترة محدودة</span>
</div>
<button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-base font-medium rounded-xl px-8 py-4 transition-all shadow-md flex items-center justify-center gap-2 mb-3" onclick="navigateTo('coaching')">
                            اشترك في الكورس الآن
                            <iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                            دفع آمن 100% - ضمان ذهبي
                        </p>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
<img alt="المستشار" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute -bottom-6 start-6 bg-[#FEF3C7] border border-amber-200 text-amber-800 rounded-xl p-4 shadow-lg flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
<iconify-icon className="text-2xl text-amber-600" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold title-font tracking-tight">المستشار أحمد خالد</div>
<div className="text-xs opacity-80">خبرة 15 سنة في الإرشاد الأسري</div>
</div>
</div>
</div>
</div>

<div className="mb-20">
<h2 className="title-font text-2xl font-semibold tracking-tight text-[#1E293B] mb-8 text-center">ماذا يشمل البرنامج؟</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
<div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:video-library-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold title-font text-[#1E293B] mb-1">12 ساعة مسجلة</div>
<div className="text-xs text-slate-500">محتوى عالي الجودة مقسم لوحدات</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
<div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:file-download-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold title-font text-[#1E293B] mb-1">7 ملفات PDF</div>
<div className="text-xs text-slate-500">أدوات وتقييمات للتطبيق العملي</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
<div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold title-font text-[#1E293B] mb-1">30 فيديو قصير</div>
<div className="text-xs text-slate-500">حلول سريعة لكل مشكلة طارئة</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
<div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold title-font text-[#1E293B] mb-1">شهادة معتمدة</div>
<div className="text-xs text-slate-500">عند إتمام مشاهدة الكورس كاملاً</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto">
<h2 className="title-font text-2xl font-semibold tracking-tight text-[#1E293B] mb-8 text-center">محتوى الكورس بالتفصيل</h2>
<div className="space-y-4">
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center font-semibold text-sm shrink-0">1</div>
<div>
<h3 className="text-sm font-semibold text-[#1E293B] mb-1">فهم سيكولوجية المراهق الحديث</h3>
<p className="text-xs text-slate-500">كيف يفكر المراهق اليوم؟ وما هو تأثير الشاشات على دماغه وانفعالاته.</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center font-semibold text-sm shrink-0">2</div>
<div>
<h3 className="text-sm font-semibold text-[#1E293B] mb-1">بناء جسور التواصل الآمن</h3>
<p className="text-xs text-slate-500">تقنيات الاستماع النشط وكيف تجعل ابنك يثق بك ويشاركك يومياته.</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center font-semibold text-sm shrink-0">3</div>
<div>
<h3 className="text-sm font-semibold text-[#1E293B] mb-1">إدارة الصراعات والغضب</h3>
<p className="text-xs text-slate-500">كيف تتعامل مع نوبات الغضب والتمرد بخطوات هادئة دون تدمير العلاقة.</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center font-semibold text-sm shrink-0">4</div>
<div>
<h3 className="text-sm font-semibold text-[#1E293B] mb-1">تنظيم وقت الشاشات وتكنولوجيا بذكاء</h3>
<p className="text-xs text-slate-500">استراتيجيات عملية لتقليل الإدمان الرقمي وفرض قوانين المنزل باحترام.</p>
</div>
</div>
</div>
</div>
</div>
</div>



<div className="page-view pt-32 pb-20 bg-slate-50 min-h-screen" id="view-coaching">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<div className="inline-flex items-center gap-2 bg-[#1E293B] text-white px-4 py-1.5 rounded-full text-xs font-medium mb-6 shadow-md tracking-widest uppercase">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                متاح لـ 10 مشاركين فقط
            </div>
<h1 className="title-font text-3xl md:text-5xl font-semibold tracking-tight text-[#1E293B] leading-[1.2] mb-6">
                برنامج الإرشاد الأسري المكثف
            </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
                6 جلسات جماعية مباشرة ومكثفة مع المستشار أحمد خالد لتطبيق استراتيجيات التربية على حالتك الخاصة خطوة بخطوة.
            </p>
</div>
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-8 items-start">
<div className="md:col-span-3 space-y-6">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1E293B] mb-1">6 جلسات أسبوعية عبر Zoom</h3>
<p className="text-sm text-slate-500">لقاءات حية مدة كل منها ساعتين لمناقشة التحديات وطرح الحلول بشكل مباشر.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:whatsapp-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1E293B] mb-1">متابعة شخصية عبر واتساب</h3>
<p className="text-sm text-slate-500">دعم مستمر وإجابة على أسئلتك الطارئة طوال فترة البرنامج (6 أسابيع).</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-[#1E293B] mb-1">مجموعة خاصة بالمشاركين</h3>
<p className="text-sm text-slate-500">بيئة آمنة لتبادل الخبرات مع آباء وأمهات يمرون بنفس التحديات.</p>
</div>
</div>
</div>
<div className="md:col-span-2">
<div className="bg-[#1E293B] text-white p-8 rounded-2xl shadow-xl sticky top-28">
<h3 className="text-lg font-semibold title-font tracking-tight mb-6 border-b border-slate-700 pb-4">استثمارك في استقرار أسرتك</h3>
<div className="mb-6">
<div className="text-slate-400 text-sm mb-1 line-through">السعر العادي: $997</div>
<div className="text-[#25D366] text-4xl font-semibold title-font tracking-tight mb-2">$697</div>
<div className="text-xs bg-slate-800 text-slate-300 inline-block px-2 py-1 rounded">سعر خاص لطلاب الكورس (توفير 300$)</div>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#25D366] text-lg" icon="solar:check-circle-linear"></iconify-icon> وصول للتسجيلات مدى الحياة</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#25D366] text-lg" icon="solar:check-circle-linear"></iconify-icon> ملف خطة التربية الشخصية</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#25D366] text-lg" icon="solar:check-circle-linear"></iconify-icon> مكالمة تقييم فردية (30 دقيقة)</li>
</ul>
<button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium rounded-xl px-6 py-4 transition-all shadow-md flex items-center justify-center gap-2" onclick="navigateTo('membership')">
                        احجز مقعدك الآن
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">تبدأ الدفعة القادمة بعد أسبوعين</p>
</div>
</div>
</div>
</div>



<div className="page-view pt-32 pb-20 min-h-screen" id="view-membership">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-3xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h1 className="title-font text-3xl md:text-5xl font-semibold tracking-tight text-[#1E293B] leading-[1.2] mb-4">
                نادي أسرة واعية
            </h1>
<p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">
                عضوية شهرية تمنحك الدعم المستمر والموارد المتجددة لتكون الأب/الأم الذي يحتاجه أبناؤك.
            </p>
<div className="grid md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">

<div className="text-start space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0 border border-slate-200">
<iconify-icon className="text-lg" icon="solar:play-stream-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#1E293B]">محاضرة حصرية كل أسبوع</div>
<div className="text-xs text-slate-500">مواضيع متجددة تناسب التحديات الحالية</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0 border border-slate-200">
<iconify-icon className="text-lg" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#1E293B]">لقاء مباشر شهري (Q&amp;A)</div>
<div className="text-xs text-slate-500">للإجابة على أسئلة الأعضاء المباشرة</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0 border border-slate-200">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#1E293B]">مكتبة موارد للتحميل</div>
<div className="text-xs text-slate-500">جداول، تقييمات، ومقالات عملية</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0 border border-slate-200">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#1E293B]">مجموعة مجتمع النادي</div>
<div className="text-xs text-slate-500">تواصل مستمر مع أعضاء النادي والمشرفين</div>
</div>
</div>
</div>

<div className="bg-white border-2 border-[#25D366] rounded-2xl p-8 shadow-xl relative">
<div className="absolute top-0 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider">الأفضل قيمة</div>
<div className="text-center mb-6 pt-4">
<div className="text-5xl font-semibold title-font text-[#1E293B] tracking-tight mb-2">$49 <span className="text-lg text-slate-400 font-normal">/ شهر</span></div>
<p className="text-xs text-slate-500">اشتراك يجدد تلقائياً، يمكنك الإلغاء في أي وقت.</p>
</div>
<button className="w-full bg-[#1E293B] hover:bg-slate-800 text-white text-sm font-medium rounded-xl px-6 py-4 transition-all shadow-md mb-4" onclick="alert('توجيه لصفحة الدفع...')">
                        انضم للنادي الآن
                    </button>
<p className="text-xs text-center text-slate-400">ضمان استرجاع أول 7 أيام</p>
</div>
</div>
</div>
</div>



<footer className="bg-white border-t border-slate-100 py-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-[#1E293B] cursor-pointer" onclick="navigateTo('landing')">
<div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-xs font-medium tracking-tight title-font">AK</div>
<span className="text-sm font-medium title-font tracking-tight">المستشار أحمد خالد © 2023</span>
</div>
<div className="text-xs text-slate-500 flex items-center gap-3">
<button className="hover:text-slate-800 transition-colors" onclick="navigateTo('landing')">الرئيسية</button>
<span>•</span>
<button className="hover:text-slate-800 transition-colors" onclick="navigateTo('course')">الكورس</button>
<span>•</span>
<button className="hover:text-slate-800 transition-colors" onclick="navigateTo('coaching')">الإرشاد</button>
<span>•</span>
<button className="hover:text-slate-800 transition-colors" onclick="navigateTo('membership')">النادي</button>
</div>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-[#1E293B] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="hover:text-[#1E293B] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-[#1E293B] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
