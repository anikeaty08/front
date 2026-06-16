import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        // Configuration matching Alcove style (subtle, slow, upward drift)
        const particleCount = 60;
        const speed = 0.2;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.reset(true);
            }
            
            reset(initial = false) {
                this.x = Math.random() * width;
                this.y = initial ? Math.random() * height : height + 10;
                this.size = Math.random() * 2 + 0.5; // Small, subtle dots
                this.speedY = Math.random() * speed + 0.1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.fade = false;
            }
            
            update() {
                this.y -= this.speedY;
                
                // Fade out near top
                if (this.y < height * 0.2) {
                    this.opacity -= 0.005;
                }
                
                if (this.y < 0 || this.opacity <= 0) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function init() {
            resize();
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            loop();
        }
        
        function loop() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(loop);
        }
        
        window.addEventListener('resize', resize);
        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas height="759" id="particles" width="1072"></canvas>

<div className="fixed bottom-[-20vh] left-0 right-0 h-[60vh] w-full horizon-glow pointer-events-none z-[1]"></div>

<div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-[0]"></div>
<div className="fixed bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-[0]"></div>


<main className="flex flex-col w-full max-w-3xl z-10 mr-auto ml-auto pt-20 pr-6 pb-32 pl-6 relative gap-x-24 gap-y-10">

<section className="flex flex-col min-h-[60vh] text-center gap-x-8 gap-y-0 items-center justify-center">

<iconify-icon className="text-neutral-500" height="96" icon="ri:twitter-x-line" style={{color: 'rgb(115, 115, 115)'}} width="96"></iconify-icon>

<div className="pt-0 pb-4 space-y-4">
<h1 className="md:text-6xl text-gradient leading-[1.1] text-5xl font-medium tracking-tight pt-2 pb-2" style={{}}>Stopped Working</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-400 max-w-xl mr-auto ml-auto">
      You're commenting, retweeting, and doing S4S. But your subscriber count is flat.
      <span className="text-gray-200">There is a better system.</span>
</p>
<div className="inline-flex text-xs font-medium text-[#00AFF0] tracking-wide bg-[#00AFF0]/10 border-[#00AFF0]/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">2026 CREATOR GUIDE</div>
</div>
<div className="reveal flex md:gap-4 bg-neutral-900/30 border-white/5 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm gap-x-6 gap-y-2 items-center justify-center">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500">
</div>
<iconify-icon className="z-10 relative" height="40" icon="skill-icons:instagram" style={{color: 'rgb(255, 255, 255)'}} width="40"></iconify-icon>
</div>

<iconify-icon className="md:text-4xl text-3xl text-neutral-500" height="30" icon="solar:add-circle-linear" style={{color: 'rgb(115, 115, 115)'}} width="30"></iconify-icon>

<div className="group relative">
<div className="absolute inset-0 bg-[#00aff0] opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500">
</div>
<iconify-icon className="z-10 relative" height="40" icon="simple-icons:onlyfans" style={{color: '#00aff0'}} width="40"></iconify-icon>
</div>

<span className="md:text-4xl text-3xl font-light text-neutral-500">=</span>

<div className="md:text-4xl filter text-5xl drop-shadow-lg">
      💰
    </div>
</div>

<div className="animate-bounce opacity-50 mt-8">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-down-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
<div className="text-[10px] uppercase tracking-widest mt-2 text-gray-500">Scroll to learn</div>
</div>
</section><div className="text-left pt-2 pb-2 pl-0">
<h2 className="md:text-3xl text-2xl font-medium text-white tracking-tight text-center mb-4">The truth about Twitter</h2>
<p className="leading-relaxed text-lg text-neutral-400 text-center">Random pics + retweets = no strategy.</p><p className="leading-relaxed text-lg text-neutral-400 text-center mb-4"> The activity feels productive, but it's producing nothing.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">
<div className="bg-neutral-900/40 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-3 text-red-400 mb-3 gap-x-3 gap-y-3 items-center">
<iconify-icon className="" height="24" icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: 'rgb(248, 113, 113)'}} width="24"></iconify-icon>
<h3 className="font-medium">Everyone's doing the same</h3>
</div>
<p className="text-sm text-neutral-500">Comment your link. Attach a pic. Retweet. Hope someone clicks. You are one grain of sand on a beach of identical grains.</p>
</div><div className="bg-neutral-900/40 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-3 text-red-400">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h3 className="font-medium">Wrong audience</h3>
</div>
<p className="text-sm text-neutral-500">90%+ of your followers from promo pages are other creators instead of potential subs that want to pay.</p>
</div>
</div>
<div className="animate-bounce text-center opacity-50 mt-8">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-down-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
<div className="uppercase font-bold text-blue-400 tracking-widest">What to do?</div>
</div></div><section className="w-full pt-0 pb-0">
<div className="text-center mb-4">
<h2 className="md:text-5xl leading-loose text-3xl tracking-tight font-italic mb-4">Why Instagram Reels
  <br className=""/><span className="text-gradient-blue mt-10 mb-1">Changes Everything</span>
</h2>
<p className="italic text-neutral-400 max-w-xl mr-auto ml-auto">Top creators have a system, not a prayer. Organic reach actually exists.</p>
</div>
<div className="grid md:grid-cols-2 max-w-5xl mr-auto ml-auto gap-x-8 gap-y-8">

<div className="glass-card hover:opacity-100 transition-opacity duration-500 bg-red-900/20 opacity-60 border-neutral-800 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-3 mb-8 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-neutral-500" height="28" icon="ri:twitter-x-line" style={{color: 'rgb(115, 115, 115)'}} width="28"></iconify-icon>
<h3 className="text-xl font-semibold">Promo Pages</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
    Almost no organic reach
</li>
<li className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
    Audience = other creators
</li><li className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-red-500 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
    Link dropping = Spam
</li>
</ul>
</div>

<div className="glass-card overflow-hidden bg-blue-500/10 border-[#00AFF0]/30 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_50px_-10px_rgba(0,175,240,0.15)]">
<div className="absolute top-0 left-0 w-full h-1 bg-[#00AFF0]"></div>
<div className="flex gap-3 mb-8 gap-x-3 gap-y-3 items-center">
<iconify-icon className="" height="24" icon="skill-icons:instagram" style={{color: 'rgb(245, 245, 245)'}} width="24"></iconify-icon>
<h3 className="text-xl font-semibold text-white">Instagram Reels</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-white gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-[#00AFF0] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
    Easy to go viral
</li>
<li className="flex gap-3 text-sm text-white gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-[#00AFF0] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
    Audience = Millions of subs
</li><li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-[#00AFF0] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Content shown to interested users
                        </li>
</ul>
</div>
</div><section className="flex flex-col min-h-[60vh] md:gap-x-8 md:gap-y-0 text-center gap-x-8 gap-y-0 items-center justify-center">

<section className="w-full border-white/5 pt-0 pb-0">
<div className="flex flex-col md:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
</div><h2 className="md:text-4xl text-3xl font-medium tracking-tight text-center mb-4">OnlyFans subs that bring money</h2><p className="text-gray-400 text-center pt-0 pb-1">Instagram subs are willing to pay IF your content strategy is on point. Let's get the whales!</p><div className="">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-left-outline" style={{color: 'rgb(161, 161, 161)'}} width="24"></iconify-icon><iconify-icon className="text-white" height="24" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div><div className="animate-bounce text-center opacity-50 mt-0">
</div>

<div className="flex overflow-x-auto no-scrollbar snap-x text-center w-full gap-x-6 gap-y-6">

<div className="min-w-[280px] glass-panel snap-center w-[280px] h-[175px] rounded-2xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[16/9] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/428029cf-1d30-4adb-a1be-a7aa747bfa0f_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-center bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] h-[175px] rounded-2xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[16/9] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8bbee45-7d27-4795-bd92-ee07a6879265_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] h-[175px] rounded-2xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[16/9] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc9b5c4b-e14b-4e34-bae0-7e442dfd3626_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-center bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] h-[175px] rounded-2xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[16/9] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26746f18-5d54-45cc-8687-078ed9fc5c64_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-center bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] h-[175px] rounded-2xl mt-5 mb-5 pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[16/9] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d023f71a-ffe0-4d28-be23-8efbfe2fa9b7_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-center bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div>




</div>
</section>

<div className="pt-0 space-y-4">
<div className="inline-flex text-xs font-medium text-[#00AFF0] tracking-wide bg-[#00AFF0]/10 border-[#00AFF0]/20 border rounded-full mt-3 mb-3 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Instagram Traffic Only</div><div className="glass-panel shadow-black/50 flex transform transition hover:scale-[1.02] pointer-events-auto w-full max-w-lg rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Ready to grow?</span>
<span className="text-[10px] text-gray-400">Book your strategy call</span>
</div>
<a className="hover:bg-[#009bd6] transition-colors flex items-center gap-2 text-sm font-medium text-white bg-[#00aff0] rounded-full pt-3 pr-6 pb-3 pl-6" href="https://cal.com/leon.ofm/30min" target="_blank">I want that!</a>
</div>
</div>

</section><section className="w-full border-white/5 pt-0 pb-0">
<div className="flex flex-col md:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
</div><h2 className="md:text-4xl text-3xl font-medium tracking-tight text-center mt-4 mb-4">Content That Converts</h2><p className="text-gray-400 text-center">You don't need to post explicit content on IG. These 5 verticals drive real subscribers.</p><div className="text-center">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-left-outline" style={{color: 'rgb(161, 161, 161)'}} width="24"></iconify-icon><iconify-icon className="text-white" height="24" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>

<div className="flex overflow-x-auto gap-6 no-scrollbar snap-x w-full pb-8 gap-x-6 gap-y-6">

<div className="min-w-[280px] glass-panel snap-center w-[280px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/332cfe89-7f54-41b2-9a96-fd5cc0a32a75_800w.jpg)] bg-cover rounded-xl mb-4 relative" style={{}}>
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">Storytime</span>
</div>
<h3 className="text-lg font-medium text-gray-200">Car Confessions</h3>
<p className="text-xs text-gray-500 mt-2">"POV: I tell you about..." Relatable, personal hooks.</p>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden group bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7bea88e-a8fd-4c31-8041-0ce67ec3506d_800w.jpg)] bg-cover bg-center rounded-xl mb-4 relative">

<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="bg-center"></div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">Aesthetic</span>
</div>
<h3 className="text-lg font-medium text-gray-200">Posing / Aesthetic</h3>
<p className="text-xs text-gray-500 mt-2">"Mood" content. Shows personality without showing everything.</p>
</div>

<div className="min-w-[280px] glass-panel snap-center w-[280px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bec1535-0eaa-49be-bf03-936d62faf5c5_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
<span className="text-xs font-medium text-white bg-black/50 rounded pt-1 pr-2 pb-1 pl-2 absolute bottom-4 left-4 backdrop-blur-md">Trending</span>
</div>
<h3 className="text-lg font-medium text-gray-200">Trending Dances</h3>
<p className="text-xs text-gray-500 mt-2">Algorithm pushes trending audio. Reach thousands instantly.</p>
</div>


<div className="min-w-[280px] w-[280px] glass-panel p-4 rounded-2xl snap-center">
<div className="aspect-[9/16] overflow-hidden bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a0183b9-19b9-408a-b5bb-e3ef555fe408_800w.jpg)] bg-cover bg-center rounded-xl mb-4 relative">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 text-gray-600">
<iconify-icon className="text-4xl" icon="solar:coffee-linear"></iconify-icon>
</div>
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">Lifestyle</span>
</div>
<h3 className="text-lg font-medium text-gray-200">Get Ready With Me</h3>
<p className="text-xs text-gray-500 mt-2">Show your dress for today. Humanizes you.</p>
</div>

<div className="min-w-[280px] w-[280px] glass-panel p-4 rounded-2xl snap-center">
<div className="aspect-[9/16] overflow-hidden bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1981007d-7e60-4e05-820c-44c38aa72010_800w.jpg)] bg-cover bg-center rounded-xl mb-4 relative">
<div className="flex bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
<span className="absolute bottom-4 left-4 text-xs font-medium text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">Personality</span>
</div>
<h3 className="text-lg font-medium text-gray-200">Skits</h3>
<p className="text-xs text-gray-500 mt-2">Funny videos with playful interactions. Shows personality.</p>
</div>
</div>
</section><section className="w-full border-white/5 pt-0 pb-0">
<div className="flex flex-col md:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
</div><h2 className="md:text-4xl text-3xl font-medium tracking-tight text-center mt-4 mb-4" style={{}}>Instagram Analytics</h2><p className="text-gray-400 text-center">These analytics come from accounts all running the same system described here</p><div className="animate-bounce text-center opacity-50 pt-2 pb-2">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-left-outline" style={{color: 'rgb(161, 161, 161)'}} width="24"></iconify-icon><iconify-icon className="text-white" height="24" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>

<div className="flex overflow-x-auto gap-6 no-scrollbar snap-x w-full pb-8 gap-x-6 gap-y-6">

<div className="min-w-[280px] glass-panel snap-center w-[280px] h-[470px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8beea1dc-d1c5-45ee-92c7-6f197e6d451d_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div><div className="min-w-[280px] glass-panel snap-center w-[280px] h-[470px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden group bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df099c85-c3d6-487a-b487-d0bfb97757c1_800w.jpg)] bg-cover rounded-xl mb-4 relative">

<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="bg-center"></div>
</div>
</div>

<div className="min-w-[280px] glass-panel snap-center w-[280px] h-[470px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2aaadd8b-8ab5-42f6-a0ae-da72c19b2daf_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className=""></div>
</div>
</div>


<div className="min-w-[280px] glass-panel snap-center w-[280px] h-[470px] rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="aspect-[9/16] overflow-hidden bg-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38312b71-e56d-4090-93ce-3db463156746_800w.jpg)] bg-cover rounded-xl mb-4 relative">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 text-gray-600">
<iconify-icon className="text-4xl" icon="solar:coffee-linear"></iconify-icon>
</div>
<div className="bg-gradient-to-t from-black/80 to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

</div><section className="max-w-4xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-12">Realistic Growth Timeline</h2>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00AFF0] via-purple-500 to-transparent md:-translate-x-1/2"></div>

<div className="relative mb-12 md:flex md:justify-between md:items-center w-full">
<div className="hidden md:block md:w-5/12 text-right pr-8">
<h3 className="text-xl font-semibold text-white">Week 1-2</h3>
<p className="text-sm text-white/50 mt-1 font-light">Account setup, strategy, first posts live.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#00AFF0] rounded-full -translate-x-[calc(50%-1px)] md:-translate-x-1/2 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(0,175,240,0.5)]"></div>
<div className="pl-8 md:pl-8 md:w-5/12">
<div className="md:hidden mb-2">
<h3 className="text-xl font-semibold text-white">Week 1-2</h3>
<p className="text-sm text-white/50 font-light">Setup &amp; First Posts</p>
</div>
<div className="inline-block px-3 py-1 bg-white/5 rounded border border-white/10 text-xs text-white/70">
                            First subs arriving
                        </div>
</div>
</div>

<div className="relative mb-12 md:flex md:justify-between md:items-center w-full md:flex-row-reverse">
<div className="hidden md:block md:w-5/12 text-left pl-8">
<h3 className="text-xl font-semibold text-white">Week 3-4</h3>
<p className="text-sm text-white/50 mt-1 font-light">Consistent posting schedule.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#00AFF0] rounded-full -translate-x-[calc(50%-1px)] md:-translate-x-1/2 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(0,175,240,0.5)]"></div>
<div className="pl-8 md:pr-8 md:w-5/12 md:text-right">
<div className="md:hidden mb-2">
<h3 className="text-xl font-semibold text-white">Week 3-4</h3>
</div>
<div className="inline-block px-3 py-1 bg-[#00AFF0]/10 rounded border border-[#00AFF0]/30 text-sm text-[#00AFF0] font-semibold">
                           100-200 free subs/day
                       </div>
</div>
</div>

<div className="relative md:flex md:justify-between md:items-center w-full">
<div className="hidden md:block md:w-5/12 text-right pr-8">
<h3 className="text-xl font-semibold text-white">Month 1+</h3>
<p className="text-sm text-white/50 mt-1 font-light">Scaling &amp; Optimization.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-[calc(50%-1px)] md:-translate-x-1/2 border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,255,0.4)]"></div>
<div className="pl-8 md:pl-8 md:w-5/12">
<div className="md:hidden mb-2">
<h3 className="text-xl font-semibold text-white">Month 1+</h3>
</div>
<div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00AFF0] to-blue-600 rounded-lg shadow-lg text-sm text-white font-bold tracking-tight">
                            $10-15k/month Revenue
                        </div>
</div>
</div>
</div>
</section>
</section>
</section>





<section className="bg-gradient-to-b from-white/5 to-transparent border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 space-y-8">
<div className="space-y-2 text-center">
<h2 className="text-2xl font-medium tracking-tight">What We Do</h2>
<p className="font-light text-gray-400">You film. We handle the rest.</p>
</div>
<div className="grid gap-4 gap-x-4 gap-y-4">
<div className="flex items-center gap-4">
<div className="flex flex-shrink-0 bg-white/5 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-[#00aff0]" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium">Personalized Content Strategy</h4>
<p className="text-xs text-gray-400">Strategy built around how you actually look, dress, and come across. Not some generic template.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#00aff0]" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium">Professional Editing Team</h4>
<p className="text-xs text-gray-400">Edits built to perform, not just look good.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#00aff0]" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium">Content Calendar</h4>
<p className="text-xs text-gray-400">No more guessing. You know exactly what's posting and when.</p>
</div>
</div>
</div>
</section>

<section className="text-center space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-4">
<iconify-icon className="text-xl text-white" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight">The Missing Piece</h2>
<p className="leading-relaxed text-sm text-gray-400 max-w-lg mr-auto ml-auto" style={{}}>We don't give away the full playbook here because what works for one creator won't work for another. The exact angles, posting schedule, and hooks need to match personality. Let's discuss that on call</p>
</section>
</main>

<div className="fixed bottom-0 w-full z-40 p-4 pb-6 flex justify-center pointer-events-none">
<div className="glass-panel shadow-black/50 flex transform transition hover:scale-[1.02] pointer-events-auto w-full max-w-lg rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Ready to grow?</span>
<span className="text-[10px] text-gray-400">Book your strategy call</span>
</div>
<a className="bg-[#00aff0] hover:bg-[#009bd6] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2" href="https://cal.com/leon.ofm/30min" target="_blank">
                Book Now
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>



    </>
  );
}
