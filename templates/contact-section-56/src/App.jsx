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
      
<section className="bg-[#121212] border border-[#27272a] rounded-3xl p-8 md:p-14 max-w-3xl w-full flex flex-col items-center text-center">

<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center mb-6 md:mb-8">
<i className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>

<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 md:mb-6">
            Masz pytania?
        </h2>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 md:mb-12 leading-relaxed">
            Zadzwoń do nas, z przyjemnością odpowiemy na wszystkie Twoje pytania dotyczące warsztatów stacjonarnych.
        </p>

<a className="inline-flex items-center gap-3 bg-[#0fb773] hover:bg-[#0da064] text-white font-medium text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(15,183,115,0.6)] hover:shadow-[0_0_50px_-10px_rgba(15,183,115,0.8)]" href="tel:602727263">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="phone" strokeWidth="1.5"></i>
<span>+48 602 727 263</span>
</a>
</section>


    </>
  );
}
