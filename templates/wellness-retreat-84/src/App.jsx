import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Ensure textareas resize smoothly preserving the minimal aesthetic
        const textarea = document.getElementById('comment');
        if (textarea) {
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16 md:pb-24">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 md:mb-20">
            Вартість та умови
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24">

<div className="lg:col-span-6 flex flex-col gap-8 w-full">

<div className="bg-gray-50/80 border border-gray-100 rounded-[2rem] p-8 md:p-12 flex items-center justify-center min-h-[160px]">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-center">
                        Вартість участі: 1500$
                    </h3>
</div>

<div className="flex flex-col border-t border-gray-200">
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center w-full py-6 cursor-pointer outline-none">
<span className="text-lg font-medium select-none">У вартість входить</span>
<span className="text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-2xl icon-plus" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-2xl icon-minus" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>Детальний опис того, що включено у вартість програми. Проживання, харчування, практики та матеріали.</p>
</div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center w-full py-6 cursor-pointer outline-none">
<span className="text-lg font-medium select-none">У вартість не входить</span>
<span className="text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-2xl icon-plus" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-2xl icon-minus" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>Трансфер до місця проведення, особисті витрати, додаткові індивідуальні сесії.</p>
</div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center w-full py-6 cursor-pointer outline-none">
<span className="text-lg font-medium select-none">Умови участі</span>
<span className="text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-2xl icon-plus" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-2xl icon-minus" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>Обов'язкова попередня співбесіда та повна оплата за 14 днів до початку ретриту.</p>
</div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center w-full py-6 cursor-pointer outline-none">
<span className="text-lg font-medium select-none">Умови скасування</span>
<span className="text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon className="text-2xl icon-plus" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-2xl icon-minus" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>Повернення 100% коштів при скасуванні за 30 днів. 50% при скасуванні за 14 днів. Менше ніж за 14 днів кошти не повертаються.</p>
</div>
</details>
</div>
</div>

<div className="lg:col-span-6 flex items-start w-full">
<div className="w-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-14">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 md:mb-10">
                        Заявка на участь
                    </h3>
<form className="flex flex-col gap-8 w-full">

<div className="relative w-full">
<input className="peer w-full border-b border-gray-300 py-3 text-lg bg-transparent outline-none focus:border-gray-900 transition-colors placeholder-transparent relative z-10" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-3 text-lg text-gray-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text z-0" htmlFor="name">
                                Ім'я *
                            </label>
</div>

<div className="relative mt-2 w-full">
<label className="block text-xs text-gray-400 mb-1">Номер телефону *</label>
<div className="flex items-end border-b border-gray-300 focus-within:border-gray-900 transition-colors pb-2">
<div className="flex items-center gap-2 pr-3 border-r border-gray-200 mr-3 pb-1 cursor-pointer shrink-0">
<span className="text-lg">🇺🇦</span>
<iconify-icon className="text-lg text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<input className="w-full py-1 text-lg bg-transparent outline-none placeholder:text-gray-300 min-w-0" placeholder="+380" required="" type="tel"/>
</div>
</div>

<div className="mt-4 w-full">
<label className="block text-base font-medium mb-4">Оберіть спосіб зв'язку</label>
<div className="flex flex-wrap items-center gap-6 md:gap-8">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 shrink-0">
<input checked="" className="sr-only" name="contact_method" type="radio" value="telegram"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-transparent transform scale-0 transition-transform duration-200"></div>
</div>
</div>
<span className="text-lg select-none font-normal">Телеграм</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 shrink-0">
<input className="sr-only" name="contact_method" type="radio" value="viber"/>
<div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-gray-400 flex items-center justify-center transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-transparent transform scale-0 transition-transform duration-200"></div>
</div>
</div>
<span className="text-lg select-none font-normal">Месенджер</span>
</label>
</div>
</div>

<div className="relative mt-4 w-full">
<textarea className="peer w-full border-b border-gray-300 py-3 text-lg bg-transparent outline-none focus:border-gray-900 transition-colors placeholder-transparent resize-none min-h-[44px] relative z-10" id="comment" placeholder=" " rows="1"></textarea>
<label className="absolute left-0 top-3 text-lg text-gray-500 transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text z-0" htmlFor="comment">
                                Коментар або запитання
                            </label>
</div>

<div className="mt-6 w-full">
<button className="bg-gray-900 text-white font-medium text-lg px-8 py-4 rounded-full hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto min-w-[200px]" type="submit">
                                Відправити
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4 auto-rows-auto">

<div className="flex flex-col group cursor-pointer h-full">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50 flex-shrink-0">
<img alt="Memory" className="absolute inset-0 w-full h-full object-cover lg:group-hover:opacity-0 transition-opacity duration-700 ease-out z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="hidden lg:flex absolute inset-0 bg-gray-50/90 backdrop-blur-sm p-8 items-center justify-center text-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
<p className="text-sm font-medium tracking-wide text-gray-900 leading-relaxed">За останні два роки ми провели понад 10 ретритів, у яких взяло участь понад 50 людей.</p>
</div>
</div>

<div className="block lg:hidden mt-4 px-2">
<p className="text-sm font-normal text-gray-600 leading-relaxed">За останні два роки ми провели понад 10 ретритів, у яких взяло участь понад 50 людей.</p>
</div>
</div>

<div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl bg-white lg:bg-transparent h-full">
<p className="text-xl md:text-2xl font-medium tracking-tight leading-snug">
                    Епізоди та плівкові фотографії з минулого виїзду.
                </p>
<p className="text-gray-400 mt-6 md:mt-10 font-normal text-sm tracking-wide">Карпати, 2023р.</p>
</div>

<div className="flex flex-col group cursor-pointer h-full">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 flex-shrink-0">
<img alt="Video cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-500 group-hover:bg-transparent">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-500 ease-out group-hover:scale-110">
<iconify-icon className="text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:block aspect-[3/4]"></div>

<div className="flex flex-col group cursor-pointer h-full">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50 flex-shrink-0">
<img alt="Memory" className="absolute inset-0 w-full h-full object-cover lg:group-hover:opacity-0 transition-opacity duration-700 ease-out z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="hidden lg:flex absolute inset-0 bg-gray-50/90 backdrop-blur-sm p-8 items-center justify-center text-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
<p className="text-sm font-medium tracking-wide text-gray-900 leading-relaxed">Нас надихає ідея створення простору, в якому можна відновитися в безпеці та з комфортом.</p>
</div>
</div>

<div className="block lg:hidden mt-4 px-2">
<p className="text-sm font-normal text-gray-600 leading-relaxed">Нас надихає ідея створення простору, в якому можна відновитися в безпеці та з комфортом.</p>
</div>
</div>

<div className="flex flex-col group cursor-pointer h-full">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 flex-shrink-0">
<img alt="Video cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-500 group-hover:bg-transparent">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-500 ease-out group-hover:scale-110">
<iconify-icon className="text-4xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:block aspect-[3/4]"></div>

<div className="flex flex-col group cursor-pointer h-full">
<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50 flex-shrink-0">
<img alt="Memory" className="absolute inset-0 w-full h-full object-cover lg:group-hover:opacity-0 transition-opacity duration-700 ease-out z-10" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="hidden lg:flex absolute inset-0 bg-gray-50/90 backdrop-blur-sm p-8 items-center justify-center text-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
<p className="text-sm font-medium tracking-wide text-gray-900 leading-relaxed">Ми цінуємо уважний спосіб життя, красу, природу та рух.</p>
</div>
</div>

<div className="block lg:hidden mt-4 px-2">
<p className="text-sm font-normal text-gray-600 leading-relaxed">Ми цінуємо уважний спосіб життя, красу, природу та рух.</p>
</div>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24 md:py-32 lg:py-48 bg-gray-50/40">
<div className="max-w-[1440px] mx-auto flex justify-start w-full">
<div className="max-w-[1000px] text-left w-full">
<p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.3] md:leading-[1.4] text-gray-900">
<span className="text-blue-600">Ретрит —</span> відступ, віддалення, зберігання.
                    <span className="text-blue-600">Свідомий</span> крок убік, що дозволяє зберегти цілісність, повернути спокійну ясність.
                    Вміти вчасно розпізнати потребу в паузі і дозволити собі її <span className="text-blue-600">— велика цінність.</span>
                    У тиші спадає напруга, зникають внутрішній конфлікт та розгубленість.
                    <span className="text-blue-600">Мудрість</span> полягає в умінні <span className="text-blue-600">діяти</span>
                    з узгодженого внутрішнього стану, коли рішення, думки та дії не суперечать одне одному.
                </p>
</div>
</div>
</section>


    </>
  );
}
