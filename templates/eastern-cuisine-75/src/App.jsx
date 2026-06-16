import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile drawer
      const drawer = document.getElementById('drawer');
      const overlay = document.getElementById('overlay');
      const openMenu = document.getElementById('openMenu');
      const closeMenu = document.getElementById('closeMenu');

      function openDrawer() {
        drawer.style.transform = 'translateX(0)';
        overlay.classList.remove('pointer-events-none');
        overlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
      }
      function closeDrawer() {
        drawer.style.transform = 'translateX(100%)';
        overlay.classList.add('pointer-events-none');
        overlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
      }
      openMenu.addEventListener('click', openDrawer);
      closeMenu.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id.length > 1) {
            e.preventDefault();
            document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeDrawer();
          }
        });
      });

      // Reveal on scroll
      const revealEls = document.querySelectorAll('[data-reveal]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));

      // Filters
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('[data-category]');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('bg-white/10'));
          btn.classList.add('bg-white/10');
          const f = btn.getAttribute('data-filter');
          cards.forEach(card => {
            const c = card.getAttribute('data-category');
            if (f === 'all' || f === c) {
              card.style.display = '';
              setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 10);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              setTimeout(() => { card.style.display = 'none'; }, 180);
            }
          });
        });
      });

      // Booking submit
      document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('تم استلام طلب الحجز. سنقوم بالتأكيد عبر الجوال خلال دقائق. شكراً لك!');
        e.target.reset();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
<div className="flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-2xl shadow-black/30">
<a aria-label="الصفحة الرئيسية" className="text-xl sm:text-2xl font-semibold tracking-[0.08em] hover:opacity-90 transition-opacity" href="#">
            ريحان
          </a>
<div className="hidden md:flex items-center gap-7 text-sm">
<a className="text-zinc-200 hover:text-white hover:opacity-80 transition-colors" href="#menu">القائمة</a>
<a className="text-zinc-200 hover:text-white hover:opacity-80 transition-colors" href="#story">من نحن</a>
<a className="text-zinc-200 hover:text-white hover:opacity-80 transition-colors" href="#reserve">الحجز</a>
<a className="text-zinc-200 hover:text-white hover:opacity-80 transition-colors" href="#contact">تواصل</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 transition-colors rounded-lg py-2 px-4 text-xs sm:text-sm font-medium outline outline-1 outline-white/10 hover:outline-white/20" href="#reserve">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
              احجز الآن
            </a>
</div>
<button aria-label="فتح القائمة" className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors p-2" id="openMenu">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 z-[60] translate-x-full transition-transform duration-300" id="drawer">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<span className="text-lg font-semibold tracking-[0.08em]">ريحان</span>
<button aria-label="إغلاق القائمة" className="rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors p-2" id="closeMenu">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-6 flex flex-col gap-4">
<a className="text-base py-2 hover:opacity-70 transition-opacity" href="#menu">القائمة</a>
<a className="text-base py-2 hover:opacity-70 transition-opacity" href="#story">من نحن</a>
<a className="text-base py-2 hover:opacity-70 transition-opacity" href="#reserve">الحجز</a>
<a className="text-base py-2 hover:opacity-70 transition-opacity" href="#contact">تواصل</a>
</div>
<div className="px-5 pt-2 pb-6 border-t border-white/10">
<a className="w-full inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 transition-colors rounded-lg py-3 px-4 text-sm font-medium outline outline-1 outline-white/10 hover:outline-white/20" href="#reserve">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
          احجز طاولتك
        </a>
</div>
</div>
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] opacity-0 pointer-events-none transition-opacity" id="overlay"></div>

<header className="relative min-h-[92vh] flex items-center justify-center">
<img alt="أطباق شرقية فاخرة" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cc940f5-4743-4d4c-878b-cb4fd6e65fcd_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950"></div>
<div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center gap-6" data-reveal="" style={{opacity: '0', transform: 'translateY(24px)', transition: 'all .8s cubic-bezier(.16,1,.3,1)'}}>
<div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 border border-white/15 backdrop-blur">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-xs">مطعم شرقي معاصر — الرياض</span>
</div>
<h1 className="text-[36px] sm:text-[56px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight">
            تجربة شرقية رفيعة المذاق
          </h1>
<p className="max-w-2xl text-zinc-300 text-base sm:text-lg leading-relaxed">
            مزة طازجة، مشاوي على الفحم، وأطباق عربية مميزة تُحضّر بعناية من أجود المكونات المحلية والعالمية.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 transition-colors rounded-lg py-3 px-6 text-sm font-medium outline outline-1 outline-white/10 hover:outline-white/20" href="#reserve">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
              احجز الآن
            </a>
<a className="inline-flex items-center gap-2 rounded-lg py-3 px-6 text-sm font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors" href="#menu">
<i className="w-5 h-5" data-lucide="utensils"></i>
              تصفّح القائمة
            </a>
</div>
<div className="flex items-center gap-5 text-sm text-zinc-300 pt-2">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
              حي العقيق — الرياض
            </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="star"></i>
              4.8 (1,240 تقييم)
            </div>
</div>
</div>
</div>
</header>

<section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="menu">
<div className="max-w-[1200px] mx-auto">
<div className="flex items-end justify-between gap-6 mb-10" data-reveal="" style={{opacity: '0', transform: 'translateY(22px)', transition: 'all .8s cubic-bezier(.16,1,.3,1)'}}>
<div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3">أطباقنا المميزة</h2>
<p className="text-zinc-400 text-sm sm:text-base">مختارات الشيف من المزة والمشاوي والأطباق الرئيسية.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white hover:opacity-80 transition-colors border-b border-white/20 hover:border-white/60 pb-1" href="#reserve">
<i className="w-4 h-4" data-lucide="concierge-bell"></i>
            اطلب طاولة
          </a>
</div>

<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6" data-reveal="" style={{opacity: '0', transform: 'translateY(18px)', transition: 'all .8s cubic-bezier(.16,1,.3,1)'}}>
<button className="filter-btn inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors px-4 py-2 text-sm bg-white/10" data-filter="all">
            الكل
          </button>
<button className="filter-btn inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors px-4 py-2 text-sm" data-filter="mezze">
            مزة
          </button>
<button className="filter-btn inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors px-4 py-2 text-sm" data-filter="grill">
            مشاوي
          </button>
<button className="filter-btn inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors px-4 py-2 text-sm" data-filter="mains">
            أطباق رئيسية
          </button>
<button className="filter-btn inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors px-4 py-2 text-sm" data-filter="dessert">
            حلويات
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="mezze" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1)'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="حمص بيروتي" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                32 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">حمص بيروتي</h3>
<span className="text-xs text-zinc-400">مزة</span>
</div>
<p className="text-sm text-zinc-300 mt-2">حمص بالطحينة وزيت الزيتون مع صنوبر محمّص وتتبيلة ليمون.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="flame"></i>
                  نباتي
                </div>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="grill" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .05s'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="كباب لحم على الفحم" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=90&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                79 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">كباب لحم على الفحم</h3>
<span className="text-xs text-zinc-400">مشاوي</span>
</div>
<p className="text-sm text-zinc-300 mt-2">لحم بلدي متبّل بتوابل شرقية، يُقدّم مع خبز طازج وسلطة.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="beef"></i>
                  لحم
                </div>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="mains" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .1s'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="كبسة دجاج فاخرة" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                68 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">كبسة دجاج فاخرة</h3>
<span className="text-xs text-zinc-400">رئيسي</span>
</div>
<p className="text-sm text-zinc-300 mt-2">أرز بسمتي مع بهارات خاصة، دجاج طري ومكسرات محمّصة.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="drumstick"></i>
                  دجاج
                </div>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="mains" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .15s'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="منسف لحم بلدي" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                98 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">منسف لحم بلدي</h3>
<span className="text-xs text-zinc-400">رئيسي</span>
</div>
<p className="text-sm text-zinc-300 mt-2">لحم مطبوخ باللبن الجميد مع أرز وسمن بلدي وصنوبر.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="beef"></i>
                  لحم
                </div>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="mezze" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .2s'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="تبولة لبنانية" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1559847844-5315695dadae?q=90&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                29 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">تبولة لبنانية</h3>
<span className="text-xs text-zinc-400">مزة</span>
</div>
<p className="text-sm text-zinc-300 mt-2">بقدونس طازج، برغل، رمان ولمسة ليمون مع زيت زيتون بكر.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="leaf"></i>
                  صحي
                </div>
</div>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors" data-category="dessert" data-reveal="" style={{opacity: '0', transform: 'translateY(26px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .25s'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="بقلاوة فستق" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1523983302122-73e869e1f850?q=90&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-white/90 text-zinc-900 rounded-full px-3 py-1 text-xs font-medium">
                24 ر.س
              </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold">بقلاوة فستق</h3>
<span className="text-xs text-zinc-400">حلو</span>
</div>
<p className="text-sm text-zinc-300 mt-2">طبقات رقائق مقرمشة مع فستق شهي وعسل زهري.</p>
<div className="flex items-center justify-between mt-4">
<button className="inline-flex items-center gap-2 text-sm border-b border-white/20 hover:border-white/60 transition-colors pb-1">
<i className="w-4 h-4" data-lucide="plus"></i>
                  أضف للطلب
                </button>
<div className="inline-flex items-center gap-2 text-zinc-300 text-xs">
<i className="w-4 h-4" data-lucide="cupcake"></i>
                  حلو
                </div>
</div>
</div>
</article>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30 transition-colors rounded-lg py-3 px-4 text-sm font-medium outline outline-1 outline-emerald-500/30" href="https://wa.me/966500000000" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
            اطلب عبر واتساب
          </a>
<a className="inline-flex items-center gap-2 rounded-lg py-3 px-4 text-sm font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors" href="tel:+966500000000">
<i className="w-5 h-5" data-lucide="phone"></i>
            اتصال مباشر
          </a>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="story">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-5" data-reveal="" style={{opacity: '0', transform: 'translateY(22px)', transition: 'all .9s cubic-bezier(.16,1,.3,1)'}}>
<div className="border-r-2 border-white/15 pr-6">
<span className="block text-xs text-zinc-400 mb-3">قصتنا</span>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">نكهات أصيلة بتقديم معاصر</h3>
<p className="text-zinc-300 leading-relaxed">
              في ريحان نجمع بين وصفات من المشرق العربي وتقنيات طهو حديثة، مع اعتماد مكونات موسمية مختارة بعناية. هدفنا تقديم تجربة فاخرة تبدأ من الترحيب وحتى آخر لقمة.
            </p>
<div className="flex items-center gap-4 mt-6 text-sm text-zinc-300">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="leaf"></i>
                مكونات طازجة
              </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                تقديم راقٍ
              </div>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-4" data-reveal="" style={{opacity: '0', transform: 'translateY(22px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .08s'}}>
<div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
<img alt="تجربة تقديم معاصرة" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 mt-8">
<img alt="مشاوي على الفحم" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=90&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.03] border-y border-white/10">
<div className="max-w-[1200px] mx-auto">
<div className="flex items-end justify-between mb-6">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">قالوا عنا</h3>
<div className="text-xs text-zinc-400 hidden sm:block">اسحب لليمين</div>
</div>
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
<div className="min-w-[300px] max-w-sm snap-end rounded-2xl border border-white/10 bg-white/5 p-5" data-reveal="" style={{opacity: '0', transform: 'translateY(18px)', transition: 'all .8s cubic-bezier(.16,1,.3,1)'}}>
<div className="flex items-center gap-3 mb-3">
<img alt="ضيف" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=200"/>
<div>
<div className="text-sm font-medium">سارة المانع</div>
<div className="text-xs text-zinc-400">رياض</div>
</div>
</div>
<p className="text-sm text-zinc-200 leading-relaxed">نكهات رائعة وخدمة راقية. تجربة تستحق التكرار!</p>
<div className="flex items-center gap-1 mt-3 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
<div className="min-w-[300px] max-w-sm snap-end rounded-2xl border border-white/10 bg-white/5 p-5" data-reveal="" style={{opacity: '0', transform: 'translateY(18px)', transition: 'all .8s cubic-bezier(.16,1,.3,1) .06s'}}>
<div className="flex items-center gap-3 mb-3">
<img alt="ضيف" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200"/>
<div>
<div className="text-sm font-medium">عبدالله الحربي</div>
<div className="text-xs text-zinc-400">الرياض</div>
</div>
</div>
<p className="text-sm text-zinc-200 leading-relaxed">المشاوي على أصولها ومقبلات ولا أروع. شكراً ريحان!</p>
<div className="flex items-center gap-1 mt-3 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<div className="min-w-[300px] max-w-sm snap-end rounded-2xl border border-white/10 bg-white/5 p-5" data-reveal="" style={{opacity: '0', transform: 'translateY(18px)', transition: 'all .8s cubic-bezier(.16,1,.3,1) .12s'}}>
<div className="flex items-center gap-3 mb-3">
<img alt="ضيف" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200"/>
<div>
<div className="text-sm font-medium">نورة السبيعي</div>
<div className="text-xs text-zinc-400">حي العقيق</div>
</div>
</div>
<p className="text-sm text-zinc-200 leading-relaxed">جلسات جميلة وهدوء. حلوياتهم ختام مثالي للسهرة.</p>
<div className="flex items-center gap-1 mt-3 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="reserve">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8" data-reveal="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all .9s cubic-bezier(.16,1,.3,1)'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">احجز طاولتك</h3>
<p className="text-sm text-zinc-400 mt-1">نؤكد حجوزاتكم خلال دقائق.</p>
</div>
<i className="w-8 h-8 text-zinc-300" data-lucide="calendar-range"></i>
</div>
<form className="space-y-4" id="bookingForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-zinc-400">الاسم الكامل</label>
<input className="w-full mt-2 bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm placeholder:text-zinc-500" placeholder="اكتب اسمك" required="" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400">رقم الجوال</label>
<input className="w-full mt-2 bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm placeholder:text-zinc-500" placeholder="05XXXXXXXX" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="relative">
<label className="text-xs text-zinc-400">التاريخ</label>
<input className="w-full mt-2 bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm [color-scheme:dark]" required="" type="date"/>
</div>
<div className="relative">
<label className="text-xs text-zinc-400">الوقت</label>
<input className="w-full mt-2 bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm [color-scheme:dark]" required="" type="time"/>
</div>
<div className="relative">
<label className="text-xs text-zinc-400">عدد الضيوف</label>
<div className="relative mt-2">
<select className="appearance-none w-full bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm">
<option className="bg-zinc-900">1</option>
<option className="bg-zinc-900">2</option>
<option className="bg-zinc-900">3</option>
<option className="bg-zinc-900">4</option>
<option className="bg-zinc-900">5</option>
<option className="bg-zinc-900">6</option>
<option className="bg-zinc-900">7</option>
<option className="bg-zinc-900">8</option>
</select>
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">ملاحظات خاصة (اختياري)</label>
<textarea className="w-full mt-2 bg-transparent rounded-lg border border-white/15 focus:border-white/40 transition-colors outline-none px-4 py-3 text-sm placeholder:text-zinc-500 resize-y" placeholder="مثال: طاولة خارجية، مناسبة خاصة..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 transition-colors rounded-lg py-3 px-4 text-sm font-medium outline outline-1 outline-white/10 hover:outline-white/20" type="submit">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
              تأكيد الحجز
            </button>
<div className="text-xs text-zinc-400 pt-1">بالضغط على تأكيد، سيتم التواصل لتأكيد الحجز خلال دقائق.</div>
</form>
</div>
<div className="space-y-6">
<div className="rounded-2xl border border-white/10 overflow-hidden" data-reveal="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .06s'}}>
<iframe className="w-full h-[320px] md:h-[380px]" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Riyadh&amp;output=embed" title="الموقع على الخريطة"></iframe>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6" data-reveal="" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all .9s cubic-bezier(.16,1,.3,1) .12s'}}>
<h4 className="text-lg font-semibold mb-3">معلومات التواصل</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                الرياض — حي العقيق، شارع العليا
              </div>
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity" href="tel:+966500000000">
<i className="w-4 h-4" data-lucide="phone"></i>
                0500000000
              </a>
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity" href="mailto:hello@rehan.sa">
<i className="w-4 h-4" data-lucide="mail"></i>
                hello@rehan.sa
              </a>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
                يوميًا: 12م - 12ص
              </div>
</div>
<div className="flex items-center gap-3 mt-4">
<a aria-label="انستقرام" className="inline-flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors w-10 h-10" href="#">
<i className="w-4.5 h-4.5" data-lucide="instagram"></i>
</a>
<a aria-label="تويتر" className="inline-flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors w-10 h-10" href="#">
<i className="w-4.5 h-4.5" data-lucide="twitter"></i>
</a>
<a aria-label="فيسبوك" className="inline-flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors w-10 h-10" href="#">
<i className="w-4.5 h-4.5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10" id="contact">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="text-xl font-semibold tracking-[0.08em]">ريحان</div>
<div className="text-xs text-zinc-400 mt-1">© 2025 جميع الحقوق محفوظة — الرياض</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-zinc-300 hover:text-white hover:opacity-80 transition-colors" href="#menu">القائمة</a>
<a className="text-zinc-300 hover:text-white hover:opacity-80 transition-colors" href="#story">من نحن</a>
<a className="text-zinc-300 hover:text-white hover:opacity-80 transition-colors" href="#reserve">الحجز</a>
<a className="text-zinc-300 hover:text-white hover:opacity-80 transition-colors" href="#contact">تواصل</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
