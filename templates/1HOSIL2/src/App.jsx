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
      
<div className="profile-card">
<div className="cover-photo"></div>
<img alt="User Avatar" className="avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h3 className="name">Maria Garcia</h3>
<p className="handle">@mariacreative</p>
<div className="stats">
<div className="stat">
<div className="value">1.2K</div>
<div className="label">Followers</div>
</div>
<div className="stat">
<div className="value">450</div>
<div className="label">Following</div>
</div>
<div className="stat">
<div className="value">85</div>
<div className="label">Posts</div>
</div>
</div>
<div className="actions">
<button className="secondary">Message</button>
<button className="primary">Follow</button>
</div>
</div>

    </>
  );
}
