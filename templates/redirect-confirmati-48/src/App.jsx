import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      
<main className="relative w-full max-w-sm bg-white border border-zinc-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center text-center p-8">

<div className="absolute top-0 left-0 h-1 w-full bg-zinc-100">
<div className="h-full bg-zinc-900 w-full rounded-r-full" style={{animation: 'load 5s linear forwards'}}></div>
</div>

<div className="text-base font-semibold tracking-tighter text-zinc-900 mb-8 uppercase">
            Formule
        </div>

<div className="relative flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-zinc-50 border border-zinc-100 shadow-sm">
<iconify-icon className="text-2xl text-zinc-600 animate-spin" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="space-y-3 mb-8 w-full">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Redirection
            </h1>
<p className="text-sm text-zinc-500 leading-relaxed">
                Vous allez être redirigé vers <br/>
<span className="font-medium text-zinc-800">formule-confirmation.com</span>
</p>
</div>

<a className="group relative inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2" href="https://formule-confirmation.com/">
            Continuer manuellement
            <iconify-icon className="text-lg transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</main>
<style>
        @keyframes load {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    </style>

    </>
  );
}
