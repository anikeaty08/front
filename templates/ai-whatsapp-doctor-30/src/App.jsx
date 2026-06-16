import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Noto Kufi Arabic', 'Inter', 'sans-serif'],
arabic: ['Noto Kufi Arabic', 'sans-serif'],
},
colors: {
brand: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
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
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<iconify-icon icon="lucide:stethoscope" strokeWidth="2" width="16"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-900 tracking-tight">طبيبك الخاص</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">المميزات</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">كيف يعمل</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">الأسعار</a>
</div>
<a className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 border border-slate-700" href="https://wa.me/201558094086" target="_blank">
<span>ابدأ الآن</span>
<iconify-icon icon="lucide:arrow-left" strokeWidth="2" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-50/80 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium tracking-wide mb-8 shadow-sm hover:border-brand-200 hover:bg-white transition-colors cursor-default">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                الجيل الجديد من الرعاية الصحية
                <span className="w-px h-3 bg-slate-300 mx-1"></span>
<span className="text-brand-600 font-semibold">تحديث 2.0</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1] mb-8 max-w-4xl">
                استشارات طبية فورية <br/>
<span className="text-slate-400">لعائلتك عبر</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">الواتساب.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                تخلص من قلق الانتظار. مساعد طبي ذكي يعمل بالذكاء الاصطناعي للإجابة على استفساراتك الصحية <span className="text-slate-900 font-medium">على مدار الساعة</span> بدقة وموثوقية.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-1 border border-slate-700" href="https://wa.me/201558094086" target="_blank">
<iconify-icon icon="lucide:message-circle" strokeWidth="2" width="18"></iconify-icon>
                    تحدث مع الطبيب الآن
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:bg-slate-50 shadow-sm" href="#how-it-works">
                    كيف يعمل؟
                </a>
</div>

<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">موثوق من قبل العائلات</p>
<div className="flex -space-x-3 space-x-reverse">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=100&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=100&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&amp;q=80"/>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-yellow-400 fill-yellow-400" icon="lucide:star" width="14"></iconify-icon>
<span className="text-xs font-bold text-slate-700 mr-2">4.9/5</span>
</div>
</div>

<div className="mt-20 relative w-full max-w-4xl perspective-1000">
<div className="relative bg-white rounded-t-3xl border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden transform rotate-x-12 translate-z-0 p-2 md:p-4">

<div className="flex items-center gap-2 mb-4 px-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-block px-3 py-1 bg-slate-50 rounded-md text-[10px] text-slate-400 font-medium">whatsapp.com</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl h-[400px] md:h-[500px] flex overflow-hidden border border-slate-100">

<div className="w-64 bg-white border-l border-slate-200 hidden md:flex flex-col p-4">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-800">المحادثات</h3>
<iconify-icon className="text-slate-400" icon="lucide:edit" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-3 bg-brand-50 rounded-xl border border-brand-100 mb-2">
<div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:stethoscope" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<div className="font-semibold text-xs text-slate-900">طبيبك الخاص</div>
<div className="text-[10px] text-brand-600 truncate">يكتب الآن...</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl opacity-50">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div className="w-20 h-2 bg-slate-200 rounded"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl opacity-50">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div className="w-20 h-2 bg-slate-200 rounded"></div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#efeae2] relative" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
<div className="flex-1 p-6 overflow-y-auto space-y-6 flex flex-col justify-end pb-20 md:pb-6">

<div className="self-end bg-[#d9fdd3] p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] md:max-w-[60%] border border-green-200/50">
<p className="text-sm text-slate-800 leading-relaxed">دكتور، طفلي عمره 6 شهور وعنده كحة ناشفة بقالها يومين، مفيش حرارة. أعمل ايه؟</p>
<div className="flex justify-end items-center gap-1 mt-1 opacity-60">
<span className="text-[10px]">10:42 م</span>
<iconify-icon className="text-blue-500" icon="lucide:check-check" width="12"></iconify-icon>
</div>
</div>

<div className="self-start bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] md:max-w-[70%] border border-slate-200/50">
<div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
<div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:stethoscope" width="10"></iconify-icon>
</div>
<span className="text-xs font-bold text-brand-600">التشخيص الأولي</span>
</div>
<p className="text-sm text-slate-700 leading-relaxed">
                                        أهلاً بكِ. بما أن الكحة ناشفة وبدون حرارة، غالباً بسبب تغير الجو أو حساسية بسيطة.
                                        <br/><br/>
<span className="font-semibold text-slate-900">نصائح منزلية:</span>
<br/>1. إرضاع الطفل باستمرار لترطيب الحلق.
                                        <br/>2. استخدام جهاز ترطيب الجو (Humidifier) إن وجد.
                                        <br/>3. تجنب الروائح القوية والدخان.
                                        <br/><br/>
                                        إذا ظهرت صعوبة في التنفس أو صوت "تزييق"، يرجى التوجه للطبيب فوراً.
                                    </p>
<span className="text-[10px] text-slate-400 block text-left mt-2">10:42 م</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:flex md:justify-between md:items-end">
<div className="max-w-xl">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">كل ما تحتاجه لصحة عائلتك</h2>
<p className="text-slate-500 text-lg">تقنيات طبية متطورة مصممة خصيصاً لتوفير راحة البال للأمهات والآباء.</p>
</div>
<div className="hidden md:block">
<a className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1 group" href="https://wa.me/201558094086">
                        استكشف المزيد
                        <iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="lucide:arrow-left" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 card-shine bg-slate-50 rounded-3xl p-8 border border-slate-200 relative group overflow-hidden flex flex-col">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-brand-600" icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-3">ذكاء اصطناعي طبي دقيق</h3>
<p className="text-slate-500 leading-relaxed max-w-sm">
                            تم تدريب نموذجنا على ملايين الحالات الطبية الموثقة لتقديم استشارات دقيقة وآمنة تراعي السياق الصحي للمريض.
                        </p>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-50"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-200/50 rounded-full blur-3xl group-hover:bg-brand-300/50 transition-colors duration-500"></div>
<div className="mt-auto relative z-10 bg-white rounded-xl p-4 border border-slate-100 shadow-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3">
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[92%]"></div>
</div>
<span className="text-xs font-bold text-slate-700">92% دقة</span>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-slate-900 rounded-3xl p-6 border border-slate-800 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="text-white" icon="lucide:clock" width="100"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">متاح 24/7</h3>
<p className="text-slate-400 text-sm">رد فوري في أي وقت.</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-6 border border-slate-200 relative overflow-hidden hover:shadow-lg transition-shadow">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">خصوصية تامة</h3>
<p className="text-sm text-slate-500">تشفير كامل عبر واتساب (End-to-End Encryption).</p>
</div>

<div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-brand-50 to-white rounded-3xl p-8 border border-slate-200 flex items-center justify-between relative overflow-hidden">
<div className="relative z-10 max-w-[60%]">
<h3 className="text-xl font-bold text-slate-900 mb-2">تغطية شاملة</h3>
<p className="text-sm text-slate-500">أطفال، باطنة، جلدية، نساء وتوليد، والمزيد.</p>
</div>
<div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent to-white/0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 opacity-50 rotate-12 transform translate-x-4">
<div className="w-12 h-12 bg-white rounded-lg shadow-sm"></div>
<div className="w-12 h-12 bg-brand-100 rounded-lg shadow-sm"></div>
<div className="w-12 h-12 bg-slate-100 rounded-lg shadow-sm"></div>
<div className="w-12 h-12 bg-white rounded-lg shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-16 text-center">ابدأ رحلتك في 3 خطوات</h2>
<div className="relative">

<div className="absolute right-[27px] top-4 bottom-4 w-[2px] bg-slate-200"></div>
<div className="space-y-12">

<div className="relative flex gap-8 group">
<div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm z-10 shrink-0 group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
<span className="font-bold text-xl">1</span>
</div>
<div className="pt-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 group-hover:shadow-md transition-shadow">
<h3 className="text-lg font-bold text-slate-900 mb-2">اضغط على الرابط</h3>
<p className="text-slate-500 text-sm leading-relaxed">ببساطة اضغط على رابط واتساب. لا حاجة لتحميل أي تطبيقات إضافية تستهلك مساحة هاتفك.</p>
</div>
</div>

<div className="relative flex gap-8 group">
<div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm z-10 shrink-0 group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
<span className="font-bold text-xl">2</span>
</div>
<div className="pt-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 group-hover:shadow-md transition-shadow">
<h3 className="text-lg font-bold text-slate-900 mb-2">اشترك في الخدمة</h3>
<p className="text-slate-500 text-sm leading-relaxed">اشتراك شهري رمزي (100 ج.م). عملية دفع آمنة وسريعة تضمن استمرارية الخدمة.</p>
</div>
</div>

<div className="relative flex gap-8 group">
<div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-sm z-10 shrink-0 group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
<span className="font-bold text-xl">3</span>
</div>
<div className="pt-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 group-hover:shadow-md transition-shadow">
<h3 className="text-lg font-bold text-slate-900 mb-2">اسأل طبيبك الخاص</h3>
<p className="text-slate-500 text-sm leading-relaxed">اصفي الأعراض، أرسلي صور التحاليل، أو استشيري في الأدوية. الرد فوري ودقيق.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="testimonials">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">آراء العائلات</h2>
<p className="text-slate-500">انضم لأكثر من 5,000 مستخدم يثقون بنا.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-700 font-medium mb-6 leading-relaxed">"بجد تطبيق ممتاز. ابني سخن جداً الفجر وكنت محتارة. الدكتور رد عليا في دقيقة وطمني."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
</div>
<div>
<div className="font-bold text-sm text-slate-900">سارة محمد</div>
<div className="text-xs text-slate-500">مشتركة منذ 3 أشهر</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-700 font-medium mb-6 leading-relaxed">"وفر عليا وقت وفلوس الكشف في العيادات لأسئلة بسيطة. الردود علمية ومحترمة جداً."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=100&amp;q=80"/>
</div>
<div>
<div className="font-bold text-sm text-slate-900">أحمد علي</div>
<div className="text-xs text-slate-500">مشترك جديد</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-700 font-medium mb-6 leading-relaxed">"الخصوصية أهم حاجة عندي، وده اللي لقيته هنا. بقدر أسأل في أي وقت من غير حرج."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=100&amp;q=80"/>
</div>
<div>
<div className="font-bold text-sm text-slate-900">مريم حسن</div>
<div className="text-xs text-slate-500">مشتركة منذ 6 أشهر</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-900 text-white" id="pricing">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-bold tracking-tight mb-4">استثمر في صحة عائلتك</h2>
<p className="text-slate-400 mb-12">خطة واحدة، شاملة كل شيء.</p>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-md mx-auto relative group hover:border-brand-500/50 transition-colors">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">الأكثر طلباً</div>
<h3 className="text-xl font-medium text-white mb-2">الاشتراك الشهري</h3>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-5xl font-bold tracking-tight">100</span>
<span className="text-sm text-slate-400 font-medium">ج.م / شهرياً</span>
</div>
<div className="space-y-4 mb-8 text-sm text-slate-300 px-4 text-right">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span>عدد لا نهائي من الاستشارات</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span>متاح لجميع أفراد الأسرة</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span>رد فوري 24/7</span>
</div>
</div>
<a className="block w-full bg-brand-600 hover:bg-brand-500 text-white py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-brand-500/25" href="https://wa.me/201558094086">
                    ابدأ فترة التجربة
                </a>
<p className="text-xs text-slate-500 mt-4">ضمان استرجاع الأموال في حالة عدم الرضا.</p>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="lucide:stethoscope" width="16"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-900">طبيبك الخاص</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">الخصوصية</a>
<a className="hover:text-slate-900" href="#">الشروط</a>
<a className="hover:text-slate-900" href="https://wa.me/201558094086">تواصل معنا</a>
</div>
<div className="text-xs text-slate-400">
                    © 2024 جميع الحقوق محفوظة.
                </div>
</div>
</div>
</footer>

    </>
  );
}
