import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0f7ff',
100: '#e0effe',
500: '#3599ff', // Accent
600: '#2563eb',
900: '#0f172a', // Navy
950: '#020617',
}
},
fontFamily: {
sans: ['"Noto Sans Georgian"', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'dash': 'dash 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
dash: {
'to': { strokeDashoffset: '0' }
}
}
}
}
}



        // Modal Logic
        function openTracking() {
            document.getElementById('trackingModal').classList.remove('hidden');
        }
        function closeTracking() {
            document.getElementById('trackingModal').classList.add('hidden');
            document.getElementById('statusResult').classList.add('hidden');
            document.getElementById('trackInput').value = '';
        }

        function showStatus() {
            const input = document.getElementById('trackInput').value;
            if(input.length > 3) {
                document.getElementById('statusResult').classList.remove('hidden');
            } else {
                alert('გთხოვთ შეიყვანოთ კოდი');
            }
        }

        function openCalculator() {
            document.getElementById('calcModal').classList.remove('hidden');
            calculatePrice();
        }
        function closeCalculator() {
            document.getElementById('calcModal').classList.add('hidden');
        }

        // Calculator Logic
        function calculatePrice() {
            const select = document.getElementById('calcCountry');
            const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
            
            const rate = parseFloat(select.value);
            const symbol = select.options[select.selectedIndex].getAttribute('data-sym');
            
            const total = (rate * weight).toFixed(2);
            document.getElementById('calcResult').innerText = `${total} ${symbol}`;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-brand-500 text-white w-8 h-8 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-brand-900 uppercase">Sanex</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-brand-500 transition-colors" href="#home">მთავარი</a>
<a className="hover:text-brand-500 transition-colors" href="#tariffs">ტარიფები</a>
<a className="hover:text-brand-500 transition-colors" href="#branches">ფილიალები</a>
<a className="hover:text-brand-500 transition-colors" href="#about">ჩვენს შესახებ</a>
<a className="hover:text-brand-500 transition-colors" href="#forbidden">აკრძალული ნივთები</a>
<a className="hover:text-brand-500 transition-colors" href="#contact">კონტაქტი</a>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="text-sm font-medium text-slate-600 hover:text-brand-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-all" onclick="openCalculator()">
                    ფასის გამოთვლა
                </button>
<button className="group flex items-center gap-2 bg-brand-900 hover:bg-brand-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-brand-900/20 hover:shadow-brand-500/30" onclick="openTracking()">
<iconify-icon icon="solar:radar-2-linear" width="18"></iconify-icon>
                    ტრეკინგი
                </button>
</div>

<button className="lg:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex-col gap-4 shadow-xl lg:hidden" id="mobile-menu">
<a className="text-sm font-medium text-slate-700" href="#home">მთავარი</a>
<a className="text-sm font-medium text-slate-700" href="#tariffs">ტარიფები</a>
<a className="text-sm font-medium text-slate-700" href="#branches">ფილიალები</a>
<a className="text-sm font-medium text-slate-700" href="#about">ჩვენს შესახებ</a>
<a className="text-sm font-medium text-slate-700" href="#contact">კონტაქტი</a>
<hr className="border-slate-100"/>
<button className="w-full text-center bg-brand-500 text-white py-3 rounded-xl font-medium" onclick="openTracking()">ტრეკინგი</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-30" fill="none" viewbox="0 0 1000 600">

<path className="map-path" d="M850 150 Q 500 -50 480 250" fill="none" stroke="#3599ff" stroke-dasharray="8 8" strokeWidth="2"></path> 
<path className="map-path" d="M150 180 Q 300 50 480 250" fill="none" stroke="#3599ff" stroke-dasharray="8 8" strokeWidth="2" style={{animationDuration: '25s'}}></path> 
<path className="map-path" d="M400 280 Q 440 260 480 250" fill="none" stroke="#3599ff" stroke-dasharray="8 8" strokeWidth="2" style={{animationDuration: '15s'}}></path> 

<circle className="animate-pulse" cx="850" cy="150" fill="#3599ff" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;8;4"></animate>
</circle> 
<circle className="animate-pulse" cx="150" cy="180" fill="#3599ff" r="4">
<animate attributename="r" dur="2.5s" repeatcount="indefinite" values="4;8;4"></animate>
</circle> 
<circle cx="480" cy="250" fill="#0f172a" r="6" stroke="#3599ff" strokeWidth="2"></circle> 
</svg>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    საიმედო პარტნიორი
                </div>
<div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-brand-950 mb-4 leading-[1.1]">
                        სანექსი
                    </h1>
<p className="text-xl lg:text-2xl font-light text-slate-500 leading-snug">
                        ამანათების ტრანსპორტირება <span className="text-brand-500 font-normal">ჩინეთიდან</span>, <span className="text-brand-500 font-normal">თურქეთიდან</span>, <span className="text-brand-500 font-normal">ამერიკიდან</span> და <span className="text-brand-500 font-normal">საბერძნეთიდან</span>.
                    </p>
</div>
<p className="text-slate-600 leading-relaxed max-w-lg">
                    კომპანია „სანექსი" ახორციელებს ამანათების, პირადი გზავნილებისა და ასევე კომერციული ტვირთის საჰაერო, სატვირთო ტრანსპორტირებას ჩინეთიდან და თურქეთიდან, საქართველოში.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-1" onclick="openTracking()">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
                        ტრეკინგი
                    </button>
<button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-brand-500 text-slate-700 hover:text-brand-500 px-8 py-4 rounded-2xl font-medium transition-all hover:shadow-lg hover:-translate-y-1" onclick="openCalculator()">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
                        ფასის გამოთვლა
                    </button>
</div>

<div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500" icon="solar:city-linear" width="20"></iconify-icon>
                        5 ქალაქში ფილიალი
                    </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        უსაფრთხო ტრანსპორტირება
                    </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500" icon="solar:card-linear" width="20"></iconify-icon>
                        ონლაინ გადახდა
                    </div>
</div>
</div>

<div className="relative hidden lg:block h-[500px]">

<div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float w-64">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">სტატუსი</p>
<p className="text-sm font-semibold text-slate-800">ამანათი ჩაბარებულია</p>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 w-full h-full"></div>
</div>
</div>
<div className="absolute bottom-20 left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-10 animate-float w-56" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-500">
<iconify-icon icon="solar:plane-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">რეისი</p>
<p className="text-sm font-semibold text-slate-800">Guangzhou -&gt; TBS</p>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent rounded-full blur-[100px]"></div>

<img alt="Logistics" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-[2rem] shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="tariffs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">ტარიფები</h2>
<p className="text-slate-500">საუკეთესო ფასები ბაზარზე. გამჭვირვალე ტარიფები დაფარული გადასახადების გარეშე.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:plane-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">ჩინეთი (საჰაერო)</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">12.50</span>
<span className="text-lg text-slate-500">$ / კგ</span>
</div>
<p className="text-sm text-slate-500">სწრაფი ტრანსპორტირება 5-7 დღეში</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:delivery-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">ჩინეთი (სახმელეთო)</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">5.50</span>
<span className="text-lg text-slate-500">$ / კგ</span>
</div>
<p className="text-sm text-slate-500">ეკონომიური გზა დიდი ტვირთებისთვის</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:delivery-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">თურქეთი (სახმელეთო)</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">3.00</span>
<span className="text-lg text-slate-500">$ / კგ</span>
</div>
<p className="text-sm text-slate-500">ყოველკვირეული რეისები</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:box-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">თურქეთი (10კგ+)</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">1.50</span>
<span className="text-lg text-slate-500">$ / კგ</span>
</div>
<p className="text-sm text-slate-500">სპეციალური ფასი 10 კგ-ზე მეტ წონაზე</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:globe-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">საბერძნეთი</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">3.50</span>
<span className="text-lg text-slate-500">€ / კგ</span>
</div>
<p className="text-sm text-slate-500">საიმედო პარტნიორები ევროპაში</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="solar:plane-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900">ამერიკა</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-bold tracking-tight text-slate-900">8.95</span>
<span className="text-lg text-slate-500">$ / კგ</span>
</div>
<p className="text-sm text-slate-500">პირდაპირი რეისები აშშ-დან</p>
</div>
</div>
</div>

<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-brand-500 font-medium hover:text-brand-600 transition-colors" onclick="openCalculator()">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
                    დეტალური ფასის გამოთვლა
                 </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="branches">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">ჩვენი ფილიალები</h2>
<p className="text-slate-500 max-w-2xl">ჩვენი ფილიალები საქართველოს ხუთ ქალაქშია წარმოდგენილი: თბილისი, ქუთაისი, ბათუმი, ზუგდიდი, რუსთავი.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all text-center group">
<div className="w-12 h-12 mx-auto bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 rounded-full flex items-center justify-center mb-3 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-800">თბილისი</h3>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all text-center group">
<div className="w-12 h-12 mx-auto bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 rounded-full flex items-center justify-center mb-3 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-800">ქუთაისი</h3>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all text-center group">
<div className="w-12 h-12 mx-auto bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 rounded-full flex items-center justify-center mb-3 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-800">ბათუმი</h3>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all text-center group">
<div className="w-12 h-12 mx-auto bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 rounded-full flex items-center justify-center mb-3 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-800">ზუგდიდი</h3>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all text-center group">
<div className="w-12 h-12 mx-auto bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 rounded-full flex items-center justify-center mb-3 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-800">რუსთავი</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-900 text-white relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8 text-white">ჩვენს შესახებ</h2>
<div className="space-y-6 text-slate-300 leading-relaxed font-light">
<p>
                        „სანექსი" თანამშრომლობს ყველაზე გამოცდილ და სანდო სატვირთო ავიაკომპანიებთან.
                    </p>
<p>
                        ჩვენი კომპანია მომხარებლებს სთავაზობს მისამართს ჩინეთის და თურქეთის საწყობში, სადაც ხდება მომხარებლების ამანათების შეჯგუფება, გადაფუთვა და შემდგომ მათი უსაფრთხო ტრანსპორტირება საქართველოში.
                    </p>
<p>
                        ჩამოსული ამანათების გატანა შესაძლებელია ჩვენი სათაო ოფისიდან, ასევე ბათუმისა და ქუთაისის ფილიალებიდან, ანდა საკურიერო მომსახურების მიღება მთელი საქართველოს მასშტაბით.
                    </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<iconify-icon className="text-brand-400 text-3xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-white font-medium">გამოცდილი გუნდი</h4>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<iconify-icon className="text-brand-400 text-3xl mb-2" icon="solar:box-linear"></iconify-icon>
<h4 className="text-white font-medium">გადაფუთვა</h4>
</div>
</div>
<div className="space-y-4">
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<iconify-icon className="text-brand-400 text-3xl mb-2" icon="solar:warehouse-linear"></iconify-icon>
<h4 className="text-white font-medium">საკუთარი საწყობები</h4>
</div>
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
<iconify-icon className="text-brand-400 text-3xl mb-2" icon="solar:routing-2-linear"></iconify-icon>
<h4 className="text-white font-medium">საკურიერო სერვისი</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">დაგვიკავშირდით</h2>
<p className="text-slate-500">გაქვთ შეკითხვები? ჩვენი გუნდი მზადაა დაგეხმაროთ.</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">ცხელი ხაზი</p>
<p className="font-medium text-slate-800">(+032) 232 50 05</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">მობილური</p>
<p className="font-medium text-slate-800">+995 593 809 809</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">ელ-ფოსტა</p>
<p className="font-medium text-slate-800">info@sanex.ge</p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center w-full gap-2 bg-[#1877F2] text-white px-6 py-4 rounded-xl font-medium transition-all hover:bg-[#1565C0] shadow-lg shadow-blue-900/10" href="#">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
                        მოგვწერეთ Facebook-ზე
                    </a>
</div>

<div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
<h3 className="text-xl font-semibold mb-6 text-slate-900">დაგვიტოვეთ შეტყობინება</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('შეტყობინება გაგზავნილია!');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">სახელი</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="თქვენი სახელი" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">ტელეფონი</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="555 00 00 00" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500">შეტყობინება</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" placeholder="დაგვიტოვეთ შეტყობინება და ჩვენი ოპერატორი დაგიკავშირდებათ..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-900 text-white py-4 rounded-xl font-medium hover:bg-brand-800 transition-colors" type="submit">
                            გაგზავნა
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-brand-500 text-white w-6 h-6 rounded flex items-center justify-center">
<iconify-icon icon="solar:box-bold" width="14"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tighter text-slate-900 uppercase">Sanex</span>
<span className="text-xs text-slate-400 ml-2">© 2026</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
<a className="hover:text-brand-500 transition-colors" href="#">მთავარი</a>
<a className="hover:text-brand-500 transition-colors" href="#forbidden">აკრძალული ნივთები</a>
<a className="hover:text-brand-500 transition-colors" href="#contact">კონტაქტი</a>
<a className="hover:text-brand-500 transition-colors" href="#">წესები და პირობები</a>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[100] hidden" id="trackingModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeTracking()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 animate-[float_0.3s_ease-out]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold text-slate-900">ამანათის ტრეკინგი</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeTracking()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="flex gap-2 mb-8">
<input className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm uppercase" id="trackInput" placeholder="მაგ: SNX08415" type="text"/>
<button className="bg-brand-500 text-white px-6 rounded-xl font-medium hover:bg-brand-600 transition-colors" onclick="showStatus()">სტატუსის ნახვა</button>
</div>

<div className="hidden border-t border-slate-100 pt-6" id="statusResult">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs text-slate-400">გზავნილის კოდი</p>
<p className="font-semibold text-slate-900">SNX08415</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400">მიღების სავარაუდო დრო</p>
<p className="font-semibold text-green-600">ხვალ, 14:00</p>
</div>
</div>
<div className="space-y-6 relative pl-2">

<div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-slate-100"></div>

<div className="flex gap-4 relative">
<div className="w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-sm z-10 shrink-0"></div>
<div>
<p className="text-sm font-medium text-slate-900">თბილისი - საბაჟო ტერმინალი</p>
<p className="text-xs text-slate-400">24 ოქტ 2024, 09:30</p>
</div>
</div>

<div className="flex gap-4 relative">
<div className="w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm z-10 shrink-0"></div>
<div>
<p className="text-sm font-medium text-slate-500">გამოგზავნილია ჩინეთიდან</p>
<p className="text-xs text-slate-400">22 ოქტ 2024, 18:45</p>
</div>
</div>

<div className="flex gap-4 relative">
<div className="w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm z-10 shrink-0"></div>
<div>
<p className="text-sm font-medium text-slate-500">მიღებულია საწყობში (Guangzhou)</p>
<p className="text-xs text-slate-400">20 ოქტ 2024, 11:20</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="calcModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeCalculator()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold text-slate-900">ფასის გამოთვლა</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeCalculator()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">მიმართულება</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm appearance-none cursor-pointer" id="calcCountry" onchange="calculatePrice()">
<option data-sym="$" value="12.50">ჩინეთი - საჰაერო (12.50$)</option>
<option data-sym="$" value="5.50">ჩინეთი - სახმელეთო (5.50$)</option>
<option data-sym="$" value="3.00">თურქეთი - სახმელეთო (3.00$)</option>
<option data-sym="$" value="1.50">თურქეთი - 10კგ+ (1.50$)</option>
<option data-sym="€" value="3.50">საბერძნეთი (3.50€)</option>
<option data-sym="$" value="8.95">ამერიკა (8.95$)</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">წონა (კგ)</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm" id="calcWeight" min="0.1" oninput="calculatePrice()" step="0.1" type="number" value="1"/>
</div>
<div className="bg-brand-50 rounded-xl p-6 text-center mt-6">
<p className="text-sm text-slate-500 mb-1">სავარაუდო ღირებულება</p>
<p className="text-3xl font-bold text-brand-600 tracking-tight" id="calcResult">12.50 $</p>
</div>
</div>
</div>
</div>



    </>
  );
}
