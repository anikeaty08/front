import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 1.5s ease-out forwards',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function toggleModal() {
            const modal = document.getElementById('contact-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }

        function handleEmail(e) {
            e.preventDefault();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const emailTo = "mragethart@gmail.com";
            
            // Construct mailto link
            const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Optional: Close modal after a brief delay
            setTimeout(toggleModal, 1000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm border-b bg-neutral-950/50 border-white/5">
<a className="transition-colors duration-300 text-sm font-medium tracking-tighter hover:text-neutral-400 text-white" href="#">out there with john</a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-light tracking-wide transition-colors hover:text-white" href="#landscape">LANDSCAPE</a>
<a className="hidden md:block text-xs font-light tracking-wide transition-colors hover:text-white" href="#portraits">PORTRAITS</a>
<a className="hidden md:block text-xs font-light tracking-wide transition-colors hover:text-white" href="#cinematic">CINEMATIC</a>
<button className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 group border-white/10 hover:border-white/30 hover:bg-white/5 cursor-pointer" onclick="toggleModal()">
<iconify-icon className="group-hover:text-white transition-colors text-neutral-400" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</button>
</div>
</nav>

<header className="flex flex-col overflow-hidden w-full h-screen pr-4 pl-4 relative items-center justify-center">

<div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dee9f39-c13b-44c7-b87a-199eb9577c87_800w.jpg)] bg-cover bg-center"></div>
<div className="z-10 text-center flex flex-col items-center space-y-8 animate-fade-in-up">
<div className="space-y-6">
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-medium tracking-tighter text-white">out there<br/>with john</h1>
<p className="md:text-base text-sm font-light text-neutral-500 tracking-wide max-w-md mx-auto">framing the untold between light and silence</p>
</div>

<div className="flex items-center gap-8 pt-2">
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:mention-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 animate-bounce duration-[3000ms]">
<iconify-icon className="text-neutral-600" height="24" icon="solar:alt-arrow-down-outline" width="24"></iconify-icon>
</div>
</header>

<main className="w-full max-w-[1600px] mx-auto space-y-32 pb-32 px-4 md:px-8">

<section className="scroll-mt-24" id="landscape">
<div className="flex items-end justify-between mb-8 md:mb-12 border-b pb-4 border-white/5">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Landscape</h2>
<span className="text-xs font-mono text-neutral-600">01 / NATURE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Misty Mountains" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d32c9a4b-067f-434c-a879-4c740f0df708_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-black/60"></div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Forest" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ab87c7b-9a31-4e90-8dc7-afd85e9e57ce_1600w.jpg"/>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1 bg-neutral-900">
<img alt="Dark Peaks" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23e6b0af-abfd-4bb2-867f-eec49f989998_1600w.jpg"/>
</div>

<div className="group relative aspect-video md:aspect-[2/1] overflow-hidden rounded-2xl md:col-span-2 lg:col-span-3 bg-neutral-900">
<img alt="Snow Landscape" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe73038c-8827-4663-aeba-3fb510550113_3840w.jpg"/>
</div>
</div>
</section>

<section className="scroll-mt-24" id="portraits">
<div className="flex items-end justify-between mb-8 md:mb-12 border-b pb-4 border-white/5">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Portraits</h2>
<span className="text-xs font-mono text-neutral-600">02 / HUMAN</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45c3e8ce-6157-4c35-ac2d-73757bb93eca_1600w.jpg"/>
</div>

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Shadow Portrait" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f61c9a9e-ba9c-4daf-8384-9358b69cceb8_1600w.jpg?w=800&amp;q=80"/>
</div>

<div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Moody Portrait" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62fde839-4517-45fb-9cdf-42be24545294_1600w.jpg"/>
</div>
</div>
</section>

<section className="scroll-mt-24" id="cinematic">
<div className="flex items-end justify-between mb-8 md:mb-12 border-b pb-4 border-white/5">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Cinematic</h2>
<span className="text-xs font-mono text-neutral-600">03 / STORY</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Neon Street" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2e31ac-38dc-4b12-952a-98df9d0d30c5_1600w.jpg"/>
</div>

<div className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Motion Blur" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5a55358-dee7-486e-a54b-8ee1ba7df508_1600w.jpg"/>
</div>

<div className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Night Drive" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/101fb384-e970-48dc-ae5b-6b08500145cc_800w.jpg"/>
</div>

<div className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-900">
<img alt="Subway" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 saturate-50 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35d35f1b-4d5f-4249-b89b-854a5a7231d2_1600w.jpg"/>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 w-full border-white/5 border-t pt-24 pr-6 pb-12 pl-6" id="contact">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<h3 className="md:text-5xl text-3xl font-medium text-white tracking-tighter mb-6">let's discuss your vision</h3>
<p className="text-neutral-500 max-w-md mb-10">Open for commissions and collaborations</p>

<button className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-medium text-sm transition-all mb-24 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-neutral-950 hover:bg-neutral-200 hover:scale-105 cursor-pointer" onclick="toggleModal()">
<span>Get in touch</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>

<div className="flex flex-col items-center gap-8 w-full border-white/5 border-t pt-12">
<div className="flex items-center gap-8">
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:mention-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-500 transition-colors hover:text-white transform hover:scale-110 duration-200" href="#">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</a>
</div>
<p className="text-xs text-neutral-600 font-mono">
                    © 2024 OUT THERE WITH JOHN
                </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="contact-modal">

<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity" onclick="toggleModal()"></div>

<div className="relative bg-neutral-900 border border-white/10 w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl transform transition-all scale-100">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Write me an email</h3>
<p className="text-sm text-neutral-500 mb-6">I'll get back to you as soon as possible.</p>
<form className="space-y-4" onsubmit="handleEmail(event)">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide" htmlFor="subject">Subject</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" id="subject" placeholder="Project Inquiry" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide" htmlFor="message">Message</label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700 resize-none" id="message" placeholder="Tell me about your idea..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-neutral-950 rounded-lg py-3 text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
                    Send Email
                    <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>


    </>
  );
}
