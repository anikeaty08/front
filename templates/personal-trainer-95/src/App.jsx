import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': 'lucide-icon'
            }
        });

        // Loading Counter Logic
        const counterElement = document.getElementById('counter');
        let count = 0;
        const duration = 2500; // 2.5 seconds to match CSS animation
        const intervalTime = duration / 100;

        const timer = setInterval(() => {
            count++;
            counterElement.innerText = count + "%";
            if (count >= 100) clearInterval(timer);
        }, intervalTime);

        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-medium tracking-tight uppercase flex items-center gap-2" href="#">
<span className="bg-blue-600 w-3 h-3 rounded-full inline-block"></span>
                Trener<span className="text-white/50">Personalny</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors" href="#hero">Start</a>
<a className="hover:text-white transition-colors" href="#transformations">Przemiany</a>
<a className="hover:text-white transition-colors" href="#newsletter">Wiedza</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" href="#newsletter">
                Dołącz
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950/0 to-zinc-950 -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[800px] w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="space-y-8 z-10 order-2 lg:order-1 relative">

<div className="flex flex-col gap-2 mb-8">
<div className="flex justify-between items-end text-sm text-blue-400 font-medium tracking-wide uppercase">
<span>Ładowanie Twojej najlepszej wersji</span>
<span id="counter">0%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 animate-progress rounded-full"></div>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] uppercase text-white">
                    Zbuduj formę 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow">Życia.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                    Trenuj pod moją opieką. Nie sprzedaję tylko planów, sprzedaję nawyki, dyscyplinę i sylwetkę, o której zawsze marzyłeś.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-base font-medium text-black bg-white rounded-lg pt-4 pr-8 pb-4 pl-8 relative" href="https://forms.gle/D7HcMzYL1gYoujrM7">
    Plan Treningowy
    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform lucide-icon" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="px-8 py-4 glass text-white text-base font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10" href="#">
                        Plan + Dieta
                        <svg className="lucide lucide-utensils w-4 h-4 text-zinc-400 lucide-icon" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</a>
</div>

<div className="flex items-center gap-4 pt-6 text-sm text-zinc-500">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs text-white">JD</div>
<div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center text-xs text-white">MK</div>
<div className="w-10 h-10 rounded-full bg-zinc-600 border-2 border-black flex items-center justify-center text-xs text-white">+50</div>
</div>
<p className="">Zadowolonych podopiecznych</p>
</div>
</div>

<div className="relative h-[600px] lg:h-[900px] w-full order-1 lg:order-2 flex items-end justify-center lg:justify-end -mb-20 lg:-mb-32">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 mix-blend-screen"></div>
<div className="relative w-full max-w-lg h-full flex items-end justify-center">

<div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_30%,#09090b_85%)]"></div>

<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#09090b] via-[#09090b] to-transparent z-30"></div>

<div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-20"></div>
<div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-20"></div>


<img alt="Trener Personalny" className="relative w-full h-full object-cover object-top grayscale contrast-125 brightness-110 image-fade-mask z-10" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}/>

<div className="absolute bottom-32 -left-4 lg:-left-12 bg-zinc-900/90 border border-zinc-700 backdrop-blur-md p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms] z-40">
<div className="bg-green-500/20 p-2 rounded-lg text-green-400">
<svg className="lucide lucide-activity w-6 h-6 lucide-icon" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wide">Status</p>
<p className="text-sm font-semibold text-white">Miejsca ograniczone</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-32 pb-32 relative" id="transformations">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center reveal">
<h2 className="md:text-5xl text-3xl font-semibold tracking-tight mb-4">Wasz wysiłek <br/><span className="text-blue-500">z moją pomocą</span></h2>
<p className="text-lg text-zinc-400">Realne wyniki, prawdziwi ludzie, trwała zmiana stylu życia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-6 rounded-2xl reveal hover:border-blue-500/30 transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">M</div>
<div>
<p className="font-medium text-white">Michał K.</p>
<div className="flex text-blue-400 gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        "Zgubiłem 12kg w 3 miesiące. Plan jest dopasowany do mojego trybu pracy w korporacji. Dieta jest smaczna, a treningi intensywne."
                    </p>
<div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
<img alt="Transformacja" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">-12 kg</div>
</div>
</div>

<div className="glass p-6 rounded-2xl reveal hover:border-blue-500/30 transition-colors group delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white font-bold text-lg">A</div>
<div className="">
<p className="font-medium text-white">Anna W.</p>
<div className="flex text-blue-400 gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        "Nauczyłam się jeść zdrowo bez rezygnacji z życia towarzyskiego. Sylwetka zmieniła się nie do poznania, a energia poszybowała w górę."
                    </p>
<div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
<img alt="Transformacja" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Budowa mięśni</div>
</div>
</div>

<div className="glass p-6 rounded-2xl reveal hover:border-blue-500/30 transition-colors group delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">T</div>
<div>
<p className="font-medium text-white">Tomek S.</p>
<div className="flex text-blue-400 gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current lucide-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<p className="text-zinc-300 text-lg leading-relaxed mb-6">
                        "Profesjonalne podejście. Kontakt z trenerem jest błyskawiczny. Plan treningowy wymagający, ale dający niesamowite efekty."
                    </p>
<div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
<img alt="Transformacja" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Rekopozycja</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="newsletter">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-wide border border-blue-500/20 mb-6">
<svg className="lucide lucide-mail w-3 h-3 lucide-icon" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Newsletter
            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Wiedza, która zmienia <br/>
<span className="text-zinc-500">ciało i umysł.</span>
</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Dołącz do newslettera. Co tydzień wysyłam sprawdzone rady jak budować zdrowe nawyki, mięśnie i tracić tłuszcz, a przy tym wszystkim cieszyć się życiem.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
<input className="relative flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-base rounded-lg px-5 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Twój adres email" type="email"/>
<button className="relative bg-white text-black font-medium text-base rounded-lg px-6 py-3 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Zapisz się
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-6 text-zinc-600">
<div className="flex items-center gap-2 text-xs">
<svg className="lucide lucide-check-circle w-4 h-4 lucide-icon" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Zero spamu
                </div>
<div className="flex items-center gap-2 text-xs">
<svg className="lucide lucide-check-circle w-4 h-4 lucide-icon" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Merytoryczna wiedza
                </div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-blue-600 w-2 h-2 rounded-full inline-block"></span>
<span className="text-sm text-zinc-400 uppercase tracking-widest">Trener Personalny</span>
</div>
<p className="text-zinc-600 text-sm">© 2024 Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5 lucide-icon" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5 lucide-icon" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5 lucide-icon" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
