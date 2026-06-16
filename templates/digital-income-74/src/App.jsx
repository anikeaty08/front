import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Countdown Timer Logic
        function startTimer(durationInSeconds) {
            let timer = durationInSeconds;
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            setInterval(function () {
                let hours = parseInt(timer / 3600, 10);
                let minutes = parseInt((timer % 3600) / 60, 10);
                let seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                hoursEl.textContent = hours;
                minutesEl.textContent = minutes;
                secondsEl.textContent = seconds;

                if (--timer < 0) {
                    timer = 0;
                }
            }, 1000);
        }
        
        // Start 2h 45m 30s timer
        window.onload = function () {
            startTimer((2 * 3600) + (45 * 60) + 30);
        };

        // Accordion functionality to close others
        const details = document.querySelectorAll("details");
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
        });

        // Exit Intent Popup Logic
        let popupShown = false;
        const exitPopup = document.getElementById('exitPopup');
        const popupContent = document.getElementById('popupContent');

        function showPopup() {
            if(!popupShown) {
                exitPopup.classList.remove('hidden');
                setTimeout(() => {
                    popupContent.classList.remove('scale-95', 'opacity-0');
                    popupContent.classList.add('scale-100', 'opacity-100');
                }, 10);
                popupShown = true;
            }
        }

        function closePopup() {
            popupContent.classList.remove('scale-100', 'opacity-100');
            popupContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                exitPopup.classList.add('hidden');
            }, 300);
        }

        document.addEventListener('mouseleave', function(e) {
            if (e.clientY < 0) {
                showPopup();
            }
        });

        document.getElementById('closePopupBtn').addEventListener('click', closePopup);
        document.getElementById('closePopupBg').addEventListener('click', closePopup);
        document.getElementById('noThanksBtn').addEventListener('click', closePopup);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-xl text-gray-900">DIF.</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-sm text-gray-500 font-medium">
<iconify-icon className="text-base" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span>Secure Checkout</span>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,theme(colors.gray.50),theme(colors.white))] -z-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-medium mb-8 border border-red-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                Limited Time Offer — Closes Soon
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                Build A Real Online Business Without <span className="text-gray-400">Chasing Shortcuts.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Stop wasting time and money on outdated tactics. Get the exact step-by-step framework used by top digital entrepreneurs to build sustainable, long-term online income.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="{{AFFILIATE_LINK}}">
                    Get Instant Access
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl text-base font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center" href="#problem">
                    Learn How It Works
                </a>
</div>
<div className="flex flex-col items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://i.pravatar.cc/100?img=2"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://i.pravatar.cc/100?img=3"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://i.pravatar.cc/100?img=4"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs font-medium text-gray-600">
                        +
                    </div>
</div>
<div className="flex items-center gap-1 text-yellow-400">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-500 font-medium mt-1">Trusted by 10,000+ ambitious marketers</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Why Most People Fail With Online Businesses?
                </h2>
<p className="text-base text-gray-600">
                    The internet is full of "gurus" selling overnight success. But the harsh reality is that without a proper foundation, effort leads to frustration.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Information Overload</h3>
<p className="text-sm text-gray-600">Watching hundreds of YouTube videos but never taking action because you don't know the exact step step to take first.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Wasting Money on Tactics</h3>
<p className="text-sm text-gray-600">Buying random courses on Facebook ads, dropshipping, or SEO, without understanding how the core business engine works.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Inconsistent Income</h3>
<p className="text-sm text-gray-600">Struggling to find paying clients or customers consistently because there is no predictable system in place.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg font-medium text-gray-900 mb-6">Sound familiar? It's time to stop guessing.</p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300" href="{{AFFILIATE_LINK}}">
                    Unlock The Solution
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 w-full order-2 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center shadow-sm group">

<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<iconify-icon className="text-2xl translate-x-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6 border border-blue-100">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
                        The Digital Income Framework
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        A Structured Path to Real Business Growth
                    </h2>
<p className="text-base text-gray-600 mb-8">
                        This isn't another "get rich quick" scheme. It's a proven, structured system that transforms beginners into skilled digital entrepreneurs. Learn the psychology of conversion, traffic generation, and scalable business models.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Step-by-Step Clarity</h4>
<p className="text-xs text-gray-500 mt-1">Know exactly what to do daily without feeling overwhelmed.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">High-Income Skill Mastery</h4>
<p className="text-xs text-gray-500 mt-1">Master traffic, funnels, and copywriting to generate real value.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Predictable Automation</h4>
<p className="text-xs text-gray-500 mt-1">Build systems that work for you, freeing up your time.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    From Struggling to Successful
                </h2>
<p className="text-base text-gray-600">The difference between failure and success is simply having the right framework.</p>
</div>
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
<div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:sad-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">The Old Way</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-red-400 text-lg shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Confused about where to start
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-red-400 text-lg shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Jumping from one tactic to another
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-red-400 text-lg shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Working 12 hours a day with zero returns
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-red-400 text-lg shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Stressed and ready to quit
                        </li>
</ul>
</div>

<div className="flex-1 bg-gray-900 rounded-2xl p-8 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800">
<div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">With The Framework</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-blue-400 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Clear, daily actionable roadmap
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-blue-400 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Building assets that scale over time
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-blue-400 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Working smart with automated systems
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-blue-400 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Confident and scaling income predictably
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    How It Works
                </h2>
<p className="text-base text-gray-600">Three simple steps to start building your digital income.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200 -z-10"></div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-gray-900 mb-6 shadow-sm">
                        1
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Click &amp; Join</h3>
<p className="text-sm text-gray-600">Secure your spot today and get instant access to the core framework.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-gray-900 mb-6 shadow-sm">
                        2
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Apply The System</h3>
<p className="text-sm text-gray-600">Follow the step-by-step videos. No guesswork, just pure implementation.</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center text-xl font-semibold text-white mb-6 shadow-sm">
                        3
                    </div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Get Results</h3>
<p className="text-sm text-gray-600">Launch your digital asset, attract traffic, and start generating income.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Real People, Real Transformations
                </h2>
<p className="text-base text-gray-600">Join thousands of Indians who have successfully launched their digital businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        "I spent months watching free tutorials and was so confused. This framework gave me the exact blueprint. I secured my first two high-paying clients within 3 weeks of applying the strategies."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                            RS
                        </div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Rahul Sharma</h4>
<p className="text-xs text-gray-500">Freelancer</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        "Finally, a course that doesn't just sell hype. The focus on building sustainable systems is what makes this different. The support and structured approach is unmatched."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-semibold text-sm">
                            PD
                        </div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Priya Desai</h4>
<p className="text-xs text-gray-500">Digital Marketer</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        "I was about to quit trying to make money online. DIF changed my mindset from a 'quick buck' chaser to a real business owner. Best investment I've made in myself."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-sm">
                            AP
                        </div>
<div>
<h4 className="text-sm font-semibold text-gray-900">Amit Patel</h4>
<p className="text-xs text-gray-500">Agency Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.900/40),transparent)]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium mb-4 backdrop-blur-sm border border-white/10">
                    Today Only Offer
                </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                    Everything You Need To Succeed
                </h2>
<p className="text-lg text-gray-400">Here is exactly what you get when you join today.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
<ul className="space-y-6 mb-10">
<li className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium">The Core Digital Income Framework</span>
</div>
<span className="text-gray-400 text-sm line-through">₹25,000</span>
</li>
<li className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium">Bonus: High-Converting Sales Templates</span>
</div>
<span className="text-gray-400 text-sm line-through">₹10,000</span>
</li>
<li className="flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-medium">Bonus: Traffic Generation Mastery</span>
</div>
<span className="text-gray-400 text-sm line-through">₹15,000</span>
</li>
</ul>
<div className="flex flex-col items-center">
<p className="text-gray-400 text-sm mb-2">Total Value: ₹50,000</p>
<div className="flex items-baseline gap-4 mb-8">
<span className="text-5xl md:text-6xl font-semibold tracking-tight text-white">₹1,999</span>
</div>

<div className="flex items-center gap-4 mb-8 text-center">
<div className="flex flex-col">
<span className="text-2xl font-semibold bg-black/50 px-4 py-2 rounded-lg border border-white/10" id="hours">02</span>
<span className="text-xs text-gray-400 mt-1">Hours</span>
</div>
<span className="text-2xl font-semibold text-gray-500 pb-5">:</span>
<div className="flex flex-col">
<span className="text-2xl font-semibold bg-black/50 px-4 py-2 rounded-lg border border-white/10" id="minutes">45</span>
<span className="text-xs text-gray-400 mt-1">Minutes</span>
</div>
<span className="text-2xl font-semibold text-gray-500 pb-5">:</span>
<div className="flex flex-col">
<span className="text-2xl font-semibold bg-black/50 px-4 py-2 rounded-lg border border-white/10" id="seconds">30</span>
<span className="text-xs text-gray-400 mt-1">Seconds</span>
</div>
</div>
<a className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 mb-4 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]" href="{{AFFILIATE_LINK}}">
                        Claim Your Discount Now
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex items-center gap-6 text-xs text-gray-400 mt-4">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            100% Risk-Free Guarantee
                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                            SSL Secured Checkout
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
<p className="text-base text-gray-600">Everything you need to know about the framework.</p>
</div>
<div className="space-y-4">

<details className="group border border-gray-200 rounded-xl bg-white overflow-hidden" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        Is this safe and legitimate?
                        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4">
                        Yes, absolutely. This is not a "get rich quick" scheme. It is a structured educational framework designed to teach you highly sought-after digital skills. Your checkout is processed securely using industry-standard SSL encryption.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        What is the refund policy?
                        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4">
                        We offer a strict no-questions-asked money-back guarantee. If you go through the framework and feel it hasn't delivered value, simply reach out to support within the specified window for a full refund.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        How fast will I see results?
                        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4">
                        Results depend on your execution. Some students secure their first clients or make their first sales within a few weeks, while others take a month to build their foundation. The focus is on long-term sustainable growth, not overnight miracles.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        Who is this for?
                        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4">
                        This is for ambitious beginners, freelancers, and small business owners who want to understand how digital systems actually work. It is NOT for people looking for passive income without doing any work.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        How do I get access?
                        <span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-4 pt-4">
                        Click the button below, complete your secure checkout, and you will instantly receive an email with your private login details to access the entire framework and bonuses.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-gray-50 py-12 border-t border-gray-200 text-center pb-24 md:pb-12">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<span className="font-semibold tracking-tighter text-xl text-gray-900 mb-6 block">DIF.</span>
<div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs font-medium text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> 100% Safe</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> SSL Secured</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:letter-opened-linear"></iconify-icon> No Spam</span>
</div>
<p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Disclosure: This page contains affiliate links. If you choose to enroll, we may earn a commission at no extra cost to you. We only recommend structured programs aligned with long-term digital growth.
                <br/><br/>
                © 2024 Digital Income Framework. All rights reserved.
            </p>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
<a className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors" href="{{AFFILIATE_LINK}}">
            Unlock Offer Now
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center px-4 hidden" id="exitPopup">
<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" id="closePopupBg"></div>
<div className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full relative z-10 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="popupContent">
<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors" id="closePopupBtn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-center">
<div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-3xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Wait! Don't Leave Empty Handed</h3>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    You are exactly one step away from the framework that can change your digital trajectory. Lock in your discount before the timer hits zero.
                </p>
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl text-base font-medium hover:bg-gray-800 transition-colors mb-3" href="{{AFFILIATE_LINK}}">
                    Claim My Discount Now
                </a>
<button className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium" id="noThanksBtn">
                    No thanks, I don't want to grow.
                </button>
</div>
</div>
</div>



    </>
  );
}
