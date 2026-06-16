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
      
<div className="signup-card w-full max-w-md p-8">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-gray-900 mb-2">Create your account</h2>
<p className="text-gray-600">Start building better products with customer feedback</p>
</div>
<div className="space-y-4 mb-6">
<button className="social-btn">
<svg className="w-5 h-5 mr-3" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
        Continue with Google
      </button>
<div className="flex items-center">
<div className="flex-1 h-px bg-gray-200"></div>
<div className="px-4 text-sm text-gray-500">or</div>
<div className="flex-1 h-px bg-gray-200"></div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">First name</label>
<input className="form-input" id="firstName" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">Last name</label>
<input className="form-input" id="lastName" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
<input className="form-input" id="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company name</label>
<input className="form-input" id="company" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
<input className="form-input" id="password" required="" type="password"/>
<p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
</div>
<div className="flex items-start">
<input className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" id="terms" required="" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-600" htmlFor="terms">
          I agree to the <a className="text-indigo-600 hover:text-indigo-800" href="#">Terms of Service</a> and <a className="text-indigo-600 hover:text-indigo-800" href="#">Privacy Policy</a>
</label>
</div>
<button className="btn-primary w-full" type="submit">Create account</button>
</form>
<div className="mt-6 text-center text-sm">
<p className="text-gray-600">
        Already have an account? <a className="text-indigo-600 hover:text-indigo-800 font-medium" href="#">Sign in</a>
</p>
</div>
</div>

    </>
  );
}
