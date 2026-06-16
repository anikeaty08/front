import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            dark: '#101010',
            'dark-gray': '#1a1a1a',
            'light-gray': '#2a2a2a',
            accent: '#5E6AD2'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen items-center justify-center p-4">
<div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white dark:bg-dark-gray shadow-lg flex">

<div className="w-1/2 p-8">
<div className="mb-8">
<svg className="h-8 w-8 mb-4" viewbox="0 0 100 100">
<circle className="text-accent" cx="50" cy="50" fill="currentColor" r="40"></circle>
</svg>
<h1 className="text-xl font-medium">Create your account</h1>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Join thousands of teams using our platform</p>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 bg-transparent border border-gray-200 dark:border-light-gray rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent dark:bg-dark-gray" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="name">Full name</label>
<input className="w-full px-3 py-2 bg-transparent border border-gray-200 dark:border-light-gray rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent dark:bg-dark-gray" id="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="password">Password</label>
<input className="w-full px-3 py-2 bg-transparent border border-gray-200 dark:border-light-gray rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent dark:bg-dark-gray" id="password" placeholder="8+ characters" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="company">Company name</label>
<input className="w-full px-3 py-2 bg-transparent border border-gray-200 dark:border-light-gray rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent dark:bg-dark-gray" id="company" placeholder="Your company" type="text"/>
</div>
<button className="w-full bg-accent hover:bg-opacity-90 text-white py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-dark-gray" type="submit">
            Create account
          </button>
</form>
<p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          By signing up, you agree to our <a className="text-accent hover:underline" href="#">Terms of Service</a> and <a className="text-accent hover:underline" href="#">Privacy Policy</a>.
        </p>
</div>

<div className="w-1/2 bg-gradient-to-br from-accent to-indigo-800 p-8 flex items-center justify-center">
<div className="max-w-sm text-white">
<div className="flex space-x-1 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-60"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<h2 className="text-xl font-medium mb-3">Streamline your workflow</h2>
<p className="text-sm text-white/80 leading-relaxed">
            Our platform helps teams move faster with intuitive tools designed for modern collaboration.
          </p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
<div className="text-lg font-medium">15k+</div>
<div className="text-xs text-white/70">Teams</div>
</div>
<div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
<div className="text-lg font-medium">99.9%</div>
<div className="text-xs text-white/70">Uptime</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
