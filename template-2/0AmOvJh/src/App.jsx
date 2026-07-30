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
      
<div className="login-form-wrapper">
<h3 className="login-form-title">Quick Access</h3>
<p style={{textAlign: `center`, color: `var(--text-secondary)`, fontSize: `0.9rem`, marginTop: `-20px`, marginBottom: `25px`}}>
            Sign in to your account below.
        </p>
<form action="#" method="POST">
<div className="form-group">
<input className="form-control" name="email" placeholder="Email Address" required type="email" />
</div>
<div className="form-group">
<input className="form-control" name="password" placeholder="Password" required type="password" />
</div>
<div className="form-options">
<a className="form-link" href="#">Create account</a>
<a className="form-link" href="#">Need help?</a>
</div>
<button className="c-btn c-btn-primary" type="submit">Log In</button>
<p className="form-footer-text">
                By signing in, you agree to our <a className="form-link" href="#">Terms</a> & <a className="form-link" href="#">Policy</a>.
            </p>
</form>
</div>

    </>
  );
}
