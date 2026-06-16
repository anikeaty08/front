import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Video Player
        document.addEventListener('DOMContentLoaded', () => {
            const player = new Plyr('#demo-player', {
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
            });
        });

        // Simple nav styling on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('border-[#0F172A]/5', 'border-[#0F172A]/10');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('border-[#0F172A]/10', 'border-[#0F172A]/5');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div hidden="" id="sprite-plyr"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="plyr-airplay" viewbox="0 0 18 18"><path d="M16 1H2a1 1 0 00-1 1v10a1 1 0 001 1h3v-2H3V3h12v8h-2v2h3a1 1 0 001-1V2a1 1 0 00-1-1z"></path><path d="M4 17h10l-5-6z"></path></symbol><symbol id="plyr-captions-off" viewbox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fillOpacity=".5" fill-rule="evenodd"></path></symbol><symbol id="plyr-captions-on" viewbox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"></path></symbol><symbol id="plyr-download" viewbox="0 0 18 18"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"></path></symbol><symbol id="plyr-enter-fullscreen" viewbox="0 0 18 18"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"></path></symbol><symbol id="plyr-exit-fullscreen" viewbox="0 0 18 18"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"></path></symbol><symbol id="plyr-fast-forward" viewbox="0 0 18 18"><path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"></path></symbol><symbol id="plyr-logo-vimeo" viewbox="0 0 18 18"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"></path></symbol><symbol id="plyr-logo-youtube" viewbox="0 0 18 18"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"></path></symbol><symbol id="plyr-muted" viewbox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol><symbol id="plyr-pause" viewbox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"></path></symbol><symbol id="plyr-pip" viewbox="0 0 18 18"><path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"></path><path d="M13 15H3V5h5V3H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h-2v5z"></path></symbol><symbol id="plyr-play" viewbox="0 0 18 18"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></symbol><symbol id="plyr-restart" viewbox="0 0 18 18"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"></path></symbol><symbol id="plyr-rewind" viewbox="0 0 18 18"><path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"></path></symbol><symbol id="plyr-settings" viewbox="0 0 18 18"><path d="M16.135 7.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 01-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 110-6 3 3 0 010 6z"></path></symbol><symbol id="plyr-volume" viewbox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol></svg></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5A625] opacity-[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#091728] opacity-[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 bg-[#F8F9FB]/80 backdrop-blur-md border-b transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="SentryDog Logo" className="h-12" src="https://sentrydog.co/assets/images/SDLogo-fullcolor.svg"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]">
<a className="hover:text-[#0F172A] transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-[#0F172A] transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-[#0F172A] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="hidden md:block hover:text-[#4B5563] transition-colors font-medium text-[#0F172A]" href="#">Client Portal</a>
<a className="bg-[#091728] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#132840] transition-all shadow-[0_4px_14px_0_rgba(9,23,40,0.2)] hover:shadow-[0_6px_20px_rgba(9,23,40,0.23)]" href="#pricing">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="absolute inset-0 bg-grid-pattern z-[-1]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4F7FC] border border-[#0F172A]/5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
</span>
<span className="text-xs font-medium text-[#4B5563] tracking-wide uppercase">Your Website Is Secure</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                    Complete peace of mind for your website.
                </h1>
<p className="text-lg md:text-xl text-[#4B5563] mb-10 leading-relaxed font-normal">
                    Your website is your digital storefront. We proactively manage, update, and secure it so you don’t have to. Focus on growing your business while we ensure you stay flawless and fast, 24/7.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto text-center bg-[#F5A625] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#D98D1C] transition-all shadow-[0_4px_14px_0_rgba(245,166,37,0.3)] text-base" href="#pricing">
                        View Maintenance Plans
                    </a>
<a className="w-full sm:w-auto text-center bg-white border border-[#E2E8F0] text-[#0F172A] px-7 py-3.5 rounded-full font-medium hover:bg-[#F8F9FB] transition-all text-base flex justify-center items-center gap-2" href="#how-it-works">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                        See how it works
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
<div className="relative w-full max-w-md animate-float z-10">

<div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(9,23,40,0.1)] border border-[#0F172A]/5 p-6 backdrop-blur-xl">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#F4F7FC] flex items-center justify-center border border-[#0F172A]/5">
<iconify-icon className="text-xl text-[#091728]" icon="solar:shop-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-[#0F172A]">yourbusiness.com</h3>
<p className="text-xs text-[#4B5563]">Pro Plan • Fully Protected</p>
</div>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100">
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
<div className="absolute inset-0 animate-pulse-ring"></div>
</div>
<span className="text-xs font-medium text-emerald-700">Online &amp; Fast</span>
</div>
</div>

<div className="space-y-2 mb-6">
<div className="flex justify-between text-xs text-[#4B5563]">
<span className="">Website Speed</span>
<span className="font-medium text-[#0F172A]">Lightning Fast</span>
</div>
<div className="flex items-end gap-1 h-12 pt-2">
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '40%', animationDelay: '0s'}}></div>
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '60%', animationDelay: '0.5s'}}></div>
<div className="w-full bg-[#10B981] rounded-t-sm chart-bar shadow-[0_0_10px_rgba(16,185,129,0.2)]" style={{-TargetHeight: '85%', animationDelay: '1s'}}></div>
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '30%', animationDelay: '1.5s'}}></div>
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '50%', animationDelay: '2s'}}></div>
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '45%', animationDelay: '2.5s'}}></div>
<div className="w-full bg-[#F4F7FC] rounded-t-sm chart-bar" style={{-TargetHeight: '20%', animationDelay: '3s'}}></div>
</div>
</div>

<div className="bg-[#F8F9FB] rounded-xl p-4 border border-[#0F172A]/5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-[#4B5563]">Recent Maintenance</span>
<iconify-icon className="text-sm text-[#F5A625]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="">
<p className="text-[#4B5563] mb-0.5">Last Backup</p>
<p className="font-medium text-[#0F172A]">2 hours ago</p>
</div>
<div>
<p className="text-[#4B5563] mb-0.5">Security Scan</p>
<p className="font-medium text-emerald-600">Passed</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-lg border border-[#0F172A]/5 p-4 animate-float-delayed w-64 backdrop-blur-md">
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded-full bg-[#F5A625]/10 flex items-center justify-center text-[#F5A625]">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-[#0F172A]">Plugins Updated</p>
<p className="text-[10px] text-[#4B5563]">We safely updated 4 plugins.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#091728] relative z-20 border-t border-white/5" id="how-it-works">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')] mask-image-b"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">See how we protect your business.</h2>
<p className="text-gray-400 text-base max-w-2xl mx-auto">Watch a quick tour of our dashboard. See how easy it is to manage your website's health, request support, and track maintenance without any technical headaches.</p>
</div>

<div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0F172A]">

<div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"><div className="plyr__controls"><button aria-label="Play" aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="play" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input aria-label="Seek" aria-valuemax="183.125333" aria-valuemin="0" aria-valuenow="0" aria-valuetext="00:00 of 00:00" autocomplete="off" className="" data-plyr="seek" id="plyr-seek-4704" max="100" min="0" role="slider" seek-value="31.674760502083167" step="0.01" style={{-Value: '0%'}} type="range" value="0"/><span className="plyr__tooltip" style={{left: '31.6748%'}}>00:58</span></div></div><div aria-label="Current time" className="plyr__controls__item plyr__time--current plyr__time" role="timer">03:03</div><div className="plyr__controls__item plyr__volume"><button aria-pressed="false" className="plyr__control" data-plyr="mute" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input aria-label="Volume" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100.0%" autocomplete="off" data-plyr="volume" id="plyr-volume-4704" max="1" min="0" role="slider" step="0.05" style={{-Value: '100%'}} type="range" value="1"/></div><button aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="fullscreen" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"><div className="plyr__controls"><button aria-label="Play" aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="play" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input aria-label="Seek" aria-valuemax="183.125333" aria-valuemin="0" aria-valuenow="0" aria-valuetext="00:00 of 00:00" autocomplete="off" data-plyr="seek" id="plyr-seek-7714" max="100" min="0" role="slider" step="0.01" style={{-Value: '0%'}} type="range" value="0"/><span className="plyr__tooltip">00:00</span></div></div><div aria-label="Current time" className="plyr__controls__item plyr__time--current plyr__time" role="timer">03:03</div><div className="plyr__controls__item plyr__volume"><button aria-pressed="false" className="plyr__control" data-plyr="mute" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input aria-label="Volume" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100.0%" autocomplete="off" data-plyr="volume" id="plyr-volume-7714" max="1" min="0" role="slider" step="0.05" style={{-Value: '100%'}} type="range" value="1"/></div><button aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="fullscreen" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"><div className="plyr__controls"><button aria-label="Play" aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="play" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input aria-label="Seek" aria-valuemax="183.125333" aria-valuemin="0" aria-valuenow="0" aria-valuetext="00:00 of 00:00" autocomplete="off" data-plyr="seek" id="plyr-seek-3911" max="100" min="0" role="slider" step="0.01" style={{-Value: '0%'}} type="range" value="0"/><span className="plyr__tooltip">00:00</span></div></div><div aria-label="Current time" className="plyr__controls__item plyr__time--current plyr__time" role="timer">03:03</div><div className="plyr__controls__item plyr__volume"><button aria-pressed="false" className="plyr__control" data-plyr="mute" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input aria-label="Volume" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100.0%" autocomplete="off" data-plyr="volume" id="plyr-volume-3911" max="1" min="0" role="slider" step="0.05" style={{-Value: '100%'}} type="range" value="1"/></div><button aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="fullscreen" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"><div className="plyr__controls"><button aria-label="Play" aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="play" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input aria-label="Seek" aria-valuemax="183.125333" aria-valuemin="0" aria-valuenow="0" aria-valuetext="00:00 of 00:00" autocomplete="off" data-plyr="seek" id="plyr-seek-7317" max="100" min="0" role="slider" step="0.01" style={{-Value: '0%'}} type="range" value="0"/><span className="plyr__tooltip">00:00</span></div></div><div aria-label="Current time" className="plyr__controls__item plyr__time--current plyr__time" role="timer">03:03</div><div className="plyr__controls__item plyr__volume"><button aria-pressed="false" className="plyr__control" data-plyr="mute" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input aria-label="Volume" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100.0%" autocomplete="off" data-plyr="volume" id="plyr-volume-7317" max="1" min="0" role="slider" step="0.05" style={{-Value: '100%'}} type="range" value="1"/></div><button aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="fullscreen" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported"><div className="plyr__controls"><button aria-label="Play" aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="play" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input aria-label="Seek" aria-valuemax="183.125333" aria-valuemin="0" aria-valuenow="0" aria-valuetext="00:00 of 00:00" autocomplete="off" data-plyr="seek" id="plyr-seek-9120" max="100" min="0" role="slider" step="0.01" style={{-Value: '0%'}} type="range" value="0"/><span className="plyr__tooltip">00:00</span></div></div><div aria-label="Current time" className="plyr__controls__item plyr__time--current plyr__time" role="timer">03:03</div><div className="plyr__controls__item plyr__volume"><button aria-pressed="false" className="plyr__control" data-plyr="mute" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input aria-label="Volume" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100.0%" autocomplete="off" data-plyr="volume" id="plyr-volume-9120" max="1" min="0" role="slider" step="0.05" style={{-Value: '100%'}} type="range" value="1"/></div><button aria-pressed="false" className="plyr__controls__item plyr__control" data-plyr="fullscreen" type="button"><svg aria-hidden="true" className="icon--pressed" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg aria-hidden="true" className="icon--not-pressed" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><video data-poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" id="demo-player" playsinline="">
<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4"/>
</video><div className="plyr__poster"></div></div><div className="plyr__captions" dir="auto"></div><button aria-label="Play" aria-pressed="false" className="plyr__control plyr__control--overlaid" data-plyr="play" type="button"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div><div className="plyr__poster"></div></div><div className="plyr__captions" dir="auto"></div><button aria-label="Play" aria-pressed="false" className="plyr__control plyr__control--overlaid" data-plyr="play" type="button"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div><div className="plyr__poster"></div></div><div className="plyr__captions" dir="auto"></div><button aria-label="Play" aria-pressed="false" className="plyr__control plyr__control--overlaid" data-plyr="play" type="button"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div><div className="plyr__poster"></div></div><div className="plyr__captions" dir="auto"></div><button aria-label="Play" aria-pressed="false" className="plyr__control plyr__control--overlaid" data-plyr="play" type="button"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div><div className="plyr__poster"></div></div><div className="plyr__captions" dir="auto"></div><button aria-label="Play" aria-pressed="false" className="plyr__control plyr__control--overlaid" data-plyr="play" type="button"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div>
</div>
</div>
</section>

<section className="z-20 bg-white pt-24 pb-24 relative" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0F172A] mb-4">Everything you need, handled for you.</h2>
<p className="text-[#4B5563] text-base">We take the stress out of owning a website. From daily backups to direct expert support, we've got you covered.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#F4F7FC] rounded-3xl p-8 border border-[#0F172A]/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#091728]/5 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
<iconify-icon className="text-3xl text-[#091728] mb-6" icon="solar:pulse-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-3">Always Online, Always Monitored</h3>
<p className="text-sm text-[#4B5563] max-w-md mb-8">Your website is your storefront. We keep a constant watch to ensure it's accessible. If an issue arises, our team is immediately alerted and begins fixing it—often before you even know.</p>
<div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-sm inline-block">
<div className="flex items-center gap-4">
<div className="flex bg-emerald-50 w-12 h-12 rounded-full items-center justify-center">
<iconify-icon className="text-xl text-emerald-600" icon="solar:chart-line-up-linear"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-[#4B5563] mb-1">Guaranteed Uptime</p>
<p className="text-2xl font-semibold tracking-tight text-[#0F172A]">99.99%</p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 border border-[#0F172A]/5 flex flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-[#F5A625] mb-6" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-3">Never Lose Your Domain</h3>
<p className="text-sm text-[#4B5563]">Forgetting to renew a domain can be disastrous. We track your registrations and hosting, sending friendly reminders well in advance.</p>
</div>
<div className="mt-8 bg-[#F8F9FB] rounded-xl p-4 border border-[#E2E8F0]">
<div className="flex items-center justify-between">
<span className="text-xs text-[#4B5563]">Domain Expiry</span>
<span className="text-xs font-medium text-[#0F172A]">In 8 Months</span>
</div>
<div className="w-full bg-[#E2E8F0] h-1.5 rounded-full mt-2">
<div className="bg-[#10B981] h-1.5 rounded-full w-[30%]"></div>
</div>
</div>
</div>

<div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 border border-[#0F172A]/5">
<iconify-icon className="text-3xl text-[#091728] mb-6" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-3">Expert Care on Standby</h3>
<p className="text-sm text-[#4B5563] mb-6">No more dealing with confusing hosting support. Talk directly to our dedicated web experts. We handle the heavy lifting while keeping you in the loop.</p>
<div className="bg-[#F4F7FC] p-3 rounded-xl border border-[#E2E8F0] flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-[#091728] text-white flex items-center justify-center flex-shrink-0">
<img alt="SD" className="w-8 h-8" src="https://ui-avatars.com/api/?name=SD&amp;background=091728&amp;color=fff&amp;rounded=true"/>
</div>
<div>
<p className="text-xs font-medium text-[#0F172A]">Maintenance Team</p>
<p className="text-xs text-[#4B5563] mt-0.5">"We've optimized your images. Your site is now loading 40% faster!"</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#091728] rounded-3xl p-8 relative overflow-hidden text-white group">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,166,37,0.1),transparent_50%)]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<iconify-icon className="text-3xl text-[#F5A625] mb-6" icon="solar:card-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Simple, Transparent Management</h3>
<p className="text-sm text-gray-300 mb-6">Manage all your website plans in one clean dashboard. View clear reports, easily download invoices, and adjust coverage as your business grows.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full border border-white/20 text-xs text-gray-300 backdrop-blur-sm">Clear Invoices</span>
<span className="px-3 py-1.5 rounded-full border border-white/20 text-xs text-gray-300 backdrop-blur-sm">Easy Upgrades</span>
<span className="px-3 py-1.5 rounded-full border border-[#F5A625]/30 bg-[#F5A625]/10 text-[#F5A625] text-xs backdrop-blur-sm">Secure Checkout</span>
</div>
</div>
<div className="w-full md:w-64 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-gray-400 uppercase tracking-wider">Active Plan</span>
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
</div>
<h4 className="text-xl font-medium text-white mb-1">Pro Plan</h4>
<p className="text-xs text-gray-400 mb-6">Next billing: Oct 12</p>
<button className="w-full py-2.5 bg-white text-[#091728] hover:bg-gray-100 transition-colors rounded-lg text-sm font-medium">Download Receipt</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FB] border-t border-[#0F172A]/5 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 space-y-8">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0F172A] mb-4">You, us, and a perfectly running website.</h2>
<p className="text-base text-[#4B5563] leading-relaxed">Our platform is designed to keep everyone perfectly in sync. You get full visibility, our support team gets the tools they need to act fast, and the system coordinates it all automatically.</p>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-emerald-600" icon="solar:user-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-[#0F172A] mb-1">Your Dashboard</h4>
<p className="text-xs text-[#4B5563]">Log in anytime to see your website's health, request help, or view reports showing exactly what we've done for you this month.</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#091728]/5 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-[#091728]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-[#0F172A] mb-1">Our Expert Team</h4>
<p className="text-xs text-[#4B5563]">We instantly receive your requests and automated system alerts, allowing us to fix issues proactively and update you immediately.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full flex justify-center">

<svg className="w-full max-w-md mx-auto" style={{overflow: 'visible'}} viewbox="0 0 400 400">
<defs>
<filter height="140%" id="shadow" width="140%" x="-20%" y="-20%">
<fedropshadow dx="0" dy="4" flood-opacity="0.05" stddeviation="6"></fedropshadow>
</filter>
<filter height="140%" id="shadow-sm" width="140%" x="-20%" y="-20%">
<fedropshadow dx="0" dy="2" flood-opacity="0.08" stddeviation="3"></fedropshadow>
</filter>
</defs>

<circle cx="200" cy="200" fill="none" r="140" stroke="#E2E8F0" stroke-dasharray="6 6" strokeWidth="1.5"></circle>
<circle cx="200" cy="200" fill="none" r="70" stroke="#F4F7FC" strokeWidth="20"></circle>
<circle cx="200" cy="200" fill="none" r="70" stroke="#E2E8F0" strokeWidth="1"></circle>

<circle cx="200" cy="200" fill="#ffffff" filter="url(#shadow)" r="45" stroke="#E2E8F0" strokeWidth="1"></circle>
<image height="50" href="https://sentrydog.co/assets/images/SDFavicon.png" opacity="0.9" width="50" x="175" y="175"/>

<g className="" style={{transformOrigin: '200px 200px', animation: 'orbit 24s linear infinite'}}>

<g transform="translate(200, 60)">

<g style={{transformOrigin: '0 0', animation: 'counter-orbit 24s linear infinite'}}>
<rect fill="#ffffff" filter="url(#shadow-sm)" height="32" rx="16" stroke="#E2E8F0" width="90" x="-45" y="-16"></rect>
<circle cx="-28" cy="0" fill="#10B981" r="5"></circle>
<text fill="#0F172A" fontFamily="Figtree, sans-serif" fontSize="13" font-weight="600" x="-12" y="4">You</text>
</g>
</g>

<g className="" transform="translate(78.7, 270)">
<g className="" style={{transformOrigin: '0 0', animation: 'counter-orbit 24s linear infinite'}}>
<rect className="" fill="#ffffff" filter="url(#shadow-sm)" height="32" rx="16" stroke="#E2E8F0" width="110" x="-55" y="-16"></rect>
<circle cx="-38" cy="0" fill="#091728" r="5"></circle>
<text className="" fill="#0F172A" fontFamily="Figtree, sans-serif" fontSize="13" font-weight="600" x="-22" y="4">Our Team</text>
</g>
</g>

<g transform="translate(321.3, 270)">
<g style={{transformOrigin: '0 0', animation: 'counter-orbit 24s linear infinite'}}>
<rect fill="#ffffff" filter="url(#shadow-sm)" height="32" rx="16" stroke="#E2E8F0" width="100" x="-50" y="-16"></rect>
<circle cx="-33" cy="0" fill="#F5A625" r="5"></circle>
<text fill="#0F172A" fontFamily="Figtree, sans-serif" fontSize="13" font-weight="600" x="-17" y="4">Platform</text>
</g>
</g>
</g>
</svg>
</div>
</div>
</div>
</section>

<section className="z-20 bg-white border-[#0F172A]/5 border-t pt-24 pb-24 relative" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0F172A] mb-4">Simple, straightforward plans.</h2>
<p className="text-[#4B5563] text-base mb-8">Choose the level of care your website needs. No hidden fees, cancel anytime.</p>

<div className="inline-flex bg-[#F4F7FC] p-1 rounded-full border border-[#E2E8F0] relative">
<div className="absolute inset-y-1 left-1 w-1/2 bg-white rounded-full shadow-sm transition-transform duration-300 pointer-events-none" id="pricing-highlight"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-[#0F172A] w-32 rounded-full transition-colors" id="monthly-btn" onclick="document.getElementById('pricing-highlight').style.transform='translateX(0)'; document.getElementById('monthly-plans').classList.remove('hidden'); document.getElementById('annual-plans').classList.add('hidden'); this.classList.add('text-[#0F172A]'); this.classList.remove('text-[#4B5563]'); document.getElementById('annual-btn').classList.add('text-[#4B5563]'); document.getElementById('annual-btn').classList.remove('text-[#0F172A]');">Monthly</button>
<button className="transition-colors text-sm font-medium text-[#4B5563] w-32 z-10 rounded-full pt-2 pr-6 pb-2 pl-6 relative" id="annual-btn" onclick="document.getElementById('pricing-highlight').style.transform='translateX(100%)'; document.getElementById('monthly-plans').classList.add('hidden'); document.getElementById('annual-plans').classList.remove('hidden'); this.classList.add('text-[#0F172A]'); this.classList.remove('text-[#4B5563]'); document.getElementById('monthly-btn').classList.add('text-[#4B5563]'); document.getElementById('monthly-btn').classList.remove('text-[#0F172A]');">Annually <span className="text-[10px] text-[#F5A625] ml-1 uppercase tracking-wider">-30%</span></button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="monthly-plans">

<div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-[#0F172A] mb-1">Solo</h3>
<p className="text-xs text-[#4B5563] mb-6">For personal websites</p>
<div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#E2E8F0]">
<span className="text-3xl font-semibold tracking-tight text-[#0F172A]">₦20,000</span>
<span className="text-sm text-[#4B5563]">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#4B5563] flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic technical support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Monthly maintenance updates</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Minor bug fixes</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Weekly backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Uptime monitoring</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Email support (48h response)</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#E2E8F0] text-[#0F172A] font-medium text-sm hover:bg-[#F8F9FB] transition-colors">Choose Plan</button>
</div>

<div className="bg-[#091728] rounded-3xl p-8 border border-[#132840] shadow-xl flex flex-col relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A625] opacity-10 blur-2xl rounded-full"></div>
<div className="flex justify-between items-start mb-1 relative z-10">
<h3 className="text-lg font-medium text-white">Pro</h3>
<span className="text-[10px] uppercase tracking-wider font-medium bg-[#F5A625]/20 text-[#F5A625] px-2 py-1 rounded-full border border-[#F5A625]/30">Most Popular</span>
</div>
<p className="text-xs text-gray-400 mb-6 relative z-10">For professional &amp; small business sites</p>
<div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white">₦60,000</span>
<span className="text-sm text-gray-400">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-300 flex-grow relative z-10">
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Advanced technical support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Bi-weekly maintenance updates</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Feature integration</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Daily backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Uptime monitoring + alerts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Analytics dashboard</li>
</ul>
<button className="relative z-10 w-full py-3 rounded-full bg-[#F5A625] text-white font-medium text-sm hover:bg-[#D98D1C] transition-colors shadow-[0_4px_14px_0_rgba(245,166,37,0.3)]">Choose Plan</button>
</div>

<div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-[#0F172A] mb-1">Enterprise</h3>
<p className="text-xs text-[#4B5563] mb-6">For medium &amp; large scale websites</p>
<div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#E2E8F0]">
<span className="text-3xl font-semibold tracking-tight text-[#0F172A]">₦200,000</span>
<span className="text-sm text-[#4B5563]">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-[#4B5563] flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full dedicated support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Continuous maintenance</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority feature integration</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Real-time backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Advanced analytics &amp; reporting</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SLA guarantee (99.9%)</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#E2E8F0] text-[#0F172A] font-medium text-sm hover:bg-[#F8F9FB] transition-colors">Choose Plan</button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto hidden" id="annual-plans">

<div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-[#0F172A] mb-1">Solo</h3>
<p className="text-xs text-[#4B5563] mb-6">For personal websites</p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-semibold tracking-tight text-[#0F172A]">₦168,000</span>
<span className="text-sm text-[#4B5563]">/yr</span>
</div>
<p className="text-xs text-[#4B5563] mb-3">per website</p>
<p className="text-xs font-medium text-[#10B981] mb-8 pb-8 border-b border-[#E2E8F0]">You're saving 30% vs monthly.</p>
<ul className="space-y-3 mb-8 text-sm text-[#4B5563] flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic technical support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Monthly maintenance updates</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Minor bug fixes</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Weekly backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Uptime monitoring</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Email support (48h response)</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#E2E8F0] text-[#0F172A] font-medium text-sm hover:bg-[#F8F9FB] transition-colors">Choose Plan</button>
</div>

<div className="bg-[#091728] rounded-3xl p-8 border border-[#132840] shadow-xl flex flex-col relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A625] opacity-10 blur-2xl rounded-full"></div>
<div className="flex justify-between items-start mb-1 relative z-10">
<h3 className="text-lg font-medium text-white">Pro</h3>
<span className="text-[10px] uppercase tracking-wider font-medium bg-[#F5A625]/20 text-[#F5A625] px-2 py-1 rounded-full border border-[#F5A625]/30">Most Popular</span>
</div>
<p className="text-xs text-gray-400 mb-6 relative z-10">For professional &amp; small business sites</p>
<div className="flex items-baseline gap-1 mb-2 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-white">₦504,000</span>
<span className="text-sm text-gray-400">/yr</span>
</div>
<p className="text-xs text-gray-400 mb-3 relative z-10">per website</p>
<p className="text-xs font-medium text-[#10B981] mb-8 pb-8 border-b border-white/10 relative z-10">You're saving 30% vs monthly.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-300 flex-grow relative z-10">
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Advanced technical support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Bi-weekly maintenance updates</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Feature integration</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Daily backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Uptime monitoring + alerts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#F5A625] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Analytics dashboard</li>
</ul>
<button className="relative z-10 w-full py-3 rounded-full bg-[#F5A625] text-white font-medium text-sm hover:bg-[#D98D1C] transition-colors shadow-[0_4px_14px_0_rgba(245,166,37,0.3)]">Choose Plan</button>
</div>

<div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-[#0F172A] mb-1">Enterprise</h3>
<p className="text-xs text-[#4B5563] mb-6">For medium &amp; large scale websites</p>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-semibold tracking-tight text-[#0F172A]">₦1,680,000</span>
<span className="text-sm text-[#4B5563]">/yr</span>
</div>
<p className="text-xs text-[#4B5563] mb-3">per website</p>
<p className="text-xs font-medium text-[#10B981] mb-8 pb-8 border-b border-[#E2E8F0]">You're saving 30% vs monthly.</p>
<ul className="space-y-3 mb-8 text-sm text-[#4B5563] flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full dedicated support</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Continuous maintenance</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority feature integration</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Real-time backups</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Advanced analytics &amp; reporting</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#10B981] mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SLA guarantee (99.9%)</li>
</ul>
<button className="w-full py-3 rounded-full border border-[#E2E8F0] text-[#0F172A] font-medium text-sm hover:bg-[#F8F9FB] transition-colors">Choose Plan</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#091728] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F5A625] opacity-5 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<img alt="SentryDog Logo" className="h-12 mb-6" src="https://sentrydog.co/assets/images/SDLogo-light.svg"/>
<p className="text-sm text-gray-400 max-w-xs mb-6">Your website is your business. We keep it secure, fast, and always online.</p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Features</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Uptime Monitoring</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Domain Tracking</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Simple Billing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Expert Support</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Service Level Agreement</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2024 SentryDog CyberSystems. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:shield-check-linear"></iconify-icon>
                    Secured by Paystack
                </div>
</div>
</div>
</footer>




    </>
  );
}
