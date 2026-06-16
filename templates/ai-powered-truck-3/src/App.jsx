import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


          (function() {
              const counterEl = document.getElementById('ai-adoption-counter');
              if (!counterEl) return;

              let count = 0;
              const velocity = 1.2; // businesses per second
              const interval = 833; // roughly 1.2 per second (1000ms / 1.2)

              function updateCounter() {
                count++;
                counterEl.textContent = count.toLocaleString();
              }

              // Start the counter
              setInterval(updateCounter, interval);

              // Initial update after a short delay
              setTimeout(updateCounter, 500);
            })();
        


      (function() {
                    // Currency Formatting
                    function formatCurrency(num) {
                      return '$' + num.toLocaleString('en-US', { maximumFractionDigits: 0 });
                    }

                    // Number Formatting
                    function formatNumber(num) {
                      return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
                    }

                    // Input Elements
                    const inputs = {
                      hires: document.getElementById('input-hires'),
                      recruiters: document.getElementById('input-recruiters'),
                      salary: document.getElementById('input-salary'),
                      manual: document.getElementById('input-manual'),
                      cph: document.getElementById('input-cph'),
                      vacancy: document.getElementById('input-vacancy')
                    };

                    // Display Elements
                    const displays = {
                      hires: document.getElementById('val-hires'),
                      recruiters: document.getElementById('val-recruiters'),
                      salary: document.getElementById('val-salary'),
                      manual: document.getElementById('val-manual'),
                      cph: document.getElementById('val-cph'),
                      vacancy: document.getElementById('val-vacancy')
                    };

                    // Result Elements
                    const results = {
                      annual: document.getElementById('result-annual'),
                      monthly: document.getElementById('result-monthly'),
                      daily: document.getElementById('result-daily'),
                      hours: document.getElementById('result-hours'),
                      costRecruiter: document.getElementById('result-cost-recruiter'),
                      text: document.getElementById('result-text')
                    };

                    // Role Presets
                    const rolePresets = {
                      'recruiter': { hires: 50, recruiters: 3, salary: 70000, manual: 40 },
                      'hr_manager': { hires: 150, recruiters: 8, salary: 75000, manual: 45 },
                      'hiring_manager': { hires: 25, recruiters: 1, salary: 110000, manual: 30 },
                      'ceo': { hires: 10, recruiters: 1, salary: 150000, manual: 15 }
                    };

                    // Setup Input Listeners
                    Object.keys(inputs).forEach(key => {
                      if(!inputs[key]) return;
                      inputs[key].addEventListener('input', function() {
                        const val = this.value;
                        if (key === 'salary' || key === 'cph' || key === 'vacancy') {
                          displays[key].textContent = formatCurrency(parseInt(val));
                        } else if (key === 'manual') {
                          displays[key].textContent = val + '%';
                        } else {
                          displays[key].textContent = val;
                        }
                      });
                    });

                    // Role Selector Logic
                    document.querySelectorAll('input[name="role"]').forEach(radio => {
                      radio.addEventListener('change', (e) => {
                        const p = rolePresets[e.target.value];
                        if (p) {
                          inputs.hires.value = p.hires;
                          inputs.recruiters.value = p.recruiters;
                          inputs.salary.value = p.salary;
                          inputs.manual.value = p.manual;

                          // Trigger input events to update display values
                          Object.values(inputs).forEach(inp => inp.dispatchEvent(new Event('input')));

                          // Reset Results
                          results.annual.textContent = '$0';
                          results.monthly.textContent = '$0';
                          results.daily.textContent = '$0';
                          results.hours.textContent = '0 hrs';
                          results.costRecruiter.textContent = '$0';
                          results.text.textContent = 'Click "Calculate My Loss" to see updated figures based on your new role selection.';
                          document.getElementById('webhook-form-container').classList.add('hidden');
                        }
                      });
                    });

                    // Advanced Toggle
                    const toggleAdvanced = document.getElementById('toggle-advanced');
                    if (toggleAdvanced) {
                      toggleAdvanced.addEventListener('click', function() {
                        const el = document.getElementById('advanced-metrics');
                        const icon = document.getElementById('advanced-icon');
                        el.classList.toggle('hidden');
                        icon.style.transform = el.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                      });
                    }

                    // Calculate Logic
                    document.getElementById('calculate-btn').addEventListener('click', function() {
                      const hires = parseInt(inputs.hires.value);
                      const recruiters = parseInt(inputs.recruiters.value);
                      const salary = parseInt(inputs.salary.value);
                      const manualPercent = parseInt(inputs.manual.value) / 100;

                      // Constants
                      const workHoursPerYear = 2080;
                      const valuePerHireOptimization = 500; // Est. opportunity cost

                      // Per Recruiter Calculations
                      const hoursLostPerRecruiter = Math.round(workHoursPerYear * manualPercent);
                      const costLostPerRecruiter = Math.round(salary * manualPercent);

                      // Total Organization Calculations
                      const totalManualCost = costLostPerRecruiter * recruiters;
                      const opportunityCost = hires * valuePerHireOptimization * manualPercent;
                      const annualLoss = totalManualCost + opportunityCost;

                      // Update Results
                      results.annual.textContent = formatCurrency(annualLoss);
                      results.monthly.textContent = formatCurrency(annualLoss / 12);
                      results.daily.textContent = formatCurrency(annualLoss / 365);
                      results.hours.textContent = formatNumber(hoursLostPerRecruiter) + ' hrs';
                      results.costRecruiter.textContent = formatCurrency(costLostPerRecruiter);

                      // Update Text
                      results.text.textContent = `Based on a salary of ${formatCurrency(salary)}, each recruiter is wasting ${formatNumber(hoursLostPerRecruiter)} hours and ${formatCurrency(costLostPerRecruiter)} annually on manual tasks. Total organizational loss is ${formatCurrency(annualLoss)} per year.`;

                      // Show Form
                      document.getElementById('webhook-form-container').classList.remove('hidden');
                    });
                  })();
    


    (function() {
                  // Format currency
                  function formatCurrency(num) {
                    return '$' + num.toLocaleString('en-US', { maximumFractionDigits: 0 });
                  }

                  // Get elements
                  const inputHires = document.getElementById('input-hires');
                  const inputRecruiters = document.getElementById('input-recruiters');
                  const inputSalary = document.getElementById('input-salary');
                  const inputManual = document.getElementById('input-manual');
                  const inputCph = document.getElementById('input-cph');
                  const inputVacancy = document.getElementById('input-vacancy');

                  const valHires = document.getElementById('val-hires');
                  const valRecruiters = document.getElementById('val-recruiters');
                  const valSalary = document.getElementById('val-salary');
                  const valManual = document.getElementById('val-manual');
                  const valCph = document.getElementById('val-cph');
                  const valVacancy = document.getElementById('val-vacancy');

                  const resultAnnual = document.getElementById('result-annual');
                  const resultMonthly = document.getElementById('result-monthly');
                  const resultDaily = document.getElementById('result-daily');
                  const resultText = document.getElementById('result-text');

                  const calculateBtn = document.getElementById('calculate-btn');
                  const toggleAdvanced = document.getElementById('toggle-advanced');
                  const advancedMetrics = document.getElementById('advanced-metrics');
                  const advancedIcon = document.getElementById('advanced-icon');
                  const webhookFormContainer = document.getElementById('webhook-form-container');

                  // Add functionality for Role Selection
                  const roleInputs = document.querySelectorAll('input[name="role"]');
                  const rolePresets = {
                    'recruiter': { hires: 50, recruiters: 3, salary: 70000, manual: 40 },
                    'hr_manager': { hires: 150, recruiters: 8, salary: 75000, manual: 45 },
                    'hiring_manager': { hires: 25, recruiters: 1, salary: 110000, manual: 30 },
                    'ceo': { hires: 10, recruiters: 1, salary: 150000, manual: 15 }
                  };

                  roleInputs.forEach(input => {
                    input.addEventListener('change', (e) => {
                      const role = e.target.value;
                      if (rolePresets[role]) {
                        const p = rolePresets[role];

                        // Update inputs
                        inputHires.value = p.hires;
                        inputRecruiters.value = p.recruiters;
                        inputSalary.value = p.salary;
                        inputManual.value = p.manual;

                        // Update displays
                        valHires.textContent = p.hires;
                        valRecruiters.textContent = p.recruiters;
                        valSalary.textContent = formatCurrency(p.salary);
                        valManual.textContent = p.manual + '%';

                        // Reset results to encourage recalculation
                        resultAnnual.textContent = '$0';
                        resultMonthly.textContent = '$0';
                        resultDaily.textContent = '$0';
                        resultText.textContent = 'Click "Calculate My Loss" to see updated figures based on your new role selection.';
                        webhookFormContainer.classList.add('hidden');
                      }
                    });
                  });

                  // Update slider display values
                  inputHires.addEventListener('input', function() {
                    valHires.textContent = this.value;
                  });

                  inputRecruiters.addEventListener('input', function() {
                    valRecruiters.textContent = this.value;
                  });

                  inputSalary.addEventListener('input', function() {
                    valSalary.textContent = formatCurrency(parseInt(this.value));
                  });

                  inputManual.addEventListener('input', function() {
                    valManual.textContent = this.value + '%';
                  });

                  inputCph.addEventListener('input', function() {
                    valCph.textContent = formatCurrency(parseInt(this.value));
                  });

                  inputVacancy.addEventListener('input', function() {
                    valVacancy.textContent = formatCurrency(parseInt(this.value));
                  });

                  // Toggle advanced metrics
                  toggleAdvanced.addEventListener('click', function() {
                    advancedMetrics.classList.toggle('hidden');
                    advancedIcon.style.transform = advancedMetrics.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                  });

                  // Calculate button
                  calculateBtn.addEventListener('click', function() {
                    const hires = parseInt(inputHires.value);
                    const recruiters = parseInt(inputRecruiters.value);
                    const salary = parseInt(inputSalary.value);
                    const manualPercent = parseInt(inputManual.value) / 100;

                    // Calculate annual loss from manual tasks
                    // Manual task cost = recruiters * salary * manual percentage
                    const manualTaskCost = recruiters * salary * manualPercent;

                    // Opportunity cost (estimated time lost that could be spent on strategic hiring)
                    const opportunityCost = hires * 500 * manualPercent; // $500 estimated value per hire optimization

                    // Total annual loss
                    const annualLoss = manualTaskCost + opportunityCost;
                    const monthlyLoss = annualLoss / 12;
                    const dailyLoss = annualLoss / 365;

                    // Update results
                    resultAnnual.textContent = formatCurrency(annualLoss);
                    resultMonthly.textContent = formatCurrency(monthlyLoss);
                    resultDaily.textContent = formatCurrency(dailyLoss);

                    // Dynamic analysis text
                    let analysisText = '';
                    if (annualLoss > 200000) {
                      analysisText = `Your team of ${recruiters} recruiters is spending approximately ${inputManual.value}% of their time on manual tasks, costing your organization ${formatCurrency(annualLoss)} annually. This is a significant opportunity to leverage AI automation and redirect resources toward strategic hiring initiatives.`;
                    } else if (annualLoss > 100000) {
                      analysisText = `With ${hires} hires per year and ${inputManual.value}% manual task time, you're losing ${formatCurrency(annualLoss)} annually. Automating screening, scheduling, and data entry could recover substantial resources for your ${recruiters}-person team.`;
                    } else {
                      analysisText = `Your current manual process costs approximately ${formatCurrency(annualLoss)} per year. Even at this scale, automation can free up your recruiters to focus on candidate relationships and quality-of-hire improvements.`;
                    }

                    resultText.textContent = analysisText;

                    // Show the form container
                    webhookFormContainer.classList.remove('hidden');
                  });
                })();
  


                        const ctx = document.getElementById('timeSavingsChart').getContext('2d');
                        new Chart(ctx, {
                            type: 'bar',
                            data: {
                                labels: ['Lead Qual.', 'Scheduling', 'Data Entry', 'Follow-up'],
                                datasets: [
                                    {
                                        label: 'Manual',
                                        data: [45, 30, 20, 40], // Minutes
                                        backgroundColor: '#3f3f46',
                                        borderRadius: 4,
                                        barPercentage: 0.6,
                                    },
                                    {
                                        label: 'AI Agent',
                                        data: [2, 1, 0.1, 1], // Minutes
                                        backgroundColor: '#10b981',
                                        borderRadius: 4,
                                        barPercentage: 0.6,
                                    }
                                ]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                                        ticks: { color: '#71717a', font: { size: 10 } },
                                        title: { display: true, text: 'Minutes', color: '#52525b', font: {size: 10} }
                                    },
                                    x: {
                                        grid: { display: false },
                                        ticks: { color: '#a1a1aa', font: { size: 10, family: 'Inter' } }
                                    }
                                }
                            }
                        });
                    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div></div>

<main className="min-h-screen overflow-hidden flex flex-col lg:max-w-[1400px] lg:min-h-[900px] lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:shadow-2xl lg:shadow-black bg-black/20 w-full relative backdrop-blur-xl">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5 hidden sm:block"></div>
<div className="w-px h-full bg-white/5 hidden md:block"></div>
<div className="w-px h-full bg-white/5 hidden lg:block"></div>
<div className="w-px h-full bg-white/5 hidden xl:block"></div>
<div className="w-px h-full bg-white/5"></div>
</div>

<nav className="flex md:px-12 md:py-8 z-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="flex items-center gap-2">
<div className="flex text-white bg-gradient-to-br from-sky-500 to-blue-600 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.4)] items-center justify-center">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="solar:box-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="database-bold-duotone" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4" fill="#ffffff"></path>
<path d="M4 12v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6c0 2.21-3.582 4-8 4s-8-1.79-8-4" fill="#ffffff" opacity=".5">
</path>
<path d="M4 6v6c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0 2.21-3.582 4-8 4S4 8.21 4 6" fill="#ffffff" opacity=".7">
</path>
</svg>
</div>
</div>

<div className="hidden shadow-black/20 md:flex bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-1 pb-1 pl-1 shadow-lg backdrop-blur-md gap-x-1 gap-y-1 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>
<a className="transition-all text-sm font-medium text-white bg-white/10 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm" href="/home" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '9999px'}}>Home</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-1.5 pr-4 pb-1.5 pl-4" href="/newsroom" style={{}}>Newsroom</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-1.5 pr-4 pb-1.5 pl-4" href="/about" style={{}}>About</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-1.5 pr-4 pb-1.5 pl-4" href="/faq" style={{}}>FAQ</a>
</div>

<button className="hidden sm:flex hover:from-blue-500 hover:to-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex cursor-pointer text-sm font-medium text-white bg-gradient-to-b from-blue-600 to-blue-700 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0px_0px_0px_1px_rgba(37,99,235,1),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm gap-x-2 gap-y-x-2 items-center" onclick="window.location.href='/home';window.location.href='/contact';window.location.href='/contact';window.location.href='/contact'" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span className="text-sm font-medium text-white tracking-tight" style={{}}>Contact Us</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 text-blue-100" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button className="md:hidden text-zinc-400 hover:text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="flex-1 flex flex-col md:flex-row z-20 h-full relative">

<div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent md:hidden z-10 pointer-events-none">
</div>

<div className="w-full md:w-[50%] lg:w-[45%] px-6 md:px-12 pt-8 md:pt-24 z-30 pointer-events-none flex flex-col justify-start md:justify-between pb-12 h-full">
<div className="md:mx-0 pointer-events-auto max-w-xl mr-auto ml-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium tracking-wide mb-6 shadow-[0_0_10px_rgba(14,165,233,0.15)]" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
        NEW VERSION 2.0
      </div>

<h1 className="leading-[0.95] sm:text-6xl md:leading-[0.9] md:mb-8 md:text-6xl lg:text-7xl text-6xl font-normal text-white tracking-tight font-serif-custom mb-8 drop-shadow-2xl" style={{}}>AI Truck Driver Recruiting Software
        <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-blue-600 pr-2" style={{}}>That Supercharges Your Hiring</span>
</h1>

<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-md mb-8 md:text-xl md:mb-12 lg:text-xl" style={{}}>
        Hybrid
        AI Workforce + Autonomous AI Departments, Built to Scale with Your Firm</p>

<div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full flex-none">

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto flex-none">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#38bdf8_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:bg-gradient-to-b group-hover:from-zinc-900 group-hover:to-black cursor-pointer text-sm font-medium text-white bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" onclick="window.location.href='/#Recruiting-Cost-Calculator'" role="button">
<span className="z-10 relative" style={{}}>Discover How Much You'll Save</span>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:w-auto flex-none w-full rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#a1a1aa_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
</button>
</div>

</div>
</div>

<div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0 opacity-40 md:opacity-100">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="roadGradient" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: '0.3'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#000000', stopOpacity: '0.0'}}></stop>
</lineargradient>
</defs>

<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" id="pathMain"></path>

<g className="hidden lg:block">

<rect fill="none" height="400" opacity="0.3" rx="60" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>
<rect className="animate-beam" fill="none" height="400" opacity="0.5" rx="60" stroke="#38bdf8" strokeLinecap="round" strokeWidth="1" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>

<rect fill="none" height="450" opacity="0.3" rx="70" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>
<rect className="animate-beam" fill="none" height="450" opacity="0.5" rx="70" stroke="#38bdf8" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-3s'}} transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>

<rect fill="none" height="300" opacity="0.3" rx="50" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
<rect className="animate-beam" fill="none" height="300" opacity="0.5" rx="50" stroke="#38bdf8" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-6s'}} transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
</g>

<path d="M 600 1000 C 700 900, 800 700, 1300 550" fill="none" opacity="0.3" stroke="#1e293b" strokeLinecap="round" strokeWidth="30"></path>
<path d="M 900 1000 C 950 900, 900 700, 1300 450" fill="none" opacity="0.3" stroke="#1e293b" strokeLinecap="round" strokeWidth="20"></path>

<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" opacity="0.8" stroke="url(#roadGradient)" strokeLinecap="butt" strokeWidth="50"></path>
<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" opacity="0.6" stroke="rgba(255,255,255,0.1)" stroke-dasharray="20 40" strokeWidth="2"></path>

<rect fill="#0ea5e9" filter="drop-shadow(0 0 10px rgba(14,165,233,0.5))" height="30" opacity="0.95" rx="4" width="60" x="-30" y="-15">
<animatemotion calcmode="linear" dur="5s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite" rotate="auto">
<mpath href="#pathMain"></mpath>
</animatemotion>
</rect>
</svg>


<div className="hidden md:block absolute md:right-8 md:bottom-[20rem] lg:right-[10%] lg:top-[15%] lg:bottom-auto animate-float z-40 transform origin-bottom-right">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-52 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400" style={{}}>03</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide" style={{}}>Deliver</span>
</div>
<svg aria-hidden="true" className="lucide lucide-server text-zinc-500 w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-zinc-400 font-medium" style={{}}>Endpoint Active</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-[10px] text-zinc-500 font-mono uppercase" style={{}}>Latency</span>
<span className="text-xs text-emerald-400 font-mono font-medium" style={{}}>12ms</span>
</div>
</div>
</div>

<div className="hidden md:block absolute md:right-8 md:bottom-[12rem] lg:right-[25%] lg:bottom-[40%] animate-float delay-200 z-40 transform origin-bottom-right">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-56 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400" style={{}}>02</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide" style={{}}>Transform</span>
</div>
<svg aria-hidden="true" className="lucide lucide-cpu text-zinc-500 w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="bg-black/40 p-2.5 rounded border border-white/5">
<div className="flex gap-1.5 mb-1">
<div className="w-2 h-2 rounded-full bg-red-500/40"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
<div className="w-2 h-2 rounded-full bg-green-500/40"></div>
</div>
<p className="font-mono text-[10px] text-zinc-400 leading-tight" style={{}}>
<span className="text-purple-400" style={{}}>SELECT</span> * <span className="text-purple-400" style={{}}>FROM</span>
            stream
            <span className="text-purple-400" style={{}}>WHERE</span> val &gt; 0.95
          </p>
</div>
</div>
</div>

<div className="hidden md:block absolute md:right-8 md:bottom-12 lg:left-[52%] lg:bottom-[12%] lg:right-auto animate-float delay-500 z-40 transform origin-bottom-left">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-52 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400" style={{}}>01</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide" style={{}}>Ingest</span>
</div>
<svg aria-hidden="true" className="lucide lucide-zap text-zinc-500 w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center text-[10px] border border-orange-500/20">
<span className="iconify" data-icon="lucide:kafka"></span>
</div>
<span className="text-[10px] font-medium text-zinc-400" style={{}}>Kafka</span>
</div>
<span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-medium" style={{}}>Live</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center text-[10px] border border-blue-500/20">
<svg aria-hidden="true" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
</div>
<span className="text-[10px] font-medium text-zinc-400" style={{}}>Postgres</span>
</div>
<span className="text-[9px] text-zinc-600" style={{}}>Syncing</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col z-20 w-full border-white/5 border-t relative">
<section className="md:px-12 md:pt-24 z-10 opacity-70 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">


<div className="z-10 max-w-3xl mt-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="overflow-hidden group bg-zinc-900/40 border-white/10 border rounded-2xl relative shadow-2xl backdrop-blur-md">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[80px] -z-10 rounded-full opacity-50 pointer-events-none" style={{}}></div>
<div className="md:p-10 z-10 overflow-hidden bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f55872-adf5-4910-9a7c-d21c0041bbe1_3840w.webp?w=800&amp;q=80)] bg-cover pt-8 pr-8 pb-8 pl-8 relative" style={{}}>

<div className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none">
<div className="w-full h-full opacity-60 mix-blend-screen" data-us-project="yWZ2Tbe094Fsjgy9NRnD" style={{width: '100%', height: '100%'}}>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-zinc-900/90"></div>
<div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-[1px]"></div>
</div>
<div className="z-10 relative">

<div className="inline-flex text-[10px] uppercase font-semibold tracking-wider border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_10px_rgba(239,68,68,0.1)] gap-x-2 gap-y-2 items-center text-cyan-300 bg-cyan-500/10 border-cyan-500/20" style={{}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
            Live Adoption Tracker
          </div>
<h3 className="uppercase group-hover:text-cyan-400 text-lg font-medium text-zinc-400 tracking-widest mb-2" style={{}}>
            Businesses Adopting AI
          </h3>
<p className="text-zinc-500 text-xs mb-8 font-light" style={{}}>
            Count since you started reading this page
          </p>

<div className="flex mb-8 relative gap-x-1 gap-y-1 items-baseline justify-center">
<div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tighter font-geist-mono tabular-nums leading-none" id="ai-adoption-counter" style={{opacity: '1'}}>1</div>
<span className="text-xl md:text-3xl text-zinc-600 font-light translate-y-[-4px]" style={{}}>
                +
              </span>
</div>

<div className="grid grid-cols-2 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5 max-w-sm mx-auto backdrop-blur-md">
<div className="hover:bg-zinc-800/80 transition-colors bg-zinc-900/80 pt-3 pr-3 pb-3 pl-3">
<div className="text-[10px] uppercase text-sm text-cyan-500 tracking-wide mb-1">
                Velocity
              </div>
<div className="text-sm font-medium text-zinc-200" style={{}}>
                ~1.2 / sec
              </div>
</div>
<div className="bg-zinc-900/80 p-3 hover:bg-zinc-800/80 transition-colors">
<div className="text-[10px] uppercase text-sm text-violet-600 tracking-wide mb-1" style={{}}>
                Market Trend
              </div>
<div className="flex gap-1 text-sm font-medium text-slate-50 gap-x-1 gap-y-1 items-center justify-center">
                +24%<svg className="lucide lucide-trending-up w-[12px] h-[12px] text-slate-50" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline className="" points="16 7 22 7 22 13"></polyline>
</svg></div>
</div>
</div>
</div>

</div>

<div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-800">
<div className="h-full bg-gradient-to-r to-cyan-400 w-full opacity-50 from-cyan-500 via-cyan-600"></div>
</div>
</div>
</div>

</section><section className="md:px-12 lg:py-32 z-10 bg-black/50 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl font-normal text-white tracking-tight font-serif-custom mb-6 md:text-5xl" style={{}}>Experience the Power of AI-Powered CRM for  <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-indigo-500" style={{}}>Truck Driver Recruitment</span></h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400" style={{}}>Step into a new era of driver relationship management. Our AI-Powered CRM is designed specifically for the transportation industry, with Artificial Intelligence deeply integrated at its core.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-8 gap-y-8">

<div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col">
<h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight" style={{}}>
<svg className="lucide lucide-scan-face text-indigo-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
              Automated Screening
            </h3>
<p className="text-zinc-400 font-light mb-12 text-base leading-relaxed" style={{}}>Eliminate manual review time by automatically tagging drivers based on CDL class, endorsements, and safety history.</p>

<div className="mt-auto relative h-[320px] w-full flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-black/20 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', transform: 'perspective(500px) rotateX(60deg) translateY(50px) scale(1.5)'}}>
</div>

<div className="flex md:gap-4 text-[10px] md:text-xs text-zinc-300 font-mono z-20 mb-10 relative gap-x-2 gap-y-2 items-center justify-center" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)'}}>

<div className="flex flex-col gap-3">
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> OCR
                    Scan
                  </div>
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse delay-75"></span>
                    MVR Check
                  </div>
</div>

<svg className="w-8 h-12 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 48">
<path className="opacity-50" d="M0 12 C 16 12, 16 24, 32 24" stroke-dasharray="3 3">
</path>
<path className="opacity-50" d="M0 36 C 16 36, 16 24, 32 24" stroke-dasharray="3 3">
</path>
</svg>

<div className="px-3 py-2 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600 shadow-xl text-white font-semibold z-10" style={{}}>
                  qualifies driver
                </div>

<svg className="w-8 h-12 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 48">
<path className="opacity-50" d="M0 24 C 16 24, 16 12, 32 12" stroke-dasharray="3 3">
</path>
<path className="opacity-50" d="M0 24 C 16 24, 16 36, 32 36" stroke-dasharray="3 3">
</path>
</svg>

<div className="flex flex-col gap-3">
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm" style={{}}>
                    experience</div>
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm" style={{}}>
                    violations</div>
</div>
</div>

<div className="absolute bottom-8 w-full px-10 flex justify-center gap-4 z-10">
<span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-sm transform -rotate-2 hover:scale-105 transition-transform cursor-default select-none" style={{}}>Class A CDL</span>
<span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] shadow-[0_0_15px_rgba(14,165,233,0.2)] backdrop-blur-sm transform rotate-3 hover:scale-105 transition-transform cursor-default select-none" style={{}}>Hazmat Endorsed</span>
<span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-sm transform -translate-y-2 hover:scale-105 transition-transform cursor-default select-none" style={{}}>Clean MVR</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
<h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight" style={{}}>
<svg className="lucide lucide-list-filter text-sky-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>
              Precise Recruiting
            </h3>
<p className="text-zinc-400 font-light mb-12 text-base leading-relaxed" style={{}}>Apply boolean filters to match drivers with specific routes, equipment types, and shift requirements.</p>

<div className="mt-auto w-full bg-[#0c0c0e] rounded-xl border border-white/10 p-5 shadow-2xl relative overflow-hidden group-hover:shadow-indigo-500/10 transition-shadow duration-500">

<div className="flex items-center justify-between mb-5 border-b border-white/5 pb-3">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white tracking-wide" style={{}}>Driver Criteria</span>
<span className="px-1.5 py-0.5 rounded-md bg-zinc-800 text-[9px] font-medium text-zinc-400 border border-white/5" style={{}}>128 matches</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="space-y-3 font-mono text-[10px] sm:text-xs relative z-10">

<div className="flex items-center gap-2">
<span className="w-10 text-zinc-500 text-right font-medium" style={{}}>Where</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300 group-hover:border-white/20 transition-colors" style={{}}>
                    license</div>
<div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400" style={{}}>
                    =</div>
<div className="flex text-white bg-zinc-900 w-20 h-7 border-white/10 border rounded pr-2 pl-2 items-center text-[10px]" style={{}}>
                    Class A</div>
<button className="w-5 h-7 flex items-center justify-center text-zinc-600 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="solar:menu-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path></svg>
</button>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-zinc-500 text-right font-medium" style={{}}>And</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300 group-hover:border-white/20 transition-colors" style={{}}>
                    exp_years</div>
<div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400" style={{}}>
                    &gt;</div>
<div className="w-20 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-emerald-400" style={{}}>
                    2</div>
<button className="w-5 h-7 flex items-center justify-center text-zinc-600 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="solar:menu-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path></svg>
</button>
</div>

<div className="pl-4 border-l border-zinc-800 mt-2 pt-2 relative">
<span className="absolute -left-[17px] top-5 w-4 h-px bg-zinc-800"></span>
<div className="flex items-center gap-2 mb-2">
<span className="text-zinc-600 text-[9px] uppercase tracking-wider font-semibold" style={{}}>Or Group</span>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="w-10 text-zinc-500 text-right font-medium" style={{}}>Where</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300" style={{}}>
                      route</div>
<div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400" style={{}}>
                      in</div>
<div className="flex text-[10px] text-orange-400 bg-zinc-900 w-20 h-7 border-white/10 border rounded pr-2 pl-2 items-center" style={{}}>
                      [OTR, Reg]</div>
</div>
</div>
</div>

<div className="absolute -right-5 -bottom-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700">
</div>
</div>
</div>
</div>
</div>

</section><section className="z-10 md:px-12 lg:pb-20 lg:pt-20 bg-black/50 w-full max-w-[1400px] border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
</div>

<div className="z-10 text-center max-w-4xl mr-auto mb-10 ml-auto relative">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight font-serif-custom leading-[1.1] mb-8" style={{}}>
      Move beyond basic databases to an 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 animate-gradient-x" style={{}}>active, intelligent system</span>
</h2>
<p className="md:text-xl text-lg font-light text-zinc-400 max-w-2xl mr-auto ml-auto" style={{}}>
      Fuel your driver recruitment growth through a unified, automated lifecycle that transforms candidates into long-term employees.
    </p>
</div>

<div className="w-full relative z-10">

<div className="overflow-x-auto no-scrollbar -mx-6 md:mx-0 md:px-0 pr-6 pb-12 pl-6">
<div className="min-w-[1000px] relative">

<div className="flex w-full mb-8 justify-center">
<span className="text-[10px] uppercase text-lg font-semibold text-zinc-300 tracking-widest bg-white/5 border-white/10 border rounded-full px-3 py-1 backdrop-blur-sm" style={{}}>Employee Lifecycle</span>
</div>

<div className="flex w-full mb-2 text-sm font-medium text-white tracking-wide">

<div className="w-[11.11%] text-center flex flex-col items-center">
<span className="mb-3 opacity-90" style={{}}>Employer Brand</span>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent relative">
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-2 bg-zinc-700"></div>
</div>
</div>

<div className="w-[66.66%] text-center flex flex-col items-center px-2">
<span className="mb-3 opacity-90" style={{}}>Recruitment Cycle</span>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent relative">
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-2 bg-zinc-700"></div>
</div>
</div>

<div className="w-[22.22%] text-center flex flex-col items-center">
<span className="mb-3 opacity-90" style={{}}>Onboarding</span>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent relative">
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-2 bg-zinc-700"></div>
</div>
</div>
</div>

<div className="grid grid-cols-9 w-full text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mb-4 text-center">
<div className="col-span-1" style={{}}>Introduction</div>
<div className="col-span-1" style={{}}>Welcome</div>
<div className="col-span-1" style={{}}>Activate</div>
<div className="col-span-2 border-t border-zinc-800/0 relative" style={{}}>Diagnose &amp; Qualify</div>
<div className="col-span-2" style={{}}>Prescribe &amp; Offer</div>
<div className="col-span-2" style={{}}>Retain &amp; Grow</div>
</div>

<div className="flex w-full h-16 filter drop-shadow-2xl">

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out cursor-default">
<div className="absolute inset-0 bg-sky-950 clip-chevron-start border-r border-white/5 group-hover:bg-sky-900 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-1">
<div className="mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="text-sky-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.37z" fill="currentColor" fillOpacity="0.2"></path><path d="M12 21.37c-5-2.73-9-5.77-9-10.37a6 6 0 1 1 12 0c0 4.6-4 7.64-9 10.37z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-[10px] md:text-xs font-bold text-white uppercase leading-none" style={{}}>EmployerBrand</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-sky-700 clip-chevron border-l border-black/20 group-hover:bg-sky-600 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight" style={{}}>Source</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-sky-500 clip-chevron border-l border-black/20 group-hover:bg-sky-400 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight" style={{}}>Activate</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-teal-500 clip-chevron border-l border-black/20 group-hover:bg-teal-400 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight" style={{}}>Apply</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-emerald-500 clip-chevron border-l border-black/20 group-hover:bg-emerald-400 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight" style={{}}>Engage</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-emerald-600 clip-chevron border-l border-black/20 group-hover:bg-emerald-500 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight" style={{}}>Interview</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-green-600 clip-chevron border-l border-black/20 group-hover:bg-green-500 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight leading-none" style={{}}>JobOffer</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-green-700 clip-chevron border-l border-black/20 group-hover:bg-green-600 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3">
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight leading-none" style={{}}>OnBoard</span>
</div>
</div>

<div className="flex-1 relative group hover:flex-[1.2] transition-all duration-500 ease-out -ml-[14px]">
<div className="absolute inset-0 bg-green-800 clip-chevron-end border-l border-black/20 group-hover:bg-green-700 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center pl-3 pr-2">
<div className="mb-1 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="text-green-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tight leading-none" style={{}}>CareerPath</span>
</div>
</div>
</div>

<div className="absolute top-[6.5rem] left-0 w-full h-16 pointer-events-none mix-blend-overlay opacity-50 overflow-hidden">
<div className="w-[20%] h-full bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 animate-[shimmer_3s_infinite_linear]"></div>
</div>
</div>
</div>
</div>
<style>
    /* Custom Clip Paths for Arrows */
    .clip-chevron {
      clip-path: polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%, 15px 50%);
    }
    .clip-chevron-start {
      clip-path: polygon(0% 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 0% 100%);
    }
    .clip-chevron-end {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 15px 50%);
    }
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(500%); }
    }
  </style>
</section><section className="bg-black/50 w-full max-w-[1400px] z-10 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative md:px-12 lg:pt-20">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10">

<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur mb-6">
<svg className="lucide lucide-sparkles text-sky-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
<span className="text-sm font-medium text-sky-200/90 tracking-wide" style={{}}>Platform Capabilities</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight font-serif-custom leading-[1.1] mb-6" style={{}}>
        Intelligent features for the
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-gradient-x" style={{}}>modern recruiter</span>
</h2>
<p className="md:text-xl text-lg font-light text-zinc-400 leading-relaxed" style={{}}>
        Tools to track, automate, and scale your pipeline—built to elevate performance and help teams close faster.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-x-6 gap-y-6">

<div className="group overflow-hidden hover:border-white/20 transition-colors duration-500 md:p-8 flex flex-col h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent animate-pulse"></div>

<div className="absolute w-64 h-64 border border-sky-500/20 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-sky-500/20 rounded-full flex items-center justify-center">
<div className="w-32 h-32 border border-sky-500/20 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent w-full h-full rounded-full animate-[spin_4s_linear_infinite]" style={{maskImage: 'conic-gradient(transparent 270deg, black 360deg)'}}></div>
</div>

<div className="absolute top-10 right-10 w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping [animation-duration:3s]"></div>
<div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping [animation-duration:4s]"></div>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-sky-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
          Always-On Intelligence
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          AI operates continuously, automating tasks like driver sourcing and providing up-to-date context in real-time. Your recruiters can focus on building relationships while AI handles the data.
        </p>
</div>

<div className="group overflow-hidden hover:border-white/20 transition-colors duration-500 md:p-8 flex flex-col h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex flex-col p-4 gap-3">

<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/80 border border-white/5 border-l-2 border-l-emerald-500 transform translate-x-0 transition-transform">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-zinc-300 font-medium" style={{}}>Candidate Screened</span>
<span className="ml-auto text-[10px] text-zinc-600" style={{}}>Now</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 border-l-2 border-l-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.1)] animate-float">
<div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white animate-pulse">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m12 8 4 4-4 4"></path><path d="M8 12h8"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-semibold" style={{}}>Suggested Action</span>
<span className="text-[10px] text-indigo-300" style={{}}>Schedule Interview</span>
</div>
<button className="ml-auto px-2 py-1 bg-indigo-500 text-white rounded text-[10px] font-medium hover:bg-indigo-600 transition-colors" style={{}}>Apply</button>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-white/5 opacity-50">
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-white/10"></div>
<span className="text-xs text-zinc-500" style={{}}>Background Check</span>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          Action-Oriented Workflows
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          Seamless collaboration between human recruiters and AI Agents, guiding them with AI-generated next-best actions to optimize every stage of the driver recruitment process.
        </p>
</div>

<div className="group overflow-hidden hover:border-white/20 transition-colors duration-500 md:p-8 flex flex-col h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">

<div className="absolute w-16 h-16 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center z-10 shadow-2xl">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>

<div className="absolute w-32 h-32 animate-[spin_10s_linear_infinite]">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
<svg className="text-purple-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
</div>

<div className="absolute bottom-2 right-0 w-8 h-8 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
<svg className="text-pink-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>

<div className="absolute bottom-2 left-0 w-8 h-8 bg-zinc-800 rounded-lg border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
<svg className="text-sky-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<circle cx="50%" cy="50%" fill="none" r="64" stroke="white" stroke-dasharray="4 4" strokeWidth="1"></circle>
</svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
          Multi-Modality
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          Our system understands unstructured and multimodal data—resumes, recordings, job descriptions, and logs—providing a comprehensive view of every candidate.
        </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-500 p-6 md:p-8 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex flex-col items-center justify-center p-6">
<div className="w-full max-w-[240px] bg-zinc-900 border border-white/10 rounded-lg p-4 shadow-xl relative">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-1/3 bg-zinc-800 rounded"></div>
<div className="text-[10px] text-zinc-400 font-mono leading-relaxed" style={{}}>
                Hello <span className="text-pink-400 bg-pink-500/10 px-1 rounded animate-pulse" style={{}}>{{driver_name}}</span>, based on your <span className="text-pink-400 bg-pink-500/10 px-1 rounded" style={{}}>Class A</span> license, we have a route in <span className="text-pink-400 bg-pink-500/10 px-1 rounded" style={{}}>Texas</span>...
              </div>
</div>

<div className="absolute bottom-4 right-4 w-2 h-4 bg-pink-500/50 animate-pulse"></div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-pink-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          Hyper-Personalization
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          Empower your team to create tailored experiences for every driver interaction, from personalized outreach to customized onboarding paths.
        </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-500 p-6 md:p-8 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-end justify-center p-6 gap-2">

<div className="w-8 bg-zinc-800 rounded-t-sm h-12 group-hover:h-20 transition-all duration-700 ease-out relative"></div>
<div className="w-8 bg-zinc-800 rounded-t-sm h-20 group-hover:h-32 transition-all duration-700 ease-out delay-100 relative"></div>
<div className="w-8 bg-emerald-600 rounded-t-sm h-32 group-hover:h-40 transition-all duration-700 ease-out delay-200 relative shadow-[0_0_20px_rgba(5,150,105,0.4)]"></div>
<div className="w-8 bg-zinc-800 rounded-t-sm h-24 group-hover:h-28 transition-all duration-700 ease-out delay-300 relative"></div>
<div className="w-8 bg-zinc-800 rounded-t-sm h-16 group-hover:h-20 transition-all duration-700 ease-out delay-400 relative"></div>

<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-zinc-500" style={{}}>Holistic Score</span>
<span className="text-2xl font-mono text-white" style={{}}>98.2<span className="text-emerald-400 text-sm" style={{}}>%</span></span>
</div>
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
          Unified &amp; Actionable Data
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          Achieve a holistic view of every driver by integrating diverse data sources. AI delivers personalized insights and detailed profiles to enhance sourcing.
        </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-500 p-6 md:p-8 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="relative w-full h-48 mb-8 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex flex-col justify-center p-6 space-y-3">

<div className="flex justify-end transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="bg-blue-600 text-white text-[10px] px-3 py-2 rounded-2xl rounded-tr-none shadow-lg max-w-[80%]" style={{}}>
              Find drivers with Hazmat endorsements in Ohio.
            </div>
</div>
<div className="flex justify-start transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 ease-out">
<div className="bg-zinc-800 text-zinc-300 text-[10px] px-3 py-2 rounded-2xl rounded-tl-none border border-white/10 shadow-lg max-w-[80%] flex items-center gap-2" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              I found 42 candidates matching your criteria.
            </div>
</div>
<div className="flex justify-start transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-700 ease-out">
<div className="bg-zinc-800 text-zinc-300 text-[10px] px-3 py-2 rounded-2xl rounded-tl-none border border-white/10 shadow-lg max-w-[80%]" style={{}}>
              Would you like to start an email campaign?
            </div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2" style={{}}>
<svg className="text-amber-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
          Conversational Experience
        </h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
          Interact intuitively with your data. Facilitate natural, insightful conversations with drivers based on a deep understanding of their profiles and needs.
        </p>
</div>
</div>
</div>
</section>
<div className="z-20 flex flex-col w-full border-white/5 border-t relative">
<section className="md:px-12 lg:py-32 overflow-hidden z-10 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32 gap-16 items-center">

<div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none flex items-center justify-center">

<div className="relative w-64 h-64 sm:w-80 sm:h-80">

<div className="absolute inset-0 z-0 translate-y-24 transition-transform duration-700 hover:translate-y-28 group cursor-default">
<div className="w-full h-full border border-white/10 bg-white/[0.02] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-900/10"></div>

<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-300">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider" style={{}}>01. Sources</span>
<div className="w-8 h-4 bg-zinc-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-sky-500 rounded-full"></div>
</div>
</div>
<div className="w-12 h-px bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-10 translate-y-12 transition-transform duration-700 hover:translate-y-14 group cursor-default">
<div className="w-full h-full border border-white/10 bg-white/[0.04] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-900/10"></div>

<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-200">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-zinc-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white/20 rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider" style={{}}>02. Ingest</span>
</div>
<div className="w-12 h-px bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-20 translate-y-0 transition-transform duration-700 hover:-translate-y-2 group cursor-default">
<div className="w-full h-full border border-white/10 bg-white/[0.06] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-900/10"></div>

<div className="absolute top-1/2 -right-12 sm:-right-24 -translate-y-1/2 translate-x-4 flex items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500 delay-100">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider" style={{}}>03. Normalize</span>
<div className="w-8 h-4 bg-sky-500 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full"></div>
</div>
</div>
<div className="w-12 h-px bg-white/10 origin-left -rotate-[25deg]"></div>
</div>
</div>

<div className="absolute inset-0 z-30 -translate-y-12 transition-transform duration-700 hover:-translate-y-16 group cursor-default">
<div className="w-full h-full border border-white/10 bg-white/[0.08] backdrop-blur-[2px] rotate-45 scale-y-50 shadow-2xl transition-colors group-hover:border-sky-500/50 hover:bg-sky-500/10"></div>

<div className="absolute top-1/2 -left-12 sm:-left-24 -translate-y-1/2 -translate-x-4 flex flex-row-reverse items-center gap-3 opacity-0 lg:opacity-100 transition-opacity duration-500">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-[#080808] flex items-center gap-2 shadow-xl">
<div className="w-8 h-4 bg-sky-500 rounded-full relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-black rounded-full"></div>
</div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider" style={{}}>04. Store</span>
</div>
<div className="w-12 h-px bg-white/10 origin-right rotate-[25deg]"></div>
</div>
</div>

<div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-px border-l border-dashed border-white/20 -translate-x-1/2 z-[-1]"></div>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-normal text-white tracking-tight font-serif-custom mb-6 md:text-5xl" style={{}}>Data Architecture <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-indigo-500" style={{}}>for Business Intelligence</span></h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-lg mb-12" style={{}}>
                Capture telemetry across any infrastructure interaction—from server logs to API webhooks—and normalize it into a single structured stream linked to your data warehouse.
            </p>

<div className="relative space-y-12 pl-2">

<div className="bg-gradient-to-b from-sky-500 via-white/10 to-transparent opacity-30 w-px absolute top-4 bottom-4 left-[27px]"></div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-300 text-zinc-500">
<svg className="lucide lucide-plug-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6"></path><path d="m21 15-2-2"></path><path d="m5 5 2 2"></path><path d="m2 22 3-3"></path><path d="M8.1 13.5a2.43 2.43 0 1 0 3.4-3.4"></path><path d="M11 9.4a2.4 2.4 0 0 0-3.4 3.4"></path><path d="M12 22v-3a4 4 0 0 0-1.17-2.83l-3-3a4 4 0 0 1 5.66-5.66l3 3A4 4 0 0 0 22 12h-3"></path></svg>
</div>
</div>
<div className="pt-1">
<h3 className="group-hover:text-sky-400 transition-colors text-xl font-normal text-white mb-2" style={{}}>Presentation Layer</h3>
<p className="leading-relaxed font-light text-zinc-500" style={{}}>
                            Integrate seamlessly with cloud providers, SaaS platforms, and custom event emitters without complex schema registries.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-300 text-zinc-500">
<svg className="lucide lucide-workflow" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
</div>
<div className="pt-1">
<h3 className="group-hover:text-sky-400 transition-colors text-xl font-normal text-white mb-2" style={{}}>Business Logic</h3>
<p className="text-zinc-500 font-light leading-relaxed" style={{}}>
                            Automatically map and transform raw telemetry into a unified schema, ensuring data consistency across your stack.
                        </p>
</div>
</div>

<div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-300 text-zinc-500">
<svg className="lucide lucide-database" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
<div className="pt-1">
<h3 className="group-hover:text-sky-400 transition-colors text-xl font-normal text-white mb-2" style={{}}>Application Layer</h3>
<p className="text-zinc-500 font-light leading-relaxed" style={{}}>
                            Create robust pipelines directly to your data warehouse, enabling real-time analytics and decision making.
                        </p>
</div>
</div><div className="relative flex gap-8 group cursor-default">
<div className="relative z-10 shrink-0">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-300 text-zinc-500">
<svg className="lucide lucide-database" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
<div className="pt-1">
<h3 className="group-hover:text-sky-400 transition-colors text-xl font-normal text-white mb-2" style={{}}>Data Layer</h3>
<p className="text-zinc-500 font-light leading-relaxed" style={{}}>
                            Create robust pipelines directly to your data warehouse, enabling real-time analytics and decision making.
                        </p>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 md:px-12 lg:pt-20 lg:pb-20 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-green-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<svg className="w-3 h-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
<span className="uppercase tracking-widest text-[10px]" style={{}}>Strategic Implementation</span>
</div>
<h2 className="md:text-6xl text-3xl font-normal text-white tracking-tight font-serif-custom mb-6 leading-[0.95]" style={{}}>
            Two Levels of
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-white" style={{}}>Thinking</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-blue-400/80">With AI at this level, small and large regional businesses can compete on equal footing with larger corporations. AI agents become your Equalizer -analyzing processes, guiding strategy, and executing tasks in ways previously unimaginable.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-x-8 gap-y-8">

<div className="group relative rounded-3xl bg-[#0c0c0e] border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">

<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="md:p-12 flex flex-col z-10 h-full pt-8 pr-8 pb-8 pl-8 relative">

<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<svg className="lucide lucide-network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect className="" height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
</div>

<h3 className="text-3xl font-normal text-white tracking-tight mb-6 font-serif-custom" style={{}}>Part 1: The Hybrid AI
        Workforce</h3>
<div className="space-y-4 mb-8">
<p className="text-lg font-medium text-white leading-relaxed" style={{}}>
          So what is the Hybrid AI Workforce?
        </p>
<p className="leading-relaxed text-base font-light text-blue-400/80">Hybrid AI Workforce: This combines human
          intelligence, insight, and intuition with artificial intelligence and data science. AI works with humans to
          enhance their abilities so they can operate at their highest skill level in truck driver recruitment.
        </p>
<p className="leading-relaxed text-base font-light text-blue-400/80">It's a system that capitalizes on the strengths
          of both artificial intelligence data science and human judgment, ensuring that decisions, analyses, or actions
          benefit from the scale and efficiency of machines and the nuance and context understanding of humans for
          decision making.</p>
<p className="leading-relaxed text-base font-light text-blue-400/70">We do not use AI to replace recruiters but to
          enhance their capabilities.</p>
</div>

<div className="w-full bg-[#131315] border border-white/5 rounded-xl p-8 relative overflow-hidden shadow-2xl flex items-center justify-center min-h-[320px] mb-8 group">

<div className="bg-gradient-to-b from-blue-900/10 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="relative w-64 h-56 mt-4">

<svg className="drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] w-[256px] h-[224px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '256px', height: '224px'}} viewbox="0 0 200 180">
<defs>
<lineargradient id="triGradient" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#172554"></stop>
<stop offset="100%" stop-color="#020617"></stop>
</lineargradient>
</defs>

<path className="opacity-90" d="M 10 10 L 190 10 L 100 170 Z" fill="url(#triGradient)" stroke="#1d4ed8" strokeWidth="1.5"></path>

<path d="M 100 50 L 100 130" opacity="0.4" stroke="#3b82f6" stroke-dasharray="3 3" strokeWidth="0.5">
</path>
<path d="M 60 70 L 140 70" opacity="0.4" stroke="#3b82f6" stroke-dasharray="3 3" strokeWidth="0.5"></path>
</svg>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
<div className="w-12 h-12 bg-[#0b122b] border border-blue-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-lightbulb" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
</path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
</div>
<div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] font-semibold text-blue-100 uppercase tracking-wider whitespace-nowrap" style={{}}>Human Insight</span>
</div>
</div>

<div className="absolute top-1/2 -left-4 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
<div className="w-10 h-10 bg-[#0b122b] border border-blue-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500 delay-100">
<svg className="lucide lucide-brain-circuit" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 1 19.5 5.5"></path>
<path d="M12 18a4 4 0 0 0 4-4 4.5 4.5 0 0 0-3-4"></path>
<path d="M19.5 5.5a4 4 0 0 0 0 8 4 4 0 0 0-2.5 7.272"></path>
</svg>
</div>
<div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 -ml-8">
<span className="text-[9px] font-semibold text-blue-200 uppercase tracking-wider whitespace-nowrap" style={{}}>AI</span>
</div>
</div>

<div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
<div className="w-10 h-10 bg-[#0b122b] border border-blue-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500 delay-200">
<svg className="lucide lucide-database" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<ellipse className="" cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 -mr-8">
<span className="text-[9px] font-semibold text-blue-200 uppercase tracking-wider whitespace-nowrap" style={{}}>Data Science</span>
</div>
</div>
</div>
</div>

<div className="mt-auto space-y-6">
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-[#0c0c0e] border border-white/10 overflow-hidden hover:border-yellow-500/30 transition-all duration-500 h-full flex flex-col">

<div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="md:p-12 z-10 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative">

<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
<svg className="lucide lucide-bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>

<h3 className="text-3xl font-normal text-white tracking-tight mb-6 font-serif-custom" style={{}}>Part 2: Autonomous AI
        Workforce</h3>

<div className="mb-8 text-blue-400/80 font-light leading-relaxed text-base">
<p className="" style={{}}>Autonomous Workforce: This represents a convergence of data-driven decisions, specialized
          multi-agent systems, and branding &amp; messaging marketing to create a new online driver candidate
          experience. </p>
<p className="" style={{}}>Teams of AI agents work collaboratively in real-time, each specializing in a specific
          driver recruitment role to achieve a shared hiring goal. This solves entire ecosystems of truck driver
          recruitment challenges simultaneously, bringing speed, precision, and scalability. </p>
<p className="" style={{}}>With the Autonomous Workforce, you gain a powerhouse of efficiency, collaboration, and
          insight in your truck driver recruitment efforts. This allows you to scale your driver recruiting operations
          without increasing complexity.</p>
</div>

<div className="w-full bg-[#131315] border border-white/5 rounded-xl p-8 relative overflow-hidden shadow-2xl flex items-center justify-center min-h-[340px] mb-10 group">

<div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-transparent opacity-50"></div>

<div className="relative w-full max-w-[280px] aspect-[1.1/1]">

<svg className="w-full h-full drop-shadow-[0_0_25px_rgba(99,102,241,0.2)]" viewbox="0 0 300 260">
<defs>
<lineargradient id="triGradientAuth" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#312e81"></stop>
<stop offset="100%" stop-color="#020617"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path className="opacity-90" d="M 150 20 L 280 240 L 20 240 Z" fill="url(#triGradientAuth)" stroke="#4f46e5" strokeWidth="2"></path>

<line opacity="0.4" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="1" x1="150" x2="150" y1="80" y2="170"></line>
<line opacity="0.4" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="1" x1="90" x2="150" y1="190" y2="170"></line>
<line opacity="0.4" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="1" x1="210" x2="150" y1="190" y2="170"></line>

<circle className="animate-pulse" cx="150" cy="170" fill="#818cf8" r="4"></circle>
</svg>

<div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 w-full">
<div className="w-12 h-12 bg-[#0b122b] border border-yellow-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.8)]">
<svg className="lucide lucide-users-round" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</div>
<div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-yellow-500/30 shadow-lg text-center max-w-[140px]">
<span className="text-[10px] font-semibold text-yellow-200 uppercase tracking-wider leading-tight block" style={{}}>Specialized Multi-Agent Systems</span>
</div>
</div>

<div className="absolute bottom-0 -left-4 flex flex-col items-center gap-3 z-10 w-[120px]">
<div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-fuchsia-500/30 shadow-lg text-center w-full mb-2">
<span className="text-[10px] font-semibold text-fuchsia-200 uppercase tracking-wider leading-tight block" style={{}}>Branding &amp; Messaging</span>
</div>
<div className="w-12 h-12 bg-[#0b122b] border border-fuchsia-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(232,121,249,0.5)] group-hover:scale-110 transition-transform duration-500 delay-100 group-hover:shadow-[0_0_30px_rgba(232,121,249,0.8)]">
<svg className="lucide lucide-megaphone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
</svg>
</div>
</div>

<div className="absolute bottom-0 -right-4 flex flex-col items-center gap-3 z-10 w-[120px]">
<div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 shadow-lg text-center w-full mb-2">
<span className="text-[10px] font-semibold text-cyan-200 uppercase tracking-wider leading-tight block" style={{}}>Data Driven Decisions</span>
</div>
<div className="w-12 h-12 bg-[#0b122b] border border-cyan-400/50 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-500 delay-200 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
<svg className="lucide lucide-bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section><section className="md:px-12 lg:pt-20 lg:pb-20 bg-black/50 w-full max-w-[1400px] z-10 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="Recruiting-Cost-Calculator">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none z-0">
</div>


<div className="relative z-10 w-full mb-24 overflow-hidden">

<div className="lg:pl-2 lg:pr-2 z-10 max-w-7xl mt-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mt-10 mr-auto mb-16 ml-auto">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 mb-6 border-purple-500/20 bg-purple-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="uppercase text-xs font-medium tracking-wide text-purple-300">
                    Interactive Tool
                  </span>
</div>
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">
      How much is manual recruiting
      <span className="lg:bg-clip-text lg:text-transparent mix-blend-luminosity shadow bg-purple-400">
                    costing you?
                  </span>
</h2>
<p className="leading-relaxed text-lg font-light text-zinc-400">
      Use the sliders to estimate the time and money bleeding from
      your current process. We don't store these numbers unless you
      ask for the report.
    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-7 space-y-8">

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<label className="block text-sm font-medium text-zinc-300 mb-4 uppercase tracking-wider">
                      Select Your Role
                    </label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="relative">
<input checked="" className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" name="role" type="radio" value="recruiter"/>
<div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5 transition-all peer-hover:bg-zinc-800 flex items-center gap-3 peer-checked:bg-purple-600/10 peer-checked:border-purple-500/50">
<div className="w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center transition-colors peer-checked:border-purple-400 peer-checked:bg-purple-400">
</div>
<span className="text-sm text-zinc-300 peer-checked:text-white font-medium">
                            Recruiter / TA
                          </span>
</div>
</div>
<div className="relative">
<input className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" name="role" type="radio" value="hr_manager"/>
<div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5 peer-checked:bg-blue-600/10 peer-checked:border-blue-500/50 transition-all peer-hover:bg-zinc-800 flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-500 peer-checked:border-blue-400 peer-checked:bg-blue-400 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-300 peer-checked:text-white font-medium">
                            HR Manager
                          </span>
</div>
</div>
<div className="relative">
<input className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" name="role" type="radio" value="hiring_manager"/>
<div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5 peer-checked:bg-blue-600/10 peer-checked:border-blue-500/50 transition-all peer-hover:bg-zinc-800 flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-500 peer-checked:border-blue-400 peer-checked:bg-blue-400 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-300 peer-checked:text-white font-medium">
                            Department Head
                          </span>
</div>
</div>
<div className="relative">
<input className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" name="role" type="radio" value="ceo"/>
<div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5 peer-checked:bg-blue-600/10 peer-checked:border-blue-500/50 transition-all peer-hover:bg-zinc-800 flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-500 peer-checked:border-blue-400 peer-checked:bg-blue-400 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-300 peer-checked:text-white font-medium">
                            Owner / CEO
                          </span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-8">

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-zinc-300">
                          Hires per year
                        </label>
<span className="text-sm font-mono px-2 py-1 rounded text-purple-400 bg-purple-500/10" id="val-hires">
                          50
                        </span>
</div>
<input className="appearance-none cursor-pointer bg-zinc-800 w-full h-2 rounded-lg" id="input-hires" max="500" min="5" step="5" style={{accentColor: '#3b82f6'}} type="range" value="50"/>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-zinc-300">
                          Number of Recruiters
                        </label>
<span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded" id="val-recruiters">
                          3
                        </span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="input-recruiters" max="20" min="1" step="1" style={{accentColor: '#3b82f6'}} type="range" value="3"/>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-zinc-300">
                          Avg. Recruiter Salary
                        </label>
<span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded" id="val-salary">
                          $70,000
                        </span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="input-salary" max="150000" min="40000" step="5000" style={{accentColor: '#3b82f6'}} type="range" value="70000"/>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<label className="text-sm font-medium text-zinc-300">
                            % Time on Manual Tasks
                          </label>
<div className="group relative">
<svg className="text-zinc-500 cursor-help" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path className="" d="M12 17h.01"></path>
</svg>
<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black border border-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                              Screening, scheduling, data entry, etc.
                            </span>
</div>
</div>
<span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded" id="val-manual">
                          40%
                        </span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="input-manual" max="80" min="20" step="5" style={{accentColor: '#3b82f6'}} type="range" value="40"/>
</div>

<div className="border-white/5 border-t pt-4">
<button className="flex hover:text-white transition-colors text-xs font-medium text-zinc-500 gap-x-2 gap-y-2 items-center" id="toggle-advanced">
<svg className="transition-transform duration-300" fill="none" height="14" id="advanced-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(180deg)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
                        Advanced Metrics (Optional)
                      </button>
</div>
<div className="space-y-8 pt-6 transition-all duration-300" id="advanced-metrics">

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-zinc-300">
                            Avg. Cost per Hire
                          </label>
<span className="text-sm font-mono text-zinc-400 bg-zinc-800 px-2 py-1 rounded" id="val-cph">
                            $4,000
                          </span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="input-cph" max="15000" min="2000" step="500" style={{accentColor: '#3b82f6'}} type="range" value="4000"/>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-zinc-300">
                            Vacancy Cost (per day)
                          </label>
<span className="text-sm font-mono text-zinc-400 bg-zinc-800 px-2 py-1 rounded" id="val-vacancy">
                            $300
                          </span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="input-vacancy" max="2000" min="100" step="50" style={{accentColor: '#3b82f6'}} type="range" value="300"/>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r text-white font-semibold text-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600" id="calculate-btn">
                    Calculate My Loss
                    <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="lg:col-span-5 lg:sticky lg:top-32">
<div className="overflow-hidden bg-zinc-900 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 blur-[80px] rounded-full pointer-events-none bg-purple-500/10">
</div>
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-8">
          Estimated Annual Impact
        </h3>
<div className="z-10 relative space-y-8">

<div className="">
<div className="text-xs text-zinc-500 mb-1">
              Total Annual Loss
            </div>
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tight" id="result-annual">$94,000</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div className="p-4 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
<div className="text-[11px] uppercase text-blue-400 tracking-wide mb-1">
                Wasted Hours
              </div>
<div className="text-2xl font-semibold text-white" id="result-hours">832 hrs</div>
<div className="text-[10px] text-zinc-500 mt-1">
                per recruiter / yr
              </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
<div className="text-[11px] uppercase tracking-wide mb-1 text-purple-400">
                Wasted Cost
              </div>
<div className="text-2xl font-semibold text-white" id="result-cost-recruiter">$28,000</div>
<div className="text-[10px] text-zinc-500 mt-1">
                per recruiter / yr
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div className="">
<div className="text-xs text-zinc-500 mb-1">
                Monthly Loss
              </div>
<div className="text-lg font-medium text-zinc-300" id="result-monthly">$7,833</div>
</div>
<div className="">
<div className="text-xs text-zinc-500 mb-1">
                Daily Loss
              </div>
<div className="text-lg font-medium text-zinc-300" id="result-daily">$258</div>
</div>
</div>

<div className="bg-white/5 rounded-xl p-5 border border-white/5">
<div className="flex items-start gap-3">
<div className="mt-1 min-w-[20px]">
<svg className="w-[20px] h-[20px] text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 16v-4"></path>
<path className="" d="M12 8h.01"></path>
</svg>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light" id="result-text">Your current manual process
                costs approximately $94,000 per year. Even at this scale, automation can free up your recruiters to
                focus on candidate relationships and quality-of-hire improvements.</p>
</div>
</div>

<div className="pt-6 border-t border-white/5" id="webhook-form-container">
<h4 className="text-sm font-medium text-white mb-4">
              Get your full report
            </h4>
<form className="space-y-3" id="lead-form">
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="lead-name" placeholder="Full Name" required="" type="text"/>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="lead-email" placeholder="Work Email" required="" type="email"/>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors mt-2" type="submit">
                            Email me my full report
                          </button>
<p className="text-xs text-center min-h-[16px] font-medium" id="form-feedback"></p>
</form>
</div>
</div>
</div>
</div>

</div>

</div>
</div>

</section><section className="z-10 md:px-12 lg:pt-20 lg:pb-20 bg-black/50 w-full max-w-[1400px] border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none z-0">
</div>

<div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide mb-6 shadow-[0_0_10px_rgba(59,130,246,0.15)]" style={{}}>
<svg className="lucide lucide-bot" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
      Autonomous Architecture
    </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight font-serif-custom leading-[1.1] mb-6" style={{}}>
      Unlock Efficiency with a
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-400" style={{}}>Multi-Agent System</span>
</h2>
<p className="md:text-xl text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed" style={{}}>
      Leveraging this innovative architecture, our platform seamlessly integrates functionalities for
      <span className="text-white font-normal" style={{}}>Recruitment, Sourcing &amp; Candidate Management</span>.
    </p>
</div>

<div className="relative z-10 w-full mb-24 overflow-hidden">

<div className="overflow-x-auto no-scrollbar pb-12 -mx-6 px-6 md:mx-0 md:pl-0 md:pr-0 md:pb-4">
<div className="w-full min-w-[900px] max-w-6xl mx-auto flex flex-col items-center relative z-10">

<div className="relative z-30 mb-10 group cursor-default">
<div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="flex flex-col bg-[#0B1221] w-72 border border-blue-500/30 ring-1 ring-blue-400/20 rounded-2xl p-4 relative shadow-[0_0_30px_rgba(59,130,246,0.15)] items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
<h3 className="text-sm font-semibold text-white tracking-tight" style={{}}>Recruitment Dept Head</h3>
<p className="text-[11px] text-blue-300/80 font-mono mt-1" style={{}}>Orchestrator Agent</p>

</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-blue-500/50 to-sky-500/30">
</div>
</div>

<div className="relative z-20 flex justify-between w-full max-w-5xl mb-12">

<div className="absolute -top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-sky-500/0 via-sky-500/30 to-sky-500/0 border-t border-sky-500/20">

<div className="absolute top-0 left-0 w-px h-10 bg-gradient-to-b from-sky-500/20 to-sky-500/10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-sky-500/20 to-sky-500/10">
</div>
<div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-sky-500/20 to-sky-500/10"></div>
</div>

<div className="flex flex-col items-center w-1/3 px-2">
<div className="relative w-full max-w-[280px] p-4 bg-[#081818] border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-semibold text-white" style={{}}>Sourcing Lead</h4>
<p className="text-[10px] text-cyan-500/70" style={{}}>Candidate Discovery</p>
</div>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-cyan-900/30"></div>
</div>

<div className="flex justify-center gap-3 mt-8 w-full relative">

<div className="absolute -top-4 w-[140px] h-4 border-t border-l border-r border-cyan-900/30 rounded-t-lg">
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>Job Boards</span>
</div>

<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>Social Media</span>
</div>

<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center w-1/3 px-2">
<div className="relative w-full max-w-[280px] p-4 bg-[#081818] border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12.58 6.57l1.66-2.58"></path>
<path d="M18.81 12.82l2.96-1.04"></path>
<path d="M19.01 7.11l2.87 1.25"></path>
<path d="M13.68 18.23l2.25 2.15"></path>
<path d="M16 2v4"></path>
<path d="M8.7 20.84l1.45-2.91"></path>
<path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"></path>
<path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white" style={{}}>Screening Lead</h4>
<p className="text-[10px] text-cyan-500/70" style={{}}>Validation &amp; Compliance</p>
</div>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-cyan-900/30"></div>
</div>

<div className="flex justify-center gap-3 mt-8 w-full relative">

<div className="absolute -top-4 w-[140px] h-4 border-t border-l border-r border-cyan-900/30 rounded-t-lg">
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_3s_infinite]"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>CDL Verifier</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>MVR Check</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center w-1/3 px-2">
<div className="relative w-full max-w-[280px] p-4 bg-[#081818] border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white" style={{}}>Outreach Lead</h4>
<p className="text-[10px] text-cyan-500/70" style={{}}>Engagement &amp; Booking</p>
</div>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-cyan-900/30"></div>
</div>

<div className="flex justify-center gap-3 mt-8 w-full relative">

<div className="absolute -top-4 w-[140px] h-4 border-t border-l border-r border-cyan-900/30 rounded-t-lg">
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>Email Agent</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="px-3 py-2 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center gap-2 w-32 shadow-lg hover:border-emerald-500/40 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-zinc-300" style={{}}>Scheduling</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-lime-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-lime-500/50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

<div className="relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 overflow-hidden">
<h3 className="text-2xl font-normal text-white mb-8 flex items-center gap-3" style={{}}>
        Why Traditional Recruiting
        <span className="text-red-400 font-serif-custom italic" style={{}}>Falls Short</span>
</h3>
<div className="space-y-6">

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-500/20 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Endless Back-and-Forth</h4>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>Wasted cycles communicating with unqualified
              candidates who don't meet basic CDL requirements.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-500/20 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Valuable Time Lost</h4>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>Recruiters spending hours chasing leads that
              aren’t ready, interested, or already employed elsewhere.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-500/20 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Manual Data Drudgery</h4>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>Manual data entry and constant follow-ups that
              drain your team's productivity and morale.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-500/20 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Revenue Impact</h4>
<p className="text-sm text-zinc-500 leading-relaxed" style={{}}>Delays in hiring directly translate to lost loads,
              idle trucks, and missed quarterly revenue targets.</p>
</div>
</div>
</div>
</div>

<div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-900/10 to-emerald-900/10 border border-blue-500/20 overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none"></div>
<div className="">
<h3 className="text-2xl font-normal text-white mb-6" style={{}}>
          Save Time. Boost Revenue.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 font-medium mt-1" style={{}}>Automate Like Never Before.</span>
</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-8" style={{}}>
          Our AI-Powered Multi-Agent Team doesn't just assist—it transforms. By deploying specialized agents for
          sourcing, screening, and outreach, we create a continuous pipeline of qualified candidates.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 flex flex-col gap-2">
<span className="text-2xl font-bold text-emerald-400" style={{}}>24/7</span>
<span className="text-xs text-zinc-400 uppercase tracking-wide" style={{}}>Continuous Operation</span>
</div>
<div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 flex flex-col gap-2">
<span className="text-2xl font-bold text-emerald-400" style={{}}>100%</span>
<span className="text-xs text-zinc-400 uppercase tracking-wide" style={{}}>Response Rate</span>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-zinc-900/80 border border-white/10 p-5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<div className="relative">
<span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></span>
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold" style={{}}>AI</div>
</div>
<div className="">
<p className="text-sm text-white font-medium" style={{}}>Auto-Agent System</p>
<p className="text-[10px] text-zinc-500" style={{}}>Just now</p>
</div>
</div>
<p className="text-xs text-zinc-300 leading-relaxed pl-11" style={{}}>
          "I've screened 150 candidates from the last hour, verified 12 valid Class A CDLs with clean MVRs, and
          scheduled 3 interviews for tomorrow morning. Your calendar is updated."
        </p>
</div>
</div>
</div>
</section><section className="md:px-12 lg:pt-20 lg:pb-20 bg-black/50 w-full max-w-[1400px] z-10 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">



<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

<div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<svg className="lucide lucide-trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
<span className="uppercase tracking-widest text-[10px]" style={{}}>Business Impact</span>
</div>
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight font-serif-custom leading-[1.1] mb-6" style={{}}>
            Here’s how it delivers
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 italic" style={{}}>real results</span>
</h2>
<p className="md:text-xl text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed" style={{}}>
            Hiring delays are expensive. Every day a truck sits empty is lost revenue. Our AI-powered system accelerates your recruiting process to <span className="text-white font-medium" style={{}}>Revenue Growth Built In</span>.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 hover:border-emerald-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 17h4V5H10z"></path><path d="M20 17h4v-3.3a4 4 0 0 0-1.17-2.83L19 7h-5V5h-2v12h4V7h2.5l2.5 2.5V17z"></path><circle cx="8" cy="17" r="2"></circle><circle cx="18" cy="17" r="2"></circle><path d="M4 17h2V5H4z"></path></svg>
</div>
<div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-wider font-medium" style={{}}>Utilization</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4" style={{}}>Faster Time-to-Hire</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6" style={{}}>
                Reduce empty truck days by quickly identifying and engaged qualified drivers. More trucks on the road means immediate revenue realization.
            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light" style={{}}>
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Eliminate delays in hiring and lost loads
                </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light" style={{}}>
<svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Minimize idle truck costs significantly
                </li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-blue-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-wider font-medium" style={{}}>Efficiency</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4" style={{}}>Lower Cost-per-Hire</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6" style={{}}>
                Cut wasted recruiter hours by automating screening and scheduling. Allow your human team to focus only on closing top candidates.
            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light" style={{}}>
<svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Stretch recruiting budget further
                </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light" style={{}}>
<svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Scale volume without adding headcount
                </li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 hover:border-indigo-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-xl bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-wider font-medium" style={{}}>Retention</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4" style={{}}>Higher Engagement</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6" style={{}}>
                Fast, consistent communication increases candidate trust. Personalized messaging via SMS, email, and voice AI ensures drivers feel valued.
            </p>
<div className="relative w-full h-32 mt-auto rounded-lg bg-black/40 border border-white/5 overflow-hidden p-4 flex flex-col gap-2">
<div className="flex items-center gap-3 w-3/4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400" style={{}}>AI</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg rounded-tl-none p-2 text-[10px] text-zinc-300" style={{}}>
                        Hi John, your CDL matches a new route in TX. Interested?
                    </div>
</div>
<div className="flex items-center gap-3 w-3/4 self-end flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-300" style={{}}>JD</div>
<div className="bg-zinc-800 border border-white/10 rounded-lg rounded-tr-none p-2 text-[10px] text-zinc-300" style={{}}>
                        Yes, definitely. Can we talk now?
                    </div>
</div>
<div className="flex items-center gap-3 w-3/4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400" style={{}}>AI</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg rounded-tl-none p-2 text-[10px] text-zinc-300" style={{}}>
                        Calling you now to schedule...
                    </div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-wider font-medium" style={{}}>Conversion</div>
</div>
<h3 className="text-2xl font-medium text-white mb-4" style={{}}>More Completed Apps</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6" style={{}}>
                24/7 automated outreach keeps candidates on track. Reduce drop-off rates with easy self-scheduling and seamless application flows.
            </p>
<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="p-3 bg-black/40 rounded-lg border border-white/5 flex flex-col items-center justify-center text-center">
<span className="text-2xl font-bold text-white mb-1" style={{}}>24/7</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide" style={{}}>Availability</span>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-white/5 flex flex-col items-center justify-center text-center">
<span className="text-2xl font-bold text-emerald-400 mb-1" style={{}}>0%</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide" style={{}}>Phone Tag</span>
</div>
</div>
</div>

<div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-8 md:p-12 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black opacity-50"></div>
<div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono text-emerald-400 uppercase tracking-widest" style={{}}>Efficiency Breakthrough</span>
</div>
<h3 className="text-4xl md:text-5xl font-normal text-white tracking-tight font-serif-custom mb-6" style={{}}>
                        Massive Time Savings
                    </h3>
<p className="text-zinc-400 font-light text-lg leading-relaxed mb-8" style={{}}>
                        Instantly filter out unqualified candidates before a human ever gets involved. Real-time CRM updates eliminate manual data entry.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-zinc-300" style={{}}>90% reduction in manual lead qualification</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-zinc-300" style={{}}>Automated follow-ups keep leads warm</span>
</li>
</ul>
</div>

<div className="lg:w-1/2 w-full bg-black/50 rounded-2xl border border-white/5 p-6 relative">
<div className="flex items-center justify-between mb-6">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider" style={{}}>Processing Time Per Lead</span>
<div className="flex gap-4 text-[10px]">
<div className="flex items-center gap-1.5" style={{}}><span className="w-2 h-2 rounded-full bg-zinc-700"></span> Manual</div>
<div className="flex items-center gap-1.5" style={{}}><span className="w-2 h-2 rounded-full bg-emerald-500"></span> AI Agent</div>
</div>
</div>

<div className="h-[200px] w-full">
<canvas className="" height="200" id="timeSavingsChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '509.6px'}} width="509"></canvas>
</div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="bg-black/80 backdrop-blur-md border border-emerald-500/30 px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center gap-4 transform rotate-[-2deg]">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider" style={{}}>Total Savings</span>
<span className="text-3xl font-bold text-white" style={{}}>96<span className="text-emerald-400" style={{}}>%</span></span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="text-right">
<span className="block text-emerald-400 text-xs font-bold" style={{}}>+ More Hires</span>
<span className="block text-zinc-500 text-[10px]" style={{}}>Per Recruiter</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center relative z-10">
<p className="text-xl md:text-2xl font-light text-white max-w-3xl mx-auto leading-relaxed" style={{}}>
            "What used to take hours per lead now happens in <span className="text-emerald-400 font-normal" style={{}}>seconds</span> — freeing your recruiters to close more hires instead of chasing paperwork."
        </p>
</div>
</section><section className="z-10 bg-black/50 w-full max-w-[1400px] border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative md:px-12 lg:pt-20 lg:pb-20">

<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide mb-8 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="uppercase tracking-widest text-[10px]" style={{}}>Next-Gen Automation</span>
</div>
<h2 className="md:text-6xl leading-[1.05] text-4xl font-normal text-white tracking-tight font-serif-custom mb-6" style={{}}>
                Revolutionizing Truck Driver
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 italic" style={{}}>Recruitment with AI</span>
</h2>
<p className="md:text-xl text-lg font-light text-zinc-400 mb-10 leading-relaxed max-w-lg" style={{}}>
                Empower your team with AI agents for autonomous driver candidate outreach via email, job boards, &amp; other channels.
            </p>
<div className="space-y-6">

<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-300 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Live Candidate Database</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed" style={{}}>Leverage an extensive and continuously updated driver candidate database.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-all duration-300 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>AI Smart Shortlisting</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed" style={{}}>Efficient driver screening based on CDL requirements and safety records.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/30 transition-all duration-300 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.25V14"></path><path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Autonomous Scheduling</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed" style={{}}>AI-driven interview scheduling that syncs with recruiter calendars instantly.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 group-hover:text-pink-400 group-hover:border-pink-500/30 transition-all duration-300 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Custom Agentic Workflows</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed" style={{}}>Create custom workflows to manage the entire driver candidate lifecycle within our AI-native CRM.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="relative w-full aspect-square md:aspect-[4/3] bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl group">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping"></div>
<div className="w-24 h-24 bg-zinc-900 border border-indigo-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)] relative z-10 backdrop-blur-md">
<div className="flex flex-col items-center gap-1">
<svg className="text-indigo-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<span className="text-[10px] font-mono text-indigo-300 font-medium" style={{}}>AI AGENT</span>
</div>
</div>

<div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
</div>
</div>
</div>
</div>

<div className="absolute top-12 left-12 z-20">
<div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl shadow-lg transform transition-transform hover:scale-105">
<div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium" style={{}}>Driver DB</span>
<span className="text-[9px] text-zinc-500 font-mono" style={{}}>Syncing...</span>
</div>
</div>
</div>

<div className="absolute top-12 right-12 z-20">
<div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl shadow-lg transform transition-transform hover:scale-105">
<div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium" style={{}}>Outreach</span>
<span className="text-[9px] text-zinc-500 font-mono" style={{}}>Active</span>
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
<div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl shadow-lg min-w-[200px] justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium" style={{}}>CRM Update</span>
<span className="text-[9px] text-emerald-400 font-mono" style={{}}>Candidate Hired</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveaspectratio="none" viewbox="0 0 400 400">
<defs>
<lineargradient id="gradientFlow" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(99, 102, 241, 0)"></stop>
<stop offset="50%" stop-color="rgba(167, 139, 250, 1)"></stop>
<stop offset="100%" stop-color="rgba(99, 102, 241, 0)"></stop>
</lineargradient>
</defs>

<path d="M 80 80 Q 200 80 200 200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M 80 80 Q 200 80 200 200" fill="none" stroke="url(#gradientFlow)" stroke-dasharray="10 200" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="3s" from="210" repeatcount="indefinite" to="-210"></animate>
</path>

<path d="M 320 80 Q 200 80 200 200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M 320 80 Q 200 80 200 200" fill="none" stroke="url(#gradientFlow)" stroke-dasharray="10 200" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" begin="1s" dur="3s" from="210" repeatcount="indefinite" to="-210"></animate>
</path>

<path d="M 200 200 L 200 320" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
<path d="M 200 200 L 200 320" fill="none" stroke="url(#gradientFlow)" stroke-dasharray="20 200" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" begin="1.5s" dur="2s" from="220" repeatcount="indefinite" to="-220"></animate>
</path>
</svg>

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute top-[30%] left-[20%] w-32 bg-zinc-800/40 border border-white/5 p-2 rounded-lg opacity-40 animate-[float-subtle_5s_infinite]">
<div className="h-2 w-16 bg-zinc-700 rounded mb-1"></div>
<div className="h-1.5 w-24 bg-zinc-700/50 rounded"></div>
</div>
<div className="absolute bottom-[30%] right-[20%] w-32 bg-zinc-800/40 border border-white/5 p-2 rounded-lg opacity-40 animate-[float-subtle_7s_infinite_reverse]">
<div className="h-2 w-16 bg-zinc-700 rounded mb-1"></div>
<div className="h-1.5 w-24 bg-zinc-700/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 md:px-12 lg:pt-20 lg:pb-20 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="text-center max-w-4xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide mb-6 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
<svg className="lucide lucide-network animate-pulse" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
<span className="uppercase tracking-widest text-[10px]" style={{}}>Exponential Growth Model</span>
</div>
<h2 className="md:text-6xl text-3xl font-normal text-white tracking-tight font-serif-custom mb-6 leading-tight" style={{}}>
            With AI Agents we create the
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" style={{}}>Network Effect</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-blue-400 max-w-2xl mx-auto" style={{}}>
            The network effect is a business principle that illustrates the idea that when more people use a product or
            service, its value increases. With your data, every hire or sale you make is used to continuously improve
            your sales and hiring intelligence.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-blue-900/20 rounded-full blur-3xl">
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 600 600">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(255,255,255,0.05)"></stop>
<stop offset="50%" stop-color="rgba(255,255,255,0.2)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0.05)"></stop>
</lineargradient>
</defs>

<path d="M 150 150 Q 300 300 450 450" fill="none" stroke="url(#lineGrad)" stroke-dasharray="8 8" strokeWidth="1"></path>
<path d="M 450 150 Q 300 300 150 450" fill="none" stroke="url(#lineGrad)" stroke-dasharray="8 8" strokeWidth="1"></path>

<path d="M 150 150 Q 300 50 450 150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 450 150 Q 550 300 450 450" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 450 450 Q 300 550 150 450" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 150 450 Q 50 300 150 150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>

<div className="absolute w-40 h-40 bg-[#0c0c0e] rounded-full border border-blue-500/30 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
<div className="absolute inset-2 rounded-full border border-blue-500/10 animate-[spin_10s_linear_infinite]">
</div>
<div className="w-28 h-28 bg-blue-600/10 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-users text-blue-400" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
</div>

<div className="absolute top-[10%] left-[10%] w-24 h-24 bg-[#0c0c0e] rounded-full border border-yellow-500/30 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 group">
<div className="absolute -top-8 text-center w-full text-xs font-medium text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{}}>
                    Evolution</div>
<div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.2)]">
<svg className="lucide lucide-rocket text-yellow-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
</path>
<path d="m12 15-3-3a22 22 0 0 1 2-5.2 9 9 0 0 1 3.4 2.99"></path>
<path d="M15 12h-3.437"></path>
<path d="M12 15v-3.437"></path>
<path d="M15 12a15.91 15.91 0 0 1 8.71 6.71c.32.74-.29 1.54-1.07 1.28A15.86 15.86 0 0 0 15 12Z">
</path>
</svg>
</div>
</div>

<div className="absolute top-[10%] right-[10%] w-24 h-24 bg-[#0c0c0e] rounded-full border border-emerald-500/30 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 group">
<div className="absolute -right-16 text-left w-full text-xs font-medium text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pl-2" style={{}}>
                    Feedback</div>
<div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<svg className="lucide lucide-refresh-cw text-emerald-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</svg>
</div>
</div>

<div className="absolute bottom-[10%] left-[10%] w-24 h-24 bg-[#0c0c0e] rounded-full border border-lime-500/30 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 group">
<div className="absolute -left-16 text-right w-full text-xs font-medium text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pr-2" style={{}}>
                    Growth</div>
<div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(132,204,22,0.2)]">
<svg className="lucide lucide-trending-up text-lime-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
</div>

<div className="absolute bottom-[10%] right-[10%] w-24 h-24 bg-[#0c0c0e] rounded-full border border-cyan-500/30 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 group">
<div className="absolute -bottom-8 text-center w-full text-xs font-medium text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{}}>
                    Innovation</div>
<div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
<svg className="lucide lucide-lightbulb text-cyan-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5">
</path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
<h3 className="text-lg font-medium text-white/90 tracking-widest uppercase opacity-50" style={{}}>Continuous Learning
                </h3>
</div>
</div>

<div className="space-y-8">

<div className="group">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3" style={{}}>
<span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<svg className="lucide lucide-puzzle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.439 10c.011.232.022.468.022.705.006.183.006.366 0 .551a9.92 9.92 0 0 0-1.636 2.871A8.2 8.2 0 0 1 12 12a8.2 8.2 0 0 1-5.825 2.127A9.924 9.924 0 0 0 4.539 11.256c-.006-.185-.006-.368 0-.551a9.92 9.92 0 0 0 1.636-2.871A8.2 8.2 0 0 1 12 10a8.2 8.2 0 0 1 5.825-2.127A9.932 9.932 0 0 0 19.44 10Z"></path><path d="M19.44 10a10 10 0 1 1-2.228-5.328"></path></svg>
</span>
                    Enhanced Problem-Solving
                </h3>
<p className="text-blue-400/70 text-sm leading-relaxed pl-11" style={{}}>
                    Complex sales and recruitment challenges, from finding niche skills to managing high-volume hiring,
                    to lead generation to appointment booking are tackled effectively by specialized agents.
                </p>
</div>

<div className="group">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3" style={{}}>
<span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
                    Increased Efficiency
                </h3>
<p className="text-blue-400/70 text-sm leading-relaxed pl-11" style={{}}>
                    Collaboration and distributed processing among agents lead to a more efficient allocation of
                    resources, matching tasks to the best-suited agent.
                </p>
</div>

<div className="group">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3" style={{}}>
<span className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
<svg className="lucide lucide-scaling" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>
</span>
                    Scalability
                </h3>
<p className="text-blue-400/70 text-sm leading-relaxed pl-11" style={{}}>
                    Easily expand the system's capabilities by adding more agents to handle increased demand or new
                    areas of specialization without significant overhauls.
                </p>
</div>

<div className="group">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3" style={{}}>
<span className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
<svg className="lucide lucide-shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
                    Robustness &amp; Reliability
                </h3>
<p className="text-blue-400/70 text-sm leading-relaxed pl-11" style={{}}>
                    The system is dependable; the malfunction of a single agent won't halt operations. Other agents can
                    step in or redistribute the workload.
                </p>
</div>

<div className="group">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-3" style={{}}>
<span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
<svg className="lucide lucide-git-branch-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 3v12"></path><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M15 6a9 9 0 0 0-9 9"></path><path d="M18 15v6"></path><path d="M21 18h-6"></path></svg>
</span>
                    Flexibility &amp; Adaptability
                </h3>
<p className="text-blue-400/70 text-sm leading-relaxed pl-11" style={{}}>
                    Our MAS can dynamically adjust to evolving sales and recruitment needs by reconfiguring agents and
                    their responsibilities.
                </p>
</div>
</div>
</div>

<div className="mt-24 p-8 rounded-3xl bg-gradient-to-r from-[#0c0c0e] to-blue-950/20 border border-white/10 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent">
</div>
<div className="relative z-10 max-w-3xl mx-auto">
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-6" style={{}}>
                The future is unfolding before us, and it's being shaped by those who act now. Don't let complexity or
                uncertainty hold you back. We understand that implementing advanced AI strategies can seem daunting,
                especially when you're already juggling countless responsibilities.
            </p>
<p className="text-lg font-medium text-emerald-300" style={{}}>
                That's why we're here to make it effortless for you.
            </p>
</div>
</div>
</section><section className="md:px-12 lg:pt-20 lg:pb-20 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-1 lg:order-1">
<h2 className="md:text-6xl text-3xl font-normal text-white tracking-tight font-serif-custom mb-12 leading-[0.95]" style={{}}>
        Our system
        <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-emerald-400 to-sky-500" style={{}}>offers</span>
</h2>
<div className="space-y-8">

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors duration-300">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 1 19.5 5.5"></path><path d="M12 18a4 4 0 0 0 4-4 4.5 4.5 0 0 0-3-4"></path><path d="M19.5 5.5a4 4 0 0 0 0 8 4 4 0 0 0-2.5 7.272"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300" style={{}}>Enhanced Problem-Solving</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Tackle complex driver recruitment challenges, from finding qualified drivers with specific endorsements to managing high-volume hiring, more effectively by leveraging the diverse expertise of specialized agents.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors duration-300">
<svg className="text-sky-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-sky-300 transition-colors duration-300" style={{}}>Increased Efficiency</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Collaboration and distributed processing among agents lead to a more efficient allocation of resources. Tasks are matched to the agent best suited for them.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300" style={{}}>Scalability</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Easily expand the system's capabilities by adding more agents to handle increased demand or new areas of specialization, without significant system overhauls.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors duration-300">
<svg className="text-pink-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-pink-300 transition-colors duration-300" style={{}}>Robustness and Reliability</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              The system is more dependable as the malfunction of a single agent won't halt operations. Other agents can step in or redistribute the workload.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
<svg className="text-violet-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M7 7h3v9"></path><path d="M14 7h3v5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-violet-300 transition-colors duration-300" style={{}}>Flexibility and Adaptability</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Our MAS can dynamically adjust to evolving driver recruitment needs by reconfiguring agents and their responsibilities.
            </p>
</div>
</div>
</div>
</div>

<div className="order-2 lg:order-2 w-full h-full relative flex items-center justify-center min-h-[500px]">
<div className="relative w-full max-w-[500px] aspect-square">

<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-50"></div>

<div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
<div className="absolute inset-[15%] rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
<div className="absolute inset-[30%] rounded-full border border-white/5 animate-[spin_15s_linear_infinite]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
<div className="w-full h-full bg-zinc-900 border border-sky-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.15)] relative z-10 backdrop-blur-md">
<div className="flex flex-col items-center">
<svg className="text-sky-400 mb-1" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.929 4.929 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
<span className="text-[9px] font-mono text-sky-300 font-bold uppercase tracking-widest" style={{}}>Core</span>
</div>
</div>

<div className="absolute inset-0 bg-sky-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
</div>

<div className="absolute inset-0 animate-[spin_60s_linear_infinite]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-0 hover:scale-110 transition-transform">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path></svg>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-0 hover:scale-110 transition-transform">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
</div>

<div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-90 hover:scale-110 transition-transform">
<svg className="text-pink-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
</div>

<div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform rotate-90 hover:scale-110 transition-transform">
<svg className="text-sky-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
</div>
</div>

<div className="absolute w-2 h-2 bg-sky-400 rounded-full top-[30%] left-[30%] animate-ping [animation-duration:3s]"></div>
<div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full bottom-[20%] right-[35%] animate-ping [animation-duration:4s]"></div>
<div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full top-[20%] right-[20%] animate-ping [animation-duration:2.5s]"></div>
</div>
</div>
</div>
</section>
<div className="flex flex-col bg-black/50 w-full z-20 border-white/5 border-t relative">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5 hidden sm:block"></div>
<div className="w-px h-full bg-white/5 hidden md:block"></div>
<div className="w-px h-full bg-white/5 hidden lg:block"></div>
<div className="w-px h-full bg-white/5 hidden xl:block"></div>
<div className="w-px h-full bg-white/5"></div>
</div>
<section className="z-10 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative md:px-12 lg:pt-20 lg:pb-4">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="z-10 relative">

<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-6xl font-normal font-serif-custom text-white tracking-tight mb-6" style={{}}>
                Take the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-violet-400" style={{}}>First Step</span>
</h2>
<p className="text-lg font-light text-blue-400/60 leading-relaxed max-w-xl mx-auto" style={{}}>
                Transform your hiring and sales processes today with our specialized AI leadership and integration services.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="group relative rounded-2xl bg-[#0c0c0e] border border-white/10 p-8 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
<svg className="lucide lucide-file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L20 7.5V11"></path><path d="M8 18h1"></path><path className="" d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.85 17.18a2 2 0 0 1-1 .54l-3.08.77.77-3.08a2 2 0 0 1 .54-1Z"></path><path d="M17 14h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3" style={{}}>Fractional Chief AI Officer</h3>
<p className="text-sm font-light text-blue-300/60 leading-relaxed" style={{}}>
                        Fill out an application for our Fractional Chief AI Officer services, specializing in Sales and Marketing, Recruitment and HR.
                    </p>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0c0c0e] border border-white/10 p-8 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
<svg className="lucide lucide-toy-brick" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="1" width="18" x="3" y="8"></rect><path d="M10 8V5c0-1 1-2 2-2h0c1 0 2 1 2 2v3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3" style={{}}>Tailored Implementation</h3>
<p className="text-sm font-light text-blue-300/60 leading-relaxed" style={{}}>
                        Let us work alongside your team, implementing groundbreaking AI solutions tailored to your unique needs.
                    </p>
</div>
</div>

<div className="group relative rounded-2xl bg-[#0c0c0e] border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
<svg className="lucide lucide-focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3" style={{}}>Strategic Focus</h3>
<p className="text-sm font-light text-blue-300/60 leading-relaxed" style={{}}>
                        Focus on what you do best—growing your business—while we handle the complexities of AI integration.
                    </p>
</div>
</div>
</div>

<div className="flex mb-20 relative justify-center">
<div className="absolute inset-0 flex items-center justify-center blur-2xl opacity-40 pointer-events-none">
<div className="w-48 h-24 bg-yellow-500/20 rounded-full"></div>
</div>
<button className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] z-10 overflow-hidden">
<span className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10" style={{}}>Fill out an application</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="text-center border-white/5 border-t pt-20 relative">
<div className="absolute left-1/2 -translate-x-1/2 -top-3 px-4 bg-[#09090b] text-[10px] uppercase tracking-widest text-green-500 font-medium" style={{}}>
                You're probably asking yourself...
            </div>
<div className="max-w-3xl mr-auto ml-auto">
<h2 className="md:text-5xl leading-tight hover:text-blue-200 transition-colors duration-500 cursor-default text-3xl font-normal text-white tracking-tight font-serif-custom" style={{}}>Why Choose Our AI-Powered Truck Driver Recruitment Software?</h2>
<div className="flex mt-8 justify-center">
<div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</section><div className="z-10 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative md:px-12 lg:pt-20 lg:pb-20">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<h2 className="leading-[0.95] md:text-5xl text-4xl font-normal text-white tracking-tight font-serif-custom max-w-3xl" style={{}}>When you enroll in AI-Powered Truck Driver Recruitment Software today, <span className="block italic text-blue-500" style={{}}>here's what you'll get...</span></h2>
<div className="flex gap-3 shrink-0">
<div className="relative inline-block group">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{-X: '199.6484375px', -Y: '12px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Book A Free Call<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div className="group w-full relative">


<div className="flex overflow-x-auto -mx-6 no-scrollbar snap-x [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:mx-0 md:[mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] md:pt-4 md:pl-12 mr-0 ml-0 pt-4 pr-6 pb-12 pl-6 gap-x-6 gap-y-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'}}>

<div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">

<div className="h-8 w-full border-b border-white/5 bg-blue-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="ml-4 h-4 w-32 rounded-full bg-blue-800/50"></div>
</div>

<div className="p-6 h-full bg-gradient-to-br from-blue-900 to-black relative overflow-hidden">
<div className="[background-size:16px_16px] opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col gap-4 h-full">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Expertise Without Overhead</h3>
<p className="text-sm text-blue-400" style={{}}>Gain access to top-tier AI expertise without the financial burden of a full-time hire.</p>

<div className="mt-auto w-full bg-blue-950/50 rounded-lg border border-white/5 p-4 flex items-end justify-between gap-4">
<div className="flex flex-col items-center gap-2 w-1/2">
<div className="w-full bg-red-500/20 border border-red-500/30 h-16 rounded-md relative group-hover/card:h-20 transition-all duration-500 flex items-center justify-center">
<span className="text-[10px] text-red-300 font-mono" style={{}}>$$$ Full-Time</span>
</div>
<span className="text-[10px] text-green-500" style={{}}>Traditional</span>
</div>
<div className="flex flex-col items-center gap-2 w-1/2">
<div className="w-full bg-green-500/20 border border-green-500/30 h-12 rounded-md relative group-hover/card:h-12 transition-all duration-500 flex items-center justify-center">
<span className="text-[10px] text-green-300 font-mono" style={{}}>$ Fractional</span>
</div>
<span className="text-[10px] text-green-500" style={{}}>Our Model</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 px-1">
<div className="w-10 h-10 rounded-full bg-blue-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
<svg className="lucide lucide-gem" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white" style={{}}>Top-Tier Value</div>
<div className="text-xs text-blue-500" style={{}}>Cost Efficient</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="h-8 w-full border-b border-white/5 bg-blue-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
</div>
<div className="p-6 h-full bg-blue-900 relative overflow-hidden flex flex-col">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover/card:bg-cyan-500/10 transition-colors duration-500">
</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Customized Solutions</h3>
<p className="text-sm text-blue-400 mt-2" style={{}}>We tailor AI strategies to align with your specific business goals.</p>

<div className="mt-auto space-y-3 pt-4">
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono text-cyan-200 w-16" style={{}}>Strategy</span>
<div className="h-1.5 flex-1 bg-blue-950 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[80%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] font-mono text-cyan-200 w-16" style={{}}>Autonomy</span>
<div className="h-1.5 flex-1 bg-blue-950 rounded-full overflow-hidden">
<div className="h-full bg-purple-400 w-[60%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-1 rounded bg-white/10 border border-white/10 text-[9px] text-white font-mono" style={{}}>Custom_Config.json</span>
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-auto"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 px-1">
<div className="w-10 h-10 rounded-full bg-blue-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
<svg className="lucide lucide-sliders-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white" style={{}}>Tailored Fit</div>
<div className="text-xs text-blue-500" style={{}}>No One-Size-Fits-All</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="h-8 w-full border-b border-white/5 bg-blue-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
</div>
<div className="p-6 h-full bg-blue-900 relative flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Proven Track Record</h3>
<p className="text-sm text-blue-400 mt-2" style={{}}>Blending human expertise with AI to unlock new levels of performance.</p>
</div>

<div className="mt-auto relative h-24 w-full border-b border-l border-white/10">

<svg className="absolute inset-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 50 L 20 40 L 40 35 L 60 20 L 80 15 L 100 5" fill="none" stroke="#22c55e" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0 50 L 20 40 L 40 35 L 60 20 L 80 15 L 100 5 V 50 H 0 Z" fill="url(#trendGradient)" opacity="0.2"></path>
<defs>
<lineargradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-0 right-0 bg-green-500/20 text-green-300 text-[9px] px-2 py-0.5 rounded border border-green-500/30 backdrop-blur-sm" style={{}}>
                            +124% Growth
                        </div>
</div>
</div>
</div>
<div className="flex items-center gap-3 px-1">
<div className="w-10 h-10 rounded-full bg-blue-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
<svg className="lucide lucide-trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white" style={{}}>Hybrid Model</div>
<div className="text-xs text-blue-500" style={{}}>Peak Performance</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="h-8 w-full border-b border-white/5 bg-blue-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
</div>
<div className="p-6 h-full bg-blue-900 relative flex flex-col justify-between overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover/card:bg-yellow-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Ethical Implementation</h3>
<p className="text-sm text-blue-400 mt-2" style={{}}>Using AI to enhance human roles, not replace them.</p>
</div>

<div className="mt-auto space-y-2">
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
<svg className="lucide lucide-user" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="h-px flex-1 bg-white/20"></div>
<div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
<svg className="lucide lucide-bot" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
<div className="flex justify-between px-1">
<span className="text-[10px] text-green-400 font-mono" style={{}}>✓ Human-in-Loop</span>
<span className="text-[10px] text-green-400 font-mono" style={{}}>✓ Transparent</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 px-1">
<div className="w-10 h-10 rounded-full bg-blue-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
<svg className="lucide lucide-heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15-4.9"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white" style={{}}>Augmentation</div>
<div className="text-xs text-blue-500" style={{}}>Principles First</div>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="h-8 w-full border-b border-white/5 bg-blue-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
</div>
<div className="p-6 h-full bg-blue-900 relative flex flex-col justify-between overflow-hidden">
<div className="absolute right-0 top-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover/card:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight" style={{}}>Ethical Implementation</h3>
<p className="text-sm text-blue-400 mt-2" style={{}}>We stay true to our principles by using AI to enhance human roles, not replace them.</p>
</div>

<div className="mt-auto w-full bg-blue-950/50 rounded-lg border border-white/5 p-3 flex flex-col gap-2 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
<div className="flex items-center justify-between text-xs text-white z-10">
<span className="flex items-center gap-2" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bias Detection</span>
<span className="text-emerald-400 font-mono" style={{}}>Active</span>
</div>
<div className="flex items-center justify-between text-xs text-white z-10">
<span className="flex items-center gap-2" style={{}}><svg className="lucide lucide-check text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Privacy First</span>
<span className="text-emerald-400 font-mono" style={{}}>Secured</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full mt-1 overflow-hidden">
<div className="h-full w-full bg-emerald-500/50 animate-pulse"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 px-1">
<div className="w-10 h-10 rounded-full bg-blue-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
<svg className="lucide lucide-scale" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white" style={{}}>Principles First</div>
<div className="text-xs text-blue-500" style={{}}>Human-Centric</div>
</div>
</div>
</div>
</div><div className="z-10 border-white/5 border-t mt-10 pt-20 relative">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="uppercase tracking-widest text-[10px]" style={{}}>Strategic Partnership</span>
</div>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif-custom text-white tracking-tight mb-8 leading-[1.1]" style={{}}>
             Embracing the <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-white">Future Together</span>
</h2>

<p className="text-lg md:text-xl font-light text-blue-200/80 leading-relaxed mb-16 max-w-2xl mx-auto" style={{}}>
            By adopting this hybrid approach, we can future-proof our organizations, just as Wall Street's Quants did. This is our moment to lead the way and ensure our companies thrive in this new era of AI-driven business.
        </p>

<div className="w-full text-left bg-gradient-to-b from-[#131315] to-[#0c0c0e] border border-white/10 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors duration-700"></div>
<div className="relative z-10 flex flex-col gap-6">
<div className="flex items-center gap-4 mb-2">
<div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-300">
<svg className="lucide lucide-quote" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-1 4v2Z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-1 4v2Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white" style={{}}>But here's the thing...</h3>
</div>
<div className="space-y-6 text-blue-100/70 font-light leading-relaxed">
<p className="text-lg text-white" style={{}}>I can't do it alone, and neither should you.</p>
<p className="" style={{}}>
                        I understand that you have a business to run, and figuring out AI on your own isn't just challenging—it's impractical. That's why I don't sell courses or training. Instead, I offer <span className="text-yellow-400 font-medium" style={{}}>Fractional Chief AI Officer</span> services, so you don't have to navigate this complex landscape by yourself.
                    </p>
<p className="" style={{}}>
                        This isn't just about staying competitive; it's about seizing the opportunity of a lifetime.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col gap-8 max-w-3xl mr-auto mb-8 ml-auto gap-x-8 gap-y-8 items-center">
<h3 className="md:text-3xl leading-snug text-2xl font-normal text-white text-center" style={{}}>Let's seize this unparalleled opportunity together. Embrace the future, harness the power of the new AI-Powered Truck Driver Recruitment Software, and lead the way into a new era of business success.</h3>
<button className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-semibold tracking-tight transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] overflow-hidden mt-4">
<span className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10 text-lg" style={{}}>Apply Now</span>
<svg className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div><div className="w-full max-w-4xl mx-auto space-y-32">

<div className="relative text-center">

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-normal font-serif-custom text-white tracking-tight leading-[1.1] mb-12" style={{}}>
                The groundwork you lay today with AI will be the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-300 to-white" style={{}}>foundation for your future success.</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">

<div className="group p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 mb-5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Take action now</h3>
<p className="text-sm text-blue-200/60 font-light leading-relaxed" style={{}}>Fill out the application for our Fractional Chief AI Officer services.</p>
</div>

<div className="group p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 mb-5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Partner with us</h3>
<p className="text-sm text-blue-200/60 font-light leading-relaxed" style={{}}>Let's work together to implement these advanced AI strategies.</p>
</div>

<div className="group p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 mb-5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Lead the way</h3>
<p className="text-sm text-blue-200/60 font-light leading-relaxed" style={{}}>Position your business at the forefront of the new industrial revolution.</p>
</div>
</div>
<div className="mt-16 relative">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/5"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-[#09090b] px-6 text-xl md:text-2xl font-serif-custom italic text-blue-100/90" style={{}}>
                        The best time to be in business is right now—because AI is ready to change everything.
                    </span>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto text-center space-y-8">
<p className="text-lg md:text-xl font-light text-blue-100/80 leading-relaxed" style={{}}>
                We are standing at the dawn of something extraordinary. This is more than just technology; it's a paradigm shift. Let's seize this opportunity, embrace the future, and lead the way into a new era of business success.
            </p>
<p className="text-lg md:text-xl font-light text-blue-100/80 leading-relaxed" style={{}}>
                Don't let this moment pass you by. The companies that recognize and act on this inflection point will be the ones that define the future. <span className="text-white font-medium" style={{}}>Will you be one of them?</span>
</p>
</div>

<div className="relative w-full rounded-3xl bg-[#0c0c0e] border border-white/10 overflow-hidden group">

<div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-screen">
<img alt="" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80" style={{}}/>
</div>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c0c0e]/80 via-[#0c0c0e]/95 to-[#0c0c0e]"></div>
<div className="md:p-12 lg:p-16 z-10 pt-8 pr-8 pb-8 pl-8 relative">
<div className="max-w-3xl mx-auto text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide mb-6" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        APPLICATION
                    </div>
<h3 className="text-3xl md:text-5xl font-normal font-serif-custom text-white mb-6 tracking-tight" style={{}}>
                        Ready to revolutionize your business?
                    </h3>
<p className="text-lg font-light text-blue-200/60 leading-relaxed" style={{}}>
                        Fill out your application today and step confidently into the future. Let's embark on this journey together, transforming not just your business, but the entire industry.
                    </p>
</div>
<form className="max-w-xl mx-auto space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-blue-300/60 font-medium pl-1" style={{}}>First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 font-light" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-blue-300/60 font-medium pl-1" style={{}}>Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 font-light" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-blue-300/60 font-medium pl-1" style={{}}>Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 font-light" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-blue-300/60 font-medium pl-1" style={{}}>Company URL</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-white/30 text-sm" style={{}}>https://</span>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl pl-16 pr-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 font-light" placeholder="www.example.com" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider text-blue-300/60 font-medium pl-1" style={{}}>Primary Goal</label>
<div className="relative">
<select className="focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10 font-light text-white bg-white/5 w-full border-white/10 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4">
<option className="bg-[#0c0c0e]" style={{}}>Fractional Chief AI Officer</option>
<option className="bg-[#0c0c0e]" style={{}}>AI Strategy Implementation</option>
<option className="bg-[#0c0c0e]" style={{}}>Recruitment Process Automation</option>
<option className="bg-[#0c0c0e]" style={{}}>Other Inquiry</option>
</select>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white/40">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="pt-6">
<button className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold tracking-tight transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden" type="button">
<span className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10 text-lg" style={{}}>Apply Now</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-center mt-4 text-xs text-blue-300/40 font-light" style={{}}>
                            Limited spots available for Fractional CAIO services.
                        </p>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="z-20 flex flex-col w-full border-white/5 border-t relative">


<footer className="md:px-12 bg-black/50 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-16 gap-x-10 gap-y-10">

<div className="col-span-2 lg:col-span-2 pr-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-white bg-gradient-to-br from-sky-500 to-blue-600 w-8 h-8 rounded-full items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.4)]">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="solar:box-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="database-bold-duotone" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4" fill="#ffffff"></path>
<path d="M4 12v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6c0 2.21-3.582 4-8 4s-8-1.79-8-4" fill="#ffffff" opacity=".5"></path>
<path className="" d="M4 6v6c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0 2.21-3.582 4-8 4S4 8.21 4 6" fill="#ffffff" opacity=".7">
</path>
</svg>
</div>
<span className="text-lg font-semibold text-white tracking-tight" style={{}}>AI-Powered Truck Driver Recruiter</span>
</div>
</div>

<div className="">
<h4 className="cursor-pointer text-sm font-semibold text-white mb-4" onclick="window.location.href='/home'" role="button" style={{}}>Home</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-sky-400 transition-colors" href="/faq" style={{}}>FAQ</a></li>
<li className=""><a className="hover:text-sky-400 transition-colors" href="/about" style={{}}>About</a></li>
</ul>
</div>

<div className="">
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-sky-400 transition-colors" href="/newsroom" style={{}}>Newsroom</a></li>
<li className=""><a className="hover:text-sky-400 transition-colors" href="/contact" style={{}}>Contact</a></li>
</ul>
</div>

<div className="">
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-sky-400 transition-colors" href="/privacy" style={{}}>Privacy Policy</a></li><li className=""><a className="hover:text-sky-400 transition-colors" href="/contact" style={{}}>Cookie Policy</a></li>
</ul>
</div>

<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="hover:text-white transition-colors text-zinc-500" href="#">
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-icon="simple-icons:x" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" fill="currentColor">
</path>
</svg>
</a>
<a className="hover:text-white transition-colors text-zinc-500" href="https://www.facebook.com/hybridaiworkforce">
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-icon="simple-icons:github" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="facebook" data-width="18" height="18" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="#ffffff"></path></svg>
</a>
<a className="hover:text-white transition-colors text-zinc-500" href="https://www.linkedin.com/company/hybrid-ai-workforce">
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-icon="simple-icons:linkedin" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor">
</path>
</svg>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p className="" style={{}}>© 2025 AI-Powered Truck Driver Recruiter. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-1.5" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              All systems operational
              </span>
</div>
</div>
</footer>
</div>
</div>
</div>
</main>


    </>
  );
}
