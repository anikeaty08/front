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
      
<div className="login-card">
<div className="login-header">
<h2 className="login-title">Account Login</h2>
<span className="login-badge">Secure</span>
</div>
<div className="input-container">
<div className="input-field">
<div className="input-icon"></div>
<div className="input-group">
<label className="input-label">Email</label>
<input className="login-input" placeholder="your.email@example.com" type="email"/>
</div>
</div>
<div className="input-field">
<div className="input-icon"></div>
<div className="input-group">
<label className="input-label">Password</label>
<input className="login-input" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
<div className="remember-me">
<div className="checkbox-container">
<input id="remember" type="checkbox"/>
<label className="checkbox-label" htmlFor="remember">Remember me</label>
</div>
<a className="forgot-password" href="#">Forgot password?</a>
</div>
<button className="login-button">Sign In</button>
<div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
</div>
<div className="progress-container">
<div className="progress-label">
<span className="progress-text">Security level</span>
<span className="progress-text">Strong</span>
</div>
<div className="progress-bar">
<div className="progress-fill"></div>
</div>
<div className="progress-status">
<span className="progress-text">2FA enabled</span>
<span className="progress-text">70%</span>
</div>
</div>
</div>

    </>
  );
}
