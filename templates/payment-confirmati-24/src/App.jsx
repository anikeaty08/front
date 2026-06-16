import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="max-w-3xl mx-auto py-16 px-5 text-center">
<h1 className="mb-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[#F5F1E8]">
      Payment confirmed.
    </h1>
<p className="mb-8 text-lg opacity-90 text-[#C9D1E3]">
      You’re in. Your next step takes 2 minutes.
    </p>
<div className="mx-auto max-w-2xl text-left border border-white/10 rounded-2xl p-6 bg-white/5">
<h2 className="mb-3 text-lg font-medium text-[#F5F1E8]">
        What happens next
      </h2>
<ol className="list-decimal pl-5 space-y-1.5 opacity-95 leading-relaxed text-[#C9D1E3]">
<li>Check your email for the link to your short questions.</li>
<li>Complete the questions so Flow Codex™ can build your Personal Sleep Reset.</li>
<li>Delivery: within 48 business hours (to your inbox).</li>
</ol>
</div>
<div className="mt-8">
<a className="inline-block w-full sm:w-auto bg-[#2BBFA6] hover:bg-[#24a891] text-white py-4 px-8 rounded-lg font-medium text-base transition-colors shadow-sm" href="https://forms.fillout.com/t/tfijFMASFmus">
        Start your 2-minute questions now
      </a>
</div>
<p className="mt-4 text-xs sm:text-sm text-[#C9D1E3]/80 max-w-lg mx-auto leading-relaxed">
      If you don’t see the email within 5 minutes, check Spam/Promotions — or email 
      <a className="text-[#2BBFA6] hover:underline" href="mailto:info@ethereal-flow.co.uk">info@ethereal-flow.co.uk</a>
</p>
<p className="mt-16 text-sm opacity-90 text-[#C9D1E3]">
      Need help? Email
      <a className="text-[#2BBFA6] hover:underline" href="mailto:info@ethereal-flow.co.uk">
        info@ethereal-flow.co.uk
      </a>
</p>
</section>

    </>
  );
}
