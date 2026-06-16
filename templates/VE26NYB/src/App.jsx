import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({attrs:{strokeWidth:1.5}});
    document.getElementById('year').textContent=new Date().getFullYear();

    // Intersection fade-in
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target);}
      });
    },{threshold:0.1});
    document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

    // Chart
    const ctx=document.getElementById('successChart');
    new Chart(ctx,{type:'doughnut',
      data:{labels:['Won','Settled','Other'],
        datasets:[{data:[60,30,10],backgroundColor:['#2563eb','#60a5fa','#cbd5e1'],borderWidth:0}]},
      options:{cutout:'70%',plugins:{legend:{display:false}},responsive:true}
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-30 bg-white/70 backdrop-blur">
<nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
<a className="font-bold tracking-tight text-2xl text-blue-600" href="#">LB</a>
<ul className="hidden md:flex items-center gap-8 text-sm font-medium">
<li><a className="hover:text-blue-600" href="#about">About</a></li>
<li><a className="hover:text-blue-600" href="#practice">Practice Areas</a></li>
<li><a className="hover:text-blue-600" href="#team">Attorneys</a></li>
<li><a className="hover:text-blue-600" href="#contact">Contact</a></li>
</ul>
<button className="inline-flex md:hidden" id="navToggle"></button>
<a className="hidden sm:inline-flex items-center gap-1 rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 transition" href="#contact">
<i className="w-4 h-4 stroke-1.5" data-lucide="phone"></i> Consultation
      </a>
</nav>
</header>

<section className="relative isolate">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-4xl px-6 py-36 text-center space-y-6 fade-in">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        Trusted Legal Expertise for Modern Challenges
      </h1>
<p className="text-lg/relaxed max-w-2xl mx-auto">
        We provide strategic solutions, passionate advocacy, and a commitment to your success.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition" href="#contact">
          Schedule Consultation
          <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-6 py-3 font-medium hover:border-blue-600 hover:text-blue-600 transition" href="#about">
          Our Firm
        </a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 space-y-16" id="about">
<div className="grid md:grid-cols-2 gap-12 fade-in">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Decades of Experience</h2>
<p className="text-slate-600 leading-relaxed">
          Since 1995, Lawyer Base has represented individuals and businesses
          with dedication and excellence. Our attorneys blend deep knowledge with
          innovative strategies, ensuring each client receives unparalleled
          support.
        </p>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-blue-600 stroke-1.5" data-lucide="check-circle"></i>
<span>Multi–disciplinary practice.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-blue-600 stroke-1.5" data-lucide="check-circle"></i>
<span>Client-centric, transparent billing.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-blue-600 stroke-1.5" data-lucide="check-circle"></i>
<span>Proven courtroom success.</span>
</li>
</ul>
</div>
<img alt="" className="rounded-lg shadow-lg object-cover h-80 w-full" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</section>

<section className="bg-slate-50/60 py-24" id="practice">
<div className="mx-auto max-w-7xl px-6 space-y-12">
<header className="text-center space-y-4">
<h2 className="text-3xl font-semibold tracking-tight">Practice Areas</h2>
<p className="max-w-2xl mx-auto text-slate-600">
          Comprehensive services across the legal spectrum.
        </p>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">

<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="scale"></i>
<h3 className="font-semibold mb-2">Corporate Law</h3>
<p className="text-sm text-slate-600 flex-1">
            Structuring, transactions, compliance and governance for businesses.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="shield"></i>
<h3 className="font-semibold mb-2">Litigation</h3>
<p className="text-sm text-slate-600 flex-1">
            Aggressive representation in state and federal courts.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="banknote"></i>
<h3 className="font-semibold mb-2">Tax</h3>
<p className="text-sm text-slate-600 flex-1">
            Strategic planning and dispute resolution for complex matters.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="home"></i>
<h3 className="font-semibold mb-2">Real Estate</h3>
<p className="text-sm text-slate-600 flex-1">
            Transactions, zoning, and development counsel.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="users"></i>
<h3 className="font-semibold mb-2">Employment</h3>
<p className="text-sm text-slate-600 flex-1">
            Compliance, disputes, and workforce strategies.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<i className="w-8 h-8 text-blue-600 stroke-1.5 mb-4" data-lucide="lock"></i>
<h3 className="font-semibold mb-2">Intellectual Property</h3>
<p className="text-sm text-slate-600 flex-1">
            Protection and enforcement of innovations and brands.
          </p>
<a className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium group-hover:underline" href="#">
            Learn more <i className="w-4 h-4 stroke-1.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 space-y-12" id="team">
<header className="text-center space-y-4 fade-in">
<h2 className="text-3xl font-semibold tracking-tight">Meet Our Attorneys</h2>
<p className="max-w-2xl mx-auto text-slate-600">
        Skilled advocates with a passion for justice.
      </p>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">

<div className="group rounded-md border border-slate-200 p-6 text-center hover:shadow-md transition">
<img alt="" className="mx-auto h-28 w-28 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<h3 className="font-semibold">Sarah Blake</h3>
<p className="text-sm text-slate-600 mb-4">Managing Partner • Corporate Law</p>
<div className="flex justify-center gap-4">
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="linkedin"></i></a>
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="twitter"></i></a>
</div>
</div>
<div className="group rounded-md border border-slate-200 p-6 text-center hover:shadow-md transition">
<img alt="" className="mx-auto h-28 w-28 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<h3 className="font-semibold">Derrick White</h3>
<p className="text-sm text-slate-600 mb-4">Partner • Litigation</p>
<div className="flex justify-center gap-4">
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="linkedin"></i></a>
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="twitter"></i></a>
</div>
</div>
<div className="group rounded-md border border-slate-200 p-6 text-center hover:shadow-md transition">
<img alt="" className="mx-auto h-28 w-28 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<h3 className="font-semibold">Elena Navarro</h3>
<p className="text-sm text-slate-600 mb-4">Associate • IP Law</p>
<div className="flex justify-center gap-4">
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="linkedin"></i></a>
<a href="#"><i className="w-4 h-4 text-slate-500 stroke-1.5 group-hover:text-blue-600" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50/60 py-24">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center fade-in">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Case Success Rate</h2>
<p className="text-slate-600 mb-6">
          Our dedication translates to real results. We constantly review and refine our litigation strategies to maintain outstanding performance.
        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600 stroke-1.5" data-lucide="check"></i>95% settlements favor clients</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600 stroke-1.5" data-lucide="check"></i>87% win rate in court</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600 stroke-1.5" data-lucide="check"></i>Thousands of satisfied clients</li>
</ul>
</div>
<div>
<div className="w-60 h-60 mx-auto relative">
<canvas height="240" id="successChart" width="240"></canvas>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 space-y-12">
<header className="text-center space-y-4 fade-in">
<h2 className="text-3xl font-semibold tracking-tight">What Clients Say</h2>
</header>
<div className="relative fade-in">
<div className="swiper-wrapper grid md:grid-cols-3 gap-8">

<div className="rounded-md border border-slate-200 p-6 bg-white shadow-sm">
<p className="italic text-slate-600 mb-4">“Exceptional service. They guided us through a complex acquisition seamlessly.”</p>
<div className="flex items-center gap-4">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="font-semibold">Maria S.</div>
<div className="text-xs text-slate-500">CEO, TechCorp</div>
</div>
</div>
</div>
<div className="rounded-md border border-slate-200 p-6 bg-white shadow-sm">
<p className="italic text-slate-600 mb-4">“Their courtroom strategy was clear and effective. We won our case!”</p>
<div className="flex items-center gap-4">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="font-semibold">Adrian F.</div>
<div className="text-xs text-slate-500">Entrepreneur</div>
</div>
</div>
</div>
<div className="rounded-md border border-slate-200 p-6 bg-white shadow-sm">
<p className="italic text-slate-600 mb-4">“Professional, responsive, and results-oriented.”</p>
<div className="flex items-center gap-4">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<div className="font-semibold">Stephanie K.</div>
<div className="text-xs text-slate-500">Small Business Owner</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 text-white py-24" id="contact">
<div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6 fade-in">
<h2 className="text-3xl font-semibold tracking-tight">Schedule a Free Consultation</h2>
<p className="text-white/90">
          Submit the form and one of our attorneys will reach out within 24 hours.
        </p>
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-1.5" data-lucide="phone"></i>
<span className="font-medium">(555) 123-4567</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 stroke-1.5" data-lucide="mail"></i>
<span className="font-medium">contact@lawyerbase.com</span>
</div>
</div>
<form className="space-y-6 fade-in bg-white rounded-md p-8 text-slate-800 shadow-lg">
<div>
<label className="block text-sm font-medium mb-2">Full Name</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email Address</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Message</label>
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" required="" rows="4"></textarea>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition w-full justify-center" type="submit">
          Send Message <i className="w-4 h-4 stroke-1.5" data-lucide="send"></i>
</button>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
<div>
<a className="font-bold text-white tracking-tight text-xl mb-4 inline-block" href="#">LB</a>
<p className="text-sm">
          © <span id="year"></span> Lawyer Base. All rights reserved.
        </p>
</div>
<div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#practice">Practice Areas</a></li>
<li><a className="hover:text-white" href="#team">Attorneys</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Practice</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Corporate</a></li>
<li><a className="hover:text-white" href="#">Litigation</a></li>
<li><a className="hover:text-white" href="#">Tax</a></li>
<li><a className="hover:text-white" href="#">Real Estate</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Connect</h4>
<div className="flex gap-4">
<a href="#"><i className="w-5 h-5 stroke-1.5 hover:stroke-white" data-lucide="linkedin"></i></a>
<a href="#"><i className="w-5 h-5 stroke-1.5 hover:stroke-white" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
