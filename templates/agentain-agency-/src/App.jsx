import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let currentLeads = 4;
      let leadIdCounter = 1043; // Starting after #1042

      const form = document.getElementById('inquiryForm');
      const submitBtn = document.getElementById('submitBtn');
      const successMessage = document.getElementById('successMessage');
      const leadsTableBody = document.getElementById('leadsTableBody');
      const leadCountEl = document.getElementById('leadCount');
      const paginationText = document.getElementById('paginationText');

      form.addEventListener('submit', (e) => {
          e.preventDefault();

          // Extract Form Data
          const formData = new FormData(form);
          const name = formData.get('Name');
          const email = formData.get('Email');
          let service = formData.get('Service_Interest');

          // Format service string for table
          if(service === 'Paid Ads') service = 'Paid Ads (Meta/TikTok)';
          if(service === 'Short-Form Content') service = 'Short-Form Content';

          // UI Loading State
          const originalBtnContent = submitBtn.innerHTML;
          submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> <span>Processing...</span>';
          submitBtn.disabled = true;

          // Simulate Network Request / Backend Process
          setTimeout(() => {
              // 1. Swap Form for Success Message
              form.classList.add('hidden');
              successMessage.classList.remove('hidden');
              successMessage.classList.add('flex');

              // 2. Dynamically Insert Lead into "Database"
              const newRow = document.createElement('tr');
              newRow.className = 'hover:bg-zinc-900/30 transition-colors group bg-zinc-900/40 opacity-0';

              // Format Current Time
              const now = new Date();
              const timeString = 'Just now';

              newRow.innerHTML = `
                  <td class="px-3 py-3 text-emerald-500 font-mono text-xs">#${leadIdCounter}</td>
                  <td class="px-3 py-3">
                      <div class="font-medium text-zinc-200">${name}</div>
                      <div class="text-xs text-zinc-500">${email}</div>
                  </td>
                  <td class="px-3 py-3 text-zinc-400">${service}</td>
                  <td class="px-3 py-3 text-zinc-500 text-xs">${timeString}</td>
                  <td class="px-3 py-3 text-right">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">New Lead</span>
                  </td>
              `;

              // Add to DOM at top
              leadsTableBody.insertBefore(newRow, leadsTableBody.firstChild);

              // Animate new row in
              setTimeout(() => {
                  newRow.classList.remove('opacity-0');
                  newRow.classList.add('animate-fade-in-up');
              }, 50);

              // Update Counters
              currentLeads++;
              leadIdCounter++;
              leadCountEl.innerText = `(${currentLeads})`;
              paginationText.innerText = `Showing ${currentLeads} leads`;

              // Reset Button state silently in background for next time
              submitBtn.innerHTML = originalBtnContent;
              submitBtn.disabled = false;
              form.reset();

          }, 1500); // 1.5s simulated delay
      });

      // Helper to reset the form view
      window.resetForm = function() {
          successMessage.classList.add('hidden');
          successMessage.classList.remove('flex');
          form.classList.remove('hidden');
          form.classList.add('animate-fade-in-up');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none -z-10 opacity-0 animate-fade-in-up"></div>

<nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md opacity-0 animate-fade-in-up">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:infinity-linear"></iconify-icon>
<span className="tracking-tighter font-semibold text-lg">agentain.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#booking">
            Book a Call
          </a>
<a className="hover:text-white transition-colors" href="#admin-database">
            Database
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5" href="#admin-database">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
            Admin
          </a>
</div>
</div>
</nav>

<header className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8 opacity-0 animate-fade-in-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        Accepting new clients for Q3
      </div>
<h1 className="text-4xl md:text-6xl tracking-tighter font-semibold text-white mb-6 leading-tight opacity-0 animate-fade-in-up delay-200">
        Scale your brand's presence
        <br className="hidden md:block"/>
        with precision.
      </h1>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-300">
        We are Agentain. A data-driven social media marketing agency focused on
        conversion, audience growth, and crafting scroll-stopping digital
        experiences.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
<a className="h-10 px-6 rounded-lg bg-white text-zinc-950 font-medium text-sm flex items-center justify-center hover:bg-zinc-200 transition-all active:scale-95 w-full sm:w-auto" href="#booking">
          Start Growing Today
        </a>
<a className="h-10 px-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-white font-medium text-sm flex items-center justify-center hover:bg-zinc-800 transition-all active:scale-95 w-full sm:w-auto" href="#services">
          View Services
        </a>
</div>
</header>

<section className="py-24 px-6 border-t border-zinc-800/30 opacity-0 animate-fade-in-up delay-200" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl tracking-tight font-semibold text-white mb-3">
            Our Expertise
          </h2>
<p className="text-sm text-zinc-400">
            Targeted strategies to capture attention and drive revenue.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-5 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:clapperboard-play-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">
              Short-Form Content
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              High-retention TikToks, Reels, and Shorts designed to go viral and
              build a massive organic audience.
            </p>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-5 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">
              Paid Advertising
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              Precision-targeted Meta and TikTok ad campaigns focused solely on
              maximizing your ROAS.
            </p>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-5 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">
              Account Management
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
              End-to-end management of your social profiles, community
              engagement, and brand reputation.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/30 bg-zinc-950/50 relative opacity-0 animate-fade-in-up delay-300" id="booking">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl tracking-tight font-semibold text-white mb-4">
            Book a Discovery Call
          </h2>
<p className="text-sm text-zinc-400">
            Fill out the form below. All inquiries are sent directly to our lead
            strategist.
          </p>
</div>

<form className="space-y-4" id="inquiryForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
                Full Name
              </label>
<input className="w-full h-10 px-3 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all placeholder:text-zinc-600" name="Name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
                Company Email
              </label>
<input className="w-full h-10 px-3 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all placeholder:text-zinc-600" name="Email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
              Primary Goal
            </label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-10 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all appearance-none cursor-pointer" name="Service_Interest">
<option value="Short-Form Content">
                  Short-Form Content Production
                </option>
<option value="Paid Ads">Paid Advertising (Meta/TikTok)</option>
<option value="Full Management">Full Account Management</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
              Message
            </label>
<textarea className="w-full p-3 rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all resize-none placeholder:text-zinc-600" name="Message" placeholder="Tell us about your current social media presence..." required="" rows="4"></textarea>
</div>
<button className="flex hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium text-zinc-950 bg-white w-full h-10 rounded-lg mt-2 gap-x-2 gap-y-2 items-center justify-center" id="submitBtn" type="submit">
<span>Send Inquiry</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>

<div className="hidden flex-col items-center justify-center py-10 px-6 text-center border border-zinc-800/50 bg-zinc-900/30 rounded-xl" id="successMessage">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-4 animate-fade-in-up">
<iconify-icon className="text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2 animate-fade-in-up delay-100">
            Inquiry Sent Successfully
          </h3>
<p className="text-sm text-zinc-400 animate-fade-in-up delay-200">
            Your details have been securely logged to our database. Our lead
            strategist will be in touch shortly.
          </p>
<button className="mt-6 text-xs font-medium text-zinc-500 hover:text-white transition-colors animate-fade-in-up delay-300" onclick="resetForm()">
            Submit another inquiry
          </button>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800 bg-[#09090b] relative z-10 opacity-0 animate-fade-in-up delay-400" id="admin-database">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:database-linear"></iconify-icon>
              Admin Portal
            </h2>
<p className="text-xs text-zinc-500 mt-1">
              Authorized access only. Connected to live database.
            </p>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              System Online
            </span>
</div>
</div>

<div className="border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-950 flex flex-col md:flex-row shadow-2xl shadow-black/50">

<aside className="w-full md:w-56 border-b md:border-b-0 md:border-r border-zinc-800/80 bg-zinc-900/20 p-4 flex flex-col gap-1">
<div className="px-2 pb-4 mb-2 border-b border-zinc-800/50">
<span className="tracking-tighter font-semibold text-sm text-white">
                agentain.
                <span className="text-zinc-500 font-normal">Workspace</span>
</span>
</div>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-800/50 text-white text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
              Leads Data
            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-zinc-800/30 hover:text-white text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:chart-2-linear"></iconify-icon>
              Analytics
            </a>
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-400 hover:bg-zinc-800/30 hover:text-white text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
              Campaigns
            </a>
<div className="mt-auto pt-4">
<a className="flex items-center gap-2 px-2 py-1.5 rounded-md text-zinc-500 hover:text-zinc-300 text-sm transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
                Settings
              </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<div className="h-14 border-b border-zinc-800/80 flex items-center justify-between px-4 sm:px-6 bg-zinc-900/10">
<h3 className="text-sm font-semibold text-white">
                Recent Inquiries
                <span className="text-zinc-500 font-normal ml-1" id="leadCount">
                  (4)
                </span>
</h3>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="h-8 pl-8 pr-3 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-white focus:outline-none focus:border-zinc-600 w-48 transition-colors" placeholder="Search emails..." type="text"/>
</div>
<button className="h-8 px-3 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-xs text-white transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                  Export
                </button>
</div>
</div>

<div className="overflow-x-auto custom-scroll flex-1 p-4 sm:p-6">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr>
<th className="px-3 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800/80 w-16">
                      ID
                    </th>
<th className="px-3 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800/80">
                      Contact
                    </th>
<th className="px-3 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800/80">
                      Service Requested
                    </th>
<th className="px-3 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800/80">
                      Date
                    </th>
<th className="px-3 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800/80 text-right">
                      Status
                    </th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-800/50" id="leadsTableBody">

<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-3 py-3 text-zinc-500 font-mono text-xs">
                      #1042
                    </td>
<td className="px-3 py-3">
<div className="font-medium text-zinc-200">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">
                        sarah.j@techflow.io
                      </div>
</td>
<td className="px-3 py-3 text-zinc-400">Short-Form Content</td>
<td className="px-3 py-3 text-zinc-500 text-xs">
                      Today, 2:45 PM
                    </td>
<td className="px-3 py-3 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        New Lead
                      </span>
</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-3 py-3 text-zinc-500 font-mono text-xs">
                      #1041
                    </td>
<td className="px-3 py-3">
<div className="font-medium text-zinc-200">Marcus Chen</div>
<div className="text-xs text-zinc-500">m.chen@elevate.co</div>
</td>
<td className="px-3 py-3 text-zinc-400">Paid Ads (Meta)</td>
<td className="px-3 py-3 text-zinc-500 text-xs">
                      Yesterday, 9:12 AM
                    </td>
<td className="px-3 py-3 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        In Review
                      </span>
</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-3 py-3 text-zinc-500 font-mono text-xs">
                      #1040
                    </td>
<td className="px-3 py-3">
<div className="font-medium text-zinc-200">Elena Rostova</div>
<div className="text-xs text-zinc-500">
                        contact@luminabeauty.com
                      </div>
</td>
<td className="px-3 py-3 text-zinc-400">Full Management</td>
<td className="px-3 py-3 text-zinc-500 text-xs">
                      Oct 24, 2023
                    </td>
<td className="px-3 py-3 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Contacted
                      </span>
</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-3 py-3 text-zinc-500 font-mono text-xs">
                      #1039
                    </td>
<td className="px-3 py-3">
<div className="font-medium text-zinc-200">
                        David Reynolds
                      </div>
<div className="text-xs text-zinc-500">
                        david@reynoldsfit.net
                      </div>
</td>
<td className="px-3 py-3 text-zinc-400">Short-Form Content</td>
<td className="px-3 py-3 text-zinc-500 text-xs">
                      Oct 22, 2023
                    </td>
<td className="px-3 py-3 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                        Archived
                      </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="h-12 border-t border-zinc-800/80 flex items-center justify-between px-4 sm:px-6 bg-zinc-900/10">
<span className="text-xs text-zinc-500" id="paginationText">
                Showing 4 leads
              </span>
<div className="flex items-center gap-1">
<button className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors disabled:opacity-50" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-white bg-zinc-800 transition-colors text-xs">
                  1
                </button>
<button className="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors disabled:opacity-50" disabled="">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-800/50 mt-auto text-center bg-zinc-950 opacity-0 animate-fade-in-up delay-400">
<p className="text-xs text-zinc-600">
        © 2024 agentain agency. All rights reserved.
      </p>
</footer>



    </>
  );
}
