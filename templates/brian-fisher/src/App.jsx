import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@graph": [
{
"@type": "SoftwareApplication",
"name": "GTMLab",
"operatingSystem": "Web",
"applicationCategory": "BusinessApplication",
"url": "https://gtmlab.netlify.app/",
"description": "Plateforme d'automatisation GTM basée sur les signaux d'achat et l'IA pour la prospection B2B.",
"offers": {
"@type": "Offer",
"price": "0",
"priceCurrency": "EUR"
},
"publisher": {
"@type": "Organization",
"name": "GTMLab",
"url": "https://gtmlab.netlify.app/"
}
},
{
"@type": "Organization",
"name": "GTMLab",
"url": "https://gtmlab.netlify.app/",
"logo": "https://gtmlab.netlify.app/logo.png",
"sameAs": [
"https://www.linkedin.com/company/gtmlab"
]
}
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach(card => {
          card.onmousemove = e => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          };
      });

      const scene = document.getElementById('interactive-scene');
      const cube = document.getElementById('cube');
      let isHovering = false;

      if (scene && cube) {
          scene.addEventListener('mousemove', (e) => {
              isHovering = true;
              const rect = scene.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
              const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
              const rotY = x * 60;
              const rotX = -y * 60;
              cube.style.animation = 'none';
              cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
          });

          scene.addEventListener('mouseleave', () => {
              isHovering = false;
              cube.style.animation = 'spinCube 20s infinite linear';
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header bis_size='{"x":0,"y":24,"w":2315,"h":53,"abs_x":480,"abs_y":67}' className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Menu principal" bis_size='{"x":709,"y":24,"w":896,"h":53,"abs_x":1189,"abs_y":67}' className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-blue-500/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative shadow-lg items-center justify-center">
<iconify-icon className="text-blue-500" icon="lucide:user" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-[15px]">
            MITRA Training
          </span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-[13px] hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-white bg-blue-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">
            Book a Consultation
          </a>
</div>
</nav>
</header>
<main bis_size='{"x":0,"y":0,"w":2315,"h":7334,"abs_x":480,"abs_y":43}' className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex gap-2 text-[11px] uppercase cursor-default font-semibold text-blue-300 tracking-wide bg-blue-500/5 border-blue-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_20px_rgba(37,99,235,0.1)] backdrop-blur-sm items-center">
            Brian Fisher · MITRA Training
          </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tighter mb-8">
            Develop High-Performing
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              Sales and Leadership Teams
            </span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
            Brian Fisher helps organisations strengthen leadership capability,
            improve sales performance, and build confident teams through
            practical professional training.
          </p>
<div className="flex flex-col mb-16 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-[15px] font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]" href="#booking">
              Book a Training Consultation
            </a>
</div>
<div className="w-full max-w-4xl mx-auto border border-white/10 rounded-3xl bg-[#09090b]/90 backdrop-blur-sm aspect-video flex flex-col items-center justify-center relative overflow-hidden shadow-2xl ring-1 ring-white/5">
<div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
<iconify-icon className="text-blue-500 mb-4 relative z-10" icon="lucide:play-circle" width="64"></iconify-icon>
<span className="text-zinc-300 font-medium text-lg relative z-10">
              VIDEO PLACEHOLDER
            </span>
<span className="text-zinc-500 text-sm mt-2 relative z-10">
              Watch Brian Explain MITRA Training
            </span>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] border-white/5 border-t pt-16 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 mb-8 font-mono uppercase tracking-widest">
            Organisations investing in leadership and sales development
          </p>
<div className="w-full max-w-4xl mx-auto h-32 border border-white/10 rounded-2xl bg-zinc-900/30 flex items-center justify-center">
<span className="text-zinc-600 text-sm font-medium tracking-wide">
              IMAGE PLACEHOLDER
            </span>
</div>
</div>
</section>

<section className="bg-black border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">
              Why Many Teams Struggle to Improve Performance
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
<iconify-icon icon="lucide:trending-down" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3">
                Inconsistent Sales Results
              </h3>
<p className="text-zinc-400 leading-relaxed">
                Teams lack the skills needed to convert opportunities
                effectively.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3">
                Leadership Development Gaps
              </h3>
<p className="text-zinc-400 leading-relaxed">
                Managers struggle to motivate and guide teams.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
<iconify-icon icon="lucide:message-circle" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3">
                Low Confidence in Client Conversations
              </h3>
<p className="text-zinc-400 leading-relaxed">
                Professionals hesitate when presenting value.
              </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
<iconify-icon icon="lucide:book-open" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-xl mb-3">
                Lack of Structured Training
              </h3>
<p className="text-zinc-400 leading-relaxed">
                Without consistent development, performance stagnates.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">
              Why Organisations Choose Brian Fisher
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="sc-card rounded-[2rem] p-10 relative spotlight-card flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg">
<iconify-icon icon="lucide:award" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">
                Experienced Trainer
              </h3>
<p className="text-zinc-400 text-[15px] leading-relaxed">
                Extensive experience delivering professional development.
              </p>
</div>
<div className="sc-card rounded-[2rem] p-10 relative spotlight-card flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg">
<iconify-icon icon="lucide:lightbulb" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">
                Practical Learning Approach
              </h3>
<p className="text-zinc-400 text-[15px] leading-relaxed">
                Training designed to be applied immediately.
              </p>
</div>
<div className="sc-card rounded-[2rem] p-10 relative spotlight-card flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">
                Leadership and Sales Expertise
              </h3>
<p className="text-zinc-400 text-[15px] leading-relaxed">
                Combines leadership coaching with sales capability development.
              </p>
</div>
<div className="sc-card rounded-[2rem] p-10 relative spotlight-card flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg">
<iconify-icon icon="lucide:rocket" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">
                Real Workplace Impact
              </h3>
<p className="text-zinc-400 text-[15px] leading-relaxed">
                Focus on improving performance in real business environments.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-full aspect-[21/9] border border-white/10 rounded-3xl bg-zinc-900/30 flex flex-col items-center justify-center mb-10 shadow-xl">
<iconify-icon className="text-zinc-600 mb-4" icon="lucide:image" width="48"></iconify-icon>
<span className="text-zinc-400 font-medium">IMAGE PLACEHOLDER</span>
<span className="text-zinc-500 text-sm mt-2">
              Client success stories and feedback
            </span>
</div>
<p className="text-zinc-300 text-xl leading-relaxed max-w-3xl mx-auto font-light">
            "Organisations that invest in professional development value
            training that builds confidence, capability, and stronger team
            performance."
          </p>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
              How MITRA Training Improves Performance
            </h2>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-zinc-900 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                1
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
<h3 className="text-2xl text-white font-semibold mb-3">
                  Assess Development Needs
                </h3>
<p className="text-zinc-400 leading-relaxed">
                  Identify gaps in leadership and sales capability.
                </p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-zinc-900 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                2
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
<h3 className="text-2xl text-white font-semibold mb-3">
                  Deliver Practical Training
                </h3>
<p className="text-zinc-400 leading-relaxed">
                  Provide structured development sessions.
                </p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-zinc-900 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                3
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
<h3 className="text-2xl text-white font-semibold mb-3">
                  Embed Performance Improvement
                </h3>
<p className="text-zinc-400 leading-relaxed">
                  Ensure training translates into workplace results.
                </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-[15px] font-semibold text-black transition-all hover:bg-zinc-200" href="#booking">
              Improve Your Team Performance
            </a>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-12">
            What's Included
          </h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-4 rounded-full border border-white/10 bg-[#0A0A0A] text-zinc-300 font-medium">
              Sales Skills Development
            </div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-[#0A0A0A] text-zinc-300 font-medium">
              Leadership Training
            </div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-[#0A0A0A] text-zinc-300 font-medium">
              Team Performance Workshops
            </div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-[#0A0A0A] text-zinc-300 font-medium">
              Professional Development Coaching
            </div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-[#0A0A0A] text-zinc-300 font-medium">
              Communication Skills Training
            </div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-5/12 aspect-[4/5] border border-white/10 rounded-3xl bg-zinc-900/30 flex flex-col items-center justify-center shadow-xl">
<iconify-icon className="text-zinc-600 mb-4" icon="lucide:user-circle" width="64"></iconify-icon>
<span className="text-zinc-400 font-medium">IMAGE PLACEHOLDER</span>
<span className="text-zinc-500 text-sm mt-2">Brian Fisher</span>
</div>
<div className="w-full md:w-7/12">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-8">
                About Brian Fisher
              </h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
<p>Hi, I’m Brian Fisher.</p>
<p>
                  Through MITRA Training, I help organisations develop confident
                  leaders and high-performing teams.
                </p>
<p>
                  My goal is simple: deliver practical training that strengthens
                  communication, improves leadership, and drives better sales
                  performance.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter">
              Frequently Asked Questions
            </h2>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">
                Who is MITRA Training designed for?
              </h3>
<p className="text-zinc-400">
                Organisations seeking stronger leadership and team performance.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">
                Is this sales training or leadership training?
              </h3>
<p className="text-zinc-400">
                Both — combining leadership development with sales capability.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">
                Do you work with experienced teams?
              </h3>
<p className="text-zinc-400">
                Yes. Training is tailored to different experience levels.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">
                What makes MITRA Training different?
              </h3>
<p className="text-zinc-400">
                A practical approach focused on real workplace outcomes.
              </p>
</div>
<div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">
                How do we get started?
              </h3>
<p className="text-zinc-400">Book a consultation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl p-8 md:p-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">
            Book Your Training Consultation
          </h2>
<p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Schedule a conversation with Brian Fisher to explore how MITRA
            Training can improve leadership capability and sales performance
            within your organisation.
          </p>
<div className="w-full max-w-2xl mx-auto aspect-[4/3] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center mb-10 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
<iconify-icon className="text-blue-500 mb-4 relative z-10" icon="lucide:calendar" width="48"></iconify-icon>
<span className="text-zinc-300 font-medium relative z-10">
              CALENDLY PLACEHOLDER
            </span>
</div>
<button className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-10 text-[15px] font-semibold text-white transition-all hover:bg-blue-700 w-full sm:w-auto shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            Book My Consultation
          </button>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":7334,"w":2315,"h":386,"abs_x":480,"abs_y":7377}' className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div bis_size='{"x":517,"y":7415,"w":1280,"h":265,"abs_x":997,"abs_y":7458}' className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div>
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5">
<iconify-icon className="text-blue-500" icon="lucide:user" width="18"></iconify-icon>
</div>
              MITRA Training
            </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-sm">
              Brian Fisher helps organisations strengthen leadership capability,
              improve sales performance, and build confident teams.
            </p>
</div>
<div className="flex md:justify-end gap-12">
<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold">Links</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#process">
                Process
              </a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#about">
                About Brian
              </a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#faq">
                FAQ
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
            © 2024 MITRA Training. All rights reserved.
          </div>
</div>
</div>
</footer>


    </>
  );
}
