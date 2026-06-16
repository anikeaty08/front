import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                        const modules = [
                            { title: "المقدمة", time: "0:02" },
                            { title: "الكاميرات الاحترافية مقابل كاميرات الجوال", time: "0:10" },
                            { title: "أنواع كاميرات الجوال ووظائفها", time: "0:04" },
                            { title: "نصائح قبل التصوير", time: "0:01" },
                            { title: "إعدادات كاميرا الجوال", time: "0:07" },
                            { title: "دليل إعدادات iPhone Pro", time: "ملف" },
                            { title: "أساسيات التصوير", time: "0:25" },
                            { title: "إنتاج الأفلام القصيرة", time: "0:16" },
                            { title: "تصوير البورتريه", time: "0:04" },
                            { title: "التصوير التجاري والإعلاني", time: "0:07" },
                            { title: "تصوير الأطعمة والمشروبات", time: "0:09" },
                            { title: "تصوير الطبيعة", time: "0:03" },
                            { title: "التصوير الليلي", time: "0:03" },
                            { title: "تحرير الصور بـ Lightroom", time: "0:28" },
                            { title: "التصميم بـ GoDaddy Studio", time: "0:20" },
                            { title: "الخاتمة", time: "0:01" },
                            { title: "ملخص الورشة PDF", time: "ملف" }
                        ];

                        document.write(modules.map((m, i) => `
                            <details class="group bg-white rounded-2xl border border-slate-200 overflow-hidden flash-container transition-shadow hover:shadow-md" ${i === 6 ? 'open' : ''}>
                                <summary class="flex items-center justify-between p-5 cursor-pointer select-none flash-card">
                                    <div class="flex items-center gap-4">
                                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold group-open:bg-[#FEB145] group-open:text-white transition-colors">
                                            ${i + 1}
                                        </div>
                                        <h3 class="text-base font-semibold text-slate-800">${m.title}</h3>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <span class="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">${m.time}</span>
                                        <iconify-icon icon="solar:alt-arrow-down-bold-duotone" class="text-slate-400 transition-transform group-open:rotate-180"></iconify-icon>
                                    </div>
                                </summary>
                                <div class="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50 bg-slate-50/50">
                                    هذا القسم يغطي تفاصيل ${m.title} بشكل عملي ومباشر لتطبيق المهارات فوراً.
                                </div>
                            </details>
                        `).join(''));
                    


        // --- Flashlight Effect ---
        document.querySelectorAll('.flash-container').forEach(container => {
            container.addEventListener('mousemove', e => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                container.style.setProperty('--mouse-x', `${x}px`);
                container.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- Staggered Reveal Animation ---
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- Holodex Carousel Logic ---
        const reviews = [
            { text: "الدورة غيرت نظرتي لتصوير الجوال تماماً. التفاصيل المشروحة وطريقة التعديل نقلت صوري لمستوى احترافي لم أتخيله.", name: "أحمد س.", rating: 5 },
            { text: "أفضل استثمار عملته لتطوير متجري. تصوير المنتجات صار أسهل والنتائج مبهرة جداً بفضل إعدادات الإضاءة البسيطة.", name: "سارة م.", rating: 5 },
            { text: "الشرح واضح ومبسط والتسلسل منطقي جداً. كوني مبتدئ قدرت أفهم كل شيء وأطبق فوراً. شكراً أستاذ عبدالرحمن.", name: "خالد ع.", rating: 5 }
        ];

        const holoContainer = document.getElementById('holoContainer');
        let currentIndex = 0;

        // Initialize Cards
        reviews.forEach((review, i) => {
            const card = document.createElement('div');
            // Adding flash-container to inner cards for hover effect
            card.className = `holo-item w-full h-full absolute top-0 left-0 flash-container rounded-3xl p-[1px]`;
            
            // Generate Stars
            const stars = Array(review.rating).fill('<iconify-icon icon="solar:star-bold" class="text-[#FEB145]"></iconify-icon>').join('');

            card.innerHTML = `
                <div class="flash-card w-full h-full bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
                    <div>
                        <div class="flex gap-1 mb-4 text-sm">${stars}</div>
                        <p class="text-lg text-slate-700 leading-relaxed font-medium">"${review.text}"</p>
                    </div>
                    <div class="flex items-center gap-3 mt-6">
                        <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold border border-slate-200">${review.name.charAt(0)}</div>
                        <span class="text-sm font-bold text-slate-900">${review.name}</span>
                    </div>
                </div>
            `;
            holoContainer.appendChild(card);
        });

        const cards = document.querySelectorAll('.holo-item');

        function updateHolodex() {
            cards.forEach((card, i) => {
                // Logic for 3 cards in loop (RTL considerations)
                // In RTL: translate-x positive moves right (visually previous), negative moves left (visually next)
                
                let diff = i - currentIndex;
                if (diff < -1) diff += cards.length;
                if (diff > 1) diff -= cards.length;

                // Reset classes
                card.style.zIndex = '0';
                card.style.opacity = '0';
                card.style.transform = 'translateX(0) scale(0.5) rotateY(0deg)';
                card.style.pointerEvents = 'none';

                if (diff === 0) {
                    // Center Card
                    card.style.zIndex = '20';
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
                    card.style.pointerEvents = 'auto';
                } else if (diff === 1) {
                    // Visually Left Card (Next in array)
                    card.style.zIndex = '10';
                    card.style.opacity = '0.5';
                    // Negative translate for RTL moves it left
                    card.style.transform = `translateX(-55%) scale(0.8) rotateY(-15deg)`;
                } else if (diff === -1) {
                    // Visually Right Card (Prev in array)
                    card.style.zIndex = '10';
                    card.style.opacity = '0.5';
                    // Positive translate for RTL moves it right
                    card.style.transform = `translateX(55%) scale(0.8) rotateY(15deg)`;
                }
            });
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateHolodex();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateHolodex();
        });

        // Init Carousel and re-apply flashlight to dynamically created cards
        updateHolodex();
        
        document.querySelectorAll('.holo-item.flash-container').forEach(container => {
            container.addEventListener('mousemove', e => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                container.style.setProperty('--mouse-x', `${x}px`);
                container.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-[-1] bg-grid h-[100vh] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white font-bold text-xl tracking-tighter shadow-lg shadow-slate-900/20">
                    ع
                </div>
<span className="font-bold text-xl tracking-tight text-slate-900">عبدالرحمن الفاضل</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">الرئيسية</a>
<a className="hover:text-slate-900 transition-colors" href="#">مكتبتي</a>
<a className="hover:text-slate-900 transition-colors" href="#">منتجاتي</a>
<a className="hover:text-slate-900 transition-colors" href="#">جلساتي</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
                    تسجيل الدخول
                </a>
<a className="h-10 px-5 rounded-full bg-slate-900 text-white text-sm font-medium flex items-center justify-center hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10" href="#">
                    ابدأ الآن
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center">

<svg className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-[-1] pointer-events-none hidden md:block" fill="none" viewbox="0 0 800 400">
<path className="noodle-path" d="M400,0 C400,200 100,200 100,400" stroke="url(#gradient1)" stroke-dasharray="8 8" strokeWidth="1.5"></path>
<path className="noodle-path" d="M400,0 C400,200 700,200 700,400" stroke="url(#gradient2)" stroke-dasharray="8 8" strokeWidth="1.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gradient1" x1="400" x2="100" y1="0" y2="400">
<stop stop-color="#FEB145" stop-opacity="0.5"></stop>
<stop offset="1" stop-color="#cbd5e1" stop-opacity="0.1"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="gradient2" x1="400" x2="700" y1="0" y2="400">
<stop stop-color="#FEB145" stop-opacity="0.5"></stop>
<stop offset="1" stop-color="#cbd5e1" stop-opacity="0.1"></stop>
</lineargradient>
</defs>
</svg>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium mb-8">
<iconify-icon className="text-[#FEB145] text-lg" icon="solar:verified-check-bold-duotone"></iconify-icon>
<span>ورشة عمل معتمدة من منصة معروف</span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                التصوير الإحترافي <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-bl from-amber-400 to-[#FEB145]">بالجوال</span>
</h1>
<p className="reveal delay-200 text-xl md:text-3xl text-slate-600 mb-12 font-medium">
                الرحلة من مجرد التقاط .. إلى تصوير
                <span className="word-slider text-slate-900 font-bold bg-[#FEB145]/10 px-2 rounded-lg">
<span>صفحات</span>
<span>منتجات</span>
<span>تسويق</span>
</span>
                مُبهر!
            </p>

<div className="reveal delay-300 w-full max-w-md mx-auto flash-container rounded-3xl p-[1px] shadow-2xl shadow-slate-200/50 cursor-pointer">
<div className="flash-card rounded-3xl p-8 flex flex-col items-center bg-white border border-slate-100">
<div className="flex items-center gap-3 mb-4">
<span className="text-slate-400 line-through text-2xl font-medium">490 ريال</span>
<div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-tight">خصم 70%</div>
</div>
<div className="flex items-baseline gap-2 text-[#FEB145] mb-8">
<span className="text-6xl font-bold tracking-tighter">149</span>
<span className="text-xl font-medium">ر.س</span>
</div>
<button className="w-full h-14 rounded-2xl bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 group">
                        اشترك الآن وابدأ التعلم
                        <iconify-icon className="text-xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-bold-duotone"></iconify-icon>
</button>
<p className="text-slate-500 text-xs mt-4 flex items-center gap-2">
<iconify-icon icon="solar:lock-password-bold-duotone"></iconify-icon> دفع آمن وموثوق
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900 text-white">

<div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
<div className="relative w-full max-w-5xl h-full flex justify-between px-20">
<div className="w-[1px] h-full bg-slate-800 relative overflow-hidden"><div className="beam"></div></div>
<div className="w-[1px] h-full bg-slate-800 relative overflow-hidden"><div className="beam" style={{animationDelay: '1.5s'}}></div></div>
<div className="w-[1px] h-full bg-slate-800 relative overflow-hidden"><div className="beam" style={{animationDelay: '0.7s'}}></div></div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">لماذا هذه الورشة؟</h2>
<p className="text-lg text-slate-400">مميزات صُممت لتجعل رحلة تعلمك أسهل وأكثر متعة.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="reveal delay-100 flex flex-col items-center text-center group">
<div className="sonar-wrapper mb-8">
<div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
<iconify-icon className="text-4xl text-[#FEB145]" icon="solar:play-circle-bold-duotone"></iconify-icon>
</div>
<div className="sonar-wave"></div>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">سهلة ومصورة</h3>
<p className="text-sm text-slate-400 leading-relaxed">شروحات فيديو عالية الجودة تغطي كل التفاصيل خطوة بخطوة بطريقة بصرية ممتعة.</p>
</div>

<div className="reveal delay-200 flex flex-col items-center text-center group">
<div className="sonar-wrapper mb-8">
<div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
<iconify-icon className="text-4xl text-[#FEB145]" icon="solar:calendar-minimalistic-bold-duotone"></iconify-icon>
</div>
<div className="sonar-wave" style={{animationDelay: '0.5s'}}></div>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">لا تتطلب حضور</h3>
<p className="text-sm text-slate-400 leading-relaxed">تعلم بالسرعة التي تناسبك، من أي مكان وفي أي وقت، بدون التزام بمواعيد محددة.</p>
</div>

<div className="reveal delay-300 flex flex-col items-center text-center group">
<div className="sonar-wrapper mb-8">
<div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
<iconify-icon className="text-4xl text-[#FEB145]" icon="solar:letter-opened-bold-duotone"></iconify-icon>
</div>
<div className="sonar-wave" style={{animationDelay: '1s'}}></div>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">تصلك على الإيميل</h3>
<p className="text-sm text-slate-400 leading-relaxed">بمجرد الاشتراك، يصلك وصول فوري لجميع المحتويات والملحقات مباشرة عبر بريدك الإلكتروني.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="w-full md:w-1/3 sticky top-32 reveal">
<div className="w-12 h-12 rounded-xl bg-[#FEB145]/20 text-[#FEB145] flex items-center justify-center text-2xl mb-6">
<iconify-icon icon="solar:book-bookmark-bold-duotone"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">محتوى الورشة</h2>
<p className="text-lg text-slate-600 mb-6">17 مادة تعليمية صُممت بعناية لتنقلك من الأساسيات وحتى احتراف التعديل والإنتاج.</p>
<div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 inline-block">
<p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-[#FEB145]" icon="solar:stopwatch-bold-duotone"></iconify-icon>
                            إجمالي الوقت: +3 ساعات
                        </p>
</div>
</div>
<div className="w-full md:w-2/3 flex flex-col gap-3 reveal delay-200">


</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-50 border-y border-slate-200">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
<iconify-icon className="text-[40rem]" icon="solar:quote-right-bold-duotone"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">آراء شركاء النجاح</h2>
<p className="text-lg text-slate-600">تجارب حقيقية من متدربين صنعوا الفارق بعد الورشة.</p>
</div>
<div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center holo-carousel reveal delay-200">

<button className="absolute right-0 md:right-10 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-[#FEB145] hover:scale-110 transition-all" id="nextBtn">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-right-bold-duotone"></iconify-icon>
</button>
<button className="absolute left-0 md:left-10 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-[#FEB145] hover:scale-110 transition-all" id="prevBtn">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-left-bold-duotone"></iconify-icon>
</button>

<div className="relative w-[300px] md:w-[450px] h-full flex items-center justify-center" id="holoContainer">

</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 reveal flash-container p-[1px] rounded-[3rem]">
<div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 flash-card flex items-center justify-center border border-slate-200 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50"></div>
<iconify-icon className="text-[10rem] text-slate-300 relative z-10" icon="solar:user-id-bold-duotone"></iconify-icon>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl border border-slate-200 shadow-sm z-20 flex items-center gap-2">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
<span className="text-xs font-bold text-slate-700">مدرب معتمد</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 reveal delay-200">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">عبدالرحمن الفاضل</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        خبير في التصوير الفوتوغرافي وصناعة المحتوى البصري. أسعى لتبسيط مفاهيم التصوير المعقدة لتتمكن من التقاط صور احترافية باستخدام الأداة التي في جيبك دائماً.. هاتفك المحمول.
                    </p>
<div className="flex flex-col gap-4 mb-10">
<div className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:verified-check-bold-duotone"></iconify-icon></div>
                            موثق في منصة معروف
                        </div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-700">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon></div>
                            آلاف المتدربين المستفيدين
                        </div>
</div>

<div className="pt-8 border-t border-slate-100">
<p className="text-xs text-slate-400 font-medium mb-4">طرق الدفع المدعومة</p>
<div className="flex flex-wrap gap-3">

<div className="h-8 px-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-600 tracking-tight">MADA</div>
<div className="h-8 px-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-600 tracking-tight">APPLE PAY</div>
<div className="h-8 px-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-600 tracking-tight">VISA</div>
<div className="h-8 px-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-600 tracking-tight">MASTERCARD</div>
<div className="h-8 px-3 bg-pink-50 border border-pink-200 rounded flex items-center justify-center text-xs font-bold text-pink-600 tracking-tight">TAMARA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center font-bold shadow-lg border border-slate-800">ع</div>
<span className="font-bold text-lg tracking-tight">عبدالرحمن الفاضل</span>
</div>
<p className="text-sm mb-6 max-w-sm leading-relaxed">
                    أكاديمية تعليمية متخصصة في دورات التصوير والمنتجات الرقمية، نهدف للارتقاء بمهاراتك البصرية.
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#FEB145] hover:text-slate-900 hover:border-[#FEB145] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:chat-round-line-bold-duotone"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#FEB145] hover:text-slate-900 hover:border-[#FEB145] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:camera-bold-duotone"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#FEB145] hover:text-slate-900 hover:border-[#FEB145] transition-all" href="#"><iconify-icon className="text-xl" icon="solar:paperclip-2-bold-duotone"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">روابط سريعة</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">الرئيسية</a></li>
<li><a className="hover:text-white transition-colors" href="#">من نحن؟</a></li>
<li><a className="hover:text-white transition-colors" href="#">مكتبتي</a></li>
<li><a className="hover:text-white transition-colors" href="#">للتواصل والأستفسار</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-tight">السياسات</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">شروط الاستخدام</a></li>
<li><a className="hover:text-white transition-colors" href="#">سياسة الخصوصية</a></li>
</ul>
<div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
<p className="mb-1 text-slate-500">الرقم الضريبي:</p>
<p className="text-slate-300 font-mono tracking-wider">302268737200003</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p>جميع الحقوق محفوظة © 2026 عبدالرحمن الفاضل</p>
</div>
</footer>



    </>
  );
}
