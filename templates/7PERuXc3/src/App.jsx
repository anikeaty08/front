import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dark: {
                            900: '#0c1421',
                            800: '#0f172a',
                            700: '#1e293b',
                            600: '#334155'
                        },
                        accent: {
                            DEFAULT: '#60a5fa',
                            hover: '#93c5fd'
                        },
                        text: {
                            primary: '#e2e8f0',
                            secondary: '#94a3b8'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif']
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            // Set current year in footer
            const yearSpan = document.getElementById('currentYear');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<footer className="bg-dark-900 text-text-secondary w-full max-w-6xl mx-5 rounded-lg shadow-xl border-t border-dark-600">
<div className="container mx-auto px-4 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div>
<h4 className="text-accent font-semibold text-lg uppercase tracking-wider mb-4">Modern Solutions Inc.</h4>
<p className="mb-4 leading-relaxed">Pioneering the future of digital innovation with cutting-edge technology and client-focused strategies.</p>
<div className="flex space-x-4 mt-4">
<a aria-label="Facebook" className="text-text-secondary hover:text-accent transition-colors duration-150 hover:scale-110 transform" href="#">
<i className="fab fa-facebook-f text-xl"></i>
</a>
<a aria-label="Twitter" className="text-text-secondary hover:text-accent transition-colors duration-150 hover:scale-110 transform" href="#">
<i className="fab fa-twitter text-xl"></i>
</a>
<a aria-label="LinkedIn" className="text-text-secondary hover:text-accent transition-colors duration-150 hover:scale-110 transform" href="#">
<i className="fab fa-linkedin-in text-xl"></i>
</a>
<a aria-label="Instagram" className="text-text-secondary hover:text-accent transition-colors duration-150 hover:scale-110 transform" href="#">
<i className="fab fa-instagram text-xl"></i>
</a>
</div>
</div>

<div>
<h4 className="text-accent font-semibold text-lg uppercase tracking-wider mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="hover:text-accent transition-colors duration-150 hover:underline" href="index.html">Home</a></li>
<li><a className="hover:text-accent transition-colors duration-150 hover:underline" href="features.html">Features</a></li>
<li><a className="hover:text-accent transition-colors duration-150 hover:underline" href="about.html">About Us</a></li>
</ul>
</div>

<div>
<h4 className="text-accent font-semibold text-lg uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-accent transition-colors duration-150 hover:underline" href="privacy-policy.html">Privacy Policy</a></li>
<li><a className="hover:text-accent transition-colors duration-150 hover:underline" href="terms-of-service.html">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-accent font-semibold text-lg uppercase tracking-wider mb-4">Contact Us</h4>
<p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i>123 Innovation Dr, Tech City</p>
<p><i className="fas fa-phone-alt mr-2"></i>(123) 456-7890</p>
</div>
</div>

<div className="text-center pt-8 mt-8 border-t border-dark-600 text-sm">
<p>© <span id="currentYear"></span> Modern Solutions Inc. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
