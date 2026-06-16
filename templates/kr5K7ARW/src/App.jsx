import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showStory(n) {
            document.getElementById('homepage').classList.add('hidden');
            document.getElementById('story' + n).classList.remove('hidden');
        }
        function goHome() {
            document.getElementById('story1').classList.add('hidden');
            document.getElementById('story2').classList.add('hidden');
            document.getElementById('homepage').classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container">

<div id="homepage">
<h1>✨ Story Time! ✨</h1>
<div className="story-list">
<button className="story-card" onclick="showStory(1)">
<span className="icon">🐰</span>
                    The Brave Little Rabbit
                </button>
<button className="story-card" onclick="showStory(2)">
<span className="icon">🐟</span>
                    The Magical Rainbow Fish
                </button>
</div>
</div>

<div className="hidden" id="story1">
<div className="story-content">
<button className="back-btn" onclick="goHome()">⬅️ Back to Stories</button>
<h2>🐰 The Brave Little Rabbit</h2>
<p>
                    Once upon a time, there was a little rabbit named <b>Rosie</b> who lived in a cozy burrow. One day, Rosie heard a "chirp! chirp!" from the meadow: a baby bird had fallen from its nest!
                    <br/><br/>
                    No one else dared to help, but Rosie was brave. She hopped over and cheered up the little bird. Rosie called her friends—a squirrel, a mouse, and a kind old turtle—and together, they lifted the bird back to its nest.
                    <br/><br/>
                    The mama bird sang a happy song, and everyone cheered. Rosie became the hero of the meadow, and every animal wanted to be as brave as her!
                </p>
</div>
</div>

<div className="hidden" id="story2">
<div className="story-content">
<button className="back-btn" onclick="goHome()">⬅️ Back to Stories</button>
<h2>🐟 The Magical Rainbow Fish</h2>
<p>
                    Deep in the blue ocean, a fish named <b>Flora</b> sparkled with every color of the rainbow. Flora loved to swim fast and swirl, leaving shiny trails for her friends to chase.
                    <br/><br/>
                    One day, the ocean felt dark and sleepy. "Let's make it happy!" Flora said. She gathered her friends and they did a silly dance, whirling and swirling, up and down.
                    <br/><br/>
                    Suddenly, a rainbow glowed under the sea and all the fish clapped their fins. From then on, whenever the ocean needed cheering, Flora and her friends danced until everyone was smiling!
                </p>
</div>
</div>
</div>


    </>
  );
}
