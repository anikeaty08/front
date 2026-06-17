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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.projects = [
            {
                "id": 1,
                "title": "E-Commerce Redesign",
                "brand": "ShopFlow",
                "tagline": "Streamlining the online shopping experience",
                "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
                "problem": "The existing e-commerce platform had a 68% cart abandonment rate and users struggled to find products efficiently.",
                "solution": "Redesigned the entire user flow with a focus on simplified navigation, improved search functionality, and a streamlined checkout process.",
                "decisions": "Chose to implement a persistent cart sidebar and one-click checkout for returning customers. Prioritized mobile-first design given 70% of traffic came from mobile devices.",
                "outcome": "Reduced cart abandonment by 34%, increased conversion rate by 28%, and improved average session duration by 45%.",
                "learned": "The importance of user testing at every stage. Small friction points in the checkout flow had outsized impacts on conversion.",
                "improvements": "Would implement more personalization features and A/B test different product recommendation algorithms.",
                "website": "#",
                "hidden": false
            },
            {
                "id": 2,
                "title": "SaaS Dashboard",
                "brand": "DataViz Pro",
                "tagline": "Making complex data accessible",
                "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                "problem": "Users found the analytics dashboard overwhelming with too much information presented at once, leading to low feature adoption.",
                "solution": "Created a modular dashboard system with customizable widgets, progressive disclosure of information, and contextual help.",
                "decisions": "Implemented a guided onboarding flow and introduced data visualization best practices. Chose to use a card-based layout for flexibility.",
                "outcome": "Feature adoption increased by 52%, support tickets decreased by 41%, and user satisfaction scores improved from 6.2 to 8.7/10.",
                "learned": "Progressive disclosure is key when dealing with complex data. Users need to build mental models gradually.",
                "improvements": "Would add more advanced filtering options and collaborative features for team-based analysis.",
                "website": "#",
                "hidden": false
            },
            {
                "id": 3,
                "title": "Brand Identity",
                "brand": "GreenLeaf Organics",
                "tagline": "Organic food delivery brand refresh",
                "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
                "problem": "The brand felt outdated and didn't resonate with the target millennial and Gen-Z audience interested in sustainable living.",
                "solution": "Developed a fresh, modern brand identity with earthy tones, custom illustrations, and a friendly, approachable voice.",
                "decisions": "Chose a warm, natural color palette over the typical 'green' organic look. Created a flexible design system that works across digital and print.",
                "outcome": "Brand recognition increased by 67%, social media engagement tripled, and customer acquisition cost decreased by 23%.",
                "learned": "Brand consistency across all touchpoints is crucial. Every interaction should reinforce the brand values.",
                "improvements": "Would develop more motion design elements and expand the illustration library for seasonal campaigns.",
                "website": "#",
                "hidden": false
            },
            {
                "id": 4,
                "title": "Mobile App",
                "brand": "FitTrack",
                "tagline": "Fitness tracking made simple",
                "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
                "problem": "Existing fitness apps were too complex with features users didn't need, causing decision fatigue and app abandonment.",
                "solution": "Built a focused app with three core features: workout logging, progress tracking, and simple goal setting. No social features or gamification.",
                "decisions": "Deliberately kept the feature set minimal to avoid feature creep. Used large, touch-friendly buttons and clear visual hierarchy.",
                "outcome": "Achieved 4.8 star rating on app stores, 60% 30-day retention rate (vs industry average of 25%), and organic growth through word-of-mouth.",
                "learned": "Sometimes less is more. Users appreciated the simplicity and focus on core functionality.",
                "improvements": "Would add Apple Watch integration and explore minimal social features based on user feedback.",
                "website": "#",
                "hidden": false
            },
            {
                "id": 5,
                "title": "Landing Page",
                "brand": "CloudSync",
                "tagline": "No-code landing page for SaaS launch",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
                "problem": "The startup needed to validate their idea quickly without investing in expensive development.",
                "solution": "Built a high-converting landing page using Webflow with email capture, product demo video, and clear value proposition.",
                "decisions": "Focused on social proof and clear CTAs. Used Lottie animations for visual interest without impacting load times.",
                "outcome": "Collected 2,400 email signups in the first month, validated product-market fit, and secured seed funding based on early traction.",
                "learned": "A well-designed landing page can validate ideas faster than building the full product. Focus on communicating value clearly.",
                "improvements": "Would implement more sophisticated A/B testing and add interactive product demos.",
                "website": "#",
                "hidden": false
            },
            {
                "id": 6,
                "title": "Design System",
                "brand": "TechCorp",
                "tagline": "Enterprise design system implementation",
                "image": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
                "problem": "The company had 12 different products with inconsistent UI patterns, causing user confusion and development inefficiencies.",
                "solution": "Created a comprehensive design system with reusable components, design tokens, and clear documentation for designers and developers.",
                "decisions": "Built the system in Figma with auto-layout components and created a React component library. Established a governance model for updates.",
                "outcome": "Reduced design-to-development time by 40%, improved brand consistency across products, and decreased bug reports related to UI by 55%.",
                "learned": "A design system is never 'done' - it needs ongoing maintenance and evolution. Documentation is as important as the components themselves.",
                "improvements": "Would add more accessibility guidelines and create more sophisticated animation patterns.",
                "website": "#",
                "hidden": false
            }
        ];
    


      // Initialize Lucide Icons
      if (typeof lucide !== 'undefined') lucide.createIcons();

      const projectsGrid = document.getElementById('projectsGrid');

      // Render Projects with expandable accordion design
      window.renderProjects = function () {
        projectsGrid.innerHTML = '';
      
        let openCard = null; // track open card
      
        window.projects.forEach(project => {
          if (project.hidden) return;
      
          const wrapper = document.createElement('div');
          wrapper.className = "border border-white/[0.08] rounded-2xl bg-zinc-900/30 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/50";
      
          wrapper.innerHTML = `
            <!-- CARD -->
            <div class="flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 cursor-pointer toggle-trigger group relative z-10">
              
              <!-- IMAGE -->
              <div class="w-full md:w-80 h-56 md:h-auto rounded-xl overflow-hidden shrink-0 relative border border-white/5 bg-zinc-950/50">
                <img src="${project.image}" alt="${project.brand}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-100 md:opacity-0 transition-opacity duration-300"></div>
              </div>
      
              <!-- CONTENT -->
              <div class="flex flex-col justify-between flex-1 mt-6 md:mt-0 py-1">
                <div>
                  <h3 class="text-2xl font-medium text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                    ${project.brand}
                  </h3>
      
                  <p class="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">
                    ${project.title}
                  </p>
      
                  <p class="text-zinc-400 text-sm leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none">
                    ${project.tagline}
                  </p>
                </div>
      
                <button class="view-btn mt-6 md:mt-auto w-fit text-sm font-medium border border-white/10 bg-white/5 text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-zinc-900 transition-all duration-300 flex items-center gap-2 group/btn">
                  <span class="btn-text">View Case Study</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" class="transition-transform duration-300 btn-icon" width="18" stroke-width="1.5"></iconify-icon>
                </button>
              </div>
            </div>
      
            <!-- EXPANDABLE CONTENT -->
            <div class="expandable max-h-0 overflow-hidden transition-all duration-500 ease-in-out border-white/5 border-t-0">
              <div class="p-6 md:p-8 pt-0 md:pt-2 space-y-8">
                
                <div class="pt-6 border-t border-white/5">
                  <h3 class="text-sm font-medium text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <iconify-icon icon="solar:danger-circle-linear" class="text-zinc-400"></iconify-icon>
                      The Problem
                  </h3>
                  <p class="text-zinc-400 leading-relaxed text-sm md:text-base">${project.problem}</p>
                </div>
      
                <div>
                  <h3 class="text-sm font-medium text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <iconify-icon icon="solar:lightbulb-linear" class="text-zinc-400"></iconify-icon>
                      The Solution
                  </h3>
                  <p class="text-zinc-400 leading-relaxed text-sm md:text-base">${project.solution}</p>
                </div>
      
                <div class="grid md:grid-cols-2 gap-8 border-y border-white/5 py-8">
                  <div>
                    <h3 class="text-sm font-medium text-white uppercase tracking-wider mb-3">Decisions</h3>
                    <p class="text-zinc-400 text-sm leading-relaxed">${project.decisions}</p>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-white uppercase tracking-wider mb-3">Impact</h3>
                    <p class="text-zinc-400 text-sm leading-relaxed">${project.outcome}</p>
                  </div>
                </div>
      
                <div class="space-y-4">
                  <h3 class="text-sm font-medium text-white uppercase tracking-wider">Retrospective</h3>
                  <div class="bg-white/5 rounded-xl p-6 border border-white/5">
                    <p class="text-zinc-400 leading-relaxed mb-4 text-sm md:text-base">
                      <strong class="text-white font-medium">Learned:</strong> ${project.learned}
                    </p>
                    <p class="text-zinc-400 leading-relaxed text-sm md:text-base">
                      <strong class="text-white font-medium">Next Steps:</strong> ${project.improvements}
                    </p>
                  </div>
                </div>
      
                <div class="pt-2">
                  <a href="${project.website}" target="_blank"
                    class="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-white text-zinc-950 font-medium py-3 px-8 rounded-lg hover:bg-zinc-200 transition-colors text-sm">
                    Visit Live Site
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                  </a>
                </div>
      
              </div>
            </div>
          `;
      
          const trigger = wrapper.querySelector('.toggle-trigger');
          const button = wrapper.querySelector('.view-btn');
          const expandable = wrapper.querySelector('.expandable');
          const btnText = wrapper.querySelector('.btn-text');
          const btnIcon = wrapper.querySelector('.btn-icon');
      
          const toggleAccordion = (e) => {
            e.stopPropagation();
      
            const isOpen = expandable.style.maxHeight && expandable.style.maxHeight !== "0px";
      
            // Close any currently open card
            if (openCard && openCard !== expandable) {
              openCard.style.maxHeight = "0px";
              openCard.classList.remove('border-t');
              const prevBtnText = openCard.parentElement.querySelector('.btn-text');
              const prevBtnIcon = openCard.parentElement.querySelector('.btn-icon');
              if (prevBtnText) prevBtnText.innerText = "View Case Study";
              if (prevBtnIcon) prevBtnIcon.style.transform = "rotate(0deg)";
            }
      
            if (isOpen) {
              expandable.style.maxHeight = "0px";
              expandable.classList.remove('border-t');
              btnText.innerText = "View Case Study";
              btnIcon.style.transform = "rotate(0deg)";
              openCard = null;
            } else {
              expandable.classList.add('border-t');
              expandable.style.maxHeight = expandable.scrollHeight + 150 + "px"; // added buffer for safety
              btnText.innerText = "Close Case Study";
              btnIcon.style.transform = "rotate(180deg)";
              openCard = expandable;
              
              // Smoothly scroll the opened card into view
              setTimeout(() => {
                  wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 300);
            }
          };
      
          button.addEventListener('click', toggleAccordion);
          trigger.addEventListener('click', (e) => {
              if (e.target.closest('button')) return; // Prevent double trigger
              toggleAccordion(e);
          });
          
          // Re-adjust max-height on window resize if a card is open
          window.addEventListener('resize', () => {
              if (openCard === expandable) {
                  expandable.style.maxHeight = expandable.scrollHeight + 150 + "px";
              }
          });
      
          projectsGrid.appendChild(wrapper);
        });
      };

      // Intersection Observer for Scroll Animations
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
          window.renderProjects();

          const fadeElements = document.querySelectorAll('.fade-up');
          fadeElements.forEach(el => observer.observe(el));
      });
    


    (function() {
      const ADMIN_PW = 'admin2026';
      const STORAGE_KEY = 'portfolio_admin_data';
      let adminUnlocked = false;
    
      // ── Trigger: Ctrl/Cmd + Shift + A ──
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
          e.preventDefault();
          adminOpen();
        }
      });
      
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
              if (document.getElementById('admin-overlay').classList.contains('open')) {
                  adminClose();
              }
          }
      });

      document.addEventListener('DOMContentLoaded', function() {
        loadAndApplyData();
      });
    
      function adminOpen() {
        document.getElementById('admin-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        if (adminUnlocked) {
          loadFormValues();
        } else {
          setTimeout(() => document.getElementById('admin-pw-input').focus(), 100);
        }
      }
    
      window.adminClose = function() {
        document.getElementById('admin-overlay').classList.remove('open');
        document.body.style.overflow = '';
      };
    
      window.adminLogin = function() {
        const pw = document.getElementById('admin-pw-input').value;
        if (pw === ADMIN_PW) {
          adminUnlocked = true;
          document.getElementById('admin-login').style.display = 'none';
          document.getElementById('admin-content').style.display = 'block';
          document.getElementById('admin-export-trigger').style.display = 'inline-block';
          document.getElementById('admin-pw-input').value = '';
          document.getElementById('admin-pw-error').style.display = 'none';
          buildProjectForms();
          buildServiceForms();
          loadFormValues();
        } else {
          document.getElementById('admin-pw-error').style.display = 'block';
        }
      };
    
      window.adminTab = function(name, btn) {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('admin-section-' + name).classList.add('active');
      };
      
      window.handleImageUpload = function(input, targetInputId) {
          if (input.files && input.files[0]) {
              const file = input.files[0];
              if (file.size > 2.5 * 1024 * 1024) {
                  alert('File is quite large. To avoid exceeding browser storage limits, please use an image under 2MB, or use an external URL instead.');
              }
              const reader = new FileReader();
              reader.onload = function(e) {
                  document.getElementById(targetInputId).value = e.target.result;
              };
              reader.readAsDataURL(file);
          }
      };
    
      function buildProjectForms() {
        const container = document.getElementById('admin-projects-list');
        container.innerHTML = '';
        const savedData = getSavedData();
        const projectsData = savedData.projects || window.projects || [];
    
        projectsData.forEach(function(p, i) {
          const div = document.createElement('div');
          div.className = 'project-card-admin';
          div.innerHTML = `
            <div class="project-card-admin-header">
              <span>Project ${i+1}: <span id="proj-label-${i}">${p.brand || p.title || 'Untitled'}</span></span>
              <button class="project-expand-btn" onclick="toggleProjectFields(${i})">Edit ↓</button>
            </div>
            <div class="project-fields" id="proj-fields-${i}">
              <div class="admin-field" style="display:flex; align-items:center; gap:8px; margin-bottom: 20px;">
                <input type="checkbox" id="pf-hidden-${i}" class="admin-checkbox" ${p.hidden ? 'checked' : ''}>
                <label for="pf-hidden-${i}" class="admin-label" style="margin:0; cursor:pointer;">Hide this project from portfolio grid</label>
              </div>
              <div class="admin-grid-2">
                <div class="admin-field">
                  <label class="admin-label">Brand / Client Name</label>
                  <input class="admin-input" id="pf-brand-${i}" value="${escape(p.brand||'')}"
                    oninput="document.getElementById('proj-label-${i}').textContent=this.value||'Untitled'">
                </div>
                <div class="admin-field">
                  <label class="admin-label">Project Title / Type</label>
                  <input class="admin-input" id="pf-title-${i}" value="${escape(p.title||'')}">
                </div>
              </div>
              <div class="admin-field">
                <label class="admin-label">Card Image URL or Upload</label>
                <div style="display:flex; gap:8px; align-items:center;">
                  <input class="admin-input" id="pf-image-${i}" value="${escape(p.image||'')}" style="margin-bottom:0;">
                  <input type="file" id="pf-image-upload-${i}" accept="image/*" style="display:none;" onchange="handleImageUpload(this, 'pf-image-${i}')">
                  <button type="button" class="admin-save-btn" style="margin-top:0; width:auto; padding:10px 16px; white-space:nowrap;" onclick="document.getElementById('pf-image-upload-${i}').click()">Upload</button>
                </div>
                <p class="admin-hint">Direct image link or local upload</p>
              </div>
              <div class="admin-field">
                <label class="admin-label">Tagline (card subtitle)</label>
                <input class="admin-input" id="pf-tagline-${i}" value="${escape(p.tagline||'')}">
              </div>
              <div class="admin-field">
                <label class="admin-label">The Problem</label>
                <textarea class="admin-textarea" id="pf-problem-${i}">${escape(p.problem||'')}</textarea>
              </div>
              <div class="admin-field">
                <label class="admin-label">The Solution</label>
                <textarea class="admin-textarea" id="pf-solution-${i}">${escape(p.solution||'')}</textarea>
              </div>
              <div class="admin-grid-2">
                <div class="admin-field">
                  <label class="admin-label">Decisions Made</label>
                  <textarea class="admin-textarea" id="pf-decisions-${i}">${escape(p.decisions||'')}</textarea>
                </div>
                <div class="admin-field">
                  <label class="admin-label">Outcome / Impact</label>
                  <textarea class="admin-textarea" id="pf-outcome-${i}">${escape(p.outcome||'')}</textarea>
                </div>
              </div>
              <div class="admin-grid-2">
                <div class="admin-field">
                  <label class="admin-label">What I Learned</label>
                  <textarea class="admin-textarea" id="pf-learned-${i}">${escape(p.learned||'')}</textarea>
                </div>
                <div class="admin-field">
                  <label class="admin-label">Next Steps / Improvements</label>
                  <textarea class="admin-textarea" id="pf-improvements-${i}">${escape(p.improvements||'')}</textarea>
                </div>
              </div>
              <div class="admin-field">
                <label class="admin-label">Live Site URL</label>
                <input class="admin-input" id="pf-website-${i}" value="${escape(p.website||'')}">
              </div>
            </div>
          `;
          container.appendChild(div);
        });
      }
    
      function buildServiceForms() {
        const container = document.getElementById('admin-services-list');
        container.innerHTML = '';
        const savedData = getSavedData();
        const defaultServices = [
          { title: 'Product Designer', desc: 'UX/UI design, user flows, and product thinking to create intuitive digital experiences that users love.', icon: 'solar:monitor-smartphone-linear' },
          { title: 'Brand Designer', desc: 'Logos, visual identity, and brand systems that communicate your unique story and values effectively.', icon: 'solar:pen-new-square-linear' },
          { title: 'No-Code Developer', desc: 'High-performance landing pages and web apps built efficiently without the overhead of traditional coding.', icon: 'solar:code-scan-linear' }
        ];
        const services = savedData.services || defaultServices;
        services.forEach(function(s, i) {
          const div = document.createElement('div');
          div.className = 'project-card-admin';
          div.innerHTML = `
            <p class="admin-label" style="margin-bottom:8px">Service ${i+1}</p>
            <div class="admin-grid-2">
              <div class="admin-field">
                <label class="admin-label">Title</label>
                <input class="admin-input" id="sf-title-${i}" value="${escape(s.title||'')}">
              </div>
              <div class="admin-field">
                <label class="admin-label">Icon (Iconify name)</label>
                <input class="admin-input" id="sf-icon-${i}" value="${escape(s.icon||'')}">
                <p class="admin-hint">e.g. solar:monitor-smartphone-linear</p>
              </div>
            </div>
            <div class="admin-field">
              <label class="admin-label">Description</label>
              <textarea class="admin-textarea" id="sf-desc-${i}">${escape(s.desc||'')}</textarea>
            </div>
          `;
          container.appendChild(div);
        });
      }
    
      window.toggleProjectFields = function(i) {
        const el = document.getElementById('proj-fields-' + i);
        el.classList.toggle('open');
      };
    
      window.adminSave = function(section) {
        const data = getSavedData();
    
        if (section === 'hero') {
          data.hero = {
            name: val('af-name'),
            role: val('af-role'),
            avatar: val('af-avatar'),
            headline: val('af-headline'),
            subtext: val('af-subtext')
          };
        }
        if (section === 'nav') {
          data.nav = {
            email: val('af-email'),
            linkedin: val('af-linkedin'),
            twitter: val('af-twitter'),
            copyright: val('af-copyright')
          };
        }
        if (section === 'projects') {
          const savedData = getSavedData();
          const count = (savedData.projects || window.projects || []).length;
          data.projects = [];
          for (let i = 0; i < count; i++) {
            data.projects.push({
              id: i + 1,
              brand: val('pf-brand-' + i),
              title: val('pf-title-' + i),
              image: val('pf-image-' + i),
              tagline: val('pf-tagline-' + i),
              problem: val('pf-problem-' + i),
              solution: val('pf-solution-' + i),
              decisions: val('pf-decisions-' + i),
              outcome: val('pf-outcome-' + i),
              learned: val('pf-learned-' + i),
              improvements: val('pf-improvements-' + i),
              website: val('pf-website-' + i),
              hidden: document.getElementById('pf-hidden-' + i).checked
            });
          }
          
          // Update the script tag content permanently for export
          window.projects = data.projects;
          const dataScript = document.getElementById('portfolio-data');
          if (dataScript) {
             dataScript.textContent = '\n        window.projects = ' + JSON.stringify(data.projects, null, 12) + ';\n    ';
          }
        }
        if (section === 'services') {
          data.services = [];
          for (let i = 0; i < 3; i++) {
            data.services.push({
              title: val('sf-title-' + i),
              icon: val('sf-icon-' + i),
              desc: val('sf-desc-' + i)
            });
          }
        }
    
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                alert("Browser storage limit reached! Your uploaded images might be too large. Try using image URLs instead of uploading large files.");
                return;
            }
        }
        
        applyData(data);
    
        const fb = document.getElementById('fb-' + section);
        fb.classList.add('show');
        setTimeout(() => fb.classList.remove('show'), 2500);
      };
      
      // EXPORT FUNCTIONALITY
      window.exportHTML = function() {
          // Temporarily close the admin interface so it isn't "open" on the exported file
          document.getElementById('admin-overlay').classList.remove('open');
          document.body.style.overflow = '';
          
          // Small delay to ensure CSS paints and DOM updates
          setTimeout(() => {
              // Get the fully updated HTML
              let htmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
              
              // Trigger download
              const blob = new Blob([htmlContent], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'index.html'; // Name the file
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              
              // Re-open admin panel if the user wants to continue editing
              document.getElementById('admin-overlay').classList.add('open');
              document.body.style.overflow = 'hidden';
              
          }, 100);
      };
    
      function loadFormValues() {
        const data = getSavedData();
        const h = data.hero || {};
        const n = data.nav || {};
        setVal('af-name', h.name);
        setVal('af-role', h.role);
        setVal('af-avatar', h.avatar);
        setVal('af-headline', h.headline);
        setVal('af-subtext', h.subtext);
        setVal('af-email', n.email);
        setVal('af-linkedin', n.linkedin);
        setVal('af-twitter', n.twitter);
        setVal('af-copyright', n.copyright);
      }
    
      function loadAndApplyData() {
        const data = getSavedData();
        if (Object.keys(data).length) applyData(data);
      }
    
      function applyData(data) {
        if (data.hero) {
          const h = data.hero;
          if (h.name) {
            document.querySelectorAll('h2').forEach(function(el) {
              if (el.textContent.trim() === 'Olamide Afolabi' || el.dataset.adminField === 'name') {
                el.textContent = h.name; el.dataset.adminField = 'name';
              }
            });
            const footerP = document.querySelectorAll('footer p');
            footerP.forEach(function(p) {
              if (p.textContent.includes('Olamide Afolabi') && p.textContent.includes('©')) {
                p.textContent = data.nav && data.nav.copyright ? data.nav.copyright : p.textContent;
              }
            });
          }
          if (h.role) {
            document.querySelectorAll('p').forEach(function(el) {
              if (el.textContent.includes('Product and Brand Designer') || el.dataset.adminField === 'role') {
                el.textContent = h.role; el.dataset.adminField = 'role';
              }
            });
          }
          if (h.avatar) {
            const img = document.querySelector('img[alt="Olamide Afolabi"]');
            if (img) img.src = h.avatar;
          }
          if (h.headline) {
            const h1 = document.querySelector('h1');
            if (h1) h1.textContent = h.headline;
          }
          if (h.subtext) {
            const subtexts = document.querySelectorAll('section p.text-zinc-500');
            if (subtexts.length > 0) subtexts[0].textContent = h.subtext;
          }
        }
    
        if (data.nav) {
          const n = data.nav;
          if (n.email) {
            document.querySelectorAll('a[href^="mailto:"]').forEach(function(a) { a.href = 'mailto:' + n.email; });
          }
          if (n.linkedin) {
            document.querySelectorAll('a[href*="linkedin"]').forEach(function(a) { a.href = n.linkedin; });
          }
          if (n.twitter) {
            document.querySelectorAll('a[href*="twitter"]').forEach(function(a) { a.href = n.twitter; });
          }
          if (n.copyright) {
            const footerCopy = document.querySelector('footer .flex.flex-col p, footer p');
            if (footerCopy) footerCopy.textContent = n.copyright;
          }
        }
    
        if (data.projects && data.projects.length && typeof window.projects !== 'undefined') {
          window.projects = data.projects;
          if (typeof window.renderProjects === 'function') window.renderProjects();
        }
    
        if (data.services && data.services.length) {
          const cards = document.querySelectorAll('#services .grid > div');
          data.services.forEach(function(s, i) {
            if (cards[i]) {
              const titleEl = cards[i].querySelector('h3');
              const descEl = cards[i].querySelector('p');
              const iconEl = cards[i].querySelector('iconify-icon');
              if (titleEl) titleEl.textContent = s.title;
              if (descEl) descEl.textContent = s.desc;
              if (iconEl && s.icon) iconEl.setAttribute('icon', s.icon);
            }
          });
        }
      }
    
      function getSavedData() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch(e) { return {}; }
      }
      function val(id) {
        const el = document.getElementById(id);
        return el ? el.value : '';
      }
      function setVal(id, v) {
        const el = document.getElementById(id);
        if (el && v) el.value = v;
      }
      function escape(str) {
        return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      }
    
      document.getElementById('admin-overlay').addEventListener('click', function(e) {
        if (e.target === this) adminClose();
      });
    })();
    
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
      

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg hover:text-zinc-300 transition-colors" href="#">
          PORTFOLIO
        </a>
<a className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="mailto:your.email@example.com">
<span>Get in Touch</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center pt-28 pb-20 relative" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 w-full z-10">
<div className="space-y-8 fade-up visible">

<div className="flex items-center gap-6 mb-2">
<div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-[#FCD34D] shadow-lg shadow-yellow-500/10">
<div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-overlay"></div>
<img alt="Olamide Afolabi" className="contrast-125 opacity-90 mix-blend-multiply w-full h-full object-cover z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b407a561-4a04-4b62-892b-69696088a771_320w.jpg?w=800&amp;q=80"/>
</div>
<div className="space-y-1">
<h2 className="text-3xl font-semibold text-white tracking-tight" data-admin-field="name">
                Olamide Afolabi
              </h2>
<p className="text-lg text-zinc-400 font-light tracking-wide" data-admin-field="role">
                Product and Brand Designer, No-Code Developer
              </p>
</div>
</div>
<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.1] max-w-4xl">
            I design products, brands, and no-code experiences that solve real
            problems.
          </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
            Creating thoughtful, user-centered solutions through design and
            development. Specializing in bridging the gap between aesthetic and
            function.
          </p>
<div className="pt-8">
<a className="inline-flex items-center gap-3 text-white border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 group" href="#services">
<span className="text-sm font-medium">See my work</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="border-white/[0.05] overflow-hidden border-t pt-4 pb-12">
<div className="max-w-7xl mx-auto px-6 mb-10 fade-up">
<p className="text-sm font-medium text-zinc-500 tracking-wide">
          Worked with companies across different verticals
        </p>
</div>
<div className="relative w-full fade-up">

<div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>

<div className="marquee-container flex overflow-hidden relative">
<div className="animate-marquee flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-full pl-6 md:pl-0">

<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:google-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:vercel-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:stripe" width="64"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:spotify-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:netflix-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:airbnb-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:linear-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:loom-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:figma" width="28"></iconify-icon>

<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:google-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:vercel-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:stripe" width="64"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:spotify-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:netflix-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:airbnb-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:linear-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:loom-icon" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" icon="logos:figma" width="28"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.08]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Services
          </h2>
<p className="text-zinc-500 mt-4 md:mt-0 text-sm md:text-base max-w-md text-left md:text-right">
            Comprehensive design solutions tailored to scale your digital
            presence.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">

<div className="group p-8 border border-white/[0.08] rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Product Designer
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              UX/UI design, user flows, and product thinking to create intuitive
              digital experiences that users love.
            </p>
</div>

<div className="group p-8 border border-white/[0.08] rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              Brand Designer
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Logos, visual identity, and brand systems that communicate your
              unique story and values effectively.
            </p>
</div>

<div className="group p-8 border border-white/[0.08] rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/20 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:code-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
              No-Code Developer
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              High-performance landing pages and web apps built efficiently
              without the overhead of traditional coding.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.08]" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 fade-up">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            Selected Work
          </h2>
</div>

<div className="flex flex-col gap-6 md:gap-8 fade-up" id="projectsGrid">

</div>
</div>
</section>

<footer className="py-20 border-t border-white/[0.08] bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 fade-up">
<div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
              Let's work together
            </h3>
<p className="text-zinc-500 max-w-sm">
              Have a project in mind? Let's create something amazing that moves
              the needle.
            </p>
</div>
<div className="flex flex-col md:items-end gap-4 justify-center">
<a className="text-zinc-400 hover:text-white transition-colors text-lg font-medium" href="mailto:your.email@example.com">
              Email
            </a>
<a className="text-zinc-400 hover:text-white transition-colors text-lg font-medium" href="https://linkedin.com/in/yourprofile" target="_blank">
              LinkedIn
            </a>
<a className="text-zinc-400 hover:text-white transition-colors text-lg font-medium" href="https://twitter.com/yourhandle" target="_blank">
              Twitter
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 border-t border-white/[0.05] pt-8 fade-up">
<p>© 2026 Olamide Afolabi. All rights reserved.</p>
<p className="mt-2 md:mt-0">Design &amp; Development Portfolio</p>
</div>
</div>
</footer>





<style>
      #admin-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(8px);
        z-index: 9999;
        overflow-y: auto;
        padding: 2rem 1rem;
      }
      #admin-overlay.open { display: flex; justify-content: center; }
    
      #admin-panel {
        background: #111113;
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 16px;
        width: 100%;
        max-width: 820px;
        height: fit-content;
        padding: 0;
        overflow: hidden;
      }
    
      #admin-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        background: #18181b;
      }
      #admin-header h2 {
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        letter-spacing: -0.01em;
      }
      #admin-header p {
        color: #71717a;
        font-size: 12px;
        margin: 2px 0 0;
      }
      .admin-header-btn {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        color: #a1a1aa;
        border-radius: 8px;
        cursor: pointer;
        padding: 6px 12px;
        font-size: 12px;
        transition: all 0.2s;
        font-weight: 500;
      }
      .admin-header-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
      
      .admin-export-btn {
        background: #fff;
        color: #09090b;
        border: 1px solid #fff;
      }
      .admin-export-btn:hover {
        background: #e4e4e7;
        color: #09090b;
      }
    
      #admin-tabs {
        display: flex;
        gap: 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        overflow-x: auto;
        background: #18181b;
      }
      .admin-tab {
        padding: 10px 18px;
        font-size: 13px;
        color: #71717a;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        white-space: nowrap;
        transition: all 0.2s;
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
      }
      .admin-tab:hover { color: #d4d4d8; }
      .admin-tab.active { color: #fff; border-bottom-color: #fff; }
    
      #admin-body { padding: 1.5rem; }
    
      .admin-section { display: none; }
      .admin-section.active { display: block; }
    
      .admin-field { margin-bottom: 1.25rem; }
      .admin-label {
        display: block;
        font-size: 12px;
        color: #71717a;
        margin-bottom: 6px;
        font-weight: 500;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
      .admin-input, .admin-textarea {
        width: 100%;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        padding: 10px 12px;
        color: #e4e4e7;
        font-size: 14px;
        font-family: inherit;
        transition: border 0.2s;
        box-sizing: border-box;
      }
      .admin-input:focus, .admin-textarea:focus {
        outline: none;
        border-color: rgba(255,255,255,0.3);
        background: rgba(255,255,255,0.06);
      }
      .admin-textarea { resize: vertical; min-height: 80px; line-height: 1.5; }
      
      .admin-checkbox {
        appearance: none;
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 4px;
        background: rgba(255,255,255,0.04);
        cursor: pointer;
        position: relative;
        outline: none;
        transition: all 0.2s;
      }
      .admin-checkbox:checked {
        background: #fff;
        border-color: #fff;
      }
      .admin-checkbox:checked::after {
        content: "✓";
        color: #09090b;
        font-size: 10px;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    
      .admin-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      @media (max-width: 580px) { .admin-grid-2 { grid-template-columns: 1fr; } }
    
      .project-card-admin {
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        background: rgba(255,255,255,0.02);
      }
      .project-card-admin-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      .project-card-admin-header span {
        font-size: 13px;
        font-weight: 500;
        color: #a1a1aa;
      }
      .project-expand-btn {
        background: none;
        border: 1px solid rgba(255,255,255,0.1);
        color: #71717a;
        border-radius: 6px;
        padding: 4px 10px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .project-expand-btn:hover { color: #fff; border-color: rgba(255,255,255,0.3); }
      .project-fields { display: none; }
      .project-fields.open { display: block; }
    
      .admin-save-btn {
        background: #fff;
        color: #09090b;
        border: none;
        border-radius: 8px;
        padding: 10px 24px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        margin-top: 0.5rem;
      }
      .admin-save-btn:hover { background: #e4e4e7; }
    
      .admin-save-feedback {
        text-align: center;
        font-size: 12px;
        color: #4ade80;
        margin-top: 8px;
        height: 16px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .admin-save-feedback.show { opacity: 1; }
    
      #admin-login {
        padding: 2rem 1.5rem;
        text-align: center;
      }
      #admin-login p { color: #71717a; font-size: 14px; margin-bottom: 1rem; }
      #admin-pw-error {
        color: #f87171;
        font-size: 12px;
        margin-top: 8px;
        display: none;
      }
    
      .admin-section-title {
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        margin: 0 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
      .admin-hint { font-size: 11px; color: #52525b; margin-top: 4px; }
    </style>

<div id="admin-overlay">
<div id="admin-panel">
<div id="admin-header">
<div>
<h2>Portfolio Admin</h2>
<p>Save changes, then download HTML to publish</p>
</div>
<div style={{display: 'flex', gap: '8px'}}>
<button className="admin-header-btn admin-export-btn" id="admin-export-trigger" onclick="exportHTML()" style={{display: 'none'}}>Download HTML</button>
<button className="admin-header-btn" onclick="adminClose()">✕ Close</button>
</div>
</div>

<div id="admin-login">
<p>Enter admin password to continue</p>
<input className="admin-input" id="admin-pw-input" onkeydown="if(event.key==='Enter') adminLogin()" placeholder="Password" style={{maxWidth: '280px', margin: '0 auto', display: 'block'}} type="password"/>
<p id="admin-pw-error">Incorrect password. Try again.</p>
<button className="admin-save-btn" onclick="adminLogin()" style={{maxWidth: '280px', margin: '1rem auto 0', display: 'block'}}>Unlock Admin</button>
</div>

<div id="admin-content" style={{display: 'none'}}>
<div id="admin-tabs">
<button className="admin-tab active" onclick="adminTab('hero', this)">Hero</button>
<button className="admin-tab" onclick="adminTab('nav', this)">Nav &amp; Footer</button>
<button className="admin-tab" onclick="adminTab('projects', this)">Projects</button>
<button className="admin-tab" onclick="adminTab('services', this)">Services</button>
</div>
<div id="admin-body">

<div className="admin-section active" id="admin-section-hero">
<p className="admin-section-title">Hero Section</p>
<div className="admin-grid-2">
<div className="admin-field">
<label className="admin-label">Your Name</label>
<input className="admin-input" id="af-name" placeholder="Olamide Afolabi"/>
</div>
<div className="admin-field">
<label className="admin-label">Role / Subtitle</label>
<input className="admin-input" id="af-role" placeholder="Product and Brand Designer, No-Code Developer"/>
</div>
</div>
<div className="admin-field">
<label className="admin-label">Profile Image URL or Upload</label>
<div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
<input className="admin-input" id="af-avatar" placeholder="https://..." style={{marginBottom: '0'}}/>
<input accept="image/*" id="af-avatar-upload" onchange="handleImageUpload(this, 'af-avatar')" style={{display: 'none'}} type="file"/>
<button className="admin-save-btn" onclick="document.getElementById('af-avatar-upload').click()" style={{marginTop: '0', width: 'auto', padding: '10px 16px', whiteSpace: 'nowrap'}} type="button">Upload</button>
</div>
<p className="admin-hint">Paste a direct image URL or upload (Warning: Large uploads use local storage space)</p>
</div>
<div className="admin-field">
<label className="admin-label">Hero Headline</label>
<textarea className="admin-textarea" id="af-headline" placeholder="I design products, brands, and no-code experiences that solve real problems." rows="3"></textarea>
</div>
<div className="admin-field">
<label className="admin-label">Hero Subtext</label>
<textarea className="admin-textarea" id="af-subtext" placeholder="Creating thoughtful, user-centered solutions..." rows="2"></textarea>
</div>
<button className="admin-save-btn" onclick="adminSave('hero')">Save Hero</button>
<div className="admin-save-feedback" id="fb-hero">✓ Hero section updated! Remember to Download HTML to publish.</div>
</div>

<div className="admin-section" id="admin-section-nav">
<p className="admin-section-title">Contact &amp; Links</p>
<div className="admin-grid-2">
<div className="admin-field">
<label className="admin-label">Email Address</label>
<input className="admin-input" id="af-email" placeholder="your.email@example.com"/>
</div>
<div className="admin-field">
<label className="admin-label">LinkedIn URL</label>
<input className="admin-input" id="af-linkedin" placeholder="https://linkedin.com/in/yourprofile"/>
</div>
<div className="admin-field">
<label className="admin-label">Twitter / X URL</label>
<input className="admin-input" id="af-twitter" placeholder="https://twitter.com/yourhandle"/>
</div>
<div className="admin-field">
<label className="admin-label">Footer Year / Copyright</label>
<input className="admin-input" id="af-copyright" placeholder="© 2026 Olamide Afolabi. All rights reserved."/>
</div>
</div>
<button className="admin-save-btn" onclick="adminSave('nav')">Save Contact Info</button>
<div className="admin-save-feedback" id="fb-nav">✓ Contact info updated! Remember to Download HTML to publish.</div>
</div>

<div className="admin-section" id="admin-section-projects">
<p className="admin-section-title">Project Cards &amp; Modals</p>
<div id="admin-projects-list"></div>
<button className="admin-save-btn" onclick="adminSave('projects')">Save All Projects</button>
<div className="admin-save-feedback" id="fb-projects">✓ Projects updated! Remember to Download HTML to publish.</div>
</div>

<div className="admin-section" id="admin-section-services">
<p className="admin-section-title">Services Cards</p>
<div id="admin-services-list"></div>
<button className="admin-save-btn" onclick="adminSave('services')">Save Services</button>
<div className="admin-save-feedback" id="fb-services">✓ Services updated! Remember to Download HTML to publish.</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
