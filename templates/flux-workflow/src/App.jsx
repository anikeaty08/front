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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        

(function(){const btn=document.getElementById('mobile-menu-button');const menu=document.getElementById('mobile-menu');if(btn&&menu){btn.addEventListener('click',()=>{menu.classList.toggle('hidden');});document.addEventListener('click',(e)=>{if(!btn.contains(e.target)&&!menu.contains(e.target)){menu.classList.add('hidden');}});}})()


          (function() {
            // Chat functionality
            const chatInput = document.getElementById('chatInput');
            const sendButton = document.getElementById('sendButton');
            const chatMessages = document.getElementById('chatMessages');
            const userMessage = document.getElementById('userMessage');
            const aiMessage = document.getElementById('aiMessage');
            const userTime = document.getElementById('userTime');
            const aiTime = document.getElementById('aiTime');
            const meetingCard = document.getElementById('meetingCard');
            const meetingDetails = document.getElementById('meetingDetails');
            
            function getCurrentTime() {
              const now = new Date();
              return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            }
            
            function simulateAIResponse(message) {
              const responses = {
                'meeting': 'Done. I\'ve scheduled a Zoom meeting with the design team for Thursday at 11:00 AM.',
                'report': 'I\'ve generated the quarterly performance report. It shows a 42% increase in productivity.',
                'task': 'Task created and assigned to the team. I\'ve set the deadline for next Friday.',
                'default': 'I understand. Let me help you with that right away.'
              };
              
              const lowerMsg = message.toLowerCase();
              if (lowerMsg.includes('meeting') || lowerMsg.includes('call') || lowerMsg.includes('zoom')) {
                return responses.meeting;
              } else if (lowerMsg.includes('report') || lowerMsg.includes('analytics')) {
                return responses.report;
              } else if (lowerMsg.includes('task') || lowerMsg.includes('create')) {
                return responses.task;
              }
              return responses.default;
            }
            
            function sendMessage() {
              const message = chatInput.value.trim();
              if (!message) return;
              
              const time = getCurrentTime();
              userMessage.textContent = message;
              userTime.textContent = time;
              chatInput.value = '';
              
              setTimeout(() => {
                const response = simulateAIResponse(message);
                aiMessage.textContent = response;
                aiTime.textContent = time;
                
                if (message.toLowerCase().includes('meeting') || message.toLowerCase().includes('call')) {
                  meetingCard.style.display = 'block';
                  meetingDetails.textContent = 'Design Sync • Thursday 11:00 AM';
                } else {
                  meetingCard.style.display = 'none';
                }
              }, 800);
            }
            
            sendButton.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') sendMessage();
            });
            
            // Generative AI functionality
            const promptInput = document.getElementById('promptInput');
            const createButton = document.getElementById('createButton');
            const renderStatus = document.getElementById('renderStatus');
            const starfield = document.getElementById('starfield');
            
            function simulateRendering() {
              const prompt = promptInput.value.trim();
              if (!prompt) return;
              
              renderStatus.textContent = 'Rendering...';
              renderStatus.parentElement.classList.add('animate-pulse');
              promptInput.value = '';
              
              // Simulate rendering time
              setTimeout(() => {
                renderStatus.textContent = 'Complete';
                renderStatus.parentElement.classList.remove('animate-pulse');
                
                // Reset after 2 seconds
                setTimeout(() => {
                  renderStatus.textContent = 'Ready';
                }, 2000);
              }, 3000);
            }
            
            createButton.addEventListener('click', simulateRendering);
            promptInput.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') simulateRendering();
            });
          })();
        


      // lucide icons
          document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) lucide.createIcons();
          });

          // Chart.js line
          const ctx = document.getElementById('kpiChart');
          if (ctx) {
            const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
            gradient.addColorStop(0, 'rgba(56,189,248,0.35)');
            gradient.addColorStop(1, 'rgba(56,189,248,0.03)');

            new Chart(ctx, {
              type: 'line',
              data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                  data: [14, 18, 16, 22, 28, 31, 35],
                  borderColor: 'rgba(56,189,248,0.9)',
                  backgroundColor: gradient,
                  tension: 0.35,
                  fill: true,
                  pointRadius: 0,
                  borderWidth: 2
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    intersect: false,
                    mode: 'index',
                    backgroundColor: 'rgba(17,24,39,0.9)',
                    titleColor: '#e5e7eb',
                    bodyColor: '#e5e7eb',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1,
                    padding: 10
                  }
                },
                scales: {
                  x: {
                    grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                    ticks: { color: 'rgba(228,228,231,0.6)', font: { size: 11 } }
                  },
                  y: {
                    grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                    ticks: { color: 'rgba(228,228,231,0.6)', font: { size: 11 } }
                  }
                }
              }
            });
          }
    


    (function() {
      const stepButtons = document.querySelectorAll('.step-button');
      const stepContents = document.querySelectorAll('.step-content');
      const textContents = document.querySelectorAll('.text-content');
      
      stepButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          stepButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          stepContents.forEach(content => content.classList.remove('active'));
          textContents.forEach(text => text.classList.remove('active'));
          
          setTimeout(() => {
            stepContents[index].classList.add('active');
            textContents[index].classList.add('active');
          }, 50);
          
          if (index === 0 && window.Chart) {
            setTimeout(() => {
              const ctx = document.getElementById('overviewLine1');
              if (ctx && !ctx.chartInitialized) {
                const lineCtx = ctx.getContext('2d');
                new Chart(lineCtx, {
                  type: 'line',
                  data: {
                    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    datasets: [{
                      label: 'Success',
                      data: [320, 410, 380, 520, 610, 560, 680],
                      borderColor: '#8b5cf6',
                      backgroundColor: 'rgba(139,92,246,0.15)',
                      tension: 0.35,
                      fill: true,
                      borderWidth: 2,
                      pointRadius: 0
                    }]
                  },
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: 'rgba(24,24,27,0.9)',
                        borderColor: 'rgba(255,255,255,0.08)',
                        borderWidth: 1
                      }
                    },
                    scales: {
                      x: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      },
                      y: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      }
                    }
                  }
                });
                ctx.chartInitialized = true;
              }
            }, 100);
          }
        });
      });
      
      if (window.Chart) {
        setTimeout(() => {
          const ctx = document.getElementById('overviewLine1');
          if (ctx) {
            const lineCtx = ctx.getContext('2d');
            new Chart(lineCtx, {
              type: 'line',
              data: {
                labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                datasets: [{
                  label: 'Success',
                  data: [320, 410, 380, 520, 610, 560, 680],
                  borderColor: '#8b5cf6',
                  backgroundColor: 'rgba(139,92,246,0.15)',
                  tension: 0.35,
                  fill: true,
                  borderWidth: 2,
                  pointRadius: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: 'rgba(24,24,27,0.9)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1
                  }
                },
                scales: {
                  x: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  },
                  y: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  }
                }
              }
            });
            ctx.chartInitialized = true;
          }
        }, 500);
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          }
        });
      }, { threshold: 0.2 });
      
      stepContents.forEach(content => {
        observer.observe(content);
      });
    })();
  


    (function() {
      const stepButtons = document.querySelectorAll('.step-button');
      const stepContents = document.querySelectorAll('.step-content');
      const textContents = document.querySelectorAll('.text-content');
      
      stepButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          stepButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          stepContents.forEach(content => content.classList.remove('active'));
          textContents.forEach(text => text.classList.remove('active'));
          
          setTimeout(() => {
            stepContents[index].classList.add('active');
            textContents[index].classList.add('active');
          }, 50);
          
          if (index === 0 && window.Chart) {
            setTimeout(() => {
              const ctx = document.getElementById('overviewLine1');
              if (ctx && !ctx.chartInitialized) {
                const lineCtx = ctx.getContext('2d');
                new Chart(lineCtx, {
                  type: 'line',
                  data: {
                    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    datasets: [{
                      label: 'Success',
                      data: [320, 410, 380, 520, 610, 560, 680],
                      borderColor: '#8b5cf6',
                      backgroundColor: 'rgba(139,92,246,0.15)',
                      tension: 0.35,
                      fill: true,
                      borderWidth: 2,
                      pointRadius: 0
                    }]
                  },
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: 'rgba(24,24,27,0.9)',
                        borderColor: 'rgba(255,255,255,0.08)',
                        borderWidth: 1
                      }
                    },
                    scales: {
                      x: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      },
                      y: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      }
                    }
                  }
                });
                ctx.chartInitialized = true;
              }
            }, 100);
          }
        });
      });
      
      if (window.Chart) {
        setTimeout(() => {
          const ctx = document.getElementById('overviewLine1');
          if (ctx) {
            const lineCtx = ctx.getContext('2d');
            new Chart(lineCtx, {
              type: 'line',
              data: {
                labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                datasets: [{
                  label: 'Success',
                  data: [320, 410, 380, 520, 610, 560, 680],
                  borderColor: '#8b5cf6',
                  backgroundColor: 'rgba(139,92,246,0.15)',
                  tension: 0.35,
                  fill: true,
                  borderWidth: 2,
                  pointRadius: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: 'rgba(24,24,27,0.9)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1
                  }
                },
                scales: {
                  x: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  },
                  y: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  }
                }
              }
            });
            ctx.chartInitialized = true;
          }
        }, 500);
      }
      
      // Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          }
        });
      }, { threshold: 0.2 });
      
      stepContents.forEach(content => {
        observer.observe(content);
      });
    })();
  


      // Replace icons
          lucide.createIcons();

          // Line chart
          const lineCtx = document.getElementById('overviewLine').getContext('2d');
          new Chart(lineCtx, {
            type: 'line',
            data: {
              labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
              datasets: [
                {
                  label: 'Success',
                  data: [320, 410, 380, 520, 610, 560, 680],
                  borderColor: '#8b5cf6',
                  backgroundColor: 'rgba(139,92,246,0.15)',
                  tension: 0.35,
                  fill: true,
                  borderWidth: 2,
                  pointRadius: 0
                },
                {
                  label: 'Error',
                  data: [12, 18, 22, 16, 14, 19, 21],
                  borderColor: '#a3e635',
                  backgroundColor: 'rgba(163,230,53,0.12)',
                  tension: 0.35,
                  fill: true,
                  borderWidth: 2,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(24,24,27,0.9)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  borderWidth: 1,
                  titleColor: '#fff',
                  bodyColor: '#e5e7eb',
                  displayColors: false
                }
              },
              scales: {
                x: {
                  ticks: { color: '#9ca3af', font: { size: 11 } },
                  grid: { color: 'rgba(255,255,255,0.06)' }
                },
                y: {
                  ticks: { color: '#9ca3af', font: { size: 11 }, maxTicksLimit: 5 },
                  grid: { color: 'rgba(255,255,255,0.06)' }
                }
              }
            }
          });

          // Doughnut chart
          const donutCtx = document.getElementById('overviewDoughnut').getContext('2d');
          new Chart(donutCtx, {
            type: 'doughnut',
            data: {
              labels: ['Direct', 'Referral', 'Social'],
              datasets: [{
                data: [58, 32, 10],
                backgroundColor: ['#a3e635', '#8b5cf6', '#71717a'],
                borderWidth: 0,
                hoverOffset: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: '70%',
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(24,24,27,0.9)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  borderWidth: 1,
                  titleColor: '#fff',
                  bodyColor: '#e5e7eb',
                  displayColors: true
                }
              }
            }
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-screen" data-alpha-mask="73" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 73%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 73%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="IIK3OzarPe7ukkhb1hUT"></div>

</div>
</div>

<header className="animate-fade-in-down fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-4 pb-4 sm:pt-6 sm:pb-6 items-center justify-between"><a className="inline-flex items-center justify-center bg-center w-[100px] h-[30px] sm:w-[120px] sm:h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92f8c97d-c6ce-4088-95e1-67dfbfddffa0_1600w.png)] bg-cover rounded-full" href="#"></a><nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300"><a className="hover:text-white transition-colors" href="#">Platform</a><a className="hover:text-white transition-colors" href="#">Solutions</a><a className="hover:text-white transition-colors" href="#">Developers</a><a className="hover:text-white transition-colors" href="#">Enterprise</a><a className="hover:text-white transition-colors" href="#">Pricing</a></nav><div className="flex items-center gap-3"><a className="hidden sm:inline-flex items-center text-sm text-zinc-300 hover:text-white" href="#">Sign in</a><div className="hidden sm:inline-block group relative overflow-visible"><button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full pt-3 pr-3 pb-3 pl-3 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center"><span className="relative">Get Started</span><span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span></button><span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span></div><button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors" id="mobile-menu-button"><svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg></button></div><div className="hidden md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden shadow-xl" id="mobile-menu"><nav className="flex flex-col p-4 gap-1"><a className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Platform</a><a className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Solutions</a><a className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Developers</a><a className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Enterprise</a><a className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Pricing</a><div className="border-t border-white/10 mt-2 pt-2"><a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">Sign in</a><button className="w-full mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium text-white/80 tracking-tight bg-white/5 rounded-full py-3 px-4 border border-white/10 hover:bg-white/10 transition-colors">Get Started</button></div></nav></div></div>
</div>
</header>

<main className="relative">
<section className="overflow-visible relative">
<div className="lg:px-8 md:pt-16 max-w-7xl mr-auto ml-auto pt-16 pr-6 pl-6 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="text-center mt-12 mb-12">
<span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur animate-fade-in-up delay-200">
              
              Next-generation workflow automation
            </span>

<div className="mx-auto mt-6 max-w-5xl relative animate-blur-in delay-400" style={{height: 'clamp(150px, 40vw, 320px)'}}>
<svg className="w-full h-full max-w-[1024px] mx-auto" preserveaspectratio="xMidYMid meet" strokeWidth="2" viewbox="0 0 1000 320">
<defs>
<path d="M 100,250 Q 500,50 900,250" fill="transparent" id="curve-title"></path>
<path d="M 120,295 Q 500,135 880,295" fill="transparent" id="curve-subtitle"></path>
</defs>
<text className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[110px] font-semibold tracking-tight fill-white animate-flux-shine" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}} text-anchor="middle">
<textpath className="" href="#curve-title" startoffset="50%">
                    Build. Ship. Scale.
                  </textpath>
</text>
<text className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[22px] fill-zinc-400" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}} text-anchor="middle">
<textpath className="" href="#curve-subtitle" startoffset="50%">
                    The workflow platform built for modern teams. Ship faster
                    with intelligent automation.
                  </textpath>
</text>
</svg>
</div>
<div className="mt-8 flex items-center justify-center gap-3 animate-fade-in-up delay-600">
<a className="inline-flex items-center gap-2 hover:bg-zinc-100 transition-colors text-sm font-medium text-zinc-900 tracking-tight bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
                Start building free
              </a>
<div className="inline-block group text-sm rounded-full relative">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white border-gradient before:rounded-full text-xs font-semibold text-white/70 tracking-tight bg-white/5 rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative backdrop-blur-xl items-center justify-center">
<span className="z-10 text-sm font-medium rounded-full mr-2 relative">
                    Watch demo
                  </span>
<span aria-hidden="true" className="-translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
<style>
                  .border-gradient {
                    position: relative;
                  }
                  .border-gradient::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 1px;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                      linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    background: linear-gradient(225deg,
                        rgba(255, 255, 255, 0.0) 0%,
                        rgba(255, 255, 255, 0.2) 50%,
                        rgba(255, 255, 255, 0.0) 100%);
                    pointer-events: none;
                  }
                </style>
</div>
</div>
</div>

<div className="md:ml-auto md:mr-auto md:mt-28 max-w-6xl mt-14 mr-auto ml-auto relative">

<div aria-hidden="true" className="pointer-events-none absolute -inset-x-24 -top-6 h-56 blur-3xl opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.2),transparent_70%)]"></div>
<div className="overflow-hidden dashboard-fade border-white/5 border ring-white/5 ring-1 rounded-3xl backdrop-blur-md" style={{background: 'rgba(10, 10, 15, 0.6)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'}}>

<div className="flex gap-3 sm:px-6 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md gap-x-3 gap-y-3 items-center justify-between" style={{background: 'rgba(15, 15, 20, 0.5)'}}>
<div className="flex items-center gap-2 min-w-0 flex-1">
<div className="hidden sm:flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50"></span>
</div>
<div className="relative flex-1">
<svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
<input className="w-full rounded-lg border border-white/5 bg-white/[0.03] pl-9 pr-20 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30 backdrop-blur-sm" placeholder="Search workflows, tasks, teams..." type="text"/>
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-300">
<span className="text-zinc-400">⌘</span>
          K
        </span>
</div>
</div>
<button className="hidden sm:inline-flex gap-2 hover:from-fuchsia-600/30 hover:to-violet-600/30 transition-colors text-xs text-fuchsia-100 border-[#ffffff]/20 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
      Create workflow
    </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12" style={{background: 'rgba(5, 5, 8, 0.4)'}}>

<aside className="hidden lg:flex lg:col-span-3 flex-col gap-2 sm:p-6 pt-4 pr-4 pb-4 pl-4 gap-x-2 gap-y-2 backdrop-blur-md" style={{background: 'rgba(12, 12, 16, 0.5)'}}>
<h3 className="mb-2 text-sm font-medium tracking-tight text-zinc-300">
        Workspace
      </h3>
<nav className="flex flex-col gap-1.5">
<a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18v18H3z"></path>
<path d="M3 9h18"></path>
<path d="M3 15h18"></path>
<path d="M9 3v18"></path>
</svg>
          Overview
        </a>
<a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
          Workflows
        </a>
<a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
          Team
        </a>
<a className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-zinc-300 hover:bg-white/5" href="#">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
          Reports
        </a>
</nav>
<div className="mt-5">
<h4 className="mb-2 text-sm font-medium tracking-tight text-zinc-300">
          Active Flows
        </h4>
<div className="space-y-1.5">
<button className="w-full text-left rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 flex items-center gap-2 backdrop-blur-sm">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
            customer-onboarding
          </button>
<button className="w-full text-left rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 flex items-center gap-2 backdrop-blur-sm">
<div className="h-2 w-2 rounded-full bg-amber-400"></div>
            invoice-processing
          </button>
</div>
</div>
</aside>

<section className="lg:col-span-6 lg:border-t-0 lg:border-x sm:p-6 border-white/5 border-t pt-4 pr-4 pb-4 pl-4 backdrop-blur-md space-y-4">

<div className="grid grid-cols-2 gap-3">
<div className="bg-[#1a1a1f]/60 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Active Tasks</span>
<svg className="h-4 w-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 20.66-1-1.73"></path>
<path d="M11 10.27 7 3.34"></path>
<path d="m20.66 17-1.73-1"></path>
<path d="m3.34 7 1.73 1"></path>
<path d="M14 12h8"></path>
<path d="M2 12h2"></path>
<path d="m20.66 7-1.73 1"></path>
<path d="m3.34 17 1.73-1"></path>
<path d="m17 3.34-1 1.73"></path>
<path d="m11 13.73-4 6.93"></path>
</svg>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">
            87
          </p>
<p className="mt-1 text-xs text-blue-400">
            +23% from last week
          </p>
</div>
<div className="bg-[#1a1a1f]/60 border-white/5 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Efficiency</span>
<svg className="h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">
            94.2%
          </p>
<p className="mt-1 text-xs text-emerald-400">
            Peak performance
          </p>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-black/40 overflow-hidden backdrop-blur-sm">
<div className="flex items-center justify-between border-b border-white/5 px-4 py-2 bg-white/[0.02] backdrop-blur-sm">
<span className="text-xs text-zinc-400 font-medium">
            Recent execution
          </span>
<span className="text-xs text-emerald-400">● Running</span>
</div>
<div className="text-xs font-mono pt-4 pr-4 pb-4 pl-4 overflow-hidden h-40 relative">
<div className="animate-scroll space-y-1">
<div className="text-zinc-500">
<span className="text-fuchsia-400">›</span>
              workflow execute customer-onboarding
            </div>
<div className="text-zinc-400">
              Initializing workflow engine...
            </div>
<div className="text-zinc-400">
              Loading 12 automation rules
            </div>
<div className="text-zinc-400">
              Connecting to data sources (3/3)
            </div>
<div className="text-emerald-400">
              ✓ Execution started [flow-a8n3j]
            </div>
<div className="text-emerald-400">
              ✓ Step 1/5 completed in 1.2s
            </div>
<div className="text-zinc-400">
<span className="text-blue-400">Status:</span>
<span className="text-white">
                78% complete · 2 tasks pending
              </span>
</div>
<div className="text-emerald-400">
              ✓ Step 2/5 completed in 0.8s
            </div>
<div className="text-zinc-400">
              Processing batch operations...
            </div>
<div className="text-emerald-400">
              ✓ Step 3/5 completed in 1.5s
            </div>
<div className="text-zinc-400">
              Validating data integrity...
            </div>
<div className="text-emerald-400">
              ✓ Step 4/5 completed in 0.9s
            </div>
<div className="text-zinc-400">
              Finalizing workflow execution...
            </div>
<div className="text-emerald-400">
              ✓ Step 5/5 completed in 1.1s
            </div>
<div className="text-emerald-400">
              ✓ Workflow completed successfully
            </div>
</div>
<style>
            @keyframes scroll {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 15s linear infinite;
            }
            .animate-scroll > div {
              padding-bottom: 0.25rem;
            }
          </style>
<div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-[#15151a]/50 p-4 backdrop-blur-sm">
<h4 className="text-sm font-medium tracking-tight text-zinc-200 mb-3">
          Team Activity
        </h4>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-200">Task completed</p>
<p className="text-xs text-zinc-400 mt-0.5">
                invoice-processing • 5 mins ago
              </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-200">Member joined</p>
<p className="text-xs text-zinc-400 mt-0.5">
                alex.chen@company.io • 28 mins ago
              </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
<svg className="h-4 w-4 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-zinc-200">Comment added</p>
<p className="text-xs text-zinc-400 mt-0.5">
                customer-onboarding • 1 hour ago
              </p>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-3 p-4 sm:p-6 space-y-4 backdrop-blur-md">

<div className="bg-[#15151a]/50 border-white/5 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<h4 className="text-sm font-medium tracking-tight text-zinc-200 mb-4">
    Completion Rate
  </h4>
<div className="flex items-center justify-center">
<div className="relative w-[120px] h-[120px]">

<svg className="absolute inset-0" height="120" viewbox="0 0 120 120" width="120">
<defs>
</defs>

<circle cx="60" cy="60" fill="none" r="52" stroke="rgba(255,255,255,0.05)" strokeWidth="2"></circle>

<circle cx="60" cy="8" fill="rgba(139,92,246,0.6)" r="2"></circle>
<circle cx="112" cy="60" fill="rgba(139,92,246,0.4)" r="2"></circle>
<circle cx="60" cy="112" fill="rgba(139,92,246,0.4)" r="2"></circle>
<circle cx="8" cy="60" fill="rgba(139,92,246,0.4)" r="2"></circle>

<g style={{animation: 'rotate-compass 8s linear infinite', transformOrigin: '60px 60px'}}>

<path d="M 60,60 L 54,30 L 60,25 L 66,30 Z" fill="url(#compass-gradient)" opacity="0.9">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.9;1;0.9"></animate>
</path>

<path d="M 60,60 L 54,90 L 60,95 L 66,90 Z" fill="rgba(255,255,255,0.3)"></path>

<circle cx="60" cy="60" fill="rgba(139,92,246,0.8)" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;5;4"></animate>
</circle>
</g>

<circle cx="60" cy="60" fill="none" r="45" stroke="rgba(139,92,246,0.2)" stroke-dasharray="4 4" strokeWidth="1">
<animate attributename="stroke-dashoffset" dur="4s" from="0" repeatcount="indefinite" to="8"></animate>
</circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-semibold tracking-tight text-white" style={{animation: 'fade-in 0.6s ease-out 0.8s forwards', opacity: '1'}}>
          90%
        </span>
<span className="text-xs text-zinc-400" style={{animation: 'fade-in 0.6s ease-out 1s forwards', opacity: '1'}}>On track</span>
</div>
</div>
</div>
<div className="mt-4 space-y-2 text-xs">
<div className="flex items-center justify-between" style={{animation: 'fade-in 0.5s ease-out 1.2s forwards', opacity: '1'}}>
<span className="text-zinc-400">Automation rate</span>
<span className="text-emerald-400">67/74</span>
</div>
<div className="flex items-center justify-between" style={{animation: 'fade-in 0.5s ease-out 1.4s forwards', opacity: '1'}}>
<span className="text-zinc-400">Success rate</span>
<span className="text-zinc-200">96.8%</span>
</div>
</div>
<style>
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes rotate-compass {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
</div>

<div className="rounded-2xl border border-white/5 bg-[#15151a]/50 p-4 backdrop-blur-sm">
<div className="mb-3 flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight text-zinc-200">
            Task Timeline
          </h4>
</div>
<div className="grid grid-cols-7 gap-1 text-[10px] text-zinc-400 mb-2">
<div className="text-center">M</div>
<div className="text-center">T</div>
<div className="text-center">W</div>
<div className="text-center">T</div>
<div className="text-center">F</div>
<div className="text-center">S</div>
<div className="text-center">S</div>
</div>
<div className="grid grid-cols-7 gap-1">
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-fuchsia-600/60 border-2 border-fuchsia-400/60 shadow-[0_4px_20px_-4px_rgba(217,70,239,0.4)]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-emerald-500/15 border border-emerald-500/30"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
<div className="h-7 rounded bg-white/[0.03]"></div>
</div>
<div className="mt-3 flex items-center gap-3 text-[10px]">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-sm bg-emerald-500/30"></div>
<span className="text-zinc-400">Completed</span>
</div>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-sm bg-fuchsia-600/60"></div>
<span className="text-zinc-400">Today</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 p-4 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="h-4 w-4 text-fuchsia-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<p className="text-sm font-medium text-zinc-200">
            Smart Suggestion
          </p>
</div>
<p className="text-xs text-zinc-300/80 leading-relaxed">
          Task completion velocity improved 38% this quarter.
          Consider creating templates for recurring workflows.
        </p>
</div>
</aside>
</div>
</div>
<style>
              .dashboard-fade::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
                pointer-events: none;
                z-index: 10;
                border-radius: 1.5rem;
              }
              
              @keyframes progress-ring-rotate {
                0% {
                  stroke-dashoffset: 326.73;
                }
                50% {
                  stroke-dashoffset: 32.67;
                }
                100% {
                  stroke-dashoffset: 326.73;
                }
              }
              
              .progress-ring-animated {
                animation: progress-ring-rotate 3s ease-in-out infinite;
              }
            </style>
</div>
</div>
</section>

<section className="animate-fade-in-up delay-1000 pt-20 pb-20 relative">
<section className="z-10 sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
        @keyframes ticker {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
        }

        .ticker-track:hover {
            animation-play-state: paused;
        }
    </style>
</section>
</section>
<section className="sm:pt-16 lg:px-8 animate-fade-in-left delay-200 max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6">
<h1 className="text-[44px] sm:text-6xl md:text-7xl tracking-tight font-semibold text-zinc-200">
<span className="text-zinc-200">Core</span>
<span className="text-white">
      capabilities
    </span>
</h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl">
    Powerful features designed to accelerate your workflow and deliver exceptional results at scale
  </p>
</section>

<section className="grid grid-cols-1 xl:grid-cols-2 lg:px-8 max-w-7xl mt-6 sm:mt-8 mr-auto ml-auto pr-4 pl-4 sm:pr-6 sm:pl-6 gap-4 sm:gap-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-4 sm:p-6 animate-scale-in delay-300">

<div className="rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4 relative overflow-hidden">
<div className="pointer-events-none absolute inset-px rounded-xl ring-1 ring-inset ring-white/10"></div>
<div className="space-y-3" id="chatMessages">

<div className="flex items-start gap-3">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-4 w-4 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[12px] text-zinc-400">
<span>You</span>
<span id="userTime">2:47 PM</span>
</div>
<p className="text-[13.5px] leading-6 text-zinc-300" id="userMessage">
                    Set up a Zoom call with the design team for Thursday at 11am
                  </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-7 w-7 rounded-md bg-sky-500/10 ring-1 ring-sky-400/30 flex items-center justify-center">
<span className="text-[11px] text-sky-300">AI</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[12px] text-zinc-400">
<span>Flux Assistant</span>
<span id="aiTime">2:47 PM</span>
</div>
<p className="text-[13.5px] leading-6 text-zinc-300" id="aiMessage">
                    Done. I've scheduled a Zoom meeting with the design team for
                    Thursday at 11:00 AM.
                  </p>
<div className="mt-2 overflow-hidden rounded-lg border border-white/10" id="meetingCard">
<div className="flex items-center justify-between bg-white/[0.02] px-3 py-2">
<div className="flex items-center gap-2 text-[13px] text-zinc-300">
<svg className="h-4 w-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="" id="meetingDetails">Design Sync • Thursday 11:00 AM</span>
</div>
<a className="inline-flex items-center gap-1 text-[12px] text-sky-300 hover:text-sky-200 transition-colors" href="#">
                        Join
                        <svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center gap-2">
<button className="shrink-0 h-10 w-10 rounded-md border border-white/10 bg-white/5 text-zinc-300 flex items-center justify-center hover:bg-white/10 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<input className="flex-1 h-10 rounded-md bg-white/5 border border-white/10 px-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" id="chatInput" placeholder="Ask Flux anything..." type="text"/>
<button className="shrink-0 h-10 w-10 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-300 flex items-center justify-center hover:bg-sky-500/20 transition-colors" id="sendButton">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
<h3 className="text-2xl sm:text-[26px] tracking-tight font-semibold text-zinc-100">
              AI-Powered Automation
            </h3>
<p className="mt-2 text-[14.5px] leading-7 text-zinc-400">
              Intelligent assistants that understand context, automate
              repetitive tasks, and integrate seamlessly with your existing
              tools and workflows.
            </p>
</div>
</div>

<div className="sm:p-6 animate-scale-in delay-500 bg-gradient-to-b from-white/[0.02] to-transparent border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">

<div className="overflow-hidden sm:p-4 bg-black/30 max-h-none border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 relative">
<div className="pointer-events-none absolute inset-px rounded-xl ring-1 ring-inset ring-white/10"></div>

<div className="flex items-center justify-between mb-3">
<span className="text-xs text-zinc-400 font-medium">Database Schema</span>
<span className="text-[10px] text-emerald-400">● Live</span>
</div>

<div className="relative h-48 sm:h-56 rounded-lg bg-gradient-to-b from-slate-900 to-black overflow-hidden">
<div className="flex max-h-full absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="relative z-20">
<div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 border-2 border-violet-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.5)] backdrop-blur-sm">
<svg className="h-9 w-9 text-violet-200" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 animate-pulse"></div>
</div>

<div className="glass overflow-hidden max-h-fit rounded-2xl mb-0 pt-16 pr-5 pb-0 pl-5 space-y-0">
<div className="text-center mb-4">
<span className="text-[10px] uppercase tracking-[0.2em] text-lime-300/90">
                            Integrations
                          </span>
<h4 className="text-2xl font-semibold tracking-tight mt-1">
            Seamlessly integrate
          </h4>
<p className="text-xs text-neutral-400">
            with your favourite tools
          </p>
</div>


<div className="w-64 h-44 max-w-fit relative">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[230px] h-[176px]" data-icon-replaced="true" strokeWidth="2" style={{width: '230px', height: '176px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 320 176">

<path className="wave-path" d="M0 88 Q 53 40, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.2)" strokeWidth="2" style={{animation: 'wave 4s ease-in-out infinite'}}></path>
<path className="wave-path" d="M0 88 Q 53 60, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.3)" strokeWidth="2" style={{animation: 'wave 3.5s ease-in-out infinite 0.2s'}}></path>

<path className="wave-path" d="M0 88 Q 53 70, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.5)" strokeWidth="2.5" style={{animation: 'wave 3s ease-in-out infinite 0.4s'}}></path>
<path className="wave-path" d="M0 88 Q 53 75, 106 88 T 212 88 T 320 88" fill="none" stroke="#a3e635" strokeWidth="3" style={{animation: 'wave 2.8s ease-in-out infinite 0.6s'}}></path>

<path className="wave-path" d="M0 88 Q 53 75, 106 88 T 212 88 T 320 88" fill="none" opacity="0.3" stroke="rgba(163,230,53,0.4)" strokeWidth="8" style={{animation: 'wave 2.8s ease-in-out infinite 0.6s', filter: 'blur(4px)'}}>
</path>

<circle className="flowing-particle" cx="80" cy="88" fill="#a3e635" opacity="0.8" r="3" style={{animation: 'flowParticle 5s ease-in-out infinite'}}></circle>
<circle className="flowing-particle" cx="160" cy="88" fill="#a3e635" opacity="0.6" r="2.5" style={{animation: 'flowParticle 4.5s ease-in-out infinite 1s'}}></circle>
<circle className="flowing-particle" cx="240" cy="88" fill="#a3e635" opacity="0.7" r="3" style={{animation: 'flowParticle 5.5s ease-in-out infinite 2s'}}></circle>
</svg>

</div>
<style>
          @keyframes wave {
      
            0%,
            100% {
              d: path("M0 88 Q 53 70, 106 88 T 212 88 T 320 88");
            }
      
            25% {
              d: path("M0 88 Q 53 100, 106 88 T 212 88 T 320 88");
            }
      
            50% {
              d: path("M0 88 Q 53 76, 106 88 T 212 88 T 320 88");
            }
      
            75% {
              d: path("M0 88 Q 53 94, 106 88 T 212 88 T 320 88");
            }
          }
      
          @keyframes flowParticle {
            0% {
              cx: 0;
              cy: 88;
              opacity: 0;
            }
      
            10% {
              opacity: 0.8;
            }
      
            50% {
              cy: 70;
            }
      
            90% {
              opacity: 0.8;
            }
      
            100% {
              cx: 320;
              cy: 88;
              opacity: 0;
            }
          }
      
          @keyframes destinationPulse {
      
            0%,
            100% {
              transform: translate(-50%, 0) scale(1);
              box-shadow: 0 0 30px rgba(163, 230, 53, 0.45);
            }
      
            50% {
              transform: translate(-50%, 0) scale(1.1);
              box-shadow: 0 0 45px rgba(163, 230, 53, 0.7);
            }
          }
      
          .wave-path {
            transform-origin: center;
          }
        </style>
</div>

<div className="mt-4 grid grid-cols-3 gap-2 text-center">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
<div className="text-xs text-zinc-500 mb-0.5">Tables</div>
<div className="text-sm font-semibold text-zinc-200">47</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
<div className="text-xs text-zinc-500 mb-0.5">Relations</div>
<div className="text-sm font-semibold text-sky-300">124</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
<div className="text-xs text-zinc-500 mb-0.5">Queries/s</div>
<div className="text-sm font-semibold text-emerald-400">2.4k</div>
</div>
</div>
</div>

<style>
    .orbit-container {
      position: absolute;
      width: 180px;
      height: 180px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    
    .orbit-node {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -20px;
      margin-top: -20px;
    }
    
    .orbit-1 {
      animation: orbit1 10s linear infinite;
    }
    
    .orbit-2 {
      animation: orbit2 10s linear infinite;
    }
    
    .orbit-3 {
      animation: orbit3 10s linear infinite;
    }
    
    .orbit-4 {
      animation: orbit4 10s linear infinite;
    }
    
    @keyframes orbit1 {
      from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
    }
    
    @keyframes orbit2 {
      from { transform: rotate(90deg) translateX(90px) rotate(-90deg); }
      to { transform: rotate(450deg) translateX(90px) rotate(-450deg); }
    }
    
    @keyframes orbit3 {
      from { transform: rotate(180deg) translateX(90px) rotate(-180deg); }
      to { transform: rotate(540deg) translateX(90px) rotate(-540deg); }
    }
    
    @keyframes orbit4 {
      from { transform: rotate(270deg) translateX(90px) rotate(-270deg); }
      to { transform: rotate(630deg) translateX(90px) rotate(-630deg); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
      50% { box-shadow: 0 0 35px rgba(139, 92, 246, 0.6); }
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 3s ease-in-out infinite;
    }
    
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      opacity: 0;
    }
    
    .particle-1 {
      background: rgba(139, 92, 246, 0.9);
      animation: flow-particle-1 5s ease-in-out infinite;
    }
    
    .particle-2 {
      background: rgba(56, 189, 248, 0.9);
      animation: flow-particle-2 5s ease-in-out infinite 1s;
    }
    
    .particle-3 {
      background: rgba(16, 185, 129, 0.9);
      animation: flow-particle-3 5s ease-in-out infinite 2s;
    }
    
    .particle-4 {
      background: rgba(217, 70, 239, 0.9);
      animation: flow-particle-4 5s ease-in-out infinite 3s;
    }
    
    .particle-5 {
      background: rgba(6, 182, 212, 0.9);
      animation: flow-particle-1 5s ease-in-out infinite 2.5s;
    }
    
    .particle-6 {
      background: rgba(139, 92, 246, 0.9);
      animation: flow-particle-3 5s ease-in-out infinite 4s;
    }
    
    @keyframes flow-particle-1 {
      0% { top: 15%; left: 50%; opacity: 0; }
      20% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      80% { opacity: 0.6; }
      100% { top: 50%; left: 85%; opacity: 0; }
    }
    
    @keyframes flow-particle-2 {
      0% { top: 50%; left: 85%; opacity: 0; }
      20% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      80% { opacity: 0.6; }
      100% { top: 85%; left: 50%; opacity: 0; }
    }
    
    @keyframes flow-particle-3 {
      0% { top: 85%; left: 50%; opacity: 0; }
      20% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      80% { opacity: 0.6; }
      100% { top: 50%; left: 15%; opacity: 0; }
    }
    
    @keyframes flow-particle-4 {
      0% { top: 50%; left: 15%; opacity: 0; }
      20% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      80% { opacity: 0.6; }
      100% { top: 15%; left: 50%; opacity: 0; }
    }
  </style>
</div>

</div></div></div></section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:px-8 max-w-7xl mt-6 sm:mt-8 mr-auto ml-auto pr-4 pl-4 sm:pr-6 sm:pl-6">

<div className="overflow-hidden animate-fade-in-up delay-700 bg-black/30 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/10"></div>
<div className="absolute -top-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl"></div>

<div className="grid grid-cols-3 gap-3 opacity-60">
<div className="aspect-square rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center animate-pulse" style={{animationDelay: '0s', animationDuration: '2s'}}>
<svg className="h-5 w-5 text-sky-400/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<div className="aspect-square rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center animate-pulse" style={{animationDelay: '0.3s', animationDuration: '2s'}}>
<svg className="h-5 w-5 text-sky-400/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<div className="aspect-square rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center animate-pulse" style={{animationDelay: '0.6s', animationDuration: '2s'}}>
<svg className="h-5 w-5 text-sky-400/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
</div>

<div className="relative mt-6 flex items-center justify-center">
<div className="relative h-48 w-full">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="h-20 w-20 rounded-full border-2 border-sky-400/50 bg-gradient-to-b from-sky-500/20 to-sky-500/5 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(56,189,248,0.6)]" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-sky-100">
              500+
            </div>
<div className="text-[10px] text-sky-400">APIs</div>
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{width: '180px', height: '180px'}}>

<div className="absolute left-1/2 top-1/2 -ml-5 -mt-5" style={{animation: 'orbit-1 12s linear infinite'}}>
<div className="h-10 w-10 rounded-lg border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -ml-5 -mt-5" style={{animation: 'orbit-2 12s linear infinite'}}>
<div className="h-10 w-10 rounded-lg border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center">
<svg className="text-cyan-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
</svg>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -ml-5 -mt-5" style={{animation: 'orbit-3 12s linear infinite'}}>
<div className="h-10 w-10 rounded-lg border border-violet-500/40 bg-violet-500/10 flex items-center justify-center">
<svg className="text-violet-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -ml-5 -mt-5" style={{animation: 'orbit-4 12s linear infinite'}}>
<div className="h-10 w-10 rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 flex items-center justify-center">
<svg className="text-fuchsia-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
</div>
</div>

<svg className="absolute inset-0 pointer-events-none" height="100%" width="100%">
<defs>
</defs>
<line className="connection-line" stroke="url(#line-gradient-1)" stroke-dasharray="4 4" strokeWidth="1.5" style={{animation: 'dash-flow 2s linear infinite'}}>
<animate attributename="x1" dur="12s" repeatcount="indefinite" values="50%;50%;50%"></animate>
<animate attributename="y1" dur="12s" repeatcount="indefinite" values="50%;50%;50%"></animate>
<animate attributename="x2" dur="12s" repeatcount="indefinite"></animate>
<animate attributename="y2" dur="12s" repeatcount="indefinite"></animate>
</line>
</svg>

<div className="data-particle" style={{animation: 'flow-particle-1 4s ease-in-out infinite'}}></div>
<div className="data-particle" style={{animation: 'flow-particle-2 4s ease-in-out infinite 1s'}}></div>
<div className="data-particle" style={{animation: 'flow-particle-3 4s ease-in-out infinite 2s'}}></div>
<div className="data-particle" style={{animation: 'flow-particle-4 4s ease-in-out infinite 3s'}}></div>
</div>
</div>

<div className="mt-6 space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400">Popular Apps</span>
<span className="text-sky-300 transition-all" style={{animation: 'fade-in-out 2s ease-in-out infinite'}}>120+</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400">API Endpoints</span>
<span className="text-zinc-200 transition-all" style={{animation: 'fade-in-out 2s ease-in-out infinite 0.5s'}}>850+</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400">Custom Webhooks</span>
<span className="text-emerald-400 transition-all" style={{animation: 'fade-in-out 2s ease-in-out infinite 1s'}}>Unlimited</span>
</div>
</div>
<style>
    @keyframes orbit-1 {
      from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
    }
    
    @keyframes orbit-2 {
      from { transform: rotate(90deg) translateX(90px) rotate(-90deg); }
      to { transform: rotate(450deg) translateX(90px) rotate(-450deg); }
    }
    
    @keyframes orbit-3 {
      from { transform: rotate(180deg) translateX(90px) rotate(-180deg); }
      to { transform: rotate(540deg) translateX(90px) rotate(-540deg); }
    }
    
    @keyframes orbit-4 {
      from { transform: rotate(270deg) translateX(90px) rotate(-270deg); }
      to { transform: rotate(630deg) translateX(90px) rotate(-630deg); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 40px -10px rgba(56,189,248,0.6); }
      50% { box-shadow: 0 0 60px 0px rgba(56,189,248,0.9); }
    }
    
    @keyframes dash-flow {
      0% { stroke-dashoffset: 8; }
      100% { stroke-dashoffset: 0; }
    }
    
    .data-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(56,189,248,0.8);
      opacity: 0;
    }
    
    @keyframes flow-particle-1 {
      0% { top: 24px; left: 50%; opacity: 0; }
      25% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      75% { opacity: 0.5; }
      100% { top: 50%; left: calc(50% + 90px); opacity: 0; }
    }
    
    @keyframes flow-particle-2 {
      0% { top: 50%; left: calc(50% + 90px); opacity: 0; }
      25% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      75% { opacity: 0.5; }
      100% { top: calc(50% + 90px); left: 50%; opacity: 0; }
    }
    
    @keyframes flow-particle-3 {
      0% { top: calc(50% + 90px); left: 50%; opacity: 0; }
      25% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      75% { opacity: 0.5; }
      100% { top: 50%; left: calc(50% - 90px); opacity: 0; }
    }
    
    @keyframes flow-particle-4 {
      0% { top: 50%; left: calc(50% - 90px); opacity: 0; }
      25% { opacity: 1; }
      50% { top: 50%; left: 50%; opacity: 1; }
      75% { opacity: 0.5; }
      100% { top: 24px; left: 50%; opacity: 0; }
    }
    
    @keyframes fade-in-out {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
  </style>
</div>

<div className="overflow-hidden animate-fade-in-up delay-800 bg-black/30 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/10"></div>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
<span className="text-sm font-medium text-zinc-200">AI Assistant</span>
</div>
<span className="text-xs text-zinc-500">Live</span>
</div>
<div className="relative">
<div className="mx-auto w-full max-w-sm">
<div className="relative mx-auto h-40 w-full">

<div className="animate-pulse border-white/10 border rounded-xl absolute top-6 right-0 bottom-0 left-0" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
<div className="absolute inset-0 top-3 rounded-xl border border-white/10 bg-white/[0.03] animate-pulse" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
<div className="animate-pulse border-white/10 border rounded-xl absolute top-0 right-0 bottom-0 left-0" style={{animationDuration: '3s', animationDelay: '0.4s'}}></div>
<div className="-top-2 -translate-x-1/2 animate-pulse bg-sky-400/80 w-2 h-2 rounded-full absolute left-1/2"></div>
<div className="flex h-full z-10 relative items-center justify-center" style={{animation: 'float-up 4s ease-in-out infinite'}}>
<div className="mx-auto w-full max-w-xs rounded-lg border border-white/10 bg-black/50 px-4 py-3 backdrop-blur" style={{animation: 'scale-pulse 3s ease-in-out infinite'}}>
<div className="flex items-center gap-2 text-[13px] text-sky-200 mb-1">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'rotate-sparkle 4s linear infinite'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
<span className="font-medium">Best practices for CI/CD?</span>
</div>
<p className="text-[13.5px] text-zinc-300 leading-relaxed">
                      Implement automated testing, deploy frequently, monitor
                      metrics.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 text-center mt-40 gap-x-2 gap-y-2">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 transition-all duration-300 hover:bg-white/[0.05] hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out 0.2s both'}}>
<div className="text-sm font-semibold text-zinc-100">2.4s</div>
<div className="text-[10px] text-zinc-500">Avg Response</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 transition-all duration-300 hover:bg-white/[0.05] hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out 0.4s both'}}>
<div className="text-sm font-semibold text-emerald-400">98.9%</div>
<div className="text-[10px] text-zinc-500">Accuracy</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 transition-all duration-300 hover:bg-white/[0.05] hover:scale-105" style={{animation: 'fade-in-up 0.6s ease-out 0.6s both'}}>
<div className="text-sm font-semibold text-sky-300">24/7</div>
<div className="text-[10px] text-zinc-500">Available</div>
</div>
</div>
<style>
            @keyframes float-up {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            
            @keyframes scale-pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
            }
            
            @keyframes rotate-sparkle {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          </style>
</div>

<div className="overflow-hidden animate-fade-in-up delay-900 bg-black/30 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-px rounded-2xl ring-1 ring-inset ring-white/10"></div>

<div className="border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3">
<div className="relative h-56 rounded-lg overflow-hidden bg-gradient-to-b from-[#0b0c10] to-[#0b0c10] border border-white/5">

<div className="absolute left-[18%] top-[55%] h-6 w-6 rounded-full border border-white/5 opacity-70 animate-pulse"></div>
<div className="absolute left-[60%] top-[18%] h-4 w-4 rounded-full border border-white/5 opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>

<svg aria-hidden="true" className="absolute inset-0 w-full h-full" viewbox="0 0 800 400">

<line className="" stroke="rgba(148,163,184,0.28)" stroke-dasharray="300" stroke-dashoffset="300" strokeLinecap="round" strokeWidth="6" x1="260" x2="520" y1="170" y2="220">
<animate attributename="stroke-dashoffset" dur="2s" fill="freeze" from="300" repeatcount="indefinite" to="0"></animate>
</line>

<circle cx="360" cy="190" fill="#0b0c10" r="12" stroke="rgba(148,163,184,0.35)" strokeWidth="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="12;16;12"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.6;1"></animate>
</circle>
<circle cx="395" cy="200" fill="#0b0c10" r="10" stroke="rgba(148,163,184,0.35)" strokeWidth="3">
<animate attributename="r" begin="0.3s" dur="2s" repeatcount="indefinite" values="10;14;10"></animate>
<animate attributename="opacity" begin="0.3s" dur="2s" repeatcount="indefinite" values="1;0.6;1"></animate>
</circle>

<circle className="" cx="200" cy="120" fill="#0b0c10" r="70" stroke="rgba(148,163,184,0.28)" strokeWidth="3">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="70;75;70"></animate>
</circle>
<circle className="" cx="200" cy="120" fill="none" r="60" stroke="rgba(148,163,184,0.12)" strokeWidth="1.5">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="60;65;60"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.3;0.8;0.3"></animate>
</circle>

<circle className="" cx="570" cy="260" fill="#0b0c10" r="120" stroke="rgba(148,163,184,0.28)" strokeWidth="3">
<animate attributename="r" begin="0.5s" dur="3s" repeatcount="indefinite" values="120;125;120"></animate>
</circle>
<circle cx="570" cy="260" fill="none" r="105" stroke="rgba(148,163,184,0.12)" strokeWidth="1.5">
<animate attributename="r" begin="0.5s" dur="3s" repeatcount="indefinite" values="105;110;105"></animate>
<animate attributename="opacity" begin="0.5s" dur="3s" repeatcount="indefinite" values="0.3;0.8;0.3"></animate>
</circle>

<circle fill="rgba(148,163,184,0.8)" r="4">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
<circle fill="rgba(148,163,184,0.8)" r="4">
<animate attributename="opacity" begin="1s" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
<circle fill="rgba(148,163,184,0.8)" r="4">
<animate attributename="opacity" begin="2s" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
</svg>

<div className="transition-transform hover:scale-110 absolute" style={{left: '25%', top: '35%', transform: 'translate(-50%, -50%)'}}>
<svg className="animate-pulse w-[28px] h-[28px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 212, 216)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<div className="transition-transform hover:scale-110 absolute" style={{left: '71.25%', top: '60%', transform: 'translate(-50%, -50%)'}}>
<svg className="animate-pulse w-[40px] h-[40px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0.5s', width: '40px', height: '40px', color: 'rgb(212, 212, 216)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle className="" cx="4" cy="20" r="2"></circle>
</svg>
</div>
</div>
</div>

<div className="mt-5">
<h3 className="text-2xl tracking-tight font-semibold text-zinc-100">
      AI Strategy Consulting
    </h3>
<p className="mt-2 text-[13.5px] leading-7 text-zinc-400">
      Get expert guidance to implement AI solutions that drive business growth
    </p>
</div>
</div>
</section>
</main>



<header className="sm:px-8 sm:pt-20 animate-fade-in-right delay-200 max-w-7xl mr-auto ml-auto pt-14 pr-6 pl-6">
<h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight font-semibold text-white">
        Real-time insights
      </h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-3xl">
        Track every metric that matters. Visual dashboards powered by live data
        streams give you instant visibility into system health and team
        velocity.
      </p>
</header>
<section className="sm:px-8 sm:mt-14 animate-scale-in delay-400 max-w-7xl mt-10 mr-auto ml-auto pr-6 pl-6">
<div className="sm:p-6 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative">

<div className="grid grid-cols-3 gap-3 mb-8">
<button className="step-button active rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-center py-2 text-xs text-zinc-400 tracking-wide transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" data-step="1">STEP 1</button>
<button className="step-button rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-center py-2 text-xs text-zinc-400 tracking-wide transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" data-step="2">STEP 2</button>
<button className="step-button rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-center py-2 text-xs text-zinc-400 tracking-wide transition-all duration-300 hover:bg-white/[0.15] hover:border-white/30 cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" data-step="3">STEP 3</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 overflow-visible gap-x-10 gap-y-10 items-center">

<div className="relative overflow-visible" style={{maskImage: 'none', WebkitMaskImage: 'none'}}>
<div className="transition-all duration-500 ease-in-out overflow-visible" id="visual-container">

<div className="step-content step-1 active overflow-visible" style={{animation: '0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal forwards running floatCardIn'}}>
<div className="sm:p-7 overflow-visible bg-[#111016] ring-white/5 ring-1 rounded-[28px] pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)]">
<div className="rounded-2xl bg-[#16141c] ring-1 ring-white/5 p-4 sm:p-5">
<div className="rounded-xl bg-[#1a1822] ring-1 ring-white/5 p-3 sm:p-4">
<div className="relative h-44 sm:h-56">
<div className="absolute inset-0">
<canvas className="w-full h-full" id="overviewLine1"></canvas>
</div>
<div className="pointer-events-none absolute bottom-2 left-3 right-3 flex justify-between text-[10px] text-zinc-500">
<span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
</div>
</div>
</div>
</div>
<div className="absolute left-0 right-0 overflow-visible z-20" style={{bottom: '-100px'}}>
<div className="sm:w-[420px] bg-white/10 w-full ring-white/20 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-[0_40px_80px_-15px_rgba(139,92,246,0.4)]">
<div className="flex items-center justify-between">
<p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Growth &amp; Efficiency Driven by AI</p>
<span className="text-[10px] text-zinc-500">Score</span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/[0.08] backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Marketing &amp; ads</span>
<span className="text-[11px] text-zinc-400">84%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-cyan-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">AI Automation</span>
<span className="text-[11px] text-zinc-400">94%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/[0.08] backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Money &amp; Finance</span>
<span className="text-[11px] text-zinc-400">88%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-2 rounded-full bg-zinc-300/80" style={{width: '88%'}}></div>
</div>
</div>
</div>
<div className="mt-3 border-t border-white/10 pt-3">
<div className="flex items-center justify-between text-[11px] text-zinc-500">
<span>Last updated</span>
<span>Just now</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-content step-2 overflow-visible">
<div className="sm:p-7 bg-[#111016] ring-white/5 ring-1 rounded-[28px] pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] overflow-visible">
<div className="rounded-2xl bg-[#16141c] ring-1 ring-white/5 p-4 sm:p-5">
<div className="rounded-xl bg-[#1a1822] ring-1 ring-white/5 p-3 sm:p-4">
<div className="relative h-44 sm:h-56 flex items-center justify-center">
<svg className="w-48 h-48" viewbox="0 0 200 200">
<defs>
</defs>
<circle cx="100" cy="100" fill="none" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="12"></circle>
<circle cx="100" cy="100" fill="none" r="80" stroke="url(#grad1)" stroke-dasharray="502" stroke-dashoffset="125" strokeLinecap="round" strokeWidth="12" transform="rotate(-90 100 100)"></circle>
<text fill="#fff" fontSize="32" font-weight="600" text-anchor="middle" x="100" y="95">75%</text>
<text fill="#a1a1aa" fontSize="12" text-anchor="middle" x="100" y="115">Complete</text>
</svg>
</div>
</div>
</div>
<div className="absolute left-0 right-0 overflow-visible z-20" style={{bottom: '-100px'}}>
<div className="sm:w-[420px] bg-white/10 w-full ring-white/20 ring-1 rounded-2xl px-4 py-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-[0_40px_80px_-15px_rgba(139,92,246,0.4)]">
<div className="flex items-center justify-between mb-3">
<p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Task Completion Status</p>
<span className="text-[10px] text-emerald-400">● Active</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 backdrop-blur-sm ring-1 ring-emerald-400/30 flex items-center justify-center shrink-0">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="flex-1">
<div className="text-[12px] text-zinc-300">Database Setup</div>
<div className="text-[10px] text-zinc-500">Completed 2 hours ago</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-500/10 backdrop-blur-sm ring-1 ring-blue-400/30 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="flex-1">
<div className="text-[12px] text-zinc-300">API Integration</div>
<div className="text-[10px] text-zinc-500">In progress - 65% done</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-zinc-500/10 backdrop-blur-sm ring-1 ring-zinc-400/30 flex items-center justify-center shrink-0">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex-1">
<div className="text-[12px] text-zinc-300">Deployment</div>
<div className="text-[10px] text-zinc-500">Pending</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-content step-3 overflow-visible">
<div className="sm:p-7 bg-[#111016] ring-white/5 ring-1 rounded-[28px] pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] overflow-visible">
<div className="rounded-2xl bg-[#16141c] ring-1 ring-white/5 p-4 sm:p-5">
<div className="rounded-xl bg-[#1a1822] ring-1 ring-white/5 p-3 sm:p-4">
<div className="relative h-44 sm:h-56 flex items-center justify-center">

<svg className="w-full h-full absolute inset-0" viewbox="0 0 300 220">
<defs>
</defs>

<line stroke="rgba(167,139,250,0.3)" stroke-dasharray="5,5" strokeWidth="2" x1="150" x2="70" y1="50" y2="110">
<animate attributename="stroke-dashoffset" dur="1s" from="0" repeatcount="indefinite" to="-10"></animate>
</line>
<line stroke="rgba(167,139,250,0.3)" stroke-dasharray="5,5" strokeWidth="2" x1="150" x2="230" y1="50" y2="110">
<animate attributename="stroke-dashoffset" dur="1s" from="0" repeatcount="indefinite" to="-10"></animate>
</line>
<line stroke="rgba(167,139,250,0.3)" stroke-dasharray="5,5" strokeWidth="2" x1="70" x2="230" y1="110" y2="110">
<animate attributename="stroke-dashoffset" dur="1s" from="0" repeatcount="indefinite" to="-10"></animate>
</line>
<line stroke="rgba(167,139,250,0.3)" stroke-dasharray="5,5" strokeWidth="2" x1="70" x2="150" y1="110" y2="170">
<animate attributename="stroke-dashoffset" dur="1s" from="0" repeatcount="indefinite" to="-10"></animate>
</line>
<line stroke="rgba(167,139,250,0.3)" stroke-dasharray="5,5" strokeWidth="2" x1="230" x2="150" y1="110" y2="170">
<animate attributename="stroke-dashoffset" dur="1s" from="0" repeatcount="indefinite" to="-10"></animate>
</line>

<g filter="url(#glow)">

<circle cx="150" cy="50" fill="rgba(139,92,246,0.2)" r="18" stroke="rgb(167,139,250)" strokeWidth="2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="18;20;18"></animate>
</circle>
<circle cx="150" cy="50" fill="rgb(167,139,250)" r="8">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>

<circle cx="70" cy="110" fill="rgba(139,92,246,0.2)" r="16" stroke="rgb(167,139,250)" strokeWidth="2">
<animate attributename="r" begin="0.5s" dur="2s" repeatcount="indefinite" values="16;18;16"></animate>
</circle>
<circle cx="70" cy="110" fill="rgb(167,139,250)" r="7">
<animate attributename="opacity" begin="0.5s" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>

<circle cx="230" cy="110" fill="rgba(139,92,246,0.2)" r="16" stroke="rgb(167,139,250)" strokeWidth="2">
<animate attributename="r" begin="1s" dur="2s" repeatcount="indefinite" values="16;18;16"></animate>
</circle>
<circle cx="230" cy="110" fill="rgb(167,139,250)" r="7">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>

<circle cx="150" cy="170" fill="rgba(139,92,246,0.3)" r="22" stroke="rgb(167,139,250)" strokeWidth="3">
<animate attributename="r" begin="1.5s" dur="2s" repeatcount="indefinite" values="22;25;22"></animate>
</circle>
<circle cx="150" cy="170" fill="rgb(167,139,250)" r="10">
<animate attributename="opacity" begin="1.5s" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</g>

<circle fill="rgb(167,139,250)" r="3">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
<circle fill="rgb(139,92,246)" r="3">
<animate attributename="opacity" begin="1s" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
<circle fill="rgb(196,181,253)" r="3">
<animate attributename="opacity" begin="2s" dur="3s" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>

<path d="M 150,50 L 70,110 L 150,170" fill="none" id="path1"></path>
<path d="M 150,50 L 230,110 L 150,170" fill="none" id="path2"></path>
<path d="M 70,110 L 230,110" fill="none" id="path3"></path>
</svg>
</div>
</div>
</div>
<div className="absolute left-0 right-0 overflow-visible z-20" style={{bottom: '-100px'}}>
<div className="sm:w-[420px] bg-white/10 w-full ring-white/20 ring-1 rounded-2xl px-4 py-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-[0_40px_80px_-15px_rgba(139,92,246,0.4)]">
<div className="flex items-center justify-between mb-3">
<p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Network Performance</p>
<span className="text-[10px] text-violet-400">● Live</span>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/[0.05] backdrop-blur-sm ring-1 ring-white/20 p-3 text-center">
<div className="text-lg font-semibold text-white">142ms</div>
<div className="text-[10px] text-zinc-500 mt-1">Latency</div>
</div>
<div className="rounded-lg bg-white/[0.05] backdrop-blur-sm ring-1 ring-white/20 p-3 text-center">
<div className="text-lg font-semibold text-violet-400">4.2k</div>
<div className="text-[10px] text-zinc-500 mt-1">Requests</div>
</div>
<div className="rounded-lg bg-white/[0.05] backdrop-blur-sm ring-1 ring-white/20 p-3 text-center">
<div className="text-lg font-semibold text-emerald-400">99.8%</div>
<div className="text-[10px] text-zinc-500 mt-1">Uptime</div>
</div>
</div>
<div className="mt-3 border-t border-white/10 pt-3">
<div className="flex items-center justify-between text-[11px] text-zinc-500">
<span>Network Status</span>
<span>All systems operational</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pl-0 lg:pl-6" id="text-container">

<div className="text-content text-1 active">
<div className="text-xs text-zinc-500">01</div>
<div className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-2 relative mt-2 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<span className="absolute inset-0 blur-xl rounded-full" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(34,211,238,0.25), transparent)'}}></span>
<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-sm">
<svg className="w-5 h-5 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
</div>
<h2 className="mt-6 text-3xl sm:text-5xl tracking-tight font-semibold text-white">
            Monitor Every Metric That Matters
          </h2>
<p className="sm:text-lg text-base text-zinc-400 max-w-xl mt-4">Live dashboards connect directly to your infrastructure. Track performance, detect anomalies, and respond instantly with data-driven confidence.</p>
<div className="mt-7">
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 text-xs font-normal rounded-full relative">Explore Analytics</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div className="text-content text-2">
<div className="text-xs text-zinc-500">02</div>
<div className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-2 relative mt-2 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<span className="absolute inset-0 blur-xl rounded-full" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.25), transparent)'}}></span>
<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-sm">
<svg className="w-5 h-5 text-violet-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
</div>
<h2 className="mt-6 text-3xl sm:text-5xl tracking-tight font-semibold text-white">
            Track Progress in Real-Time
          </h2>
<p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl">
            Visual progress indicators and status updates keep your entire team aligned. Know exactly where every task stands at a glance.
          </p>
<div className="mt-7">
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 text-xs font-normal rounded-full relative">View Dashboard</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div className="text-content text-3">
<div className="text-xs text-zinc-500">03</div>
<div className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-2 relative mt-2 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<span className="absolute inset-0 blur-xl rounded-full" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(167,139,250,0.25), transparent)'}}></span>
<div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-sm">
<svg className="w-5 h-5 text-violet-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2"></circle><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
</div>
</div>
<h2 className="mt-6 text-3xl sm:text-5xl tracking-tight font-semibold text-white">
            Network Performance Insights
          </h2>
<p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl">
            Real-time network topology visualization shows data flow across your infrastructure. Monitor latency, throughput, and system health at every node.
          </p>
<div className="mt-7">
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 text-xs font-normal rounded-full relative">See Network</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</div>
</div>

<div className="h-24"></div>
<style>
    .step-button {
      position: relative;
    }
    
    .step-button.active {
      background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.2));
      border-color: rgba(139,92,246,0.6);
      color: rgba(255,255,255,0.9);
    }
    
    .step-button.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(139,92,246,1), transparent);
      box-shadow: 0 0 12px rgba(139,92,246,0.8);
    }
    
    .step-content {
      display: none;
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .step-content.active {
      display: block;
      opacity: 1;
      transform: scale(1);
    }
    
    .text-content {
      display: none;
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
    }
    
    .text-content.active {
      display: block;
      opacity: 1;
      transform: translateX(0);
    }
    
    .step-content.active > div > div:first-child {
      animation: floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes floatCardIn {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>

</div>
<style>
    .step-button {
      position: relative;
    }
    
    .step-button.active {
      background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.15));
      border-color: rgba(139,92,246,0.5);
      color: rgba(255,255,255,0.9);
    }
    
    .step-button.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(139,92,246,1), transparent);
      box-shadow: 0 0 12px rgba(139,92,246,0.8);
    }
    
    .step-content {
      display: none;
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .step-content.active {
      display: block;
      opacity: 1;
      transform: scale(1);
    }
    
    .text-content {
      display: none;
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
    }
    
    .text-content.active {
      display: block;
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Intersection Observer Animation */
    .step-content.active > div > div:first-child {
      animation: floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes floatCardIn {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>

</section>





<section className="pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="md:p-16 overflow-hidden border-white/10 border rounded-3xl px-12 py-12 relative">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Trusted by high-velocity teams
              </h2>
<p className="text-lg text-zinc-400">
                Organizations shipping faster with Flux every day
              </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 md:gap-12">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                  25k+
                </div>
<div className="text-sm text-zinc-400">Developers</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                  8.2M
                </div>
<div className="text-sm text-zinc-400">API requests/day</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                  99.99%
                </div>
<div className="text-sm text-zinc-400">Uptime SLA</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-transparent">
                  180+
                </div>
<div className="text-sm text-zinc-400">Countries</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-blur-in delay-800 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1a401b59-1e26-40af-b960-f586f11c83e3_3840w.webp)] bg-cover pt-24 pb-24 md:pb-64 relative" style={{maskImage: 'linear-gradient(270deg, transparent, black 35%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(270deg, transparent, black 35%, black 100%, transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="mb-4">
<h2 className="text-[44px] sm:text-xl lg:text-7xl font-semibold tracking-tight">
<span className="text-white">
              Testimonials
            </span>
</h2>
<p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Trusted by teams worldwide who ship faster with Flux
          </p>
</div>

<div className="space-y-6">

<div className="relative overflow-hidden hidden md:block">

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-40 sm:w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-40 sm:w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10"></div>
<div className="flex w-[200%] gap-6 will-change-transform" style={{animation: 'ticker-move 48s linear infinite', animationDirection: 'reverse'}}>

<div className="flex shrink-0 gap-6">

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Flux transformed our deployment pipeline. We went from
                      weekly releases to shipping multiple times per day with
                      complete confidence."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/787e2344-3f85-4363-8310-e17766fc9f61_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Maya
                        <span className="text-fuchsia-300">Rodriguez</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        VP Engineering — Quantum Labs
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "The AI automation alone has saved our team 15+ hours
                      every week. Absolutely game-changing."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8996ab12-550b-417f-859c-e60383fc6ce0_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Taylor
                        <span className="text-fuchsia-300">Kim</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        CTO — Helix Systems
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Best developer experience I've encountered. Flux makes
                      complex workflows feel effortless."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dd395f37-778e-426f-9685-a0a3d48a3c14_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Jordan
                        <span className="text-fuchsia-300">Park</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Lead Developer — Prism AI
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Infrastructure costs down 40% while handling 3x the
                      traffic. The performance gains are incredible."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5fe45363-dc90-4109-807a-3fefa11826ac_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Riley
                        <span className="text-fuchsia-300">Chen</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Head of Platform — Atlas Digital
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Onboarding was seamless and support is phenomenal. We
                      were production-ready in under 48 hours."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ebf98776-9b0f-49cd-a030-c0ce87f6abe5_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Alex
                        <span className="text-fuchsia-300">Morgan</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Technical Lead — Cipher Labs
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Real-time analytics changed how we make decisions.
                      Data-driven insights at every level."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4618126b-8a10-4e68-ab3d-91fcf5fea504_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Casey
                        <span className="text-fuchsia-300">Lee</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Product Director — Pulse Networks
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Security-first architecture without sacrificing developer
                      velocity. Perfect balance."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1539de7e-4610-498e-924c-f475f92a9a74_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Morgan
                        <span className="text-fuchsia-300">Davis</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Security Lead — Velocity Inc
                      </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Scales effortlessly from prototype to enterprise. Built
                      for growth from day one."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8af5e860-0834-42ee-9c28-7a688c9c1907_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Quinn
                        <span className="text-fuchsia-300">Taylor</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Co-Founder — Apex Ventures
                      </div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex shrink-0 gap-6">
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Flux transformed our deployment pipeline. We went from
                      weekly releases to shipping multiple times per day with
                      complete confidence."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d6224ed7-9233-425c-968a-2fb3fa272849_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Maya
                        <span className="text-fuchsia-300">Rodriguez</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        VP Engineering — Quantum Labs
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "The AI automation alone has saved our team 15+ hours
                      every week. Absolutely game-changing."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Taylor
                        <span className="text-fuchsia-300">Kim</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        CTO — Helix Systems
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Best developer experience I've encountered. Flux makes
                      complex workflows feel effortless."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Jordan
                        <span className="text-fuchsia-300">Park</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Lead Developer — Prism AI
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Infrastructure costs down 40% while handling 3x the
                      traffic. The performance gains are incredible."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Riley
                        <span className="text-fuchsia-300">Chen</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Head of Platform — Atlas Digital
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Onboarding was seamless and support is phenomenal. We
                      were production-ready in under 48 hours."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Alex
                        <span className="text-fuchsia-300">Morgan</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Technical Lead — Cipher Labs
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Real-time analytics changed how we make decisions.
                      Data-driven insights at every level."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Casey
                        <span className="text-fuchsia-300">Lee</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Product Director — Pulse Networks
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Security-first architecture without sacrificing developer
                      velocity. Perfect balance."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Morgan
                        <span className="text-fuchsia-300">Davis</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Security Lead — Velocity Inc
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-[300px] min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                      "Scales effortlessly from prototype to enterprise. Built
                      for growth from day one."
                    </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                        Quinn
                        <span className="text-fuchsia-300">Taylor</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                        Co-Founder — Apex Ventures
                      </div>
</div>
</div>
</div>
</div>
</div>
<style>
              @keyframes ticker-move {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            </style>
</div>

<div className="md:hidden space-y-4 max-h-[600px] overflow-y-auto pr-2" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent'}}>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Flux transformed our deployment pipeline. We went from
                  weekly releases to shipping multiple times per day with
                  complete confidence."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/787e2344-3f85-4363-8310-e17766fc9f61_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Maya
                    <span className="text-fuchsia-300">Rodriguez</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    VP Engineering — Quantum Labs
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "The AI automation alone has saved our team 15+ hours
                  every week. Absolutely game-changing."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8996ab12-550b-417f-859c-e60383fc6ce0_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Taylor
                    <span className="text-fuchsia-300">Kim</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    CTO — Helix Systems
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Best developer experience I've encountered. Flux makes
                  complex workflows feel effortless."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dd395f37-778e-426f-9685-a0a3d48a3c14_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Jordan
                    <span className="text-fuchsia-300">Park</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Lead Developer — Prism AI
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Infrastructure costs down 40% while handling 3x the
                  traffic. The performance gains are incredible."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5fe45363-dc90-4109-807a-3fefa11826ac_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Riley
                    <span className="text-fuchsia-300">Chen</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Head of Platform — Atlas Digital
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Onboarding was seamless and support is phenomenal. We
                  were production-ready in under 48 hours."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ebf98776-9b0f-49cd-a030-c0ce87f6abe5_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Alex
                    <span className="text-fuchsia-300">Morgan</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Technical Lead — Cipher Labs
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Real-time analytics changed how we make decisions.
                  Data-driven insights at every level."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4618126b-8a10-4e68-ab3d-91fcf5fea504_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Casey
                    <span className="text-fuchsia-300">Lee</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Product Director — Pulse Networks
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Security-first architecture without sacrificing developer
                  velocity. Perfect balance."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1539de7e-4610-498e-924c-f475f92a9a74_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Morgan
                    <span className="text-fuchsia-300">Davis</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Security Lead — Velocity Inc
                  </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 w-full min-h-[240px] flex flex-col shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex-1 flex items-center">
<p className="text-sm text-white leading-relaxed">
                  "Scales effortlessly from prototype to enterprise. Built
                  for growth from day one."
                </p>
</div>
<div className="mt-auto pt-4 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8af5e860-0834-42ee-9c28-7a688c9c1907_3840w.webp"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate text-white">
                    Quinn
                    <span className="text-fuchsia-300">Taylor</span>
</div>
<div className="text-xs text-zinc-300 truncate">
                    Co-Founder — Apex Ventures
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0bcb241d-7f62-4899-8da0-434927914200_3840w.webp)] bg-cover mt-44 mb-24 pt-12 pb-16 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 50%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 50%, black 50%, transparent)'}}>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="overflow-hidden sm:p-16 md:p-20 bg-[#ffffff]/20 border-white/20 border rounded-3xl pt-12 pr-12 pb-12 pl-12 relative backdrop-blur-md">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]"></div>
<div className="relative text-center">
<h2 className="sm:text-5xl md:text-6xl text-4xl font-semibold tracking-tight mb-6">
              Ready to build the future?
            </h2>
<p className="sm:text-xl text-lg text-zinc-50 max-w-2xl mb-10">
              Join thousands of teams shipping faster with intelligent workflow automation
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 hover:bg-zinc-100 transition-colors text-base font-medium text-zinc-900 tracking-tight bg-white rounded-full pt-4 pr-8 pb-4 pl-8" href="#">
                Start building free
                <svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> 12h14"&gt;
                  <path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
<div className="relative inline-block group text-sm rounded-full">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight w-56 rounded-full pt-[16px] pr-[24px] pb-[16px] pl-[24px] relative items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="text-base font-medium z-10 rounded-full relative">Get in touch</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92f8c97d-c6ce-4088-95e1-67dfbfddffa0_1600w.png)] bg-cover rounded-full" href="#"></a>
</div>
<p className="text-sm text-zinc-500">© 2024 Flux. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
