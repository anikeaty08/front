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
                    fontFamily: {
                        'sf-pro': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                        'sf-text': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.5s ease-out',
                        'slide-down': 'slideDown 0.3s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: 0, transform: 'translateY(20px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' }
                        },
                        slideDown: {
                            '0%': { opacity: 0, maxHeight: '0px' },
                            '100%': { opacity: 1, maxHeight: '200px' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        }
                    }
                }
            }
        }
    


        // Aurora Background (simplified)
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('aurora-canvas') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    vec3 color = vec3(0.05 + 0.1 * sin(iTime * 0.5 + uv.x * 3.0), 0.1 + 0.15 * cos(iTime * 0.3 + uv.y * 2.0), 0.2 + 0.2 * sin(iTime * 0.7));
                    gl_FragColor = vec4(color, 1.0);
                }`
        });

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.iTime.value += 0.01;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
        });

        animate();

        // FAQ Functionality
        document.querySelectorAll('.faq-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const answer = trigger.nextElementSibling;
                const icon = trigger.querySelector('.faq-icon');
                const isOpen = answer.classList.contains('open');

                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
                document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('rotate-180'));

                // Toggle current answer
                if (!isOpen) {
                    answer.classList.add('open');
                    icon.classList.add('rotate-180');
                }
            });
        });

        // Category filtering
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                
                // Update active category
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('category-active'));
                btn.classList.add('category-active');

                // Filter FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.faq-item').forEach(item => {
                const question = item.querySelector('h3').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
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
      

<canvas id="aurora-canvas"></canvas>

<nav className="relative z-20 p-6 lg:px-16">
<div className="max-w-6xl mx-auto">
<div className="glass rounded-2xl border border-white/10 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-8">
<span className="text-white font-bold text-xl tracking-wider font-sf-pro">ZORA</span>
<div className="hidden md:flex items-center space-x-6">
<a className="text-white/80 hover:text-white transition-colors text-sm font-sf-text" href="#">Documentation</a>
<a className="text-white/80 hover:text-white transition-colors text-sm font-sf-text" href="#">Support</a>
<a className="text-white transition-colors text-sm font-sf-text font-medium" href="#">FAQ</a>
</div>
</div>
<div className="flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors text-sm font-sf-text" href="#">Back to Dashboard</a>
<a className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 text-sm font-sf-text" href="#">
                            Contact Support
                        </a>
</div>
</div>
</div>
</div>
</nav>

<main className="relative z-10 min-h-screen pt-8 pb-16 px-6 lg:px-16">
<div className="max-w-4xl mx-auto">

<div className="text-center mb-12 animate-fade-in">
<h1 className="text-5xl lg:text-6xl font-light text-white mb-6 font-sf-pro">
                    Frequently Asked 
                    <span className="schema-gradient">Questions</span>
</h1>
<p className="text-xl text-white/70 max-w-2xl mx-auto font-sf-text">
                    Find answers to common questions about ZORA's database schema management platform
                </p>
</div>

<div className="mb-12 animate-fade-in" style={{animationDelay: `0.2s`}}>
<div className="relative max-w-2xl mx-auto">
<input className="w-full px-6 py-4 glass rounded-2xl text-white placeholder-white/60 focus:outline-none focus:search-glow transition-all font-sf-text" id="searchInput" placeholder="Search frequently asked questions..." type="text" />
<svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fillRule="evenodd"></path>
</svg>
</div>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{animationDelay: `0.3s`}}>
<button className="px-6 py-3 glass rounded-xl text-white/80 hover:text-white transition-all font-sf-text category-btn category-active" data-category="all">
                    All Questions
                </button>
<button className="px-6 py-3 glass rounded-xl text-white/80 hover:text-white transition-all font-sf-text category-btn" data-category="getting-started">
                    Getting Started
                </button>
<button className="px-6 py-3 glass rounded-xl text-white/80 hover:text-white transition-all font-sf-text category-btn" data-category="features">
                    Features
                </button>
<button className="px-6 py-3 glass rounded-xl text-white/80 hover:text-white transition-all font-sf-text category-btn" data-category="billing">
                    Billing
                </button>
<button className="px-6 py-3 glass rounded-xl text-white/80 hover:text-white transition-all font-sf-text category-btn" data-category="technical">
                    Technical
                </button>
</div>

<div className="space-y-4 animate-fade-in" id="faqContainer" style={{animationDelay: `0.4s`}}>

<div className="glass rounded-2xl border border-white/10 faq-item" data-category="getting-started">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">How do I get started with ZORA?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            Getting started with ZORA is simple. First, create your account and connect your database. Our setup wizard will guide you through the initial configuration, including schema discovery and basic monitoring setup. You'll be up and running in less than 10 minutes.
                        </p>
</div>
</div>
<div className="glass rounded-2xl border border-white/10 faq-item" data-category="getting-started">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">What databases does ZORA support?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            ZORA supports all major database systems including PostgreSQL, MySQL, MongoDB, Oracle, SQL Server, and more. We also provide specialized support for cloud databases like Amazon RDS, Google Cloud SQL, and Azure Database.
                        </p>
</div>
</div>

<div className="glass rounded-2xl border border-white/10 faq-item" data-category="features">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">Can I visualize my database relationships?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            Absolutely! ZORA provides interactive schema visualizations that show table relationships, foreign keys, and data flow. You can zoom, filter, and explore your database structure with our intuitive visual interface.
                        </p>
</div>
</div>
<div className="glass rounded-2xl border border-white/10 faq-item" data-category="features">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">Does ZORA provide real-time monitoring?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            Yes! ZORA monitors your database performance, query execution times, and schema changes in real-time. You'll receive instant alerts for any issues and can track performance metrics through our comprehensive dashboard.
                        </p>
</div>
</div>

<div className="glass rounded-2xl border border-white/10 faq-item" data-category="billing">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">What are ZORA's pricing plans?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            We offer flexible pricing starting with a free tier for small projects, Professional plans for growing teams, and Enterprise solutions for large organizations. All plans include core features with scaling capabilities based on your needs.
                        </p>
</div>
</div>
<div className="glass rounded-2xl border border-white/10 faq-item" data-category="billing">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">Is there a free trial available?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            Yes! We offer a 14-day free trial of our Professional plan with no credit card required. You'll have access to all premium features to fully evaluate ZORA's capabilities for your database management needs.
                        </p>
</div>
</div>

<div className="glass rounded-2xl border border-white/10 faq-item" data-category="technical">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">How secure is my database information?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            Security is our top priority. ZORA uses end-to-end encryption, SOC 2 compliance, and follows industry best practices. We only access metadata about your schema structure, never your actual data content.
                        </p>
</div>
</div>
<div className="glass rounded-2xl border border-white/10 faq-item" data-category="technical">
<button className="w-full p-6 text-left flex items-center justify-between faq-trigger">
<h3 className="text-lg font-medium text-white font-sf-pro">Can I integrate ZORA with my existing tools?</h3>
<svg className="w-5 h-5 text-white/60 transition-transform duration-300 faq-icon" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<div className="faq-answer px-6 pb-6">
<p className="text-white/70 leading-relaxed font-sf-text">
                            ZORA integrates seamlessly with popular development tools including Slack, GitHub, Jira, and CI/CD pipelines. Our REST API and webhooks allow for custom integrations with your existing workflow.
                        </p>
</div>
</div>
</div>

<div className="mt-16 text-center glass rounded-2xl p-8 animate-fade-in" style={{animationDelay: `0.6s`}}>
<h2 className="text-2xl font-semibold text-white mb-4 font-sf-pro">Still have questions?</h2>
<p className="text-white/70 mb-6 font-sf-text">Our support team is here to help you get the most out of ZORA.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 font-sf-text" href="#">
                        Contact Support
                    </a>
<a className="px-6 py-3 glass text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 font-sf-text" href="#">
                        Browse Documentation
                    </a>
</div>
</div>
</div>
</main>


    </>
  );
}
