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



          (function() {
            const timelineProgress = document.getElementById('timeline-progress');
            const experienceContainer = document.getElementById('experience-container');
            const experienceItems = document.querySelectorAll('.experience-item');
            
            if (!timelineProgress || !experienceContainer || experienceItems.length === 0) return;

            function updateTimelineProgress() {
              const containerRect = experienceContainer.getBoundingClientRect();
              const containerTop = containerRect.top + window.scrollY;
              const containerHeight = containerRect.height;
              const viewportHeight = window.innerHeight;
              const scrollTop = window.scrollY;
              
              // Calculate when the experience section starts to be visible
              const sectionStart = containerTop - viewportHeight + 200; // Start a bit before fully visible
              const sectionEnd = containerTop + containerHeight - 200;
              
              // Calculate progress based on scroll position
              let progress = 0;
              
              if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
                const scrollProgress = (scrollTop - sectionStart) / (sectionEnd - sectionStart);
                progress = Math.min(Math.max(scrollProgress, 0), 1);
              } else if (scrollTop > sectionEnd) {
                progress = 1;
              }
              
              // Update the timeline progress bar height
              const progressHeight = progress * 100;
              timelineProgress.style.height = `${progressHeight}%`;
              
              // Add glow effect when fully visible
              if (progress > 0.1) {
                timelineProgress.style.filter = 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))';
              } else {
                timelineProgress.style.filter = 'none';
              }
              
              // Optional: Highlight current experience item
              experienceItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const isInView = itemRect.top < viewportHeight * 0.7 && itemRect.bottom > viewportHeight * 0.3;
                
                const dot = item.querySelector('.absolute.left-6');
                if (dot) {
                  if (isInView) {
                    dot.style.transform = 'scale(1.2)';
                    dot.style.filter = 'drop-shadow(0 0 8px currentColor)';
                  } else {
                    dot.style.transform = 'scale(1)';
                    dot.style.filter = 'none';
                  }
                }
              });
            }
            
            // Throttle scroll event for better performance
            let ticking = false;
            function handleScroll() {
              if (!ticking) {
                requestAnimationFrame(() => {
                  updateTimelineProgress();
                  ticking = false;
                });
                ticking = true;
              }
            }
            
            // Initialize and set up scroll listener
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', updateTimelineProgress, { passive: true });
            
            // Initial call
            updateTimelineProgress();
          })();
        


      // Initialize Lucide icons
      lucide.createIcons();

      // Scroll Reveal Observer
      const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            scrollRevealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      // Apply scroll reveal to all elements with scroll-reveal class
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        scrollRevealObserver.observe(el);
      });

      // Utility function to show notifications
      function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
              ${type === 'success' ? '<path d="M20 6L9 17l-5-5"></path>' : '<circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line>'}
            </svg>
            <span>${message}</span>
          </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
      }

      // Resume download functionality
      function downloadResume() {
        // Simulate resume download
        showNotification('Resume downloaded successfully!');
        
        // In a real scenario, you would trigger an actual file download
        // const link = document.createElement('a');
        // link.href = '/path/to/resume.pdf';
        // link.download = 'Alex_Chen_Resume.pdf';
        // link.click();
      }

      // Attach resume download to buttons
      document.getElementById('resume-btn').addEventListener('click', downloadResume);
      document.getElementById('mobile-resume-btn').addEventListener('click', () => {
        downloadResume();
        // Close mobile menu
        document.getElementById('mobile-menu').classList.remove('open');
      });

      // Mobile menu functionality
      document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('open');
      });

      document.getElementById('close-mobile-menu').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('open');
      });

      // Close mobile menu when clicking nav links
      document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          document.getElementById('mobile-menu').classList.remove('open');
        });
      });

      // Schedule call modal functionality
      const scheduleModal = document.getElementById('schedule-modal');
      const scheduleForm = document.getElementById('schedule-form');

      // Open modal buttons
      document.getElementById('hero-schedule-btn').addEventListener('click', () => {
        scheduleModal.classList.add('open');
      });

      document.getElementById('footer-schedule-btn').addEventListener('click', () => {
        scheduleModal.classList.add('open');
      });

      document.getElementById('faq-contact-btn').addEventListener('click', () => {
        scheduleModal.classList.add('open');
      });

      // Close modal
      document.getElementById('close-modal').addEventListener('click', () => {
        scheduleModal.classList.remove('open');
      });

      // Close modal when clicking outside
      scheduleModal.addEventListener('click', (e) => {
        if (e.target === scheduleModal) {
          scheduleModal.classList.remove('open');
        }
      });

      // Handle form submission
      scheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(scheduleForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.');
        
        // Close modal and reset form
        scheduleModal.classList.remove('open');
        scheduleForm.reset();
      });

      // Case study buttons functionality
      document.querySelectorAll('.case-study-btn').forEach(button => {
        button.addEventListener('click', () => {
          const projectName = button.dataset.project;
          showNotification(`Opening ${projectName} case study...`);
          
          // In a real scenario, you would navigate to the case study page
          // window.open(`/case-studies/${projectName.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
        });
      });

      // Enhanced smooth scrolling for navigation links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            // Calculate offset to account for sticky header
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });

      // Intersection Observer for animations
      const animatedElements = document.querySelectorAll('.initial-hidden');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('initial-hidden');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => {
        observer.observe(el);
      });

      // Escape key to close modals
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          scheduleModal.classList.remove('open');
          document.getElementById('mobile-menu').classList.remove('open');
        }
      });

      // Accordion script (no frameworks)
      const items = document.querySelectorAll('[data-accordion]');
      items.forEach((item) => {
        const trigger = item.querySelector('[data-accordion-trigger]');
        const panel   = item.querySelector('[data-accordion-panel]');
        const plus    = item.querySelector('[data-plus] svg');

        function setOpen(open) {
          // height/opacity animation via CSS grid trick
          panel.toggleAttribute('data-open', open);
          panel.style.opacity = open ? '1' : '0';
          panel.style.gridTemplateRows = open ? '1fr' : '0fr';
          trigger.setAttribute('aria-expanded', open);
          // rotate the + into ×
          plus.style.transform = open ? 'rotate(45deg)' : 'rotate(0deg)';
        }

        // start closed
        setOpen(false);

        trigger.addEventListener('click', () => {
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          setOpen(!isOpen);
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe></div></div>

<div className="mobile-menu" id="mobile-menu">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-6 border-b border-white/10">
<span className="text-lg font-semibold text-white">Menu</span>
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" id="close-mobile-menu">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col gap-4 p-6">
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" href="#work">Work</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" href="#about">About</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" href="#experience">Experience</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 nav-link" href="#contact">Contact</a>
</nav>
<div className="p-6 mt-auto">
<button className="w-full flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-base font-medium hover:bg-gray-100 transition-all duration-300" id="mobile-resume-btn">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Download Resume
          </button>
</div>
</div>
</div>

<div className="modal" id="schedule-modal">
<div className="modal-content">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-bold text-white">Schedule a Call</h3>
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" id="close-modal">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-4" id="schedule-form">
<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="name" name="name" placeholder="Your name" required type="text" />
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="email" name="email" placeholder="your@email.com" required type="email" />
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="project">Project Type</label>
<select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="project" name="project" required>
<option value="">Select project type</option>
<option value="mobile-app">Mobile App Design</option>
<option value="web-design">Web Design</option>
<option value="vr-ar">VR/AR Experience</option>
<option value="design-system">Design System</option>
<option value="consultation">Consultation</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" id="message" name="message" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-6 py-3 text-base font-medium hover:bg-blue-600 transition-all duration-300" type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Send Message
          </button>
</form>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10 animate-fade-in">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 nav-link" href="#hero">
<div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
<div className="h-full w-full rounded-[6px] bg-black flex items-center justify-center">
<span className="text-xs font-semibold text-white">EC</span>
</div>
</div>
<span className="group-hover:text-white transition-colors text-sm font-medium text-gray-300">Ethan Cole</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 nav-link" href="#work">Work</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 nav-link" href="#about">About</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 nav-link" href="#experience">Experience</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 nav-link" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300" id="resume-btn">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Resume</span>
</button>
<button className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" id="mobile-menu-btn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative sm:py-32 pt-20 pb-20" id="hero">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 scroll-reveal-stagger">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300 scroll-reveal revealed">
<svg className="lucide lucide-zap h-4 w-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Currently at Meta • Available April 2024
            </div>
<div className="space-y-6">
<h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-none scroll-reveal revealed">
                Crafting digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">experiences</span>
</h1>
<p className="text-xl text-gray-400 leading-relaxed max-w-lg scroll-reveal revealed">
                Senior Product Designer focused on creating intuitive, accessible, and delightful user experiences for consumer tech products.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 scroll-reveal revealed">
<a className="group flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-6 py-3 text-base font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 nav-link" href="#work">
<span>View My Work</span>
<svg className="lucide lucide-arrow-right h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="group flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 text-white px-6 py-3 text-base font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300" id="hero-schedule-btn">
<svg className="lucide lucide-message-circle h-5 w-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span>Let's Talk</span>
</button>
</div>

<div className="flex items-center gap-6 pt-4 scroll-reveal revealed">
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://linkedin.com/in/alexchen-design" target="_blank">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://twitter.com/alexchen_design" target="_blank">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://dribbble.com/alexchen" target="_blank">
<svg className="lucide lucide-dribbble h-5 w-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://github.com/alexchen-design" target="_blank">
<svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="relative scroll-reveal revealed">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
<img alt="Alex Chen" className="w-full h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5180d964-2425-4134-8220-c1528af09124_1600w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-palette h-5 w-5 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium text-white">Currently designing</p>
<p className="text-xs text-gray-300">AR/VR interfaces at Reality Labs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 pt-20 pb-20" id="work">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="mb-16 scroll-reveal-stagger">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 scroll-reveal revealed">Featured Work</h2>
<p className="text-xl text-gray-400 max-w-2xl scroll-reveal revealed">
            A selection of projects spanning mobile apps, web platforms, and emerging technologies.
          </p>
</div>
<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-reveal-stagger">
<div className="space-y-6 scroll-reveal revealed">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-smartphone h-4 w-4 text-blue-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="text-sm font-medium text-blue-400">iOS • Android</span>
</div>
<h3 className="text-3xl font-bold text-white scroll-reveal revealed">Instagram Stories Redesign</h3>
<p className="text-lg text-gray-400 leading-relaxed scroll-reveal revealed">
                Reimagined the Stories creation experience with improved accessibility, better content discovery, and enhanced creative tools. Resulted in 23% increase in daily story creation.
              </p>
<div className="flex flex-wrap gap-3 scroll-reveal revealed">
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">User Research</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Prototyping</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">A/B Testing</span>
</div>
<button className="case-study-btn group inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 scroll-reveal revealed" data-project="Instagram Stories Redesign">
<span>View Case Study</span>
<svg className="lucide lucide-external-link h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="relative group scroll-reveal revealed">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
<img alt="Instagram Stories Redesign" className="w-full h-80 group-hover:scale-105 transition-transform duration-500 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7ee361ca-4978-4130-bab8-b605105c04b4_1600w.jpg" style={{}} />
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-reveal-stagger">
<div className="relative group order-2 lg:order-1 scroll-reveal revealed">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
<img alt="Instagram Stories Redesign" className="w-full h-80 group-hover:scale-105 transition-transform duration-500 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/318e004d-52f3-461d-a47d-fa98b455d735_1600w.jpg" style={{}} />
</div>
</div>
<div className="space-y-6 order-1 lg:order-2 scroll-reveal revealed">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-headphones h-4 w-4 text-purple-400" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<span className="text-sm font-medium text-purple-400">VR • Spatial Computing</span>
</div>
<h3 className="text-3xl font-bold text-white scroll-reveal revealed">Horizon Workrooms 2.0</h3>
<p className="text-lg text-gray-400 leading-relaxed scroll-reveal revealed">
                Led the design of next-generation VR collaboration tools, focusing on natural interaction patterns and reducing VR fatigue. Shipped to 2M+ Quest users worldwide.
              </p>
<div className="flex flex-wrap gap-3 scroll-reveal revealed">
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">3D Design</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Spatial UX</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Unity</span>
</div>
<button className="case-study-btn group inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 scroll-reveal revealed" data-project="Horizon Workrooms 2.0">
<span className="">View Case Study</span>
<svg className="lucide lucide-external-link h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-reveal-stagger">
<div className="space-y-6 scroll-reveal revealed">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
<svg className="lucide lucide-globe h-4 w-4 text-green-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-sm font-medium text-green-400">Web Platform</span>
</div>
<h3 className="text-3xl font-bold text-white scroll-reveal revealed">WhatsApp Business Dashboard</h3>
<p className="text-lg text-gray-400 leading-relaxed scroll-reveal revealed">
                Designed a comprehensive business management platform enabling small businesses to manage customer communications, analytics, and automation at scale.
              </p>
<div className="flex flex-wrap gap-3 scroll-reveal revealed">
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Dashboard Design</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Data Visualization</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">React</span>
</div>
<button className="case-study-btn group inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition-colors duration-300 scroll-reveal revealed" data-project="WhatsApp Business Dashboard">
<span>View Case Study</span>
<svg className="lucide lucide-external-link h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="relative group scroll-reveal revealed">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
<img alt="Horizon Workrooms" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37f704fc-8b0f-4c5d-8a64-a61ac371001c_3840w.jpg" style={{}} />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 pt-20 pb-20" id="about">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 scroll-reveal-stagger">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white scroll-reveal revealed">About Me</h2>
<div className="space-y-6 text-lg text-gray-400 leading-relaxed scroll-reveal revealed">
<p className="">
                I'm a Senior Product Designer with 8 years of experience creating user-centered digital products. Currently at Meta, I lead design for AR/VR experiences that bring people together in virtual spaces.
              </p>
<p className="scroll-reveal revealed">
                My passion lies in solving complex interaction challenges and making emerging technologies accessible to everyone. I believe great design is invisible – it just works.
              </p>
<p className="scroll-reveal revealed">
                When I'm not designing, you'll find me hiking in Marin County, experimenting with 3D art, or playing guitar in my home studio.
              </p>
</div>
<div className="grid grid-cols-2 gap-6 scroll-reveal revealed">
<div className="space-y-2">
<h4 className="font-semibold text-white">Location</h4>
<p className="text-gray-400 flex items-center gap-2">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  San Francisco, CA
                </p>
</div>
<div className="space-y-2">
<h4 className="font-semibold text-white">Experience</h4>
<p className="text-gray-400 flex items-center gap-2">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  8+ Years
                </p>
</div>
</div>
</div>
<div className="relative scroll-reveal revealed">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Workspace" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1529006469473-c7392d7f1eb4?w=800&q=80" style={{}} />
<img alt="Design process" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cc23948-cfe5-4f3d-9621-720fba8e3408_3840w.jpg" style={{}} />
</div>
<div className="space-y-4 pt-8">
<img alt="VR headset" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1563271963-0d36d54561cc?w=3840&q=80" style={{}} />
<img alt="Team collaboration" className="hover:scale-105 transition-transform duration-300 w-full h-auto object-cover rounded-2xl" src="/assets/48157db7-3cd8-438e-9cf1-928ffe19876a_3840w.jpg" style={{}} />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 bg-white/5 pt-20 pb-20" id="experience">
<div className="max-w-6xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 scroll-reveal-stagger">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4 scroll-reveal revealed">Experience</h2>
<p className="text-xl text-gray-400 scroll-reveal revealed">Companies I've worked with and roles I've taken on.</p>
</div>
<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600/30 via-gray-600/20 to-gray-600/10"></div>

<div className="absolute left-8 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transition-all duration-300 ease-out" id="timeline-progress" style={{height: `0%`, filter: `none`}}></div>
<div className="space-y-12" id="experience-container">

<div className="group relative pl-20 space-y-16 experience-item scroll-reveal revealed">

<div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20 group-hover:ring-8 transition-all duration-300 z-10" style={{transform: `scale(1)`, filter: `none`}}></div>
<div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
<span className="text-white font-semibold text-lg">M</span>
</div>
<div>
<h3 className="text-xl font-semibold text-white">Senior Product Designer</h3>
<p className="text-blue-400 font-medium">Meta (Reality Labs)</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-400">2021 - Present</span>
<p className="text-xs text-gray-500">3 years</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-4">
                  Leading design for AR/VR social experiences and productivity tools. Shipped Horizon Workrooms 2.0, co-presence features, and spatial interaction patterns used by millions of Quest users.
                </p>
<div className="flex flex-wrap gap-2">
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">VR Design</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Spatial UX</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Unity</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Design Systems</span>
</div>
</div>
</div>

<div className="group relative pl-20 experience-item scroll-reveal revealed">

<div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-purple-500/20 group-hover:ring-8 transition-all duration-300 z-10" style={{transform: `scale(1)`, filter: `none`}}></div>
<div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<div className="">
<h3 className="text-xl font-semibold text-white">Product Designer</h3>
<p className="text-purple-400 font-medium">Instagram</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-400">2019 - 2021</span>
<p className="text-xs text-gray-500">2 years</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-4">
                  Designed and shipped major improvements to Stories creation, Reels discovery, and creator monetization features. Led cross-functional teams and mentored junior designers.
                </p>
<div className="flex flex-wrap gap-2">
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Mobile Design</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">A/B Testing</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">User Research</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Prototyping</span>
</div>
</div>
</div>

<div className="group relative pl-20 experience-item scroll-reveal revealed">

<div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:ring-8 transition-all duration-300 z-10" style={{transform: `scale(1)`, filter: `none`}}></div>
<div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-indigo-500 flex items-center justify-center">
<span className="text-white font-semibold text-lg">S</span>
</div>
<div className="">
<h3 className="text-xl font-semibold text-white">Product Designer</h3>
<p className="text-indigo-400 font-medium">Stripe</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-400">2017 - 2019</span>
<p className="text-xs text-gray-500">2 years</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-4">
                  Designed developer tools and merchant-facing products used by millions of businesses globally. Contributed to Stripe's design system and accessibility standards.
                </p>
<div className="flex flex-wrap gap-2">
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Web Design</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">API Design</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Developer Tools</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">B2B</span>
</div>
</div>
</div>

<div className="group relative pl-20 experience-item scroll-reveal revealed">

<div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-500/20 group-hover:ring-8 transition-all duration-300 z-10" style={{transform: `scale(1)`, filter: `none`}}></div>
<div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/5 to-gray-400/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-xl bg-red-500 flex items-center justify-center">
<span className="text-white font-semibold text-lg">A</span>
</div>
<div className="">
<h3 className="text-xl font-semibold text-white">UX Designer</h3>
<p className="text-red-400 font-medium">Adobe Creative Suite</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-400">2015 - 2017</span>
<p className="text-xs text-gray-500">2 years</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-4">
                  Created intuitive user experiences for creative software applications. Collaborated with engineering teams to improve workflow efficiency and user satisfaction across desktop applications.
                </p>
<div className="flex flex-wrap gap-2">
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Creative Software</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">User Testing</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Wireframing</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Desktop UI</span>
</div>
</div>
</div>

<div className="group relative pl-20 experience-item scroll-reveal revealed">

<div className="absolute left-6 top-8 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 group-hover:ring-8 transition-all duration-300 z-10" style={{transform: `scale(1)`, filter: `none`}}></div>
<div className="hover:border-white/20 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#ffffff]/5 to-[#000000]/0 border-0 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 flex bg-emerald-500 rounded-xl items-center justify-center">
<span className="text-white font-semibold text-lg">F</span>
</div>
<div className="">
<h3 className="text-xl font-semibold text-white">Senior UI/UX Designer</h3>
<p className="text-emerald-400 font-medium">Figma Design Studio</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-gray-400">2014 - 2016</span>
<p className="text-xs text-gray-500">2 years</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-4">
                  Specialized in designing collaborative design tools and workflow interfaces. Built innovative features for real-time collaboration and helped establish design patterns that became industry standards.
                </p>
<div className="flex flex-wrap gap-2">
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Collaboration Tools</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Interface Design</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Real-time Features</span>
<span className="text-sm text-neutral-50 bg-neutral-50/10 rounded-full pt-1 pr-3 pb-1 pl-3">Design Systems</span>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="max-w-7xl md:py-28 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="mb-8 scroll-reveal revealed">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<span className="inline-block size-2 rounded-full bg-sky-400"></span> FAQ Section
        </span>
</div>
<div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">

<div className="scroll-reveal-stagger">
<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl scroll-reveal revealed">
            Questions,<span className="ml-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Answers</span>
</h2>
<p className="mt-4 max-w-xl text-white/70 scroll-reveal revealed">
            Get quick answers to your most pressing questions.
          </p>

<div className="mt-8 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-md p-5 md:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] scroll-reveal revealed">
<div className="flex items-center gap-4">
<img alt="Avatar" className="h-12 w-12 rounded-full ring-2 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg" style={{}} />
<div>
<p className="text-sm font-medium">Ryan Harper</p>
<p className="text-xs text-white/60">Harper Education</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-amber-300">

<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="h-4 w-4 text-white/25" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="mt-3 text-sm leading-6 text-white/80">
              Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement.
            </p>
</div>

<div className="mt-6 flex flex-wrap items-center gap-4 scroll-reveal">
<a className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/10 nav-link" href="#work">
              See All Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<button className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-3 text-sm font-medium hover:bg-white/90" id="faq-contact-btn">
              Contact Now
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="space-y-4 scroll-reveal-stagger" id="faq-list">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal revealed" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">What services do you offer?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="transition-transform w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`, width: `16px`, height: `16px`, color: `rgb(243, 244, 246)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                I provide UI/UX design, product strategy, interactive prototypes, and developer-ready design systems tailored to your brand.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal revealed" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">How do I start working with you?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                Send a brief about your goals. I'll review it, share a quick plan, timeline, and a flat estimate, then we kick off with a discovery call.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal revealed" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">What design tools do you use?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                Figma for UI and prototypes, plus code-friendly systems (Tailwind) to keep handoff fast and consistent.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">How long does a project take?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                Small pages: 1–2 weeks. Full products: 3–6 weeks depending on scope, feedback speed, and integrations.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">Do you provide revisions?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                Yes — each phase includes structured review rounds to refine details without delaying delivery.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">What industries do you work with?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                SaaS, education, e-commerce, and creator tools — with a focus on clean, fast interfaces.
              </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20 scroll-reveal" data-accordion="">
<button aria-expanded="false" className="flex w-full items-center justify-between p-6 text-left" data-accordion-trigger="">
<span className="text-base font-medium text-white/90">Do you offer development services?</span>
<span className="grid size-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition" data-plus="">
<svg className="h-4 w-4 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" style={{transform: `rotate(0deg)`}} viewBox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</span>
</button>
<div className="grid px-6 pb-6 transition-[grid-template-rows,opacity] duration-300 ease-out [grid-template-rows:0fr] opacity-0" data-accordion-panel="" style={{opacity: `0`, gridTemplateRows: `0fr`}}>
<div className="min-h-0 overflow-hidden text-white/70">
                I partner with trusted engineers when needed; otherwise I deliver dev-ready designs and components.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-32 pt-20 pb-20" id="contact">
<div className="max-w-4xl lg:px-8 text-center mr-auto ml-auto pr-6 pl-6">
<div className="space-y-8 scroll-reveal-stagger">
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white scroll-reveal">Let's Work Together</h2>
<p className="text-xl text-gray-400 max-w-2xl mx-auto scroll-reveal">
            I'm always interested in hearing about new opportunities, especially in emerging tech and social impact.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 scroll-reveal">
<a className="group flex items-center gap-3 rounded-2xl bg-white text-black px-6 py-4 text-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300" href="mailto:alex.chen.design@gmail.com">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="">ethan.cole.design@gmail.com</span>
</a>
<button className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 text-white px-6 py-4 text-lg font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300" id="footer-schedule-btn">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Schedule a Call</span>
</button>
</div>
</div>
</div>
</section>

<footer className="relative py-12 border-t border-white/10">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 scroll-reveal-stagger">
<p className="text-gray-400 scroll-reveal">© 2024 Alex Chen. All rights reserved.</p>
<div className="flex items-center gap-6 scroll-reveal">
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://linkedin.com/in/alexchen-design" target="_blank">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://twitter.com/alexchen_design" target="_blank">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" href="https://dribbble.com/alexchen" target="_blank">
<svg className="lucide lucide-dribbble h-5 w-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
