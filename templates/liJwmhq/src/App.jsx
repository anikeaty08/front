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
<h3 className="login-form-title">Quick Access</h3>
<p className="form-subtitle">Sign in to your account below.</p>
<form action="#" method="POST" onsubmit="return false;">
<div className="form-group">
<input className="form-control" name="email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="form-group">
<input className="form-control" name="password" placeholder="Password" required="" type="password"/>
</div>
<div className="form-options">
<a className="form-link" href="#">Create account</a>
<a className="form-link" href="#">Need help?</a>
</div>
<button className="c-btn c-btn-primary" type="submit">Log In</button>
<p className="form-footer-text">
                By signing in, you agree to our <a className="form-link" href="#">Terms</a> &amp; <a className="form-link" href="#">Policy</a>.
            </p>
</form>
</div>

    </>
  );
}
