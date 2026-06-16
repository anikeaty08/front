import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      const setupToggle = (root) => {
        const input = root.querySelector('.js-toggle-input');
        const container = root.querySelector('.js-toggle-container');
        const knob = root.querySelector('.js-toggle-button');
        const label = root.querySelector('.js-toggle-label');

        const apply = () => {
          const on = !!input.checked;
          container.style.backgroundColor = on ? '#f3b519' : '#e8e8e8';
          knob.style.left = on ? '1.5625em' : '.0625em';
          root.setAttribute('aria-checked', String(on));
          if (label) {
            label.textContent = on ? 'On' : 'Off';
            label.classList.toggle('text-neutral-700', on);
            label.classList.toggle('text-neutral-500', !on);
          }
        };

        input.addEventListener('input', apply);
        apply();
      };

      document.querySelectorAll('.js-toggle').forEach(setupToggle);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2dd5e7d2-e46e-4b79-bb10-a215bd4adf32_3840w.jpg")'}}></div>

<div className="relative w-full max-w-xl rounded-3xl border border-neutral-200 bg-white p-2 ring-1 ring-black/5" style="box-shadow:
         0 1px 2px rgba(0,0,0,0.05),
         0 8px 16px rgba(0,0,0,0.06),
         0 20px 40px rgba(0,0,0,0.08);">

<div className="flex items-center justify-between rounded-2xl px-4 py-3">
<div className="flex items-center gap-2">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
<i className="h-4 w-4 text-neutral-700" data-lucide="settings-2"></i>
</div>
<div>
<h2 className="text-xl tracking-tight font-semibold leading-tight">Settings</h2>
<p className="text-xs text-neutral-500">Personalize your experience</p>
</div>
</div>
</div>
<div className="mx-4 mt-2 mb-3 border-t border-neutral-200"></div>

<div className="space-y-2 px-2">

<div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-neutral-700" data-lucide="moon"></i>
</div>
<div>
<div className="text-sm font-medium">Dark theme</div>
<div className="text-xs text-neutral-500">Reduces glare and improves focus</div>
</div>
</div>


<div aria-checked="true" className="relative inline-flex items-center gap-2 js-toggle" role="switch">
<span className="js-toggle-label text-xs text-neutral-700 w-7 text-right select-none">On</span>
<div className="toggle-wrapper rounded-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '.5em', padding: '.125em', backgroundImage: 'linear-gradient(to bottom,#d5d5d5,#e8e8e8)', boxShadow: '0 1px 1px rgb(255 255 255 / .6)', fontSize: '1.5em'}}>
<input aria-label="Enable dark theme" checked="" className="toggle-checkbox js-toggle-input" style={{appearance: 'none', position: 'absolute', zIndex: '1', borderRadius: '.5em', width: '100%', height: '100%', font: 'inherit', opacity: '0', cursor: 'pointer'}} type="checkbox"/>
<div className="toggle-container js-toggle-container rounded" style={{display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '.375em', width: '3em', height: '1.5em', backgroundColor: '#f3b519', boxShadow: 'inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4)', transition: 'background-color .4s linear'}}>
<div className="toggle-button js-toggle-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '1.5625em', borderRadius: '.3125em', width: '1.375em', height: '1.375em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5)', transition: 'left .4s'}}>
<div className="toggle-button-circles-container" style={{display: 'grid', gridTemplateColumns: 'repeat(3,min-content)', gap: '.125em', position: 'absolute', margin: '0 auto'}}>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div className="toggle-button-circle" style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-3 border-t border-neutral-200"></div>

<div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-neutral-700" data-lucide="mail"></i>
</div>
<div>
<div className="text-sm font-medium">Email notifications</div>
<div className="text-xs text-neutral-500">Important activity and updates</div>
</div>
</div>


<div aria-checked="false" className="relative inline-flex items-center gap-2 js-toggle" role="switch">
<span className="js-toggle-label text-xs text-neutral-500 w-7 text-right select-none">Off</span>
<div className="toggle-wrapper rounded-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '.5em', padding: '.125em', backgroundImage: 'linear-gradient(to bottom,#d5d5d5,#e8e8e8)', boxShadow: '0 1px 1px rgb(255 255 255 / .6)', fontSize: '1.5em'}}>
<input aria-label="Toggle email notifications" className="toggle-checkbox js-toggle-input" style={{appearance: 'none', position: 'absolute', zIndex: '1', borderRadius: '.5em', width: '100%', height: '100%', font: 'inherit', opacity: '0', cursor: 'pointer'}} type="checkbox"/>
<div className="toggle-container js-toggle-container rounded" style={{display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '.375em', width: '3em', height: '1.5em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4)', transition: 'background-color .4s linear'}}>
<div className="toggle-button js-toggle-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '.0625em', borderRadius: '.3125em', width: '1.375em', height: '1.375em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5)', transition: 'left .4s'}}>
<div className="toggle-button-circles-container" style={{display: 'grid', gridTemplateColumns: 'repeat(3,min-content)', gap: '.125em', position: 'absolute', margin: '0 auto'}}>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-3 border-t border-neutral-200"></div>

<div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-neutral-700" data-lucide="refresh-cw"></i>
</div>
<div>
<div className="text-sm font-medium">Auto-update</div>
<div className="text-xs text-neutral-500">Download and install updates silently</div>
</div>
</div>


<div aria-checked="true" className="relative inline-flex items-center gap-2 js-toggle" role="switch">
<span className="js-toggle-label text-xs text-neutral-700 w-7 text-right select-none">On</span>
<div className="toggle-wrapper rounded-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '.5em', padding: '.125em', backgroundImage: 'linear-gradient(to bottom,#d5d5d5,#e8e8e8)', boxShadow: '0 1px 1px rgb(255 255 255 / .6)', fontSize: '1.5em'}}>
<input aria-label="Toggle auto-update" checked="" className="toggle-checkbox js-toggle-input" style={{appearance: 'none', position: 'absolute', zIndex: '1', borderRadius: '.5em', width: '100%', height: '100%', font: 'inherit', opacity: '0', cursor: 'pointer'}} type="checkbox"/>
<div className="toggle-container js-toggle-container rounded" style={{display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '.375em', width: '3em', height: '1.5em', backgroundColor: '#f3b519', boxShadow: 'inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4)', transition: 'background-color .4s linear'}}>
<div className="toggle-button js-toggle-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '1.5625em', borderRadius: '.3125em', width: '1.375em', height: '1.375em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5)', transition: 'left .4s'}}>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,min-content)', gap: '.125em', position: 'absolute', margin: '0 auto'}}>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-3 border-t border-neutral-200"></div>

<div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-neutral-700" data-lucide="volume-2"></i>
</div>
<div>
<div className="text-sm font-medium">Sound effects</div>
<div className="text-xs text-neutral-500">Subtle feedback for actions</div>
</div>
</div>


<div aria-checked="false" className="relative inline-flex items-center gap-2 js-toggle" role="switch">
<span className="js-toggle-label text-xs text-neutral-500 w-7 text-right select-none">Off</span>
<div className="toggle-wrapper rounded-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '.5em', padding: '.125em', backgroundImage: 'linear-gradient(to bottom,#d5d5d5,#e8e8e8)', boxShadow: '0 1px 1px rgb(255 255 255 / .6)', fontSize: '1.5em'}}>
<input aria-label="Toggle sound effects" className="toggle-checkbox js-toggle-input" style={{appearance: 'none', position: 'absolute', zIndex: '1', borderRadius: '.5em', width: '100%', height: '100%', font: 'inherit', opacity: '0', cursor: 'pointer'}} type="checkbox"/>
<div className="toggle-container js-toggle-container rounded" style={{display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '.375em', width: '3em', height: '1.5em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4)', transition: 'background-color .4s linear'}}>
<div className="toggle-button js-toggle-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '.0625em', borderRadius: '.3125em', width: '1.375em', height: '1.375em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5)', transition: 'left .4s'}}>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,min-content)', gap: '.125em', position: 'absolute', margin: '0 auto'}}>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-3 border-t border-neutral-200"></div>

<div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-neutral-50">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-neutral-700" data-lucide="layout-dashboard"></i>
</div>
<div>
<div className="text-sm font-medium">Compact mode</div>
<div className="text-xs text-neutral-500">Show more content per screen</div>
</div>
</div>


<div aria-checked="false" className="relative inline-flex items-center gap-2 js-toggle" role="switch">
<span className="js-toggle-label text-xs text-neutral-500 w-7 text-right select-none">Off</span>
<div className="toggle-wrapper rounded-md" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: '.5em', padding: '.125em', backgroundImage: 'linear-gradient(to bottom,#d5d5d5,#e8e8e8)', boxShadow: '0 1px 1px rgb(255 255 255 / .6)', fontSize: '1.5em'}}>
<input aria-label="Toggle compact mode" className="toggle-checkbox js-toggle-input" style={{appearance: 'none', position: 'absolute', zIndex: '1', borderRadius: '.5em', width: '100%', height: '100%', font: 'inherit', opacity: '0', cursor: 'pointer'}} type="checkbox"/>
<div className="toggle-container js-toggle-container rounded" style={{display: 'flex', alignItems: 'center', position: 'relative', borderRadius: '.375em', width: '3em', height: '1.5em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4)', transition: 'background-color .4s linear'}}>
<div className="toggle-button js-toggle-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '.0625em', borderRadius: '.3125em', width: '1.375em', height: '1.375em', backgroundColor: '#e8e8e8', boxShadow: 'inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), inset 0 -.125em .0625em rgb(0 0 0 / .2), inset 0 .1875em .0625em rgb(255 255 255 / .3), 0 .125em .125em rgb(0 0 0 / .5)', transition: 'left .4s'}}>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,min-content)', gap: '.125em', position: 'absolute', margin: '0 auto'}}>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
<div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div><div style={{borderRadius: '50%', width: '.125em', height: '.125em', backgroundImage: 'radial-gradient(circle at 50% 0,#f5f5f5,#c4c4c4)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-4 my-3 border-t border-neutral-200"></div>

<div className="flex items-center justify-between gap-2 px-4 pb-3 pt-1">
<button className="text-xs text-neutral-500 hover:text-neutral-700 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-400 transition" type="button">
        Reset to defaults
      </button>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10">
          Cancel
        </button>
<button className="rounded-lg border border-emerald-600/15 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-100 hover:border-emerald-600/25 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30">
          Save changes
        </button>
</div>
</div>
</div>


    </>
  );
}
