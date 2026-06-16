import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with specific stroke width
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
      

<nav className="w-full px-6 py-8 md:px-12 flex justify-between items-center z-10 relative">
<div className="text-xl font-medium tracking-tight">
            Aura
        </div>
<div className="hidden md:flex items-center gap-10 text-base text-gray-500">
<a className="hover:text-gray-900 transition-colors flex items-center gap-1.5" href="#">
                Features 
                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#">FAQ</a>
</div>
<a className="bg-[#171717] text-[#F3F3F1] px-6 py-2.5 rounded text-base hover:bg-gray-800 transition-colors font-medium" href="#">
            Get Aura
        </a>
</nav>

<main className="flex-grow w-full px-6 md:px-12 flex flex-col md:flex-row relative">

<div className="md:w-1/2 flex flex-col md:pt-20 md:pb-24 min-h-[50vh] md:min-h-[calc(100vh-120px)] w-full z-10 pt-12 pb-16 justify-between">

<div className="">
<p className="leading-relaxed text-lg text-gray-600 max-w-sm">
                    Aura is an asynchronous communication room designed for mindful dialogue. No read receipts, no typing indicators. Just the message, when you're ready.
                </p>
<a className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors group text-base text-gray-500 mt-8" href="#">
                    Scroll to explore
                    <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</a>
</div>

<div className="mt-24 md:mt-0">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05]">
                    Converse with<br/>intention
                </h1>
</div>
</div>

<div className="w-full md:w-1/2 flex justify-center md:justify-end items-center pb-16 md:pb-24 md:pr-12 lg:pr-24 relative z-0 mt-12 md:mt-0">
<div className="w-full max-w-[420px] aspect-[4/7] bg-gray-200 overflow-hidden relative shadow-sm">

<img alt="Abstract calming smoke" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</main>


    </>
  );
}
