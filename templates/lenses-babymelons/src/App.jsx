import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Countdown Timer
        function updateCountdown() {
            const countdownEl = document.getElementById('countdown');
            if(!countdownEl) return;
            
            let target = new Date();
            target.setDate(target.getDate() + ((3 + 7 - target.getDay()) % 7 || 7)); // Next Wednesday
            target.setHours(23, 59, 59, 0);

            const now = new Date();
            const diff = target - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / 1000 / 60) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                const spans = countdownEl.querySelectorAll('span');
                spans[0].innerText = days.toString().padStart(2, '0');
                spans[1].innerText = hours.toString().padStart(2, '0');
                spans[2].innerText = minutes.toString().padStart(2, '0');
                spans[3].innerText = seconds.toString().padStart(2, '0');
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Custom Pricing Toggle Logic
        const pricingRadios = document.querySelectorAll('input[name="pricing"]');
        pricingRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                // Reset all
                document.querySelectorAll('label').forEach(label => {
                    if(label.querySelector('input[name="pricing"]')) {
                        label.classList.remove('border-[#EB9B90]', 'border-2', 'bg-[#FDF0EE]/50');
                        label.classList.add('border-[#EAF3F4]', 'border');
                        
                        const indicator = label.querySelector('.rounded-full');
                        indicator.innerHTML = '';
                        indicator.classList.remove('border-[#EB9B90]', 'border-2');
                        indicator.classList.add('border-[#EAF3F4]', 'border');
                        
                        // Fix text colors
                        label.querySelector('div > span:first-child').classList.remove('text-[#EB9B90]');
                        label.querySelector('div > span:first-child').classList.add('text-[#5D737D]/60');
                    }
                });

                // Set active
                if(this.checked) {
                    const label = this.closest('label');
                    label.classList.remove('border-[#EAF3F4]', 'border');
                    label.classList.add('border-[#EB9B90]', 'border-2', 'bg-[#FDF0EE]/50');
                    
                    const indicator = label.querySelector('.rounded-full');
                    indicator.classList.remove('border-[#EAF3F4]', 'border');
                    indicator.classList.add('border-[#EB9B90]', 'border-2');
                    indicator.innerHTML = '<div class="w-2.5 h-2.5 rounded-full bg-[#EB9B90]"></div>';

                    // Fix text colors
                    label.querySelector('div > span:first-child').classList.remove('text-[#5D737D]/60');
                    label.querySelector('div > span:first-child').classList.add('text-[#EB9B90]');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#5D737D] text-white py-2 px-4 sticky top-0 z-50 text-center text-sm font-light flex flex-col md:flex-row justify-center items-center gap-2 tracking-wide">
<span className="flex items-center gap-2 opacity-90 font-sans">
<iconify-icon className="text-lg text-[#EB9B90]" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
            يُغلق التسجيل الأربعاء ١١:٥٩ مساءً
        </span>
<div className="hidden md:block w-px h-3 bg-white/20 mx-2"></div>
<div className="font-medium text-[#EB9B90] tracking-widest flex items-center gap-1 font-sans" dir="ltr" id="countdown">
<span>07</span>:<span>23</span>:<span>08</span>:<span>21</span>
</div>
</div>

<section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-white border-b border-[#EAF3F4]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="flex flex-col items-start text-right">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F4] text-[#5D737D] text-sm font-medium mb-10">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="pt-0.5 font-sans">منهج RRR™️ — إعادة البناء · التنظيم · التربية</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-[#5D737D] tracking-tight leading-[1.1] mb-8 font-sans">
                        من أمٍّ منهكة تشكّ في نفسها<br/>إلى <span className="text-[#EB9B90]">قائدة هادئة</span> لبيتها.
                    </h1>
<p className="text-2xl font-light text-[#5D737D]/80 leading-relaxed mb-6 max-w-lg font-sans">
                        في ١٢ أسبوعًا — استعيدي السيطرة دون التخلي عن قيمك العربية الأصيلة.
                    </p>
<p className="text-lg text-[#5D737D]/60 font-light mb-12 max-w-lg leading-relaxed font-sans">
                        ١٠ دقائق يوميًا تكفي. حتى لو كنتِ منهكة. حتى لو جربتِ مئات الطرق من قبل.
                    </p>
<div className="flex flex-col w-full sm:w-auto border-t border-[#EAF3F4] pt-8 mt-4">
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#5D737D] text-white text-xl font-medium px-8 py-5 rounded-lg hover:bg-[#EB9B90] transition-colors duration-300 font-sans" href="#pricing">
                            احجزي مكانك الآن
                            <iconify-icon className="text-2xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-sm text-[#5D737D]/60 mt-4 font-light text-center sm:text-right flex items-center justify-center sm:justify-start gap-2 font-sans">
<iconify-icon className="text-lg text-[#EB9B90]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            ٥٠ أمًّا فقط — مقاعد محدودة
                        </p>
</div>
</div>
<div className="relative w-full aspect-[4/5] lg:aspect-square">
<div className="absolute inset-0 bg-[#FDF0EE] rounded-2xl -rotate-2 scale-105 z-0"></div>
<img alt="د. إيمان بطيحة" className="rounded-2xl w-full h-full object-cover relative z-10 shadow-lg ring-1 ring-[#5D737D]/5" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDF0EE]">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="mb-20 text-right">
<span className="text-sm font-medium text-[#EB9B90] tracking-widest uppercase mb-4 block font-sans">الواقع الحالي</span>
<h2 className="text-4xl md:text-5xl font-medium text-[#5D737D] tracking-tight leading-tight font-sans">
                    لو كنتِ تعيشين أيٌّ من هذا…<br/>هذه الصفحة كُتبت لكِ.
                </h2>
</div>
<div className="space-y-6 mb-20">

<div className="flex items-start gap-6 border-b border-[#5D737D]/10 pb-8 group hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-3xl text-[#5D737D]/40 group-hover:text-[#EB9B90] transition-colors mt-1 shrink-0" icon="solar:volume-cross-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-[#5D737D]/80 leading-relaxed pt-1 font-sans">تصرخين على أطفالك في لحظات الغضب، وتأكلك مشاعر الندم بعدها مباشرةً.</p>
</div>

<div className="flex items-start gap-6 border-b border-[#5D737D]/10 pb-8 group hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-3xl text-[#5D737D]/40 group-hover:text-[#EB9B90] transition-colors mt-1 shrink-0" icon="solar:sad-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-[#5D737D]/80 leading-relaxed pt-1 font-sans">تشعرين بالذنب المستمر، حتى وأنتِ تبذلين أقصى جهدك لتكوني أمًّا أفضل.</p>
</div>

<div className="flex items-start gap-6 border-b border-[#5D737D]/10 pb-8 group hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-3xl text-[#5D737D]/40 group-hover:text-[#EB9B90] transition-colors mt-1 shrink-0" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-[#5D737D]/80 leading-relaxed pt-1 font-sans">لا تعرفين كيف تضعين حدودًا حازمة دون أن تكسري علاقتك بطفلك.</p>
</div>

<div className="flex items-start gap-6 border-b border-[#5D737D]/10 pb-8 group hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-3xl text-[#5D737D]/40 group-hover:text-[#EB9B90] transition-colors mt-1 shrink-0" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-[#5D737D]/80 leading-relaxed pt-1 font-sans">تجدين نفسك تكررين نفس أنماط تربيتك القديمة، وتتمنين كسر هذه الدائرة.</p>
</div>
</div>
<div className="p-10 text-center bg-white border border-[#EAF3F4] rounded-xl shadow-sm">
<p className="text-2xl font-light text-[#5D737D] leading-relaxed font-sans">
                    المشكلة لم تبدأ من طفلك. <span className="text-[#EB9B90] font-medium">بدأت منكِ.</span><br/>
                    وهذا ليس عيبًا — هذه هي نقطة القوة والبداية.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-[#EAF3F4]">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-[#5D737D] tracking-tight mb-6 font-sans">
                    الطريق الثالث
                </h2>
<p className="text-xl font-light text-[#5D737D]/70 leading-relaxed font-sans">لا هي الطريقة العربية التقليدية القاسية، ولا هي الطريقة الغربية المتساهلة. منهج RRR™️ هو الموازنة المفقودة.</p>
</div>
<div className="overflow-x-auto pb-8">
<table className="w-full min-w-[800px] text-right border-collapse">
<thead>
<tr className="border-b-2 border-[#5D737D]">
<th className="py-6 px-4 font-medium text-[#5D737D]/60 text-xl w-1/3 font-sans">التقليدية العربية</th>
<th className="py-6 px-4 font-medium text-[#5D737D]/60 text-xl w-1/3 font-sans">الغربية الواعية</th>
<th className="py-6 px-4 font-medium text-[#5D737D] text-2xl w-1/3 flex items-center gap-2 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
                                منهج RRR™️
                            </th>
</tr>
</thead>
<tbody className="text-lg font-light divide-y divide-[#EAF3F4]">
<tr className="hover:bg-[#FDF0EE]/50 transition-colors">
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">الخوف والسلطة</td>
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">الطفل أولاً (تساهل)</td>
<td className="py-6 px-4 text-[#5D737D] font-medium bg-[#FDF0EE]/50 font-sans">الأم أولاً — ثم القيادة بالقيم</td>
</tr>
<tr className="hover:bg-[#FDF0EE]/50 transition-colors">
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">الطاعة بالقوة</td>
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">استقلالية الطفل الكاملة</td>
<td className="py-6 px-4 text-[#5D737D] font-medium bg-[#FDF0EE]/50 font-sans">القيادة الواعية ذات الحدود</td>
</tr>
<tr className="hover:bg-[#FDF0EE]/50 transition-colors">
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">قمع المشاعر</td>
<td className="py-6 px-4 text-[#5D737D]/70 font-sans">لا حدود للسلوك</td>
<td className="py-6 px-4 text-[#5D737D] font-medium bg-[#FDF0EE]/50 font-sans">احتواء المشاعر مع تقويم السلوك</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-32 bg-[#5D737D] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-24 md:flex md:justify-between md:items-end">
<div className="max-w-2xl">
<span className="text-sm font-medium text-[#EB9B90] tracking-widest uppercase mb-4 block font-sans">المنهجية</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight font-sans">
                        ٣ مراحل تُغيّر<br/>كل شيء.
                    </h2>
</div>
<p className="text-xl font-light text-white/70 mt-6 md:mt-0 max-w-md leading-relaxed font-sans">
                    منهج مبني على أسس علم النفس وعلم الأعصاب، مصمم خصيصاً للأم العربية.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">

<div className="relative group">
<span className="text-7xl font-medium text-white/5 absolute -top-10 -right-4 z-0 pointer-events-none group-hover:text-[#EB9B90]/10 transition-colors font-sans">01</span>
<div className="relative z-10">
<span className="text-sm font-light text-[#EAF3F4]/60 mb-4 block tracking-widest font-sans">أسابيع ١-٤</span>
<h3 className="text-3xl font-medium mb-8 flex items-center gap-3 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
                            إعادة البناء
                        </h3>
<ul className="space-y-4 mb-10 text-white/80 font-light text-lg">
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                تفكيك منظومة المعتقدات القديمة
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                كسر أنماط الصراخ التفاعلي
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                شفاء علاقتك بماضيك
                            </li>
</ul>
</div>
</div>

<div className="relative group">
<span className="text-7xl font-medium text-white/5 absolute -top-10 -right-4 z-0 pointer-events-none group-hover:text-[#EB9B90]/10 transition-colors font-sans">02</span>
<div className="relative z-10">
<span className="text-sm font-light text-[#EAF3F4]/60 mb-4 block tracking-widest font-sans">أسابيع ٥-٨</span>
<h3 className="text-3xl font-medium mb-8 flex items-center gap-3 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
                            التنظيم
                        </h3>
<ul className="space-y-4 mb-10 text-white/80 font-light text-lg">
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                إتقان التنظيم العاطفي الذاتي
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                تطوير القيادة الواعية والهادئة
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                وضع حدود صحية دون شعور بالذنب
                            </li>
</ul>
</div>
</div>

<div className="relative group">
<span className="text-7xl font-medium text-white/5 absolute -top-10 -right-4 z-0 pointer-events-none group-hover:text-[#EB9B90]/10 transition-colors font-sans">03</span>
<div className="relative z-10">
<span className="text-sm font-light text-[#EAF3F4]/60 mb-4 block tracking-widest font-sans">أسابيع ٩-١٢</span>
<h3 className="text-3xl font-medium mb-8 flex items-center gap-3 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                            التربية
                        </h3>
<ul className="space-y-4 mb-10 text-white/80 font-light text-lg">
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                فك شيفرة السلوك والاحتياجات
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                تطبيق أدوات التربية بثبات
                            </li>
<li className="flex items-start gap-3 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB9B90] mt-2.5 shrink-0"></span>
                                بناء هيكل يومي داعم للقيم
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-medium text-[#5D737D] tracking-tight text-center mb-24 font-sans">
                متى تبدأين بلمس الأثر؟
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative">

<div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#EAF3F4] z-0"></div>

<div className="relative z-10 pt-4 md:pt-0">
<div className="w-12 h-12 bg-white border border-[#EAF3F4] rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
<div className="w-2 h-2 bg-[#EAF3F4] rounded-full"></div>
</div>
<h3 className="text-2xl font-medium text-[#5D737D] mb-4 text-center md:text-right font-sans">٧-١٠ أيام</h3>
<p className="text-lg font-light text-[#5D737D]/70 text-center md:text-right leading-relaxed font-sans">أول تحوّل داخلي. تلاحظين أنماطك قبل الانفجار.</p>
</div>

<div className="relative z-10 pt-4 md:pt-0">
<div className="w-12 h-12 bg-white border border-[#5D737D]/30 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
<div className="w-3 h-3 bg-[#5D737D]/30 rounded-full"></div>
</div>
<h3 className="text-2xl font-medium text-[#5D737D] mb-4 text-center md:text-right font-sans">٢-٣ أسابيع</h3>
<p className="text-lg font-light text-[#5D737D]/70 text-center md:text-right leading-relaxed font-sans">لحظات هدوء حقيقية وسط الصراع. انتصارك العاطفي الأول.</p>
</div>

<div className="relative z-10 pt-4 md:pt-0">
<div className="w-12 h-12 bg-white border border-[#EB9B90] shadow-sm rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
<div className="w-4 h-4 bg-[#EB9B90] rounded-full"></div>
</div>
<h3 className="text-2xl font-medium text-[#5D737D] mb-4 text-center md:text-right font-sans">١٢ أسبوعًا</h3>
<p className="text-lg font-light text-[#5D737D]/70 text-center md:text-right leading-relaxed font-sans">انتقال كامل من وضع "البقاء والتفاعل" إلى القيادة الواعية المستقرة.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDF0EE] border-y border-[#EAF3F4]">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[#5D737D]/10">
<div className="pt-8 md:pt-0 px-4">
<span className="text-6xl lg:text-7xl font-light text-[#5D737D] mb-6 block tracking-tighter font-sans">٨٨٪</span>
<p className="text-lg font-light text-[#5D737D]/80 leading-relaxed font-sans">من الخريجات أبلغن عن تحول جذري ومستدام في بيئة المنزل.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="text-6xl lg:text-7xl font-light text-[#5D737D] mb-6 block tracking-tighter font-sans">٧٩٪</span>
<p className="text-lg font-light text-[#5D737D]/80 leading-relaxed font-sans">انخفاض ملحوظ في نوبات الصراخ خلال الأسابيع الستة الأولى.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="text-6xl lg:text-7xl font-light text-[#5D737D] mb-6 block flex items-center justify-center gap-2 font-sans" dir="ltr">
<span className="text-4xl text-[#5D737D]/40">/</span>7 <span className="text-[#EB9B90]">6</span>
</span>
<p className="text-lg font-light text-[#5D737D]/80 leading-relaxed font-sans">أيام في الأسبوع يعشن فيها استقراراً عاطفياً حقيقياً.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-medium text-[#5D737D] tracking-tight text-center mb-20 font-sans">
                محتويات البرنامج
            </h2>
<div className="bg-white border border-[#EAF3F4] rounded-2xl overflow-hidden shadow-sm">
<div className="divide-y divide-[#EAF3F4]">

<div className="p-8 flex items-start sm:items-center gap-6 group hover:bg-[#FDF0EE]/50 transition-colors">
<div className="w-12 h-12 bg-[#FDF0EE] rounded-full flex items-center justify-center shrink-0 border border-transparent group-hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-2xl text-[#5D737D] group-hover:text-[#EB9B90]" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-[#5D737D] mb-1 font-sans">١٢ جلسة مباشرة أسبوعية</h4>
<p className="text-base font-light text-[#5D737D]/70 font-sans">لقاءات حية مدتها ٩٠ دقيقة مع د. إيمان للتوجيه المباشر.</p>
</div>
</div>

<div className="p-8 flex items-start sm:items-center gap-6 group hover:bg-[#FDF0EE]/50 transition-colors">
<div className="w-12 h-12 bg-[#FDF0EE] rounded-full flex items-center justify-center shrink-0 border border-transparent group-hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-2xl text-[#5D737D] group-hover:text-[#EB9B90]" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-[#5D737D] mb-1 font-sans">منهج RRR™️ المتكامل</h4>
<p className="text-base font-light text-[#5D737D]/70 font-sans">وصول كامل لجميع المواد، العروض، والمصادر العلمية.</p>
</div>
</div>

<div className="p-8 flex items-start sm:items-center gap-6 group hover:bg-[#FDF0EE]/50 transition-colors">
<div className="w-12 h-12 bg-[#FDF0EE] rounded-full flex items-center justify-center shrink-0 border border-transparent group-hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-2xl text-[#5D737D] group-hover:text-[#EB9B90]" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-[#5D737D] mb-1 font-sans">تقييم نفسي شخصي</h4>
<p className="text-base font-light text-[#5D737D]/70 font-sans">تحليل دقيق لأنماطك السلوكية ومحفزاتك الخاصة في بداية الرحلة.</p>
</div>
</div>

<div className="p-8 flex items-start sm:items-center gap-6 group hover:bg-[#FDF0EE]/50 transition-colors">
<div className="w-12 h-12 bg-[#FDF0EE] rounded-full flex items-center justify-center shrink-0 border border-transparent group-hover:border-[#EB9B90] transition-colors">
<iconify-icon className="text-2xl text-[#5D737D] group-hover:text-[#EB9B90]" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-xl font-medium text-[#5D737D] mb-1 font-sans">مجموعة نقاش مغلقة</h4>
<p className="text-base font-light text-[#5D737D]/70 font-sans">بيئة آمنة وداعمة تضم ٥٠ أماً فقط تتشاركون فيها نفس التحديات.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FDF0EE] border-t border-[#EAF3F4]">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-[#5D737D] tracking-tight mb-6 font-sans">
                    هدايا التسجيل المبكر
                </h2>
<p className="text-xl font-light text-[#5D737D]/80 font-sans">تُضاف تلقائياً عند تأكيد مقعدك اليوم.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-2xl border border-[#EAF3F4] shadow-sm">
<iconify-icon className="text-4xl text-[#EB9B90] mb-6 block" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-medium text-[#5D737D] mb-4 font-sans">مفاتيح الانضباط الإيجابي</h3>
<p className="text-lg font-light text-[#5D737D]/70 mb-6 leading-relaxed font-sans">مكتبة كاملة من التطبيقات العملية للتعامل مع العناد، رفض النوم، والشجار بين الإخوة.</p>
<span className="text-sm font-medium text-[#5D737D]/40 uppercase tracking-widest font-sans" dir="ltr">VALUE $997</span>
</div>

<div className="bg-white p-10 rounded-2xl border border-[#EAF3F4] shadow-sm">
<iconify-icon className="text-4xl text-[#EB9B90] mb-6 block" icon="solar:smart-speaker-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-medium text-[#5D737D] mb-4 font-sans">مساعد إيمان AI — ٢٤/٧</h3>
<p className="text-lg font-light text-[#5D737D]/70 mb-6 leading-relaxed font-sans">مرشدتك الذكية المدربة بالكامل على المنهج، متوفرة للإجابة على تحدياتك اليومية فوراً.</p>
<span className="text-sm font-medium text-[#5D737D]/40 uppercase tracking-widest font-sans" dir="ltr">VALUE $497</span>
</div>

<div className="md:col-span-2 bg-[#5D737D] p-10 rounded-2xl border border-[#5D737D] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-md">
<div className="flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 rounded-full bg-[#EB9B90] animate-pulse"></span>
<h3 className="text-2xl font-medium font-sans">مكالمة التأسيس الفردية</h3>
</div>
<p className="text-lg font-light text-white/80 leading-relaxed max-w-2xl font-sans">٤٠ دقيقة خاصة مع أخصائية تربوية لبناء خريطة طريق مصممة لواقع بيتك قبل بدء البرنامج. <span className="text-white font-medium">متاحة فقط للمسجلات قبل منتصف الليل.</span></p>
</div>
<div className="shrink-0 text-right">
<span className="text-sm font-medium text-white/50 uppercase tracking-widest block mb-2 font-sans" dir="ltr">VALUE $497</span>
<span className="inline-block px-4 py-2 border border-[#EB9B90]/30 text-[#EB9B90] text-sm rounded-full font-sans bg-[#EB9B90]/10">تختفي الليلة</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-[#EAF3F4]" id="pricing">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-[#5D737D] tracking-tight mb-6 font-sans">
                استثمارك
            </h2>
<p className="text-xl font-light text-[#5D737D]/70 mb-16 font-sans">بوابة دفع آمنة ومشفرة بالكامل.</p>
<div className="bg-white border border-[#EAF3F4] rounded-3xl p-8 md:p-16 max-w-2xl mx-auto relative shadow-sm">

<div className="absolute top-8 left-0 right-0 text-center pointer-events-none">
<span className="text-[#5D737D]/30 line-through text-lg font-light font-sans" dir="ltr">Value: $8,578</span>
</div>
<div className="mt-12 space-y-8">

<label className="block relative p-6 border-2 border-[#EB9B90] rounded-xl cursor-pointer bg-[#FDF0EE]/50 hover:bg-[#FDF0EE] transition-colors text-right flex items-center justify-between gap-4 group">
<input checked="" className="sr-only" name="pricing" type="radio"/>
<div>
<span className="block text-sm font-medium text-[#EB9B90] mb-1 font-sans">الدفعة الواحدة (التوفير الأكبر)</span>
<span className="block text-4xl font-medium text-[#5D737D] font-sans" dir="ltr">$1,997</span>
</div>
<div className="w-6 h-6 rounded-full border-2 border-[#EB9B90] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#EB9B90]"></div>
</div>
</label>

<label className="block relative p-6 border border-[#EAF3F4] rounded-xl cursor-pointer hover:border-[#5D737D]/30 transition-colors text-right flex items-center justify-between gap-4 group">
<input className="sr-only" name="pricing" type="radio"/>
<div>
<span className="block text-sm font-medium text-[#5D737D]/60 mb-1 font-sans">خطة مرنة (تدفع شهرياً)</span>
<span className="block text-3xl font-medium text-[#5D737D] font-sans" dir="ltr">3 x $749</span>
</div>
<div className="w-6 h-6 rounded-full border border-[#EAF3F4] group-hover:border-[#5D737D]/30 flex items-center justify-center transition-colors">
</div>
</label>
<button className="w-full bg-[#5D737D] text-white text-xl font-medium py-6 rounded-xl hover:bg-[#EB9B90] transition-colors duration-300 flex items-center justify-center gap-3 mt-8 font-sans shadow-md">
                        تأكيد الحجز والدفع
                        <iconify-icon className="text-2xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col items-center justify-center gap-3 text-sm font-light text-[#5D737D]/60 mt-8 pt-8 border-t border-[#EAF3F4]">
<span className="flex items-center gap-2 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            ضمان استرداد كامل للمبلغ خلال ١٢ أسبوع عند إتمام المتطلبات
                        </span>
<span className="flex items-center gap-2 font-sans">
<iconify-icon className="text-[#EB9B90]" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            الحد الأقصى ٥٠ مقعداً
                        </span>
</div>
</div>
</div>
</div>
</section>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#EAF3F4] p-4 z-50">
<a className="w-full flex items-center justify-center gap-2 bg-[#5D737D] text-white text-lg font-medium py-4 rounded-lg font-sans shadow-md" href="#pricing">
            احجزي مكانك الآن
        </a>
</div>



    </>
  );
}
