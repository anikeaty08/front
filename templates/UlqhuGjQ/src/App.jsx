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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cyber: {
              bg: '#0a0c12',
              component: '#181c27',
              input: 'rgba(30, 35, 50, 0.6)',
              accent: '#00f0c0',
              accentAlt: '#ff2a6d',
              text: '#e0e7ff',
              secondary: '#a0aed0',
              border: '#3a3f5e'
            }
          },
          fontFamily: {
            mono: ['Fira Code', 'monospace'],
            display: ['Orbitron', 'sans-serif']
          }
        }
      }
    }
  


    document.addEventListener('DOMContentLoaded', function() {
      // Initialize ScrollReveal
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
      });
      
      // Apply reveals
      sr.reveal('.reveal-fade', { delay: 100 });
      sr.reveal('.reveal-title', { delay: 200, distance: '40px' });
      sr.reveal('.reveal-text', { delay: 300 });
      sr.reveal('.reveal-left', { origin: 'left' });
      sr.reveal('.reveal-right', { origin: 'right' });
      sr.reveal('.reveal-item', { interval: 150 });
      
      // Add checkbox custom styling
      const checkbox = document.getElementById('consent');
      if (checkbox) {
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            this.insertAdjacentHTML('afterend', '<div class="absolute inset-0 flex items-center justify-center checkmark hidden"><svg class="w-3 h-3 text-cyber-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>');
            setTimeout(() => {
              const checkmark = this.nextElementSibling;
              if (checkmark && checkmark.classList.contains('checkmark')) {
                checkmark.classList.remove('hidden');
              }
            }, 50);
          } else {
            const checkmark = this.nextElementSibling;
            if (checkmark && checkmark.classList.contains('checkmark')) {
              checkmark.remove();
            }
          }
        });
      }
      
      // Form interactions
      const form = document.querySelector('form');
      const inputs = form.querySelectorAll('input, select, textarea');
      
      inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('relative');
          input.insertAdjacentHTML('afterend', '<div class="absolute inset-0 border border-cyber-accent rounded-md pointer-events-none opacity-0 transition-opacity duration-300" style="z-index: -1;"></div>');
          setTimeout(() => {
            const focusElement = input.nextElementSibling;
            focusElement.classList.remove('opacity-0');
            focusElement.classList.add('opacity-100');
          }, 50);
        });
        
        // Remove focus effect
        input.addEventListener('blur', () => {
          const focusElement = input.nextElementSibling;
          if (focusElement) {
            focusElement.classList.remove('opacity-100');
            focusElement.classList.add('opacity-0');
            setTimeout(() => {
              if (focusElement) focusElement.remove();
            }, 300);
          }
        });
        
        // Add typing effect for text inputs
        if (input.type === 'text' || input.type === 'email' || input.tagName.toLowerCase() === 'textarea') {
          input.addEventListener('input', () => {
            if (input.value.length > 0) {
              input.classList.add('border-cyber-accent/50');
            } else {
              input.classList.remove('border-cyber-accent/50');
            }
          });
        }
      });
      
      // Form submission effect
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Create success message
          const button = form.querySelector('button[type="submit"]');
          const originalText = button.innerHTML;
          
          button.innerHTML = '<span class="inline-flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-cyber-bg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...</span>';
          
          setTimeout(() => {
            button.innerHTML = '<span class="inline-flex items-center"><svg class="h-4 w-4 mr-2 text-cyber-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Message Sent!</span>';
            button.classList.add('bg-green-500');
            button.classList.remove('bg-cyber-accent', 'hover:bg-cyber-accent/90');
            
            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-cyber-component border border-cyber-accent rounded-lg p-4 shadow-lg transform translate-y-20 opacity-0 transition-all duration-500 z-50';
            notification.innerHTML = `
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-cyber-accent/20 flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-bold">Message Received</h4>
                  <p class="text-cyber-secondary text-sm">We'll respond to your inquiry shortly.</p>
                </div>
              </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
              notification.classList.remove('translate-y-20', 'opacity-0');
              notification.classList.add('translate-y-0', 'opacity-100');
            }, 100);
            
            setTimeout(() => {
              notification.classList.remove('translate-y-0', 'opacity-100');
              notification.classList.add('translate-y-20', 'opacity-0');
              
              setTimeout(() => {
                notification.remove();
                
                // Reset form
                form.reset();
                button.innerHTML = originalText;
                button.classList.remove('bg-green-500');
                button.classList.add('bg-cyber-accent', 'hover:bg-cyber-accent/90');
                
                inputs.forEach(input => {
                  input.classList.remove('border-cyber-accent/50');
                });
              }, 500);
            }, 4000);
          }, 1500);
        });
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
      
<section className="py-20 cyber-grid relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-accent/5 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyber-accentAlt/5 blur-3xl rounded-full"></div>
<div className="container mx-auto px-6">

<div className="text-center mb-16 reveal-fade">
<div className="inline-block bg-cyber-component/30 backdrop-blur-sm px-3 py-1 rounded border border-cyber-border/50 text-cyber-secondary mb-4">
<span className="text-cyber-accent">&gt;</span> Contact Us
        </div>
<h2 className="text-4xl font-display font-bold mb-4 reveal-title">
          ESTABLISH <span className="gradient-text">CONNECTION</span>
</h2>
<p className="text-cyber-secondary max-w-2xl mx-auto reveal-text">
          Our quantum engineers and support specialists are ready to assist with your inquiries. Connect with us through any of our secure channels.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

<div className="reveal-left">
<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,192,0.2)]">
<div className="h-1 bg-gradient-to-r from-cyber-accent to-cyber-accentAlt"></div>
<div className="p-8">
<h3 className="text-2xl font-display font-bold mb-6 text-white">Send Transmission</h3>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-cyber-secondary text-sm" htmlFor="name">Full Name</label>
<input className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent input-focus-effect transition-all duration-300" id="name" name="name" placeholder="Enter your name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-cyber-secondary text-sm" htmlFor="email">Email Address</label>
<input className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent input-focus-effect transition-all duration-300" id="email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-cyber-secondary text-sm" htmlFor="subject">Subject</label>
<select className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent input-focus-effect transition-all duration-300" id="subject" name="subject" required="">
<option disabled="" selected="" value="">Select a subject</option>
<option value="support">Technical Support</option>
<option value="sales">Sales Inquiry</option>
<option value="partnership">Partnership Opportunity</option>
<option value="careers">Careers</option>
<option value="other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-cyber-secondary text-sm" htmlFor="message">Message</label>
<textarea className="w-full bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent input-focus-effect transition-all duration-300" id="message" name="message" placeholder="Enter your message" required="" rows="5"></textarea>
</div>
<div className="flex items-center">
<input className="appearance-none w-5 h-5 border border-cyber-border bg-cyber-input rounded mr-3 checked:bg-cyber-accent checked:border-cyber-accent relative focus:outline-none transition-all duration-300" id="consent" name="consent" required="" type="checkbox"/>
<label className="text-cyber-secondary text-sm" htmlFor="consent">I consent to Quantum Nexus processing my data for the purpose of responding to my inquiry.</label>
</div>
<button className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-8 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.5)] transform hover:-translate-y-1" type="submit">
                  Transmit Message
                </button>
</form>
</div>
</div>
</div>

<div className="reveal-right">
<div className="grid grid-cols-1 gap-6">

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden">
<div className="h-1 bg-cyber-accent"></div>
<div className="p-6">
<h3 className="text-xl font-display font-bold mb-4 text-white">Quantum Nexus Locations</h3>
<div className="space-y-6">
<div className="flex items-start space-x-4 group">
<div className="w-10 h-10 rounded-lg bg-cyber-accent/20 flex items-center justify-center group-hover:bg-cyber-accent/30 transition-all duration-300 flex-shrink-0 mt-1">
<svg className="w-5 h-5 text-cyber-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-white font-bold text-lg group-hover:text-cyber-accent transition-colors duration-300">Global Headquarters</h4>
<p className="text-cyber-secondary">Quantum Tower, Bahnhofstrasse 42<br/>8001 Zürich, Switzerland</p>
<p className="text-cyber-accent mt-1 text-sm pulse-animate inline-block px-2 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/30">ACTIVE</p>
</div>
</div>
<div className="flex items-start space-x-4 group">
<div className="w-10 h-10 rounded-lg bg-cyber-accent/20 flex items-center justify-center group-hover:bg-cyber-accent/30 transition-all duration-300 flex-shrink-0 mt-1">
<svg className="w-5 h-5 text-cyber-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-white font-bold text-lg group-hover:text-cyber-accent transition-colors duration-300">Research Center</h4>
<p className="text-cyber-secondary">Quantum Research Park<br/>Minato City, Tokyo, Japan</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden">
<div className="h-1 bg-cyber-accentAlt"></div>
<div className="p-6">
<h3 className="text-xl font-display font-bold mb-4 text-white">Support Channels</h3>
<div className="space-y-4">
<div className="flex items-center space-x-4 group">
<div className="w-10 h-10 rounded-lg bg-cyber-accentAlt/20 flex items-center justify-center group-hover:bg-cyber-accentAlt/30 transition-all duration-300">
<svg className="w-5 h-5 text-cyber-accentAlt" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-cyber-accentAlt font-bold">Email Support</h4>
<a className="text-cyber-secondary hover:text-cyber-accentAlt transition-colors duration-300" href="mailto:support@quantumnexus.tech">support@quantumnexus.tech</a>
</div>
</div>
<div className="flex items-center space-x-4 group">
<div className="w-10 h-10 rounded-lg bg-cyber-accentAlt/20 flex items-center justify-center group-hover:bg-cyber-accentAlt/30 transition-all duration-300">
<svg className="w-5 h-5 text-cyber-accentAlt" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-cyber-accentAlt font-bold">Phone Support</h4>
<p className="text-cyber-secondary">+41 44 123 4567</p>
</div>
</div>
<div className="flex items-center space-x-4 group">
<div className="w-10 h-10 rounded-lg bg-cyber-accentAlt/20 flex items-center justify-center group-hover:bg-cyber-accentAlt/30 transition-all duration-300">
<svg className="w-5 h-5 text-cyber-accentAlt" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="text-cyber-accentAlt font-bold">Live Chat</h4>
<p className="text-cyber-secondary">Available 24/7 for Priority Clients</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.3)]">
<div className="h-1 bg-gradient-to-r from-cyber-accent to-cyber-accentAlt"></div>
<div className="aspect-video relative overflow-hidden">
<img alt="Quantum Nexus Headquarters" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2071&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-cyber-component via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-cyber-component/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-cyber-border/50 transform hover:scale-105 transition-transform duration-300">
<div className="text-white font-display text-lg">QUANTUM NEXUS HQ</div>
<div className="text-cyber-secondary text-sm">Zürich, Switzerland</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-20 reveal-fade">
<h3 className="text-2xl font-display font-bold mb-8 text-white text-center">Frequently Asked Questions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-cyber-component border border-cyber-border rounded-lg p-6 hover:border-cyber-accent transition-all duration-300 reveal-item">
<h4 className="text-lg font-bold text-white mb-2">What are your support hours?</h4>
<p className="text-cyber-secondary">Our technical support team is available 24/7 for emergency issues. Standard support inquiries are handled during business hours in your local time zone.</p>
</div>
<div className="bg-cyber-component border border-cyber-border rounded-lg p-6 hover:border-cyber-accentAlt transition-all duration-300 reveal-item">
<h4 className="text-lg font-bold text-white mb-2">How quickly can I expect a response?</h4>
<p className="text-cyber-secondary">Priority clients receive responses within 1 hour. Standard inquiries are typically addressed within 24 hours during business days.</p>
</div>
<div className="bg-cyber-component border border-cyber-border rounded-lg p-6 hover:border-cyber-accent transition-all duration-300 reveal-item">
<h4 className="text-lg font-bold text-white mb-2">Do you offer on-site support?</h4>
<p className="text-cyber-secondary">Yes, our quantum engineers can be deployed to client locations for critical implementations and troubleshooting as needed.</p>
</div>
<div className="bg-cyber-component border border-cyber-border rounded-lg p-6 hover:border-cyber-accentAlt transition-all duration-300 reveal-item">
<h4 className="text-lg font-bold text-white mb-2">How can I schedule a demo?</h4>
<p className="text-cyber-secondary">Use our contact form or email sales@quantumnexus.tech to schedule a personalized demonstration of our quantum solutions.</p>
</div>
</div>
</div>

<div className="bg-cyber-component/50 backdrop-blur-sm border border-cyber-border rounded-lg p-8 mb-20 reveal-fade">
<div className="max-w-3xl mx-auto text-center">
<h3 className="text-2xl font-display font-bold mb-4 text-white">Stay Connected</h3>
<p className="text-cyber-secondary mb-6">Subscribe to our newsletter for the latest quantum computing breakthroughs and company updates.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="flex-grow bg-cyber-input text-cyber-text border border-cyber-border rounded-md px-4 py-3 focus:outline-none focus:border-cyber-accent input-focus-effect transition-all duration-300" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-6 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.5)] transform hover:-translate-y-1" type="submit">
              Subscribe
            </button>
</form>
<p className="text-cyber-secondary text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
</div>
</div>

<div className="text-center reveal-fade">
<h3 className="text-xl font-display font-bold mb-6 text-white">Connect With Us</h3>
<div className="flex justify-center space-x-6">
<a className="w-12 h-12 rounded-full border border-cyber-accent flex items-center justify-center text-cyber-accent hover:bg-cyber-accent/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.4)]" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-cyber-accentAlt flex items-center justify-center text-cyber-accentAlt hover:bg-cyber-accentAlt/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,42,109,0.4)]" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-cyber-accent flex items-center justify-center text-cyber-accent hover:bg-cyber-accent/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.4)]" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.882 18.774c-.233.088-.454.173-.68.253-1.613.574-3.321.888-5.102.888-1.781 0-3.489-.314-5.102-.888-.226-.08-.447-.165-.68-.253a.721.721 0 01-.431-.678c0-.37.27-.678.642-.735.113-.018.227-.038.342-.056a21.05 21.05 0 001.413-.302c.165-.04.328-.085.489-.13a.714.714 0 01.904.481.724.724 0 01-.481.904 16.8 16.8 0 01-.533.143c.985.208 1.997.32 3.028.32 1.03 0 2.043-.112 3.028-.32a17.305 17.305 0 01-.533-.143.714.714 0 01-.481-.904.714.714 0 01.904-.481c.161.045.324.09.489.13.473.114.95.214 1.413.301.115.02.229.039.342.057.371.057.642.365.642.735a.73.73 0 01-.431.678zM9.086 8.076a.714.714 0 01-1.011 0 .714.714 0 010-1.011.714.714 0 011.01 0c.279.279.279.732 0 1.01zm6.839 0a.714.714 0 01-1.01 0 .714.714 0 010-1.011.714.714 0 011.01 0c.279.279.279.732 0 1.01zm1.502 3.47a.643.643 0 00-.47.201.665.665 0 00-.201.471c0 3.38-3.787 6.147-8.428 6.147-4.64 0-8.428-2.766-8.428-6.147a.665.665 0 00-.2-.471.656.656 0 00-.471-.201.66.66 0 00-.672.672c0 4.344 4.347 7.885 9.77 7.885 5.424 0 9.772-3.54 9.772-7.885a.673.673 0 00-.672-.672z"></path>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-cyber-accentAlt flex items-center justify-center text-cyber-accentAlt hover:bg-cyber-accentAlt/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,42,109,0.4)]" href="#">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm
-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
</a>
</div>
</div>
</div>
</section>


    </>
  );
}
