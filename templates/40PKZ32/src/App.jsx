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
      
<div className="min-h-screen flex items-center justify-center p-4">
<div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
<div className="md:flex">

<div className="md:w-3/5 p-8 flex flex-col justify-center">
<div className="mb-10">
<h2 className="text-2xl font-bold text-gray-800">Sign in to your account</h2>
<p className="text-gray-500 mt-2">Welcome back! Please enter your details.</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
<input autocomplete="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" id="email" name="email" placeholder="you@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
<div className="relative">
<input autocomplete="current-password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" id="password" name="password" placeholder="Enter your password" required="" type="password"/>
<button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600" tabindex="-1" type="button">
<i className="fa-solid fa-eye"></i>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center">
<input className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-0" type="checkbox"/>
<span className="ml-2 block text-sm text-gray-700">Remember me</span>
</label>
<a className="text-sm text-indigo-600 hover:text-indigo-500 font-medium" href="#">Forgot password?</a>
</div>
<div className="pt-2">
<button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition font-medium flex items-center justify-center" type="submit">
<span>Sign in</span>
<i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
</button>
</div>
</form>
<div className="mt-6 text-center">
<p className="text-sm text-gray-500">Don't have an account? 
              <a className="text-indigo-600 hover:text-indigo-500 font-medium" href="#">Sign up</a>
</p>
</div>
<div className="mt-6 flex items-center justify-center space-x-4">
<button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
<i className="fa-brands fa-google text-red-500 mr-2"></i>
<span className="text-sm text-gray-700">Google</span>
</button>
<button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
<i className="fa-brands fa-github text-gray-700 mr-2"></i>
<span className="text-sm text-gray-700">GitHub</span>
</button>
</div>
</div>

<div className="md:w-2/5 bg-gray-50 p-8 border-l border-gray-200 flex flex-col items-center justify-center text-center">
<div className="mb-6">
<img alt="AuraChat Logo" className="w-32 h-32 mx-auto filter invert" src="https://aurachat.io/logo-aura.svg"/>
</div>
<h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome to Dashboard</h3>
<p className="text-gray-500 mb-4">Access your projects, teams, and payments in one place.</p>
<div className="flex items-center justify-center space-x-3 mt-6">
<i className="fa-solid fa-shield-halved text-indigo-500 text-xl"></i>
<span className="text-xs text-gray-500">Your credentials are encrypted &amp; secure</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
