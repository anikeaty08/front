import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ["Inter", "sans-serif"],
},
colors: {
brand: {
lime: "#FFB347",
limeLight: "#FFF0D4",
black: "#0a0a0a",
gray: "#F5F5F5",
},
},
animation: {
"fade-in": "fadeIn 1s ease-out",
"slide-up": "slideUp 0.8s ease-out",
},
keyframes: {
fadeIn: {
"0%": { opacity: "0" },
"100%": { opacity: "1" },
},
slideUp: {
"0%": { transform: "translateY(20px)", opacity: "0" },
"100%": { transform: "translateY(0)", opacity: "1" },
},
},
},
},
};



            !(function () {
              if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: !1 };
                var i = document.createElement("script");
                (i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"),
                  (i.onload = function () {
                    window.UnicornStudio.isInitialized ||
                      (UnicornStudio.init(),
                      (window.UnicornStudio.isInitialized = !0));
                  }),
                  (document.head || document.body).appendChild(i);
              }
            })();
          


      const form = document.getElementById('contactForm');
      const submitBtn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const btnSpinner = document.getElementById('btnSpinner');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');
  
      // Real-time validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
  
      function showError(inputId, errorId) {
        document.getElementById(inputId).classList.add('border-red-500');
        document.getElementById(errorId).classList.remove('hidden');
      }
  
      function hideError(inputId, errorId) {
        document.getElementById(inputId).classList.remove('border-red-500');
        document.getElementById(errorId).classList.add('hidden');
      }
  
      // Validate on blur
      nameInput.addEventListener('blur', function() {
        if (this.value.trim().length < 2) {
          showError('name', 'nameError');
        } else {
          hideError('name', 'nameError');
        }
      });
  
      emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value)) {
          showError('email', 'emailError');
        } else {
          hideError('email', 'emailError');
        }
      });
  
      messageInput.addEventListener('blur', function() {
        if (this.value.trim().length < 10) {
          showError('message', 'messageError');
        } else {
          hideError('message', 'messageError');
        }
      });
  
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
  
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
  
        // Validate all fields
        let isValid = true;
  
        if (nameInput.value.trim().length < 2) {
          showError('name', 'nameError');
          isValid = false;
        }
  
        if (!validateEmail(emailInput.value)) {
          showError('email', 'emailError');
          isValid = false;
        }
  
        if (messageInput.value.trim().length < 10) {
          showError('message', 'messageError');
          isValid = false;
        }
  
        if (!isValid) {
          return;
        }
  
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnSpinner.classList.remove('hidden');
  
        // Get form data
        const formData = new FormData(form);
  
        try {
          // Submit to FormSubmit
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
  
          if (response.ok) {
            // Show success message
            successMessage.classList.remove('hidden');
            form.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          // Show error message
          errorMessage.classList.remove('hidden');
          errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
          // Reset button state
          submitBtn.disabled = false;
          btnText.textContent = 'Send Message';
          btnSpinner.classList.add('hidden');
        }
      });
  
      // Save form data to browser (in case user accidentally refreshes)
      const inputs = [nameInput, emailInput, document.getElementById('company'), messageInput];
      
      inputs.forEach(input => {
        // Load saved data on page load
        const saved = sessionStorage.getItem(input.id);
        if (saved) {
          input.value = saved;
        }
  
        // Save data on input
        input.addEventListener('input', function() {
          sessionStorage.setItem(this.id, this.value);
        });
      });
  
      // Clear saved data on successful submission
      form.addEventListener('submit', function() {
        inputs.forEach(input => {
          sessionStorage.removeItem(input.id);
        });
      });
    


      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5,
        },
      });

      function toggleMobileMenu() {
        const menu = document.getElementById("mobile-menu");
        if (menu.classList.contains("translate-x-full")) {
          menu.classList.remove("translate-x-full");
          document.body.style.overflow = "hidden";
        } else {
          menu.classList.add("translate-x-full");
          document.body.style.overflow = "";
        }
      }

      const projectsData = {
        glowessence: {
          title: "Own Your History",
          subtitle: "A digital storytelling and archival website for Western Michigan University Football.",
          tags: ["Strategy", "Social Media"],
          timeline: "3 Months",
          services: ["Social Media Marketing", "Content Strategy", "Influencer Outreach"],
          tools: ["Figma", "Sprout Social", "Adobe Premiere", "Canva"],
          about: "<em>Own Your History</em> is a digital storytelling and archival website created for Western Michigan University Football that preserves and celebrates the program’s legacy beyond traditional statistics. Branded under <em>Hidden Memory v2.0</em>, the site combines bold visual design with historical documentation to capture both the public record and the personal experiences that define Broncos football.<br><br>By highlighting moments, memories, and cultural impact alongside wins and losses, the platform connects past, present, and future generations of WMU players, alumni, and fans. The project reinforces program identity, honors those who built it, and ensures the history of WMU Football is preserved with authenticity, pride, and emotion.",
          process: 'We conducted a comprehensive audit of their existing digital channels to identify gaps and opportunities. Our strategy focused on three core pillars: education, lifestyle integration, and social proof. <br><br>We implemented a "Reels-first" strategy on Instagram to showcase product textures and application routines. On TikTok, we launched an influencer campaign centered around the #GlowUpWithEssence challenge, which generated significant user-generated content.',
          testimonial: {
            text: "Our engagement rates have never been higher. The team truly understood our brand voice and translated it perfectly into visual content.",
            author: "Sarah Jenkins",
            role: "CMO, GlowEssence",
            initials: "SJ",
          },
          image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47a0a755-74c6-4a51-bca7-6ee9c6b244db_800w.png?w=800&q=80",
        },
        brewzen: {
          title: "Bright Blends",
          subtitle: "A premium smoothie brand created to deliver lasting energy and essential nutrients.",
          tags: ["Branding", "Visual Identity"],
          timeline: "4 Months",
          services: ["Brand Identity", "Packaging Design", "Social Media Management"],
          tools: ["Photoshop", "Illustrator", "Premiere Pro", "Figma"],
          about: "Bright Blends is a premium smoothie brand created to deliver lasting energy and essential nutrients. Developed using Photoshop, Illustrator, Premiere Pro, and Figma, the project balances strong visual identity with functional design.<br><br>Guided by market research, Bright Blends is both health-focused and visually engaging—designed to resonate with modern, wellness-minded consumers.",
          process: "We started by refining their visual identity, introducing a vibrant, energetic color palette that reflects their nutrient-rich ingredients. We developed a content strategy that highlights the health benefits and lifestyle of their customers.<br><br>Interactive social media campaigns helped build a community of wellness enthusiasts online, driving both web traffic and brand awareness.",
          testimonial: {
            text: "The branding captured the essence of our smoothie line perfectly. We have seen a 40% increase in online engagement since the launch.",
            author: "Michael Chen",
            role: "Founder, Bright Blends",
            initials: "MC",
          },
          image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c50f8091-51b6-4820-9559-96177ecb000e_800w.png?w=800&q=80",
        },
        burgerhaven: {
          title: "BurgerHaven",
          subtitle: "Driving foot traffic and hungry customers through targeted local SEO and appetizing content.",
          tags: ["PPC", "SEO", "Content"],
          timeline: "6 Months",
          services: ["Local SEO", "Google Ads", "Food Photography", "Social Media"],
          tools: ["Google Analytics", "SEMRush", "Davinci Resolve", "Lightroom"],
          about: "BurgerHaven serves the best gourmet burgers in town but struggled to get discovered by tourists and locals alike online. They needed a strategy to dominate local search results.",
          process: "Our approach was two-fold: optimize for local discovery and tempt with visuals. We overhauled their Google Business Profile and implemented a local SEO strategy targeting high-intent keywords.<br><br>Simultaneously, we ran geo-targeted PPC campaigns featuring mouth-watering video content of their signature burgers being made, resulting in a packed dining room.",
          testimonial: {
            text: "We are fully booked almost every weekend now. The local SEO work put us on the map, literally.",
            author: "Jessica Alverez",
            role: "General Manager, BurgerHaven",
            initials: "JA",
          },
          image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccb180a2-dcfa-4b4a-b1c4-6c38e55c506f_800w.png?w=800&q=80",
        },
      };

      function openProject(id) {
        const project = projectsData[id];
        if (!project) return;
        document.getElementById("modal-title").textContent = project.title;
        document.getElementById("modal-subtitle").textContent = project.subtitle;
        document.getElementById("modal-timeline").textContent = project.timeline;
        document.getElementById("modal-about").innerHTML = project.about;
        document.getElementById("modal-process").innerHTML = project.process;
        document.getElementById("modal-testimonial-text").textContent = project.testimonial.text;
        document.getElementById("modal-testimonial-author").textContent = project.testimonial.author;
        document.getElementById("modal-testimonial-role").textContent = project.testimonial.role;
        document.getElementById("modal-testimonial-avatar").textContent = project.testimonial.initials;
        const imgElement = document.getElementById("modal-image");
        imgElement.src = project.image;
        imgElement.alt = project.title;
        const tagsContainer = document.getElementById("modal-tags");
        tagsContainer.innerHTML = "";
        project.tags.forEach((tag) => {
          const span = document.createElement("span");
          span.className = "bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black uppercase tracking-wide";
          span.textContent = tag;
          tagsContainer.appendChild(span);
        });
        const servicesContainer = document.getElementById("modal-services");
        servicesContainer.innerHTML = "";
        project.services.forEach((service) => {
          const div = document.createElement("div");
          div.textContent = service;
          servicesContainer.appendChild(div);
        });
        const toolsContainer = document.getElementById("modal-tools");
        toolsContainer.innerHTML = "";
        project.tools.forEach((tool) => {
          const span = document.createElement("span");
          span.className = "bg-neutral-100 text-neutral-600 px-3 py-1 rounded-md text-xs font-medium border border-neutral-200";
          span.textContent = tool;
          toolsContainer.appendChild(span);
        });
        const modal = document.getElementById("project-modal");
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        lucide.createIcons();
      }

      function closeProject() {
        const modal = document.getElementById("project-modal");
        modal.classList.add("hidden");
        document.body.style.overflow = "";
      }

      document.getElementById("project-modal").addEventListener("click", function (e) {
        if (e.target === this) closeProject();
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeProject();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-125 mix-blend-hard-light" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div>
</div>
</div>
<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
<a className="bg-brand-black px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300" href="#">
<span className="text-brand-lime text-lg font-bold tracking-tight">
            Migliaccio.
          </span>
</a>
<div className="flex items-center gap-10">
<ul className="hidden md:flex items-center gap-8">
<li className="">
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#about">
                About us
              </a>
</li>
<li className="">
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#services">
                Services
              </a>
</li>
<li>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#work">
                Case studies
              </a>
</li>
<li>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#contact">
                Contact
              </a>
</li>
</ul>
<a className="hidden md:inline-flex px-6 py-3 text-sm font-medium text-white bg-brand-black rounded-full hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md" href="#contact">
            Get in touch
          </a>
<button className="md:hidden text-neutral-900 focus:outline-none" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>
<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center" id="mobile-menu">
<button className="absolute top-8 right-6 text-neutral-900" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<ul className="flex flex-col gap-8 text-center">
<li>
<a className="text-2xl font-semibold text-neutral-900 hover:text-brand-lime transition-colors" href="#about" onclick="toggleMobileMenu()">
            About us
          </a>
</li>
<li>
<a className="text-2xl font-semibold text-neutral-900 hover:text-brand-lime transition-colors" href="#services" onclick="toggleMobileMenu()">
            Services
          </a>
</li>
<li>
<a className="text-2xl font-semibold text-neutral-900 hover:text-brand-lime transition-colors" href="#work" onclick="toggleMobileMenu()">
            Case studies
          </a>
</li>
<li>
<a className="text-2xl font-semibold text-neutral-900 hover:text-brand-lime transition-colors" href="#contact" onclick="toggleMobileMenu()">
            Contact
          </a>
</li>
</ul>
</div>
<section className="overflow-hidden pt-40 pb-20 relative" id="about">
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col items-center text-center max-w-5xl mx-auto animate-slide-up">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-lime mb-10">
<span className="text-xs font-semibold tracking-wide text-brand-black">
              Welcome to Migliaccio Marketing!
            </span>
</div>
<h1 className="leading-[1.1] md:text-7xl lg:text-[5rem] text-5xl font-semibold text-neutral-100 tracking-tight mb-8">
            Connecting Your Brand to the World,
            <br/>
            One Click at a Time.
          </h1>
<p className="text-lg md:text-xl font-normal text-neutral-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            We're not just a social media marketing agency—we're your ticket to
            digital excellence and engagement growth. With a canvas as vast as
            the internet, your business has limitless potential to connect with
            its audience. And we're here to paint that picture of success.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white rounded-full font-medium text-sm tracking-tight transition-all hover:bg-neutral-800 hover:-translate-y-0.5 shadow-lg shadow-black/5" href="#contact">
              Get in touch
            </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-300 text-neutral-900 rounded-full font-medium text-sm tracking-tight hover:border-neutral-900 transition-all hover:-translate-y-0.5" href="#services">
              Explore services
            </a>
</div>
</div>
<div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl animate-fade-in mt-4">
<img alt="Modern Office" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4f73261-c06c-47c6-a758-52f06553834a_1600w.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
</section>
<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-neutral-200">
<div className="space-y-3">
<div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
              250+
            </div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
              Brands Launched
            </div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
              98%
            </div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
              Client Satisfaction
            </div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
              15M+
            </div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
              Reach Generated
            </div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
              50+
            </div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
              Industry Awards
            </div>
</div>
</div>
</div>
</section>
<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-sm font-semibold text-neutral-900 bg-brand-lime/30 inline-block px-3 py-1 rounded-full mb-4">
            OUR EXPERTISE
          </h2>
<h3 className="md:text-5xl text-4xl font-semibold text-neutral-100 tracking-tight">
            Services That Spark Growth
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Brand Identity
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Crafting memorable visual identities that capture your essence and
              resonate with your audience across every touchpoint.
            </p>
</div>
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Digital Marketing
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Data-driven campaigns across social, search, and display that
              drive engagement and deliver measurable ROI.
            </p>
</div>
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Creative Strategy
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Bold creative concepts and storytelling that cut through the noise
              and leave lasting impressions.
            </p>
</div>
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Brand Positioning
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Strategic positioning that differentiates you in crowded markets
              and builds lasting competitive advantage.
            </p>
</div>
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Content Creation
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Compelling content that engages, educates, and converts across all
              platforms and formats.
            </p>
</div>
<div className="group p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 text-neutral-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h4 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Analytics &amp; Insights
            </h4>
<p className="text-sm leading-relaxed text-neutral-500">
              Deep data analysis and actionable insights that inform strategy
              and optimize performance.
            </p>
</div>
</div>
</div>
</section>
<section className="pt-32 pb-32" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-3xl">
<h3 className="md:text-5xl text-4xl font-semibold text-neutral-100 tracking-tight mb-4">
              See our work
            </h3>
<p className="text-lg text-neutral-500">
              Welcome to the spotlight, where Migliaccio's magic touches down,
              turning the ordinary into the extraordinary.
            </p>
</div>
<a className="inline-flex px-8 py-3 bg-brand-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-md shrink-0" href="#">
            View all
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
<div className="bg-neutral-50 rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="h-64 overflow-hidden">
<img alt="GlowEssence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47a0a755-74c6-4a51-bca7-6ee9c6b244db_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">
                OWN YOUR HISTORY
              </h4>
<p className="leading-relaxed text-sm text-neutral-500 mb-6">
                Own Your History is a digital archive and storytelling platform
                created for Western Michigan University Football.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  Facebook
                </span>
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  TikTok
                </span>
</div>
<button className="inline-flex items-center gap-2 hover:text-neutral-600 transition-colors text-sm font-medium text-neutral-900 bg-transparent border-none p-0 cursor-pointer" onclick="openProject('glowessence')">
                View project
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
<div className="bg-neutral-50 rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="h-64 overflow-hidden">
<img alt="BrewZen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c50f8091-51b6-4820-9559-96177ecb000e_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">
                Bright Blends
              </h4>
<p className="leading-relaxed text-sm text-neutral-500 mb-6">
                Bright Blends is a premium smoothie brand created to deliver
                lasting energy and essential nutrients.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  Instagram
                </span>
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  TikTok
                </span>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors bg-transparent border-none p-0 cursor-pointer" onclick="openProject('brewzen')">
                View project
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
<div className="bg-neutral-50 rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="h-64 overflow-hidden">
<img alt="BurgerHaven" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccb180a2-dcfa-4b4a-b1c4-6c38e55c506f_800w.png?w=800&amp;q=80"/>
</div>
<div className="p-8">
<h4 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">
                BurgerHaven Restaurant
              </h4>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Sizzling Digital Transformation for BurgerHaven Restaurant
                increasing local foot traffic.
              </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  PPC
                </span>
<span className="bg-brand-lime px-3 py-1 rounded-full text-xs font-semibold text-black">
                  SEO
                </span>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors bg-transparent border-none p-0 cursor-pointer" onclick="openProject('burgerhaven')">
                View project
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="pb-32 pt-10 px-4">
<div className="max-w-7xl mx-auto bg-neutral-50 rounded-[3rem] px-6 py-24 md:px-16">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="inline-block bg-brand-lime px-4 py-1.5 rounded-full text-xs font-semibold text-black mb-6">
            Testimonials
          </span>
<h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">
            What our clients say
          </h2>
<p className="text-lg text-neutral-500">
            Don't just take our word for it, see what the awesome people we work
            with have to say.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="bg-black inline-flex items-center gap-1 px-4 py-1.5 rounded-full mb-8">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-600 font-medium">
              "Since partnering with this incredible social media marketing
              team, our online engagement has skyrocketed! Sales have increased
              by 30% in just a few months, and our brand awareness is at an
              all-time high."
            </p>
</div>
<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="bg-black inline-flex items-center gap-1 px-4 py-1.5 rounded-full mb-8">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-600 font-medium">
              "This agency has been a game-changer for our startup. Their
              data-driven strategies and deep understanding of social media
              algorithms have significantly boosted our lead generation and
              conversion rates."
            </p>
</div>
<div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="bg-black inline-flex items-center gap-1 px-4 py-1.5 rounded-full mb-8">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-brand-lime text-brand-lime" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-600 font-medium">
              "I was amazed by the immediate impact their work had on our event
              promotions. Not only did they increase our event's visibility, but
              they also engaged our target audience in meaningful ways."
            </p>
</div>
</div>
</div>
</section>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Contact Form</title>

<style>
      .spinner {
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top: 3px solid white;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
      }
  
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
  
        100% {
          transform: rotate(360deg);
        }
      }
  
      .success-checkmark {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: block;
        stroke-width: 3;
        stroke: #0a0a0a;
        stroke-miterlimit: 10;
        animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
      }
  
      .success-checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 3;
        stroke-miterlimit: 10;
        stroke: #c4ff61;
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
      }
  
      .success-checkmark__check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
      }
  
      @keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
  
      @keyframes scale {
  
        0%,
        100% {
          transform: none;
        }
  
        50% {
          transform: scale3d(1.1, 1.1, 1);
        }
      }
  
      @keyframes fill {
        100% {
          box-shadow: inset 0px 0px 0px 30px #c4ff61;
        }
      }
    </style>
<section className="pb-32 relative overflow-hidden text-white mx-2" id="contact">
<div className="bg-brand-black rounded-[3rem] py-32 px-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Ready to Ignite<br/>Your Brand?
          </h2>
<p className="text-lg text-neutral-400 mb-12 font-normal">
            Let's create something extraordinary together
          </p>

<div className="hidden mb-8 p-6 bg-brand-lime/10 border border-brand-lime/30 rounded-2xl" id="successMessage">
<div className="flex items-center justify-center mb-3">
<svg className="success-checkmark" viewbox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
<circle className="success-checkmark__circle" cx="26" cy="26" fill="none" r="25"></circle>
<path className="success-checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-brand-lime mb-2">Message Sent!</h3>
<p className="text-neutral-300">Thank you for reaching out. We'll get back to you soon.</p>
</div>

<div className="hidden mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl" id="errorMessage">
<h3 className="text-2xl font-semibold text-red-400 mb-2">Oops!</h3>
<p className="text-neutral-300">Something went wrong. Please try again or email us directly at <a className="text-brand-lime underline" href="mailto:cmigs77@gmail.com">cmigs77@gmail.com</a></p>
</div>
<form action="https://formsubmit.co/cmigs77@gmail.com" className="space-y-4 text-left" id="contactForm" method="POST">

<input name="_subject" type="hidden" value="New Migliaccio Marketing Contact Form Submission"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>
<input name="_autoresponse" type="hidden" value="Thank you for contacting Migliaccio Marketing! We've received your message and will get back to you within 24-48 hours."/>
<div className="space-y-4">
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all text-sm" id="name" minlength="2" name="name" placeholder="Your Name" required="" type="text"/>
<p className="text-red-400 text-xs mt-1 hidden" id="nameError">Please enter your name</p>
</div>
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all text-sm" id="email" name="email" placeholder="Email Address" required="" type="email"/>
<p className="text-red-400 text-xs mt-1 hidden" id="emailError">Please enter a valid email</p>
</div>
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all text-sm" id="company" name="company" placeholder="Company Name (Optional)" type="text"/>
</div>
<div className="">
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all text-sm h-36 resize-none" id="message" minlength="10" name="message" placeholder="Tell us about your project..." required=""></textarea>
<p className="text-red-400 text-xs mt-1 hidden" id="messageError">Please enter a message (minimum 10
                  characters)</p>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-brand-lime text-black font-semibold py-4 rounded-full hover:bg-white transition-all tracking-tight text-sm shadow-lg shadow-brand-lime/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" id="submitBtn" type="submit">
<span id="btnText">Send Message</span>
<span className="hidden spinner" id="btnSpinner"></span>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="bg-brand-black px-4 py-1.5 rounded-full">
<span className="text-brand-lime font-bold text-base tracking-tight">
            Migliaccio.
          </span>
</div>
<p className="text-sm font-medium text-neutral-500">
          © 2025 Migliaccio Marketing Agency. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</footer>
<div aria-modal="true" className="fixed inset-0 z-[100] bg-white hidden overflow-y-auto" id="project-modal" role="dialog">
<div className="fixed top-6 right-6 z-50">
<button className="group bg-white p-2.5 rounded-full hover:bg-neutral-50 transition-colors shadow-lg border border-neutral-100" onclick="closeProject()">
<svg className="lucide lucide-x w-5 h-5 text-neutral-600 group-hover:text-black" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="min-h-screen w-full bg-white relative animate-slide-up">
<div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
<div className="mb-12">
<div className="flex flex-wrap gap-2 mb-6" id="modal-tags"></div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-4 leading-[1.1]" id="modal-title"></h1>
<p className="text-xl text-neutral-500 font-medium max-w-2xl" id="modal-subtitle"></p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-neutral-100 mb-16">
<div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Timeline
              </span>
<span className="text-sm font-medium text-neutral-900" id="modal-timeline"></span>
</div>
<div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Services
              </span>
<div className="flex flex-col gap-1 text-sm font-medium text-neutral-900" id="modal-services"></div>
</div>
<div className="col-span-2">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                Tools Used
              </span>
<div className="flex flex-wrap gap-2" id="modal-tools"></div>
</div>
</div>
<div className="space-y-16">
<div className="max-w-3xl">
<h3 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">
                Project Summary
              </h3>
<p className="text-lg text-neutral-600 leading-relaxed font-normal" id="modal-about"></p>
</div>
<div className="w-full rounded-[2rem] overflow-hidden bg-neutral-100 shadow-sm relative group border border-neutral-100">
<img className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s]" id="modal-image" src=""/>
</div>
<div className="max-w-3xl">
<h3 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">
                What we did
              </h3>
<div className="text-lg text-neutral-600 leading-relaxed space-y-6 font-normal" id="modal-process"></div>
</div>
<div className="mt-20">
<h3 className="text-sm font-semibold text-neutral-900 mb-8 uppercase tracking-wider">
                Client Testimonial
              </h3>
<div className="relative pl-8 md:pl-10 border-l-4 border-brand-lime">
<blockquote className="text-2xl md:text-3xl font-medium text-neutral-900 mb-8 leading-snug tracking-tight">
                  "
                  <span id="modal-testimonial-text"></span>
                  "
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 font-bold text-lg" id="modal-testimonial-avatar"></div>
<div>
<div className="text-base font-semibold text-neutral-900" id="modal-testimonial-author"></div>
<div className="text-sm text-neutral-500" id="modal-testimonial-role"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
