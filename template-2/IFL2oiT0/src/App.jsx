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



        document.addEventListener('DOMContentLoaded', () => {
            // Current Year for Footer
            const yearSpan = document.getElementById('currentYear');
            if(yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

            // Smooth scroll for any on-page links (only if they point to an ID on this very page)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#') && href.length > 1) {
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
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
      
<footer className="main-footer">
<div className="footer-blob b1"></div>
<div className="footer-blob b2"></div>
<div className="footer-star s1"></div>
<div className="footer-star s2"></div>
<div className="footer-star s3"></div>
<div className="footer-star s4"></div>
<div className="footer-star s5"></div>
<div className="footer-content">
<div className="footer-logo">

<a href="#">Wowza<span className="exclamation">!</span></a>
</div>
<nav className="footer-links">
<ul>
<li><a href="#">Features</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
<div className="social-links">
<a aria-label="Twitter Profile" href="#" title="Twitter">
<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.35 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.49 9.49 0 0 0 2.323-2.41z"></path></svg>
</a>
<a aria-label="Instagram Profile" href="#" title="Instagram">
<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.791.218 2.164.388.473.17.771.398 1.061.689.29.29.518.588.689 1.061.17.373.336.992.388 2.164.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.791-.388 2.164a2.89 2.89 0 0 1-.689 1.061c-.29.29-.588.518-1.061.689-.373.17-.992.336-2.164.388-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.791-.218-2.164-.388a2.89 2.89 0 0 1-1.061-.689c-.29-.29-.518-.588-.689-1.061-.17-.373-.336-.992-.388-2.164-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.791.388-2.164.17-.473.398-.771.689-1.061.29-.29.588-.518 1.061-.689.373-.17.992.336 2.164-.388C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.556 0-3.854.015-5.184.075-1.203.053-1.88.224-2.258.38-.45.184-.766.42-1.057.71-.29.29-.526.608-.71 1.057-.156.378-.327 1.055-.38 2.258-.06 1.33-.075 1.628-.075 5.184s.015 3.854.075 5.184c.053 1.203.224 1.88.38 2.258.184.45.42.766.71 1.057.29.29.608.526 1.057.71.378.156 1.055.327 2.258.38 1.33.06 1.628.075 5.184.075s3.854-.015 5.184-.075c1.203-.053 1.88-.224 2.258-.38.45-.184-.766.42 1.057-.71.29.29.526.608-.71-1.057.156-.378-.327-1.055-.38-2.258.06-1.33.075-1.628.075-5.184s-.015-3.854-.075-5.184c-.053-1.203-.224-1.88-.38-2.258a2.684 2.684 0 0 0-.71-1.057 2.684 2.684 0 0 0-1.057-.71c-.378-.156-1.055-.327-2.258-.38-1.33-.06-1.628-.075-5.184-.075zm0 4.628a3.538 3.538 0 1 0 0 7.076 3.538 3.538 0 0 0 0-7.076zm0 5.671a2.133 2.133 0 1 1 0-4.266 2.133 2.133 0 0 1 0 4.266zm5.234-6.086a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16z"></path></svg>
</a>
<a aria-label="LinkedIn Profile" href="#" title="LinkedIn">
<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
<p className="copyright">© <span id="currentYear"></span> Wowza! Inc. All the sparkles are ours.</p>
</div>
</footer>


    </>
  );
}
