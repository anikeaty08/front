import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '26578324861783804');
fbq('track', 'PageView');
/* Lead Tracking Code */
fbq('track', 'Lead', {
content_name: 'Formulario Sapucai',
content_category: 'Lead Form'
});



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
      <img height="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{display: 'none'}} width="1"/>

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Gracias | EcoBarrio Rieles de Sapucai</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
<style>
body { font-family: 'Inter', sans-serif; background-color: #020617; color: #F8FAFC; }
</style>

<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
<div className="z-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full border border-slate-800/50 bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-10 md:p-16 shadow-2xl">

<div className="mb-10">
<img alt="Lotes a Cuotas" className="md:h-16 w-auto h-14 object-contain mx-15 my-15 px-15 py-15 drop-shadow-md scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1987990b-9faf-4b90-bdb5-551a78aa6114_800w.png"/>
</div>

<div className="w-20 h-20 rounded-2xl flex items-center justify-center border mb-8 bg-cyan-950/50 border-cyan-900/50 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
<iconify-icon icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
</div>

<div className="space-y-4">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-100">¡Registro exitoso!</h1>
<p className="text-lg md:text-xl font-light text-slate-400 leading-snug text-balance">
                Tus datos fueron enviados a nuestro equipo comercial, en la brevedad nos pondremos en contacto contigo.
            </p>
</div>

<div className="mt-12">
<a className="inline-flex items-center gap-2 rounded-full pl-6 pr-6 py-3 text-base font-normal transition-colors border bg-slate-950 border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-700" href="https://www.instagram.com/lotes.paraguay/" rel="noopener noreferrer" target="_blank">
                Continuar explorando en Instagram
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</a>
</div>
</div>



    </>
  );
}
