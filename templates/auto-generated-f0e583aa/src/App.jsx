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
      
<div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
<h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Aura!</h2>
<p className="text-gray-600 mb-6">This is an automatically generated component to show off programmatic content creation.</p>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Learn More
    </button>
</div>

    </>
  );
}
