import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide icons still used for checkmarks where appropriate, though Iconify is primary now
      lucide.createIcons();

      // Pricing Data
      const pricing = {
          monthly: {
              rahmah: { price: "3,000", desc: "every 3 months (~$10)" },
              sakeenah: { price: "4,000", desc: "per month (~$15)" },
              barakah: { price: "6,000", desc: "per month (~$24)" }
          },
          yearly: {
              rahmah: { price: "11,000", desc: "per year (~$40)" },
              sakeenah: { price: "44,000", desc: "per year (1 month free)" },
              barakah: { price: "66,000", desc: "per year (1 month free)" }
          },
          "3year": {
              rahmah: { price: "30,000", desc: "for 3 years (Save 20%)" },
              sakeenah: { price: "120,000", desc: "for 3 years (6 months free)" },
              barakah: { price: "180,000", desc: "for 3 years (6 months free)" }
          }
      };

      function switchPlan(plan) {
          // Update Buttons
          const buttons = ['monthly', 'yearly', '3year'];
          buttons.forEach(btn => {
              const el = document.getElementById(`btn-${btn}`);
              if (btn === plan) {
                  el.classList.remove('text-white/50', 'bg-transparent');
                  el.classList.add('text-white', 'bg-white/10', 'shadow-sm');
              } else {
                  el.classList.add('text-white/50', 'bg-transparent');
                  el.classList.remove('text-white', 'bg-white/10', 'shadow-sm');
              }
          });

          // Update Badge
          const badge = document.getElementById('savings-badge');
          if (plan === 'monthly') badge.style.opacity = '0';
          else badge.style.opacity = '1';

          // Update Text
          document.getElementById('price-rahmah').innerText = pricing[plan].rahmah.price;
          document.getElementById('desc-rahmah').innerText = pricing[plan].rahmah.desc;

          document.getElementById('price-sakeenah').innerText = pricing[plan].sakeenah.price;
          document.getElementById('desc-sakeenah').innerText = pricing[plan].sakeenah.desc;

          document.getElementById('price-barakah').innerText = pricing[plan].barakah.price;
          document.getElementById('desc-barakah').innerText = pricing[plan].barakah.desc;
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-800/10 rounded-full blur-[100px]"></div>
<div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-emerald-500/5 rounded-full blur-[80px]"></div>
</div>

<nav className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-serif italic text-sm" style={{}}>
          R
        </div>
<div className="text-sm tracking-widest uppercase font-medium text-emerald-500" style={{}}>
          Rawaah
        </div>
</div>
<div className="hidden md:flex gap-6">
<button className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" onclick="document.getElementById('about').scrollIntoView()" style={{}}>
          About
        </button>
<button className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" onclick="document.getElementById('work').scrollIntoView()" style={{}}>
          Work
        </button>
<button className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" onclick="document.getElementById('plans').scrollIntoView()" style={{}}>
          Plans
        </button>
</div>
</nav>

<main className="flex-grow flex flex-col lg:px-12 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 justify-center">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-24">

<div className="lg:col-span-7 flex flex-col justify-center space-y-12">

<div className="space-y-4">
<div className="inline-flex gap-2 text-xs text-emerald-400 tracking-wide bg-emerald-950/30 border-emerald-500/20 border rounded-full mb-2 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Trusted by 15+ Overseas Families<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span></div>
<h1 className="text-5xl lg:text-7xl text-white font-serif tracking-tight leading-[1.05]">
              You Remember.
              <br/>
<span className="text-emerald-500/90 italic">We Maintain.</span>
</h1>
<p className="text-xl lg:text-2xl font-urdu text-white/50 mt-2 leading-relaxed" style={{lineHeight: '1.8'}}>
              محبت، یاد اور وقار کا ایک ذریعہ
            </p>
<p className="mt-6 text-lg text-white/60 font-light max-w-lg leading-relaxed" style={{}}>
              Living abroad? We bridge the distance with dignified grave care, fresh flowers, and verified video updates. An <span className="text-emerald-400/80 italic" style={{}}>Amanah</span> (trust) we fulfill with sincerity.
            </p>
</div>

<div className="flex flex-wrap gap-4 pt-2">
<button className="group relative px-8 py-4 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-900/50 hover:shadow-emerald-500/25" onclick="document.getElementById('plans').scrollIntoView()">
<span className="text-sm font-medium tracking-wide flex items-center gap-2" style={{}}>
                View Plans
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</button>
<a className="group hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-white bg-white/5 border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8 relative" href="https://wa.me/yournumber">
<iconify-icon className="" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-wide" onclick="window.location.href='https://wa.me/923331533953'" role="button">Chat on WhatsApp</span>
</a>
</div>
<p className="text-xs text-emerald-500/60 font-medium tracking-wide" style={{}}>
            *Replies typically within 2 hours
          </p>
</div>

<div className="lg:col-span-5 flex flex-col space-y-5">

<div className="group cursor-pointer w-full flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300">
<div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-800 relative shadow-lg">
<img alt="Cleaning" className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09269411-ab80-4332-91be-20ea9bca2c5e_320w.png"/>
<div className="bg-emerald-950/20 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="ml-6 flex-grow">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase" style={{}}>
                  Maintenance
                </span>
</div>
<h3 className="text-lg font-medium text-white" style={{}}>Grave Cleaning</h3>
<p className="text-sm text-white/40 font-light mt-1" style={{}}>
                Washing, stone care &amp; trimming.
              </p>
</div>
</div>

<div className="group cursor-pointer w-full flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300">
<div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-800 relative shadow-lg">
<img alt="Flowers" className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1885eec8-4c51-4014-804c-32ed9725211f_320w.png"/>
<div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply"></div>
</div>
<div className="ml-6 flex-grow">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase" style={{}}>
                  Tribute
                </span>
</div>
<h3 className="text-lg font-medium text-white" style={{}}>Fresh Florals</h3>
<p className="text-sm text-white/40 font-light mt-1" style={{}}>
                Fresh roses &amp; jasmine arrangements.
              </p>
</div>
</div>

<div className="group cursor-pointer w-full flex items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300">
<div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-800 relative shadow-lg">
<img alt="Updates" className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=2538&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/90 drop-shadow-lg" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="ml-6 flex-grow">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase" style={{}}>
                  Verification
                </span>
</div>
<h3 className="text-lg font-medium text-white" style={{}}>Video Updates</h3>
<p className="text-sm text-white/40 font-light mt-1" style={{}}>
                See the care with your own eyes.
              </p>
</div>
</div>
</div>
</div>

<div className="mb-24 pt-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight mb-4" style={{}}>Trusted Grave Care Services in Pakistan</h2>
<p className="text-white/50 text-sm max-w-2xl mx-auto" style={{}}>We operate with a dedicated on-ground team, ensuring your request is handled with personal care, not outsourced to strangers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1" style={{}}>Main Cities</h3>
<p className="leading-relaxed text-xs text-white/40" style={{}}>Serving Lahore, Islamabad &amp; Rawalpindi.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1" style={{}}>Real Team</h3>
<p className="text-xs text-white/40 leading-relaxed" style={{}}>A respectful, dedicated team. No random laborers.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon className="" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1" style={{}}>Digital Proof</h3>
<p className="text-xs text-white/40 leading-relaxed" style={{}}>Before &amp; After photos and video sent via WhatsApp.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1" style={{}}>Overseas Friendly</h3>
<p className="text-xs text-white/40 leading-relaxed" style={{}}>Easy online payment &amp; communication for expats.</p>
</div>
</div>
</div>

<div className="mb-24" id="work">
<div className="flex justify-between items-end mb-8">
<h3 className="text-3xl font-serif text-white tracking-tight" style={{}}>Our Work</h3>
<span className="text-xs text-white/40 hidden md:block" style={{}}>Real updates shared with families</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/212acc4b-5d22-4517-9323-0f4a49964f5d_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
<div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1" style={{}}>Cleanliness</div>
<p className="text-white text-sm font-medium" style={{}}>Thorough washing &amp; debris removal</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ace821ad-783e-4158-88e7-2c19d97a68a7_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
<div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1" style={{}}>Tribute</div>
<p className="text-white text-sm font-medium" style={{}}>Fresh Rose &amp; Jasmine petals</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4119a7d-35d9-46bb-be51-e79492a15ff8_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
<div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1" style={{}}>Custom</div>
<p className="text-sm font-medium text-white" style={{}}>Any special requests are done</p>
</div>
</div>
</div>
</div>

<div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-16" id="about">
<div className="">
<h3 className="text-3xl font-serif text-white tracking-tight mb-6" style={{}}>
            Who We Are
          </h3>
<div className="space-y-6 text-white/60 font-light leading-relaxed">
<p className="" style={{}}>
<span className="text-emerald-400 font-medium" style={{}}>Rawaah</span>
              is a youth-led initiative founded on the principles of empathy, responsibility, and service.
            </p>
<p className="" style={{}}>
                We are a team of dedicated young professionals who realized the difficulty overseas Pakistanis face in maintaining the final resting places of their loved ones. What started as a small act of kindness has grown into a trusted service.
            </p>
<p className="" style={{}}>
              We don't just clean; we care. We treat every grave as if it belongs to our own family, ensuring the sanctity and dignity it deserves.
            </p>
<div className="flex gap-4 pt-4">
<div className="pl-4 border-l border-emerald-500/30">
<div className="text-2xl font-serif text-white">Mission</div>
<div className="text-sm mt-1" style={{}}>
                  To preserve remembrance through distance.
                </div>
</div>
</div>

<div className="pt-8 flex gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/5 overflow-hidden">

<div className="w-full h-full bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-400" style={{}}>A</div>
</div>
<div className="">
<div className="text-sm font-medium text-white" style={{}}>Hussain T</div>
<div className="text-[10px] text-white/40 uppercase tracking-wider" style={{}}>Co-Founder</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/5 overflow-hidden">

<div className="w-full h-full bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-400" style={{}}>Z</div>
</div>
<div className="">
<div className="text-sm font-medium text-white" style={{}}>Usman W</div>
<div className="text-[10px] uppercase text-white/40 tracking-wider" style={{}}>CO-FOUNDER</div>
</div>
</div>
</div>
</div>
</div>
<div className="min-h-[400px] overflow-hidden flex flex-col bg-emerald-950/20 h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#010a05] via-[#010a05]/50 to-transparent"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-emerald-500 mb-4 opacity-50" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="-translate-y-4 text-xl italic text-white/90 font-serif">“5% of our profits go towards feeding orphans who have lost their parents — and their parents’ grave maintenance is our responsibility, done free of cost.”</p>
</div>
</div>
</div>

<div className="border-white/5 border-t mt-12 pt-12" id="plans">
<div className="flex flex-col items-center text-center mb-12 space-y-4">
<h3 className="text-3xl lg:text-4xl font-serif text-white tracking-tight">
            Subscription Plans
          </h3>
<p className="text-white/40 text-sm max-w-md" style={{}}>
            Choose the duration of your care. Cancel anytime.
          </p>

<div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mt-6 relative">
<button className="relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white bg-white/10 shadow-sm" id="btn-monthly" onclick="switchPlan('monthly')" style={{}}>
              Monthly
            </button>
<button className="transition-all duration-300 hover:text-white z-10 text-sm font-medium text-white/50 rounded-full pt-2 pr-6 pb-2 pl-6 relative" id="btn-yearly" onclick="switchPlan('yearly')" style={{}}>
              Yearly
            </button>
<button className="relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/50 hover:text-white" id="btn-3year" onclick="switchPlan('3year')" style={{}}>
              3-Year
            </button>
</div>
<div className="h-6 text-xs text-emerald-400 font-medium tracking-wide opacity-0 transition-opacity duration-300" id="savings-badge" style={{}}>
            Save up to 20% + 6 Months Free
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-emerald-500/20 hover:bg-emerald-900/[0.05] transition-all duration-300 group relative">
<div className="absolute top-0 right-0 p-6 opacity-50">
<div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
</div>
<div className="mb-6">
<h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2" style={{}}>
                Basic
              </h4>
<h3 className="text-2xl font-serif text-white">Rahmah</h3>
<p className="text-white/40 text-xs mt-1 italic" style={{}}>"Mercy"</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-sm text-emerald-500/80 font-medium" style={{}}>PKR</span>
<span className="text-3xl font-semibold text-white" id="price-rahmah">
                  3,000
                </span>
</div>
<div className="text-sm text-white/40 mt-1" id="desc-rahmah" style={{}}>
                every 3 months (~$10)
              </div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Cleaning every 3 months
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Before &amp; after photos
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Light grass trimming
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                WhatsApp update
              </li>
</ul>
<a className="block text-center w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all" href="https://wa.me/yournumber?text=I'm%20interested%20in%20the%20Rahmah%20Plan" style={{}} target="_blank">
              Select Rahmah
            </a>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-gradient-to-b from-amber-500/[0.03] to-white/[0.02] border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 group relative transform md:-translate-y-4 shadow-2xl shadow-black/50">
<div className="absolute top-0 right-0 p-6">
<div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]"></div>
</div>
<div className="mb-6">
<h4 className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2" style={{}}>
                Standard
              </h4>
<h3 className="text-2xl font-serif text-white">Sakeenah</h3>
<p className="text-white/40 text-xs mt-1 italic" style={{}}>"Tranquility"</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-sm text-amber-500/80 font-medium" style={{}}>PKR</span>
<span className="text-4xl font-semibold text-white" id="price-sakeenah">
                  4,000
                </span>
</div>
<div className="text-sm text-white/40 mt-1" id="desc-sakeenah" style={{}}>
                per month (~$15)
              </div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex text-sm text-white/80 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-amber-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium" style={{}}>Monthly</span>
                grave cleaning
              </li>
<li className="flex items-start gap-3 text-sm text-white/80" style={{}}>
<iconify-icon className="text-amber-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                Fresh flower arrangement
              </li>
<li className="flex items-start gap-3 text-sm text-white/80" style={{}}>
<iconify-icon className="text-amber-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                Video + Photo updates
              </li>
<li className="flex items-start gap-3 text-sm text-white/80" style={{}}>
<iconify-icon className="text-amber-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                Weed control &amp; maintenance
              </li>
</ul>
<a className="block text-center w-full py-3 rounded-lg bg-amber-500 text-black font-medium text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20" href="https://wa.me/yournumber?text=I'm%20interested%20in%20the%20Sakeenah%20Plan" style={{}} target="_blank">
              Select Sakeenah
            </a>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-rose-500/20 hover:bg-rose-900/[0.05] transition-all duration-300 group relative">
<div className="absolute top-0 right-0 p-6 opacity-50">
<div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
</div>
<div className="mb-6">
<h4 className="text-rose-400 text-sm font-bold uppercase tracking-widest mb-2" style={{}}>
                Premium
              </h4>
<h3 className="text-2xl font-serif text-white">Barakah</h3>
<p className="text-white/40 text-xs mt-1 italic" style={{}}>"Blessing"</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-sm text-rose-500/80 font-medium" style={{}}>PKR</span>
<span className="text-3xl font-semibold text-white" id="price-barakah">
                  6,000
                </span>
</div>
<div className="text-sm text-white/40 mt-1" id="desc-barakah" style={{}}>
                per month (~$24)
              </div>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-rose-200" style={{}}>Biweekly</span>
                cleaning
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Fresh flowers + Rosewater
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Free cleaning on Holidays (Eid)
              </li>
<li className="flex items-start gap-3 text-sm text-white/70" style={{}}>
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                HD Photo &amp; Video Reports
              </li>
</ul>
<a className="block text-center w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-rose-600 hover:border-rose-500 hover:text-white transition-all" href="https://wa.me/yournumber?text=I'm%20interested%20in%20the%20Barakah%20Plan" style={{}} target="_blank">
              Select Barakah
            </a>
</div>
</div>
</div>

<div className="mt-24 mb-12 border-t border-white/5 pt-12">
<h3 className="text-3xl font-serif text-white tracking-tight mb-8 text-center" style={{}}>Frequently Asked Questions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="">
<h4 className="text-white font-medium mb-2 flex items-center gap-2" style={{}}>
<iconify-icon className="text-emerald-500" icon="solar:question-circle-linear"></iconify-icon>
                    Which cities do you serve?
                </h4>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>We currently serve cemeteries in Karachi, Lahore, Islamabad, and Rawalpindi. We are expanding to other cities soon.</p>
</div>

<div className="">
<h4 className="text-white font-medium mb-2 flex items-center gap-2" style={{}}>
<iconify-icon className="text-emerald-500" icon="solar:question-circle-linear"></iconify-icon>
                    How do I receive updates?
                </h4>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>After every visit, we send high-quality photos and video proof directly to your WhatsApp to ensure peace of mind.</p>
</div>

<div className="">
<h4 className="text-white font-medium mb-2 flex items-center gap-2" style={{}}>
<iconify-icon className="text-emerald-500" icon="solar:question-circle-linear"></iconify-icon>
                    Is this service Islamic-compliant?
                </h4>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>Yes, absolutely. We strictly adhere to Islamic guidelines regarding grave maintenance, avoiding any innovations (Bid'ah).</p>
</div>

<div className="">
<h4 className="text-white font-medium mb-2 flex items-center gap-2" style={{}}>
<iconify-icon className="text-emerald-500" icon="solar:question-circle-linear"></iconify-icon>
                    How do overseas families pay?
                </h4>
<p className="text-sm text-white/50 leading-relaxed" style={{}}>We accept international bank transfers, Wise, and Remitly to make payments seamless for overseas Pakistanis.</p>
</div>
</div>
</div>
</main>

<footer className="lg:px-12 bg-[#010a05] w-full max-w-7xl border-white/5 border-t mt-12 mr-auto ml-auto pt-6 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-serif italic text-sm" style={{}}>R</div>
<div className="text-sm tracking-widest uppercase font-medium text-emerald-500" style={{}}>Rawaah</div>
</div>
<p className="text-sm text-white/50 max-w-xs leading-relaxed" style={{}}>
                Serving overseas families with care, dignity, and transparency. Your trust is our responsibility.
            </p>
</div>

<div className="">
<h5 className="text-white text-sm font-semibold mb-4" style={{}}>Contact Us</h5>
<ul className="space-y-3">
<li className="">
<a className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm text-white/60" href="https://wa.me/923331533953">
<iconify-icon className="" icon="solar:phone-calling-linear"></iconify-icon>
                        WhatsApp Support
                    </a>
</li>
<li className="">
<a className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm text-white/60" href="/mailto:rawaahservices2@gmail.com">Rawaahservices2@gmail.com<iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</li>
<li className="">
<a className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm text-white/60" href="https://www.instagram.com/rawaahservices?igsh=MWI1YTBnM2toand3NQ%3D%3D&amp;utm_source=qr">
<iconify-icon icon="solar:camera-minimalistic-linear"></iconify-icon>
                        Instagram
                    </a>
</li>
</ul>
</div>

<div className="">
<h5 className="text-white text-sm font-semibold mb-4" style={{}}>Service Areas</h5>
<ul className="text-sm text-white/60 space-y-2">
<li className=""></li>
<li className="" style={{}}>Lahore</li>
<li className="" style={{}}>Islamabad</li>
<li className="" style={{}}>Rawalpindi</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 gap-4">
<span className="text-xs">© 2026 Rawaah Services. All rights reserved.</span>
<span className="text-xs flex items-center gap-1" style={{}}>
          With Sincerity from
          <span className="text-emerald-500/50" style={{}}>Pakistan</span>
</span>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 md:hidden" href="https://wa.me/yournumber">
<iconify-icon icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
</a>


    </>
  );
}
