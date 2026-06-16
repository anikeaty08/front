import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-white border border-slate-200/60 rounded-xl shadow-sm flex items-center p-6 gap-6 box-border relative overflow-hidden" style={{width: '100%', maxWidth: '400px', minHeight: '150px'}}>

<div className="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>

<div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-medium tracking-tighter shrink-0 shadow-sm">
      JS
    </div>

<div className="w-px self-stretch bg-slate-100 shrink-0 my-1"></div>

<div className="flex flex-col justify-center w-full">
<h1 className="text-xl font-medium tracking-tight text-slate-900 leading-tight mb-0.5">João Silva</h1>
<p className="text-sm text-slate-500 mb-4 leading-none">Engenheiro de Software Sênior</p>
<div className="flex flex-col gap-2">

<a className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group w-fit" href="tel:+5511999999999">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 text-sm flex-shrink-0 transition-colors" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">+55 11 99999-9999</span>
</a>

<a className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group w-fit" href="mailto:joao.silva@empresa.com.br">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 text-sm flex-shrink-0 transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">joao.silva@empresa.com.br</span>
</a>

<a className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group w-fit" href="https://joaosilva.com.br" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 text-sm flex-shrink-0 transition-colors" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">joaosilva.com.br</span>
</a>

<a className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group w-fit" href="https://instagram.com/joaosilva" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 text-sm flex-shrink-0 transition-colors" icon="lucide:instagram" strokeWidth="1.5"></iconify-icon>
<span className="truncate">@joaosilva</span>
</a>

<a className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-slate-900 transition-colors group w-fit" href="https://linkedin.com/in/joaosilva" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 text-sm flex-shrink-0 transition-colors" icon="lucide:linkedin" strokeWidth="1.5"></iconify-icon>
<span className="truncate">linkedin.com/in/joaosilva</span>
</a>
</div>
</div>
</div>

    </>
  );
}
