import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons with 1.5 stroke width as requested
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-[#0B1024]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
</div>

<div className="relative w-full max-w-[440px] px-6 py-12 z-10">

<div className="text-center mb-10">
<div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">

<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="32">
<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white">تسجيل الدخول</h1>
<p className="mt-3 text-lg text-slate-400 font-normal">مرحباً بك في منصة الراية القانونية</p>
</div>

<div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden">
<div className="p-8 sm:p-10">
<form action="#" className="space-y-6" method="POST">

<div className="space-y-2">
<label className="block text-base font-normal text-slate-700" htmlFor="email">
                            البريد الإلكتروني
                        </label>
<div className="relative group">
<input autocomplete="email" className="block w-full rounded-xl border-0 py-4 pr-11 pl-4 text-slate-900 shadow-[0_0_0_1px_rgba(226,232,240,1)] ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:shadow-none sm:text-base sm:leading-6 transition-all duration-200 bg-white" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
<i className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" data-lucide="mail"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-base font-normal text-slate-700" htmlFor="password">
                            كلمة المرور
                        </label>
<div className="relative group">
<input autocomplete="current-password" className="block w-full rounded-xl border-0 py-4 pr-11 pl-4 text-slate-900 shadow-[0_0_0_1px_rgba(226,232,240,1)] ring-inset ring-transparent placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:shadow-none sm:text-base sm:leading-6 transition-all duration-200 bg-white" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
<i className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" data-lucide="lock"></i>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center">
<input className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer transition-all" id="remember-me" name="remember-me" type="checkbox"/>
<label className="mr-3 block text-base text-slate-600 select-none cursor-pointer" htmlFor="remember-me">
                                تذكرني
                            </label>
</div>
<div className="text-base">
<a className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors" href="#">
                                نسيت كلمة المرور؟
                            </a>
</div>
</div>

<button className="flex w-full justify-center items-center gap-2 rounded-xl bg-[#0F172A] px-3 py-4 text-base font-medium leading-6 text-white shadow-lg shadow-indigo-500/20 hover:bg-[#1e293b] hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200" type="submit">
<span>تسجيل الدخول</span>
<i className="h-4 w-4 opacity-70" data-lucide="arrow-left"></i>
</button>
</form>

<div className="relative mt-8">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-100"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-3 text-base text-slate-500">أو</span>
</div>
</div>

<div className="mt-8">
<a className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-50 px-3 py-4 text-base font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200" href="#">
<i className="h-5 w-5 text-slate-500" data-lucide="user-plus"></i>
                        إنشاء حساب جديد
                    </a>
</div>
</div>

<div className="bg-slate-50/50 border-t border-slate-100 px-6 py-4 flex items-center justify-center gap-2">
<i className="h-4 w-4 text-emerald-500" data-lucide="shield-check"></i>
<span className="text-sm font-medium text-slate-500">بياناتك محمية ومشفرة بالكامل</span>
</div>
</div>

<div className="mt-10 flex items-center justify-center gap-x-8 text-sm text-slate-400">
<a className="hover:text-slate-200 transition-colors" href="#">سياسة الخصوصية</a>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<a className="hover:text-slate-200 transition-colors" href="#">شروط الاستخدام</a>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<a className="hover:text-slate-200 transition-colors" href="#">المساعدة</a>
</div>
<p className="mt-6 text-center text-xs text-slate-600">
            © 2024 موسوعة الراية القانونية. جميع الحقوق محفوظة.
        </p>
</div>


    </>
  );
}
