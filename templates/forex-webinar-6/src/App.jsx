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
colors: {
background: '#0B0B0B',
accent: '#00FF90',
accentHover: '#00CC73',
surface: '#121212',
surfaceHighlight: '#1A1A1A',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Plus Jakarta Sans', 'sans-serif'],
},
boxShadow: {
'neon': '0 0 20px -5px rgba(0, 255, 144, 0.3)',
'neon-strong': '0 0 40px -10px rgba(0, 255, 144, 0.5)',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "EducationEvent",
"name": "Become a Profitable Forex Trader in 4 Simple Steps",
"startDate": "2023-10-29T21:00:00-05:00",
"endDate": "2023-10-29T22:30:00-05:00",
"eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
"eventStatus": "https://schema.org/EventScheduled",
"location": {
"@type": "VirtualLocation",
"url": "https://wealthyvisions.com/webinar"
},
"image": "https://placehold.co/600x400",
"description": "Learn how to grow your trading account with consistency and confidence with Abel Melendez.",
"organizer": {
"@type": "Person",
"name": "Abel Melendez",
"url": "https://wealthyvisions.com"
},
"performer": {
"@type": "Person",
"name": "Abel Melendez"
},
"offers": {
"@type": "Offer",
"name": "Free Admission",
"price": "0",
"priceCurrency": "USD",
"availability": "https://schema.org/InStock",
"validFrom": "2023-10-24T12:00:00-05:00"
}
}



        // Countdown Logic
        function updateCountdown() {
            const now = new Date();
            // Find next Sunday 9PM EST
            const nextSunday = new Date();
            nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
            if(now.getDay() === 0 && now.getHours() >= 21) {
                nextSunday.setDate(nextSunday.getDate() + 7);
            }
            // Set time to 21:00 EST (assuming offset logic or just fixed for demo)
            // Note: For production, use UTC handling. 9PM EST is roughly 01:00 UTC next day
            nextSunday.setHours(21, 0, 0, 0); 
            
            const diff = nextSunday - now;

            if(diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

                document.getElementById('days').innerText = d.toString().padStart(2, '0');
                document.getElementById('hours').innerText = h.toString().padStart(2, '0');
                document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
            }
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Sticky CTA reveal on scroll
        window.addEventListener('scroll', () => {
            const cta = document.getElementById('sticky-cta');
            if (window.scrollY > 600) {
                cta.classList.remove('translate-y-full');
            } else {
                cta.classList.add('translate-y-full');
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-heading font-bold text-lg tracking-tight text-white flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:candlestick-chart" data-width="24"></span>
                WEALTHY VISIONS
            </div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-accent border border-accent/20 rounded-full hover:bg-accent/10 transition-colors" href="#register">
                Reserve Seat
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-grid">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-8 animate-fade-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
                Live Event: This Sunday @ 9PM EST
            </div>
<h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 animate-fade-up delay-100 text-glow">
                Become a Profitable <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">Forex Trader in</span>
<span className="text-accent">4 Simple Steps</span>
</h1>
<p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
                Join Abel Melendez for a <span className="text-white font-medium">FREE live webinar</span> and discover the blueprint to grow your trading account with consistency, logic, and confidence.
            </p>

<div className="flex justify-center gap-4 sm:gap-6 mb-10 animate-fade-up delay-200" id="countdown">

<div className="flex flex-col items-center">
<span className="text-2xl sm:text-4xl font-heading font-semibold text-white" id="days">02</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Days</span>
</div>
<div className="text-2xl sm:text-4xl font-light text-zinc-600">:</div>
<div className="flex flex-col items-center">
<span className="text-2xl sm:text-4xl font-heading font-semibold text-white" id="hours">14</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Hours</span>
</div>
<div className="text-2xl sm:text-4xl font-light text-zinc-600">:</div>
<div className="flex flex-col items-center">
<span className="text-2xl sm:text-4xl font-heading font-semibold text-white" id="minutes">35</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Mins</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
<a className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-accent px-8 font-medium text-black shadow-neon transition-all duration-300 hover:bg-accentHover hover:scale-[1.02]" href="#register">
<span className="mr-2">Reserve Your Free Seat Now</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
</a>
<p className="text-xs text-zinc-500 mt-2 sm:mt-0">
                    Limited Capacity • No Replays
                </p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20"></div>
<svg className="absolute bottom-0 left-0 w-full h-[40vh] opacity-10 stroke-accent/40 z-0" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#grad)" fillOpacity="0.2"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#00FF90', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#0B0B0B', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</section>

<section className="border-y border-white/5 bg-surface py-6">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
<span className="text-sm font-medium">1,000+ Traders Community</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:award" data-width="18"></span>
<span className="text-sm font-medium">Wealthy Visions Academy</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:trending-up" data-width="18"></span>
<span className="text-sm font-medium">Featured Strategy</span>
</div>
</div>
</section>

<section className="py-24 bg-background relative">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-accent rounded-2xl blur-3xl opacity-10"></div>
<div className="relative rounded-2xl border border-white/10 bg-surfaceHighlight overflow-hidden aspect-[4/5] md:aspect-square flex items-end justify-center group">

<div className="absolute inset-0 bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="relative z-10 p-8 w-full">
<h3 className="font-heading text-2xl text-white font-semibold">Abel Melendez</h3>
<p className="text-accent text-sm font-medium">Founder, Wealthy Visions Academy</p>
</div>
</div>
</div>

<div className="order-1 md:order-2">
<h2 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Meet Your Mentor</h2>
<h3 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Real Trading.<br/>Real Results.</h3>
<div className="space-y-6 text-zinc-400 leading-relaxed">
<p>
                        Abel Melendez isn't just a coach; he's a full-time day trader who has navigated the markets for years. As the founder of <strong className="text-white">Wealthy Visions Academy</strong>, he has helped hundreds of students transition from confused beginners to consistent, profitable traders.
                    </p>
<p>
                        "I believe trading shouldn't be complicated. My goal this Sunday is to strip away the noise and show you the exact simplified structure I use every single day."
                    </p>
</div>
<div className="mt-8 flex gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-700"></div>
<div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-600"></div>
<div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-500"></div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-white font-semibold">Join 1,000+ Students</span>
<div className="flex text-accent text-[10px]">
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface/30 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">What You'll Master in 90 Minutes</h2>
<p className="text-zinc-400">This isn't just theory. We are covering actionable steps you can apply Monday morning.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:map" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">The 4-Step Blueprint</h3>
<p className="text-zinc-400 text-sm leading-relaxed">A complete roadmap to trading profitably without spending hours in front of the charts.</p>
</div>

<div className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:wallet" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Start Small, Scale Big</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Learn how to effectively start with as little as $100 and manage risk like a hedge fund manager.</p>
</div>

<div className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:copy" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Copy Live Trades</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Discover how to mirror successful setups while you are still learning the ropes of technical analysis.</p>
</div>

<div className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Community Access</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Get invited to our exclusive Telegram group of 1,000+ traders supporting each other daily.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background overflow-hidden relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-16 text-center tracking-tight">The Winning Formula</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-accent/50 to-zinc-800 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">

<div className="relative flex flex-col md:items-center md:text-center group">
<div className="w-24 h-24 bg-background border border-zinc-700 group-hover:border-accent rounded-full flex items-center justify-center mb-6 shadow-lg transition-colors">
<span className="text-3xl font-bold text-white group-hover:text-accent">1</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Sign Up</h3>
<p className="text-sm text-zinc-400">Register with our recommended, regulated broker.</p>
</div>

<div className="relative flex flex-col md:items-center md:text-center group">
<div className="w-24 h-24 bg-background border border-zinc-700 group-hover:border-accent rounded-full flex items-center justify-center mb-6 shadow-lg transition-colors">
<span className="text-3xl font-bold text-white group-hover:text-accent">2</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Fund Account</h3>
<p className="text-sm text-zinc-400">$100 min deposit<br/>($1,000 recommended).</p>
</div>

<div className="relative flex flex-col md:items-center md:text-center group">
<div className="w-24 h-24 bg-background border border-zinc-700 group-hover:border-accent rounded-full flex items-center justify-center mb-6 shadow-lg transition-colors">
<span className="text-3xl font-bold text-white group-hover:text-accent">3</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Join Telegram</h3>
<p className="text-sm text-zinc-400">Access our FREE private community of traders.</p>
</div>

<div className="relative flex flex-col md:items-center md:text-center group">
<div className="w-24 h-24 bg-background border border-zinc-700 group-hover:border-accent rounded-full flex items-center justify-center mb-6 shadow-lg transition-colors">
<span className="text-3xl font-bold text-white group-hover:text-accent">4</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Profit</h3>
<p className="text-sm text-zinc-400">Take signals and attend live trading sessions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid relative" id="register">
<div className="max-w-4xl mx-auto px-6">
<div className="rounded-3xl border border-white/10 bg-[#151515] p-8 md:p-12 shadow-[0_0_50px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
<div className="flex flex-col md:flex-row gap-12">

<div className="flex-1">
<h2 className="font-heading text-3xl font-semibold text-white mb-2">Reserve Your Spot</h2>
<p className="text-accent font-medium mb-6">🗓 This Sunday @ 9PM EST</p>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                            Seats are strictly limited to ensure quality Q&amp;A time with Abel. Please only register if you are serious about attending.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">100% Free to attend</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">Live Q&amp;A Included</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">No experience needed</span>
</div>
</div>
</div>

<div className="flex-1">
<form action="/thank-you" className="space-y-4" method="POST">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider" htmlFor="name">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider" htmlFor="phone">Phone (for SMS Reminders)</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-zinc-600" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<button className="w-full bg-accent text-black font-semibold rounded-lg py-4 mt-2 hover:bg-accentHover transition-colors shadow-neon text-sm uppercase tracking-wide flex items-center justify-center gap-2 group" type="submit">
                                Secure My Access
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-3">
                                Your information is secure. We hate spam.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-background border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-surfaceHighlight border border-white/5">
<div className="flex text-accent mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-300 text-sm mb-4">"I lost money for 2 years until I joined Abel's webinar. The 4-step process actually makes sense. I'm finally green."</p>
<p className="text-zinc-500 text-xs font-semibold uppercase">Sarah J.</p>
</div>

<div className="p-6 rounded-xl bg-surfaceHighlight border border-white/5">
<div className="flex text-accent mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-300 text-sm mb-4">"The Telegram community is gold. Being able to copy trades while I learn has paid for my vacation."</p>
<p className="text-zinc-500 text-xs font-semibold uppercase">Mark D.</p>
</div>

<div className="p-6 rounded-xl bg-surfaceHighlight border border-white/5">
<div className="flex text-accent mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-300 text-sm mb-4">"Simple, effective, and no BS. Abel gets straight to the point. Highly recommend."</p>
<p className="text-zinc-500 text-xs font-semibold uppercase">David R.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-background text-center">
<div className="flex items-center justify-center gap-2 mb-6 opacity-80">
<span className="iconify text-accent" data-icon="lucide:candlestick-chart" data-width="24"></span>
<span className="font-heading font-bold text-white tracking-tight">WEALTHY VISIONS</span>
</div>
<p className="text-zinc-600 text-xs max-w-md mx-auto leading-relaxed px-6">
            Trading Forex involves risk. Past performance is not indicative of future results. This webinar is for educational purposes only.
        </p>
<div className="mt-8 text-zinc-700 text-[10px]">
            © 2023 Wealthy Visions Academy. All rights reserved.
        </div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur border-t border-white/10 z-40 transform translate-y-full transition-transform duration-500 flex items-center justify-between md:hidden" id="sticky-cta">
<div className="text-sm font-medium text-white">
            Last chance for Sunday
        </div>
<a className="bg-accent text-black text-xs font-bold px-4 py-2 rounded-full shadow-neon" href="#register">
            Join Free
        </a>
</div>



    </>
  );
}
