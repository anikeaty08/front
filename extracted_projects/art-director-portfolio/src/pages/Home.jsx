import React from 'react';
import { Link } from 'react-router-dom';
import { works, experience, clients, articles } from '../data';

export default function Home() {
  return (
    <div className="pb-24">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-32 px-6 md:px-12 border-b border-black/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
            <div className="flex items-center gap-2 mb-8 px-4 py-1.5 bg-white rounded-full shadow-sm border border-black/5">
              <iconify-icon icon="solar:point-on-bold-duotone" class="text-green-500" width="16"></iconify-icon>
              <span className="text-xs font-medium uppercase tracking-wider text-[#737373]">Accepting New Projects</span>
            </div>
            
            <h1 className="text-[14vw] lg:text-[10vw] leading-[0.85] tracking-tighter font-light text-[#1A1A1A] mb-8">
              Julian<br/>Vance.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#737373] max-w-md font-light leading-relaxed">
              Multidisciplinary Art Director crafting digital experiences that merge editorial aesthetics with functional design.
            </p>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-medium tracking-tight">12+</span>
                <span className="text-sm text-[#737373]">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-medium tracking-tight">180</span>
                <span className="text-sm text-[#737373]">Projects Delivered</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-[#EFEFEA] rounded-[3rem] -rotate-3 scale-95 z-0"></div>
            
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7fd7752f-00a8-4838-bb0a-6248ef01545b/1600w.png" 
              alt="Julian Vance Portrait" 
              className="w-[85%] max-w-[500px] aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-6 lg:left-0 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
               <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white">
                 <iconify-icon icon="solar:mouse-circle-bold-duotone" width="24"></iconify-icon>
               </div>
               <div>
                 <p className="text-sm font-medium">Scroll down</p>
                 <p className="text-xs text-[#737373]">to explore</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS LOGOS */}
      <section className="py-16 px-6 md:px-12 border-b border-black/5 overflow-hidden">
        <p className="text-center text-sm text-[#737373] mb-8 font-medium tracking-widest uppercase">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {clients.map((client, idx) => (
            <iconify-icon 
              key={idx} 
              icon={client} 
              width="64" 
              height="64" 
              class="text-[#1A1A1A] hover:opacity-100 hover:scale-110 transition-all duration-300"
            ></iconify-icon>
          ))}
        </div>
      </section>

      {/* LATEST WORKS */}
      <section className="py-32 px-6 md:px-12 border-b border-black/5">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <iconify-icon icon="solar:gallery-bold-duotone" width="24" class="text-[#737373]"></iconify-icon>
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#737373]">Selected Works</h2>
          </div>
          <Link to="/" className="text-sm font-medium hover:text-[#737373] transition-colors flex items-center gap-1">
            View All <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link key={work.id} to={`/project/${work.id}`} className="group block">
              <div className="relative rounded-[2rem] overflow-hidden mb-6 bg-white shadow-sm border border-black/5 aspect-[4/5]">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Circular Arrow Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <span className="text-xs font-medium text-[#737373] uppercase tracking-wider block mb-2">{work.category}</span>
                <h3 className="text-xl font-medium tracking-tight group-hover:text-[#737373] transition-colors">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICING SECTION - DARK MODE */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto">
          {/* Browser Mockup Container */}
          <div className="bg-[#141414] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] overflow-hidden border border-white/5">
            {/* Browser Header */}
            <div className="bg-[#1D1D1D] h-12 flex items-center px-4 md:px-6 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/80"></div>
              </div>
              <div className="flex-grow flex justify-center">
                <div className="bg-white/5 px-4 md:px-8 py-1 rounded-md text-[9px] md:text-[10px] text-white/30 font-medium tracking-wide border border-white/5 truncate max-w-[150px] md:max-w-none">
                  julianvance.design/pricing
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="p-6 md:p-16">
              {/* Header Row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16">
                <div className="max-w-xl">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#737373] mb-4 block">Investment</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight text-white">
                    Transparent pricing for visionary projects.
                  </h2>
                </div>
                <button className="w-full md:w-auto bg-white text-[#1A1A1A] px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl active:scale-95">
                  CONTACT US
                </button>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
                {/* Lavender Card (Featured) */}
                <div className="bg-[#E0E7FF] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10 w-full">
                    <div className="flex items-center gap-2 mb-8 md:mb-12">
                      <div className="w-3 h-3 rounded-full border-2 border-indigo-600 bg-indigo-600"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-900/60">Starter Sprint</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-8 md:mb-12">
                      <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-indigo-950">$2,500</span>
                      <span className="text-sm font-medium text-indigo-900/40 uppercase tracking-widest">/ Project</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-full font-medium text-sm shadow-sm hover:bg-[#333] transition-all active:scale-95">
                    SELECT PLAN
                  </button>
                </div>

                {/* Standard Card */}
                <div className="bg-[#1D1D1D] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start border border-white/5 group hover:border-white/20 transition-colors">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-8 md:mb-12">
                      <div className="w-3 h-3 rounded-full border-2 border-white/20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">Professional</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-8 md:mb-12">
                      <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white">$6,000</span>
                      <span className="text-sm font-medium text-[#737373] uppercase tracking-widest">/ Project</span>
                    </div>
                  </div>
                  <button className="w-full bg-white/5 text-white py-4 rounded-full font-medium text-sm border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95">
                    SELECT PLAN
                  </button>
                </div>

                {/* Enterprise Card */}
                <div className="bg-[#1D1D1D] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-start border border-white/5 group hover:border-white/20 transition-colors">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-8 md:mb-12">
                      <div className="w-3 h-3 rounded-full border-2 border-white/20"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#737373]">Enterprise</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-8 md:mb-12">
                      <span className="text-5xl md:text-6xl font-semibold tracking-tighter text-white">Custom</span>
                      <span className="text-sm font-medium text-[#737373] uppercase tracking-widest">/ Quote</span>
                    </div>
                  </div>
                  <button className="w-full bg-white/5 text-white py-4 rounded-full font-medium text-sm border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95">
                    GET QUOTE
                  </button>
                </div>
              </div>

              {/* Comparison Table - Responsive Container */}
              <div className="border-t border-white/5 pt-12 overflow-x-auto">
                <div className="min-w-[600px]">
                  <div className="grid grid-cols-4 gap-8 mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373]">Characteristics</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/80">Starter</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/80">Professional</div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/80">Enterprise</div>
                  </div>
                  
                  {[
                    { label: "Strategy", v1: "Audit & Analysis", v2: "Full Brand Strategy", v3: "Ongoing Partnership" },
                    { label: "Design Sprints", v1: "1 Week", v2: "3 Weeks", v3: "Unlimited" },
                    { label: "Revisions", v1: "2 Rounds", v2: "Unlimited", v3: "Unlimited" },
                    { label: "Lead Time", v1: "2-3 Weeks", v2: "4-6 Weeks", v3: "Priority" },
                    { label: "Support", v1: "Email", v2: "Slack + Video", v3: "Dedicated Manager" }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-8 py-6 border-b border-white/5 last:border-0">
                      <div className="text-xs font-medium text-[#737373]">{row.label}</div>
                      <div className="text-xs text-white/60">{row.v1}</div>
                      <div className="text-xs text-white/60">{row.v2}</div>
                      <div className="text-xs text-white/60">{row.v3}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-32 px-6 md:px-12 border-b border-black/5">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="flex items-center gap-3">
            <iconify-icon icon="solar:briefcase-bold-duotone" width="24" class="text-[#737373]"></iconify-icon>
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#737373]">Experience</h2>
          </div>
          <p className="text-xl text-[#1A1A1A] max-w-xl font-light">
            A decade of collaborating with forward-thinking companies to build products that matter.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {experience.map((job) => (
            <div 
              key={job.id} 
              className="group bg-white rounded-3xl p-6 md:p-8 border border-black/5 hover:border-black/20 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6 md:w-1/3">
                <div className="w-16 h-16 bg-[#F7F7F5] rounded-2xl flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <iconify-icon icon={job.companyIcon} width="32" height="32"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{job.role}</h3>
                  <p className="text-[#737373]">{job.company}</p>
                </div>
              </div>

              <div className="md:w-1/3">
                <p className="text-sm text-[#737373] leading-relaxed">{job.description}</p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/3">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-sm font-medium">{job.period}</span>
                  <span className="text-xs text-[#737373]">{job.location}</span>
                </div>
                <div className="hidden lg:flex gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#F7F7F5] text-xs rounded-full text-[#737373]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNAL / BLOG PREVIEW */}
      <section className="py-32 px-6 md:px-12">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <iconify-icon icon="solar:pen-bold-duotone" width="24" class="text-[#737373]"></iconify-icon>
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#737373]">Journal & Insights</h2>
          </div>
          <Link to="/journal" className="text-sm font-medium hover:text-[#737373] transition-colors flex items-center gap-1">
            Read Journal <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} to={`/journal/${article.id}`} className="group block">
              <div className="rounded-3xl overflow-hidden mb-6 aspect-video bg-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-medium">{article.tag}</span>
                <span className="text-xs text-[#737373]">{article.date}</span>
              </div>
              <h3 className="text-xl font-medium tracking-tight leading-snug group-hover:text-[#737373] transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}