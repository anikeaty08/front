import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Counter animation function
    function animateCounters() {
      const counters = document.querySelectorAll('#aura-emelk8t6w [data-count]');
      
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const suffix = counter.textContent.replace(/[0-9.]/g, '');
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          // Format the number based on the target value
          if (target >= 100 && target < 1000) {
            counter.textContent = Math.floor(current) + suffix;
          } else if (target >= 10) {
            counter.textContent = Math.floor(current) + suffix;
          } else {
            counter.textContent = current.toFixed(1) + suffix;
          }
        }, duration / steps);
      });
    }
    
    // Intersection Observer to trigger animation when in view
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateCounters();
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px'
    });
    
    // Observe the stats container when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const statsContainer = document.getElementById('aura-emelk8t6w');
        if (statsContainer) {
          statsObserver.observe(statsContainer);
        }
      });
    } else {
      const statsContainer = document.getElementById('aura-emelk8t6w');
      if (statsContainer) {
        statsObserver.observe(statsContainer);
      }
    }
  


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Initialize animations
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
          observer.observe(el);
        });

        // 3D Parallax Mouse Tracking
        const appPreviewContainer = document.querySelector('.app-preview-container');
        const customCursor = document.querySelector('.custom-cursor');

        if (appPreviewContainer && customCursor) {
          appPreviewContainer.addEventListener('mousemove', (e) => {
            const rect = appPreviewContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate rotation based on mouse position
            const rotateX = (mouseY / rect.height) * -10; // Max 10 degrees
            const rotateY = (mouseX / rect.width) * 10;   // Max 10 degrees
            
            // Apply smooth 3D transform
            appPreviewContainer.style.transform = `
              perspective(1000px) 
              rotateX(${rotateX}deg) 
              rotateY(${rotateY}deg) 
              translateZ(20px)
            `;
            
            // Update custom cursor position
            customCursor.style.left = `${e.clientX - rect.left}px`;
            customCursor.style.top = `${e.clientY - rect.top}px`;
            
            // Add slight parallax to floating elements based on mouse position
            const floatElements = appPreviewContainer.querySelectorAll('.float-element');
            floatElements.forEach((element, index) => {
              const intensity = (index + 1) * 0.5;
              const translateX = (mouseX / rect.width) * intensity;
              const translateY = (mouseY / rect.height) * intensity;
              
              element.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
          });

          appPreviewContainer.addEventListener('mouseleave', () => {
            // Reset transforms smoothly
            appPreviewContainer.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg) 
              translateZ(0px)
            `;
            
            // Reset floating elements
            const floatElements = appPreviewContainer.querySelectorAll('.float-element');
            floatElements.forEach(element => {
              element.style.transform = 'translate(0px, 0px)';
            });
            
            // Hide custom cursor
            customCursor.style.opacity = '0';
          });

          appPreviewContainer.addEventListener('mouseenter', () => {
            customCursor.style.opacity = '1';
          });
        }

        // Task management functionality
        const taskCheckboxes = document.querySelectorAll('.task-checkbox');
        const progressBar = document.getElementById('progress-fill');
        const progressValue = document.getElementById('progress-value');
        const completedCount = document.getElementById('completed-count');
        const taskCount = document.getElementById('task-count');
        const newTaskBtn = document.getElementById('new-task-btn');
        const lastUpdated = document.getElementById('last-updated');

        // Update progress based on completed tasks
        function updateProgress() {
          const total = taskCheckboxes.length;
          const completed = Array.from(taskCheckboxes).filter(cb => cb.checked).length;
          const percentage = Math.round((completed / total) * 100);
          
          progressBar.style.width = `${percentage}%`;
          progressValue.textContent = percentage;
          completedCount.textContent = completed;
          taskCount.textContent = total;
          
          // Update last updated time
          lastUpdated.textContent = 'just now';
        }

        // Add task checkbox event listeners
        taskCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', (e) => {
            const taskContent = e.target.closest('.task-item').querySelector('.task-content');
            
            if (e.target.checked) {
              taskContent.classList.add('opacity-60');
              taskContent.querySelector('p').classList.add('line-through');
            } else {
              taskContent.classList.remove('opacity-60');
              taskContent.querySelector('p').classList.remove('line-through');
            }
            
            updateProgress();
            
            // Add visual feedback
            e.target.closest('.task-item').style.transform = 'scale(1.02)';
            setTimeout(() => {
              e.target.closest('.task-item').style.transform = 'scale(1)';
            }, 200);
          });
        });

        // New task functionality
        newTaskBtn.addEventListener('click', () => {
          const taskList = document.getElementById('task-list');
          const newTaskHTML = `
            <div class="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05] hover:border-violet-500/30 group opacity-0">
              <input type="checkbox" class="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30">
              <div class="task-content flex-1 min-w-0">
                <p class="text-sm text-white/90">New task created</p>
                <div class="mt-1 flex items-center gap-4 text-xs text-white/60">
                  <span>You</span>
                  <span>Just now</span>
                </div>
              </div>
            </div>
          `;
          
          taskList.insertAdjacentHTML('beforeend', newTaskHTML);
          const newTask = taskList.lastElementChild;
          
          // Animate in
          setTimeout(() => {
            newTask.style.opacity = '1';
          }, 100);
          
          // Add event listener to new checkbox
          const newCheckbox = newTask.querySelector('.task-checkbox');
          newCheckbox.addEventListener('change', (e) => {
            const taskContent = e.target.closest('.task-item').querySelector('.task-content');
            
            if (e.target.checked) {
              taskContent.classList.add('opacity-60');
              taskContent.querySelector('p').classList.add('line-through');
            } else {
              taskContent.classList.remove('opacity-60');
              taskContent.querySelector('p').classList.remove('line-through');
            }
            
            updateProgress();
          });
          
          // Re-initialize task management
          const allCheckboxes = document.querySelectorAll('.task-checkbox');
          taskCount.textContent = allCheckboxes.length;
          updateProgress();
        });

        // AI Assistant functionality
        const aiSuggestions = document.getElementById('ai-suggestions');
        const scheduleBtn = document.getElementById('schedule-sessions-btn');
        const askAiBtn = document.getElementById('ask-ai-btn');
        const dismissBtn = document.getElementById('dismiss-suggestion-btn');

        const aiResponses = [
          "I notice you have 3tasks due this week. Consider prioritizing the high-priority wireframes task to stay on schedule.",
          "Your team velocity suggests you can complete 2 more tasks before Friday. Shall I suggest optimal task assignments?",
          "Based on similar projects, teams typically need 3 days for user testing. I recommend booking sessions now.",
          "The accessibility audit shows great progress! Consider scheduling a review meeting to discuss the findings.",
          "Your project is 68% complete with 8 days remaining. You're slightly ahead of the typical timeline for similar projects."
        ];

        let currentResponseIndex = 0;

        scheduleBtn.addEventListener('click', () => {
          const suggestion = aiSuggestions.querySelector('p');
          suggestion.textContent = "Great! I've found 3 available time slots this week. Would you like me to send calendar invites to your team?";
          scheduleBtn.textContent = 'Send invites';
          scheduleBtn.classList.add('bg-emerald-600/20', 'text-emerald-300');
          scheduleBtn.classList.remove('bg-white/15', 'text-white/80');
        });

        askAiBtn.addEventListener('click', () => {
          currentResponseIndex = (currentResponseIndex + 1) % aiResponses.length;
          const suggestion = aiSuggestions.querySelector('p');
          
          // Simulate typing animation
          suggestion.classList.add('typing-animation');
          suggestion.textContent = '';
          
          setTimeout(() => {
            suggestion.classList.remove('typing-animation');
            suggestion.textContent = `"${aiResponses[currentResponseIndex]}"`;
          }, 1500);
        });

        dismissBtn.addEventListener('click', () => {
          const aiContainer = dismissBtn.closest('div').parentElement;
          aiContainer.style.transform = 'scale(0.95)';
          aiContainer.style.opacity = '0.5';
          
          setTimeout(() => {
            aiContainer.style.transform = 'scale(1)';
            aiContainer.style.opacity = '1';
            const suggestion = aiSuggestions.querySelector('p');
            suggestion.textContent = '"I\'ll be here when you need assistance with your project planning."';
          }, 2000);
        });

        // Enhanced search functionality
        const searchInput = document.querySelector('input[placeholder*="Search"]');
        const searchSuggestions = [
          'Mobile App Redesign',
          'Q4 Strategy.pdf',
          'Brand Redesign',
          'User Research',
          'Maria Garcia',
          'Alex Thompson',
          'Sarah Chen',
          'Team Meeting Notes',
          'Design System'
        ];

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
          clearTimeout(searchTimeout);
          const query = e.target.value.toLowerCase();
          
          if (query.length > 1) {
            searchTimeout = setTimeout(() => {
              const matches = searchSuggestions.filter(item => 
                item.toLowerCase().includes(query)
              );
              
              // Visual feedback
              if (matches.length > 0) {
                e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                e.target.style.boxShadow = '0 0 0 2px rgba(139, 92, 246, 0.2)';
              }
            }, 300);
          } else {
            e.target.style.borderColor = '';
            e.target.style.boxShadow = '';
          }
        });

        // Progress bar click functionality
        const progressBarContainer = document.getElementById('progress-bar');
        progressBarContainer.addEventListener('click', (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const percentage = Math.round((clickX / rect.width) * 100);
          
          progressBar.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`;
          progressValue.textContent = Math.min(Math.max(percentage, 0), 100);
          lastUpdated.textContent = 'just now';
          
          // Visual feedback
          progressBarContainer.style.transform = 'scale(1.02)';
          setTimeout(() => {
            progressBarContainer.style.transform = 'scale(1)';
          }, 150);
        });

        // Calendar interactivity
        const calendarDays = document.querySelectorAll('.grid-cols-7 .h-6');
        calendarDays.forEach(day => {
          if (day.textContent && !isNaN(day.textContent) && day.textContent.trim() !== '') {
            day.addEventListener('click', () => {
              // Remove previous selections
              calendarDays.forEach(d => d.classList.remove('bg-violet-600/40', 'text-white'));
              
              // Add selection
              if (!day.classList.contains('bg-violet-600/30') && 
                  !day.classList.contains('bg-orange-500/20') && 
                  !day.classList.contains('bg-emerald-500/20')) {
                day.classList.add('bg-violet-600/40', 'text-white', 'cursor-pointer');
              }
            });
          }
        });

        // Enhanced hover effects for team members
        const teamMembers = document.querySelectorAll('.flex.items-center.gap-3.hover\\:bg-white\\/5');
        teamMembers.forEach(member => {
          member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateX(4px)';
            member.style.transition = 'transform 0.2s ease';
          });
          
          member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateX(0)';
          });
        });

        // Update timestamps periodically
        setInterval(() => {
          const timestamps = document.querySelectorAll('[id*="updated"], .text-xs:contains("ago")');
          // This would typically connect to a real-time system
        }, 60000); // Update every minute
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-gradient-to-br from-[#0A0A14] via-[#1a0d2e] to-[#0A0A14]"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] opacity-30 animate-fade-in animate-delay-400 animated blur-[100px]" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.4) 0%, rgba(109,40,217,0.25) 35%, rgba(15,23,42,0) 70%)'}}></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-full border border-white/10 bg-white/5/0 backdrop-blur supports-[backdrop-filter]:bg-white/5 animate-fade-in-down animated">
<div className="flex items-center justify-between px-4 py-3">

<a className="flex items-center gap-3" href="#">
<span className="grid h-9 w-9 place-items-center ring-1 ring-white/20 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 rounded-full">
<svg className="lucide lucide-hexagon h-5 w-5 text-white/90" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</span>
<span className="text-[17px] font-medium tracking-tight">Nexus</span>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Updates</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors" href="#">
                Sign in
              </a>
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] ring-1 ring-white/10 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 hover:shadow-[0_12px_40px_rgba(139,92,246,0.45)]" href="#">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Get started
              </a>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-menu h-5 w-5 text-white/80" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative flex flex-col sm:pt-16 lg:pt-20 text-center mr-auto ml-auto pt-12 items-center">

<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 animate-fade-in-up animated">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animated"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>Now with real-time collaboration</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight animate-fade-in-up animate-delay-200 animated">
            Your unified workspace for
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">everything</span>
</h1>
<p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed animate-fade-in-up animate-delay-400 animated">
            Connect ideas, manage projects, and collaborate with your team. The workspace that adapts to how you think and work.
          </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-sm text-white/60 animate-fade-in-up animate-delay-600 animated">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-4 w-4 text-violet-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>50K+ teams worldwide</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe h-4 w-4 text-fuchsia-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>120+ countries</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.9/5 rating</span>
</div>
</div>

<div className="relative mt-16 w-full animate-blur-in animate-delay-1000 animated">

<div className="pointer-events-none absolute inset-x-0 -top-6 mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-fuchsia-500/25 via-violet-500/35 to-indigo-500/25 blur-2xl"></div>
<div className="app-preview-container relative mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] p-3 sm:p-4 shadow-[0_30px_120px_-20px_rgba(139,92,246,0.45)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/[0.03]" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'}}>

<div className="custom-cursor" style={{opacity: '0', left: '1104.05px', top: '373.521px'}}></div>

<div className="parallax-layer-1 window-header flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.08] px-3 py-2.5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06]">
<div className="flex items-center gap-2 float-element float-1" style={{transform: 'translate(0px, 0px)'}}>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70"></span>
</div>
<div className="flex items-center gap-2 w-full max-w-md mx-4 float-element float-2" style={{transform: 'translate(0px, 0px)'}}>
<div className="relative flex-1">
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-white/15 bg-white/[0.08] py-2.5 pl-10 pr-4 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/30 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]" placeholder="Search projects, docs, people..."/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.12] transition-colors backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<svg className="lucide lucide-sparkles h-4 w-4 text-violet-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Ask AI</span>
</button>
</div>
<div className="flex items-center gap-2 float-element float-3" style={{transform: 'translate(0px, 0px)'}}>
<button className="hidden lg:inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] text-white/70 hover:bg-white/[0.12] backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="flex -space-x-2">
<img alt="User" className="h-7 w-7 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d745c35-5c89-45ed-821c-ffaca58883fb_320w.jpg"/>
<img alt="User" className="h-7 w-7 rounded-full ring-2 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/794112a2-89b3-41cb-9c68-582e6af6132f_800w.jpg"/>
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600/20 ring-2 ring-white/20 text-xs text-white/80">+3</span>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

<aside className="parallax-layer-4 sidebar lg:col-span-3 rounded-xl border border-white/15 bg-white/[0.08] p-3 sm:p-4 space-y-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06]">

<div className="flex items-center justify-between pb-3 border-b border-white/15 float-element float-1" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
<svg className="lucide lucide-building-2 h-4 w-4 text-white" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Acme Corp</div>
<div className="text-xs text-white/50">Pro Plan</div>
</div>
</div>
<button className="h-6 w-6 flex items-center justify-center rounded text-white/70 hover:text-white">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<nav className="space-y-1">
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/90 bg-white/[0.12] ring-1 ring-white/15 backdrop-blur-sm float-element float-2" href="#" style={{transform: 'translate(0px, 0px)'}}>
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-violet-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                        Dashboard
                      </span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-sm float-element float-3" href="#" style={{transform: 'translate(0px, 0px)'}}>
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-folder h-4 w-4 text-white/50" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
                        Projects
                      </span>
<span className="text-xs text-white/40 bg-white/15 px-2 py-1 rounded-full backdrop-blur-sm">12</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-sm" href="#">
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-users h-4 w-4 text-white/50" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                        Team
                      </span>
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animated"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-sm" href="#">
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-calendar h-4 w-4 text-white/50" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Calendar
                      </span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-sm" href="#">
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-file-text h-4 w-4 text-white/50" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                        Documents
                      </span>
<span className="text-xs text-white/40 bg-white/15 px-2 py-1 rounded-full backdrop-blur-sm">24</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors backdrop-blur-sm" href="#">
<span className="inline-flex items-center gap-3">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 text-white/50" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        Analytics
                      </span>
</a>
</nav>

<div className="pt-3 border-t border-white/15">
<div className="text-xs text-white/50 mb-3 uppercase tracking-wider">Recent</div>
<div className="space-y-2">
<a className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] backdrop-blur-sm float-element float-4" href="#" style={{transform: 'translate(0px, 0px)'}}>
<svg className="lucide lucide-file h-4 w-4 text-blue-400" data-lucide="file" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
<span className="truncate">Q4 Strategy.pdf</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.08] backdrop-blur-sm" href="#">
<svg className="lucide lucide-presentation h-4 w-4 text-orange-400" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
<span className="truncate">Brand Redesign</span>
</a>
</div>
</div>
</aside>

<main className="parallax-layer-2 main-content lg:col-span-6 rounded-xl border border-white/15 bg-white/[0.08] p-4 sm:p-6 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06]">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 float-element float-1" style={{transform: 'translate(0px, 0px)'}}>
<div className="">
<div className="flex items-center gap-2 text-sm text-white/60">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Updated <span id="last-updated">2 minutes ago</span></span>
</div>
<h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">Mobile App Redesign</h3>
<div className="mt-2 flex items-center gap-4">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-300 backdrop-blur-sm">
<svg className="lucide lucide-play h-3 w-3" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                          In Progress
                        </span>
<span className="text-sm text-white/60">Due Dec 15</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.12] backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05] transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-share h-4 w-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="hidden sm:inline">Share</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-all duration-200 hover:scale-105" id="new-task-btn">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="hidden sm:inline">New task</span>
</button>
</div>
</div>

<div className="mt-6 float-element float-2" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex items-center justify-between text-sm mb-2">
<span className="text-white/70">Project Progress</span>
<span className="text-white/90"><span id="progress-value">68</span>%</span>
</div>
<div className="h-2 bg-white/15 rounded-full overflow-hidden backdrop-blur-sm cursor-pointer" id="progress-bar">
<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500" id="progress-fill" style={{width: '68%'}}></div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="flex items-center justify-between float-element float-3" style={{transform: 'translate(0px, 0px)'}}>
<h4 className="text-sm font-medium text-white/90">Tasks (<span id="task-count">5</span>)</h4>
<div className="flex items-center gap-2 text-xs text-white/60">
<span id="completed-count">2</span> completed
                      </div>
</div>
<div className="space-y-2 float-element float-4" id="task-list" style={{transform: 'translate(0px, 0px)'}}>

<div className="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<input checked="" className="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30 checked:bg-violet-500 checked:border-violet-500" type="checkbox"/>
<div className="task-content flex-1 min-w-0 opacity-60">
<p className="text-sm text-white/90 line-through">Complete user research interviews</p>
<div className="mt-1 flex items-center gap-4 text-xs text-white/60">
<span>Sarah Chen</span>
<span>Completed 3 hours ago</span>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-red-400 transition-all duration-200">
<svg className="lucide lucide-trash-2 h-4 w-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<input checked="" className="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30" type="checkbox"/>
<div className="task-content flex-1 min-w-0 opacity-60">
<p className="text-sm text-white/90 line-through">Design system documentation</p>
<div className="mt-1 flex items-center gap-4 text-xs text-white/60">
<span>Alex Thompson</span>
<span>Completed 1 day ago</span>
</div>
</div>
</div>

<div className="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05] hover:border-violet-500/30 group">
<input className="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30" type="checkbox"/>
<div className="task-content flex-1 min-w-0">
<p className="text-sm text-white/90">Create high-fidelity wireframes</p>
<div className="mt-1 flex items-center gap-4 text-xs text-white/60">
<span>Maria Garcia</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-clock h-3 w-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                              Due tomorrow
                            </span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-300">
<svg className="lucide lucide-flame h-3 w-3" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                            High Priority
                          </span>
</div>
</div>
<div className="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05] hover:border-violet-500/30 group">
<input className="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30" type="checkbox"/>
<div className="task-content flex-1 min-w-0">
<p className="text-sm text-white/90">Prototype user flow testing</p>
<div className="mt-1 flex items-center gap-4 text-xs text-white/60">
<span>Development Team</span>
<span>Due Dec 12</span>
</div>
</div>
</div>
<div className="task-item flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05] hover:border-violet-500/30 group">
<input className="task-checkbox h-4 w-4 rounded border-2 border-white/30 bg-white/10 text-violet-500 focus:ring-violet-500/30" type="checkbox"/>
<div className="task-content flex-1 min-w-0">
<p className="text-sm text-white/90">Accessibility audit and fixes</p>
<div className="mt-1 flex items-center gap-4 text-xs text-white/60">
<span>QA Team</span>
<span>Due Dec 18</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-4 backdrop-blur-sm float-element float-1" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex items-center gap-2 text-sm text-violet-300 mb-3">
<svg className="lucide lucide-brain h-4 w-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
                      AI Assistant
                      <span className="inline-flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-violet-400 opacity-75 animated"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
</div>
<div className="" id="ai-suggestions">
<p className="text-sm text-white/90">"Based on your timeline, I recommend scheduling user testing sessions by December 10th to stay on track."</p>
</div>
<div className="mt-3 flex gap-2">
<button className="text-xs bg-white/15 hover:bg-white/20 px-3 py-1.5 rounded-full text-white/80 backdrop-blur-sm transition-all duration-200 hover:scale-105" id="schedule-sessions-btn">Schedule sessions</button>
<button className="text-xs bg-violet-600/20 hover:bg-violet-600/30 px-3 py-1.5 rounded-full text-violet-300 backdrop-blur-sm transition-all duration-200 hover:scale-105" id="ask-ai-btn">Ask AI</button>
<button className="text-xs text-white/60 hover:text-white/80 transition-colors duration-200" id="dismiss-suggestion-btn">Dismiss</button>
</div>
</div>
</main>

<aside className="parallax-layer-3 right-sidebar lg:col-span-3 space-y-4">

<div className="rounded-xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06] float-element float-1" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium text-white/90">Team Members</h4>
<button className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors cursor-pointer">
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2911b4b5-c0c3-445a-a157-93edee63f9af_320w.jpg" style={{}}/>
<div className="flex-1 min-w-0">
<div className="text-sm text-white/90">Alex Thompson</div>
<div className="text-xs text-white/60">Product Designer</div>
</div>
<div className="flex h-2 w-2">
<div className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animated"></div>
<div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
</div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors cursor-pointer">
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a923c29b-fee0-4c67-9737-34ddbce2dc31_320w.jpg" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="flex-1 min-w-0">
<div className="text-sm text-white/90">Sarah Chen</div>
<div className="text-xs text-white/60">UX Researcher</div>
</div>
<div className="h-2 w-2 rounded-full bg-white/30"></div>
</div>
<div className="flex items-center gap-3 hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors cursor-pointer" style={{transform: 'translateX(0px)'}}>
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/94f325d2-00ce-48ec-9c3d-a87ff77bb836_320w.jpg" style={{}}/>
<div className="flex-1 min-w-0">
<div className="text-sm text-white/90">Maria Garcia</div>
<div className="text-xs text-white/60">Frontend Dev</div>
</div>
<div className="flex h-2 w-2">
<div className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animated"></div>
<div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06] float-element float-2" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex items-center justify-between mb-4">
<div className="">
<div className="text-sm text-white/90 font-medium">December 2024</div>
<div className="text-xs text-white/60">3 upcoming deadlines</div>
</div>
<div className="flex items-center gap-1">
<button className="h-6 w-6 flex items-center justify-center rounded border border-white/15 bg-white/[0.08] text-white/70 hover:bg-white/[0.12] backdrop-blur-sm transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-chevron-left h-3 w-3" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="h-6 w-6 flex items-center justify-center rounded border border-white/15 bg-white/[0.08] text-white/70 hover:bg-white/[0.12] backdrop-blur-sm transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-1 text-center text-xs text-white/50 mb-2">
<span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
</div>
<div className="grid grid-cols-7 gap-1 text-sm">
<span className="h-6 flex items-center justify-center text-white/30">25</span>
<span className="h-6 flex items-center justify-center text-white/30">26</span>
<span className="h-6 flex items-center justify-center text-white/30">27</span>
<span className="h-6 flex items-center justify-center text-white/30">28</span>
<span className="h-6 flex items-center justify-center text-white/30">29</span>
<span className="h-6 flex items-center justify-center text-white/30">30</span>
<span className="h-6 flex items-center justify-center">1</span>
<span className="h-6 flex items-center justify-center">2</span>
<span className="h-6 flex items-center justify-center">3</span>
<span className="h-6 flex items-center justify-center">4</span>
<span className="h-6 flex items-center justify-center">5</span>
<span className="h-6 flex items-center justify-center">6</span>
<span className="h-6 flex items-center justify-center">7</span>
<span className="h-6 flex items-center justify-center rounded-full bg-violet-600/30 text-violet-200 cursor-pointer hover:bg-violet-600/40 transition-colors">8</span>
<span className="h-6 flex items-center justify-center">9</span>
<span className="h-6 flex items-center justify-center">10</span>
<span className="h-6 flex items-center justify-center">11</span>
<span className="h-6 flex items-center justify-center">12</span>
<span className="h-6 flex items-center justify-center">13</span>
<span className="h-6 flex items-center justify-center">14</span>
<span className="h-6 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-300 cursor-pointer hover:bg-orange-500/30 transition-colors">15</span>
<span className="h-6 flex items-center justify-center">16</span>
<span className="h-6 flex items-center justify-center">17</span>
<span className="h-6 flex items-center justify-center">18</span>
<span className="h-6 flex items-center justify-center">19</span>
<span className="h-6 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 cursor-pointer hover:bg-emerald-500/30 transition-colors">20</span>
<span className="h-6 flex items-center justify-center">21</span>
<span className="h-6 flex items-center justify-center">22</span>
<span className="h-6 flex items-center justify-center">23</span>
<span className="h-6 flex items-center justify-center">24</span>
<span className="h-6 flex items-center justify-center">25</span>
<span className="h-6 flex items-center justify-center">26</span>
<span className="h-6 flex items-center justify-center">27</span>
<span className="h-6 flex items-center justify-center">28</span>
<span className="h-6 flex items-center justify-center">29</span>
</div>
</div>

<div className="rounded-xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06] float-element float-3" style={{transform: 'translate(0px, 0px)'}}>
<h4 className="text-sm font-medium text-white/90 mb-3">Quick Actions</h4>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.12] transition-all duration-200 hover:scale-105 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<svg className="lucide lucide-video h-4 w-4 text-blue-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
                        Start meeting
                      </button>
<button className="w-full flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.12] transition-all duration-200 hover:scale-105 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<svg className="lucide lucide-file-plus h-4 w-4 text-violet-400" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
                        Create document
                      </button>
<button className="w-full flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2.5 text-sm text-white/80 hover:bg-white/[0.12] transition-all duration-200 hover:scale-105 backdrop-blur-sm supports-[backdrop-filter]:bg-white/[0.05]">
<svg className="lucide lucide-message-square h-4 w-4 text-emerald-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        Send message
                      </button>
</div>
</div>
</aside>
</div>
</div>
</div>

<div className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-slide-in-left animate-delay-1200 animated">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20">
<svg className="lucide lucide-zap h-5 w-5 text-violet-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
<h4 className="text-lg font-semibold tracking-tight">Lightning Fast</h4>
</div>
<p className="text-sm text-white/70 leading-relaxed">Optimized for speed with instant search, real-time sync, and keyboard shortcuts that keep you in flow.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/50">
<svg className="lucide lucide-gauge h-3 w-3" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span>99.9% uptime guaranteed</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-fade-in-up animate-delay-1400 animated">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600/20">
<svg className="lucide lucide-users-2 h-5 w-5 text-fuchsia-300" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</span>
<h4 className="text-lg font-semibold tracking-tight">Real-time Collaboration</h4>
</div>
<p className="text-sm text-white/70 leading-relaxed">Work together seamlessly with live cursors, instant comments, and synchronized editing across all devices.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/50">
<svg className="lucide lucide-wifi h-3 w-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span>Live collaboration for unlimited users</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 animate-slide-in-right animate-delay-1200 animated">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20">
<svg className="lucide lucide-shield-check h-5 w-5 text-indigo-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<h4 className="text-lg font-semibold tracking-tight">Enterprise Security</h4>
</div>
<p className="text-sm text-white/70 leading-relaxed">Bank-grade encryption, SSO integration, and compliance with SOC 2, GDPR, and HIPAA standards.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/50">
<svg className="lucide lucide-lock h-3 w-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>ISO 27001 certified</span>
</div>
</div>
</div>

<div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up animate-delay-1600 animated mt-16 items-center">
<a className="inline-flex items-center gap-2 ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(139,92,246,0.8)] transition-all duration-300 relative overflow-hidden text-sm font-medium text-white tracking-tight bg-gradient-to-tr from-violet-600 to-fuchsia-600 border-2 rounded-full pt-3 pr-6 pb-3 pl-6" href="#" onmouseenter="this.querySelector('.shine-effect').style.animation='shine 1.5s ease-out infinite'" onmouseleave="this.querySelector('.shine-effect').style.animation='none'" onmouseout="this.style.transform='scale(1)'; this.style.borderColor='rgba(255, 255, 255, 0.3)'; this.querySelector('.lucide-rocket').style.transform='translateX(0px)'" onmouseover="this.style.transform='scale(1.05)'; this.style.borderColor='rgba(255, 255, 255, 0.6)'; this.querySelector('.lucide-rocket').style.transform='translateX(4px)'" style={{borderColor: 'rgba(255, 255, 255, 0.3)', cursor: 'pointer', transform: 'scale(1)'}}>
<div className="shine-effect" style={{content: '""', position: 'absolute', width: '100px', height: '100%', backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%)', top: '0px', left: '-100px', opacity: '0.6', pointerEvents: 'none', animation: 'auto ease 0s 1 normal none running none'}}></div>
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'translateX(0px)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
  Start free 14-day trial
  <style>
    @keyframes shine {
      0% { left: -100px; }
      60% { left: 100%; }
      to { left: 100%; }
    }
  </style>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Watch product demo
            </a>
</div>

<div className="mt-20 text-center animate-fade-in animate-delay-1800 animated">
</div>
</div>
</div>
</section>

<section className="relative mt-32">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Where Teams <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Collaborate</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            From bustling offices to remote workspaces, see how teams around the world use Nexus to stay connected and productive.
          </p>
</div>

<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
<div className="relative group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-violet-500/30 transition-all duration-300">
<img alt="Modern office" className="h-32 sm:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fade-in animate-delay-200 animated" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white font-medium text-sm">Modern Office</h3>
<p className="text-white/80 text-xs">San Francisco HQ</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-violet-500/30 transition-all duration-300">
<img alt="Team meeting" className="h-32 sm:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fade-in animate-delay-400 animated" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f45ce15d-81e2-4b65-88ee-bf4636d661cc_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white font-medium text-sm">Team Meeting</h3>
<p className="text-white/80 text-xs">Collaboration in action</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-violet-500/30 transition-all duration-300">
<img alt="Startup office" className="h-32 sm:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fade-in animate-delay-600 animated" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f41cd27f-b37b-47b1-9488-5df62ac4c335_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white font-medium text-sm">Startup Office</h3>
<p className="text-white/80 text-xs">Fast-paced innovation</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-violet-500/30 transition-all duration-300 hidden sm:block">
<img alt="Remote work" className="h-32 sm:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fade-in animate-delay-800 animated" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41f44e91-a4d8-4042-8253-0c6a79be833b_800w.jpg" style={{}}/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-white font-medium text-sm">Remote Work</h3>
<p className="text-white/80 text-xs">Work from anywhere</p>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6" id="aura-emelk8t6w">
<div className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.04]">
<div className="text-2xl font-semibold text-violet-400 mb-2" data-count="50">0K+</div>
<div className="text-sm text-white/70">Active Teams</div>
</div>
<div className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.04]">
<div className="text-2xl font-semibold text-fuchsia-400 mb-2" data-count="120">0+</div>
<div className="text-sm text-white/70">Countries</div>
</div>
<div className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.04]">
<div className="text-2xl font-semibold text-emerald-400 mb-2" data-count="99.9">0%</div>
<div className="text-sm text-white/70">Uptime</div>
</div>
<div className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.04]">
<div className="text-2xl font-semibold text-orange-400 mb-2" data-count="4.9">0★</div>
<div className="text-sm text-white/70">User Rating</div>
</div>

</div>

<div className="mt-12 text-center">
<div className="flex items-center justify-center gap-3">
<img alt="Sarah Chen" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2911b4b5-c0c3-445a-a157-93edee63f9af_320w.jpg"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Sarah Chen</div>
<div className="text-xs text-white/60">Head of Product, TechCorp</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-32 glass-footer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
<div className="col-span-2 mb-8">
<a className="flex items-center gap-3 mb-6" href="#">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-600 ring-1 ring-white/15 shadow-lg backdrop-blur-sm">
<svg className="lucide lucide-hexagon h-5 w-5 text-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</span>
<span className="text-xl font-semibold tracking-tight text-white">Nexus</span>
</a>
<p className="text-sm text-white/70 max-w-sm leading-relaxed">The unified workspace that adapts to how you think and work. Built for modern teams who demand excellence.</p>
<div className="flex items-center gap-4 mt-6">
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110" href="#">
<svg className="lucide lucide-youtube h-5 w-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors duration-200" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Templates</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Integrations</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">API</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors duration-200" href="#">For Teams</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">For Startups</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Enterprise</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Education</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Non-profit</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Remote Work</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-white/70">
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Documentation</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Blog</a></li>
<li className=""><a className="hover:text-white transition-colors duration-200" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Status</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white transition-colors duration-200" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Press Kit</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Partners</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Investors</a></li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
<div className="max-w-md">
<h4 className="text-lg font-medium text-white mb-2">Stay updated</h4>
<p className="text-sm text-white/70">Get the latest updates, tips, and product announcements delivered to your inbox.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 max-w-md w-full lg:w-auto">
<div className="relative flex-1">
<input className="w-full rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06]" placeholder="Enter your email address" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 hover:shadow-xl hover:scale-105 backdrop-blur-sm">
<span className="">Subscribe</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6 text-sm text-white/60">
<span>© 2024 Nexus Technologies, Inc.</span>
<a className="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors duration-200" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors duration-200" href="#">Cookie Policy</a>
</div>
<div className="flex items-center gap-2 text-xs text-white/50">
<div className="flex h-2 w-2">
<div className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animated"></div>
<div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
</div>
<span>All systems operational</span>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
