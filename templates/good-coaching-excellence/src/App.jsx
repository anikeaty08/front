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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<img alt="Good Coaching" className="w-auto h-10 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e712fbd-c0a6-4362-bdcf-637dbef4d596_320w.png"/>
</div>

<div className="hidden lg:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#5F9E87] transition-colors" href="#home">
                Home
              </a>
<a className="hover:text-[#5F9E87] transition-colors text-sm font-medium text-slate-600" href="#what-we-do">
                What We Do
              </a>
<a className="text-sm font-medium text-slate-600 hover:text-[#5F9E87] transition-colors" href="#who-we-work-with">
                Who We Work With
              </a>
<a className="text-sm font-medium text-slate-600 hover:text-[#5F9E87] transition-colors" href="#about">
                About Us
              </a>
<a className="text-sm font-medium text-slate-600 hover:text-[#5F9E87] transition-colors" href="#testimonials">
                Case Studies
              </a>
<a className="px-5 py-2.5 rounded-full bg-[#5F9E87] text-white text-sm font-medium hover:bg-[#4d826e] transition-colors shadow-lg shadow-[#5F9E87]/20" href="#contact">
                Contact Us
              </a>
</div>
</div>

<div className="-mr-2 flex lg:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#5F9E87] hover:bg-[#5F9E87]/5 focus:outline-none" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-white pt-32 pb-20 relative" id="home">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#5F9E87] rounded-full blur-3xl opacity-10"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#5F9E87] rounded-full blur-3xl opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F9E87]/5 text-[#5F9E87] text-xs font-semibold mb-8 border border-[#5F9E87]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#5F9E87]"></span>
              Executive Coaching &amp; Leadership Development
            </div>
<h1 className="text-5xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-8">
              Inspiring leadership
              <br/>
<span className="italic text-[#5F9E87] font-light">excellence.</span>
</h1>
<p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-lg">
              Grainne Carroll is an experienced Executive Coach who works with
              individuals and teams to help them succeed by supporting their
              transformation, performance, and growth.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-7 py-3.5 rounded-full bg-[#5F9E87] text-white text-sm font-medium hover:bg-[#4d826e] transition-all shadow-xl shadow-[#5F9E87]/20 hover:-translate-y-0.5" href="#contact">
                Get in Touch
              </a>
<a className="inline-flex justify-center items-center px-7 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all hover:border-[#5F9E87]/30" href="#what-we-do">
                View Services
              </a>
</div>
</div>

<div className="relative lg:h-auto">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-slate-100">
<img alt="Grainne Carroll" className="w-full h-auto block" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&amp;q=80" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>
<div className="bg-gradient-to-t from-[#5F9E87]/20 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}></div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted by leaders from
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<img alt="AXA" className="h-16 w-auto object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/200px-AXA_Logo.svg.png"/>

<img alt="City of Westminster" className="w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57198296-e4ed-42b1-a3e0-e62c68f189fe_800w.png?w=800&amp;q=80"/>

<img alt="Royal Mail" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7c442ed-58b6-42a5-88ff-751eace2fac0_320w.png?w=800&amp;q=80"/>

<img alt="RBS" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a20addba-c980-4b26-9164-bf18b3517976_320w.png?w=800&amp;q=80"/>

<img alt="British Heart Foundation" className="w-auto h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9bf9bc8-d5f7-42e9-a45f-eaa3e5a6bdc3_800w.png?w=800&amp;q=80"/>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="what-we-do">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
            What We Do
          </h2>
<p className="text-slate-600 text-lg">
            Thought-provoking and creative processes that inspire clients to
            maximise their personal and professional potential.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#5F9E87]/40 hover:shadow-xl hover:shadow-[#5F9E87]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#5F9E87]/10 text-[#5F9E87] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:user-id-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
              One to One Coaching
            </h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
              We partner with clients to create time and space, providing
              support and challenge to help them explore and resolve issues. We
              agree on clear outcomes for themselves, their teams, and
              stakeholders.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Reframing situations
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Exploring new solutions
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Integrative approach
              </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#5F9E87]/40 hover:shadow-xl hover:shadow-[#5F9E87]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#5F9E87]/10 text-[#5F9E87] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
              Team Development
            </h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
              Impactful, effective team sessions for specific outcomes delivered
              with high energy and challenging facilitation. We understand the
              history, culture and dynamics of your team.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Setting vision &amp; values
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Resolving conflict
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Understanding dynamics
              </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#5F9E87]/40 hover:shadow-xl hover:shadow-[#5F9E87]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#5F9E87]/10 text-[#5F9E87] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:blackboard-graph-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
              Master Classes
            </h3>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
              Designing and running Master Classes and Workshops in areas
              related to Talent, Leadership, Strategic HR and Managing Change.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Strategic Talent Management
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Developing Personal Brand
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#5F9E87] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Building Resilience
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="who-we-work-with">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20">
<div className="">
<span className="text-[#5F9E87] font-semibold tracking-wide text-xs uppercase mb-2 block">
              Our Clients
            </span>
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-8">
              Who We Work With
            </h2>
<div className="prose prose-slate prose-lg text-slate-600 mb-10">
<p className="text-base leading-relaxed mb-4">
                Grainne has worked with more than 50 leaders typically at
                Executive and Director level as well as emerging leaders and
                ‘top talent’. She works with Managing Directors and functional
                leaders in Finance, Risk, Marketing, HR and IT.
              </p>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:briefcase-linear"></iconify-icon>
                Recent Engagements
              </h4>
<ul className="space-y-4">
<li className="flex gap-4 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#5F9E87] mt-2 shrink-0"></div>
<span>
                    An executive in Financial Services seeking to increase their
                    impact in a Board level role.
                  </span>
</li>
<li className="flex gap-4 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#5F9E87] mt-2 shrink-0"></div>
<span>
                    First ‘100 day’ coaching for HR Director in a high profile
                    national charity.
                  </span>
</li>
<li className="flex gap-4 text-sm text-slate-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#5F9E87] mt-2 shrink-0"></div>
<span>
                    Transition and confidence coaching with a CFO entering a new
                    industry.
                  </span>
</li>
</ul>
</div>
</div>
<div className="space-y-12">

<div className="">
<h3 className="text-2xl text-slate-900 tracking-tight mb-6 font-serif italic">
                Specialist Areas
              </h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5F9E87]/10 flex items-center justify-center shrink-0 text-[#5F9E87]">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                      Leading through change
                    </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                      Acting as a thought partner and sounding board for leaders
                      driving transformational change.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5F9E87]/10 flex items-center justify-center shrink-0 text-[#5F9E87]">
<iconify-icon icon="solar:telescope-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                      Vision and direction
                    </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                      Supporting and challenging leaders to visualise outcomes
                      and create pathways to achieve them.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#5F9E87]/10 flex items-center justify-center shrink-0 text-[#5F9E87]">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                      Personal impact
                    </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                      Helping leaders understand their impact, navigate
                      difficult relationships, and be more influential.
                    </p>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-8">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
                Experienced with leaders from
              </p>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-400 font-semibold text-lg opacity-60">
<span>RBS</span>
<span>Coutts</span>
<span>GE</span>
<span>Hilton</span>
<span>Travelport</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#5F9E87] text-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl lg:text-4xl text-white tracking-tight mb-8">
              About Grainne Carroll
            </h2>
<p className="text-lg leading-relaxed mb-6 font-light text-green-50">
              Grainne has 20 years business experience to Director level with
              global companies. She has extensive experience in large, complex
              organisations undergoing periods of significant change.
            </p>
<p className="text-base leading-relaxed mb-8 text-green-50/90">
              She has managed large teams across multiple sites and geographies.
              As such, Grainne brings extensive corporate experience and a
              commercial mindset to her coaching.
            </p>
<h3 className="text-xl text-white tracking-tight mb-4 mt-12">
              Coaching Approach
            </h3>
<p className="text-sm leading-relaxed mb-6 text-green-100/80">
              Grainne’s style has been described as warm and empathetic while
              being insightful and impactful. She uses an integrative approach,
              calling on a wide range of coaching and psychological models
              including Gestalt, Existential, Transactional Analysis and
              Cognitive Behavioural Coaching.
            </p>
</div>
<div className="space-y-6">
<div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-white/5 relative">
<img alt="Office space" className="w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5036840d-4e49-4a81-8140-c74121e64ab1_1600w.png"/>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-fit">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-green-200" icon="solar:diploma-verified-linear"></iconify-icon>
                Education &amp; Qualifications
              </h3>
<ul className="space-y-4 mb-8">
<li className="pb-4 border-b border-white/10">
<p className="text-white font-medium text-sm">
                    Advanced Practitioner Diploma in Executive Coaching
                  </p>
<p className="text-xs text-green-100 mt-1">AoEC</p>
</li>
<li className="pb-4 border-b border-white/10">
<p className="text-white font-medium text-sm">
                    NLP Business Practitioner
                  </p>
</li>
<li className="pb-4 border-b border-white/10">
<p className="text-white font-medium text-sm">
                    MSc, Human Resource Manager
                  </p>
<p className="text-xs text-green-100 mt-1">
                    University of Strathclyde
                  </p>
</li>
</ul>
<div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 p-3 rounded-lg border border-white/20">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                Member of the International Coaching Federation
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#5F9E87] font-semibold tracking-wide text-xs uppercase mb-2 block">
            Proven Results
          </span>
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
            Case Studies
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-xs font-semibold text-[#5F9E87] uppercase tracking-wide mb-3">
              One to One
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Breaking through to MD
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">
              Client wanted to move from Director to MD. Coaching focused on
              re-scripting internal dialogue and experimenting with
              communication styles. Within 12 months, the client scored highest
              of their peer group and became MD.
            </p>
<a className="text-sm font-medium text-slate-900 hover:text-[#5F9E87] inline-flex items-center gap-1 transition-colors" href="#">
              Read Story
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-xs font-semibold text-[#5F9E87] uppercase tracking-wide mb-3">
              Transition
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Expatriate Transition
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">
              Supported the first 100 days of an IT executive relocating from US
              to UK. Co-created a proactive induction plan. The relocation was
              very successful with the client seen as top talent who radically
              changed the IT organisation.
            </p>
<a className="text-sm font-medium text-slate-900 hover:text-[#5F9E87] inline-flex items-center gap-1 transition-colors" href="#">
              Read Story
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-xs font-semibold text-[#5F9E87] uppercase tracking-wide mb-3">
              Board Level
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Impactful Performer
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">
              Goal: To fully take their place at the Board table. Coaching
              strategy focused on stakeholder analysis and patterns of
              behaviour. After six sessions, the client had transformed key
              relationships and received CEO backing.
            </p>
<a className="text-sm font-medium text-slate-900 hover:text-[#5F9E87] inline-flex items-center gap-1 transition-colors" href="#">
              Read Story
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-xs font-semibold text-[#5F9E87] uppercase tracking-wide mb-3">
              Team
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              High Performance Team
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">
              Operations Director needed the team to become a ‘better, cheaper,
              faster function’. Created a one day workshop on purpose, shared
              goals, and priorities. Leader was delighted with outcomes and
              readiness for change.
            </p>
<a className="text-sm font-medium text-slate-900 hover:text-[#5F9E87] inline-flex items-center gap-1 transition-colors" href="#">
              Read Story
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="text-xs font-semibold text-[#5F9E87] uppercase tracking-wide mb-3">
              Strategy
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Talent Management
            </h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-4">
              Worked with HR Director to define future talent profile. Created
              strategy for succession planning. Designed one-day master class
              for HR generalists. Successfully enrolled the Board in supporting
              recommendations.
            </p>
<a className="text-sm font-medium text-slate-900 hover:text-[#5F9E87] inline-flex items-center gap-1 transition-colors" href="#">
              Read Story
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-20">
<h3 className="text-2xl text-slate-900 tracking-tight mb-10 text-center font-serif italic">
            What our clients say
          </h3>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#5F9E87]/40 mb-4 text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic mb-6">
                "She is an excellent personal coach/mentor and combines this
                with an extremely strong understanding of the commercial side of
                an enterprise."
              </p>
<p className="text-xs font-semibold text-slate-900">
                CFO Banking Division
              </p>
<p className="text-xs text-slate-500">Close Brothers Group</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#5F9E87]/40 mb-4 text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic mb-6">
                "Grainne combines warmth and imagination with business
                awareness. She encourages individuals to balance personal
                authenticity with business imperatives."
              </p>
<p className="text-xs font-semibold text-slate-900">Director</p>
<p className="text-xs text-slate-500">YSC</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#5F9E87]/40 mb-4 text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic mb-6">
                "She engenders a strong sense of ambition, energy and focus
                enabling new possibilities to emerge and high level achievement
                in a short space of time."
              </p>
<p className="text-xs font-semibold text-slate-900">
                Director of People &amp; OD
              </p>
<p className="text-xs text-slate-500">British Heart Foundation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl lg:text-4xl text-slate-900 tracking-tight mb-6">
              Let's start the conversation
            </h2>
<p className="text-lg text-slate-600 mb-10">
              We would be delighted to discuss creating or running a master
              class, workshop or coaching programme for your company.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    GooD Coaching Limited
                  </h4>
<p className="text-sm text-slate-500">
                    27 Hornsey Rise GardensLondon, N19 3PP
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Phone
                  </h4>
<p className="text-sm text-slate-500">t. 020 7682 4368</p>
<p className="text-sm text-slate-500">m. 078 4308 7727</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Email
                  </h4>
<a className="text-sm text-[#5F9E87] hover:text-[#4d826e]" href="mailto:grainne@good-coaching.com">
                    grainne@good-coaching.com
                  </a>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-200">
<form action="#" className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">
                  Name
                </label>
<input className="w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-[#5F9E87] focus:ring-[#5F9E87] py-3 px-4 text-sm transition-colors" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">
                  Email
                </label>
<input className="w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-[#5F9E87] focus:ring-[#5F9E87] py-3 px-4 text-sm transition-colors" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="subject">
                  Subject
                </label>
<select className="w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-[#5F9E87] focus:ring-[#5F9E87] py-3 px-4 text-sm transition-colors" id="subject">
<option>General Inquiry</option>
<option>1-on-1 Coaching</option>
<option>Team Workshop</option>
<option>Masterclass</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">
                  Message
                </label>
<textarea className="w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-[#5F9E87] focus:ring-[#5F9E87] py-3 px-4 text-sm transition-colors" id="message" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#5F9E87] hover:bg-[#4d826e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F9E87] transition-all" type="submit">
                Send Message
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#5F9E87] border-t border-[#5F9E87] py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 lg:col-span-1">
<h5 className="text-sm font-semibold text-white mb-4">About Us</h5>
<p className="text-sm text-green-50 mt-4 leading-relaxed">
              Grainne has 20 years business experience to Director level with
              companies such as RBS, Coutts, GE, Hilton and Travelport.
            </p>
<p className="text-sm text-green-50 mt-4 leading-relaxed">
              She has extensive experience in large, complex, global
              organisations undergoing periods of significant change and
              transformation.
            </p>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4">Services</h5>
<ul className="space-y-2 text-sm text-green-50">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Executive Coaching
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Team Facilitation
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Leadership Masterclasses
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4">Quick Contact</h5>
<div className="text-sm text-green-50 space-y-1">
<p className="font-semibold text-white">GooD Coaching Limited</p>
<p>27 Hornsey Rise Gardens</p>
<p>London</p>
<p className="mb-2">N19 3PP</p>
<p className="mt-4">t. 020 7682 4368</p>
<p>m. 078 4308 7727</p>
<p>e. grainne@good-coaching.com</p>
</div>
</div>
<div>
<h5 className="text-sm font-semibold text-white mb-4">
              Connect With Us
            </h5>
<div className="flex space-x-4">
<a className="flex items-center justify-center w-10 h-10 bg-white rounded-md text-[#5F9E87] hover:bg-green-50 transition-colors" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="border-t border-green-700/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-green-100/60">
            © 2024 GooD Coaching Limited. All rights reserved.
          </p>
<p className="text-xs text-green-100/60">London, United Kingdom</p>
</div>
</div>
</footer>

    </>
  );
}
