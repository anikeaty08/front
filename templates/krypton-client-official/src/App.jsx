import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/10 blur-[120px] rounded-full"></div>
<div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 blur-[150px] rounded-full"></div>
</div>

<main className="relative z-10 w-full">

<section className="flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">

<div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-black font-semibold text-2xl shadow-[0_0_40px_rgba(34,197,94,0.4)] mb-8">
                Kr
            </div>

<h1 className="text-7xl md:text-8xl font-semibold tracking-tight text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.5)] mb-6">
                Krypton
            </h1>

<h2 className="text-xl md:text-2xl text-neutral-200 mb-3 font-medium tracking-tight">
                The Number <span className="text-green-500">#1 Best</span> Client For Donut SMP
            </h2>
<p className="text-lg text-neutral-400 mb-10">
                Previously Paid - <span className="text-green-500">Now Free</span>
</p>
</section>

<section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Unleash The <span className="text-green-500">Full</span> Potential
                </h3>
<p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                    Experience the power that was once behind a paywall - now available to everyone for free.
                </p>

<a className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black text-lg font-semibold px-6 py-4 rounded-xl transition-colors mb-10" download="krypton-client.jar" href="krypton-client.jar">
<i className="w-6 h-6" data-lucide="download" strokeWidth="1.5"></i>
                    Download Updated Client Jar (06/04/2026)
                </a>

<div className="flex flex-wrap items-center gap-6">
<div className="flex items-center gap-2 text-green-500">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Official</span>
</div>
<div className="flex items-center gap-2 text-yellow-500">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Virus Free</span>
</div>
<div className="flex items-center gap-2 text-orange-500">
<i className="w-5 h-5" data-lucide="code-2" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Open Source</span>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-2 shadow-2xl backdrop-blur-sm">
<img alt="Client Interface Preview" className="w-full h-auto rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</section>
</main>


    </>
  );
}
