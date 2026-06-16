import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const steps = [
  {
    num: "01",
    title: "Preview & Select",
    desc: "Browse an infinite marketplace of curated looks or generate your own aesthetic.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/5c0cd63a-ad3f-4966-a602-24d7a03a5b07/1600w.jpg"
  },
  {
    num: "02",
    title: "Personalize",
    desc: "Fine-tune preferences based on your specific skin tone, facial geometry, or mood.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
  },
  {
    num: "03",
    title: "Sync & Apply",
    desc: "Send your selected look directly to the Lumina device for automatic, micro-precision application.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="how-it-works" className="relative py-32 bg-[#F1EBE9] border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-black/50">How It Works</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-4xl mx-auto text-zinc-900">Lumina is an intelligent, personalized experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-16">
          {/* Navigation text column */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
             <div className="flex gap-2 mb-4 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                {steps.map((_, i) => (
                  <div key={i} className="flex-1 h-full bg-transparent relative">
                    <div 
                      className={clsx(
                        "absolute top-0 left-0 h-full bg-gradient-to-r from-zinc-800 to-zinc-600 transition-all duration-linear rounded-full",
                        activeStep === i ? "w-full transition-[width] duration-[5000ms] ease-linear" :
                        activeStep > i ? "w-full" : "w-0"
                      )}
                    />
                  </div>
                ))}
             </div>

             <div className="flex flex-col gap-6">
               {steps.map((step, i) => (
                 <button 
                   key={i}
                   onClick={() => setActiveStep(i)}
                   className={clsx(
                     "text-left flex gap-6 p-6 rounded-3xl transition-all duration-500 border",
                     activeStep === i 
                       ? "bg-zinc-50 shadow-sm scale-[1.02] border-zinc-200 z-10" 
                       : "hover:bg-zinc-50/50 opacity-60 border-transparent hover:border-zinc-200/50"
                   )}
                 >
                   <span className="font-mono text-sm text-zinc-400 mt-1 font-bold">{step.num}</span>
                   <div>
                     <h4 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">{step.title}</h4>
                     <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{step.desc}</p>
                   </div>
                 </button>
               ))}
             </div>
          </div>

          {/* Visuals column */}
          <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white/50 border border-zinc-200/60 flex items-center justify-center p-4 md:p-8">
            {steps.map((step, i) => (
              <div 
                key={i}
                className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out p-6 md:p-12", 
                  activeStep === i ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-8 scale-95 z-0 pointer-events-none"
                )}
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-zinc-200/50">
                  <div className="absolute inset-0 bg-zinc-900/5 z-10 mix-blend-overlay"></div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover scale-105" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}