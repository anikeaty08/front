import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const modal = document.getElementById('loveModal');
        const backdrop = document.getElementById('modalBackdrop');
        const content = document.getElementById('modalContent');

        function openModal() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Trigger reflow
            void modal.offsetWidth;
            
            backdrop.classList.remove('opacity-0');
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
            
            createHearts();
        }

        function closeModal() {
            backdrop.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        function createHearts() {
            for(let i=0; i<15; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.transition = 'all 3s ease-out';
                heart.style.zIndex = '101';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
                    heart.style.opacity = '0';
                }, 100);

                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-rose-200/40 rounded-full blur-[100px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-orange-100/50 rounded-full blur-[80px] animate-float-delayed"></div>
<div className="absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-rose-100/30 rounded-full blur-[60px] animate-pulse-soft"></div>
</div>

<div className="fixed top-6 right-6 z-50 mix-blend-multiply hidden md:flex items-center gap-3 glass-card px-4 py-2 rounded-full shadow-sm">
<div className="flex items-end gap-1 h-4">
<div className="w-1 bg-rose-500 h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-rose-500 h-4 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-rose-500 h-3 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
</div>
<span className="text-xs font-medium tracking-wide text-stone-600">Raataan Lambiyan (Slowed)</span>
</div>

<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
<div className="mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200 bg-white/50 text-rose-800 text-xs tracking-wider uppercase font-medium shadow-sm">
<iconify-icon icon="solar:heart-angle-linear" width="16"></iconify-icon>
                For My Love
            </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-stone-900 mb-6 leading-[1.1]">
            I’m Sorry,<br/> <span className="italic text-rose-500 font-hand font-normal">My Love</span>
</h1>
<p className="max-w-xl text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-12">
            Tere bina yeh din adhoore hain, aur raatein khamosh. <br className="hidden md:block"/>
            Maan ja na? Life feels like a muted movie without you.
        </p>
<div className="flex flex-col items-center gap-2 animate-bounce opacity-50 mt-12">
<span className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">Scroll Down</span>
<iconify-icon className="text-stone-400" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="relative z-10 py-32 px-6 max-w-5xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-rose-100 shadow-sm mb-6 text-rose-500">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 mb-3">Rewind: Humari Kahani</h2>
<p className="text-xl text-stone-500 font-hand">Just like a movie scene...</p>
</div>

<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-300/50 to-transparent md:-ml-[0.5px]"></div>
<div className="space-y-24">

<div className="relative flex flex-col md:flex-row items-center justify-between group">

<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-rose-400 rounded-full z-20 shadow-[0_0_0_4px_rgba(255,228,230,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

<div className="md:w-1/2 md:pr-16 pl-16 md:pl-0 w-full">
<div className="glass-card p-8 rounded-2xl border border-white/60 hover:border-rose-200 transition-colors duration-300 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
<iconify-icon icon="solar:map-point-wave-linear" width="80"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase bg-rose-50 text-rose-600 border border-rose-100">Chapter 01</span>
</div>
<h3 className="font-serif text-2xl text-stone-800 mb-3">The Masked Man</h3>
<p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                                Meeting 30kms away in a cab, vo bhi Amity mein. That day was chaos, but the perfect kind. You called me the "Masked Man" — little did I know I was unmasking my soul to you that day.
                            </p>
</div>
</div>

<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">

<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-rose-400 rounded-full z-20 shadow-[0_0_0_4px_rgba(255,228,230,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

<div className="hidden md:block md:w-1/2"></div>

<div className="md:w-1/2 md:pl-16 pl-16 md:pl-0 w-full">
<div className="glass-card p-8 rounded-2xl border border-white/60 hover:border-rose-200 transition-colors duration-300 relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
<iconify-icon icon="solar:calendar-date-linear" width="80"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase bg-rose-50 text-rose-600 border border-rose-100">8th December</span>
</div>
<h3 className="font-serif text-2xl text-stone-800 mb-3">The Best Gift</h3>
<p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                                Mera birthday, but you were the real gift. Tune woh din itna special banaya... main ro diya tha khushi se. Us din realize hua, ke tere bina koi celebration complete nahi hai.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-white/40 backdrop-blur-sm border-y border-white/40">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 mb-8">Where I Went Wrong</h2>
<div className="space-y-6 text-lg font-light text-stone-700 leading-relaxed">
<p>
                    Main janta hoon maine dil dukhaya hai. Galti meri thi, puri tarah se. Sometimes, I get lost in my own head and forget to cherish what’s right in front of me.
                </p>
<p className="text-xl md:text-2xl font-serif italic text-rose-900/80 px-4">
                    "Ego se bada pyaar hota hai, aur yeh baat samajhne mein maine der kar di."
                </p>
<p className="">
                    I was stupid. I took your patience for granted. Like a fool in a movie who almost loses the heroine before the climax. But I don't want to lose you. I'm owning my mistakes. No excuses. Sirf maafi.
                </p>
</div>
<div className="mt-12 flex justify-center opacity-60">
<iconify-icon className="text-stone-400" icon="solar:heart-broken-linear" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute inset-0 bg-rose-200 rounded-full blur-[80px] opacity-40 animate-pulse-soft"></div>
<div className="relative glass-card p-8 md:p-12 rounded-3xl border border-white/80 shadow-[0_20px_40px_-15px_rgba(255,228,230,0.5)]">
<iconify-icon className="text-amber-500 mb-6" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl text-stone-800 mb-4 tracking-tight">My Peace in Chaos</h3>
<p className="text-stone-600 font-light leading-relaxed mb-6">
                        Jab poori duniya shor karti hai, teri awaaz sukoon deti hai. You ground me. Like <i>Sita</i> waited for <i>Ram</i>, your love has been patient, pure, and timeless.
                    </p>
<p className="text-stone-600 font-light leading-relaxed">
                        Agar meri life ek film hai, toh tu uski soul hai. Without the background score, the scene has no feeling. You are that feeling for me.
                    </p>
</div>
</div>
<div className="order-1 md:order-2 text-center md:text-left space-y-6">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-stone-900 leading-none">
                    Tu meri aadat nahi... <br/>
<span className="text-rose-500 font-hand text-5xl md:text-7xl">meri zarurat hai.</span>
</h2>
<div className="w-16 h-px bg-stone-300 mx-auto md:mx-0"></div>
<p className="text-lg text-stone-600 font-light italic">
                    "Tere bina main woh hero hoon jiski film flop ho gayi ho."
                </p>
</div>
</div>
</section>

<section className="min-h-[60vh] flex flex-col text-center z-10 pt-32 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900">
                I Promise to be Better.
            </h2>
<p className="text-stone-600 font-light text-lg">
                Main perfect nahi hoon, par main koshish karunga. Har roz. <br/>
                Thoda Shershaah wala passion, thoda Rocky waali efforts.
            </p>
<div className="pt-8">
<button className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-rose-50 font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-200/50 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2" onclick="openModal()">
<span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
<span className="flex items-center gap-2 relative">
                        My Jaan 
                        <iconify-icon className="text-rose-200 group-hover:text-white transition-colors" icon="solar:heart-bold"></iconify-icon>
</span>
</button>
<p className="uppercase text-[10px] text-stone-400 tracking-widest mt-4">Click karegi?</p>
</div>
</div>
<div className="mt-24 opacity-60">
<span className="font-hand text-2xl text-stone-400">Forever Yours</span>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="loveModal">

<div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity opacity-0" id="modalBackdrop"></div>

<div className="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl transform scale-95 opacity-0 transition-all duration-500 ease-out border border-white/50" id="modalContent">
<button className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-6 flex justify-center">
<div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 animate-[pulse_2s_infinite]">
<iconify-icon icon="solar:heart-bold" width="32"></iconify-icon>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4 tracking-tight">I Knew You’d Say Yes... Or Maybe Read This.</h3>
<p className="text-stone-600 font-light text-lg leading-relaxed mb-8">
                "I will choose you. Har baar. Har din. Har janam. <br/>
                Bas tu muskura de, baaki sab main sambhal lunga."
            </p>
<button className="w-full py-3 bg-rose-50 text-rose-700 font-medium rounded-xl hover:bg-rose-100 transition-colors border border-rose-100" onclick="closeModal()">
                I Love You ❤️
            </button>
</div>
</div>


    </>
  );
}
