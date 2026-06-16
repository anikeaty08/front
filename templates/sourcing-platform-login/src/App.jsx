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
      

<div className="hidden md:flex md:w-1/2 lg:w-[45%] bg-zinc-50 flex-col justify-between p-8 lg:p-12 border-r border-zinc-200">

<div className="font-semibold text-xl tracking-tighter text-zinc-900">
            SOURCING
        </div>

<div className="max-w-md">
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
                Streamline your global supply chain.
            </h1>
<p className="text-base text-zinc-500 font-normal leading-relaxed">
                Connect with top-tier suppliers, manage purchase orders, and track shipments in one unified platform designed for modern enterprise.
            </p>
</div>

<div className="text-sm text-zinc-400 font-medium">
            © 2024 Sourcing Platform Inc. All rights reserved.
        </div>
</div>

<div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8 bg-white">

<div className="md:hidden font-semibold text-xl tracking-tighter mb-10 text-center text-zinc-900">
            SOURCING
        </div>
<div className="sm:mx-auto sm:w-full sm:max-w-[420px]">

<div className="bg-white border border-zinc-200 rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] p-8 sm:p-10">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
                    Sign in to your account
                </h2>
<p className="text-sm text-zinc-500 mb-8 font-normal">
                    Enter your email and password to access the dashboard.
                </p>
<form action="#" className="space-y-6" method="POST">

<div>
<label className="block text-sm font-medium text-zinc-700 mb-2" htmlFor="email">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input autocomplete="email" className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors shadow-sm bg-white" id="email" name="email" placeholder="olivia@company.com" required="" type="email"/>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-sm font-medium text-zinc-700" htmlFor="password">Password</label>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Forgot password?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input autocomplete="current-password" className="block w-full pl-10 pr-3 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-colors shadow-sm bg-white" id="password" name="password" placeholder="••••••••" required="" type="password"/>
</div>
</div>

<div className="pt-2">
<button className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-colors" type="submit">
                            Sign in
                            <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
<div className="mt-8 flex justify-center">
<p className="text-sm text-zinc-500">
                        Don't have an account? <a className="font-medium text-zinc-900 hover:underline transition-all" href="#">Contact sales</a>
</p>
</div>
</div>
</div>

<div className="md:hidden mt-12 text-center text-xs text-zinc-400 font-medium">
            © 2024 Sourcing Platform Inc.
        </div>
</div>

    </>
  );
}
