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
      
<nav className="navbar">
<span className="brand">Aurora AI</span>
<div className="nav-links">
<a className="nav-link" href="#">Home</a>
<a className="nav-link" href="#">Features</a>
<a className="nav-link" href="#">Pricing</a>
<a className="nav-link" href="#">Docs</a>
</div>
<div className="nav-actions">
<a className="sign-in-btn" href="#">Sign In</a>
</div>
</nav>
<section className="wrapper" style={{paddingTop: '62px'}}>
<div className="hero"></div>
<div className="content">
<h1 className="main-title" data-text="Aurora AI Music Studio">
        Aurora AI Music Studio
      </h1>
<div className="subheadline">
        Describe the music you want and let Aurora AI do the rest.
      </div>
<form autocomplete="off" className="" onsubmit="return false;" spellcheck="false">
<div className="chat-prompt-container">
<div className="music-prompt-chatbox">
<textarea autocomplete="off" className="music-prompt-textarea" id="musicPrompt" name="musicPrompt" placeholder="Describe your desired music..." rows="7" spellcheck="false"></textarea>
<div className="chatbox-controls">
<div className="dropdown-wrapper">
<select aria-label="Select AI Model" className="model-dropdown px-4" id="modelSelect" name="modelSelect">
<option value="gpt-3.5">GPT-3.5</option>
<option selected="" value="gpt-4">GPT-4</option>
<option value="gpt-4.5">GPT-4.5</option>
</select>
<span className="dropdown-chevron">
<svg fill="none" height="18" stroke="#bcbcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewbox="0 0 20 20" width="18">
<path d="M6 8l4 4 4-4"></path>
</svg>
</span>
</div>
<button className="cta-button" type="submit">
                Start Creating
                <svg className="cta-icon" fill="none" viewbox="0 0 20 20">
<path d="M6 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>
</form>
</div>
</section>

    </>
  );
}
