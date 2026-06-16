import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Data Logic
        const UNIT_PRICE = 3900;
        const SHIPPING_COST = 500;
        
        // Sample Cities Data
        const citiesData = {
            "Alger": ["الجزائر الوسطى", "باب الزوار", "حيدرة", "الأبيار", "بن عكنون", "بئر مراد رايس"],
            "Oran": ["وهران", "السانية", "بئر الجير", "أرزيو", "عين الترك"],
            "Constantine": ["قسنطينة", "الخروب", "عين سمارة", "زيغود يوسف"],
            "Setif": ["سطيف", "العلمة", "عين ولمان", "عين آزال"],
            "Batna": ["باتنة", "بريكة", "عين التوتة"],
            "Blida": ["البليدة", "أولاد يعيش", "بوفاريك"],
            "Annaba": ["عنابة", "البوني", "برحال"],
            "Ouargla": ["ورقلة", "تقرت", "حاسي مسعود"]
        };

        function adjustQty(change) {
            const input = document.getElementById('qty');
            let newVal = parseInt(input.value) + change;
            if (newVal < 1) newVal = 1;
            input.value = newVal;
            updateTotals();
        }

        function updateTotals() {
            const qty = parseInt(document.getElementById('qty').value);
            const subtotal = qty * UNIT_PRICE;
            const total = subtotal + SHIPPING_COST;

            document.getElementById('subtotal').textContent = subtotal.toLocaleString() + ' د.ج';
            document.getElementById('total').textContent = total.toLocaleString() + ' د.ج';
        }

        function updateCities() {
            const wilayaSelect = document.getElementById('wilaya');
            const citySelect = document.getElementById('city');
            const selectedWilaya = wilayaSelect.value;

            // Reset city select
            citySelect.innerHTML = '<option value="">اختر البلدية</option>';
            
            if (selectedWilaya && citiesData[selectedWilaya]) {
                citySelect.disabled = false;
                citySelect.classList.remove('bg-slate-50', 'disabled:cursor-not-allowed');
                citySelect.classList.add('bg-white');
                
                citiesData[selectedWilaya].forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            } else {
                citySelect.disabled = true;
                citySelect.classList.add('bg-slate-50', 'disabled:cursor-not-allowed');
                citySelect.classList.remove('bg-white');
                const option = document.createElement('option');
                option.textContent = "يرجى اختيار الولاية أولاً";
                citySelect.appendChild(option);
            }
        }

        // Form Submission Animation
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            
            btn.disabled = true;
            btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> جاري الطلب...`;
            lucide.createIcons();

            setTimeout(() => {
                btn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
                btn.classList.add('bg-green-600', 'hover:bg-green-700');
                btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i> تم استلام طلبك بنجاح`;
                lucide.createIcons();
                
                setTimeout(() => {
                    alert("شكراً لطلبك! سنتصل بك قريباً للتأكيد.");
                }, 500);
            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-rose-500" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-slate-900">لوميير</span>
</div>
<div className="text-base text-slate-500 font-medium hidden sm:block">التوصيل متوفر لجميع الولايات</div>
</div>
</div>
</nav>
<main className="max-w-6xl mx-auto px-4 pt-10 pb-20 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">

<div className="lg:col-span-6 space-y-4">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm relative group">

<img alt="Luxury Smart LED Mirror" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" id="mainImage" src="https://placehold.co/800x1000/fff0f5/db2777?text=صورة+المرآة+المضيئة+الجديدة"/>

<div className="absolute top-4 right-4 flex flex-col gap-2">
<span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
<i className="w-3 h-3 ml-1 text-yellow-500" data-lucide="zap" strokeWidth="1.5"></i>
                            قابلة للشحن
                        </span>
<span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
<i className="w-3 h-3 ml-1 text-rose-500" data-lucide="pen-tool" strokeWidth="1.5"></i>
                            حامل للأقلام
                        </span>
<span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-slate-100">
<i className="w-3 h-3 ml-1 text-orange-500" data-lucide="sun" strokeWidth="1.5"></i>
                            إضاءة ساطعة
                        </span>
</div>
</div>

<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-xl border border-slate-200 overflow-hidden hover:ring-2 ring-rose-500 transition-all bg-white">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>

<div className="aspect-square rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center">
<i className="w-6 h-6 text-slate-300" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="mt-10 lg:col-span-6 lg:mt-0">

<div className="mb-8 border-b border-slate-200 pb-8">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">المرآة المضيئة الفاخرة</h1>
<p className="text-xl font-medium text-rose-600 mb-2">الاختيار الأمثل لمكياج متقن</p>
<p className="text-lg text-slate-500 leading-relaxed mb-4">
                        تصميم عصري يجمع بين الأناقة والعملية. إضاءة LED ساطعة، حامل مدمج لأدوات التجميل، وبطارية قابلة لإعادة الشحن.
                    </p>
<div className="flex items-baseline gap-4">
<span className="text-3xl font-bold text-slate-900">3,900 د.ج</span>
<span className="text-lg text-slate-400 line-through">5,500 د.ج</span>
<span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 border border-green-100">تخفيض 30%</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<i className="w-5 h-5" data-lucide="sun-medium" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">إضاءة ساطعة</h3>
<p className="text-xs text-slate-500 mt-0.5">3 درجات ألوان</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600">
<i className="w-5 h-5" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">حامل للأقلام</h3>
<p className="text-xs text-slate-500 mt-0.5">تنظيم أدوات المكياج</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">قابلة للشحن</h3>
<p className="text-xs text-slate-500 mt-0.5">بطارية طويلة الأمد</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">انعكاس واضح</h3>
<p className="text-xs text-slate-500 mt-0.5">زجاج عالي النقاء</p>
</div>
</div>
</div>

<form className="space-y-6" id="orderForm">

<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">اختر اللون</h3>
<div className="flex gap-4">
<label className="group relative cursor-pointer">
<input checked="" className="peer sr-only" name="color" type="radio" value="pink"/>
<span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 ring-1 ring-slate-200 ring-offset-2 transition-all peer-checked:ring-2 peer-checked:ring-pink-500 peer-checked:ring-offset-2 hover:bg-pink-200">
<div className="w-6 h-6 rounded-full bg-pink-400 shadow-sm"></div>
</span>
<span className="mt-2 block text-center text-xs font-medium text-slate-500 peer-checked:text-pink-600">وردي</span>
</label>
<label className="group relative cursor-pointer">
<input className="peer sr-only" name="color" type="radio" value="white"/>
<span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200 ring-offset-2 transition-all peer-checked:ring-2 peer-checked:ring-slate-500 peer-checked:ring-offset-2 hover:bg-slate-200">
<div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-200"></div>
</span>
<span className="mt-2 block text-center text-xs font-medium text-slate-500 peer-checked:text-slate-600">أبيض</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">الكمية</h3>
<div className="flex items-center rounded-lg border border-slate-200 w-max bg-white">
<button className="p-3 text-slate-600 hover:bg-slate-50 rounded-r-lg transition-colors" onclick="adjustQty(-1)" type="button">
<i className="w-4 h-4" data-lucide="minus" strokeWidth="1.5"></i>
</button>
<input className="w-12 text-center border-0 p-0 text-slate-900 font-medium focus:ring-0" id="qty" min="1" name="quantity" readonly="" type="number" value="1"/>
<button className="p-3 text-slate-600 hover:bg-slate-50 rounded-l-lg transition-colors" onclick="adjustQty(1)" type="button">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="h-px bg-slate-200 my-6"></div>

<div className="space-y-4">
<h3 className="text-lg font-medium text-slate-900">معلومات التوصيل</h3>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="fullname">الاسم الكامل</label>
<div className="relative">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border-slate-200 pr-10 shadow-sm focus:border-rose-500 focus:ring-rose-500 py-2.5 text-base" id="fullname" name="fullname" placeholder="أدخل اسمك ولقبك" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">رقم الهاتف</label>
<div className="relative">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border-slate-200 pr-10 shadow-sm focus:border-rose-500 focus:ring-rose-500 py-2.5 text-base" id="phone" name="phone" placeholder="05 XX XX XX XX" required="" type="tel"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="wilaya">الولاية</label>
<select className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 py-2.5 text-base bg-white" id="wilaya" name="wilaya" onchange="updateCities()" required="">
<option value="">اختر الولاية</option>
<option value="Alger">16 - الجزائر (Alger)</option>
<option value="Oran">31 - وهران (Oran)</option>
<option value="Constantine">25 - قسنطينة (Constantine)</option>
<option value="Setif">19 - سطيف (Sétif)</option>
<option value="Batna">05 - باتنة (Batna)</option>
<option value="Blida">09 - البليدة (Blida)</option>
<option value="Annaba">23 - عنابة (Annaba)</option>
<option value="Ouargla">30 - ورقلة (Ouargla)</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="city">البلدية</label>
<select className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 py-2.5 text-base bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed" disabled="" id="city" name="city" required="">
<option value="">يرجى اختيار الولاية أولاً</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="address">العنوان بالتفصيل</label>
<input className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 py-2.5 text-base" id="address" name="address" placeholder="الحي، رقم المنزل..." required="" type="text"/>
</div>
</div>

<div className="rounded-xl bg-slate-50 border border-slate-100 p-6 space-y-3 mt-8">
<div className="flex justify-between text-base text-slate-600">
<span>سعر المنتج</span>
<span id="subtotal">3,900 د.ج</span>
</div>
<div className="flex justify-between text-base text-slate-600">
<span>التوصيل</span>
<span id="shipping">500 د.ج</span>
</div>
<div className="pt-3 border-t border-slate-200 flex justify-between items-center">
<span className="text-lg font-bold text-slate-900">المجموع الكلي</span>
<span className="text-xl font-bold text-rose-700" id="total">4,400 د.ج</span>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium py-4 rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl transition-all flex items-center justify-center gap-2 group" type="submit">
<span>تأكيد الطلب الآن</span>
<i className="w-5 h-5 transition-transform group-hover:-translate-x-1" data-lucide="arrow-left" strokeWidth="2"></i>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
<i className="w-3 h-3 inline align-middle ml-1" data-lucide="shield-check"></i>
                        الدفع عند الاستلام. ضمان استبدال في حالة وجود عطب.
                    </p>
</form>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white py-8">
<div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
            © 2023 متجر لوميير. جميع الحقوق محفوظة.
        </div>
</footer>


    </>
  );
}
