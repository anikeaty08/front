import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            let distX = mouseX - followerX;
            let distY = mouseY - followerY;
            
            followerX += distX * 0.15;
            followerY += distY * 0.15;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        const interactables = document.querySelectorAll('a, button, input, textarea, .magnetic');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                follower.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                cursor.style.transform = 'translate(-50%, -50%) scale(0)';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                follower.style.backgroundColor = 'transparent';
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', function(e) {
                const position = magnet.getBoundingClientRect();
                const x = e.pageX - position.left - position.width / 2;
                const y = e.pageY - position.top - position.height / 2;
                
                magnet.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            
            magnet.addEventListener('mouseleave', function(e) {
                magnet.style.transform = `translate(0px, 0px)`;
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-premium').forEach(el => {
            observer.observe(el);
        });

        let lastScrollTop = 0;
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if(scrollTop > 50) {
                header.classList.add('bg-[#0a0a0a]/70', 'backdrop-blur-xl', 'border-white/[0.05]');
                header.classList.remove('bg-transparent', 'border-transparent');
            } else {
                header.classList.remove('bg-[#0a0a0a]/70', 'backdrop-blur-xl', 'border-white/[0.05]');
                header.classList.add('bg-transparent', 'border-transparent');
            }

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        const openBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const overlay = document.getElementById('nav-overlay');
        const navLinks = document.querySelectorAll('.nav-link');

        function toggleMenu() {
            const isClosed = overlay.classList.contains('opacity-0');
            if (isClosed) {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
                
                navLinks.forEach((link, index) => {
                    setTimeout(() => {
                        link.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                });
            } else {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
                
                navLinks.forEach(link => {
                    link.style.transform = 'translateY(100%)';
                });
            }
        }

        openBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        navLinks.forEach(link => link.addEventListener('click', toggleMenu));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 opacity-[0.04]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E&quot'}}></div>
<div className="fixed top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#bfffb8]/[0.03] via-[#0a0a0a]/0 to-transparent pointer-events-none z-0"></div>

<div className="custom-cursor fixed w-2 h-2 bg-[#bfffb8] rounded-full pointer-events-none z-[100] transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference" id="cursor"></div>
<div className="custom-cursor fixed w-8 h-8 border border-white/10 rounded-full pointer-events-none z-[100] transition-all duration-500 ease-out transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px]" id="cursor-follower"></div>

<div className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 pointer-events-none" id="nav-overlay">
<button className="magnetic absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors duration-500 p-4" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<nav className="flex flex-col items-center space-y-8 text-4xl md:text-6xl font-light uppercase tracking-tighter text-white">
<div className="overflow-hidden"><a className="nav-link block translate-y-full hover:text-[#bfffb8] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" href="#home">Home</a></div>
<div className="overflow-hidden"><a className="nav-link block translate-y-full hover:text-[#bfffb8] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" href="#about">About</a></div>
<div className="overflow-hidden"><a className="nav-link block translate-y-full hover:text-[#bfffb8] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" href="#services">Services</a></div>
<div className="overflow-hidden"><a className="nav-link block translate-y-full hover:text-[#bfffb8] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" href="#case-studies">Case Studies</a></div>
<div className="overflow-hidden"><a className="nav-link block translate-y-full hover:text-[#bfffb8] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" href="#contact">Contact Us</a></div>
</nav>
</div>

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-transparent px-6 py-6 md:px-12 flex justify-between items-center border-b border-transparent" id="header">
<a className="magnetic font-light tracking-tighter text-xl uppercase text-white hover:text-[#bfffb8] transition-colors duration-500 z-10 px-4 py-2 flex items-center gap-1" href="#home">
<span className="tracking-tighter">AD</span><span className="text-white/40 tracking-tighter">in</span>
</a>
<button className="magnetic text-white/70 hover:text-white transition-all duration-500 flex items-center gap-3 font-extralight text-xs tracking-wide z-10 px-5 py-2.5 border border-white/5 hover:border-white/10 rounded-full bg-white/[0.02] backdrop-blur-md" id="open-menu">
<span className="hidden md:block uppercase tracking-tight">Menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>
<main className="relative z-10" id="home">

<section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] z-10 opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a] z-10"></div>
<img alt="Abstract Elements" className="w-full h-full object-cover mix-blend-screen opacity-20 scale-105" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
</div>
<div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start gap-8 mt-12">
<div className="overflow-hidden">
<div className="reveal-premium flex items-center gap-2 text-xs font-light tracking-tight text-white/70 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 px-4 py-1.5 rounded-full backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#bfffb8] animate-pulse"></span>
<span className="uppercase">The Change Agency</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-tighter text-white leading-none max-w-6xl">
<span className="block overflow-hidden"><span className="reveal-premium block delay-[100ms]">ADin is in the business</span></span>
<span className="block overflow-hidden"><span className="reveal-premium block delay-[200ms] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#bfffb8]/50">of creating effective</span></span>
<span className="block overflow-hidden"><span className="reveal-premium block delay-[300ms]">targeted communications.</span></span>
</h1>
<div className="overflow-hidden mt-2">
<p className="reveal-premium delay-[400ms] text-base md:text-xl font-extralight tracking-tight text-white/50 max-w-2xl leading-relaxed">
                        For conscious brands, thought leaders, businesses and movements that disrupt categories by leading with purpose.
                    </p>
</div>
<div className="overflow-hidden mt-8">
<a className="reveal-premium delay-[500ms] magnetic group relative inline-flex items-center gap-3 text-xs font-light uppercase tracking-tight text-[#0a0a0a] overflow-hidden px-8 py-4 rounded-full bg-white transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02]" href="#about">
<span className="relative z-10">Discover Our Purpose</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
<div className="lg:col-span-7 reveal-premium">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-tighter text-white leading-none mb-12">Our Purpose &amp;<br/><span className="text-white/40">How We Affect Change</span></h2>
<div className="space-y-8 text-base md:text-lg font-extralight tracking-tight leading-relaxed text-white/50">
<p className="hover:text-white/90 transition-colors duration-700">It’s not about us. It’s about us choosing to work with people and brands that simply make the world better.</p>
<p className="hover:text-white/90 transition-colors duration-700">It’s about helping to bring innovative brands to consumers who want to affect change by where they spend and invest their dollars. Committing to using our communication skills to build a sphere of influence.</p>
<div className="relative p-10 mt-16 border border-white/[0.04] rounded-3xl bg-white/[0.01] backdrop-blur-md group hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon className="absolute -top-3 left-10 text-white/20 bg-[#0a0a0a] px-3 transition-colors duration-500 group-hover:text-[#bfffb8]/50" icon="solar:quote-left-linear" width="24"></iconify-icon>
<p className="text-white/80 font-light leading-relaxed">"It’s about evolving in an ever-changing world and scaling for impact. It’s a mission that has propelled us since day one, and it has never been more timely."</p>
<span className="block mt-8 text-xs font-light text-white/40 uppercase tracking-tight flex items-center gap-2">
<span className="w-4 h-[1px] bg-white/20"></span> Sue Taggart, Founder &amp; CEO
                            </span>
</div>
</div>
</div>
<div className="lg:col-span-5 reveal-premium delay-[200ms]">
<h3 className="text-sm font-light uppercase tracking-tight text-white/70 mb-12 flex items-center gap-4">
<span className="w-8 h-[1px] bg-white/20"></span> Core Values
                    </h3>
<div className="space-y-0 relative border-l border-white/[0.05] pl-10 ml-2">

<div className="group relative pb-16">
<div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full border border-white/20 bg-[#0a0a0a] group-hover:bg-white group-hover:border-white transition-all duration-500"></div>
<h4 className="text-lg font-light uppercase tracking-tighter text-white group-hover:text-white transition-colors duration-500 mb-3 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">Culture &amp; Inclusion</h4>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-all duration-500 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">We act with empathy and caring, creating a safe and honest environment for the exchange of ideas.</p>
</div>

<div className="group relative pb-16">
<div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full border border-white/20 bg-[#0a0a0a] group-hover:bg-white group-hover:border-white transition-all duration-500"></div>
<h4 className="text-lg font-light uppercase tracking-tighter text-white group-hover:text-white transition-colors duration-500 mb-3 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">Creativity</h4>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-all duration-500 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">It drives everything we do, why be predictable when you can be exceptional.</p>
</div>

<div className="group relative">
<div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full border border-white/20 bg-[#0a0a0a] group-hover:bg-white group-hover:border-white transition-all duration-500"></div>
<h4 className="text-lg font-light uppercase tracking-tighter text-white group-hover:text-white transition-colors duration-500 mb-3 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">Raising the bar</h4>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-all duration-500 translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)]">We love to excel, to deliver over and above expectations. It’s why clients stay with us for many years.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 relative border-t border-white/[0.02] bg-[#0a0a0a]/50" id="services">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal-premium">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-tighter text-white leading-none">Drivers For<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-[#bfffb8]/40">Success</span></h2>
<p className="text-xs font-light tracking-tight text-white/40 max-w-xs uppercase md:text-right">Comprehensive strategies designed to scale your impact and presence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="reveal-premium relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Strategy &amp; Planning</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">Whatever stage you are at in your go-to-market strategy, our team can hone in on the key drivers for success.</p>
</div>
</div>
<div className="reveal-premium delay-[100ms] relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Branding &amp; Creative</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">Your brand is everything. The right branding adds exceptional value to your company and reputation.</p>
</div>
</div>
<div className="reveal-premium delay-[200ms] relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Public Relations</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">We tell your story and leverage media relationships, using PR Affiliate Marketing across platforms to drive sales.</p>
</div>
</div>
<div className="reveal-premium relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:hashtag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Social Media</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">Compelling social strategies current with fast-moving trends to build consumer engagement and social proof.</p>
</div>
</div>
<div className="reveal-premium delay-[100ms] relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:mouse-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Digital &amp; Marketing</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">Creating a compelling digital presence that drives customers. Full suite of strategies for segmenting consumers to build loyalty.</p>
</div>
</div>
<div className="reveal-premium delay-[200ms] relative group p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.08] cursor-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-white/[0.05] bg-white/[0.01] flex items-center justify-center mb-8 text-white/50 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-700 group-hover:scale-110 ease-[cubic-bezier(0.16,1,0.3,1)]">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-light uppercase tracking-tighter text-white mb-4">Advisory &amp; Markets</h3>
<p className="text-sm font-extralight tracking-tight leading-relaxed text-white/40 group-hover:text-white/70 transition-colors duration-700">Exploring new markets for long-term growth. ADin puts relationships first to best serve goals.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto" id="case-studies">
<div className="reveal-premium mb-24 md:mb-32">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-tighter text-white leading-none mb-6">Selected Work</h2>
<p className="text-base font-extralight tracking-tight text-white/40 max-w-xl">
                    See the work behind some of our award-winning content and creative. It’s what brings clients back.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

<a className="reveal-premium group block cursor-none" href="#contact">
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-[#050505] mb-8 border border-white/[0.03]">
<img alt="Naturepedic" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'grayscale(100%) contrast(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-xs font-light uppercase tracking-tight flex items-center gap-2 shadow-2xl">
                                View Study <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</div>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h3 className="text-2xl font-light uppercase tracking-tighter text-white group-hover:text-white/80 transition-colors duration-500 mb-2">Naturepedic</h3>
<p className="text-sm font-extralight tracking-tight text-white/40 max-w-sm leading-relaxed">Elevating the experience for the award-winning U.S. certified organic mattress manufacturer.</p>
</div>
</div>
</a>

<a className="reveal-premium delay-[100ms] group block md:mt-32 cursor-none" href="#contact">
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-[#050505] mb-8 border border-white/[0.03]">
<img alt="Face Mask Campaign" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" style={{filter: 'grayscale(100%) contrast(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
<span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-xs font-light uppercase tracking-tight flex items-center gap-2 shadow-2xl">
                                View Study <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</span>
</div>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h3 className="text-2xl font-light uppercase tracking-tighter text-white group-hover:text-white/80 transition-colors duration-500 mb-2">Face Mask Pivot</h3>
<p className="text-sm font-extralight tracking-tight text-white/40 max-w-sm leading-relaxed">Helping a manufacturer pivot production to fill demand during the pandemic.</p>
</div>
</div>
</a>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<div className="w-[600px] h-[600px] bg-[#bfffb8]/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<div className="max-w-5xl mx-auto text-center reveal-premium relative z-10 p-12 md:p-24 rounded-[3rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl shadow-2xl">
<span className="text-xs font-light uppercase tracking-tight text-white/40 mb-12 block flex items-center justify-center gap-3">
<span className="w-8 h-[1px] bg-white/10"></span> Client Perspectives <span className="w-8 h-[1px] bg-white/10"></span>
</span>
<div className="relative cursor-none magnetic">
<p className="text-2xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-tighter leading-snug mb-16 text-white">
                        "The value of ADin goes way beyond their services. They have a knack for seeing opportunities and trends that for conscious driven entrepreneurs like myself, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#bfffb8]/60">that’s golden.</span>"
                    </p>
<div className="font-light tracking-tight text-sm text-white/80 flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 mb-4 flex items-center justify-center text-white/30">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<span className="block uppercase tracking-tight">Kari Warberg Block</span>
<span className="text-white/40 font-extralight text-xs">CEO and Founder of EarthKind</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/[0.02] overflow-hidden relative bg-white/[0.01]">
<div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<p className="text-xs font-light tracking-tight text-center text-white/30 mb-12 uppercase w-full">Trusted Partners</p>
<div className="flex w-[200%] md:w-full justify-around items-center opacity-40 px-6 mix-blend-screen">
<span className="text-xl md:text-3xl font-light uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-700 cursor-none hover:scale-[1.02]">Naturepedic</span>
<span className="text-xl md:text-3xl font-light uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-700 cursor-none hover:scale-[1.02]">EarthKind</span>
<span className="text-xl md:text-3xl font-light uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-700 cursor-none hover:scale-[1.02]">Hooray Foods</span>
<span className="text-xl md:text-3xl font-light uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-700 cursor-none hover:scale-[1.02]">Dukan Diet</span>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-4xl mx-auto text-center" id="contact">
<h2 className="reveal-premium text-4xl md:text-6xl font-extralight uppercase tracking-tighter text-white mb-6">Start the<br/><span className="text-white/40">Conversation</span></h2>
<p className="reveal-premium delay-[100ms] text-sm font-extralight tracking-tight text-white/40 mb-20 max-w-xl mx-auto leading-relaxed">
                Reach out to Sue Taggart directly on her cell 917.833.8101 or email <a className="text-white hover:text-[#bfffb8] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white/20 after:scale-x-100 hover:after:scale-x-0 after:origin-right hover:after:origin-left after:transition-transform after:duration-500" href="mailto:sue@adinnyc.com">sue@adinnyc.com</a>.
            </p>
<form className="reveal-premium delay-[200ms] text-left space-y-10 mb-24 cursor-none relative z-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<input className="block w-full bg-transparent border-b border-white/10 py-4 px-0 text-white text-sm font-light focus:outline-none focus:border-transparent focus:ring-0 peer placeholder-transparent transition-colors duration-500 hover:border-white/30" id="fname" placeholder="First Name" required="" type="text"/>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 peer-focus:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"></div>
<label className="absolute left-0 top-4 text-sm font-light text-white/30 transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/70 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/70 uppercase tracking-tight" htmlFor="fname">First Name</label>
</div>
<div className="relative group">
<input className="block w-full bg-transparent border-b border-white/10 py-4 px-0 text-white text-sm font-light focus:outline-none focus:border-transparent focus:ring-0 peer placeholder-transparent transition-colors duration-500 hover:border-white/30" id="lname" placeholder="Last Name" required="" type="text"/>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 peer-focus:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"></div>
<label className="absolute left-0 top-4 text-sm font-light text-white/30 transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/70 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/70 uppercase tracking-tight" htmlFor="lname">Last Name</label>
</div>
</div>
<div className="relative group">
<input className="block w-full bg-transparent border-b border-white/10 py-4 px-0 text-white text-sm font-light focus:outline-none focus:border-transparent focus:ring-0 peer placeholder-transparent transition-colors duration-500 hover:border-white/30" id="email" placeholder="Email" required="" type="email"/>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 peer-focus:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"></div>
<label className="absolute left-0 top-4 text-sm font-light text-white/30 transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/70 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/70 uppercase tracking-tight" htmlFor="email">Email Address</label>
</div>
<div className="relative group mt-12">
<textarea className="block w-full bg-transparent border-b border-white/10 py-4 px-0 text-white text-sm font-light focus:outline-none focus:border-transparent focus:ring-0 peer placeholder-transparent resize-none transition-colors duration-500 hover:border-white/30" id="message" placeholder="Message" required="" rows="1"></textarea>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 peer-focus:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"></div>
<label className="absolute left-0 top-4 text-sm font-light text-white/30 transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/70 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/70 uppercase tracking-tight" htmlFor="message">Your Message</label>
</div>
<div className="pt-8">
<button className="magnetic w-full md:w-auto px-12 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white text-xs uppercase tracking-tight hover:bg-white hover:text-[#0a0a0a] transition-all duration-700 font-light ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-sm" type="submit">
                        Send Message
                    </button>
</div>
</form>
</section>
</main>
<footer className="border-t border-white/[0.05] py-16 px-6 md:px-12 text-center md:text-left text-xs font-light tracking-tight text-white/30 bg-[#050505]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col gap-2">
<p>7 World Trade Center, 250 Greenwich St, NY 10007</p>
<p>917.833.8101 | <a className="hover:text-white transition-colors" href="mailto:sue@adinnyc.com">sue@adinnyc.com</a></p>
</div>
<div className="flex gap-8 uppercase tracking-tight">
<a className="hover:text-white transition-colors duration-500" href="#home">Home</a>
<a className="hover:text-white transition-colors duration-500" href="#about">About</a>
<a className="hover:text-white transition-colors duration-500" href="#services">Services</a>
</div>
<div>
<p>© 2024 ADin NYC. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
