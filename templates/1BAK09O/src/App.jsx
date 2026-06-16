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
      
<div className="open-book relative w-56 h-[350px]">

<div className="cover absolute inset-0 bg-gray-200 border border-stone-200 rounded-lg shadow-bevel flex flex-col justify-center items-center">
<span className="playfair font-bold text-2xl text-gray-900 text-center px-4 leading-tight">
        Dieter Rams:<br/>The Complete Works
      </span>
<span className="playfair text-md mt-3 text-stone-700 text-center">
        by Klaus Klemp
      </span>
</div>

<div className="page absolute inset-0 bg-stone-100 border border-stone-200 rounded-lg flex flex-col justify-start items-center text-gray-800 px-4 py-5 serif shadow-bevel">
<span className="playfair font-semibold tracking-tight text-[25px] leading-tight text-gray-900 mb-2 text-center">
        Dieter Rams: The Complete Works
      </span>
<span className="playfair font-semibold tracking-tight text-[15px] leading-tight text-gray-800 mb-3 text-center">
        by Klaus Klemp
      </span>
<div className="ellipsis-text w-full text-[13px] leading-snug">
        "Dieter Rams: The Complete Works" is an extensive monograph chronicling the prolific career of Dieter Rams, a luminary in industrial design. Authored by Klaus Klemp, the book features hundreds of products, sketches, and archival images, providing a comprehensive overview of Rams’s philosophy and profound influence on modern design. This essential volume is a testament to his legacy of simplicity, clarity, and enduring functionality.
      </div>
</div>

<div className="absolute left-0 top-3 bottom-3 w-2 rounded-l-lg bg-stone-200 pointer-events-none"></div>
</div>

    </>
  );
}
