import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
emerald: {
450: '#10b981', // Muted accent
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', function() {
            const steps = document.querySelectorAll('.step');
            const totalSteps = steps.length;
            let currentStep = 1;
            
            const nextBtn = document.getElementById('next-btn');
            const prevBtn = document.getElementById('prev-btn');
            const progressBar = document.getElementById('progress-bar');
            const stepIndicator = document.getElementById('step-indicator');
            const quizNav = document.getElementById('quiz-nav');
            const finalStep = document.getElementById('final-step');

            function updateUI() {
                // Show/Hide Steps
                steps.forEach(step => {
                    if (parseInt(step.dataset.step) === currentStep) {
                        step.classList.remove('hidden');
                        step.classList.add('block');
                    } else {
                        step.classList.add('hidden');
                        step.classList.remove('block');
                    }
                });

                // Update Progress
                const progress = (currentStep / totalSteps) * 100;
                progressBar.style.width = `${progress}%`;
                stepIndicator.textContent = `Крок ${currentStep} з ${totalSteps}`;

                // Buttons State
                prevBtn.classList.toggle('hidden', currentStep === 1);
                
                // Check if current step has a selection
                const currentInputs = document.querySelectorAll(`.step[data-step="${currentStep}"] input[type="radio"]`);
                let isSelected = false;
                currentInputs.forEach(input => {
                    if(input.checked) isSelected = true;
                });
                
                // Allow Next only if selected (optional UX choice, strictly enforced here for "functional" request)
                // For smoother UX, we can leave it clickable or disable. Let's auto-enable.
            }

            nextBtn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateUI();
                } else {
                    // Finish Quiz
                    steps.forEach(s => s.classList.add('hidden'));
                    quizNav.classList.add('hidden');
                    stepIndicator.classList.add('hidden');
                    finalStep.classList.remove('hidden');
                    progressBar.style.width = '100%';
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateUI();
                }
            });

            // Auto-advance on radio selection (optional but nice)
            // Or just ensure button works.
            const allRadios = document.querySelectorAll('input[type="radio"]');
            allRadios.forEach(radio => {
                radio.addEventListener('change', () => {
                    // Optional: remove this if you want manual "Next" only
                    // setTimeout(() => {
                    //     if (currentStep < totalSteps) nextBtn.click();
                    // }, 300);
                });
            });

            updateUI();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-12 lg:pt-0 lg:pb-0">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-slate-950 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-emerald-400 tracking-wide uppercase">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                    Безпека та надійність
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
                    Безпечні ворота: 10 функцій, які реально захищають сім’ю й майно (а не “в рекламі”)
                </h1>
<div className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl border-l-2 border-slate-700 pl-6">
                    Якщо в гаражі стоїть авто 30k+, мото, інструменти, техніка або міні-склад – ворота перестають бути “просто воротами”.
                    Вони стають частиною вашої системи безпеки. І часто – її найслабшим місцем.
                </div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]" href="#functions">
<span>Перейти до 10 функцій</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-medium transition-all duration-300" href="#quiz">
<span>Пройти квіз</span>
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full aspect-[4/3] bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-8 overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:0_0,0_0] animate-[shimmer_3s_infinite]"></div>
<div className="relative z-10 flex flex-col items-center opacity-60 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500 mb-4" height="80" icon="solar:garage-linear" strokeWidth="1" width="80"></iconify-icon>
<iconify-icon className="text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-full border border-slate-800 p-2" height="40" icon="solar:shield-keyhole-linear" width="40"></iconify-icon>
<span className="text-sm font-mono text-slate-500 mt-4 tracking-widest uppercase">Premium Security Garage</span>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
</div>
</div>
</header>

<section className="py-24 bg-slate-900 border-y border-slate-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
                    Ви це відчуваєте не словами “клас зламостійкості”, а думками, які не відпускають:
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-6">
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Мене бісить думка, що ворота – найслабше місце у всій безпеці.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Якщо заклинить відкрими – це як залишити двері дому навстіж.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Не хочу ‘іграшкову автоматику’. Хочу нормально.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Коли щось клацнуло – одразу думаєш: ‘все, зараз буде попадос’.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Сервіс по факту: поки сталося – нікому не цікаво.”</p>
</div>
</div>

<div className="space-y-6">
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Не хочу пояснювати, що у мене всередині. Мені потрібен захист за замовчуванням.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Люблю порядок: щоб було зрозуміло, хто відповідає і за скільки часу.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Боюсь ситуації: поїхав, а ворота не закрились до кінця.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Не хочу, щоб діти могли випадково травмуватися.”</p>
</div>
<div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex gap-4">
<iconify-icon className="text-slate-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-slate-300 italic">“Ненавиджу ‘сіру зону’, де гарантія ніби є, але по факту – ні.”</p>
</div>
</div>
</div>
<div className="mt-12 text-center max-w-3xl mx-auto">
<p className="text-lg text-emerald-400 font-medium">
                    Цей лід-магніт дає вам список 10 функцій, які справді підсилюють безпеку та надійність, і головне – як перевірити це до покупки, без технічної освіти.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Спершу – одна важлива думка</h2>
<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
<p className="text-xl text-slate-300 mb-8">
                    Безпека воріт – це не одна “фішка”. Це ланцюжок:
                </p>

<div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between mb-8">

<div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
<span className="font-medium text-white">вузли воріт</span>
</div>
<iconify-icon className="text-slate-600 hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-600 lg:hidden block w-full text-center" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:bolt-linear" width="24"></iconify-icon>
<span className="font-medium text-white">автоматика</span>
</div>
<iconify-icon className="text-slate-600 hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-600 lg:hidden block w-full text-center" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:hammer-linear" width="24"></iconify-icon>
<span className="font-medium text-white">монтаж</span>
</div>
<iconify-icon className="text-slate-600 hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-600 lg:hidden block w-full text-center" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
<span className="font-medium text-white">налаштування</span>
</div>
<iconify-icon className="text-slate-600 hidden lg:block" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="text-slate-600 lg:hidden block w-full text-center" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:chat-round-check-linear" width="24"></iconify-icon>
<span className="font-medium text-white">сервіс</span>
</div>
</div>
<div className="border-t border-slate-700 pt-6">
<p className="text-slate-400 mb-4 font-medium">Навіть найкраща система перетворюється на ризик, якщо:</p>
<ul className="space-y-2 text-slate-400">
<li className="flex items-start gap-2">
<span className="text-red-500 mt-1">–</span> підібрали не під ваш сценарій
                        </li>
<li className="flex items-start gap-2">
<span className="text-red-500 mt-1">–</span> поставили без регламенту
                        </li>
<li className="flex items-start gap-2">
<span className="text-red-500 mt-1">–</span> немає зрозумілої відповідальності і швидкого сервісу
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative" id="functions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-12">
                10 функцій, які реально захищають (і як перевірити)
            </h2>
<div className="flex flex-col lg:flex-row gap-8">

<div className="hidden lg:block w-1/4 h-fit sticky top-8">
<nav className="space-y-1">
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f1">1. Захист від підважування</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f2">2. Надійна механіка</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f3">3. Аварійне відкривання</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f4">4. Закриття “до кінця”</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f5">5. Безпека від травм</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f6">6. Захист автоматики</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f7">7. Тиха робота</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f8">8. Правила гарантії</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f9">9. Пріоритетний сервіс</a>
<a className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition" href="#f10">10. Швидке відновлення</a>
</nav>
</div>

<div className="lg:hidden flex overflow-x-auto gap-2 pb-4 snap-x">
<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">1. Захист</span>
<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">2. Механіка</span>
<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">3. Аварійне</span>
<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">4. Закриття</span>
<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">5. Безпека</span>

<span className="shrink-0 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">...</span>
</div>

<div className="w-full lg:w-3/4 space-y-8">

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f1">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:shield-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">1) Захист від підважування та підйому полотна ззовні</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">ворота не “піднімаються руками” або домкратом.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">в КП має бути чітко прописано, що передбачено протизламне рішення на полотні/механіці, а не просто “надійні ворота”. Попросіть показати, де саме воно стоїть і як працює.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: нічна сцена. Злодій намагається підважити нижній край воріт ломом – але видно “стопор/блокіратор”, який не дає підняти полотно. Поруч – піктограма “щит” і підпис “антипідйом”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f2">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">2) Надійна механіка, яка не “втомлюється” в найгірший момент</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">менше шансів на клин або перекіс, коли вам треба терміново закрити/відкрити.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">у сметі мають бути конкретні параметри вузлів (ресурс, клас, серія). Якщо там “ворота – 1 шт” – це ризик.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: крупний план “механіки” – пружина/ролики/направляюча як “серце системи”. Ліворуч – стерті/іржаві деталі з червоним попередженням “знос”. Праворуч – нові деталі з зеленою галочкою і написом “ресурс/клас”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f3">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:key-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">3) Ручне аварійне відкривання – не для галочки</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">якщо світло/автоматика/збій – ви все одно відкриєте/закриєте ворота.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">запитайте прямо: “Як я відкрию ворота, якщо пропаде живлення? Покажіть сценарій”. Не “можна”, а як саме.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: відключене світло (іконка “блискавка перекреслена”), власник спокійно відкриває ворота аварійним механізмом. Поруч – простий 3-кроковий міні-схемник: “розблокувати – потягнути – відкрити”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f4">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:maximize-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">4) Стабільне закриття “до кінця” з контролем положення</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">менше шансів на ваш страх №1: “поїхав, а ворота не дотягнулись і залишились щілиною”.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">попросіть, щоб у пусконаладці було зафіксовано перевірку “закриття до упору” і налаштування кінцевиків/логіки.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: ворота майже закриті – видна маленька щілина з червоним знаком “ризик”. Поруч – інший кадр: ворота повністю закриті, контур підсвічений зеленим, іконка “замок” і “OK”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f5">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:user-hand-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">5) Системи безпеки від травм (діти, домашні, персонал)</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">ворота не “тиснуть” і не створюють небезпечний сценарій.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">на запуску має бути тест безпеки. Попросіть: “Які перевірки ви робите і чи буде акт?”</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: дитина стоїть поруч (на безпечній відстані), ворота зупиняються/реверсують при перешкоді. Візуальний акцент – великий знак “безпека” і м’яке підсвічування зони контролю.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f6">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">6) Захист автоматики від “дурних” збоїв живлення</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">менше “життя своїм життям” від просадок/вологи/поганих контактів.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">у плані має бути пункт про живлення і захист. Якщо відповідь “це ваш електрик” – ок, але тоді має бути чек-лист вимог, щоб не було відмови по гарантії.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: два щитки поруч. Лівий – хаос, “скрутки”, волога, червоний трикутник. Правий – акуратний щиток, захист/автомат/герметична коробка, зелена галочка і напис “правильне живлення”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f7">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:soundwave-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">7) Тиха робота без ривків (щоб не лякало і не будило)</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">менше “щось клацнуло – зараз буде попадос”. Тиша – це часто маркер правильного налаштування.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">під час здачі попросіть 3–5 циклів підряд. Тиша і плавність мають бути стабільні, а не “раз норм, раз ні”.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: ранній ранок. Будинок/сусіди сплять. Ворота рухаються плавно – хвиля звуку низька (зелена). Поруч – контраст: “гучно/скрегіт” з червоною хвилею звуку.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f8">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">8) Чіткі правила гарантії, які працюють, а не “на папері”</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">ви не залишаєтесь у сірій зоні “дзвоніть виробнику” та “це не гарантійний випадок”.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<div className="text-slate-300">
<p className="mb-2">поставте питання:</p>
<ul className="list-disc list-inside space-y-1 ml-1">
<li>“Гарантія чия – виробника чи ваша?”</li>
<li>“Що потрібно, щоб гарантія діяла?”</li>
<li>“Як виглядає процес звернення і строки?”</li>
</ul>
<p className="mt-2 text-slate-400 text-sm">Якщо вам кажуть “гарантія від виробника” – значить у багатьох випадках вам доведеться проходити квест: регламенти, сервісні відмітки, докази правильного монтажу.</p>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: лабіринт із паперів та печаток “гарантія виробника” (червоний маршрут довгий). Поруч – короткий зелений маршрут “один контакт – заявка – виїзд – відновлення”, плюс піктограма “таймер”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f9">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:chat-round-call-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">9) Пріоритетний сервісний маршрут (щоб не “дозванивайтесь”)</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">у разі збою ви не витрачаєте час на пошук “хто відповідає”.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<p className="text-slate-300">має бути один конкретний канал (чат/телефон), правила звернення і час реакції.</p>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: екран смартфона з “Сервісний чат” і великим написом “Пріоритет”. Поруч – проста інфографіка: “1) написали – 2) підтвердили – 3) виїзд – 4) відновили”.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden scroll-mt-24" id="f10">
<div className="p-6 md:p-8">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-emerald-900/20 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white">10) Швидке відновлення: SLA + (за можливості) advance replacement типових вузлів</h3>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Що це дає:</p>
<p className="text-slate-300">якщо щось сталося – ви не чекаєте тижнями деталь. Ви повертаєтесь у нормальний режим швидко.</p>
</div>
<div>
<p className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-1">Як перевірити:</p>
<div className="text-slate-300">
<p className="mb-2">запитайте:</p>
<ul className="list-disc list-inside space-y-1 ml-1">
<li>“За скільки часу ви повертаєте ворота в робочий стан при типовій поломці?”</li>
<li>“Чи є рішення з обміном типових вузлів?”</li>
</ul>
<p className="mt-2 text-slate-400 text-sm">Якщо відповідь розмита – це означає: “як пощастить”.</p>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-800 min-h-[200px]">
<iconify-icon className="text-slate-600 mb-2" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<p className="text-xs text-slate-500 italic px-4">Картинка для візуалізації: дві сцени. Ліворуч – календар з перекресленими днями “очікуємо деталь”, червона стрічка “стоп”. Праворуч – майстер міняє вузол “по обміну”, зелена печатка “SLA”, таймер “48 год/24 год” (плейсхолдер).</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white text-center mb-12">Швидка самоперевірка: ви купуєте захист чи рекламу?</h2>
<p className="text-center text-slate-400 mb-8">Відмітьте, що у вас вже є або буде:</p>
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">

<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є аварійний сценарій “відкрию/закрию без живлення”</span>
</label>
<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є чітке підтвердження протизламних рішень (де саме)</span>
</label>
<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є акт пусконаладки з переліком перевірок</span>
</label>
<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є вимоги до електрики/захисту (щоб не злетіла гарантія)</span>
</label>
<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є сервісний маршрут і строки реакції</span>
</label>
<label className="custom-checkbox flex items-start gap-4 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-slate-600 bg-slate-800 flex items-center justify-center shrink-0 transition-colors group-hover:border-slate-500">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-lg text-slate-300">є зафіксований строк відновлення (SLA)</span>
</label>
</div>
<div className="mt-8 p-6 bg-yellow-900/10 border border-yellow-700/30 rounded-xl flex gap-4 items-start">
<iconify-icon className="text-yellow-500 shrink-0 mt-1" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
<p className="text-yellow-200/80">Якщо 2–3 пункти “плавають” – це та сама сіра зона, яку ви ненавидите.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Чому наш підхід “лягає” на ваші страхи</h2>
<p className="text-lg text-slate-300 mb-6">
                        Ми робимо не “секційні ворота”. Ми робимо результат:
                    </p>
<div className="p-6 bg-slate-800 rounded-xl border-l-4 border-emerald-500 mb-8">
<p className="text-white italic text-lg">
                            “Ворота працюють як годинник. Якщо ні – є зрозумілий маршрут сервісу і ми швидко повертаємо їх у робочий стан.”
                        </p>
</div>
<p className="text-slate-400">Що в цьому важливо саме для вас:</p>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4 p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
<div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400 shrink-0">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-200 font-medium pt-1">інженерний підбір під сценарій (майно, сім’я, інтенсивність, середовище)</p>
</div>

<div className="flex items-start gap-4 p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
<div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400 shrink-0">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-200 font-medium pt-1">акт відповідальності після пусконаладки (не “поставили і поїхали”)</p>
</div>

<div className="flex items-start gap-4 p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
<div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-200 font-medium pt-1">пріоритетний сервіс (без “дозванивайтесь”)</p>
</div>

<div className="flex items-start gap-4 p-5 bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
<div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400 shrink-0">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-200 font-medium pt-1">і, якщо у вашому форматі це реально, advance replacement типових вузлів, щоб не чекати тижнями</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="quiz">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<span className="text-emerald-400 font-medium tracking-widest uppercase text-xs mb-2 block">Квіз (замість CTA)</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">
                    Квіз: “Який рівень безпеки потрібен саме вам – і де ви ризикуєте зараз?”
                </h2>
<p className="mt-4 text-slate-400">
                    Виберіть відповіді. В кінці ви зрозумієте, які функції з 10 – обов’язкові саме у вашому сценарії.
                </p>
</div>
<div className="bg-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 overflow-hidden relative min-h-[400px]">

<div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
<div className="h-full bg-emerald-500 transition-all duration-300 w-[10%]" id="progress-bar"></div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-slate-500 font-medium" id="step-indicator">Крок 1 з 10</span>
</div>
<form id="quiz-form">

<div className="step block" data-step="1">
<h3 className="text-xl font-medium text-white mb-6">1) Що саме ви зберігаєте в гаражі?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block">
<input className="hidden" name="q1" type="radio" value="A"/>
<div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition">
<div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div>
<span className="text-slate-300">Авто 30k+</span>
</div>
</label>
<label className="quiz-radio cursor-pointer block">
<input className="hidden" name="q1" type="radio" value="B"/>
<div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition">
<div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div>
<span className="text-slate-300">Мото/квадро/скутер</span>
</div>
</label>
<label className="quiz-radio cursor-pointer block">
<input className="hidden" name="q1" type="radio" value="C"/>
<div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition">
<div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div>
<span className="text-slate-300">Дорогий інструмент/обладнання</span>
</div>
</label>
<label className="quiz-radio cursor-pointer block">
<input className="hidden" name="q1" type="radio" value="D"/>
<div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition">
<div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div>
<span className="text-slate-300">Техніка/матеріали (як міні-склад)</span>
</div>
</label>
<label className="quiz-radio cursor-pointer block">
<input className="hidden" name="q1" type="radio" value="E"/>
<div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition">
<div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div>
<span className="text-slate-300">Все разом</span>
</div>
</label>
</div>
</div>

<div className="step hidden" data-step="2">
<h3 className="text-xl font-medium text-white mb-6">2) Як часто ворота відкриваються в день?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q2" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">1–2 рази</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q2" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">3–6 разів</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q2" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">7–15 разів</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q2" type="radio" value="D"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">15+ разів</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q2" type="radio" value="E"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Не знаю / по-різному</span></div></label>
</div>
</div>

<div className="step hidden" data-step="3">
<h3 className="text-xl font-medium text-white mb-6">3) Який сценарій лякає найбільше?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q3" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Взлом і втрата майна</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q3" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Ворота заклинило у відкритому положенні</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q3" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Ворота не закрились до кінця, а я поїхав</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q3" type="radio" value="D"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Травма (діти/домашні/персонал)</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q3" type="radio" value="E"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Все разом</span></div></label>
</div>
</div>

<div className="step hidden" data-step="4">
<h3 className="text-xl font-medium text-white mb-6">4) Де гараж знаходиться?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q4" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Приватний будинок, гараж окремо</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q4" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Приватний будинок, гараж всередині будинку</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q4" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Таунхаус/котеджне містечко</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q4" type="radio" value="D"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Кооператив/спільний ряд гаражів</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q4" type="radio" value="E"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Інше</span></div></label>
</div>
</div>

<div className="step hidden" data-step="5">
<h3 className="text-xl font-medium text-white mb-6">5) Наскільки важливо, щоб ворота працювали максимально тихо?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q5" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Дуже важливо (діти/сон/сусіди)</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q5" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Важливо, але не критично</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q5" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Неважливо</span></div></label>
</div>
</div>

<div className="step hidden" data-step="6">
<h3 className="text-xl font-medium text-white mb-6">6) Якщо станеться збій – який час відновлення для вас прийнятний?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q6" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">До 4 годин</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q6" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">До 24 годин</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q6" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">До 48 годин</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q6" type="radio" value="D"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Може бути довше, але потрібна чітка відповідальність і прогноз</span></div></label>
</div>
</div>

<div className="step hidden" data-step="7">
<h3 className="text-xl font-medium text-white mb-6">7) Як у вас зараз з “гарантією” в голові?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q7" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Є гарантія – значить швидко полагодять”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q7" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Знаю, що гарантія часто від виробника і з регламентом”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q7" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Не хочу розбиратись, хочу щоб працювало і щоб був відповідальний”</span></div></label>
</div>
</div>

<div className="step hidden" data-step="8">
<h3 className="text-xl font-medium text-white mb-6">8) Що вас найбільше дратує в сервісі “по факту”?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q8" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Дозванивайтесь / залиште заявку”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q8" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Це не гарантія, звертайтесь до виробника”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q8" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Очікуйте деталь тиждень”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q8" type="radio" value="D"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">“Ніхто не відповідає конкретно”</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q8" type="radio" value="E"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Все це</span></div></label>
</div>
</div>

<div className="step hidden" data-step="9">
<h3 className="text-xl font-medium text-white mb-6">9) Вам важливо, щоб була зафіксована відповідальність актом після пусконаладки?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q9" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Так, хочу акт і чіткий перелік перевірок</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q9" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Мені все одно, аби працювало</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q9" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Не знаю, але звучить логічно</span></div></label>
</div>
</div>

<div className="step hidden" data-step="10">
<h3 className="text-xl font-medium text-white mb-6">10) Ви хочете, щоб під вас підібрали комплект безпеки під сценарій і пояснили “що саме і навіщо”?</h3>
<div className="space-y-3">
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q10" type="radio" value="A"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Так, хочу підбір під сценарій</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q10" type="radio" value="B"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Хочу, але без зайвих дзвінків – швидко і по суті</span></div></label>
<label className="quiz-radio cursor-pointer block"><input className="hidden" name="q10" type="radio" value="C"/><div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition"><div className="radio-dot w-4 h-4 rounded-full border border-slate-500 shrink-0"></div><span className="text-slate-300">Ні, сам(а) розберусь</span></div></label>
</div>
</div>

<div className="hidden" id="final-step">
<div className="text-center space-y-6">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="64"></iconify-icon>
<button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl text-lg transition shadow-lg shadow-emerald-900/50" type="button">
                                    Показати рекомендацію і список обов’язкових функцій
                                </button>
<div className="max-w-md mx-auto space-y-4 pt-4 text-left">
<div>
<label className="block text-sm font-medium text-slate-400 mb-1">Ім’я</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-1">Телефон або Telegram</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" type="text"/>
<p className="text-xs text-slate-500 mt-2">щоб надіслати рекомендацію і короткий підбір комплекту під ваш гараж.</p>
</div>
<div className="flex items-center gap-2 pt-2">
<iconify-icon className="text-slate-600" icon="solar:lock-password-linear" width="14"></iconify-icon>
<span className="text-[10px] text-slate-600">Ваші дані надійно захищені та не передаються третім особам.</span>
</div>
</div>
</div>
</div>
</form>

<div className="flex justify-between mt-8 pt-6 border-t border-slate-800" id="quiz-nav">
<button className="hidden px-6 py-2 rounded-lg text-slate-400 hover:text-white border border-slate-700 hover:bg-slate-800 transition" id="prev-btn" type="button">Назад</button>
<button className="ml-auto px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition disabled:opacity-50 disabled:cursor-not-allowed" id="next-btn" type="button">Далі</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="text-slate-500 text-sm">
                © 2023 Bezpechni Vorota. All rights reserved.
            </div>
<div className="flex gap-4">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>Замовити дзвінок</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition">
<iconify-icon icon="logos:telegram" width="18"></iconify-icon>
<span>Telegram</span>
</button>
</div>
</div>
</footer>



    </>
  );
}
