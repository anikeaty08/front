import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const target = document.getElementById('loadingWave');
        function splitTextToSpans(targetElement) {
            if (targetElement) {
                const text = targetElement.textContent;
                targetElement.innerHTML = '';
                for (let character of text) {
                    const span = document.createElement('span');
                    if (character === ' ') {
                        span.innerHTML = '&nbsp;';
                    } else {
                        span.textContent = character;
                    }
                    targetElement.appendChild(span);
                }
            }
        }
        splitTextToSpans(target);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="loadingWave">Loading...</div>


    </>
  );
}
