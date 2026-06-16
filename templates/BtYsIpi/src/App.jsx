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
      
<div className="max-w-md w-full">

<div className="mb-8">
<h1 className="heading text-3xl mb-2">Join Aura</h1>
<p className="text-slate-400">Create your account and start transforming your Figma designs with AI</p>
</div>

<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6">
<div className="p-6">
<div className="flex items-center mb-6">
<span className="text-blue-400 heading mr-3">01</span>
<h3 className="text-base text-slate-200 font-semibold">Account Information</h3>
</div>

<form>
<div className="space-y-4">
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="email">Email</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="password">Password</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="password" placeholder="••••••••" required="" type="password"/>
<p className="text-xs text-slate-500 mt-1">Must be at least 8 characters</p>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1" htmlFor="confirm-password">Confirm Password</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" id="confirm-password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
</form>
</div>
<div className="px-6 py-3 bg-slate-800/30 border-t border-slate-800">
<div className="text-xs text-slate-400">
                    All fields are required to create your account
                </div>
</div>
</div>

<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-6">
<div className="p-6">
<div className="flex items-center mb-6">
<span className="text-blue-400 heading mr-3">02</span>
<h3 className="text-base text-slate-200 font-semibold">Connect to Figma</h3>
</div>
<p className="text-sm text-slate-400 mb-6">
                    You'll need to connect your Figma account to use Aura.
                    This will be done after registration.
                </p>
<div className="bg-slate-800/50 rounded-md border border-slate-700 p-3 flex items-center">
<div className="w-6 h-6 rounded bg-blue-500/20 mr-3"></div>
<div className="text-xs text-slate-300">
                        Figma authentication will be requested after sign up
                    </div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-start mb-4">
<div className="flex items-center h-5">
<input className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-blue-600" id="terms" required="" type="checkbox"/>
</div>
<label className="ml-2 text-sm text-slate-400" htmlFor="terms">
                    I agree to the <a className="text-blue-400 hover:underline" href="#">Terms of Service</a> and <a className="text-blue-400 hover:underline" href="#">Privacy Policy</a>
</label>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-blue-600" id="newsletter" type="checkbox"/>
</div>
<label className="ml-2 text-sm text-slate-400" htmlFor="newsletter">
                    Send me occasional product updates and news
                </label>
</div>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors" type="submit">
            Create Account
        </button>

<p className="text-center mt-6 text-sm text-slate-400">
            Already have an account? <a className="text-blue-400 hover:underline" href="#">Sign in</a>
</p>

<p className="text-center mt-8 text-xs text-slate-500">
            No credit card required. Start transforming your Figma designs with AI.
        </p>
</div>

    </>
  );
}
