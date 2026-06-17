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
                    const slider = document.getElementById('heroSlider');
                    const beforeWrapper = document.getElementById('beforeImageWrapper');
                    const sliderHandle = document.getElementById('sliderHandle');
                    let isDragging = false;

                    function updateSlider(x) {
                      const rect = slider.getBoundingClientRect();
                      let percentage = ((x - rect.left) / rect.width) * 100;
                      percentage = Math.max(0, Math.min(100, percentage));
                      beforeWrapper.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
                      sliderHandle.style.left = percentage + '%';
                    }

                    sliderHandle.addEventListener('mousedown', (e) => { isDragging = true; e.preventDefault(); });
                    document.addEventListener('mouseup', () => isDragging = false);
                    document.addEventListener('mousemove', (e) => {
                      if (isDragging) updateSlider(e.clientX);
                    });

                    sliderHandle.addEventListener('touchstart', (e) => { isDragging = true; e.preventDefault(); });
                    document.addEventListener('touchend', () => isDragging = false);
                    document.addEventListener('touchmove', (e) => {
                      if (isDragging) updateSlider(e.touches[0].clientX);
                    });
                  })();
                


      // Mobile menu toggle
      document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.toggle('hidden');
      });

      // FAQ toggle
      function toggleFaq(btn) {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');

        // Toggle the open class
        content.classList.toggle('open');

        // Rotate icon
        if (content.classList.contains('open')) {
          icon.style.transform = 'rotate(45deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Before/After slider
      const slider = document.getElementById('heroSlider');
      const beforeImage = document.getElementById('beforeImage');
      const sliderHandle = document.getElementById('sliderHandle');
      let isDragging = false;

      function updateSlider(x) {
        const rect = slider.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        beforeImage.style.width = percentage + '%';
        sliderHandle.style.left = percentage + '%';
      }

      sliderHandle.addEventListener('mousedown', () => isDragging = true);
      document.addEventListener('mouseup', () => isDragging = false);
      document.addEventListener('mousemove', (e) => {
        if (isDragging) updateSlider(e.clientX);
      });

      sliderHandle.addEventListener('touchstart', () => isDragging = true);
      document.addEventListener('touchend', () => isDragging = false);
      document.addEventListener('touchmove', (e) => {
        if (isDragging) updateSlider(e.touches[0].clientX);
      });

      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 0) {
          nav.classList.add('shadow-sm');
        } else {
          nav.classList.remove('shadow-sm');
        }
      });

      // ===== SUPABASE FORM HANDLER =====
      const { createClient } = supabase;

      // Initialize Supabase client with legacy anon key
      const supabaseClient = createClient(
        'https://cudmdajanxpgsnkseqxk.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1ZG1kYWphbnhwZ3Nua3NlcXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MDk4ODgsImV4cCI6MjA4MjE4NTg4OH0.FpiTyiir1aGdDnSVYDczrj7veo37d-aus4nw5WR0CKw'
      );

      // Get form elements
      const leadForm = document.getElementById('leadForm');
      const submitBtn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const btnArrow = document.getElementById('btnArrow');
      const btnSpinner = document.getElementById('btnSpinner');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');
      const errorMessageText = document.getElementById('errorMessageText');

      // Handle form submission
      leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Submitting...';
        btnArrow.classList.add('hidden');
        btnSpinner.classList.remove('hidden');

        // Hide any previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');

        // Get form data
        const formData = {
          full_name: document.getElementById('fullName').value.trim(),
          business_website: document.getElementById('businessWebsite').value.trim(),
          email: document.getElementById('email').value.trim(),
          phone: document.getElementById('phone').value.trim() || null,
          description: document.getElementById('description').value.trim() || null
        };

        try {
          // Insert data into Supabase
          const { data, error } = await supabaseClient
            .from('leads')
            .insert([formData])
            .select();

          if (error) throw error;

          // Show success message
          successMessage.classList.remove('hidden');

          // Reset form
          leadForm.reset();

          // Scroll to success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          // Optional: Send to Google Analytics or other tracking
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
              'event_category': 'Lead Generation',
              'event_label': 'Free Images Form'
            });
          }

        } catch (error) {
          console.error('Error submitting form:', error);

          // Show error message
          errorMessageText.textContent = error.message || 'Something went wrong. Please try again.';
          errorMessage.classList.remove('hidden');

          // Scroll to error message
          errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } finally {
          // Reset button state
          submitBtn.disabled = false;
          btnText.textContent = 'Get My 5 free Images Now';
          btnArrow.classList.remove('hidden');
          btnSpinner.classList.add('hidden');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-white/95 border-gray-100" style={{backdropFilter: 'blur(16px)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex lg:h-20 h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<img alt="Wairo Creative AI Studio" className="lg:h-10 object-auto h-8 max-h-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6633ad5f-c95d-45a6-ab4f-09da30013389_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600" style={{}}>
<a className="transition-colors hover:text-gray-900 font-sans" href="#services" style={{}}>
              Services
            </a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#gallery" style={{}}>
              Portfolio
            </a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#pricing" style={{}}>
              Pricing
            </a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#contact" style={{}}>
              Contact
            </a>
</div>
<a className="transition-all duration-300 hover:shadow-lg hidden md:flex items-center gap-2 text-sm font-medium text-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#offer" style={{background: '#00D9A3'}}>
            Get 5 free Images
            <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<button className="md:hidden p-2 text-gray-600" id="mobileMenuBtn" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t px-4 py-4 bg-white border-gray-100" id="mobileMenu" style={{}}>
<div className="flex flex-col gap-4 text-sm font-medium text-gray-600" style={{}}>
<a className="py-2 font-sans" href="#services">Services</a>
<a className="py-2 font-sans" href="#gallery">Portfolio</a>
<a className="py-2 font-sans" href="#pricing">Pricing</a>
<a className="py-2 font-sans" href="#contact">Contact</a>
</div>
</div>
</nav>
<main className="">

<section className="lg:pt-32 lg:pb-24 sm:px-6 lg:px-8 pt-24 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="animate-fade-in">
<h1 className="sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-3xl font-semibold text-gray-900 tracking-tight font-sans mb-6">
                Transform Your Product Photography in 24 Hours
                <span className="font-semibold text-gray-500 font-sans">
                  — Without a Studio, Photographer, or €1000+ Budget
                </span>
</h1>
<p className="lg:text-lg leading-relaxed text-base text-gray-600 font-sans max-w-xl mb-8">
                Europe's leading brands trust our AI-powered professional
                product imaging to create studio-quality visuals at 95% lower
                cost. See the difference yourself.
              </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 text-white font-sans" href="#offer" style={{background: '#00D9A3', animation: 'pulse 2s infinite'}}>
                  Get 5 free Product Images
                  <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-height="20" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-sans" href="#contact" style={{}}>
                  Book a Strategy Call
                  <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-height="20" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-gray-500" style={{}}>
<span className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Try for free!
                </span>
<span className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  48-hour delivery
                </span>
<span className="flex items-center gap-2 font-sans">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Used by 50+ Europe businesses
                </span>
</div>
</div>

<div className="animate-fade-in relative" style={{animationDelay: '0.2s'}}>
<div className="overflow-hidden border rounded-3xl relative shadow-2xl border-gray-100" style={{}}>
<div className="slider-container sm:h-96 lg:h-[500px] h-80 relative" id="heroSlider">

<img alt="After - Professional product image" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ceba885d-6f18-4eef-95fa-69626373473c_1600w.jpg"/>

<div className="absolute top-0 right-0 bottom-0 left-0" id="beforeImageWrapper" style={{clipPath: 'inset(0px 42.90429% 0px 0px)'}}>
<img alt="Before - Basic product image" className="object-auto w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82cfae9b-8c48-49d8-932c-5a1df673079d_1600w.webp" style={{filter: 'grayscale(30%) brightness(0.8) contrast(0.9)'}}/>
</div>

<div className="flex cursor-ew-resize slider-handle absolute top-0 bottom-0 items-center justify-center" id="sliderHandle" style={{left: '57.09571%', transform: 'translateX(-50%)'}}>
<div className="w-1 h-full shadow-lg bg-white"></div>
<div className="flex w-10 h-10 rounded-full absolute shadow-lg items-center justify-center bg-white">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide text-gray-600" data-icon="lucide:move-horizontal" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m18 8l4 4l-4 4M2 12h20M6 8l-4 4l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="absolute top-4 left-4 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                    Before
                  </div>
<div className="absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                    After
                  </div>
</div>

</div>
<div className="-bottom-4 -right-4 bg-white max-w-xs border-gray-100 border rounded-2xl absolute shadow-xl">
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 rounded-full items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<div className="">
<p className="text-sm font-semibold text-gray-900 font-sans" style={{}}>
                      90% Cost Savings
                    </p>
<p className="text-xs text-gray-500 font-sans" style={{}}>
                      vs. traditional photography
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y pt-12 pb-12 bg-gray-50 border-gray-100" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-sm font-medium text-gray-500 font-sans text-center mb-8">
            Trusted by Europe's Top Brands
          </p>
<div className="trust-carousel-wrapper w-full overflow-hidden md:overflow-visible">
<div className="trust-carousel-track flex md:flex-wrap items-center md:justify-center gap-8 lg:gap-16 w-max md:w-full">
<img alt="Marka Aydinlatma" className="lg:h-16 hover:opacity-100 transition-opacity flex-shrink-0 opacity-60 h-12 object-contain" src="https://i.ibb.co/G4XBn27Z/marka-aydinlatma.png"/>
<img alt="Morgan's Pomade" className="h-12 lg:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" src="https://i.ibb.co/HD1KNVLG/morgans-pomade.png"/>
<img alt="Modesco" className="h-12 lg:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0" src="https://i.ibb.co/PsF7bf8T/modesco.png"/>
<img alt="Marka Aydinlatma" className="h-12 lg:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 md:hidden" src="https://i.ibb.co/G4XBn27Z/marka-aydinlatma.png"/>
<img alt="Morgan's Pomade" className="h-12 lg:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 md:hidden" src="https://i.ibb.co/HD1KNVLG/morgans-pomade.png"/>
<img alt="Modesco" className="h-12 lg:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 md:hidden" src="https://i.ibb.co/PsF7bf8T/modesco.png"/>
</div>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-gray-900 tracking-tight font-sans mb-4">
              Still Spending €500-€2000 Per Photoshoot?
            </h2>
<p className="text-lg max-w-2xl mx-auto text-gray-600 font-sans" style={{}}>
              There's a smarter way to create professional product images
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="rounded-2xl p-6 lg:p-8 border bg-gray-50 border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-pink-50" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 text-purple-500 iconify--lucide" data-icon="lucide:wallet" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</g>
</svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans" style={{}}>
                Expensive Costs
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Studio rental &amp; photographer fees quickly add up to €500+
                per session
              </p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-gray-50 border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-purple-50" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 text-blue-500 iconify--lucide" data-icon="lucide:clock" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans" style={{}}>
                Time-Consuming
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Coordinating photoshoots takes days or weeks of planning
              </p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-gray-50 border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-pink-50" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide text-pink-600" data-icon="lucide:image-off" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m2 2l20 20M10.41 10.41a2 2 0 1 1-2.83-2.83m5.92 5.92L6 21m12-9l3 3"></path>
<path d="M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59M21 15V5a2 2 0 0 0-2-2H9"></path>
</g>
</svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans" style={{}}>
                Limited Variations
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Editing rounds are limited and each variation costs extra
              </p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-gray-50 border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-purple-50" style={{}}>
<svg aria-hidden="true" className="iconify w-6 h-6 text-blue-500 iconify--lucide" data-icon="lucide:calendar-x" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18m-7 4l-4 4m0-4l4 4"></path>
</g>
</svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans" style={{}}>
                Delayed Launches
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Products sit waiting for images, losing valuable sales time
              </p>
</div>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 bg-gray-900 pt-16 pr-4 pb-16 pl-4">
<style>
    @keyframes text-slide-cycle {
      0% {
        opacity: 0;
        transform: translateY(20px);
        visibility: visible;
      }
      5% {
        opacity: 1;
        transform: translateY(0);
      }
      28% {
        opacity: 1;
        transform: translateY(0);
      }
      33% {
        opacity: 0;
        transform: translateY(-20px);
        visibility: hidden;
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
        visibility: hidden;
      }
    }
    .animate-text-cycle {
      animation: text-slide-cycle 9s linear infinite;
    }
    .delay-0 {
      animation-delay: 0s;
    }
    .delay-3 {
      animation-delay: 3s;
    }
    .delay-6 {
      animation-delay: 6s;
    }
  </style>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">

<h2 className="grid grid-cols-1 grid-rows-1 place-items-center sm:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight font-sans mb-6 min-h-[3em] sm:min-h-[2em]">

<span className="col-start-1 row-start-1 animate-text-cycle delay-0 opacity-0 bg-clip-text text-transparent px-2 py-1" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(118, 75, 162, 0.4))'}}>
          Professional Product Imagery
        </span>

<span className="col-start-1 row-start-1 animate-text-cycle delay-3 opacity-0 bg-clip-text text-transparent px-2 py-1" style={{backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(245, 87, 108, 0.4))'}}>
          Zero Photoshoots
        </span>

<span className="col-start-1 row-start-1 animate-text-cycle delay-6 opacity-0 bg-clip-text text-transparent px-2 py-1" style={{backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 20px rgba(0, 242, 254, 0.4))'}}>
          90% Lower Cost
        </span>
</h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mr-auto ml-auto" style={{}}>
        Our AI-powered workflow delivers studio-quality results in 3
        simple steps
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.15)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:upload" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-sm font-medium mb-2 font-sans" style={{color: '#00D9A3'}}>
          Step 1
        </div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-white font-sans">
          Connect Your Store
        </h3>
<p className="text-sm text-gray-400 font-sans" style={{}}>
          Share your e-commerce platform link (Shopify, WooCommerce,
          Amazon, etc.) or upload product photos directly. We'll handle
          the rest.
        </p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.15)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:wand-2" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-sm font-medium mb-2 font-sans" style={{color: '#00D9A3'}}>
          Step 2
        </div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white font-sans">
          AI Magic in 24-48 Hours
        </h3>
<p className="text-sm text-gray-400 font-sans" style={{}}>
          We analyze each product and create professional variations -
          perfect backgrounds, studio lighting, multiple angles, and
          lifestyle scenes. All in 24-48 hours.
        </p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.15)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:download" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
</div>
<div className="text-sm font-medium mb-2 font-sans" style={{color: '#00D9A3'}}>
          Step 3
        </div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white font-sans">
          Download &amp; Launch
        </h3>
<p className="text-sm text-gray-400 font-sans" style={{}}>
          Get high-resolution images optimized for every platform - web,
          mobile, social media, print. Full commercial rights included. We
          update your listings and you watch conversions improve.
        </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl text-gray-900 font-sans" href="#offer" style={{background: 'rgb(0, 217, 163)'}}>
        Get 5 free Product Images
        <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 pt-16 pr-4 pb-16 pl-4" id="gallery">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold" style={{}}>
              See The Transformation Yourself
            </h2>
<p className="text-lg text-gray-600 font-sans max-w-2xl mr-auto ml-auto">
              Real results from Europe businesses. Click any card to see the
              before photo.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">
<div className="flip-card-wrapper h-80 relative" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner transition-transform duration-500 w-full h-full relative" style={{transformStyle: 'preserve-3d'}}>
<div className="overflow-hidden w-full h-full border rounded-2xl absolute shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Shoe product - After" className="w-full h-full object-cover" src="https://i.ibb.co/gbd9SvTB/1-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Artist Paint Brushes
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Art supplies photography
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Shoe product - Before" className="w-full h-full object-cover" src="https://i.ibb.co/DHGxWP81/1-before.png" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="flip-card-wrapper h-80 relative" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Cosmetics - After" className="w-full h-full object-cover" src="https://i.ibb.co/d0xRVzph/2-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional UHU Glue Stick
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Office stationery product
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Cosmetics - Before" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/646ff033-453e-4a69-89d8-7a0627e49ff5_800w.webp" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="flip-card-wrapper h-80 relative" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Watch - After" className="w-full h-full object-cover" src="https://i.ibb.co/C5d9zzgK/3-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Gaming Mouse
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Tech product photography
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Watch - Before" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03e3006b-de78-4ca5-964a-711b8cfa7800_800w.png" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-80 cursor-pointer group flip-card-wrapper" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Sunglasses - After" className="w-full h-full object-cover" src="https://i.ibb.co/Cs1MbKkM/4-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Computer Monitor
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Tech workspace display
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Sunglasses - Before" className="w-full h-full object-cover" src="https://i.ibb.co/Q721nZdF/4-before.jpg" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-80 cursor-pointer group flip-card-wrapper" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Skincare - After" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5b7b3c7-97a5-4163-b2ef-e1cce195d509_1600w.jpg"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Hair Oil Product
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Beauty &amp; cosmetics shot
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Skincare - Before" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f25c82d6-fd39-412e-a999-54af95fda304_1600w.jpg" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-80 cursor-pointer group flip-card-wrapper" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Headphones - After" className="w-full h-full object-cover" src="https://i.ibb.co/5xsfXTGf/6-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Fashion Scarf
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Textile &amp; apparel styling
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Headphones - Before" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9c2f927-9708-4640-8f8e-f82f93e867d8_800w.png" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-80 cursor-pointer group flip-card-wrapper" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Bottle - After" className="w-full h-full object-cover" src="https://i.ibb.co/RpGHHXWD/7-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Garden Sunbed
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Outdoor furniture shot
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Bottle - Before" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5623136d-62c3-4c79-8474-40269f0e0f89_800w.jpg" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-80 cursor-pointer group flip-card-wrapper" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none md:hidden">
<div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black/50 backdrop-blur-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M3 21v-5h5"></path>
</svg>
</div>
</div>
<div className="flip-card-inner relative w-full h-full transition-transform duration-500" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden'}}>
<div className="h-64 relative">
<img alt="Jewelry - After" className="w-full h-full object-cover" src="https://i.ibb.co/b55CCsSR/8-after.png"/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full text-white font-sans" style={{background: '#00D9A3'}}>
                      After
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Professional Pool Cleaner Robot
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Garden &amp; pool equipment
                    </p>
</div>
</div>
<div className="absolute w-full h-full rounded-2xl overflow-hidden border shadow-sm border-gray-100" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
<div className="h-64 relative">
<img alt="Jewelry - Before" className="w-full h-full object-cover" src="https://i.ibb.co/FkPQmdZ9/8-before.webp" style={{filter: 'grayscale(40%) brightness(0.75) contrast(0.85)'}}/>
<div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-900/80 text-white font-sans" style={{}}>
                      Before
                    </div>
</div>
<div className="p-4 bg-white">
<p className="text-sm font-medium text-gray-900 font-sans" style={{}}>
                      Original Photo
                    </p>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>
                      Simple product shoot
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
          @media (min-width: 768px) { .flip-card-wrapper:hover .flip-card-inner { transform: rotateY(180deg); } } @media (max-width: 767px) { .flip-card-inner.flipped { transform: rotateY(180deg); } }
        </style>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" style={{}}>
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-gray-900 tracking-tight font-sans mb-4">
              What Europe's Business Owners Say
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100" style={{}}>
<div className="flex gap-1 mb-4 gap-x-1 gap-y-1">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:star" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{fill: 'rgb(251, 191, 36)', color: 'rgb(251, 191, 36)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans" style={{}}>
                "We reduced our product photography costs by 85% while actually
                improving quality. Our conversion rate increased by 23% after
                switching to Wairo's service."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 text-gray-500 iconify--lucide" data-icon="lucide:user" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-sans" style={{}}>
                    Marketing Director
                  </p>
<p className="text-xs text-gray-500 font-sans" style={{}}>
                    Marka Aydinlatma
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100" style={{}}>
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans" style={{}}>
                "I was skeptical at first, but the quality is indistinguishable
                from our €2000 photoshoots. Game-changer for our cosmetics
                line."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 text-gray-500 iconify--lucide" data-icon="lucide:user" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
<div className="">
<p className="text-sm font-semibold text-gray-900 font-sans" style={{}}>
                    Founder
                  </p>
<p className="text-xs text-gray-500 font-sans" style={{}}>
                    Morgan Kosmetic
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100" style={{}}>
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" style={{color: '#FBBF24', fill: '#FBBF24'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans" style={{}}>
                "Fast, professional, and incredibly cost-effective. We now
                update our product images monthly instead of yearly."
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 text-gray-500 iconify--lucide" data-icon="lucide:user" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-sans" style={{}}>
                    E-commerce Manager
                  </p>
<p className="text-xs text-gray-500 font-sans" style={{}}>
                    Modesco
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold" style={{}}>
              Complete Product Imaging Solutions
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:image" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                E-Commerce Product Photography
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Studio-quality white background images ready for Amazon, eBay,
                your website
              </p>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:home" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                Lifestyle &amp; Contextual Imagery
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Products shown in real-world settings &amp; lifestyle scenes
              </p>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:layers" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                Bulk Image Optimization
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Refresh your entire product catalog with consistent,
                professional imagery
              </p>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:video" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                Product Video Generation
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                360° spins, product demos, social media videos
              </p>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:palette" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                Custom Backgrounds &amp; Variations
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Unlimited variations: seasons, holidays, campaigns
              </p>
</div>
<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:zap" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans" style={{}}>
                Same-Day Rush Service
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Need it urgently? 24-hour turnaround available
              </p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold" style={{}}>
              Premium Quality, Revolutionary Technology
            </h2>
<p className="text-lg max-w-2xl mx-auto text-gray-600 font-sans" style={{}}>
              AI-powered doesn't mean cheap. It means smarter.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-2xl p-8 border text-center bg-white border-gray-100" style={{}}>
<div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:badge-check" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900 font-sans" style={{}}>
                Studio-Grade Quality
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                AI trained on millions of professional photos for exceptional
                results
              </p>
</div>
<div className="rounded-2xl p-8 border text-center bg-white border-gray-100" style={{}}>
<div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:eye" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900 font-sans" style={{}}>
                Human Quality Control
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Every image reviewed, unlimited revisions guaranteed
              </p>
</div>
<div className="rounded-2xl p-8 border text-center bg-white border-gray-100" style={{}}>
<div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:file-check" height="1em" role="img" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-gray-900 font-sans" style={{}}>
                Commercial Rights Included
              </h3>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                Full license for e-commerce, ads, social media, print
              </p>
</div>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 pt-16 pr-4 pb-16 pl-4" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold" style={{}}>
              The Difference Is Clear
            </h2>
</div>
<div className="rounded-3xl border overflow-hidden shadow-xl bg-white border-gray-200" style={{}}>
<div className="grid grid-cols-3 border-b bg-gray-50 border-gray-200" style={{}}>
<div className="p-6"></div>
<div className="p-6 text-center border-l border-gray-200" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
<p className="text-sm font-medium text-gray-500 font-sans" style={{}}>
                  Traditional Photography
                </p>
</div>
<div className="p-6 text-center border-l border-gray-200" style={{background: 'rgba(0, 217, 163, 0.05)'}}>
<p className="text-sm font-semibold font-sans" style={{color: '#00D9A3'}}>
                  Wairo AI Studio
                </p>
</div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100" style={{}}>
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Cost per image
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
<span style={{textDecoration: 'line-through'}}>€150 - €300</span>
</div>
<div className="font-semibold font-sans text-center border-gray-100 border-l pt-6 pr-6 pb-6 pl-6" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>€5</div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100" style={{}}>
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Turnaround time
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
                1-2 weeks
              </div>
<div className="font-semibold font-sans text-center border-gray-100 border-l pt-6 pr-6 pb-6 pl-6" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>
                24-48 hours
              </div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100" style={{}}>
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Revisions
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
                Limited (1-2)
              </div>
<div className="p-6 text-center border-l font-semibold border-gray-100 font-sans" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>
                Unlimited
              </div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100" style={{}}>
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Variations
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
                €50+ each
              </div>
<div className="font-semibold font-sans text-center border-gray-100 border-l pt-6 pr-6 pb-6 pl-6" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>€4</div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100" style={{}}>
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Equipment needed
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
                Studio, lights, props
              </div>
<div className="p-6 text-center border-l font-semibold border-gray-100 font-sans" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>
                None
              </div>
</div>
<div className="grid grid-cols-3">
<div className="p-6 font-medium text-gray-900 font-sans" style={{}}>
                Minimum order
              </div>
<div className="p-6 text-center border-l border-gray-100 text-gray-600 font-sans" style={{background: 'rgba(239, 68, 68, 0.08)'}}>
                Usually 10+ images
              </div>
<div className="p-6 text-center border-l font-semibold border-gray-100 font-sans" style={{color: 'rgb(0, 217, 163)', background: 'rgba(0, 217, 163, 0.05)'}}>
                No minimum
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="offer" style={{background: '#00D9A3'}}>
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="text-white">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-semibold tracking-tight font-sans mb-6">Try It Risk-Free: Get 5 Professional Images FREE</h2>
<p className="text-lg opacity-90 mb-8 font-sans">
                See the quality yourself. No credit card. No commitment. Just
                stunning product images in 48 hours.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">5 professional product images</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">Multiple format options</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">Full commercial license</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">48-hour delivery</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">No watermarks</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span className="font-sans">No strings attached</span>
</div>
</div>
</div>
<div className="rounded-3xl p-8 shadow-2xl bg-white">
<h3 className="text-2xl mb-6 tracking-tight text-gray-900 font-sans font-semibold" style={{}}>
                Claim Your Free Images
              </h3>

<div className="hidden mb-6 p-4 rounded-xl bg-green-50 border border-green-200" id="successMessage">
<div className="flex items-center gap-2 text-green-800">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="font-semibold">Success!</span>
</div>
<p className="text-sm text-green-700 mt-1">
                  Your request has been submitted. We'll contact you within 24
                  hours!
                </p>
</div>

<div className="hidden mb-6 p-4 rounded-xl bg-red-50 border border-red-200" id="errorMessage">
<div className="flex items-center gap-2 text-red-800">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="font-semibold">Error</span>
</div>
<p className="text-sm text-red-700 mt-1" id="errorMessageText">
                  Something went wrong. Please try again.
                </p>
</div>
<form className="space-y-4" id="leadForm">
<div className="">
<label className="block text-sm font-medium mb-1 text-gray-700 font-sans" style={{}}>
                    Full Name *
                  </label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-400 transition-colors border-gray-200" id="fullName" name="full_name" placeholder="Your name" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-gray-700 font-sans" style={{}}>
                    Business Website *
                  </label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-400 transition-colors border-gray-200" id="businessWebsite" name="business_website" placeholder="https://yourwebsite.com" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-gray-700 font-sans" style={{}}>
                    Email Address *
                  </label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-400 transition-colors border-gray-200" id="email" name="email" placeholder="you@company.com" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-gray-700 font-sans" style={{}}>
                    Phone (optional)
                  </label>
<input className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-400 transition-colors border-gray-200" id="phone" name="phone" placeholder="+356 ..." style={{}} type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-gray-700 font-sans" style={{}}>
                    Brief Description (optional)
                  </label>
<textarea className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-gray-400 transition-colors resize-none border-gray-200" id="description" name="description" placeholder="Tell us about your products..." rows="3" style={{}}></textarea>
</div>
<button className="w-full py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-white font-sans" id="submitBtn" style={{background: '#00D9A3'}} type="submit">
<span id="btnText">Get My 5 free Images Now</span>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:arrow-right" height="1em" id="btnArrow" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="hidden w-5 h-5 animate-spin" fill="none" id="btnSpinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</button>
</form>
<p className="text-xs text-gray-500 font-sans text-center mt-4">
                ✓ 100% Satisfaction Guaranteed | ✓ Used by 50+ Europe businesses
              </p>
<div className="text-center mt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 font-sans" href="https://calendly.com/mervan0/meeting" rel="noopener noreferrer" style={{}} target="_blank">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                  Or Book a Free Consultation Call
                  <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
</a>
</div>
<p className="text-center text-xs text-gray-400 mt-2 font-sans">
                Schedule a call at your convenience
              </p>
</div>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 pt-16 pr-4 pb-16 pl-4">
<div className="max-w-3xl mr-auto ml-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold" style={{}}>
              Common Questions Answered
            </h2>
</div>
<div className="space-y-4">
<div className="overflow-hidden bg-white border-gray-200 border rounded-2xl">
<button className="flex gap-4 faq-toggle text-left w-full pt-5 pr-6 pb-5 pl-6 gap-x-4 gap-y-4 items-center justify-between" onclick="var content = this.nextElementSibling; var icon = this.querySelector('.faq-icon'); if(content.style.maxHeight &amp;&amp; content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; content.style.paddingBottom = '0'; icon.style.transform = 'rotate(0deg)'; } else { content.style.maxHeight = '500px'; content.style.paddingBottom = '1.25rem'; icon.style.transform = 'rotate(45deg)'; }">
<span className="font-medium text-gray-900">
                  Is AI-generated imagery legal for commercial use?
                </span>
<svg aria-hidden="true" className="iconify w-5 h-5 faq-icon iconify--lucide text-gray-400" data-icon="lucide:plus" height="1em" role="img" style={{transition: 'transform 0.3s ease'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div style={{maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease-out, padding-bottom 0.4s ease-out', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0', paddingBottom: '0'}}>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                  Absolutely. You receive full commercial rights to all images
                  we create. Use them anywhere—your website, Amazon, social
                  media, print materials, and advertisements.
                </p>
</div>
</div>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200" style={{}}>
<button className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 faq-toggle" onclick="var content = this.nextElementSibling; var icon = this.querySelector('.faq-icon'); if(content.style.maxHeight &amp;&amp; content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; content.style.paddingBottom = '0'; icon.style.transform = 'rotate(0deg)'; } else { content.style.maxHeight = '500px'; content.style.paddingBottom = '1.25rem'; icon.style.transform = 'rotate(45deg)'; }">
<span className="font-medium text-gray-900 font-sans" style={{}}>
                  How is this different from cheap stock photos?
                </span>
<svg aria-hidden="true" className="iconify w-5 h-5 faq-icon iconify--lucide text-gray-400" data-icon="lucide:plus" height="1em" role="img" style={{transition: 'transform 0.3s ease'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div style={{maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease-out, padding-bottom 0.4s ease-out', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0', paddingBottom: '0'}}>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                  These are custom images of YOUR products, not generic stock.
                  We use your actual product photos as the foundation and create
                  professional-quality imagery that matches your brand. Every
                  image is unique to you.
                </p>
</div>
</div>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200" style={{}}>
<button className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 faq-toggle" onclick="var content = this.nextElementSibling; var icon = this.querySelector('.faq-icon'); if(content.style.maxHeight &amp;&amp; content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; content.style.paddingBottom = '0'; icon.style.transform = 'rotate(0deg)'; } else { content.style.maxHeight = '500px'; content.style.paddingBottom = '1.25rem'; icon.style.transform = 'rotate(45deg)'; }">
<span className="font-medium text-gray-900 font-sans" style={{}}>
                  Can you match my brand's style?
                </span>
<svg aria-hidden="true" className="iconify w-5 h-5 faq-icon iconify--lucide text-gray-400" data-icon="lucide:plus" height="1em" role="img" style={{transition: 'transform 0.3s ease'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div style={{maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease-out, padding-bottom 0.4s ease-out', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0', paddingBottom: '0'}}>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                  Yes! We create custom guidelines based on your brand identity,
                  colors, and aesthetic. Whether you need minimalist white
                  backgrounds or elaborate lifestyle scenes, we adapt to your
                  vision.
                </p>
</div>
</div>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200" style={{}}>
<button className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 faq-toggle" onclick="var content = this.nextElementSibling; var icon = this.querySelector('.faq-icon'); if(content.style.maxHeight &amp;&amp; content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; content.style.paddingBottom = '0'; icon.style.transform = 'rotate(0deg)'; } else { content.style.maxHeight = '500px'; content.style.paddingBottom = '1.25rem'; icon.style.transform = 'rotate(45deg)'; }">
<span className="font-medium text-gray-900 font-sans" style={{}}>
                  What if I don't like the results?
                </span>
<svg aria-hidden="true" className="iconify w-5 h-5 faq-icon iconify--lucide text-gray-400" data-icon="lucide:plus" height="1em" role="img" style={{transition: 'transform 0.3s ease'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div style={{maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease-out, padding-bottom 0.4s ease-out', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0', paddingBottom: '0'}}>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                  Unlimited revisions until you're 100% satisfied. That's our
                  guarantee. We're not happy until you are, and we'll keep
                  refining until we get it perfect.
                </p>
</div>
</div>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200" style={{}}>
<button className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 faq-toggle" onclick="var content = this.nextElementSibling; var icon = this.querySelector('.faq-icon'); if(content.style.maxHeight &amp;&amp; content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; content.style.paddingBottom = '0'; icon.style.transform = 'rotate(0deg)'; } else { content.style.maxHeight = '500px'; content.style.paddingBottom = '1.25rem'; icon.style.transform = 'rotate(45deg)'; }">
<span className="font-medium text-gray-900 font-sans" style={{}}>
                  How do you ensure quality with AI?
                </span>
<svg aria-hidden="true" className="iconify w-5 h-5 faq-icon iconify--lucide text-gray-400" data-icon="lucide:plus" height="1em" role="img" style={{transition: 'transform 0.3s ease'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div style={{maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease-out, padding-bottom 0.4s ease-out', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '0', paddingBottom: '0'}}>
<p className="text-sm text-gray-600 font-sans" style={{}}>
                  Our AI is trained on premium photography, and every image is
                  reviewed by our quality team before delivery. We combine
                  cutting-edge technology with human expertise for the best
                  results.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 sm:px-6 lg:px-8 bg-gray-900 pt-16 pr-4 pb-16 pl-4" id="contact">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 text-white font-sans font-semibold">
            Ready to Transform Your Product Imagery?
          </h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mr-auto mb-10 ml-auto">
            Join Europe's smartest businesses. Get 5 free images today.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl text-gray-900 font-sans" href="#offer" style={{background: 'rgb(0, 217, 163)'}}>
              Get 5 free Images Now
              <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border-gray-700 text-white hover:border-gray-600 hover:bg-gray-800 font-sans" href="#" style={{}}>
              Book a Strategy Call
              <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
</a>
</div>
</div>
</section>

<footer className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-950" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl font-semibold tracking-tight text-white font-sans">
                  WAIRO
                </span>
<span className="text-xs text-gray-500 font-medium font-sans" style={{}}>
                  Creative AI Studio
                </span>
</div>
<p className="text-sm text-gray-400 font-sans max-w-xs mb-6">
                AI-powered product photography for Europe's most ambitious
                e-commerce businesses.
              </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" href="#" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" href="#" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" href="#" style={{}}>
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white font-sans mb-4">
                Quick Links
              </h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm transition-colors text-gray-400 hover:text-white font-sans" href="#services" style={{}}>
                    Services
                  </a>
</li>
<li className="">
<a className="text-sm transition-colors text-gray-400 hover:text-white font-sans" href="#gallery" style={{}}>
                    Portfolio
                  </a>
</li>
<li className="">
<a className="text-sm transition-colors text-gray-400 hover:text-white font-sans" href="#pricing" style={{}}>
                    Pricing
                  </a>
</li>
<li className="">
<a className="text-sm transition-colors text-gray-400 hover:text-white font-sans" href="#" style={{}}>
                    FAQ
                  </a>
</li>
<li className="">
<a className="text-sm transition-colors text-gray-400 hover:text-white font-sans" href="#contact" style={{}}>
                    Contact
                  </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-4 text-white font-sans">
                Contact
              </h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-400" style={{}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<a className="__cf_email__ font-sans" data-cfemail="f29a979e9e9db285939b809ddc9f86" href="/cdn-cgi/l/email-protection">
                    [email protected]
                  </a>
</li>
<li className="flex items-center gap-3 text-sm text-gray-400 font-sans" style={{}}>
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  +356 2134 5678
                </li>
<li className="flex gap-3 text-sm text-gray-400 font-sans gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
                  Valletta, Malta
                </li>
<li className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80 font-sans" href="https://calendly.com/mervan0/meeting" rel="noopener noreferrer" style={{color: '#00D9A3'}} target="_blank">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
                    Book a Free Call
                    <svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t text-center border-gray-800" style={{}}>
<p className="text-sm text-gray-500 font-sans" style={{}}>
              © 2024 Wairo Creative AI Studio | All Rights Reserved
            </p>
</div>
</div>
</footer>
</main>

<div className="fixed bottom-0 left-0 right-0 p-4 border-t md:hidden z-40 bg-white border-gray-200" style={{}}>
<a className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-base font-medium text-white font-sans" href="#offer" style={{background: '#00D9A3'}}>
        Get 5 free Images
        <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>



    </>
  );
}
