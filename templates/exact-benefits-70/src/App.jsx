import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener("DOMContentLoaded", function () {
      // Lucide icons
      lucide.createIcons({
        icons: {
          'arrow-right': lucide.ArrowRight,
          'menu': lucide.Menu,
          'shield': lucide.Shield,
          'alert-triangle': lucide.AlertTriangle,
          'clipboard-list': lucide.ClipboardList,
          'calculator': lucide.Calculator,
          'list': lucide.List,
        },
        attrs: { 'stroke-width': 1.5 }
      });

      document.getElementById("banner-arrow").innerHTML = lucide.ArrowRight.toSvg({ class: "h-3 w-3" });
      document.getElementById("mobile-menu-icon").innerHTML = lucide.Menu.toSvg({ class: "h-4 w-4" });
      document.getElementById("shield-icon").innerHTML = lucide.Shield.toSvg({ class: "h-4 w-4 text-[#00A4A4]" });
      document.getElementById("alert-icon").innerHTML = lucide.AlertTriangle.toSvg({ class: "h-4 w-4 text-[#CDDC2A]" });
      document.getElementById("clipboard-icon").innerHTML = lucide.ClipboardList.toSvg({ class: "h-4 w-4 text-[#00A4A4]" });
      document.getElementById("calculator-icon").innerHTML = lucide.Calculator.toSvg({ class: "h-4 w-4 text-[#00A4A4]" });
      document.getElementById("list-icon").innerHTML = lucide.List.toSvg({ class: "h-4 w-4" });

      // Year in footer
      document.getElementById("year").textContent = new Date().getFullYear();

      // Simple savings calculator logic
      const EMPLOYEE_SAVINGS = 7300;
      const input = document.getElementById("employees-input");
      const output = document.getElementById("savings-output");

      function updateSavings() {
        const count = parseInt(input.value || "0", 10);
        const total = Math.max(0, count) * EMPLOYEE_SAVINGS;
        output.textContent = total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0
        });
      }

      input.addEventListener("input", updateSavings);
      updateSavings();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col min-h-screen">

<div className="border-b border-[#E1E4E8] bg-[#F5F7FA]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
<p className="text-xs sm:text-[13px] text-slate-700 font-light">
          New: Medicare guidance for employers with older workers.
        </p>
<a className="inline-flex items-center gap-1 text-xs sm:text-[13px] text-[#00A4A4] hover:text-[#008080] font-medium tracking-tight" href="#webinars">
          View upcoming employer webinars
          <span className="inline-flex" id="banner-arrow"></span>
</a>
</div>
</div>

<header className="border-b border-[#E1E4E8] bg-white/90 backdrop-blur-sm sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">

<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#111922] text-[#CDDC2A] text-sm font-semibold tracking-tight">
            EB
          </div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#111922]">Exact Benefits</span>
<span className="text-[11px] text-slate-500 font-light">Medicare support for employers</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm font-normal text-slate-700">
<a className="hover:text-[#111922]" href="#why">Why it matters</a>
<a className="hover:text-[#111922]" href="#employers-get">What employers get</a>
<a className="hover:text-[#111922]" href="#cost-savings">Cost savings</a>
<a className="hover:text-[#111922]" href="#employees-receive">What employees receive</a>
<a className="hover:text-[#111922]" href="#webinars">Webinars</a>
<a className="hover:text-[#111922]" href="#faq">FAQ</a>
</nav>

<div className="hidden sm:flex items-center gap-3">
<a className="text-xs sm:text-sm text-slate-700 hover:text-[#00A4A4] font-medium" href="#newsletter">
            Join newsletter
          </a>
<a className="inline-flex items-center justify-center rounded-md bg-[#CDDC2A] hover:bg-[#b7c61f] text-[#111922] text-xs sm:text-sm font-medium px-3 py-1.5 border border-[#CDDC2A] hover:border-[#9baa1c] shadow-sm" href="#consult">
            Schedule consult
          </a>
</div>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50">
<span id="mobile-menu-icon"></span>
</button>
</div>
</header>

<main className="flex-1">

<section className="bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:flex lg:items-center lg:justify-between gap-10">

<div className="w-full lg:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#E1E4E8] bg-[#F5F7FA] px-3 py-1">
<span className="h-2 w-2 rounded-full bg-[#00A4A4]"></span>
<span className="text-[11px] sm:text-xs text-slate-700 font-medium uppercase tracking-[0.12em]">
                For HR &amp; benefits leaders
              </span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-[38px] font-semibold tracking-tight text-[#111922]">
                Medicare Support for Employers
              </h1>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Trusted guidance, lower costs, and less HR burden—at no employer cost.
                Exact Benefits acts as your embedded, non-commissioned Medicare account manager
                for employees approaching 65 and beyond.
              </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex justify-center items-center rounded-md bg-[#CDDC2A] hover:bg-[#b7c61f] text-[#111922] text-sm font-medium px-5 py-2.5 border border-[#CDDC2A] hover:border-[#9baa1c] shadow-sm" href="#consult">
                Schedule a free consultation
              </a>
<a className="inline-flex justify-center items-center rounded-md bg-white hover:bg-slate-50 text-[#111922] text-sm font-medium px-4 py-2.5 border border-slate-200 hover:border-slate-300" href="#guide">
                Download Employer Medicare Guide
              </a>
</div>

<div className="flex items-center gap-2 text-xs sm:text-sm">
<a className="text-[#00A4A4] hover:text-[#008080] font-medium tracking-tight" href="#newsletter">
                Join free Employer Medicare newsletter
              </a>
<span className="h-4 w-px bg-slate-200"></span>
<p className="text-slate-500 font-light">
                Monthly insights, compliance updates, and checklists.
              </p>
</div>

<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-[#E1E4E8] bg-white p-3">
<p className="text-xs text-slate-500 font-medium uppercase tracking-[0.12em]">Avg savings</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#111922]">$7,300<span className="text-xs font-normal text-slate-500"> /yr</span></p>
<p className="mt-0.5 text-[11px] text-slate-500 font-light">
                  Per 65+ employee moved to the right Medicare path.
                </p>
</div>
<div className="rounded-lg border border-[#E1E4E8] bg-white p-3">
<p className="text-xs text-slate-500 font-medium uppercase tracking-[0.12em]">HR burden</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#111922]">Offloaded</p>
<p className="mt-0.5 text-[11px] text-slate-500 font-light">
                  We handle Medicare questions, enrollment, and troubleshooting.
                </p>
</div>
<div className="hidden sm:block rounded-lg border border-[#E1E4E8] bg-white p-3">
<p className="text-xs text-slate-500 font-medium uppercase tracking-[0.12em]">Cost to employer</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-[#111922]">$0</p>
<p className="mt-0.5 text-[11px] text-slate-500 font-light">
                  No consulting fees or commissions that bias recommendations.
                </p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 mt-10 lg:mt-0">
<div className="rounded-2xl border border-[#E1E4E8] bg-[#F5F7FA] p-5 sm:p-6 lg:p-7 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]">
                    Embedded support for HR
                  </p>
<p className="mt-1 text-sm text-slate-700 font-light">
                    Share a census, we handle Medicare education and decisions.
                  </p>
</div>
<div className="flex -space-x-2">
<img alt="HR leader" className="h-8 w-8 rounded-full border-2 border-[#F5F7FA] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Older employee" className="h-8 w-8 rounded-full border-2 border-[#F5F7FA] object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Advisor" className="h-8 w-8 rounded-full border-2 border-[#F5F7FA] object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
</div>

<form className="space-y-3" id="consult">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                    Free Employer Medicare Assessment
                  </p>
<span className="text-[11px] text-slate-500 font-light">
                    No fees. No commissions.
                  </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase mb-1">
                      Name
                    </label>
<input className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" placeholder="Taylor Smith" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase mb-1">
                      Company
                    </label>
<input className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" placeholder="Acme Manufacturing" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase mb-1">
                      Work email
                    </label>
<input className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase mb-1">
                      Phone
                    </label>
<input className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="flex items-center justify-between mb-1">
<span className="text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase">
                        # of 63.5+ employees on group coverage
                      </span>
<span className="text-[11px] text-slate-500 font-light">
                        Estimate is fine
                      </span>
</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" min="0" placeholder="e.g., 18" type="number"/>
</div>
</div>
<button className="w-full inline-flex justify-center items-center rounded-md bg-[#111922] hover:bg-black text-white text-sm font-medium px-4 py-2.5 border border-[#111922] hover:border-black mt-1" type="submit">
                  Schedule my consultation
                </button>
<p className="text-[11px] text-slate-500 font-light mt-1">
                  We’ll review your census, flag Medicare risks, and outline potential savings.
                </p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-[#E1E4E8] bg-[#F5F7FA]" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row items-start gap-10">
<div className="w-full lg:w-2/5 space-y-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                Why Medicare decisions at 65 matter for employers
              </h2>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                When employees stay on group coverage past 65, Medicare becomes a compliance
                and financial minefield. Missed enrollment windows, misaligned plans, and bad
                advice can trigger denied claims, lifetime penalties, and unnecessary costs for
                both the employee and the employer.
              </p>
</div>
<div className="w-full lg:w-3/5 grid md:grid-cols-3 gap-4">

<div className="rounded-xl border border-[#E1E4E8] bg-white p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]">
                    Risk &amp; compliance
                  </span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FA] border border-slate-200">
<span id="shield-icon"></span>
</span>
</div>
<p className="text-sm text-[#111922] font-medium tracking-tight mb-1">
                  Denied claims &amp; penalties
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  Employees who miss their Medicare enrollment window can face lifetime
                  penalties and Part B claim denials—often years after HR thought everything
                  was handled correctly.
                </p>
</div>

<div className="rounded-xl border border-[#E1E4E8] bg-white p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]">
                    Real scenarios
                  </span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FA] border border-slate-200">
<span id="alert-icon"></span>
</span>
</div>
<p className="text-sm text-[#111922] font-medium tracking-tight mb-1">
                  “I thought our broker handled this…”
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  A 67-year-old employee delayed Part B based on informal advice. Two years
                  later, a major surgery claim is denied. HR is pulled into appeals and remediation
                  for a problem they never knew existed.
                </p>
</div>

<div className="rounded-xl border border-[#E1E4E8] bg-white p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-600 uppercase tracking-[0.12em]">
                    HR workload
                  </span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FA] border border-slate-200">
<span id="clipboard-icon"></span>
</span>
</div>
<p className="text-sm text-[#111922] font-medium tracking-tight mb-1">
                  Medicare questions, every open enrollment
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  HR teams are not Medicare experts—but they’re expected to be. We step in as
                  your dedicated Medicare resource so your team can stay focused on core HR.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-[#E1E4E8]" id="employers-get">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row gap-10 items-start">
<div className="w-full lg:w-1/2 space-y-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                What employers get with Exact Benefits
              </h2>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Exact Benefits functions as an extension of your HR team—specializing in Medicare
                for employees around age 65. We’re non-commissioned and plan-agnostic, so the
                guidance we give is aligned with your company’s policies and your employees’ best interests.
              </p>
</div>
<div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-4">

<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight mb-1">
                  Dedicated Medicare account team
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  A named team that your HR staff and employees can contact directly for Medicare
                  questions, enrollment support, and troubleshooting.
                </p>
</div>
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight mb-1">
                  Employee education &amp; 1:1 guidance
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  Small-group workshops plus one-on-one consultations so employees understand
                  their options before and after 65.
                </p>
</div>
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight mb-1">
                  Personalized Medicare pathways
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  Clear recommendations based on each employee’s health needs, spouse
                  coverage, and your group benefits strategy.
                </p>
</div>
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight mb-1">
                  Ongoing compliance &amp; plan reviews
                </p>
<p className="text-xs text-slate-600 font-light leading-relaxed">
                  Annual check-ins to ensure employees remain on suitable coverage as
                  regulations, plans, and life circumstances change.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] border-t border-[#E1E4E8]" id="cost-savings">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row gap-10 items-start">
<div className="w-full lg:w-1/2 space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                Anchor real savings: ~$7,300 per 65+ employee per year
              </h2>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Many employers pay full active-employee premiums for 65+ employees who could
                move to Medicare—with better coverage and lower cost—if given the right support.
                Across your workforce, those dollars add up quickly.
              </p>
<ul className="space-y-2 text-sm text-slate-700 font-light">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#CDDC2A]"></span>
<span>Average annual premium savings per 65+ employee: <span className="font-medium">$7,300+</span>.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#CDDC2A]"></span>
<span>Reduced risk of high-cost claims being denied due to Medicare enrollment errors.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#CDDC2A]"></span>
<span>No extra cost to your benefits budget—our services are funded outside your premiums.</span>
</li>
</ul>
<p className="text-xs text-slate-500 font-light">
                Based on internal analysis of average employer premium contributions compared to
                Medicare pathways for employees 65+ on group health plans. Actual savings will vary.
              </p>
</div>

<div className="w-full lg:w-1/2">
<div className="rounded-2xl border border-[#E1E4E8] bg-white p-5 sm:p-6 shadow-sm">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-sm font-medium text-[#111922] tracking-tight">
                      See your potential annual savings
                    </p>
<p className="text-xs text-slate-600 font-light">
                      Quick estimate using the average $7,300 savings per eligible employee.
                    </p>
</div>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FA] border border-slate-200">
<span id="calculator-icon"></span>
</span>
</div>
<div className="space-y-3">
<div>
<label className="flex items-center justify-between mb-1">
<span className="text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase">
                        # of 65+ employees on group coverage
                      </span>
<span className="text-[11px] text-slate-500 font-light">
                        Move the slider or type a number
                      </span>
</label>

<div className="flex items-center gap-2">
<input className="w-24 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm text-[#111922] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4A4]/40 focus:border-[#00A4A4]" id="employees-input" min="0" type="number" value="10"/>
<span className="text-xs text-slate-600 font-light">
                        employees
                      </span>
</div>
</div>
<div className="border border-dashed border-[#E1E4E8] rounded-lg p-3 bg-[#F5F7FA] flex items-center justify-between">
<div>
<p className="text-[11px] font-medium text-slate-600 tracking-[0.08em] uppercase">
                        Estimated annual employer savings
                      </p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-[#111922]" id="savings-output">
                        $73,000
                      </p>
<p className="text-[11px] text-slate-500 font-light mt-1">
                        Estimate only. We’ll refine this based on your actual census and plan design.
                      </p>
</div>
</div>
<div className="mt-2 flex flex-col gap-2">
<a className="inline-flex justify-center items-center rounded-md bg-[#CDDC2A] hover:bg-[#b7c61f] text-[#111922] text-sm font-medium px-4 py-2 border border-[#CDDC2A] hover:border-[#9baa1c]" href="#consult">
                      Request a detailed savings analysis
                    </a>
<button className="inline-flex justify-center items-center rounded-md bg-white hover:bg-slate-50 text-[#111922] text-xs font-medium px-3 py-2 border border-slate-200 hover:border-slate-300" id="savings-email-cta" type="button">
                      Email me a PDF summary of this estimate
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-[#E1E4E8]" id="mistakes">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row gap-10">
<div className="w-full lg:w-1/3 space-y-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                Common employer Medicare mistakes
              </h2>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                These missteps are easy to make—and expensive to fix. We help your team avoid
                them entirely, with clear guidance and documentation.
              </p>
</div>
<div className="w-full lg:w-2/3 space-y-3">
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  Assuming the broker “handles Medicare”
                </p>
<p className="text-xs text-slate-600 font-light mt-1">
                  Many brokers focus on active employee benefits and may not provide detailed
                  Medicare enrollment guidance. The result: employees make critical timing
                  decisions without a clear understanding of the rules.
                </p>
</div>
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  Giving informal advice that conflicts with Medicare rules
                </p>
<p className="text-xs text-slate-600 font-light mt-1">
                  HR teams want to be helpful, but even well-intentioned guidance (“You can
                  wait on Part B”) can expose the employer if it results in penalties or denied claims.
                </p>
</div>
<div className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  Keeping everyone on the group plan by default
                </p>
<p className="text-xs text-slate-600 font-light mt-1">
                  For some employees, staying on the group plan past 65 is the right call. For many,
                  it’s an unnecessary cost. We help segment your population and guide each person
                  to the right path.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] border-t border-[#E1E4E8]" id="employees-receive">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922] mb-3">
                What your employees receive
              </h2>
<p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed mb-4">
                Your employees—especially those who have been with you for years—deserve
                clarity and confidence when they hit Medicare decisions. We equip them with
                the information and support they need to make good choices.
              </p>
<div className="space-y-3 text-sm text-slate-700 font-light">
<div className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00A4A4]"></span>
<div>
<p className="font-medium tracking-tight text-[#111922]">
                      One-on-one Medicare consultations
                    </p>
<p className="text-xs text-slate-600 font-light">
                      Personalized calls with our team to review options, timing, and coverage
                      tradeoffs—with written summaries they can share with family.
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00A4A4]"></span>
<div>
<p className="font-medium tracking-tight text-[#111922]">
                      Step-by-step enrollment support
                    </p>
<p className="text-xs text-slate-600 font-light">
                      Clear instructions for Medicare enrollment, group plan transitions, and
                      any coordination with HSA, COBRA, or retiree benefits.
                    </p>
</div>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00A4A4]"></span>
<div>
<p className="font-medium tracking-tight text-[#111922]">
                      A calm, trusted guide—without sales pressure
                    </p>
<p className="text-xs text-slate-600 font-light">
                      Our team is non-commissioned and plan-agnostic. Employees get guidance,
                      not a sales pitch.
                    </p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="rounded-2xl overflow-hidden border border-[#E1E4E8] bg-white">
<img alt="HR leader meeting with older employee" className="w-full h-64 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="p-4 sm:p-5">
<p className="text-sm font-medium text-[#111922] tracking-tight mb-1">
                    “It felt like an extension of our HR team.”
                  </p>
<p className="text-xs text-slate-600 font-light">
                    We stay in the conversation from first workshop to final enrollment, so employees
                    always know where to turn with Medicare questions.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-[#E1E4E8]" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row gap-10">
<div className="w-full lg:w-1/3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                Quick answers for HR &amp; benefits
              </h2>
<p className="mt-3 text-sm text-slate-700 font-light leading-relaxed">
                We’re happy to go deeper on a call, but here are the questions employers ask first.
              </p>
</div>
<div className="w-full lg:w-2/3 space-y-4">

<div className="border border-[#E1E4E8] rounded-xl bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  Is there any cost to the employer?
                </p>
<p className="mt-1 text-xs text-slate-600 font-light">
                  No. Our Medicare guidance and support services are available at no cost to the
                  employer. There are no consulting fees, and our team is non-commissioned, so
                  there is no incentive to push one plan or carrier over another.
                </p>
</div>
<div className="border border-[#E1E4E8] rounded-xl bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  How is this different from what our broker provides?
                </p>
<p className="mt-1 text-xs text-slate-600 font-light">
                  Most brokers focus on active employee and group plan strategy. Exact Benefits
                  goes deep on Medicare—timing, penalties, plan selection, and ongoing support for
                  older employees. We coordinate with your broker to keep everything aligned.
                </p>
</div>
<div className="border border-[#E1E4E8] rounded-xl bg-[#F5F7FA] p-4">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                  Which employers is this a fit for?
                </p>
<p className="mt-1 text-xs text-slate-600 font-light">
                  We’re a strong fit for employers with a meaningful population of employees
                  aged 63.5 and older who remain on group coverage—especially in industries like
                  manufacturing, healthcare, education, and public entities.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F7FA] border-t border-[#E1E4E8]" id="final-cta">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="rounded-2xl border border-[#E1E4E8] bg-white px-5 sm:px-8 py-8 sm:py-10 shadow-sm">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div>
<p className="text-xs font-medium text-[#00A4A4] uppercase tracking-[0.16em] mb-2">
                  Ready when you are
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922] mb-2">
                  Let Exact Benefits take Medicare off your HR team’s plate
                </h2>
<p className="text-sm text-slate-700 font-light leading-relaxed">
                  Choose the next step that fits your timeline—whether you’re exploring options
                  or ready to roll out a program for your 63.5+ employees.
                </p>
<p className="mt-2 text-xs text-slate-500 font-light">
                  Powered by the same team behind <span className="font-medium">Exact Medicare</span>.
                </p>
</div>
<div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
<a className="inline-flex justify-center items-center rounded-md bg-[#CDDC2A] hover:bg-[#b7c61f] text-[#111922] text-sm font-medium px-4 py-2.5 border border-[#CDDC2A] hover:border-[#9baa1c]" href="#consult">
                  Schedule a consult
                </a>
<a className="inline-flex justify-center items-center rounded-md bg-white hover:bg-slate-50 text-[#111922] text-sm font-medium px-4 py-2.5 border border-slate-200 hover:border-slate-300" href="#" id="guide">
                  Download Employer Guide
                </a>
<a className="inline-flex justify-center items-center rounded-md bg-[#111922] hover:bg-black text-white text-xs font-medium px-4 py-2.5 border border-[#111922] hover:border-black" href="#" id="newsletter">
                  Join Employer Medicare Newsletter
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-[#E1E4E8]" id="webinars">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111922]">
                Live webinars for HR, benefits, and advisors
              </h2>
<p className="mt-2 text-sm text-slate-700 font-light">
                Short, practical sessions on Medicare, compliance, and cost strategy for employers
                with older employees. Hosted by the Exact Medicare team.
              </p>
</div>
<a className="inline-flex items-center gap-1 rounded-md bg-[#F5F7FA] hover:bg-slate-100 text-[#111922] text-xs font-medium px-3 py-2 border border-[#E1E4E8]" href="#">
              View all upcoming sessions
              <span className="inline-flex" id="list-icon"></span>
</a>
</div>

<div className="space-y-4">

<article className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<p className="inline-flex items-center gap-2 text-xs text-slate-600 font-medium uppercase tracking-[0.12em] mb-1">
<span className="inline-flex h-2 w-2 rounded-full bg-[#00A4A4]"></span>
                  Upcoming live webinar
                  <span className="h-3 w-px bg-slate-300"></span>
<span className="rounded-full bg-white px-2 py-0.5 text-[11px] text-slate-700 border border-slate-200">
                    Audience: HR &amp; Benefits
                  </span>
</p>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111922]">
                  Medicare at 65: What HR needs to know to protect employees and your plan
                </h3>
<p className="text-xs text-slate-600 font-light">
<span className="font-medium">Date:</span> Tuesday, January 16 · 12:00–12:45 PM CT · Live Q&amp;A
                </p>
<p className="text-xs text-slate-600 font-light">
                  We’ll cover enrollment timing, common pitfalls, and a simple framework for
                  deciding when employees should stay on the group plan vs. transition to Medicare.
                </p>
</div>
<div className="flex flex-col sm:items-end gap-2 min-w-[200px]">
<a className="inline-flex justify-center items-center rounded-md bg-[#111922] hover:bg-black text-white text-xs font-medium px-4 py-2.5 border border-[#111922] hover:border-black" href="https://events.microsoft.com" target="_blank">
                  Register via Microsoft Events
                </a>
<p className="text-[11px] text-slate-500 font-light text-left sm:text-right">
                  Registration opens in a new tab. No cost to attend.
                </p>
</div>
</article>

<article className="rounded-xl border border-[#E1E4E8] bg-[#F5F7FA] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<p className="inline-flex items-center gap-2 text-xs text-slate-600 font-medium uppercase tracking-[0.12em] mb-1">
<span className="inline-flex h-2 w-2 rounded-full bg-[#00A4A4]"></span>
                  Upcoming live webinar
                  <span className="h-3 w-px bg-slate-300"></span>
<span className="rounded-full bg-white px-2 py-0.5 text-[11px] text-slate-700 border border-slate-200">
                    Audience: Advisors &amp; CPAs
                  </span>
</p>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111922]">
                  Integrating Medicare into retirement and benefit strategies
                </h3>
<p className="text-xs text-slate-600 font-light">
<span className="font-medium">Date:</span> Thursday, January 25 · 11:00–11:45 AM CT · Live Q&amp;A
                </p>
<p className="text-xs text-slate-600 font-light">
                  Designed for financial advisors and CPAs working with business owners or
                  key employees navigating Medicare alongside group benefits.
                </p>
</div>
<div className="flex flex-col sm:items-end gap-2 min-w-[200px]">
<a className="inline-flex justify-center items-center rounded-md bg-[#111922] hover:bg-black text-white text-xs font-medium px-4 py-2.5 border border-[#111922] hover:border-black" href="https://events.microsoft.com" target="_blank">
                  Register via Microsoft Events
                </a>
<p className="text-[11px] text-slate-500 font-light text-left sm:text-right">
                  Add to your calendar after registration.
                </p>
</div>
</article>
</div>

<div className="mt-8 border-t border-[#E1E4E8] pt-6">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-medium text-[#111922] tracking-tight">
                Past webinars &amp; recordings
              </p>
<a className="text-xs text-[#00A4A4] hover:text-[#008080] font-medium tracking-tight" href="#">
                View archive
              </a>
</div>
<p className="text-xs text-slate-600 font-light">
              Coming soon: on-demand access to recordings and slide decks for prior sessions.
            </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#E1E4E8] bg-[#111922] text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
<div className="space-y-2 md:w-1/2">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-white text-[#111922] text-sm font-semibold tracking-tight">
                EB
              </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">Exact Benefits</span>
<span className="text-[11px] text-slate-300 font-light">Medicare support for employers</span>
</div>
</div>
<p className="text-[11px] text-slate-300 font-light">
              Powered by the team behind Exact Medicare. We partner with employers, advisors, and
              benefits brokers to support employees at and beyond age 65.
            </p>
</div>
<div className="md:w-1/2 flex flex-col sm:flex-row gap-6 text-[11px]">
<div className="flex-1 space-y-1">
<p className="text-slate-200 font-medium tracking-[0.12em] uppercase">
                Compliance
              </p>
<p className="text-slate-400 font-light leading-relaxed">
                Not affiliated with or endorsed by the U.S. government or the federal Medicare program.
              </p>
<p className="text-slate-400 font-light leading-relaxed">
                We do not offer every plan available in your area. Any information we provide is
                limited to the plans we do offer in your area. Please contact Medicare.gov or
                1‑800‑MEDICARE to get information on all of your options.
              </p>
</div>
<div className="flex-1 space-y-1">
<p className="text-slate-200 font-medium tracking-[0.12em] uppercase">
                Legal &amp; contact
              </p>
<div className="flex flex-col gap-1">
<a className="text-slate-400 hover:text-slate-200 font-light underline-offset-2 hover:underline" href="#">
                  Privacy policy
                </a>
<a className="text-slate-400 hover:text-slate-200 font-light underline-offset-2 hover:underline" href="#">
                  Terms of use
                </a>
<a className="text-slate-400 hover:text-slate-200 font-light underline-offset-2 hover:underline" href="#">
                  Contact the Exact Benefits team
                </a>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-[11px] text-slate-500 font-light">
            © <span id="year"></span> Exact Benefits. All rights reserved.
          </p>
<p className="text-[11px] text-slate-500 font-light">
            For employer and professional use only. Not intended as individual tax or legal advice.
          </p>
</div>
</div>
</footer>
</div>



    </>
  );
}
