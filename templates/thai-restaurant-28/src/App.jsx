import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.filter-btn');
            const sections = document.querySelectorAll('.menu-section');

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Reset styling for all buttons
                    buttons.forEach(b => {
                        b.classList.remove('bg-stone-200', 'text-stone-900', 'bg-amber-900/20');
                        
                        if (b.dataset.filter === 'special') {
                            b.classList.add('text-amber-500/80');
                        } else {
                            b.classList.add('text-stone-400');
                        }
                    });

                    // Set active style for clicked button
                    if (btn.dataset.filter === 'special') {
                        btn.classList.remove('text-amber-500/80');
                        btn.classList.add('bg-amber-900/20', 'text-amber-400');
                    } else {
                        btn.classList.remove('text-stone-400');
                        btn.classList.add('bg-stone-200', 'text-stone-900');
                    }

                    const target = btn.getAttribute('data-filter');

                    // Filter sections
                    sections.forEach(sec => {
                        if (target === 'all' || sec.id === target) {
                            sec.style.display = 'block';
                            sec.classList.remove('animate-fade-up');
                            // Trigger reflow for animation restart
                            void sec.offsetWidth;
                            sec.classList.add('animate-fade-up');
                        } else {
                            sec.style.display = 'none';
                        }
                    });

                    // Scroll to top of menu list slightly if not 'all'
                    if(target !== 'all' && window.scrollY > 300) {
                        const targetEl = document.getElementById(target);
                        if(targetEl) {
                            targetEl.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800/40">
<div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
<div className="text-stone-50 font-semibold tracking-tighter text-xl uppercase tracking-widest">
                KKP<span className="text-amber-600 text-sm opacity-80">.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-stone-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
                    07.00 - 23.00 น.
                </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                    มหาสารคาม
                </div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
<div className="absolute inset-0 z-0 overflow-hidden opacity-[0.15]">
<img alt="Thai Food Background" className="w-full h-full object-cover mask-gradient" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10 animate-fade-up">
<h1 className="text-3xl md:text-5xl font-medium text-stone-50 tracking-tight mb-4">กินข้าวกินปลา</h1>
<p className="text-stone-400 text-sm md:text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
                สัมผัสรสชาติอาหารไทยอีสานแท้ๆ ในบรรยากาศสุดพิเศษ คัดสรรวัตถุดิบคุณภาพเพื่อทุกมื้อของคุณ
            </p>
<div className="flex md:hidden flex-col items-center gap-2 text-xs font-light text-stone-500">
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon>07.00 - 23.00 น.</div>
<div className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon>มหาสารคาม</div>
</div>
</div>
</header>

<div className="sticky top-16 md:top-20 z-40 bg-stone-950/90 backdrop-blur-md py-3 md:py-4 border-b border-stone-800/40">
<div className="max-w-6xl mx-auto px-6 flex overflow-x-auto hide-scrollbar gap-2 items-center">
<button className="filter-btn active whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all bg-stone-200 text-stone-900" data-filter="all">ทั้งหมด</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="somtum">ส้มตำ</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="larb">ลาบ/พล่า</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="grill">ทอด-ย่าง</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="soup">ต้ม/แกง</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="yum">ยำ</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-stone-400 hover:text-stone-200 hover:bg-stone-800/50" data-filter="main">อาหารจานหลัก</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all text-amber-500/80 hover:text-amber-400 hover:bg-amber-900/20" data-filter="special">เมนูพิเศษ ⭐</button>
</div>
</div>

<main className="pb-32">

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="somtum">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">หมวด ส้มตำ</h2>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ส้มตำ" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://blog.topclinic.in.th/wp-content/uploads/2023/07/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%95%E0%B8%B3.jpg"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">

<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำสารคาม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">189 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำหอยแครง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">169 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำถั่ว - หมูกรอบกรุบ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">168 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำลาว + ปุนา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำทะเล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">169 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำซุปเปอร์ตีน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำแซลมอน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำปูม้าทะเล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">189 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำของทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำซั่ว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำป่า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำไทย</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">69 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำปูปลาร้าสารคาม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำข้าวโพด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">69 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำถั่ว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">69 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำลาว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำแตง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">69 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำลาวกุ้งสด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">169 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ตำซั่วป่า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="larb">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:pepper-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">หมวด ลาบ</h2>
<span className="text-xs text-stone-500 font-light mt-1">(พล่า/ก้อย/หมก)</span>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ทอด-ย่าง" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://storage.googleapis.com/cpbs-bucket-cms-uat/web/recipe/4811998eb2734a26c7f8a6635_20240701_004616.jpg"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">กุ้งลุยสวน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปลานึ่งมะนาว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">169 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปลานึ่ง + ผัก + แจ่ว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">259 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ลาบแซลมอน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">พล่าแซลมอน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ลาบวุ้นเส้น</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ลาบหมู</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">พล่าคอหมูย่าง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">พล่ากุ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ก้อยไข่มดแดง ตามฤดู</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">189 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมกเห็ด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="grill">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">หมวด ทอด-ย่าง</h2>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ทอด-ย่าง" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://t1.blockdit.com/photos/2020/04/5eab2786fec4540c9cb28d44_800x0xcover_OKWbT9Rm.jpg"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ทอดกระเทียม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ทอดมันกุ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมูกรอบ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ข้าวเกรียบ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ลาบทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปลานิลทอดสมุนไพร</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">179 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปลานิลลุยสวน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">179 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปีกไก่ทอดน้ำปลา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">คอหมูทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมูแดดเดียว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">เอ็นไก่ทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ไส้กรอกอีสาน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">แหนมซี่โครงทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">คอหมูย่าง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">เฟรนซ์ฟรายส์</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ไส้อ่อนย่าง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ปลาส้มทอด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">สามชั้นทอดน้ำปลา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">เนื้อทอด 5 วิ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ซี่โครงหมูอบน้ำผึ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">259 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="soup">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:cup-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">หมวด ต้ม</h2>
<span className="text-xs text-stone-500 font-light mt-1">(แกง/ซุป)</span>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ทอด-ย่าง" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://aowtakiabseafood.com/delivery/wp-content/uploads/2019/06/20180606_115316.jpg"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มยำปลานิล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมึกนึ่งมะนาว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมึกยัดไส้</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ข้าวต้มทรงเครื่อง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">โป๊ะแตกทะเล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">อ่อม หมู - ไก่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">119 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มยำรวมมิตร</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มยำกุ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มปลาใส่ปลาร้า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มยำไก่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ต้มแซ่บกระดูกอ่อน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ซุปเปอร์ตีนไก่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">แกงหน่อไม้ดองใส่ไก่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">แกงเห็ดรวม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">259 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">เล้งแซ่บ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">แกงเขียวหวาน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">แกงจืดเต้าหู้หมูสับ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="yum">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">หมวด ยำ</h2>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ทอด-ย่าง" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://www.airorchid.com/wp-content/uploads/2024/07/10.-%E0%B8%A2%E0%B8%B3%E0%B8%A7%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93-1024x1024.webp"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำเห็ดเข็มทองทอดกรอบ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำวุ้นเส้นหมูสับ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำตีนไก่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมูมะนาว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำมะนาวกุ้งสด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">กุ้งแช่น้ำปลา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำแซลมอน</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำผักบุ้งกรอบ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำปูอัดวาซาบิ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำรวมมิตรทะเล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำปลาหมึก</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำหอยแครง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำวุ้นเส้นโบราณ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำมาม่า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำหมูยออุบล</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำหอยนางรม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หอยนางรมทรงเครื่อง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำไข่ดาว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำถั่วพู</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ยำหัวปลี</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 border-b border-stone-800/30 scroll-mt-24" id="main">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500/80">
<iconify-icon icon="solar:plate-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">อาหารจานหลัก</h2>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="อาหารจานหลัก" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmrTRS0WDrD9Bp4vUl54wrpatueXB2w77gA&amp;s"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมูกรอบคั่วพริกเกลือ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ไข่ตุ๋นหม้อไฟ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">199 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดพริกเผา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">139 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หน่อไม้ฝรั่งผัดกุ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">149 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">กะหล่ำปลีผัดน้ำปลา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดผักบุ้งไฟแดง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">79 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ไข่เจียว</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">กะเพรา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">คะน้า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดผงกะหรี่</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดไข่เค็ม</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดผักรวมมิตร</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">119 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดมาม่า</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดไทย</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">กุ้งอบวุ้นเส้น / ปู</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">139 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ออส่วนโบราณ</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">129 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ผัดขี้เมา</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">99 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ข้าวผัด</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">เล็ก 89 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">หมี่กระเฉดผัดกุ้ง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">ไก่ผัดเม็ดมะม่วง</span><span className="text-sm font-medium text-stone-400 shrink-0 ml-4">159 <span className="text-xs text-stone-600 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>

<section className="menu-section pt-16 pb-12 scroll-mt-24" id="special">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<div className="flex items-center gap-3 text-amber-500">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-medium text-stone-100 tracking-tight">เมนูพิเศษ</h2>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-800/50">
<img alt="ทอด-ย่าง" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-700" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 content-start">
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">ขาลายลวกจิ้ม</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">149 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">หมู - เนื้อ สะเต๊ะ</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">149 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">ปลาหมึกต้มมะนาว</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">159 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">หอยแครงลวกจิ้ม</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">169 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">ไส้กรอกอีสานย่าง</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">69 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">ข้าวผัดมันเนื้อ</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">89 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
<div className="flex justify-between items-baseline py-2 group"><span className="text-sm text-stone-300 group-hover:text-amber-200 transition-colors">สปาเกตตี้ขี้เมา</span><span className="text-sm font-medium text-amber-500/90 shrink-0 ml-4">89 <span className="text-xs text-amber-700 ml-1 font-light">บาท</span></span></div>
</div>
</div>
</section>
</main>

<footer className="border-t border-stone-900 py-8 text-center text-stone-600 text-xs font-light">
<p>© 2024 กินข้าวกินปลา มหาสารคาม. All rights reserved.</p>
</footer>


    </>
  );
}
