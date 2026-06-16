import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });
    


      function selectInterest(e){const t=["border-white/10","bg-black/30","text-neutral-400","hover:bg-lime-400/10","hover:text-lime-400","hover:border-lime-400/30"],l=["bg-lime-400","text-black","border-lime-400","font-medium","shadow-[0_0_15px_rgba(190,242,100,0.4)]","hover:bg-lime-300"];Array.from(e.parentElement.children).forEach(e=>{e.classList.remove(...l),e.classList.add(...t)}),e.classList.remove(...t),e.classList.add(...l)}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#bef264]"></div>
          EFFORTLESS
        </a>
<div className="hidden md:flex gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#contact">
            About &amp; Contact
          </a>
</div>
<a className="hover:bg-lime-400 transition-all duration-300 text-xs font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">
          Book Meeting
        </a>
</div>
</nav>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] glow-green blur-3xl rounded-full opacity-40"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] glow-green blur-3xl rounded-full opacity-20"></div>
</div>

<section className="min-h-screen flex flex-col pt-20 relative justify-center" id="home">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal mb-6 flex justify-center active">
<span className="border border-lime-400/20 bg-lime-400/5 text-lime-400 text-xs px-3 py-1 rounded-full tracking-wide uppercase font-medium">
            AI Automation Agency
          </span>
</div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] active">
          Your business,
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500 glow-text">
            on autopilot.
          </span>
</h1>
<p className="reveal max-w-xl mx-auto text-lg md:text-xl font-light text-neutral-400 mb-10 leading-relaxed active">
          "AI doesn't sleep, so you can."
          <br/>
          We streamline your operations with
          <span className="text-white">0% errors</span>
          and absolute efficiency.
        </p>
<div className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center active">
<a className="group bg-lime-400 hover:bg-lime-300 text-black px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2" href="#contact">
            Book a Meeting
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-white hover:text-lime-400 px-8 py-4 text-sm font-medium transition-colors flex items-center gap-2" href="#services">
            Explore Services
            <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="reveal mt-24 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
<div>
<div className="text-2xl font-medium text-white mb-1 tracking-tight">
              0%
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
              Error Rate
            </div>
</div>
<div className="">
<div className="text-2xl font-medium text-white mb-1 tracking-tight">
              24/7
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
              Availability
            </div>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1 tracking-tight">
              10x
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
              Faster Response
            </div>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1 tracking-tight">
              100%
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
              Automated
            </div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 relative" id="services">
<div className="max-w-6xl mx-auto px-6 w-full">
<div className="reveal mb-16 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
            Intelligent Systems
          </h2>
<p className="text-neutral-500 max-w-md font-light">
            Deploying cutting-edge AI agents to handle communication and
            outreach seamlessly.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="reveal group border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-10 rounded-3xl transition-all duration-500 hover:border-lime-400/30">
<div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              AI Receptionist &amp; Chatbot
            </h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
              Instant responses to customer inquiries, appointment scheduling,
              and support tickets. Our receptionist never takes a break and
              handles thousands of conversations simultaneously.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                Instant Responses
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                Multi-language Support
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                CRM Integration
              </li>
</ul>
</div>

<div className="reveal group border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-10 rounded-3xl transition-all duration-500 hover:border-lime-400/30">
<div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              AI Outreach Bot
            </h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
              Hyper-personalized cold outreach at scale. We identify leads,
              craft tailored messages, and follow up automatically to fill your
              calendar with qualified meetings.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                Lead Qualification
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                Automated Follow-ups
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-lime-400" icon="lucide:check" width="16"></iconify-icon>
                Sentiment Analysis
              </li>
</ul>
</div>
</div>
<div className="reveal mt-16 flex justify-center">
<a className="bg-white text-black hover:bg-lime-400 px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(190,242,100,0.4)]" href="#contact">
            Book a Strategy Meeting
          </a>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 relative bg-gradient-to-b from-transparent to-lime-900/5" id="contact">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

<div className="reveal space-y-12">
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">
              About Effortless
            </h2>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
              We are a team of AI engineers and automation specialists dedicated
              to removing friction from business processes. We believe the
              future belongs to those who automate the mundane to focus on the
              extraordinary.
            </p>
<p className="text-neutral-400 font-light leading-relaxed">
              Our systems are designed to be invisible yet impactful, providing
              you with a seamless layer of intelligence that powers your growth.
            </p>
</div>
<div>
<h3 className="text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:share-2"></iconify-icon>
              Connect with us
            </h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300" href="#">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="reveal bg-neutral-900/50 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium text-white tracking-tight">
              Book a Meeting
            </h2>
<div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium ml-1">
                Full Name
              </label>
<input className="placeholder-neutral-700 transition-colors text-sm text-white bg-black/50 w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium ml-1">
                Email Address
              </label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-700 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium ml-1">
                Interest
              </label>
<div className="grid grid-cols-2 gap-3">
<button className="border border-white/10 bg-black/30 text-neutral-400 text-xs py-3 rounded-xl hover:bg-lime-400/10 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300" onclick="selectInterest(this)" type="button">
                  Chatbots
                </button>
<button className="border border-white/10 bg-black/30 text-neutral-400 text-xs py-3 rounded-xl hover:bg-lime-400/10 hover:text-lime-400 hover:border-lime-400/30 transition-all duration-300" onclick="selectInterest(this)" type="button">
                  Outreach
                </button>
</div>
</div>
<button className="w-full bg-lime-400 hover:bg-lime-300 text-black font-medium py-4 rounded-full mt-4 transition-colors text-sm flex items-center justify-center gap-2">
              Confirm Booking
              <iconify-icon icon="lucide:calendar-check" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-neutral-600 font-light pt-2">
              Effortless Agency. No hidden fees.
            </p>
</form>
</div>
</div>
<footer className="absolute bottom-6 w-full text-center">
<p className="text-xs text-neutral-700 font-light tracking-wide">
          © 2024 EFFORTLESS AI AGENCY
        </p>
</footer>
</section>




    </>
  );
}
