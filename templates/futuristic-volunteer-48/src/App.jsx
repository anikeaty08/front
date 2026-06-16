import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleSubmit(e) {
            e.preventDefault();
            
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            const btnSpinner = document.getElementById('btn-spinner');
            const formContainer = document.getElementById('application-form');
            const successContainer = document.getElementById('success-state');

            // Loading state
            btnText.innerText = "Encrypting...";
            btnIcon.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
            
            // Simulate API call
            setTimeout(() => {
                // Transition out form
                formContainer.classList.add('fade-out');
                
                setTimeout(() => {
                    formContainer.classList.add('hidden');
                    formContainer.classList.remove('fade-out');
                    
                    // Show success
                    successContainer.classList.remove('hidden');
                    successContainer.classList.add('fade-in');
                    
                    // Reset button for next time (optional)
                    btnText.innerText = "Initiate Registration";
                    btnIcon.classList.remove('hidden');
                    btnSpinner.classList.add('hidden');
                }, 380); // Wait for fade out animation
                
            }, 1500);
        }

        function resetForm() {
            const formContainer = document.getElementById('application-form');
            const successContainer = document.getElementById('success-state');
            const form = document.getElementById('main-form');
            
            successContainer.classList.remove('fade-in');
            successContainer.classList.add('fade-out');
            
            setTimeout(() => {
                successContainer.classList.add('hidden');
                successContainer.classList.remove('fade-out');
                
                form.reset();
                document.getElementById('hours-val').innerText = '20 Hrs';
                
                formContainer.classList.remove('hidden');
                formContainer.classList.add('fade-in');
            }, 380);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex w-full min-h-screen relative">

<div className="hidden lg:flex w-5/12 relative flex-col justify-between p-12 border-r border-zinc-900 bg-zinc-950/50">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[120px] animate-glow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[100px] animate-glow" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
</div>

<div className="relative z-10">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-zinc-100 font-semibold tracking-tighter text-lg">ASTRA</span>
</div>
<h1 className="text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
                    Humanity's next<br/>
<span className="text-zinc-500">giant leap starts with you.</span>
</h1>
<p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
                    Join the Volunteer Corps for the 2029 Orbital Expansion Project. We are looking for engineers, botanists, and dreamers.
                </p>
</div>
<div className="relative z-10 space-y-6">
<div className="flex items-center gap-4 text-sm text-zinc-500 border-t border-zinc-900 pt-6">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-xs text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-xs text-white">AR</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-950 flex items-center justify-center text-xs text-white">TS</div>
</div>
<p>3,402 applicants this week</p>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-black relative">

<div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
<div className="w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-zinc-100 font-semibold tracking-tighter">ASTRA</span>
</div>

<div className="w-full max-w-md relative min-h-[500px] flex flex-col justify-center">

<div className="space-y-8 transition-all duration-500" id="application-form">
<div>
<h2 className="text-2xl text-white font-medium tracking-tight mb-2">Volunteer Application</h2>
<p className="text-zinc-500 text-sm">Fill out the details below to secure your spot in the selection pool.</p>
</div>
<form className="space-y-6" id="main-form" onsubmit="handleSubmit(event)">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 group-focus-within:text-zinc-300 transition-colors">First Name</label>
<div className="relative">
<input className="w-full bg-zinc-900/30 text-white text-sm border border-zinc-800 rounded-lg px-3 py-2.5 outline-none focus:border-zinc-600 focus:bg-zinc-900/50 transition-all placeholder:text-zinc-700" placeholder="Elena" required="" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 group-focus-within:text-zinc-300 transition-colors">Last Name</label>
<div className="relative">
<input className="w-full bg-zinc-900/30 text-white text-sm border border-zinc-800 rounded-lg px-3 py-2.5 outline-none focus:border-zinc-600 focus:bg-zinc-900/50 transition-all placeholder:text-zinc-700" placeholder="Voss" required="" type="text"/>
</div>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 group-focus-within:text-zinc-300 transition-colors">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/30 text-white text-sm border border-zinc-800 rounded-lg pl-10 pr-3 py-2.5 outline-none focus:border-zinc-600 focus:bg-zinc-900/50 transition-all placeholder:text-zinc-700" placeholder="elena@example.com" required="" type="email"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-500 mb-3">Preferred Division</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer relative group">
<input className="peer sr-only" name="role" type="radio"/>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 peer-checked:bg-zinc-900 peer-checked:border-zinc-600 transition-all flex flex-col items-center gap-2 text-center h-full">
<iconify-icon className="text-zinc-400 peer-checked:text-white transition-colors" icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 peer-checked:text-white">Research</span>
</div>
</label>
<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only" name="role" type="radio"/>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 peer-checked:bg-zinc-900 peer-checked:border-zinc-600 transition-all flex flex-col items-center gap-2 text-center h-full">
<iconify-icon className="text-zinc-400 peer-checked:text-white transition-colors" icon="solar:wrench-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 peer-checked:text-white">Engineering</span>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="peer sr-only" name="role" type="radio"/>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 peer-checked:bg-zinc-900 peer-checked:border-zinc-600 transition-all flex flex-col items-center gap-2 text-center h-full">
<iconify-icon className="text-zinc-400 peer-checked:text-white transition-colors" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 peer-checked:text-white">Logistics</span>
</div>
</label>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between items-end mb-4">
<label className="text-xs font-medium text-zinc-500">Weekly Availability</label>
<span className="text-xs font-semibold text-white bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700" id="hours-val">20 Hrs</span>
</div>
<div className="relative h-2 w-full flex items-center">
<input className="w-full z-20 focus:outline-none" max="60" min="5" oninput="document.getElementById('hours-val').innerText = this.value + ' Hrs'" type="range" value="20"/>
<div className="absolute h-0.5 bg-zinc-800 w-full rounded z-0"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-medium tracking-wide">
<span>5HRS</span>
<span>60HRS</span>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-zinc-800 rounded-lg bg-zinc-900/20">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-300">Prior Experience</span>
<span className="text-[10px] text-zinc-600">Have you worked in zero-g?</span>
</div>
</div>
<label className="inline-flex relative items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-100 peer-checked:after:bg-black peer-checked:after:border-black"></div>
</label>
</div>

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox mt-4">
<div className="relative flex items-center">
<input className="sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-zinc-900/50 group-hover:border-zinc-500 transition-colors flex items-center justify-center">
<svg className="w-2.5 h-2.5 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<p className="text-xs text-zinc-500 leading-normal select-none">
                                I agree to the <span className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-2 transition-colors">Safety Protocols</span> and <span className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-2 transition-colors">Non-Disclosure Agreement</span> regarding extraterrestrial biological findings.
                            </p>
</label>

<button className="group w-full relative overflow-hidden rounded-lg bg-white p-0.5 transition-all active:scale-[0.99]" id="submit-btn" type="submit">
<div className="relative z-10 bg-white h-full w-full rounded-[6px] py-2.5 flex items-center justify-center gap-2 transition-colors hover:bg-zinc-100">
<span className="text-black text-sm font-semibold tracking-tight" id="btn-text">Initiate Registration</span>
<iconify-icon className="text-black group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" id="btn-icon" strokeWidth="2" width="16"></iconify-icon>
<div className="spinner hidden" id="btn-spinner"></div>
</div>
</button>
<div className="text-center pt-2">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Already registered? Check status</a>
</div>
</form>
</div>

<div className="hidden flex-col items-center justify-center text-center space-y-6" id="success-state">

<div className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl p-1 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
<div className="bg-black/50 rounded-lg p-6 flex flex-col items-center relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-700 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium tracking-tight mb-1">Registration Complete</h3>
<p className="text-zinc-500 text-xs mb-6">Your encrypted profile has been transmitted.</p>

<div className="w-full bg-zinc-900/50 rounded border border-zinc-800/50 p-4 space-y-3">
<div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-semibold">
<span className="text-zinc-600">Ref ID</span>
<span className="text-zinc-300 font-mono">AST-8829-X</span>
</div>
<div className="w-full h-[1px] bg-zinc-800"></div>
<div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-semibold">
<span className="text-zinc-600">Status</span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
</span>
<span className="text-yellow-500">Pending Review</span>
</div>
</div>
<div className="w-full h-[1px] bg-zinc-800"></div>
<div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-semibold">
<span className="text-zinc-600">Class</span>
<span className="text-zinc-300">Orbital V4</span>
</div>
</div>

<div className="mt-6 w-full opacity-30 flex justify-between gap-[2px] h-6 px-4 overflow-hidden">

<div className="w-1 bg-white h-full"></div><div className="w-2 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-3 bg-white h-full"></div>
<div className="w-1 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-4 bg-white h-full"></div><div className="w-2 bg-white h-full"></div>
<div className="w-1 bg-white h-full"></div><div className="w-2 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-3 bg-white h-full"></div>
<div className="w-1 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-2 bg-white h-full"></div>
<div className="w-4 bg-white h-full"></div><div className="w-1 bg-white h-full"></div><div className="w-2 bg-white h-full"></div><div className="w-1 bg-white h-full"></div>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                        Keep your Reference ID safe. You will receive a secure transmission if your profile matches our mission parameters.
                    </p>
<button className="text-xs text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors" onclick="resetForm()">
                        Return to Homepage
                    </button>
</div>
</div>

<div className="absolute bottom-6 w-full text-center">
<p className="text-[10px] text-zinc-800 uppercase tracking-widest font-semibold">System v4.0.2 // Secure Connection</p>
</div>
</div>
</div>


    </>
  );
}
