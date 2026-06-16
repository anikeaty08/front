import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FF3B9A',
                        secondary: '#7928CA',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md w-full">

<div className="text-center mb-8">
<div className="inline-flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
<div className="h-3 w-3 rounded-full bg-white"></div>
</div>
<span className="ml-3 text-2xl font-semibold">Serendipity</span>
</div>
</div>

<div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl relative">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-bl from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
<div className="p-8 relative z-10">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome back</h2>
<form>
<div className="space-y-5">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
<input autocomplete="email" className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>

<div>
<div className="flex items-center justify-between mb-1">
<label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
<a className="text-sm text-primary hover:text-secondary transition-colors" href="#">Forgot password?</a>
</div>
<input autocomplete="current-password" className="w-full px-4 py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" id="password" name="password" placeholder="Enter your password" required="" type="password"/>
</div>

<div className="flex items-center">
<input className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" id="remember-me" name="remember-me" type="checkbox"/>
<label className="ml-2 block text-sm text-gray-700" htmlFor="remember-me">
                                Remember me
                            </label>
</div>

<button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-md transition duration-300" type="submit">
                            Sign in
                        </button>
</div>
</form>

<div className="my-6 flex items-center">
<div className="flex-grow border-t border-gray-300"></div>
<span className="px-4 text-sm text-gray-500">Or continue with</span>
<div className="flex-grow border-t border-gray-300"></div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</button>
<button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
<svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
</svg>
</button>
<button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
</svg>
</button>
</div>

<div className="text-center mt-6">
<p className="text-sm text-gray-600">
                        Don't have an account? 
                        <a className="font-medium text-primary hover:text-secondary transition-colors" href="#">Sign up</a>
</p>
</div>
</div>
</div>
</div>

    </>
  );
}
