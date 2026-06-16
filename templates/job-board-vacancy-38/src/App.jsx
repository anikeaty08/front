import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-gray-900 text-white p-1 rounded-lg group-hover:bg-gray-800 transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold text-gray-900 tracking-tight">WorkHard</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">Вакансії</a>
<a className="text-gray-900" href="#">AI Builder</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">Компанії</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md border border-gray-200 text-xs font-medium text-gray-600">
<iconify-icon className="text-yellow-600" icon="lucide:coins"></iconify-icon>
<span>12 AI Credits</span>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
<iconify-icon height="20" icon="lucide:bell" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 cursor-pointer">
                        JD
                    </div>
</div>
</div>
</div>
</nav>

<main className="flex-1 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1400px] mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-5 space-y-6 pb-12">
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-purple-600" icon="lucide:sparkles"></iconify-icon>
                        Створення резюме AI
                    </h1>
<p className="text-sm text-gray-500 mt-1">Заповніть дані, а AI зробить магію.</p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
<h2 className="text-sm font-semibold text-gray-900">Базова інформація</h2>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Яку посаду ви шукаєте?</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder-gray-400" type="text" value="Senior Product Designer"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Років досвіду</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all" type="number" value="5"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Сфера</label>
<select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all">
<option>FinTech</option>
<option>E-commerce</option>
<option>SaaS</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 flex justify-between">
                            Посилання на портфоліо
                            <span className="text-gray-400 font-normal">Optional</span>
</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400" icon="lucide:link" width="14"></iconify-icon>
<input className="w-full pl-9 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all" placeholder="behance.net/username" type="text"/>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm group">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold">2</div>
<h2 className="text-sm font-semibold text-gray-900">Досвід роботи</h2>
</div>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
                        Додати
                    </button>
</div>

<div className="bg-gray-50 rounded-lg p-4 border border-purple-100 relative">
<div className="absolute -right-1 -top-1">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
</span>
</div>
<div className="grid grid-cols-2 gap-3 mb-3">
<input className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500" placeholder="Компанія" type="text" value="Monobank"/>
<input className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-500" placeholder="Посада" type="text" value="Product Designer"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-gray-600">Основні обов'язки та результати</label>
<button className="flex items-center gap-1.5 text-[10px] font-medium text-white bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded transition-colors shadow-sm shadow-purple-200">
<iconify-icon icon="lucide:wand-2" width="10"></iconify-icon>
                                Покращити з AI
                            </button>
</div>
<textarea className="w-full h-24 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-purple-500 resize-none leading-relaxed">Керував дизайном мобільного додатку. Збільшив конверсію на 20%. Створив дизайн-систему з нуля для команди з 10 дизайнерів.</textarea>
</div>
</div>

<div className="mt-3 p-3 border border-gray-100 rounded-lg flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors">
<div>
<div className="text-sm font-medium text-gray-900">UX Designer</div>
<div className="text-xs text-gray-500">Epam Systems • 2018-2020</div>
</div>
<iconify-icon className="text-gray-300" icon="lucide:chevron-right"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
<div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-bold">3</div>
<h2 className="text-sm font-semibold text-gray-900">Навички</h2>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-yellow-500" icon="lucide:lightbulb" width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-600">AI рекомендує для вашої позиції:</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-600 flex items-center gap-1 transition-colors">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> User Research
                        </button>
<button className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-600 flex items-center gap-1 transition-colors">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> Prototyping
                        </button>
<button className="px-2.5 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-xs font-medium text-gray-600 flex items-center gap-1 transition-colors">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> Design Systems
                        </button>
</div>
</div>
<div className="space-y-1.5">
<div className="flex flex-wrap gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg min-h-[42px]">
<span className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs font-medium text-gray-900 flex items-center gap-1">
                            Figma <iconify-icon className="text-gray-400 cursor-pointer hover:text-red-500" icon="lucide:x" width="12"></iconify-icon>
</span>
<span className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs font-medium text-gray-900 flex items-center gap-1">
                            UI Design <iconify-icon className="text-gray-400 cursor-pointer hover:text-red-500" icon="lucide:x" width="12"></iconify-icon>
</span>
<input className="bg-transparent text-xs outline-none flex-1 min-w-[100px]" placeholder="Додати навичку..." type="text"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
<div className="w-6 h-6 rounded bg-green-50 text-green-600 flex items-center justify-center text-xs font-bold">4</div>
<h2 className="text-sm font-semibold text-gray-900">Про себе (Summary)</h2>
</div>
<div className="grid grid-cols-3 gap-2 mb-3 bg-gray-50 p-1 rounded-lg">
<button className="px-3 py-1.5 bg-white shadow-sm rounded-md text-xs font-medium text-gray-900 text-center">Лаконічний</button>
<button className="px-3 py-1.5 hover:bg-gray-100 rounded-md text-xs font-medium text-gray-500 text-center transition-colors">Креативний</button>
<button className="px-3 py-1.5 hover:bg-gray-100 rounded-md text-xs font-medium text-gray-500 text-center transition-colors">Офіційний</button>
</div>
<div className="relative group">
<textarea className="w-full h-32 px-3 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-green-500 resize-none leading-relaxed">Product Designer with 5+ years of experience specializing in FinTech. Proven track record of improving user experience metrics and building scalable design systems. Passionate about creating intuitive financial tools.</textarea>
<div className="absolute bottom-3 right-3 flex gap-2">
<button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:refresh-cw" width="12"></iconify-icon> Generate again
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-2">
<button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
<iconify-icon icon="lucide:save" width="16"></iconify-icon>
                    Зберегти чернетку
                </button>
<button className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 rounded-xl text-sm font-medium text-white hover:bg-gray-800 shadow-lg shadow-gray-900/10 transition-all">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                    Експорт PDF
                </button>
</div>
</div>

<div className="lg:col-span-7 sticky top-24">
<div className="bg-gray-100 rounded-2xl border border-gray-200 p-6 md:p-8 overflow-hidden h-[calc(100vh-8rem)] flex items-center justify-center relative">

<div className="absolute top-4 right-4 flex gap-2 z-10">
<button className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors" title="Zoom In">
<iconify-icon icon="lucide:zoom-in" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors" title="Layout">
<iconify-icon icon="lucide:layout-template" width="16"></iconify-icon>
</button>
</div>

<div className="a4-paper bg-white shadow-2xl scale-[0.85] lg:scale-100 origin-top flex flex-col p-10 text-gray-900 transition-all duration-300">

<div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
<div>
<h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">John Doe</h1>
<div className="text-lg font-medium text-gray-500 mb-4">Senior Product Designer</div>
<div className="flex gap-4 text-xs text-gray-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> Kyiv, Ukraine</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:mail" width="12"></iconify-icon> johndoe@gmail.com</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:phone" width="12"></iconify-icon> +380 99 123 45 67</span>
</div>
</div>
<div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl">
                            JD
                        </div>
</div>

<div className="grid grid-cols-12 gap-8 h-full">

<div className="col-span-8 space-y-6">при</div>

<div className="col-span-4 space-y-6">

<section>
<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Skills</h3>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-gray-700 border border-gray-100">Figma</span>
<span className="px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-gray-700 border border-gray-100">UI Design</span>
<span className="px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-gray-700 border border-gray-100">User Research</span>
<span className="px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-gray-700 border border-gray-100">Prototyping</span>
<span className="px-2 py-1 bg-gray-50 rounded text-[10px] font-medium text-gray-700 border border-gray-100">HTML/CSS</span>
</div>
</section>

<section>
<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Education</h3>
<div className="mb-3">
<div className="text-xs font-bold text-gray-900">Computer Science</div>
<div className="text-[10px] text-gray-500">KNU Shevchenko</div>
<div className="text-[10px] text-gray-400">2014 - 2018</div>
</div>
</section>

<section>
<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Links</h3>
<div className="space-y-1">
<a className="text-xs text-blue-600 hover:underline flex items-center gap-1" href="#">
<iconify-icon icon="lucide:link-2" width="10"></iconify-icon> behance.net/johndoe
                                    </a>
<a className="text-xs text-blue-600 hover:underline flex items-center gap-1" href="#">
<iconify-icon icon="lucide:linkedin" width="10"></iconify-icon> linkedin.com/in/jd
                                    </a>
</div>
</section>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between px-2">
<span className="text-xs text-gray-400">Auto-saving...</span>
<div className="flex gap-2">
<button className="w-2 h-2 rounded-full bg-gray-300"></button>
<button className="w-2 h-2 rounded-full bg-gray-300"></button>
<button className="w-2 h-2 rounded-full bg-gray-900"></button>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-gray-900 text-white p-1 rounded-lg flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold text-gray-900 tracking-tight">WorkHard</span>
</div>
<div className="flex gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-gray-900 transition-colors" href="#">Templates</a>
<a className="hover:text-gray-900 transition-colors" href="#">Help</a>
</div>
<div className="text-sm text-gray-400">
                © 2023 WorkHard AI.
            </div>
</div>
</footer>

    </>
  );
}
