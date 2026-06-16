import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Prompt', 'sans-serif'],
},
colors: {
slate: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="max-w-3xl mx-auto pt-16 pb-10 px-6">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 text-slate-400 tracking-tight text-xs uppercase font-medium">
<span className="w-2 h-2 rounded-full bg-slate-900"></span>
                Soft Power Project
            </div>
<h1 className="text-3xl md:text-4xl text-slate-900 font-medium tracking-tight leading-tight">
                แบบสำรวจและจัดเก็บข้อมูล<br/>มรดกภูมิปัญญาอาหารริมคลอง
            </h1>
<p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                โครงการ Soft Power ยกระดับอาหารพื้นถิ่นวัฒนธรรมอาหารริมคลอง 
                (คลองบางเขน คลองเปรมประชากร และคลองลาดพร้าว)
            </p>
</div>
</header>
<form className="max-w-3xl mx-auto px-6 space-y-12">

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:user-id-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๑ ข้อมูลผู้ให้ข้อมูล</h2>
</div>
<div className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-400">ชื่อ-นามสกุล</label>
<input className="w-full text-sm text-slate-800" placeholder="ระบุชื่อ-นามสกุล" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">เพศ</label>
<input className="w-full text-sm text-slate-800" placeholder="ระบุเพศ" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-400">อายุ (ปี)</label>
<input className="w-full text-sm text-slate-800" type="number"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">อาชีพ</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">รายได้เฉลี่ย (บาท/เดือน)</label>
<input className="w-full text-sm text-slate-800" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ที่อยู่/ชุมชน</label>
<textarea className="w-full text-sm text-slate-800 resize-none" rows="1"></textarea>
</div>
<div className="space-y-3">
<label className="text-xs text-slate-400">พื้นที่คลอง</label>
<div className="flex flex-wrap gap-4">
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="canal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center transition-colors"></div>
<span className="text-sm">คลองบางเขน</span>
</label>
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="canal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center transition-colors"></div>
<span className="text-sm">คลองเปรมประชากร</span>
</label>
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="canal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center transition-colors"></div>
<span className="text-sm">คลองลาดพร้าว</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ระยะเวลาอาศัยอยู่ในชุมชน</label>
<div className="flex gap-4">
<input className="w-full text-sm text-slate-800 text-center" placeholder="ปี" type="number"/>
<input className="w-full text-sm text-slate-800 text-center" placeholder="เดือน" type="number"/>
<input className="w-full text-sm text-slate-800 text-center" placeholder="วัน" type="number"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-slate-400">เบอร์โทรศัพท์</label>
<input className="w-full text-sm text-slate-800" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">Social Media</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        พิกัดทางภูมิศาสตร์
                    </label>
<div className="grid grid-cols-3 gap-4">
<input className="text-sm text-center" placeholder="X" type="text"/>
<input className="text-sm text-center" placeholder="Y" type="text"/>
<input className="text-sm text-center" placeholder="Z" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">Person ID</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:chef-hat-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๒ ข้อมูลอัตลักษณ์เมนู (Menu Identity)</h2>
</div>
<div className="space-y-6">
<div className="space-y-1">
<label className="text-xs text-slate-400">ชื่อที่เป็นทางการ</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ชื่อเรียกในท้องถิ่น</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ชื่อภาษาอื่น (ถ้ามี)</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
<div className="space-y-3">
<label className="text-xs text-slate-400">ประเภท</label>
<div className="flex flex-wrap gap-4">
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="food_type" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center"></div>
<span className="text-sm">อาหารคาว</span>
</label>
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="food_type" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center"></div>
<span className="text-sm">อาหารหวาน</span>
</label>
<label className="custom-radio flex items-center gap-2 cursor-pointer">
<input className="hidden" name="food_type" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex items-center justify-center"></div>
<span className="text-sm">อาหารว่าง/เครื่องดื่ม</span>
</label>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:clipboard-list-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๓ แบบสำรวจเจาะลึก</h2>
</div>
<div className="space-y-10">

<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๑ ความนิยมและการเป็นที่รู้จัก</label>
<p className="text-xs text-slate-400">เมนูนี้เป็นที่รู้จักของคนภายนอกชุมชนหรือไม่</p>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="pop" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">เป็นเมนูเด็ดประจำบ้าน (คนในบ้านกิน)</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="pop" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">เป็นที่รู้จักในชุมชน (เพื่อนบ้านรู้จัก)</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="pop" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">เป็นที่รู้จักของคนต่างถิ่น/นักท่องเที่ยว</span>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๒ ความเชื่อและประเพณี (Rituals)</label>
<p className="text-xs text-slate-400">ปกติทำเมนูนี้กินในโอกาสใด?</p>
<div className="space-y-3 pl-2">
<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="ritual" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">กินในชีวิตประจำวันทั่วไป</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="ritual" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">งานบุญ/งานวัด/ถวายพระ</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>

<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="ritual" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">งานมงคล/พิธีกรรม/อื่นๆ</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๓ ฤดูกาล (Seasonality)</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="season" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">ได้ตลอดทั้งปี</span>
</label>
<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="season" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">เฉพาะฤดูหรือช่วงไหน</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๔ วัตถุดิบในท้องถิ่น (Local Ingredients)</label>
<div className="space-y-2">
<label className="text-xs text-slate-400">วัตถุดิบหลักคือ:</label>
<textarea className="w-full text-sm text-slate-800" rows="2"></textarea>
</div>
<p className="text-xs text-slate-400 mt-2">แหล่งที่มาของวัตถุดิบหลัก (เลือกได้มากกว่า ๑ ข้อ)</p>
<div className="space-y-2 pl-2">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm">เก็บจากในคลอง/ริมตลิ่ง</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm">ปลูกเองในสวนหลังบ้าน</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm">ซื้อจากตลาดนัดชุมชน/ห้าง</span>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๕ สุขภาพและสรรพคุณยา (Healthy)</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="health" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">อิ่มท้อง ให้พลังงานปกติ</span>
</label>
<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="health" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">มีสมุนไพรเป็นยา/บำรุงร่างกาย</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๖ ความถี่ในการบริโภค</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="freq" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">นานๆ ครั้ง / ในโอกาสพิเศษ</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="freq" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">๑-๒ วัน ต่อสัปดาห์</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="freq" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">๓ วันขึ้นไป (ประจำ)</span>
</label>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๗ ความยากง่าย</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="complex" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">ง่าย (ใครๆ ก็ทำได้)</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="complex" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">ปานกลาง</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="complex" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">ยาก/ซับซ้อนมาก</span>
</label>
</div>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๓.๘ ความเหมาะสม (Universal Appeal)</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="appeal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">รสจัดจ้านเฉพาะกลุ่ม</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="appeal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full"></div>
<span className="text-sm">รสชาติกลางๆ ทานได้ทุกเพศทุกวัย</span>
</label>
<div className="flex flex-col gap-1">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="appeal" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">อื่นๆ</span>
</label>
<input className="ml-7 w-2/3 text-xs text-slate-500 bg-slate-50 px-2 rounded" placeholder="ระบุ..." type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๔ เรื่องราวและสถานะ Soft Power</h2>
</div>
<div className="space-y-8">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-800">๔.๑ เรื่องเล่า/ตำนาน (Storytelling)</label>
<p className="text-xs text-slate-400">ประวัติความเป็นมา สูตรบรรพบุรุษ เหตุการณ์ในอดีต</p>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 p-3 rounded-lg border-0 ring-1 ring-slate-200 focus:ring-indigo-500" placeholder="บันทึกเสียงสัมภาษณ์ควบคู่ไปด้วย..." rows="6"></textarea>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-slate-800">๔.๒ สถานะการสืบทอด (Status)</label>
<div className="space-y-2 pl-2">
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="status" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">เสี่ยงสูญหาย (หาคนทำยาก/เด็กรุ่นใหม่ไม่รู้จัก)</span>
</label>
<label className="custom-radio flex items-center gap-3 cursor-pointer">
<input className="hidden" name="status" type="radio"/>
<div className="w-4 h-4 border border-slate-300 rounded-full flex-shrink-0"></div>
<span className="text-sm">ยังมีการสืบทอดทั่วไป</span>
</label>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:chef-hat-heart-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๕ ข้อมูลสูตรอาหาร</h2>
</div>
<div className="space-y-8">
<div className="space-y-1">
<label className="text-xs text-slate-400">รายละเอียด (บันทึกย่อ)</label>
<textarea className="w-full text-sm text-slate-800" rows="3"></textarea>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-800">รายการวัตถุดิบ</h3>
<div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
<div className="grid grid-cols-12 gap-2 p-2 bg-slate-100 text-xs font-medium text-slate-500 border-b border-slate-200">
<div className="col-span-1 text-center">#</div>
<div className="col-span-5">วัตถุดิบ</div>
<div className="col-span-3">ปริมาณ</div>
<div className="col-span-3">หน่วย</div>
</div>

<div className="divide-y divide-slate-100">

<div className="grid grid-cols-12 gap-2 p-1 items-center">
<div className="col-span-1 text-center text-xs text-slate-400">1</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center bg-white">
<div className="col-span-1 text-center text-xs text-slate-400">2</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center">
<div className="col-span-1 text-center text-xs text-slate-400">3</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center bg-white">
<div className="col-span-1 text-center text-xs text-slate-400">4</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center">
<div className="col-span-1 text-center text-xs text-slate-400">5</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center bg-white">
<div className="col-span-1 text-center text-xs text-slate-400">...</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="ระบุเพิ่มเติม..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-800">เครื่องปรุงรส/สมุนไพร</h3>
<div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
<div className="grid grid-cols-12 gap-2 p-2 bg-slate-100 text-xs font-medium text-slate-500 border-b border-slate-200">
<div className="col-span-1 text-center">#</div>
<div className="col-span-5">ชื่อ</div>
<div className="col-span-3">ปริมาณ</div>
<div className="col-span-3">หน่วย</div>
</div>
<div className="divide-y divide-slate-100">
<div className="grid grid-cols-12 gap-2 p-1 items-center">
<div className="col-span-1 text-center text-xs text-slate-400">1</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center bg-white">
<div className="col-span-1 text-center text-xs text-slate-400">2</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center">
<div className="col-span-1 text-center text-xs text-slate-400">3</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
<div className="grid grid-cols-12 gap-2 p-1 items-center bg-white">
<div className="col-span-1 text-center text-xs text-slate-400">...</div>
<input className="col-span-5 text-sm bg-transparent border-0" placeholder="ระบุเพิ่มเติม..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
<input className="col-span-3 text-sm bg-transparent border-0" placeholder="..."/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-800">ขั้นตอนการเตรียม</h3>
<div className="space-y-2">
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">1.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">2.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">3.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">4.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-800">ขั้นตอนการปรุง</h3>
<div className="space-y-2">
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">1.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">2.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">3.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
<div className="flex gap-2 items-start">
<span className="text-xs text-slate-400 pt-2">4.</span>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded px-2 border-0" rows="2"></textarea>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<h3 className="text-sm font-medium text-slate-800">เคล็ดลับความอร่อย</h3>
<p className="text-xs text-slate-400">เช่น เทคนิคดับคาว ภาชนะที่ใช้ ไฟที่ใช้</p>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded p-2 border-0" rows="3"></textarea>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:camera-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๖ สำหรับเจ้าหน้าที่ (Officer Use Only)</h2>
</div>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm">ถ่ายรูปครบ ๓ มุม (วัตถุดิบ/ตอนทำ/จัดจาน) (ประมาณ 3 - 5 ภาพ)</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm">เก็บพิกัด GPS แล้ว</span>
</label>
</div>
</section>

<section className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
<iconify-icon className="text-slate-400 text-xl" icon="solar:notes-linear"></iconify-icon>
<h2 className="text-lg font-medium text-slate-800">ส่วนที่ ๗ อื่น ๆ</h2>
</div>
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs text-slate-400">เอกสารอ้างอิง / รางวัล / การประกวด</label>
<textarea className="w-full text-sm text-slate-800 bg-slate-50 rounded-lg p-3 border-0" rows="4"></textarea>
</div>
</div>
</section>

<footer className="pt-6 pb-20 border-t border-slate-200 mt-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs text-slate-400">ลงชื่อผู้เก็บข้อมูล (นักศึกษา/ทีมงาน)</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ระบุ SV Code</label>
<input className="w-full text-sm text-slate-800" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-400">ระบุเบอร์โทร</label>
<input className="w-full text-sm text-slate-800" type="tel"/>
</div>
</div>
<div className="flex items-end justify-end">
<button className="group relative w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg text-sm font-medium transition-all hover:bg-slate-800 hover:shadow-lg" type="button">
<span>บันทึกข้อมูล</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</footer>
</form>

    </>
  );
}
