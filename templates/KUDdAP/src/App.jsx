import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            // Shrink Nav on Scroll
            const nav = document.querySelector('.main-nav');
            if (nav) {
                // Initial check in case page loads scrolled
                if (window.scrollY > 50) {
                    document.body.classList.add('scrolled');
                }
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        document.body.classList.add('scrolled');
                    } else {
                        document.body.classList.remove('scrolled');
                    }
                });
            }

            // Smooth scroll for any on-page links (though not strictly needed for features page itself)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#') && href.length > 1 && document.querySelector(href)) {
                         e.preventDefault();
                         document.querySelector(href).scrollIntoView({
                             behavior: 'smooth'
                         });
                    }
                    // Allow normal navigation for links to other pages
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="main-nav">
<div className="nav-logo">
<a href="hero-section.html">Wowza!</a> 
</div>
<div className="nav-links">
<ul>
<li><a href="features-section.html">Features</a></li>
<li><a href="pricing-section.html">Pricing</a></li>
<li><a href="about-section.html">About</a></li>
<li><a className="nav-cta-link" href="contact-section.html">Get Started</a></li>
</ul>
</div>
</nav>
<section id="features-section">
<div className="container">
<h2 className="section-title">What Makes Us <span className="highlight">Wowza</span>?</h2>
<p className="section-subtitle">Our features are designed to spark joy, boost productivity, and make your ideas shine brighter than ever.</p>
<div className="features-grid">
<div className="feature-card">
<span className="feature-icon">🚀</span>
<h3>Blast Off Quickly</h3>
<p>Get your projects up and running in record time with our intuitive tools and seamless onboarding.</p>
</div>
<div className="feature-card">
<span className="feature-icon">🎨</span>
<h3>Creative Freedom</h3>
<p>Unleash your imagination with flexible customization options that bring your unique vision to life.</p>
</div>
<div className="feature-card">
<span className="feature-icon">💡</span>
<h3>Bright Ideas Welcome</h3>
<p>We're built for innovation, providing the perfect playground for your most ambitious concepts.</p>
</div>
<div className="feature-card">
<span className="feature-icon">🤝</span>
<h3>Playful Collaboration</h3>
<p>Teamwork makes the dream work! Our platform makes collaboration fun and effective.</p>
</div>
<div className="feature-card">
<span className="feature-icon">💖</span>
<h3>User-Loved Design</h3>
<p>Crafted with care, our interfaces are not just functional but genuinely delightful to use.</p>
</div>
<div className="feature-card">
<span className="feature-icon">⚙️</span>
<h3>Powerful Engine</h3>
<p>Beneath the playful exterior lies a robust engine ready to handle your most demanding tasks.</p>
</div>
</div>
</div>
</section>


    </>
  );
}
