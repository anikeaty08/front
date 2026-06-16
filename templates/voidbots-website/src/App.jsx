import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        let starsData = [];

        function initStars() {
            const container = document.getElementById('star-container');
            const numStars = 150;

            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                const size = Math.random() * 2.5 + 0.5; 
                
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.backgroundColor = '#451bff';
                star.style.position = 'absolute';
                star.style.borderRadius = '50%';
                
                const baseOpacity = Math.random() * 0.7 + 0.1;
                star.style.opacity = baseOpacity;
                
                if (size > 1.5) {
                    star.style.boxShadow = `0 0 ${size * 2}px #451bff`;
                }

                container.appendChild(star);
                
                // Assign random slow velocities
                starsData.push({
                    el: star,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    vx: (Math.random() - 0.5) * 0.02, 
                    vy: (Math.random() - 0.5) * 0.02
                });
            }
            
            animateStars();
        }

        function animateStars() {
            starsData.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;
                
                // Wrap around screen
                if(s.x < 0) s.x = 100;
                if(s.x > 100) s.x = 0;
                if(s.y < 0) s.y = 100;
                if(s.y > 100) s.y = 0;
                
                s.el.style.left = `${s.x}%`;
                s.el.style.top = `${s.y}%`;
            });
            
            requestAnimationFrame(animateStars);
        }

        initStars();

        const sections = ['home', 'shop', 'guide', 'about', 'tos'];
        
        function navigate(targetId) {
            sections.forEach(id => {
                document.getElementById(`section-${id}`).classList.add('hidden');
            });
            
            document.getElementById(`section-${targetId}`).classList.remove('hidden');
            
            document.querySelectorAll('.nav-btn').forEach(btn => {
                // Reset to inactive state
                btn.classList.remove('bg-[#0F82EA]', 'text-white');
                btn.classList.add('text-[#7B8B9E]', 'hover:text-white', 'hover:bg-[#451bff]/20');
                
                // Set active state
                if (btn.dataset.target === targetId) {
                     btn.classList.remove('text-[#7B8B9E]', 'hover:text-white', 'hover:bg-[#451bff]/20');
                     btn.classList.add('bg-[#0F82EA]', 'text-white');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0" id="star-container"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-max max-w-5xl">
<div className="flex items-center bg-[#060A11]/90 backdrop-blur-2xl border border-[#1A2333] rounded-[1.25rem] p-1.5 gap-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] overflow-x-auto hide-scroll">
<button className="nav-btn bg-[#0F82EA] text-white px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" data-target="home" onclick="navigate('home')">Home</button>
<button className="nav-btn text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" data-target="shop" onclick="navigate('shop')">Shop</button>
<button className="nav-btn text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" data-target="guide" onclick="navigate('guide')">Order Guide</button>
<button className="nav-btn text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" data-target="about" onclick="navigate('about')">About Us</button>
<button className="nav-btn text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" data-target="tos" onclick="navigate('tos')">TOS</button>
<div className="w-px h-5 bg-[#1A2333] mx-1 shrink-0"></div>
<a className="text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 whitespace-nowrap" href="https://discord.gg/v6g8GSxYXB" target="_blank">Discord</a>
<a className="text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-5 py-2.5 rounded-xl text-lg font-light tracking-tight transition-all duration-300 flex items-center gap-2 whitespace-nowrap group" href="https://discord.com/api/oauth2/authorize?client_id=1234567890&amp;redirect_uri=https%3A%2F%2Fvoidbots.com&amp;response_type=code&amp;scope=identify%20guilds">
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="log-in" strokeWidth="1.5"></i>
                Login
            </a>
<button className="text-[#7B8B9E] hover:text-white hover:bg-[#451bff]/20 px-3 py-2.5 rounded-xl transition-all duration-300 shrink-0">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="flex-grow relative z-10 w-full flex flex-col">

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#451bff]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

<section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10" id="section-home">
<span className="text-lg font-light tracking-tight text-[#451bff] uppercase mb-6 drop-shadow-[0_0_10px_rgba(69,27,255,0.8)]">Welcome to the future</span>
<h1 className="text-7xl md:text-9xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-8 pb-2">
                VOIDBOTS
            </h1>
<p className="text-3xl md:text-4xl font-extralight text-gray-400 max-w-3xl tracking-tight mb-12 leading-tight">
                Discord's best upcoming custom bot maker for RP servers &amp; more.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="bg-white/[0.03] backdrop-blur-[24px] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:bg-[#451bff]/20 transition-all duration-300 px-8 py-4 rounded-full flex items-center gap-3 group" href="https://discord.gg/v6g8GSxYXB" target="_blank">
<i className="w-5 h-5 text-gray-300 group-hover:text-white" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-white">Join Discord</span>
</a>
<button className="group flex items-center gap-3 px-8 py-4 text-2xl font-extralight tracking-tight text-gray-400 hover:text-white transition-colors" onclick="navigate('shop')">
<div className="w-8 h-px bg-gray-600 group-hover:bg-[#451bff] transition-colors"></div>
                    Explore Shop
                </button>
</div>
</section>

<section className="hidden min-h-screen pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full" id="section-shop">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">Our Products</h2>
<p className="text-2xl font-extralight tracking-tight text-gray-400 max-w-2xl mx-auto">Premium custom bots tailored for your community's needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col group hover:-translate-y-1 hover:border-[#451bff]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#451bff]/20 border border-[#451bff]/30 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#8a6eff]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2">The 3 RP System</h3>
<div className="flex items-center gap-1.5 mb-4">
<i className="w-4 h-4 text-[#451bff]" data-lucide="gem" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-gray-300">600 Robux</span>
</div>
<p className="text-2xl font-extralight tracking-tight text-gray-400 mb-8 flex-grow leading-relaxed">A specialized 3 RP system Discord bot for essential roleplay mechanics.</p>
<button className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#451bff]/20 hover:border-[#451bff]/30 transition-all text-white text-2xl font-light tracking-tight">Purchase</button>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col group hover:-translate-y-1 hover:border-[#451bff]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#451bff]/20 border border-[#451bff]/30 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#8a6eff]" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2">All Rounder RP</h3>
<div className="flex items-center gap-1.5 mb-4">
<i className="w-4 h-4 text-[#451bff]" data-lucide="gem" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-gray-300">1,000 Robux</span>
</div>
<p className="text-2xl font-extralight tracking-tight text-gray-400 mb-8 flex-grow leading-relaxed">The best All Rounder RP Bot designed for comprehensive RP servers.</p>
<button className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#451bff]/20 hover:border-[#451bff]/30 transition-all text-white text-2xl font-light tracking-tight">Purchase</button>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col group hover:-translate-y-1 hover:border-[#451bff]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#451bff]/20 border border-[#451bff]/30 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#8a6eff]" data-lucide="gamepad-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2">Entertainer</h3>
<div className="flex items-center gap-1.5 mb-4">
<i className="w-4 h-4 text-[#451bff]" data-lucide="gem" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-gray-300">1,000 Robux</span>
</div>
<p className="text-2xl font-extralight tracking-tight text-gray-400 mb-8 flex-grow leading-relaxed">Designed to increase server activity and thoroughly entertain members.</p>
<button className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#451bff]/20 hover:border-[#451bff]/30 transition-all text-white text-2xl font-light tracking-tight">Purchase</button>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col group hover:-translate-y-1 hover:border-[#451bff]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#451bff]/20 border border-[#451bff]/30 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#8a6eff]" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2">Server Utility</h3>
<div className="flex items-center gap-1.5 mb-4">
<i className="w-4 h-4 text-[#451bff]" data-lucide="gem" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-gray-300">1,000 Robux</span>
</div>
<p className="text-2xl font-extralight tracking-tight text-gray-400 mb-8 flex-grow leading-relaxed">Designed to help with advanced server utility and moderation tasks.</p>
<button className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#451bff]/20 hover:border-[#451bff]/30 transition-all text-white text-2xl font-light tracking-tight">Purchase</button>
</div>

<div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.02)] rounded-[2rem] p-8 flex flex-col group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 lg:col-span-2 xl:col-span-1 relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#451bff]/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#451bff] to-[#2a0e99] border border-white/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(69,27,255,0.4)]">
<i className="w-6 h-6 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-2 relative z-10">The Everything Bot</h3>
<div className="flex items-center gap-1.5 mb-4 relative z-10">
<i className="w-4 h-4 text-[#451bff]" data-lucide="gem" strokeWidth="1.5"></i>
<span className="text-2xl font-light tracking-tight text-gray-300">2,500 Robux</span>
</div>
<p className="text-2xl font-extralight tracking-tight text-gray-400 mb-8 flex-grow relative z-10 leading-relaxed">Literally everything. The ultimate custom bot solution for your server.</p>
<button className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors text-2xl font-normal tracking-tight relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]">Purchase</button>
</div>
</div>
</section>

<section className="hidden min-h-screen pt-40 pb-24 px-4 md:px-8 max-w-4xl mx-auto w-full" id="section-guide">
<div className="text-center mb-20">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">How to Order</h2>
<p className="text-2xl font-extralight tracking-tight text-gray-400">Follow these simple steps to get your custom bot.</p>
</div>
<div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        1
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Create a Ticket</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">Head to the tickets channel and create an Order A Bot ticket. Fill out the modal then wait for a Developer or Support Team to respond.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        2
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Confirmation</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">Confirm everything that you are going to purchase with our team to ensure all details are correct.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        3
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Payment</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">Purchase the required pass from our Group to complete the payment process.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        4
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Development</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">The developer will start development. Make sure to give them Administrator permissions and any required images/assets.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        5
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Review</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">Review the custom bot in action. Make sure that it matches your expectations and the quality is up to standard.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#8a6eff] shadow-[0_0_15px_rgba(69,27,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-3xl font-light tracking-tight">
                        6
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-[2rem] p-8 hover:border-[#451bff]/30 transition-colors">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Confirm &amp; Close</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">Once you are completely happy with the custom bot, the delivery is finalized and the ticket will be closed.</p>
</div>
</div>
</div>

<div className="mt-24 bg-[#451bff]/[0.05] backdrop-blur-xl border border-[#451bff]/20 shadow-[0_8px_32px_0_rgba(69,27,255,0.1)] rounded-[2rem] p-10 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
<div className="w-16 h-16 mx-auto rounded-full bg-[#451bff]/20 border border-[#451bff]/30 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#8a6eff]" data-lucide="info" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Communicate clearly with your Developer</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    If you have any issues during or after the process, please contact our Developer and Support Team by making a General Support Ticket.
                </p>
</div>
</section>

<section className="hidden min-h-screen pt-40 pb-24 px-4 md:px-8 max-w-5xl mx-auto w-full text-center" id="section-about">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-8">About Us</h2>
<p className="text-2xl md:text-3xl font-extralight tracking-tight text-gray-400 mb-20 leading-relaxed max-w-4xl mx-auto">
                VoidBots is a Custom Discord Bot Company that creates highly advanced &amp; professional and up-to-date bots for cheap prices. We offer a range of modern systems and bundles that you can select for your Discord Bot.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">

<div className="aspect-square bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<span className="text-2xl font-light tracking-tight text-[#8a6eff] mb-4">Owner/Founder</span>
<span className="text-4xl md:text-5xl font-normal tracking-tight text-white">Vxoidol</span>
</div>

<div className="aspect-square bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<span className="text-2xl font-light tracking-tight text-[#8a6eff] mb-4">Platform</span>
<span className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">Roblox and RP based games.</span>
</div>
</div>
</section>

<section className="hidden min-h-screen pt-40 pb-24 px-4 md:px-8 max-w-4xl mx-auto w-full" id="section-tos">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">Terms of Service</h2>
<p className="text-2xl font-extralight tracking-tight text-gray-400">Please read our terms carefully before commissioning.</p>
</div>
<div className="space-y-12 text-left bg-white/[0.02] border border-white/[0.05] p-10 md:p-14 rounded-[2.5rem] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">1. Acceptance of Terms</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">By commissioning a custom bot from VoidBots, you automatically agree to abide by these Terms of Service. We reserve the right to refuse service or terminate ongoing projects if terms are violated.</p>
</div>
<div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">2. Payments &amp; Refunds</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">All payments must be completed upfront or via the method specified in your order ticket. Refunds are strictly evaluated on a case-by-case basis and are generally only provided if we are completely unable to deliver the requested product.</p>
</div>
<div>
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">3. Usage &amp; Liability</h3>
<p className="text-2xl font-extralight tracking-tight text-gray-400 leading-relaxed">You are fully responsible for how the custom bot is used within your servers. VoidBots is not liable for any server damages, user bans, or violations of Discord's Terms of Service resulting from your application of our products.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
