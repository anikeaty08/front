import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white border-b border-zinc-50" x-data="{ open: false }">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-normal tracking-tighter text-zinc-900 flex items-center gap-2 group" href="#">
<span className="w-6 h-6 rounded-full bg-[#824679] text-white flex items-center justify-center text-xs font-semibold group-hover:bg-[#824679]/90 transition-colors">
            E
          </span>
          EVERREST
        </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-[#824679] transition-colors" href="#">
            Services
          </a>
<a className="hover:text-[#824679] transition-colors" href="#">
            Obituaries
          </a>
<a className="hover:text-[#824679] transition-colors" href="#">
            Pre-planning
          </a>
<a className="hover:text-[#824679] transition-colors" href="#">
            About Us
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-normal bg-[#824679] text-white px-4 py-2 rounded-full hover:bg-[#824679]/90 transition-all" href="#">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span>(555) 123-4567</span>
</a>
<button @click="open = !open" className="md:hidden text-zinc-600 hover:text-[#824679]">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden border-t border-zinc-100 bg-white" style={{display: 'none'}} x-collapse="" x-show="open">
<div className="flex flex-col p-6 gap-4 text-sm font-medium text-zinc-600">
<a className="hover:text-[#824679]" href="#">Services</a>
<a className="hover:text-[#824679]" href="#">Obituaries</a>
<a className="hover:text-[#824679]" href="#">Pre-planning</a>
<a className="hover:text-[#824679]" href="#">About Us</a>
<a className="text-[#824679] flex items-center gap-2 mt-2" href="#">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
            (555) 123-4567
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-100 text-xs font-normal text-zinc-400 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#824679]"></span>
          Serving the community since 1954
        </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-normal text-zinc-900 tracking-tight mb-6">
          Honoring life with
          <br className="hidden md:block"/>
<span className="text-[#824679] italic font-serif">grace</span>
          and dignity.
        </h1>
<p className="leading-relaxed text-lg font-light text-zinc-500 max-w-2xl mr-auto mb-10 ml-auto">
          We provide compassionate guidance and support during life's most
          difficult moments, helping you create a meaningful tribute to your
          loved ones.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-[#824679] text-white text-sm font-normal rounded-md hover:bg-[#824679]/90 transition-all flex items-center justify-center gap-2" href="#services">
            Our Services
            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-600 border border-zinc-100 text-sm font-normal rounded-md hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#planning">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="16"></iconify-icon>
            Plan Ahead
          </a>
</div>
</div>

</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-900 mb-2">
              Our Services
            </h2>
<p className="text-zinc-500 text-sm md:text-base max-w-md">
              Tailored arrangements to honor the unique life of your loved one.
            </p>
</div>
<a className="text-[#824679] text-sm font-medium hover:text-[#824679]/80 flex items-center gap-1" href="#">
            View full price list
            <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="w-10 h-10 flex items-center justify-start text-[#824679] mb-6">
<iconify-icon icon="lucide:flower-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-900 mb-2">
              Traditional Burial
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Full-service ceremonies including visitation, service, and
              graveside committal, handled with the utmost respect.
            </p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="w-10 h-10 flex items-center justify-start text-[#824679] mb-6">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-900 mb-2">
              Cremation Services
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Simple, dignified cremation options with or without memorial
              services. Flexible arrangements to suit your wishes.
            </p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors">
<div className="w-10 h-10 flex items-center justify-start text-[#824679] mb-6">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-zinc-900 mb-2">
              Grief Support
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Compassionate resources and counseling referrals to help families
              navigate the journey of healing after loss.
            </p>
</div>
</div>
</div>
</section>


<section className="py-24 bg-[#824679] relative overflow-hidden text-white" id="planning">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-normal text-white mb-6">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
            Peace of Mind
          </div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6 leading-tight">
            Plan ahead for your peace of mind and your family's future.
          </h2>
<p className="text-white/80 text-lg mb-8 font-light max-w-lg leading-relaxed">
            Pre-planning relieves your loved ones of the burden of making
            difficult decisions during a stressful time. Ensure your wishes are
            known and arrangements are in place.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-white text-[#824679] text-sm font-normal rounded-md hover:bg-zinc-50 transition-colors">
              Start Planning Online
            </button>
<button className="px-6 py-3 bg-transparent border border-white/30 text-white text-sm font-normal rounded-md hover:bg-white/10 transition-colors">
              Request a Guide
            </button>
</div>
</div>
<div className="relative hidden lg:block">

</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto rounded-2xl overflow-hidden bg-zinc-50">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-8 md:p-12 flex flex-col justify-center">
<h2 className="text-2xl font-normal tracking-tight text-zinc-900 mb-8">
              Visit Everrest
            </h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#824679] shrink-0">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Main Chapel</h4>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                    1200 Serenity Boulevard Riverdale, NY 10463
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#824679] shrink-0">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">
                    Office Hours
                  </h4>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                    Mon - Fri: 9:00 AM - 5:00 PM
                    <span className="text-[#824679]">
                      24/7 Phone Support Available
                    </span>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#824679] shrink-0">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Contact</h4>
<a className="text-sm text-zinc-500 mt-1 hover:text-[#824679] transition-colors block" href="mailto:care@everrest.com">
                    care@everrest.com
                  </a>
</div>
</div>
</div>
</div>
<div className="bg-zinc-100 h-64 md:h-auto relative">

<img alt="Map Location" className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-3 rounded-full shadow-lg animate-bounce">
<iconify-icon className="text-[#824679]" icon="lucide:map-pin" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8 px-6 mt-auto">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-normal tracking-tighter text-zinc-900 flex items-center gap-2 mb-4" href="#">
<span className="w-5 h-5 rounded-full bg-[#824679] text-white flex items-center justify-center text-[10px] font-semibold">
                E
              </span>
              EVERREST
            </a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Providing dignified and affordable funeral services to families in
              our community for over three generations.
            </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Company
            </h4>
<ul className="space-y-2 text-sm text-zinc-600">
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Our Staff
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Facilities
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Testimonials
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Resources
            </h4>
<ul className="space-y-2 text-sm text-zinc-600">
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Grief Support
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Etiquette
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  FAQ
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Social Security
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Legal
            </h4>
<ul className="space-y-2 text-sm text-zinc-600">
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-[#824679] transition-colors" href="#">
                  Accessibility
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">
            © 2023 Everrest Memorial Services. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-[#824679] transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-[#824679] transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-[#824679] transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
