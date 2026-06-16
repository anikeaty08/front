import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const successToast = document.getElementById('success-toast');

        function openModal() {
            modalOverlay.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
            }, 300);
        }

        // Close when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        function submitForm() {
            // Simulate submission
            const btn = document.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="18"></span> Sending...';
            
            setTimeout(() => {
                closeModal();
                btn.innerHTML = originalText;
                
                // Show toast
                successToast.classList.remove('translate-y-24', 'opacity-0');
                
                // Hide toast after 4s
                setTimeout(() => {
                    successToast.classList.add('translate-y-24', 'opacity-0');
                }, 4000);
                
                // Reset form
                document.querySelector('form').reset();
            }, 1000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full px-6 py-6 flex justify-between items-center max-w-6xl mx-auto z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-green-900 rounded-lg flex items-center justify-center text-white serif italic text-xl">W</div>
<span className="text-sm font-medium tracking-tight text-stone-600">Wonder Park Family</span>
</div>
<div className="hidden md:flex gap-6 text-xs font-medium text-stone-500 uppercase tracking-widest">
<a className="hover:text-stone-900 transition-colors" href="#">Books</a>
<a className="hover:text-stone-900 transition-colors" href="#">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#">Shop</a>
</div>
<button className="text-xs font-medium bg-stone-200 hover:bg-stone-300 text-stone-800 px-4 py-2 rounded-full transition-colors" onclick="openModal()">
            Sign In
        </button>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-4 pt-16 pb-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-100 rounded-full blur-[120px] opacity-60"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100 rounded-full blur-[120px] opacity-60"></div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-green-950 mb-6 italic tracking-tight">
            The adventure <br/> doesn't have to wait.
        </h1>
<p className="text-stone-600 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Our physical books are launching soon, but the journey begins now. Get a <span className="text-stone-900 font-medium border-b border-orange-300">free digital itinerary</span> for your favorite park to start planning your trip today.
        </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-green-900 px-8 font-medium text-white transition-all duration-300 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2" onclick="openModal()">
<span className="mr-2">Claim Your Free Guide</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-xs text-stone-400 mt-2 md:mt-0">No purchase necessary. Instant download.</p>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">

<div className="bg-white p-1 rounded-2xl shadow-sm border border-stone-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
<div className="bg-stone-100 rounded-xl overflow-hidden aspect-[4/5] relative group">
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<span className="iconify text-green-800 mb-4 opacity-80" data-icon="lucide:mountain-snow" data-width="48"></span>
<h3 className="text-2xl text-green-900 mb-1">Yosemite</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest font-medium">Valley Explorer</p>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm border-t border-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-stone-600">Perfect for families seeking waterfalls and giant sequoias.</p>
</div>
</div>
</div>

<div className="bg-white p-1 rounded-2xl shadow-lg border border-stone-100 z-10 scale-105">
<div className="bg-orange-50 rounded-xl overflow-hidden aspect-[4/5] relative group">
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<span className="iconify text-orange-700 mb-4 opacity-80" data-icon="lucide:tent-tree" data-width="48"></span>
<h3 className="text-2xl text-stone-900 mb-1">Zion</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest font-medium">Canyon Trekker</p>
</div>
<div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm border-t border-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-stone-600">Explore the narrows and red rocks with easy kid-friendly trails.</p>
</div>
</div>
</div>

<div className="bg-white p-1 rounded-2xl shadow-sm border border-stone-100 rotate-[2deg] hover:rotate-0 transition-transform duration-500">
<div className="bg-stone-100 rounded-xl overflow-hidden aspect-[4/5] relative group">
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<span className="iconify text-yellow-700 mb-4 opacity-80" data-icon="lucide:compass" data-width="48"></span>
<h3 className="text-2xl text-stone-900 mb-1">Yellowstone</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest font-medium">Geyser Hunter</p>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm border-t border-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs text-stone-600">Wildlife spotting and thermal wonders for the whole family.</p>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-stone-200 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-stone-400">© 2024 Wonder Park Family. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><span className="iconify" data-icon="lucide:mail" data-width="18"></span></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0" id="modal-overlay">
<div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative transform scale-95 opacity-0" id="modal-content">

<button className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-stone-100 rounded-full transition-colors text-stone-500" onclick="closeModal()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-2/5 bg-stone-100 p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full">
<div className="absolute top-[-50%] right-[-50%] w-full h-full bg-orange-200/30 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white serif italic text-xl mb-6">W</div>
<h3 className="text-3xl font-medium leading-none text-green-950 mb-2">Adventure <br/> awaits.</h3>
<p className="text-sm text-stone-600">Select your destination and we'll send the guide straight to your inbox.</p>
</div>
<div className="relative z-10 mt-8">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-400"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-500 flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
<p className="text-[10px] text-stone-500 mt-2 font-medium">Families exploring now</p>
</div>
</div>

<div className="w-full md:w-3/5 p-8">
<form className="flex flex-col h-full" onsubmit="event.preventDefault(); submitForm();">

<div className="mb-6">
<label className="block text-xs font-semibold text-stone-900 uppercase tracking-wide mb-2" htmlFor="email">Where should we send it?</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</span>
<input className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-900/10 focus:border-green-900 transition-all placeholder:text-stone-400 text-stone-800" id="email" placeholder="mom@wonderpark.com" required="" type="email"/>
</div>
</div>

<div className="mb-8">
<label className="block text-xs font-semibold text-stone-900 uppercase tracking-wide mb-3">Choose your Park</label>
<div className="grid grid-cols-1 gap-3 max-h-[200px] overflow-y-auto no-scrollbar pr-1">

<label className="relative flex items-center p-3 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input checked="" className="peer sr-only" name="park" type="radio" value="zion"/>
<div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-700 mr-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:tent-tree" data-width="20"></span>
</div>
<div className="flex-1">
<div className="font-medium text-sm text-stone-900">Zion National Park</div>
<div className="text-xs text-stone-500">The Canyon Explorer</div>
</div>
<div className="w-4 h-4 border border-stone-300 rounded-full peer-checked:bg-green-900 peer-checked:border-green-900 flex items-center justify-center transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>

<div className="absolute inset-0 rounded-xl ring-2 ring-transparent peer-checked:ring-green-900/10 pointer-events-none"></div>
</label>

<label className="relative flex items-center p-3 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="peer sr-only" name="park" type="radio" value="yosemite"/>
<div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-800 mr-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:mountain-snow" data-width="20"></span>
</div>
<div className="flex-1">
<div className="font-medium text-sm text-stone-900">Yosemite</div>
<div className="text-xs text-stone-500">Valley &amp; Peaks Guide</div>
</div>
<div className="w-4 h-4 border border-stone-300 rounded-full peer-checked:bg-green-900 peer-checked:border-green-900 flex items-center justify-center transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div className="absolute inset-0 rounded-xl ring-2 ring-transparent peer-checked:ring-green-900/10 pointer-events-none"></div>
</label>

<label className="relative flex items-center p-3 border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors group">
<input className="peer sr-only" name="park" type="radio" value="yellowstone"/>
<div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700 mr-3 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:compass" data-width="20"></span>
</div>
<div className="flex-1">
<div className="font-medium text-sm text-stone-900">Yellowstone</div>
<div className="text-xs text-stone-500">Geysers &amp; Wildlife</div>
</div>
<div className="w-4 h-4 border border-stone-300 rounded-full peer-checked:bg-green-900 peer-checked:border-green-900 flex items-center justify-center transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
</div>
<div className="absolute inset-0 rounded-xl ring-2 ring-transparent peer-checked:ring-green-900/10 pointer-events-none"></div>
</label>
</div>
</div>
<button className="w-full bg-green-900 text-white font-medium py-3 rounded-xl hover:bg-green-800 transition-colors flex items-center justify-center gap-2 group mt-auto" type="submit">
<span>Send Me The Guide</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-green-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-500 z-50" id="success-toast">
<div className="bg-white/20 p-1 rounded-full">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium">On its way!</p>
<p className="text-xs text-green-200">Check your inbox for the download.</p>
</div>
</div>


    </>
  );
}
