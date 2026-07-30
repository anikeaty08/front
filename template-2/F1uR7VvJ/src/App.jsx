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
<a className="login-form-logo" href="#">L</a>
<h3 className="login-form-title">Welcome Back!</h3>
<form action="#" method="POST" onSubmit={(e) => { return false; }}>
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input className="form-control" id="email" name="email" placeholder="you@example.com" required type="email" />
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input className="form-control" id="password" name="password" placeholder="••••••••" required type="password" />
</div>
<div className="form-options">
<label className="form-check-label" htmlFor="remember">
<input className="form-check-input" id="remember" name="remember" type="checkbox" />
                    Remember me
                </label>
<a className="form-link" href="#">Forgot password?</a>
</div>
<button className="c-btn c-btn-primary" type="submit">Sign In</button>
<p className="form-footer-text">
                Don't have an account? <a className="form-link" href="#">Sign up</a>
</p>
</form>
</div>

    </>
  );
}
