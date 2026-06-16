import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for scroll reveals
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const delay = target.getAttribute('data-delay') || '0';
                        
                        setTimeout(() => {
                            target.classList.remove('opacity-0', 'translate-y-8', 'scale-95', '-translate-y-4');
                            // Specifically for the nav
                            target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                            
                            // Trigger Process Line animation when the section is visible
                            if(target.querySelector('#process-line')) {
                                setTimeout(() => {
                                    target.querySelector('#process-line').style.width = '100%';
                                }, 500);
                            }
                        }, parseInt(delay));
                        
                        observer.unobserve(target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[data-reveal]').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 mix-blend-difference text-white opacity-0 -translate-y-4 transition-all duration-1000 ease-out" data-reveal="">
<div className="text-xl tracking-tight font-medium">AluDoor<span className="text-zinc-500">.Pro</span></div>
<a className="hidden md:flex items-center gap-2 text-base font-medium hover:text-zinc-300 transition-colors" href="#contact">
<iconify-icon className="text-xl" icon="solar:chat-dots-linear"></iconify-icon>
            联系我们
        </a>
</nav>

<section className="relative bg-zinc-950 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
<div className="lg:col-span-6 space-y-8">
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-base shadow-lg shadow-black/20">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        现可预约上门测量
                    </div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                        专业铝门安装服务<br/>
<span className="text-zinc-500">住家・店面・办公室皆可</span>
</h1>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                        Aluminium Door Supply &amp; Installation Service. 从测量、定制到专业安装，为您提供高质感、耐用的门窗解决方案。
                    </p>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="400" data-reveal="">
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-zinc-950 px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]" href="#contact">
<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
<div className="relative h-full w-8 bg-black/10"></div>
</div>
<iconify-icon className="text-xl relative z-10" icon="solar:chat-dots-linear"></iconify-icon>
<span className="relative z-10">WhatsApp 免费估价</span>
</a>
<a className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-transparent border border-zinc-800 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 active:scale-[0.98]" href="#portfolio">
<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
<div className="relative h-full w-8 bg-white/5"></div>
</div>
<span className="relative z-10">查看真实案例</span>
</a>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="500" data-reveal="">
<div className="grid grid-cols-2 gap-4 pt-8 border-t border-zinc-800/50">
<div className="flex items-center gap-3 text-zinc-300 text-base group">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:ruler-linear"></iconify-icon>
                            免费上门测量
                        </div>
<div className="flex items-center gap-3 text-zinc-300 text-base group">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:settings-linear"></iconify-icon>
                            尺寸完全定制
                        </div>
<div className="flex items-center gap-3 text-zinc-300 text-base group">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:check-square-linear"></iconify-icon>
                            手工整齐干净
                        </div>
<div className="flex items-center gap-3 text-zinc-300 text-base group">
<iconify-icon className="text-xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:clock-circle-linear"></iconify-icon>
                            沟通直接回复快
                        </div>
</div>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="opacity-0 scale-95 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] overflow-hidden bg-zinc-900 relative group">
<img alt="Premium aluminium door installation" className="object-cover w-full h-full opacity-90 transition-transform duration-[2000ms] ease-out group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 border border-white/10 m-4 pointer-events-none transition-transform duration-700 group-hover:scale-[0.98]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 lg:px-12 bg-zinc-50 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">我们的服务项目</h2>
<p className="text-lg text-zinc-500 max-w-xl">无论您是翻新住家、装潢新店面，还是办公室隔间，我们都能提供合适的铝门解决方案。</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">推拉门 / 折叠门安装</h3>
<p className="text-lg text-zinc-600">节省空间的最佳选择，适合阳台、厨房分隔或商业空间，滑动顺畅，坚固耐用。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">厕所 / 浴室门</h3>
<p className="text-lg text-zinc-600">防水防潮的铝制边框搭配磨砂玻璃或定制面板，易于清洁且寿命长。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">店面 / 办公室门</h3>
<p className="text-lg text-zinc-600">提供专业、透视感强的商业级铝门，提升企业形象，配备安全门锁系统。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:refresh-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">更换旧门服务</h3>
<p className="text-lg text-zinc-600">专业拆除旧门框并清理现场，无缝安装全新铝门，不破坏现有墙面结构。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">上门测量与建议</h3>
<p className="text-lg text-zinc-600">师傅亲自上门评估现场环境，提供精准尺寸测量，并根据您的预算给出合理建议。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="group cursor-pointer p-6 -m-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 rounded-lg">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">多种款式定制</h3>
<p className="text-lg text-zinc-600">提供多种铝框颜色（黑、白、灰等）及玻璃材质（清玻璃、磨砂、压花）供您选择搭配。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3">
<div className="sticky top-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">为什么选择我们？</h2>
<p className="text-lg text-zinc-600 mb-8">我们不只是卖一扇门，更是提供一份安心。注重细节与沟通，确保最终成果符合您的期待。</p>
<a className="group inline-flex items-center gap-2 text-lg font-medium border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all duration-300" href="#contact">
                        立即咨询获取报价 
                        <iconify-icon className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:w-2/3 flex flex-col gap-12">
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="flex gap-6 md:gap-8 border-t border-zinc-200 pt-8 group hover:-translate-y-1 transition-transform duration-500">
<div className="text-4xl md:text-5xl font-medium text-zinc-300 tracking-tight group-hover:text-zinc-900 transition-colors duration-500">01</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">经验丰富的安装团队</h3>
<p className="text-lg text-zinc-600 leading-relaxed">我们的师傅拥有多年本地安装经验，熟悉各类建筑结构，能应对各种现场突发状况，确保安装稳固。</p>
</div>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<div className="flex gap-6 md:gap-8 border-t border-zinc-200 pt-8 group hover:-translate-y-1 transition-transform duration-500">
<div className="text-4xl md:text-5xl font-medium text-zinc-300 tracking-tight group-hover:text-zinc-900 transition-colors duration-500">02</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">手工整齐，收边干净</h3>
<p className="text-lg text-zinc-600 leading-relaxed">注重施工细节。安装后确保门框与墙面贴合完美，打胶均匀平滑，现场清理干净，绝不留下烂摊子。</p>
</div>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="flex gap-6 md:gap-8 border-t border-zinc-200 pt-8 group hover:-translate-y-1 transition-transform duration-500">
<div className="text-4xl md:text-5xl font-medium text-zinc-300 tracking-tight group-hover:text-zinc-900 transition-colors duration-500">03</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">沟通直接，报价透明</h3>
<p className="text-lg text-zinc-600 leading-relaxed">拒绝隐藏收费。我们在测量后会提供清晰的报价单，说明材质与施工项目，回复迅速，让您做决定无压力。</p>
</div>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="400" data-reveal="">
<div className="flex gap-6 md:gap-8 border-t border-zinc-200 pt-8 group hover:-translate-y-1 transition-transform duration-500">
<div className="text-4xl md:text-5xl font-medium text-zinc-300 tracking-tight group-hover:text-zinc-900 transition-colors duration-500">04</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">完全按需定制</h3>
<p className="text-lg text-zinc-600 leading-relaxed">没有任何现成的门能完美匹配所有空间。我们根据您的实际尺寸、预算和审美偏好，量身打造最合适的铝门。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-950 text-white px-6 lg:px-12" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">近期安装案例</h2>
<p className="text-lg text-zinc-400">实地拍摄的施工完成图，展现我们的真实工艺水准。</p>
</div>
<div className="text-zinc-500 font-medium tracking-wide text-base">PROJECT GALLERY</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="group relative aspect-square overflow-hidden bg-zinc-900 rounded-lg">
<img alt="Living room sliding door" className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1500ms] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
<div className="text-2xl font-medium tracking-tight mb-1">客厅黑框推拉门</div>
<div className="text-base text-zinc-400">住家项目 • 扩大空间感</div>
</div>
</div>
</div>

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out md:row-span-2" data-delay="200" data-reveal="">
<div className="group relative aspect-square md:aspect-auto h-full overflow-hidden bg-zinc-900 rounded-lg">
<img alt="Office partition doors" className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1500ms] ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
<div className="text-2xl font-medium tracking-tight mb-1">办公室玻璃隔间门</div>
<div className="text-base text-zinc-400">商业项目 • 采光最大化</div>
</div>
</div>
</div>

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="group relative aspect-square overflow-hidden bg-zinc-900 rounded-lg">
<img alt="Bathroom folding door" className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1500ms] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
<div className="text-2xl font-medium tracking-tight mb-1">浴室铝框折叠门</div>
<div className="text-base text-zinc-400">住家项目 • 节省空间</div>
</div>
</div>
</div>

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="group relative aspect-square overflow-hidden bg-zinc-900 rounded-lg">
<img alt="Kitchen swing door" className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1500ms] ease-out" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
<div className="text-2xl font-medium tracking-tight mb-1">厨房防油烟平开门</div>
<div className="text-base text-zinc-400">住家项目 • 密封性高</div>
</div>
</div>
</div>

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="group relative aspect-square overflow-hidden bg-zinc-900 rounded-lg">
<img alt="Shopfront door" className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[1500ms] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
<div className="text-2xl font-medium tracking-tight mb-1">咖啡厅店面大门</div>
<div className="text-base text-zinc-400">店面项目 • 高级灰边框</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<a className="group relative overflow-hidden inline-flex items-center gap-2 border border-zinc-700 hover:border-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-[0.98]" href="#contact">
                    喜欢这些效果？立即联系我们
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12">
<div className="max-w-4xl mx-auto text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">服务流程，简单四步</h2>
<p className="text-lg text-zinc-600">从第一条消息到安装完成，我们致力于让您的体验轻松无负担。</p>
</div>
<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">

<div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-[1px] bg-zinc-100 -z-10">
<div className="h-full bg-zinc-900 w-0 transition-all duration-[2000ms] ease-out" id="process-line"></div>
</div>

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 group-hover:border-zinc-900 group-hover:shadow-xl transition-all duration-500 relative z-10 group-hover:-translate-y-2">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:chat-square-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-wider text-zinc-400 mb-2">STEP 01</div>
<h3 className="text-xl font-medium tracking-tight mb-3">私讯 / 发送需求</h3>
<p className="text-base text-zinc-600 px-4">通过 WhatsApp 联系我们，简单描述您需要的门类型和大概尺寸。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="300" data-reveal="">
<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 group-hover:border-zinc-900 group-hover:shadow-xl transition-all duration-500 relative z-10 group-hover:-translate-y-2">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:calculator-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-wider text-zinc-400 mb-2">STEP 02</div>
<h3 className="text-xl font-medium tracking-tight mb-3">建议与初步报价</h3>
<p className="text-base text-zinc-600 px-4">我们会根据您的需求提供专业建议，并给出一个透明的初步估价。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="500" data-reveal="">
<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 group-hover:border-zinc-900 group-hover:shadow-xl transition-all duration-500 relative z-10 group-hover:-translate-y-2">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-wider text-zinc-400 mb-2">STEP 03</div>
<h3 className="text-xl font-medium tracking-tight mb-3">上门测量 &amp; 确认</h3>
<p className="text-base text-zinc-600 px-4">安排师傅上门精确测量尺寸，确认最终款式细节，准备定制。</p>
</div>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="700" data-reveal="">
<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 group-hover:border-zinc-900 group-hover:shadow-xl transition-all duration-500 relative z-10 group-hover:-translate-y-2">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:hammer-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold tracking-wider text-zinc-400 mb-2">STEP 04</div>
<h3 className="text-xl font-medium tracking-tight mb-3">专业上门安装</h3>
<p className="text-base text-zinc-600 px-4">在约定的时间上门安装，施工整齐干净，完成后交接验收。</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50 px-6 lg:px-12">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">常见问题解答</h2>
<p className="text-lg text-zinc-600">如果您有其他疑问，欢迎随时私讯我们。</p>
</div>
<div className="space-y-4">

<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<details className="group bg-white border border-zinc-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer text-xl tracking-tight list-none">
<span>有提供免费报价吗？</span>
<span className="transition-transform duration-500 group-open:rotate-180 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-lg text-zinc-600 mt-4 leading-relaxed animate-[fadeIn_0.5s_ease-out]">
                            是的，我们提供免费的初步估价。您只需要拍下需要安装门的位置照片，并提供大概的尺寸发给我们的 WhatsApp，我们就能尽快为您报个大概价格供您参考。
                        </div>
</details>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="150" data-reveal="">
<details className="group bg-white border border-zinc-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer text-xl tracking-tight list-none">
<span>有做上门测量吗？收费吗？</span>
<span className="transition-transform duration-500 group-open:rotate-180 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-lg text-zinc-600 mt-4 leading-relaxed">
                            我们提供免费的上门测量服务（限服务区域内）。在您觉得初步报价合理，并有意愿进行下一步时，我们会安排专业师傅上门精确测量。
                        </div>
</details>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<details className="group bg-white border border-zinc-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer text-xl tracking-tight list-none">
<span>门可以定制尺寸和颜色吗？</span>
<span className="transition-transform duration-500 group-open:rotate-180 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-lg text-zinc-600 mt-4 leading-relaxed">
                            当然可以。我们所有的铝门都是根据您现场的实际尺寸定制生产的。铝框有黑色、白色、深灰色等多种选择，玻璃也可选择透明、磨砂或压花玻璃。
                        </div>
</details>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="250" data-reveal="">
<details className="group bg-white border border-zinc-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer text-xl tracking-tight list-none">
<span>从下订到安装通常要多久？</span>
<span className="transition-transform duration-500 group-open:rotate-180 text-zinc-400 group-hover:text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-lg text-zinc-600 mt-4 leading-relaxed">
                            通常在完成上门测量并确认订单细节后，定制生产需要约 7-14 个工作日。制作完成后，我们会与您预约合适的时间进行上门安装，安装过程通常在半天到一天内完成。
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-zinc-950 text-white text-center relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-3xl mx-auto space-y-8 relative z-10">
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-reveal="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                    准备好为您的空间换上新门了吗？
                </h2>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="100" data-reveal="">
<p className="text-xl text-zinc-400">
                    告诉我们您的需求，获取免费报价。专业团队准备随时为您提供上门测量与安装服务。
                </p>
</div>
<div className="opacity-0 translate-y-8 transition-all duration-1000 ease-out" data-delay="200" data-reveal="">
<div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
<a className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-zinc-950 px-10 py-5 text-xl font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-[0.98] rounded-sm" href="#">
<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
<div className="relative h-full w-8 bg-black/10"></div>
</div>
<iconify-icon className="text-2xl relative z-10" icon="solar:chat-dots-linear"></iconify-icon>
<span className="relative z-10">WhatsApp 立即咨询</span>
</a>
</div>
<p className="text-base text-zinc-500 mt-6 font-medium">
                    回复迅速 • 无隐藏收费 • 免费初步估价
                </p>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-500 border-t border-zinc-900 py-12 px-6 lg:px-12 text-center text-base">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2024 AluDoor.Pro. All rights reserved.</div>
<div className="flex gap-6">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">专业铝门定制</span>
<span className="hover:text-zinc-300 transition-colors cursor-pointer">上门安装服务</span>
</div>
</div>
</footer>



    </>
  );
}
