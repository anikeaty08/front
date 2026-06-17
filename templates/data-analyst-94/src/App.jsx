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



        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
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
      

<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-lg font-semibold tracking-tight" href="#">SS</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-black transition-colors" href="#about">About</a>
<a className="text-sm text-gray-600 hover:text-black transition-colors" href="#experience">Experience</a>
<a className="text-sm text-gray-600 hover:text-black transition-colors" href="#skills">Skills</a>
<a className="text-sm text-gray-600 hover:text-black transition-colors" href="#projects">Projects</a>
<a className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden" id="menuBtn">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<a className="text-xl text-gray-600 hover:text-black transition-colors mobile-link" href="#about">About</a>
<a className="text-xl text-gray-600 hover:text-black transition-colors mobile-link" href="#experience">Experience</a>
<a className="text-xl text-gray-600 hover:text-black transition-colors mobile-link" href="#skills">Skills</a>
<a className="text-xl text-gray-600 hover:text-black transition-colors mobile-link" href="#projects">Projects</a>
<a className="text-xl bg-black text-white px-6 py-3 rounded-full mobile-link" href="#contact">Contact</a>
</div>

<section className="min-h-screen flex items-center justify-center px-6 pt-20">
<div className="max-w-4xl mx-auto text-center">
<div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
<span className="text-4xl font-semibold tracking-tight text-gray-400">SS</span>
</div>
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Data Analyst</p>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">Sunny Singh</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Transforming complex data into actionable insights for over 6 years. Passionate about uncovering stories hidden in numbers.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium" href="#contact">
                    Get in Touch
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-gray-300 px-8 py-4 rounded-full hover:border-black transition-colors text-sm font-medium" href="#projects">
                    View Work
                </a>
</div>
<div className="mt-16 flex justify-center gap-6">
<a className="text-gray-400 hover:text-black transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-400 hover:text-black transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-400 hover:text-black transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">About Me</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Driven by curiosity, powered by data</h2>
<div className="space-y-4 text-gray-600 font-light leading-relaxed">
<p>With over 6 years of experience in data analytics, I've had the privilege of working with diverse industries—from fintech startups to enterprise-level organizations—helping them make data-driven decisions that matter.</p>
<p>My journey began with a simple fascination: how can numbers tell stories? This curiosity evolved into a career dedicated to extracting meaningful insights from complex datasets, building predictive models, and creating visualizations that speak to both technical and non-technical stakeholders.</p>
<p>Based in Bangalore, India's tech hub, I thrive in environments where data meets strategy, and insights drive innovation.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl border border-gray-200">
<p className="text-4xl font-semibold tracking-tight mb-2">6+</p>
<p className="text-sm text-gray-500">Years Experience</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200">
<p className="text-4xl font-semibold tracking-tight mb-2">50+</p>
<p className="text-sm text-gray-500">Projects Delivered</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200">
<p className="text-4xl font-semibold tracking-tight mb-2">15+</p>
<p className="text-sm text-gray-500">Clients Served</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200">
<p className="text-4xl font-semibold tracking-tight mb-2">3</p>
<p className="text-sm text-gray-500">Industries</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="experience">
<div className="max-w-6xl mx-auto">
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Experience</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Professional Journey</h2>
<div className="space-y-12">
<div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-gray-100">
<div>
<p className="text-sm text-gray-500">2021 — Present</p>
</div>
<div className="md:col-span-3">
<h3 className="text-xl font-medium mb-2">Senior Data Analyst</h3>
<p className="text-gray-500 mb-4">Flipkart, Bangalore</p>
<p className="text-gray-600 font-light leading-relaxed">Leading analytics initiatives for the marketplace division, driving insights that impact millions of transactions daily. Spearheading the development of predictive models for demand forecasting and customer behavior analysis.</p>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-gray-100">
<div>
<p className="text-sm text-gray-500">2019 — 2021</p>
</div>
<div className="md:col-span-3">
<h3 className="text-xl font-medium mb-2">Data Analyst</h3>
<p className="text-gray-500 mb-4">Razorpay, Bangalore</p>
<p className="text-gray-600 font-light leading-relaxed">Built comprehensive analytics dashboards for payment processing insights. Developed fraud detection models that reduced chargebacks by 23%. Collaborated with product teams to optimize user conversion funnels.</p>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6 pb-12 border-b border-gray-100">
<div>
<p className="text-sm text-gray-500">2018 — 2019</p>
</div>
<div className="md:col-span-3">
<h3 className="text-xl font-medium mb-2">Junior Data Analyst</h3>
<p className="text-gray-500 mb-4">Infosys, Pune</p>
<p className="text-gray-600 font-light leading-relaxed">Started my analytics journey working on enterprise data solutions. Gained expertise in SQL, Python, and data visualization tools while supporting Fortune 500 clients with reporting and analysis needs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50" id="skills">
<div className="max-w-6xl mx-auto">
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Expertise</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Skills &amp; Tools</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Data Engineering</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">SQL</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">PostgreSQL</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">MongoDB</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">BigQuery</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Snowflake</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:code" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Programming</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Python</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">R</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Pandas</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">NumPy</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Scikit-learn</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Visualization</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Tableau</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Power BI</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Looker</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Matplotlib</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Plotly</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:brain" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Machine Learning</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Regression</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Classification</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Clustering</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Time Series</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:cloud" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Cloud &amp; Tools</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">AWS</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">GCP</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Airflow</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Git</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Jupyter</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-200">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:target" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-4">Domain Expertise</h3>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">E-commerce</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Fintech</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">A/B Testing</span>
<span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full">Product Analytics</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-6xl mx-auto">
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Featured Work</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Selected Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<span className="iconify text-gray-300 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:trending-up" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">Demand Forecasting Engine</h3>
<p className="text-gray-500 text-sm mb-4">Built a ML-powered forecasting system that improved inventory efficiency by 34% across 50+ product categories.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-gray-500">Python</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">Prophet</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">BigQuery</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<span className="iconify text-gray-300 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:shield-check" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">Fraud Detection System</h3>
<p className="text-gray-500 text-sm mb-4">Developed real-time fraud detection models processing 10M+ daily transactions with 99.2% accuracy.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-gray-500">Scikit-learn</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">XGBoost</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">Kafka</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<span className="iconify text-gray-300 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:users" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">Customer Segmentation</h3>
<p className="text-gray-500 text-sm mb-4">Created dynamic customer segments using RFM analysis and clustering, increasing campaign ROI by 28%.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-gray-500">K-Means</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">Tableau</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">SQL</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-video rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<span className="iconify text-gray-300 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:layout-dashboard" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">Executive Analytics Dashboard</h3>
<p className="text-gray-500 text-sm mb-4">Designed and built a real-time KPI dashboard used by C-suite executives for strategic decision-making.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-gray-500">Looker</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">dbt</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs text-gray-500">Snowflake</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black text-white" id="contact">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div>
<p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Get in Touch</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Let's work together</h2>
<p className="text-gray-400 font-light leading-relaxed mb-8">I'm always interested in hearing about new opportunities, challenging data problems, or just connecting with fellow data enthusiasts.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group" href="mailto:sk524722@gmail.com">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
<p className="text-sm">sk524722@gmail.com</p>
</div>
</a>
<a className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group" href="tel:+919087860399">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
<p className="text-sm">+91 90878 60399</p>
</div>
</a>
<div className="flex items-center gap-4 text-gray-300">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<span className="iconify" data-icon="lucide:map-pin" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
<p className="text-sm">Bangalore, India</p>
</div>
</div>
</div>
</div>
<div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you for your message! I will get back to you soon.');">
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Your message..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" type="submit">
                            Send Message
                            <span className="iconify" data-icon="lucide:send" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 bg-black text-white border-t border-white/10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Sunny Singh. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</footer>


    </>
  );
}
