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
      
<div className="max-w-sm w-full bg-white rounded-2xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col items-center text-center">

<div className="flex w-32 h-32 mb-8 items-center justify-center">
<svg className="overflow-visible w-[128px] h-[128px]" data-icon-replaced="true" strokeWidth="2" style={{width: '128px', height: '128px', color: 'rgb(230, 25, 139)'}} viewbox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg">
<g className="">

<animatetransform attributename="transform" dur="4s" repeatcount="indefinite" type="translate" values="0,2; 0,-2; 0,2"></animatetransform>


<line stroke="currentColor" strokeLinecap="round" strokeWidth="4.5" x1="28" x2="16" y1="22" y2="10">
<animate attributename="opacity" begin="0s" dur="2s" repeatcount="indefinite" values="0.1; 1; 0.1"></animate>
</line>

<line stroke="currentColor" strokeLinecap="round" strokeWidth="4.5" x1="50" x2="50" y1="17" y2="2">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.1; 1; 0.1"></animate>
</line>

<line stroke="currentColor" strokeLinecap="round" strokeWidth="4.5" x1="72" x2="84" y1="22" y2="10">
<animate attributename="opacity" begin="1.2s" dur="2s" repeatcount="indefinite" values="0.1; 1; 0.1"></animate>
</line>

<mask id="diamond-cuts">

<rect fill="white" height="120" width="120" x="-10" y="-10"></rect>

<line stroke="black" strokeWidth="3.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="black" strokeWidth="3.5" x1="32.5" x2="52.5" y1="20" y2="100"></line>
<line stroke="black" strokeWidth="3.5" x1="67.5" x2="47.5" y1="20" y2="100"></line>
</mask>

<polygon className="" fill="currentColor" mask="url(#diamond-cuts)" points="25,30 75,30 90,50 50,92 10,50"></polygon>
</g>
</svg>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">
            Premium Unlocked
        </h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
            You now have access to limitless integrations, priority support, and advanced analytics.
        </p>

<div className="flex items-center justify-between w-full p-4 mb-8 rounded-xl border border-zinc-100 bg-zinc-50/80">
<span className="text-base font-medium text-zinc-700">Auto-renew subscription</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
<button className="w-full flex items-center justify-center py-3 px-4 bg-zinc-900 text-white rounded-lg font-medium text-base hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
            Go to Dashboard
            <i className="w-5 h-5 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>



    </>
  );
}
