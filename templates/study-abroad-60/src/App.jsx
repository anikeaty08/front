import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Reveal Breadcrumb
            tl.to(".breadcrumb", {
                y: 0,
                opacity: 1,
                duration: 0.8
            })
            // 2. Reveal Title
            .to(".title", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1
            }, "-=0.6")
            // 3. Reveal Paragraph
            .to(".description", {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, "-=0.8")
            // 4. Slide in Background Shapes (Right side)
            .to(".teal-strip", {
                opacity: 1,
                x: 0, 
                y: 0,
                rotate: -45, // Target rotation
                duration: 1.2,
                ease: "power2.out"
            }, "-=1")
            .to(".dark-shape", {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: -45, // Target rotation
                duration: 1.2,
                ease: "power2.out"
            }, "-=1.1")
            // 5. Slide up Person
            .to(".person-img", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.2)"
            }, "-=0.8")
            // 6. Pop in Circle
            .to(".circle-inset", {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.6");
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute bottom-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-white rounded-full opacity-60 blur-3xl"></div>
<div className="absolute -bottom-48 left-0 w-[800px] h-[400px] bg-gray-100/80 rounded-[100%] rotate-3 origin-bottom-left"></div>
</div>
<main className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="content-col flex flex-col items-start max-w-2xl">

<div className="breadcrumb opacity-0 translate-y-4 inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100 mb-8">
<span className="text-slate-600 font-medium text-base">Inicio</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<span className="text-slate-900 font-medium text-base">tu viaje paso a paso</span>
</div>

<h1 className="title opacity-0 translate-y-8 text-6xl lg:text-[5.5rem] leading-[0.95] font-bold tracking-tight text-slate-900 mb-8">
                    Tu viaje <br/>
                    paso a paso
                </h1>

<p className="description opacity-0 translate-y-4 text-xl text-slate-600 leading-relaxed font-normal max-w-lg mb-8">
                    Más de 2.500 latinos como tú han vivido la experiencia de estudiar, trabajar e incluso migrar al país más feliz de Norte América con nosotros.
                </p>
</div>

<div className="visual-col relative h-[500px] lg:h-[700px] w-full flex items-end justify-center lg:justify-end">

<div className="absolute inset-0 z-0 overflow-visible lg:overflow-hidden">

<div className="teal-strip opacity-0 absolute top-0 right-0 w-[120%] h-[120%] bg-[#2dd4bf] origin-bottom-left transform translate-x-32 -translate-y-12 rotate-[-40deg] rounded-tl-[4rem] z-0"></div>

<div className="dark-shape opacity-0 absolute top-4 right-[-10%] w-[120%] h-[120%] bg-[#383a50] origin-bottom-left transform translate-x-32 translate-y-0 rotate-[-40deg] rounded-tl-[5rem] z-10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 dot-pattern"></div>
</div>
</div>

<div className="person-img opacity-0 translate-y-12 relative z-20 h-[90%] w-auto flex items-end">

<img alt="Student with backpack" className="h-full w-auto object-cover object-top drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', mixBlendMode: 'normal'}}/>
</div>

<div className="circle-inset opacity-0 scale-50 absolute left-4 lg:left-10 bottom-24 lg:bottom-32 z-30">
<div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-[6px] border-white shadow-xl overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300">
<img alt="Campus Building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&amp;w=2572&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
