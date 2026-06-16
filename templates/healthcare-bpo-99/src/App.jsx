import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.querySelector('.w-4.h-4.rounded.border').addEventListener('click', function() {
            const checkbox = document.getElementById('auto-deploy');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.classList.add('bg-zinc-900', 'border-zinc-900');
                this.classList.remove('bg-white', 'border-zinc-300');
                this.querySelector('iconify-icon').classList.remove('opacity-0');
            } else {
                this.classList.remove('bg-zinc-900', 'border-zinc-900');
                this.classList.add('bg-white', 'border-zinc-300');
                this.querySelector('iconify-icon').classList.add('opacity-0');
            }
        });

        const toggleBtn = document.querySelector('button[role="switch"]');
        toggleBtn.addEventListener('click', function() {
            const isChecked = this.getAttribute('aria-checked') === 'true';
            this.setAttribute('aria-checked', !isChecked);
            
            const thumb = this.querySelector('span');
            if (!isChecked) {
                this.classList.replace('bg-zinc-200', 'bg-zinc-900');
                thumb.classList.replace('-translate-x-2', 'translate-x-2');
            } else {
                this.classList.replace('bg-zinc-900', 'bg-zinc-200');
                thumb.classList.replace('translate-x-2', '-translate-x-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-2xl bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">

<header className="px-6 py-5 border-b border-zinc-100 flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200/60 text-zinc-700">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-950">Project Configuration</h1>
<p className="text-sm text-zinc-500 mt-0.5">Manage your repository settings and deployment preferences.</p>
</div>
</header>

<div className="p-6 space-y-8">

<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-800" htmlFor="projectName">Project Name</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-zinc-400 flex items-center">
<iconify-icon icon="solar:folder-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</span>
<input className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-zinc-200 rounded-lg shadow-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors text-zinc-900 placeholder-zinc-400" id="projectName" placeholder="my-awesome-project" type="text" value="acme-frontend"/>
</div>
<p className="text-xs text-zinc-500">This is your project's unique identifier. It must be unique across your team.</p>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-3">
<label className="block text-sm font-medium text-zinc-800">Framework Preset</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-zinc-200 text-zinc-900 text-sm rounded-lg shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors cursor-pointer">
<option>Next.js</option>
<option>React (Vite)</option>
<option>Vue.js</option>
<option>SvelteKit</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</div>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="flex items-start justify-between gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-zinc-800">Production Source Maps</label>
<p className="text-xs text-zinc-500">Enable source maps in your production builds for easier debugging. This may increase build times.</p>
</div>

<button aria-checked="true" className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white" role="switch" type="button">
<span className="translate-x-2 inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out"></span>
</button>
</div>

<div className="flex items-start gap-3 mt-4">
<div className="flex items-center h-5">
<input checked="" className="peer hidden" id="auto-deploy" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors cursor-pointer shadow-sm">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-zinc-800 cursor-pointer" htmlFor="auto-deploy">Auto-Deploy on Push</label>
<p className="text-xs text-zinc-500">Automatically trigger a new deployment whenever code is pushed to the main branch.</p>
</div>
</div>
</div>

<footer className="px-6 py-4 bg-zinc-50/50 border-t border-zinc-100 flex items-center justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-200">
                Cancel
            </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-white flex items-center gap-2">
<iconify-icon icon="solar:disk-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
                Save Changes
            </button>
</footer>
</main>



    </>
  );
}
