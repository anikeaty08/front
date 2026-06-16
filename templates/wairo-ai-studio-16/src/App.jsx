import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif'],
},
colors: {
lime: {
400: '#BFFF0B',
500: '#A8E600',
},
dark: {
900: '#0A0A0A',
800: '#111111',
700: '#1A1A1A',
600: '#252525',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'glow': 'glow 2s ease-in-out infinite alternate',
'gradient': 'gradient 8s ease infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-20px)' },
},
glow: {
'0%': { boxShadow: '0 0 20px rgba(191, 255, 11, 0.3)' },
'100%': { boxShadow: '0 0 40px rgba(191, 255, 11, 0.6)' },
},
gradient: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center">
<iconify-icon className="text-dark-900 text-xl" icon="lucide:bot" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight">Wairo<span className="text-lime-400">.ai</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="bg-lime-400 text-dark-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-lime-500 transition-all btn-glow">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 mesh-gradient grid-pattern">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
<span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
<span className="text-sm text-zinc-400">Now accepting new clients for Q1 2025</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[0.95]">
                        AI automation partner for businesses that <span className="text-gradient">innovate fast</span> and scale smart.
                    </h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                        We build intelligent chatbots, automate workflows, and create custom AI solutions that reduce costs by 50% while supercharging your team's productivity.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group bg-lime-400 text-dark-900 px-8 py-4 rounded-full text-base font-medium hover:bg-lime-500 transition-all btn-glow flex items-center justify-center gap-2">
                            Start Your AI Journey
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="group border border-zinc-700 text-white px-8 py-4 rounded-full text-base font-medium hover:border-zinc-500 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon>
                            View Our Work
                        </button>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative animate-float">

<div className="glass-card rounded-3xl p-4 max-w-sm mx-auto">
<div className="bg-dark-800 rounded-2xl overflow-hidden">

<div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:building-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Malta Property AI</p>
<p className="text-emerald-200 text-xs">Online • AI Assistant</p>
</div>
</div>

<div className="p-4 space-y-3 min-h-[300px]">
<div className="flex justify-end">
<div className="bg-emerald-600 text-white px-4 py-2 rounded-2xl rounded-tr-md text-sm max-w-[80%]">
                                            Hi! I'm looking for a 2-bedroom apartment in Sliema
                                        </div>
</div>
<div className="flex justify-start">
<div className="bg-dark-600 text-white px-4 py-2 rounded-2xl rounded-tl-md text-sm max-w-[80%]">
                                            Great choice! 🏠 I found 12 properties matching your criteria in Sliema. What's your budget range?
                                        </div>
</div>
<div className="flex justify-end">
<div className="bg-emerald-600 text-white px-4 py-2 rounded-2xl rounded-tr-md text-sm max-w-[80%]">
                                            Around €1,200-1,500/month
                                        </div>
</div>
<div className="flex justify-start">
<div className="bg-dark-600 text-white px-4 py-2 rounded-2xl rounded-tl-md text-sm max-w-[80%]">
                                            Perfect! Here are 3 top picks with virtual tours available. Would you like to schedule a viewing? 📅
                                        </div>
</div>
<div className="flex items-center gap-2 text-zinc-500 text-xs">
<iconify-icon icon="lucide:bot" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>AI is typing...</span>
<span className="flex gap-1">
<span className="w-1 h-1 bg-lime-400 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
<span className="w-1 h-1 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
</span>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 glass-card-lime px-4 py-2 rounded-full">
<span className="text-lime-400 text-sm font-medium">24/7 Active</span>
</div>

<div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-xl">
<p className="text-2xl font-semibold text-lime-400">90%</p>
<p className="text-xs text-zinc-400">Faster Response</p>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-12 border-t border-white/5">
<p className="text-sm text-zinc-500 text-center mb-8">Trusted by innovative businesses across Europe</p>
<div className="relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>
<div className="flex animate-marquee">
<div className="flex items-center gap-16 px-8">
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M21.044 12.288c0 .5-.343.867-.815.867c-.464 0-.827-.38-.827-.867c0-.51.343-.868.815-.868c.464 0 .827.381.827.868m-14.305-.92a.79.79 0 0 0-.651.307a1 1 0 0 0-.172.738l1.479-.614a.71.71 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868c0 .486.364.867.828.867c.472 0 .815-.368.815-.867c0-.487-.363-.868-.827-.868M24 7.997v8.006H0V7.997zM5.01 13.05H3.088V9.825H2.23v4.003h2.78zm1.137-.094l2.163-.897a1.67 1.67 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505c-.931 0-1.633.686-1.633 1.593c0 .93.704 1.593 1.726 1.593c.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326c-.292 0-.52-.09-.682-.25m5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651c.35 0 .712.243.712.651v1.753h.847zm3.647.37c0-.904-.725-1.593-1.65-1.593c-.933 0-1.663.7-1.663 1.593c0 .903.726 1.592 1.651 1.592c.932 0 1.662-.7 1.662-1.592m2.066 1.54l1.268-3.081h-.967l-.765 2.099l-.765-2.1h-.966l1.268 3.081zm4.449-1.54c0-.904-.725-1.593-1.65-1.593c-.932 0-1.662.7-1.662 1.593c0 .903.725 1.592 1.65 1.592c.932 0 1.662-.7 1.662-1.592" fill="currentColor"></path></svg>
</div>
</div>
<div className="flex items-center gap-16 px-8">
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
</div>
<div className="glass-card w-40 h-16 rounded-xl flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<svg className="text-white" height="20" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M21.044 12.288c0 .5-.343.867-.815.867c-.464 0-.827-.38-.827-.867c0-.51.343-.868.815-.868c.464 0 .827.381.827.868m-14.305-.92a.79.79 0 0 0-.651.307a1 1 0 0 0-.172.738l1.479-.614a.71.71 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868c0 .486.364.867.828.867c.472 0 .815-.368.815-.867c0-.487-.363-.868-.827-.868M24 7.997v8.006H0V7.997zM5.01 13.05H3.088V9.825H2.23v4.003h2.78zm1.137-.094l2.163-.897a1.67 1.67 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505c-.931 0-1.633.686-1.633 1.593c0 .93.704 1.593 1.726 1.593c.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326c-.292 0-.52-.09-.682-.25m5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651c.35 0 .712.243.712.651v1.753h.847zm3.647.37c0-.904-.725-1.593-1.65-1.593c-.933 0-1.663.7-1.663 1.593c0 .903.726 1.592 1.651 1.592c.932 0 1.662-.7 1.662-1.592m2.066 1.54l1.268-3.081h-.967l-.765 2.099l-.765-2.1h-.966l1.268 3.081zm4.449-1.54c0-.904-.725-1.593-1.65-1.593c-.932 0-1.662.7-1.662 1.593c0 .903.725 1.592 1.65 1.592c.932 0 1.662-.7 1.662-1.592" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-dark-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center lg:text-left">
<p className="text-3xl md:text-4xl font-semibold text-lime-400 tracking-tight">10 years</p>
<p className="text-sm text-zinc-400 mt-2">Combined AI &amp; automation experience</p>
</div>
<div className="text-center lg:text-left">
<p className="text-3xl md:text-4xl font-semibold text-lime-400 tracking-tight">300+</p>
<p className="text-sm text-zinc-400 mt-2">Workflows built and deployed</p>
</div>
<div className="text-center lg:text-left">
<p className="text-3xl md:text-4xl font-semibold text-lime-400 tracking-tight">€5.5M+</p>
<p className="text-sm text-zinc-400 mt-2">Value generated for clients</p>
</div>
<div className="text-center lg:text-left">
<p className="text-3xl md:text-4xl font-semibold text-lime-400 tracking-tight">90%+</p>
<p className="text-sm text-zinc-400 mt-2">Client satisfaction rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Featured Projects</h2>
<p className="text-zinc-400 mt-4 max-w-xl">Real solutions delivering real results for businesses across industries.</p>
</div>
<div className="hidden md:flex gap-3">
<button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors" onclick="rotateCarousel(-1)">
<iconify-icon icon="lucide:arrow-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition-colors" onclick="rotateCarousel(1)">
<iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center perspective-1000">

<div className="carousel-card active w-full lg:w-3/4 h-full glass-card rounded-3xl p-3 spotlight-card" id="card-0" onmousemove="handleSpotlight(event)">
<div className="w-full h-full bg-dark-700 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20 flex gap-2">
<span className="bg-lime-400/20 text-lime-400 px-3 py-1 rounded-full text-xs font-medium border border-lime-400/30">Chatbot</span>
<span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">WhatsApp API</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-emerald-900/30 to-dark-800 flex items-center justify-center p-8">
<div className="glass-card rounded-2xl p-4 max-w-xs transform group-hover:scale-105 transition-transform duration-500">
<div className="bg-dark-800 rounded-xl overflow-hidden">
<div className="bg-emerald-600 px-3 py-2 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-xs">Malta Property AI</p>
<p className="text-emerald-200 text-[10px]">Active now</p>
</div>
</div>
<div className="p-3 space-y-2">
<div className="bg-dark-600 text-white px-3 py-1.5 rounded-xl text-xs max-w-[85%]">
                                            Welcome! Looking for property in Malta? 🏠
                                        </div>
<div className="flex justify-end">
<div className="bg-emerald-600 text-white px-3 py-1.5 rounded-xl text-xs">
                                                Yes, 2BR in Sliema
                                            </div>
</div>
<div className="bg-dark-600 text-white px-3 py-1.5 rounded-xl text-xs max-w-[85%]">
                                            Found 12 matches! Budget range?
                                        </div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
<h3 className="text-xl font-semibold">Malta Real Estate AI Assistant</h3>
<p className="text-zinc-400 text-sm mt-2">24/7 automated property inquiries and lead qualification</p>
</div>
</div>
</div>

<div className="carousel-card next w-full lg:w-3/4 h-full glass-card rounded-3xl p-3 spotlight-card" id="card-1" onmousemove="handleSpotlight(event)">
<div className="w-full h-full bg-dark-700 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20 flex gap-2">
<span className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30">Automation</span>
<span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">Lead Gen</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-dark-800 flex items-center justify-center p-8">
<div className="glass-card rounded-2xl p-6 max-w-sm transform group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:linkedin" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">LinkedIn Automation</p>
<p className="text-zinc-400 text-xs">500% growth achieved</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-zinc-400 text-xs">Connections</span>
<span className="text-lime-400 font-medium text-sm">+2,847</span>
</div>
<div className="h-2 bg-dark-600 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-lime-400 to-teal-400 rounded-full" style={{width: '85%'}}></div>
</div>
<div className="flex items-center justify-between">
<span className="text-zinc-400 text-xs">Response Rate</span>
<span className="text-lime-400 font-medium text-sm">34%</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
<h3 className="text-xl font-semibold">LinkedIn Growth Automation</h3>
<p className="text-zinc-400 text-sm mt-2">Scaled outreach by 500% while maintaining personal touch</p>
</div>
</div>
</div>

<div className="carousel-card prev w-full lg:w-3/4 h-full glass-card rounded-3xl p-3 spotlight-card" id="card-2" onmousemove="handleSpotlight(event)">
<div className="w-full h-full bg-dark-700 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20 flex gap-2">
<span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30">n8n</span>
<span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">Workflow</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-dark-800 flex items-center justify-center p-8">
<div className="glass-card rounded-2xl p-6 max-w-sm transform group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="lucide:workflow" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="lucide:database" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-8 h-8 rounded bg-lime-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 bg-lime-400 rounded-full"></span>
<span className="text-zinc-300">Auto-sync enabled</span>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 bg-lime-400 rounded-full"></span>
<span className="text-zinc-300">50+ triggers active</span>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 bg-lime-400 rounded-full"></span>
<span className="text-zinc-300">Real-time processing</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
<h3 className="text-xl font-semibold">E-commerce Workflow Automation</h3>
<p className="text-zinc-400 text-sm mt-2">End-to-end order processing with zero manual intervention</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-8 mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">How we works</h2>
<div className="flex items-center gap-4">
<div className="w-px h-10 bg-zinc-700"></div>
<p className="text-zinc-400">Three simple steps to automate your business</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 relative group hover:border-lime-400/30 transition-colors spotlight-card" onmousemove="handleSpotlight(event)">
<span className="absolute -top-4 left-8 bg-dark-800 border border-zinc-700 px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400">STEP 1</span>
<div className="h-48 bg-dark-700 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
<div className="relative">
<div className="w-20 h-20 rounded-2xl bg-lime-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-lime-400 text-3xl" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center">
<iconify-icon className="text-dark-900 text-sm" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Analyze</h3>
<p className="text-zinc-400 leading-relaxed">Deep dive into your workflows. We audit your processes and identify AI opportunities that deliver 10x ROI.</p>
</div>

<div className="glass-card rounded-3xl p-8 relative group hover:border-lime-400/30 transition-colors spotlight-card" onmousemove="handleSpotlight(event)">
<span className="absolute -top-4 left-8 bg-dark-800 border border-zinc-700 px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400">STEP 2</span>
<div className="h-48 bg-dark-700 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
<div className="relative">
<div className="w-20 h-20 rounded-2xl bg-teal-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-teal-400 text-3xl" icon="lucide:rocket" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
<iconify-icon className="text-dark-900 text-sm" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Build &amp; Deploy</h3>
<p className="text-zinc-400 leading-relaxed">Custom AI solutions built on n8n, Supabase, and cutting-edge LLMs. Seamless integration with your existing stack.</p>
</div>

<div className="glass-card rounded-3xl p-8 relative group hover:border-lime-400/30 transition-colors spotlight-card" onmousemove="handleSpotlight(event)">
<span className="absolute -top-4 left-8 bg-dark-800 border border-zinc-700 px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400">STEP 3</span>
<div className="h-48 bg-dark-700 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
<div className="relative">
<div className="w-20 h-20 rounded-2xl bg-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400 text-3xl" icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
<iconify-icon className="text-dark-900 text-sm" icon="lucide:infinity" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Scale &amp; Optimize</h3>
<p className="text-zinc-400 leading-relaxed">Continuous optimization and scaling. Your AI systems evolve as your business grows.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-teal-400/10"></div>
<div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12 relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 px-4 py-2 rounded-full">
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lime-400 text-sm font-medium">Case Study - PropTech</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                            Redesigned customer service with AI chatbots. Result: <span className="text-gradient">90% faster response times</span>, higher retention, stronger sales demos.
                        </h2>
<div className="grid grid-cols-2 gap-6">
<div className="glass-card rounded-xl p-4">
<p className="text-3xl font-semibold text-lime-400">90%</p>
<p className="text-sm text-zinc-400 mt-1">Faster response time</p>
</div>
<div className="glass-card rounded-xl p-4">
<p className="text-3xl font-semibold text-lime-400">24/7</p>
<p className="text-sm text-zinc-400 mt-1">Availability</p>
</div>
<div className="glass-card rounded-xl p-4">
<p className="text-3xl font-semibold text-lime-400">€20k</p>
<p className="text-sm text-zinc-400 mt-1">Monthly savings</p>
</div>
<div className="glass-card rounded-xl p-4">
<p className="text-3xl font-semibold text-lime-400">100%</p>
<p className="text-sm text-zinc-400 mt-1">Customer satisfaction</p>
</div>
</div>
<button className="group bg-lime-400 text-dark-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-lime-500 transition-all flex items-center gap-2">
                            Read Full Case Study
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex items-center justify-center">
<div className="glass-card rounded-2xl p-4 max-w-sm">
<div className="bg-dark-800 rounded-xl overflow-hidden">
<div className="bg-lime-400 px-4 py-3 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-dark-900/20 flex items-center justify-center">
<iconify-icon className="text-dark-900" icon="lucide:building-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-dark-900 font-medium text-sm">PropertyAI Bot</p>
<p className="text-dark-900/60 text-xs">Handling 500+ daily queries</p>
</div>
</div>
<div className="p-4 space-y-3">
<div className="bg-dark-600 text-white px-4 py-2 rounded-2xl rounded-tl-md text-sm max-w-[85%]">
                                        Hi! I can help you find your dream property. What are you looking for today?
                                    </div>
<div className="flex justify-end">
<div className="bg-lime-400 text-dark-900 px-4 py-2 rounded-2xl rounded-tr-md text-sm">
                                            3BR house with garden
                                        </div>
</div>
<div className="bg-dark-600 text-white px-4 py-2 rounded-2xl rounded-tl-md text-sm max-w-[85%]">
                                        Great! I found 8 properties matching your criteria. Would you like to see them or schedule viewings?
                                    </div>
<div className="flex gap-2 mt-2">
<button className="bg-lime-400/20 text-lime-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-lime-400/30">Show Properties</button>
<button className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/20">Schedule Viewing</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Why startups choose Wairo AI Studio</h2>
<p className="text-zinc-400 leading-relaxed">We combine deep AI expertise with startup speed. No enterprise bureaucracy, just results.</p>
</div>
<div className="lg:col-span-8">
<div className="grid sm:grid-cols-2 gap-4">

<div className="glass-card rounded-2xl p-6 hover:border-lime-400/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Built for speed</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Launch your AI automation in weeks, not months. We specialize in rapid MVP deployment.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:border-lime-400/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:euro" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Maximum ROI, minimum spend</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Average 50% cost reduction. Most clients break even within 90 days.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:border-lime-400/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">EU-compliant &amp; secure</h3>
<p className="text-zinc-400 text-sm leading-relaxed">GDPR-ready solutions. Your data stays protected across all EU operations.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:border-lime-400/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center mb-4 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:puzzle" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Seamless integration</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Works with your existing tools: WhatsApp, LinkedIn, CRMs, databases, and more.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:border-lime-400/30 transition-colors group sm:col-span-2">
<div className="flex flex-col sm:flex-row gap-6">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-lime-400 text-xl" icon="lucide:headphones" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">24/7 AI + human support</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Unlike agencies that deliver and disappear, we provide ongoing optimization and support. Your success is our success.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 mb-12">
<div className="lg:col-span-4 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">What we do</h2>
<p className="text-zinc-400 leading-relaxed">Different industries, same obsession for perfect AI solutions and quick ROI.</p>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="space-y-3">
<div className="glass-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-lime-400/10 flex items-center justify-center">
<iconify-icon className="text-lime-400" icon="lucide:bot" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">AI Chatbots</span>
</div>
<div className="glass-card rounded-2xl p-6">
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                WhatsApp Business automation
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Customer service bots
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Lead qualification systems
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Multi-language support
                            </li>
</ul>
</div>
</div>

<div className="space-y-3">
<div className="glass-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center">
<iconify-icon className="text-teal-400" icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Content Creation</span>
</div>
<div className="glass-card rounded-2xl p-6">
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                AI-powered copywriting
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Social media automation
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Marketing campaigns
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                SEO-optimized articles
                            </li>
</ul>
</div>
</div>

<div className="space-y-3">
<div className="glass-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center">
<iconify-icon className="text-purple-400" icon="lucide:workflow" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Workflow Automation</span>
</div>
<div className="glass-card rounded-2xl p-6">
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                n8n workflow development
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                CRM automation
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Data synchronization
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Process optimization
                            </li>
</ul>
</div>
</div>

<div className="space-y-3">
<div className="glass-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center">
<iconify-icon className="text-orange-400" icon="lucide:brain" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Custom LLM</span>
</div>
<div className="glass-card rounded-2xl p-6">
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Industry-specific AI models
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Proprietary knowledge bases
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Custom training &amp; fine-tuning
                            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                                API integration
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 mb-12">
<div className="lg:col-span-4 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Growth for startups shipping fast.</h2>
<p className="text-zinc-400 leading-relaxed">Join innovative businesses using AI to automate repetitive tasks, scale faster, and focus on what matters.</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 hover:border-zinc-600 transition-colors">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">Starter</h3>
<p className="text-zinc-400 text-sm">Perfect for small teams getting started</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold">€999</span>
<span className="text-zinc-400">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">1 AI chatbot or workflow</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Up to 5,000 interactions/month</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Basic integrations (3 platforms)</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Email support</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Monthly optimization</span>
</li>
</ul>
<button className="w-full border border-zinc-700 text-white py-3 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-colors">
                        Get Started
                    </button>
</div>

<div className="glass-card-lime rounded-3xl p-8 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-lime-400 text-dark-900 px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">Scale</h3>
<p className="text-zinc-400 text-sm">For growing businesses ready to automate</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-lime-400">€2,499</span>
<span className="text-zinc-400">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">3 AI solutions (chatbots + workflows)</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Up to 25,000 interactions/month</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Advanced integrations (unlimited)</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Priority support</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Weekly optimization + analytics</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Custom AI training</span>
</li>
</ul>
<button className="w-full bg-lime-400 text-dark-900 py-3 rounded-full font-medium hover:bg-lime-500 transition-colors btn-glow">
                        Get Started
                    </button>
</div>

<div className="glass-card rounded-3xl p-8 hover:border-zinc-600 transition-colors">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">Enterprise</h3>
<p className="text-zinc-400 text-sm">Custom solutions for large organizations</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold">Let's talk</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Unlimited AI solutions</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Unlimited interactions</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">White-label options</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Dedicated AI engineer</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">24/7 support</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-zinc-300">Custom SLA</span>
</li>
</ul>
<button className="w-full border border-zinc-700 text-white py-3 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>

<div className="mt-12 glass-card rounded-2xl p-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-lime-400 text-2xl" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="font-medium">All plans include</p>
<p className="text-zinc-400 text-sm">n8n workflows • Supabase setup • AI model integration • 30-day money-back guarantee</p>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-400">
<iconify-icon className="text-lime-400" icon="lucide:lock" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Checkout powered by Stripe
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Testimonials.</h2>
<p className="text-zinc-400 mt-4">Real stories, real success from businesses we've transformed.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card rounded-3xl p-8 hover:border-lime-400/30 transition-colors">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
</div>
<p className="text-lg leading-relaxed mb-8">"Wairo transformed our customer strategy. Their AI chatbot handles 80% of inquiries, allowing our team to focus on complex cases. <span className="text-lime-400">ROI was visible within the first month.</span>"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center text-dark-900 font-semibold">
                            SJ
                        </div>
<div>
<p className="font-medium">Sarah Johnson</p>
<p className="text-zinc-400 text-sm">CEO, PropTech Startup</p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 hover:border-lime-400/30 transition-colors">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
<iconify-icon className="text-lime-400" icon="lucide:star" style={{strokeWidth: '1.5', fill: '#BFFF0B'}}></iconify-icon>
</div>
<p className="text-lg leading-relaxed mb-8">"The AI automation saved us <span className="text-lime-400">€20k monthly</span> and cut our response time from 4 hours to 4 minutes. Best investment we've made this year."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-purple-400 flex items-center justify-center text-dark-900 font-semibold">
                            MB
                        </div>
<div>
<p className="font-medium">Marco Borg</p>
<p className="text-zinc-400 text-sm">Operations Director, Real Estate Agency Malta</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-800" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 space-y-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Frequency Asked Questions</h2>
<p className="text-zinc-400 leading-relaxed">Everything you need to know about our AI solutions. Can't find the answer? <a className="text-lime-400 hover:underline" href="#contact">Chat with us</a>.</p>
</div>
<div className="lg:col-span-8">
<div className="space-y-4">

<div className="glass-card rounded-2xl overflow-hidden">
<button className="w-full p-6 text-left flex items-center justify-between group" onclick="toggleFaq(this)">
<span className="font-medium">Can this help my SaaS/service business?</span>
<iconify-icon className="text-zinc-400 group-hover:text-lime-400 transition-all faq-icon" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="px-6 pb-6 hidden faq-content">
<p className="text-zinc-400 leading-relaxed">Absolutely. We've built AI solutions for SaaS, real estate, e-commerce, agencies, and consultancies across EU/UK/USA. Our chatbots and workflows are designed to handle customer inquiries, automate repetitive tasks, and scale your operations efficiently.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden">
<button className="w-full p-6 text-left flex items-center justify-between group" onclick="toggleFaq(this)">
<span className="font-medium">I'm just the idea person, can you help?</span>
<iconify-icon className="text-zinc-400 group-hover:text-lime-400 transition-all faq-icon" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="px-6 pb-6 hidden faq-content">
<p className="text-zinc-400 leading-relaxed">Yes! We handle everything from strategy to deployment. You focus on your business, we build your AI infrastructure. We'll guide you through the process and ensure you understand exactly how your AI solutions work.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden">
<button className="w-full p-6 text-left flex items-center justify-between group" onclick="toggleFaq(this)">
<span className="font-medium">Do you take equity/revenue share?</span>
<iconify-icon className="text-zinc-400 group-hover:text-lime-400 transition-all faq-icon" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="px-6 pb-6 hidden faq-content">
<p className="text-zinc-400 leading-relaxed">We work on monthly retainers or project-based pricing. No equity required unless you prefer that arrangement. This keeps things simple and aligned with your business goals.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden">
<button className="w-full p-6 text-left flex items-center justify-between group" onclick="toggleFaq(this)">
<span className="font-medium">I'm not sure where to start?</span>
<iconify-icon className="text-zinc-400 group-hover:text-lime-400 transition-all faq-icon" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="px-6 pb-6 hidden faq-content">
<p className="text-zinc-400 leading-relaxed">Book a free 30-minute AI audit call. We'll analyze your workflows and show you exactly where AI can help. No commitment required—just valuable insights you can act on immediately.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="glass-card-lime rounded-3xl p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-transparent to-teal-400/20"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to automate your business?</h2>
<p className="text-zinc-400 mb-8 max-w-xl mx-auto">Book a free 30-minute AI audit call. We'll analyze your workflows and show you exactly where AI can deliver 10x RO</p></div></div></div></section>
    </>
  );
}
