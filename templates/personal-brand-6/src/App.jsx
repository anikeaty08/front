import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
        // Scroll Intersection Observer for smooth reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select all elements with reveal classes and observe them
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        revealElements.forEach(el => observer.observe(el));
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 w-full z-40 flex justify-center px-4 pointer-events-none animate-fade-down">
<div className="flex flex-wrap w-full max-w-4xl pointer-events-auto pt-2 pb-2 gap-x-6 gap-y-6 items-center justify-between">
<a className="hover:text-white transition-colors sm:text-lg after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:bg-white text-sm font-bold text-neutral-300 tracking-tight relative drop-shadow-md" href="#">VISION</a>
<a className="hover:text-white transition-colors sm:text-lg after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:bg-white text-sm font-bold text-neutral-300 tracking-tight relative drop-shadow-md" href="#">PORTFOLIO</a>
<a className="hover:text-white transition-colors sm:text-lg after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:bg-white text-sm font-bold text-neutral-300 tracking-tight relative drop-shadow-md" href="#">FOUNDATION</a>
<a className="hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:bg-white sm:text-lg text-sm font-bold text-neutral-300 tracking-tight relative drop-shadow-md" href="#">CONNECT</a>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden bg-[#020202] pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60 animate-hero-pan" src="https://i.imgur.com/vEcQYDu.jpeg"/>
<div className="bg-gradient-to-b from-black/40 via-[#020202]/80 to-[#020202] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-0 inset-x-0 h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.08] via-transparent to-transparent z-0 pointer-events-none"></div>
<div className="text-center space-y-6 relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12">

<h1 className="reveal active leading-none bg-clip-text md:text-9xl lg:text-[10rem] text-7xl font-normal text-transparent tracking-tight font-playfair bg-gradient-to-b from-white to-white/70 pb-2">
  Zack Lalouti</h1>

<p className="reveal delay-100 active max-w-2xl mx-auto text-neutral-300 text-lg md:text-xl font-light leading-relaxed tracking-tight">
          Entrepreneur, philanthropist, and educator. Building the infrastructure for the next generation of digital minds through strategy, systems, and execution.
        </p>

<div className="reveal delay-200 active flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-base font-normal tracking-tight hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#">
            Explore Ecosystem
          </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-base font-normal tracking-tight hover:-translate-y-1 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" width="20"></iconify-icon>
            Watch the Vision
          </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity z-10 animate-fade-down delay-500">
<span className="text-xs uppercase tracking-widest font-mono text-neutral-400">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-neutral-400 to-transparent animate-float"></div>
</div>
</header>

<section className="md:px-6 z-10 bg-[#020202] border-white/5 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="container mx-auto max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="reveal glass-panel md:p-12 flex flex-col group overflow-hidden h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tighter mb-6">
                  Zack Lalouti
                </h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed text-sm md:text-base max-w-2xl tracking-tight">
<p className="">
                    Zack Lalouti, also known as Zakaria Lalouti, is a CEO,
                    motivational speaker and online educator. Based in Europe
                    and active internationally, he helps entrepreneurs and
                    companies scale through strategy, systems and ruthless
                    execution. His philosophy is simple: Scaling Businesses Long
                    Term by Design.
                  </p>
<p className="">
                    Zack is highly disciplined, with a lifestyle built around
                    training, self study, healthy living and execution. Through
                    motivational and mindset reels and lifestyle content, he
                    takes viewers inside his daily life and the standards behind
                    the results. His work is built to create positive impact for
                    ambitious people who are serious about building a bigger
                    life, a stronger mindset and a business that lasts.
                  </p>
</div>
</div>
<div className="flex-1 flex flex-col justify-center w-full">
<div className="flex flex-wrap gap-2 border-white/5 border-t pt-6 mt-6 gap-x-2 gap-y-2">
<span className="reveal delay-100 text-[11px] hover:scale-105 hover:bg-white/10 hover:text-white transition-all cursor-default uppercase font-medium text-neutral-400 tracking-wide bg-white/5 border-white/10 border rounded pt-1.5 pr-3 pb-1.5 pl-3">
                    CEO
                  </span>
<span className="reveal delay-200 text-[11px] hover:scale-105 hover:bg-white/10 hover:text-white transition-all cursor-default uppercase font-medium text-neutral-400 tracking-wide bg-white/5 border-white/10 border rounded pt-1.5 pr-3 pb-1.5 pl-3">
                    motivational speaker
                  </span>
<span className="reveal delay-300 text-[11px] hover:scale-105 hover:bg-white/10 hover:text-white transition-all cursor-default uppercase font-medium text-neutral-400 tracking-wide bg-white/5 border-white/10 border rounded pt-1.5 pr-3 pb-1.5 pl-3">
                    online educator
                  </span>
<span className="reveal delay-400 text-[11px] hover:scale-105 hover:bg-white/10 hover:text-white transition-all cursor-default uppercase font-medium text-neutral-400 tracking-wide bg-white/5 border-white/10 border rounded pt-1.5 pr-3 pb-1.5 pl-3">
                    lifestyle creator
                  </span>
</div>
</div>
</div>

<div className="reveal delay-200 glass-panel rounded-2xl p-8 border border-white/5 bg-white/[0.02] relative group overflow-hidden transition-all duration-500 hover:bg-white/[0.04]">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-white" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg font-light italic text-neutral-300 tracking-tight pr-8">
                "The routine you avoid is the result you want."
              </p>
</div>
</div>

<div className="reveal-right delay-200 lg:col-span-5 h-full min-h-[400px]">
<div className="h-full w-full rounded-2xl overflow-hidden relative group border border-white/5 bg-[#050505]">
<img alt="Zack Lalouti" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://i.imgur.com/CYEv3qX.jpeg"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-6 z-10 bg-[#020202] border-white/5 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="container mx-auto max-w-4xl">
<div className="flex flex-col gap-10">

<div className="reveal flex flex-col md:text-center md:items-center gap-6">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tighter">
              Socials of Zack Lalouti
            </h2>
<div className="space-y-4 text-neutral-400 font-light leading-relaxed text-sm md:text-base max-w-2xl tracking-tight">
<p className="">
                Join a community of over 500,000 ambitious individuals. Daily
                insights on scaling businesses, optimizing performance, and
                mastering the mindset required for ruthless execution.
              </p>
<p className="">
                From in-depth breakdowns on YouTube to daily lifestyle and
                mindset content on Instagram, choose your platform and start
                upgrading your standard today.
              </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full gap-x-4 gap-y-4">

<a className="reveal delay-100 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-[#E1306C] group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<div className="min-w-0">
<div className="text-white font-medium text-sm tracking-tight truncate">
        Instagram
      </div>
<div className="text-neutral-500 text-xs truncate">
        Daily lifestyle
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="reveal delay-200 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-[#FE2C55] group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.77 1.526V6.79a4.831 4.831 0 0 1-1-.104z"></path>
</svg>
<div className="min-w-0">
<div className="text-white font-medium text-sm tracking-tight truncate">
        TikTok
      </div>
<div className="text-neutral-500 text-xs truncate">
        Short-form content
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="reveal delay-300 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-white group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle className="" cx="12" cy="12" r="4"></circle>
<path className="" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4.5 8.4"></path>
</svg>
<div className="min-w-0">
<div className="text-white font-medium text-sm tracking-tight truncate">
        Threads
      </div>
<div className="text-neutral-500 text-xs truncate">
        Quick updates
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="reveal delay-100 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-[#5865F2] group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path>
</svg>
<div className="min-w-0">
<div className="truncate text-sm font-medium text-white tracking-tight">Discord</div>
<div className="text-neutral-500 text-xs truncate">
        Thoughts &amp; Ideas
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="reveal delay-200 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-[#FF0000] group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
<div className="min-w-0">
<div className="text-white font-medium text-sm tracking-tight truncate">
        YouTube
      </div>
<div className="text-neutral-500 text-xs truncate">
        Long-form education
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>

<a className="reveal delay-300 flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all duration-300 group/item" href="#">
<svg className="w-7 h-7 text-[#FFFC00] group-hover/item:scale-110 transition-transform duration-300 shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12.16 23.633c-1.19-.071-2.288-.367-3.238-.857-.367-.184-.526-.266-.633-.266-.143 0-.613.347-1.123.837-.5.48-1.042 1.052-1.042 1.052s-.133.143-.306.143c-.225 0-.419-.133-.511-.347-.041-.092-.041-.245 0-.582.041-.306.143-.725.225-1.031.061-.266.071-.439-.01-.582-.123-.194-.48-.48-.929-.755C3.39 20.47 2 19.347 2 18.061c0-.49.347-.96 1.011-1.398.602-.388 1.48-.715 2.511-.929.623-.133 1.021-.245 1.021-.296 0-.041-.123-.194-.286-.347-1.133-1.052-1.878-2.613-2.021-4.185-.041-.449.031-1.051.174-1.429.357-.96 1.072-1.552 2.011-1.684.225-.031.541.02.541.092 0 .02 0 .143-.01.266a2.02 2.02 0 0 0 .521 1.541c.214.235.347.316.592.316.48 0 .97-.48.97-.949 0-.255-.071-.398-.296-.582-.245-.204-.378-.459-.378-.735 0-.174.071-.347.235-.551.48-.612 1.531-1.061 2.919-1.255.459-.061 1.092-.061 1.541 0 1.388.194 2.439.643 2.919 1.255.163.204.235.378.235.551 0 .276-.133.531-.378.735-.225.184-.296.327-.296.582 0 .469.49.949.97.949.245 0 .378-.082.592-.316a2.02 2.02 0 0 0 .521-1.541c-.01-.123-.01-.245-.01-.266 0-.071.316-.123.541-.092.939.133 1.654.725 2.011 1.684.143.378.214.98.174 1.429-.143 1.572-.888 3.133-2.021 4.185-.163.153-.286.306-.286.347 0 .051.398.163 1.021.296 1.031.214 1.909.541 2.511.929.664.439 1.011.908 1.011 1.398 0 1.286-1.39 2.409-2.593 3.185-.449.276-.806.561-.929.755-.082.143-.071.316-.01.582.082.306.184.725.225 1.031.041.337.041.49 0 .582-.092.214-.286.347-.511.347-.174 0-.306-.061-.306-.143 0 0-.541-.572-1.042-1.052-.511-.49-.98-.837-1.123-.837-.102 0-.266.082-.633.266-.95.49-2.048.786-3.238.857a9.35 9.35 0 0 1-1.684.02z"></path>
</svg>
<div className="min-w-0">
<div className="text-white font-medium text-sm tracking-tight truncate">
        Snapchat
      </div>
<div className="text-neutral-500 text-xs truncate">
        Behind the scenes
      </div>
</div>
<iconify-icon className="ml-auto text-neutral-600 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="md:px-6 z-10 bg-[#020202] border-white/5 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="container mx-auto max-w-5xl">

<div className="reveal flex flex-col md:items-center md:text-center mb-16 relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter">
        Active Businesses
      </h2>
<p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base tracking-tight max-w-2xl">
        A curated portfolio of companies focused on scaling operations, optimizing performance, and building the infrastructure for the next generation of digital minds.
      </p>
</div>

<div className="flex flex-col gap-4 relative z-10">

<a className="reveal delay-100 glass-panel p-6 md:p-8 group overflow-hidden border-white/5 border rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] transition-all duration-500 relative flex flex-col md:flex-row md:items-center gap-5 md:gap-6" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between w-full md:w-auto relative z-10 shrink-0">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 group-hover:rotate-3 transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-xl font-medium text-white tracking-tight mb-2 md:mb-1 group-hover:text-white transition-colors duration-300">IAG Media</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed tracking-tight">
            A premier B2B growth agency helping enterprise clients and high-velocity e-commerce brands scale rapidly through elite paid advertising and sales infrastructure.
          </p>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 hidden md:block shrink-0 relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>

<a className="reveal delay-200 glass-panel p-6 md:p-8 group overflow-hidden border-white/5 border rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] transition-all duration-500 relative flex flex-col md:flex-row md:items-center gap-5 md:gap-6" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between w-full md:w-auto relative z-10 shrink-0">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 group-hover:-rotate-3 transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-xl font-medium text-white tracking-tight mb-2 md:mb-1 group-hover:text-white transition-colors duration-300">Educate</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed tracking-tight">
            The leading online learning platform and community network providing modern, high-value digital skills for the next generation of online entrepreneurs.
          </p>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 hidden md:block shrink-0 relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>

<a className="reveal delay-300 glass-panel p-6 md:p-8 group overflow-hidden border-white/5 border rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] transition-all duration-500 relative flex flex-col md:flex-row md:items-center gap-5 md:gap-6" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between w-full md:w-auto relative z-10 shrink-0">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 group-hover:rotate-3 transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-xl font-medium text-white tracking-tight mb-2 md:mb-1 group-hover:text-white transition-colors duration-300">Flozy</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed tracking-tight">
            An all-in-one operating system and integrated client portal built from the ground up to streamline operations for modern agencies and service-based teams.
          </p>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 hidden md:block shrink-0 relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>

<a className="reveal delay-400 glass-panel p-6 md:p-8 group overflow-hidden border-white/5 border rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.03)] transition-all duration-500 relative flex flex-col md:flex-row md:items-center gap-5 md:gap-6" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between w-full md:w-auto relative z-10 shrink-0">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 group-hover:-rotate-3 transition-all duration-500">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-xl font-medium text-white tracking-tight mb-2 md:mb-1 group-hover:text-white transition-colors duration-300">Lalouti Capital</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed tracking-tight">
            A boutique investment firm focused on allocating capital to disruptive early-stage technology companies, SaaS products, and promising digital infrastructure.
          </p>
</div>
<svg className="text-neutral-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 hidden md:block shrink-0 relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</a>
</div>
</div>
</section>
<section className="md:px-6 z-10 bg-[#020202] border-white/5 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="container mx-auto max-w-5xl">
<div className="glass-panel md:p-12 p-8 flex flex-col md:flex-row gap-12 group overflow-hidden border-white/5 border rounded-2xl relative transition-all duration-500 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="reveal-left md:w-5/12 z-10 flex flex-col w-full relative justify-between">
<div className="">
<div className="inline-flex items-center gap-2 mb-6">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Contact</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter">
                Get in Touch
              </h2>
<p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base tracking-tight mb-8">
                For consulting, speaking engagements, media inquiries, or to learn more about the ecosystem.
              </p>
</div>
</div>

<div className="reveal-right delay-200 w-full md:w-7/12 relative z-10">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5 group/input">
<label className="text-xs font-medium text-neutral-400 tracking-tight ml-1 group-focus-within/input:text-white transition-colors">First Name</label>
<input className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight hover:border-white/20" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs font-medium text-neutral-400 tracking-tight ml-1 group-focus-within/input:text-white transition-colors">Last Name</label>
<input className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight hover:border-white/20" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs font-medium text-neutral-400 tracking-tight ml-1 group-focus-within/input:text-white transition-colors">Email Address</label>
<input className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight hover:border-white/20" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs font-medium text-neutral-400 tracking-tight ml-1 group-focus-within/input:text-white transition-colors">Inquiry Type</label>
<div className="relative">
<select className="appearance-none bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight cursor-pointer hover:border-white/20">
<option className="text-neutral-600 bg-[#050505]" disabled="" selected="" value="">Select a topic</option>
<option className="bg-[#050505]" value="consulting">Consulting</option>
<option className="bg-[#050505]" value="speaking">Speaking Engagement</option>
<option className="bg-[#050505]" value="press">Press &amp; Media</option>
<option className="bg-[#050505]" value="other">Other</option>
</select>
<svg className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none group-focus-within/input:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1.5 group/input">
<label className="text-xs font-medium text-neutral-400 tracking-tight ml-1 group-focus-within/input:text-white transition-colors">Message</label>
<textarea className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight resize-none hover:border-white/20" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="bg-white text-black px-6 py-3.5 rounded-lg text-sm font-medium tracking-tight hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 w-full mt-2" type="submit">
                Send Message
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#020202] border-white/5 border-t pt-24 pb-8 relative">
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 mb-16 gap-x-16 gap-y-16 items-start justify-between">
<div className="reveal w-full lg:w-2/3 flex flex-wrap gap-12 lg:gap-24">
<div className="flex flex-col gap-5 gap-x-5 gap-y-5">
<span className="uppercase text-xs text-neutral-600 tracking-widest font-mono">
                Connect
              </span>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="" icon="ri:instagram-line"></iconify-icon>
                Instagram
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight flex items-center gap-2" href="#">
<iconify-icon icon="ri:youtube-line"></iconify-icon>
                YouTube
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="" icon="ri:twitter-x-line"></iconify-icon>
                X (Twitter)
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight flex items-center gap-2" href="#">
<iconify-icon icon="ri:linkedin-line"></iconify-icon>
                LinkedIn
              </a>
</div>
<div className="flex flex-col gap-5">
<span className="text-xs text-neutral-600 font-mono uppercase tracking-widest">
                Ecosystem
              </span>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                IAG Media
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Educate
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Flozy
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Lalouti
              </a>
</div>
<div className="flex flex-col gap-5">
<span className="text-xs text-neutral-600 font-mono uppercase tracking-widest">
                Inquiries
              </span>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Press
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Speaking
              </a>
<a className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all tracking-tight" href="#">
                Partnerships
              </a>
</div>
</div>
<div className="reveal delay-200 w-full lg:w-1/3">
<h3 className="text-3xl font-medium text-white tracking-tighter mb-4">Join the club.</h3>
<p className="text-neutral-400 font-light text-sm leading-relaxed tracking-tight mb-8">
              Join the inner circle. Get weekly insights on scaling businesses,
              optimizing performance, and mastering the mindset for ruthless
              execution.
            </p>
<form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm group/form" onsubmit="event.preventDefault();">
<input className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] w-full transition-all duration-300 font-light tracking-tight hover:border-white/20" placeholder="Email Address" type="email"/>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium tracking-tight hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 whitespace-nowrap w-full sm:w-auto" type="submit">
                Subscribe
              </button>
</form>
</div>
</div>
<div className="reveal delay-300 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between w-full items-center gap-6 md:gap-4 text-sm text-neutral-500 tracking-tight">
<p className="">© 2025 Zack Lalouti. All rights reserved.</p>
<div className="flex flex-wrap justify-center items-center gap-6">
<a className="hover:text-white transition-colors duration-300" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Terms of Service
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Cookie Policy
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
