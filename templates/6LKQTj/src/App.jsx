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
      
<div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg">
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-1/2 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 p-8 flex items-center justify-center">
<div className="text-center">
<h2 className="text-3xl font-bold text-white mb-6">Welcome Back</h2>
<p className="text-blue-200 max-w-sm mx-auto">Sign in to access your account and continue your journey with us.</p>
</div>
</div>

<div className="w-full md:w-1/2 bg-gray-800 p-8 md:p-12">
<div className="mb-8">
<h1 className="text-2xl font-bold text-white mb-2">Login</h1>
<p className="text-gray-400">Please enter your credentials</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1">
<label className="block text-sm font-medium text-gray-300" htmlFor="password">Password</label>
<a className="text-sm text-blue-400 hover:text-blue-300" href="#">Forgot password?</a>
</div>
<input className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center">
<input className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500" id="remember-me" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-300" htmlFor="remember-me">Remember me</label>
</div>
<div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md" type="submit">
                            Sign in
                        </button>
</div>
</form>
<div className="mt-8 text-center">
<p className="text-gray-400">
                        Don't have an account? 
                        <a className="text-blue-400 hover:text-blue-300 font-medium" href="#">Create account</a>
</p>
</div>
</div>
</div>
</div>

    </>
  );
}
