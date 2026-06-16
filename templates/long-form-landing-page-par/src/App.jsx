import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12"></nav>

<section className="w-full bg-[#0B0D10] py-24 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1000px] mx-auto text-center reveal-on-scroll">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Effortless Setup
                </h2>
<p className="mt-4 text-lg text-[#A8AEB8] font-medium max-w-2xl mx-auto">
                    Plug it in, pair with the app, and sleep. No wearables, no calibration, no complexity.
                </p>
</div>
<div className="relative w-full aspect-video rounded-[24px] overflow-hidden border border-white/[0.08] shadow-[0_0_40px_rgba(0,0,0,0.5)] group cursor-pointer bg-[#14161A]">
<img alt="Setup instruction cover" className="w-full h-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-10">
<div className="flex justify-between items-start">
<span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/70 uppercase tracking-widest">Tutorial.mp4</span>
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#CFA46A] group-hover:border-[#CFA46A]">
<span className="iconify text-white ml-1" data-height="32" data-icon="lucide:play" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="w-full">
<div className="flex justify-between text-xs text-white/60 font-mono mb-2">
<span>0:00</span>
<span>1:14</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-0 h-full bg-[#CFA46A] group-hover:w-full transition-all duration-[3000ms] ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] py-24 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col items-center text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Smart Alarm
                </h2>
<p className="mt-4 text-lg text-[#A8AEB8] font-medium max-w-2xl">
                    Wake up naturally using gestures and movement. No phones, no blaring alarms.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-colors duration-300 group flex flex-col h-full reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:hand" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Hands-Up Snooze</h3>
<p className="text-sm text-[#88909D] leading-relaxed">Simply raise your hand while lying in bed to snooze the alarm for 9 minutes.</p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-colors duration-300 group flex flex-col h-full reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:rotate-3d" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Body-Turn Snooze</h3>
<p className="text-sm text-[#88909D] leading-relaxed">Rolling over to face away from the lamp silences the audio, letting you rest longer.</p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-colors duration-300 group flex flex-col h-full reveal-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:footprints" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Auto-Off</h3>
<p className="text-sm text-[#88909D] leading-relaxed">The alarm stops automatically the moment your feet hit the floor and you leave the bed.</p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-colors duration-300 group flex flex-col h-full reveal-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:smartphone-off" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Phone-Free</h3>
<p className="text-sm text-[#88909D] leading-relaxed">Start your day without screens. Control everything through natural interaction.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] py-24 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1200px] mx-auto">

<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Privacy You Can Trust
                </h2>
<p className="mt-4 text-lg text-[#A8AEB8] font-medium max-w-2xl mx-auto">
                    Built from the ground up to respect your sanctuary. No cameras, local processing, and physical controls.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 group relative overflow-hidden reveal-on-scroll delay-100">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#CFA46A] opacity-0 blur-[60px] group-hover:opacity-5 transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-6 z-10 relative">
<span className="iconify" data-height="24" data-icon="lucide:eye-off" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight z-10 relative">No Cameras</h3>
<p className="text-[#88909D] leading-relaxed text-sm z-10 relative">
                        Sleepal uses advanced mmWave radar to sense presence and vitals. There are no optical lenses or microphones recording your intimate moments.
                    </p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 group relative overflow-hidden reveal-on-scroll delay-200">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CFA46A] opacity-0 blur-[60px] group-hover:opacity-5 transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-6 z-10 relative">
<span className="iconify" data-height="24" data-icon="lucide:cpu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight z-10 relative">Local Processing</h3>
<p className="text-[#88909D] leading-relaxed text-sm z-10 relative">
                        Your sleep data is processed directly on the device's neural engine. Personal patterns are analyzed locally, ensuring your raw data never leaves the lamp.
                    </p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 group relative overflow-hidden reveal-on-scroll delay-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CFA46A] opacity-0 blur-[60px] group-hover:opacity-5 transition-opacity duration-500 rounded-full"></div>
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-6 z-10 relative">
<span className="iconify" data-height="24" data-icon="lucide:toggle-right" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight z-10 relative">Privacy Switch</h3>
<p className="text-[#88909D] leading-relaxed text-sm z-10 relative">
                        A dedicated hardware switch physically cuts power to the sensors. When you want complete isolation, simply flip the switch—no software override possible.
                    </p>
</div>
</div>

<div className="relative w-full h-[320px] rounded-[24px] overflow-hidden border border-white/[0.06] bg-[#14161A] reveal-on-scroll">

<img alt="Abstract Privacy Shield" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
<div className="relative w-24 h-24 flex items-center justify-center">
<div className="absolute inset-0 bg-[#CFA46A] opacity-20 blur-xl rounded-full animate-pulse"></div>
<span className="iconify text-white relative z-10" data-height="48" data-icon="lucide:shield-check" data-width="48" style={{strokeWidth: '1'}}></span>

<div className="absolute inset-0 border border-white/20 rounded-full w-24 h-24 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-0 border border-white/10 rounded-full w-32 h-32 -m-4 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
<p className="mt-6 text-white/50 text-xs font-mono tracking-[0.2em] uppercase">AES-256 Encryption Standard</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] py-24 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1200px] mx-auto">

<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Engineered for Quality
                </h2>
<p className="mt-4 text-lg text-[#A8AEB8] font-medium max-w-2xl mx-auto">
                    We refused to compromise on materials or mechanics. Sleepal is designed to last a lifetime.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)] group flex flex-col items-start h-full reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:flask-conical" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Three years of R&amp;D</h3>
<p className="text-sm text-[#88909D] leading-relaxed">
                        Iterated through 50+ prototypes to perfect the radar sensitivity and wake-up lighting algorithms.
                    </p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)] group flex flex-col items-start h-full reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:gem" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">High-quality materials</h3>
<p className="text-sm text-[#88909D] leading-relaxed">
                        Constructed with aerospace-grade aluminum and impact-resistant diffused glass for soft illumination.
                    </p>
</div>

<div className="bg-[#14161A] p-8 rounded-[20px] border border-white/[0.06] hover:border-[#CFA46A]/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)] group flex flex-col items-start h-full reveal-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-[#0B0D10] border border-white/10 flex items-center justify-center text-[#CFA46A] mb-5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:award" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">One-year limited warranty</h3>
<p className="text-sm text-[#88909D] leading-relaxed">
                        We stand by our craftsmanship. If anything goes wrong with the hardware, we replace it instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] py-24 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1100px] mx-auto">

<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Sleepal vs. Wearables
                </h2>
<p className="mt-4 text-lg text-[#A8AEB8] font-medium max-w-2xl mx-auto">
                    Why a dedicated sanctuary device outperforms what you wear on your wrist.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 relative reveal-on-scroll delay-100">

<div className="bg-[#111316] rounded-[24px] border border-white/[0.04] p-6 md:p-8 flex flex-col relative z-0">
<div className="mb-8 flex items-center space-x-3 opacity-60">
<span className="iconify text-[#A8AEB8]" data-height="24" data-icon="lucide:watch" data-width="24"></span>
<h3 className="text-xl font-bold tracking-tight text-[#A8AEB8]">Traditional Wearables</h3>
</div>

<div className="space-y-0 text-sm text-[#6C727F]">
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Comfort</span>
<span className="flex items-center"><span className="iconify mr-2 text-red-500/40" data-icon="lucide:x" data-width="14"></span>Uncomfortable strap</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Method</span>
<span className="flex items-center"><span className="iconify mr-2 text-white/20" data-icon="lucide:waves" data-width="14"></span>Optical (Skin contact)</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Breathing</span>
<span className="flex items-center"><span className="iconify mr-2 text-white/20" data-icon="lucide:activity" data-width="14"></span>Estimated by motion</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Heart Rate</span>
<span className="flex items-center"><span className="iconify mr-2 text-white/20" data-icon="lucide:battery-warning" data-width="14"></span>Intermittent sampling</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Nighttime</span>
<span className="flex items-center"><span className="iconify mr-2 text-red-500/40" data-icon="lucide:x" data-width="14"></span>Skin irritation &amp; sweat</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Charging</span>
<span className="flex items-center"><span className="iconify mr-2 text-red-500/40" data-icon="lucide:plug-zap" data-width="14"></span>Daily charging ritual</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Environment</span>
<span className="flex items-center"><span className="iconify mr-2 text-white/20" data-icon="lucide:thermometer" data-width="14"></span>Body temp only</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Sharing</span>
<span className="flex items-center"><span className="iconify mr-2 text-red-500/40" data-icon="lucide:users" data-width="14"></span>Confused by partner</span>
</div>
<div className="py-4 border-b border-white/[0.04] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Privacy</span>
<span className="flex items-center"><span className="iconify mr-2 text-white/20" data-icon="lucide:cloud" data-width="14"></span>Cloud sync required</span>
</div>
<div className="py-4 grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider opacity-50">Habit</span>
<span className="flex items-center"><span className="iconify mr-2 text-red-500/40" data-icon="lucide:x" data-width="14"></span>Easy to forget</span>
</div>
</div>
</div>

<div className="bg-[#14161A] rounded-[24px] border border-[#CFA46A]/30 p-6 md:p-8 flex flex-col relative z-10 shadow-[0_0_40px_-10px_rgba(207,164,106,0.15)] md:-ml-2 md:-my-4 md:py-12">
<div className="mb-8 flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-[#CFA46A]/20 flex items-center justify-center text-[#CFA46A]">
<span className="iconify" data-height="16" data-icon="lucide:check" data-width="16"></span>
</div>
<h3 className="text-xl font-bold tracking-tight text-white">Sleepal AI Lamp</h3>
</div>

<div className="space-y-0 text-sm text-white font-medium">
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Comfort</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Zero contact (Invisible)</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Method</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>mmWave Radar (Clinical)</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Breathing</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Sub-millimeter precision</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Heart Rate</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Continuous contactless</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Nighttime</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Zero disturbance</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Charging</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Always ready</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Environment</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Room CO2, Temp, Light</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Sharing</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>AI presence filtering</span>
</div>
<div className="py-4 border-b border-white/[0.08] grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Privacy</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>100% Local processing</span>
</div>
<div className="py-4 grid grid-cols-[100px_1fr] items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-[#CFA46A]/70">Habit</span>
<span className="flex items-center"><span className="iconify mr-2 text-[#CFA46A]" data-icon="lucide:check" data-width="14"></span>Permanent fixture</span>
</div>
</div>

<div className="mt-8 pt-6 border-t border-[#CFA46A]/20 text-center">
<p className="text-[#CFA46A] text-xs font-semibold uppercase tracking-widest mb-1">Total Freedom</p>
<p className="text-white/80 text-sm">Sleep exactly how you want, with nothing on your body.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] pt-24 pb-24 px-6 md:px-12 relative overflow-hidden border-t border-white/[0.04]">
<div className="max-w-[1200px] mx-auto animate-fade-in-up relative z-10 reveal-on-scroll">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#CFA46A] opacity-20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="relative w-full rounded-[28px] bg-[#0F1115] border-2 border-[#CFA46A] shadow-[0_0_50px_-10px_rgba(207,164,106,0.3)] overflow-hidden p-8 md:p-12 lg:p-16">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-white">
<div className="inline-flex items-center space-x-2 bg-[#CFA46A]/10 px-3 py-1 rounded-full border border-[#CFA46A]/20 mb-6">
<span className="w-2 h-2 rounded-full bg-[#CFA46A] animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider text-[#CFA46A]">Limited Offer</span>
</div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                            Lifetime Sleepal Membership — Free for Super Early Backers
                        </h2>
<p className="text-lg md:text-xl font-medium text-[#A8AEB8] mb-8 max-w-md">
                            Get advanced sleep analytics, coaching, and future AI updates without the monthly fee.
                        </p>

<ul className="space-y-3 mb-8">
<li className="flex items-center space-x-3">
<span className="iconify text-[#CFA46A]" data-height="20" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-semibold text-white/90">Unlimited History Storage</span>
</li>
<li className="flex items-center space-x-3">
<span className="iconify text-[#CFA46A]" data-height="20" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-semibold text-white/90">Personalized Sleep Coaching</span>
</li>
<li className="flex items-center space-x-3">
<span className="iconify text-[#CFA46A]" data-height="20" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm font-semibold text-white/90">Early Access to Beta Features</span>
</li>
</ul>
</div>

<div className="flex flex-col justify-center lg:items-end">
<div className="bg-[#14161A] p-8 rounded-[20px] w-full max-w-md border border-white/[0.08] shadow-2xl relative">

<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h3 className="text-white font-semibold text-lg mb-2">Reserve your spot</h3>
<p className="text-[#88909D] text-xs mb-6">Enter your email to lock in the lifetime status.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<input className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#CFA46A] focus:border-transparent text-sm transition-all" id="email" placeholder="name@example.com" type="email"/>
</div>
<button className="w-full bg-[#CFA46A] hover:bg-[#B5894B] text-[#1A1814] font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(207,164,106,0.2)] hover:shadow-[0_0_30px_rgba(207,164,106,0.4)]" type="submit">
<span>Unlock Lifetime Access</span>
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
<div className="mt-4 flex items-center justify-center space-x-2 text-[10px] text-[#555]">
<span className="iconify" data-height="10" data-icon="lucide:lock" data-width="10"></span>
<span>No spam, strictly important updates.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0B0D10] py-32 px-6 md:px-12 border-t border-white/[0.04]">
<div className="max-w-[1000px] mx-auto flex flex-col items-center">

<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                    Product Specifications
                </h2>
<p className="text-lg text-[#A8AEB8] font-medium max-w-[600px] mx-auto leading-relaxed">
                   Technical details for the Sleepal AI Lamp. Designed with precision for your bedside sanctuary.
                </p>
</div>

<div className="w-full bg-[#14161A] rounded-[24px] border border-white/[0.06] p-8 md:p-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] reveal-on-scroll delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-0">

<div className="space-y-6">

<div className="space-y-4">
<h3 className="text-white text-base font-semibold tracking-tight">Dimensions &amp; Materials</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Height</span>
<span className="text-white font-medium">240 mm</span>
</div>
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Diameter</span>
<span className="text-white font-medium">120 mm</span>
</div>
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Body</span>
<span className="text-white font-medium text-right">Aerospace-grade Aluminum</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Diffuser</span>
<span className="text-white font-medium text-right">Matte Glass</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4 md:pt-0">
<h3 className="text-white text-base font-semibold tracking-tight">Sensors</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Radar</span>
<span className="text-white font-medium text-right">60GHz mmWave (Breathing/Heart Rate)</span>
</div>
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Environment</span>
<span className="text-white font-medium text-right">CO2, Temperature, Humidity</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Light</span>
<span className="text-white font-medium text-right">Ambient Light Sensor (ALS)</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4 md:pt-0">
<h3 className="text-white text-base font-semibold tracking-tight">Connectivity</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Wi-Fi</span>
<span className="text-white font-medium text-right">802.11ax (Wi-Fi 6)</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Bluetooth</span>
<span className="text-white font-medium text-right">Bluetooth 5.2 (Matter Compatible)</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="space-y-4">
<h3 className="text-white text-base font-semibold tracking-tight">Lighting &amp; Audio</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">LED</span>
<span className="text-white font-medium text-right">Full Spectrum (2700K-6500K)</span>
</div>
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Max Brightness</span>
<span className="text-white font-medium text-right">800 Lumens (Dimmable)</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Speaker</span>
<span className="text-white font-medium text-right">10W Omnidirectional</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4 md:pt-0">
<h3 className="text-white text-base font-semibold tracking-tight">Power</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Input</span>
<span className="text-white font-medium text-right">USB-C PD 30W</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Backup Battery</span>
<span className="text-white font-medium text-right">4 Hours (Alarm functionality only)</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4 md:pt-0">
<h3 className="text-white text-base font-semibold tracking-tight">Privacy &amp; Warranty</h3>
<div className="space-y-3">
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Switch</span>
<span className="text-white font-medium text-right">Physical Sensor Cut-off</span>
</div>
<div className="flex justify-between items-start text-sm border-b border-white/[0.06] pb-2">
<span className="text-[#88909D]">Processing</span>
<span className="text-white font-medium text-right">On-device Neural Engine</span>
</div>
<div className="flex justify-between items-start text-sm pb-2">
<span className="text-[#88909D]">Warranty</span>
<span className="text-white font-medium text-right">1-Year Limited Hardware</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
