import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="login-form-wrapper">
<a className="login-form-logo" href="#">L</a>
<h3 className="login-form-title">Welcome Back!</h3>
<form action="#" method="POST" onsubmit="return false;">
<div className="form-group">
<label htmlFor="email">Email Address</label>
<input className="form-control" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="form-group">
<label htmlFor="password">Password</label>
<input className="form-control" id="password" name="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="form-options">
<label className="form-check-label" htmlFor="remember">
<input className="form-check-input" id="remember" name="remember" type="checkbox"/>
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
