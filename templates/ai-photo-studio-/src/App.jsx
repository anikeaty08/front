import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.body.style.opacity = '1';
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div @click="currentView = 'gallery'" className="flex items-center gap-3 cursor-pointer group">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">
                    L
                </div>
<span className="text-sm font-medium tracking-tight text-white">LUMINA</span>
</div>
<div className="flex items-center gap-4">

<template x-if="isLoggedIn">
<div className="flex items-center gap-4">
<button @click="uploadMode = true" className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-xs font-medium">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">New Post</span>
</button>
<div className="relative group" x-data="{ open: false }">
<button @click="open = !open" @click.outside="open = false" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors">
<span className="text-xs font-medium text-white">F</span>
</button>
<div className="absolute right-0 top-full mt-2 w-32 bg-zinc-900 border border-zinc-800 rounded-lg py-1 shadow-xl" style={{display: 'none'}} x-show="open">
<button @click="logout()" className="w-full text-left px-4 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">Log Out</button>
</div>
</div>
</div>
</template>

<template x-if="!isLoggedIn">
<div className="flex items-center gap-3">
<button @click="currentView = 'login'" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">Log In</button>
<button @click="currentView = 'signup'" className="px-3 py-1.5 rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition-all text-xs font-medium">Sign Up</button>
</div>
</template>
</div>
</div>
</nav>

<main className="max-w-5xl mx-auto px-6 pt-24 pb-12 min-h-[calc(100vh-6rem)]">

<div x-show="currentView === 'gallery'" x-transition.opacity.duration.300ms="">

<header className="mb-12 flex flex-col items-start gap-4">
<h1 className="text-3xl tracking-tight text-white font-medium">Gallery</h1>
<p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                    A collection of captured moments. Connect with friends and share the stories behind the lens.
                </p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
<template :key="post.id" x-htmlFor="post in posts">
<div className="group flex flex-col gap-3">
<div className="overflow-hidden rounded-lg aspect-[4/5] bg-zinc-900 relative">
<img :src="post.url" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white leading-none mb-1" x-text="post.title"></h3>
<p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed" x-text="post.desc"></p>
</div>
</div>
<div className="flex items-center justify-between pt-1 border-t border-zinc-900/50">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-400" x-text="post.author.charAt(0)"></div>
<span className="text-[10px] font-medium text-zinc-400" x-text="post.author"></span>
</div>
<span className="text-[10px] text-zinc-600" x-text="post.date"></span>
</div>
</div>
</template>
</div>
</div>

<div style={{display: 'none'}} x-show="currentView === 'login'" x-transition.opacity.duration.300ms="">
<div className="flex flex-col items-center justify-center min-h-[60vh] max-w-sm mx-auto">
<div className="w-full space-y-6">
<div className="text-center space-y-2">
<h1 className="text-2xl font-semibold tracking-tight text-white">Welcome back</h1>
<p className="text-sm text-zinc-500">Enter your email to access your account</p>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-zinc-400">Password</label>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="••••••••" type="password"/>
</div>
<button @click="login()" className="w-full bg-white text-black hover:bg-zinc-200 transition-colors h-9 rounded-md text-sm font-medium flex items-center justify-center">
                            Log In
                        </button>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<span className="w-full border-t border-zinc-900"></span>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-black px-2 text-zinc-600">Or continue with</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 h-9 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors text-white text-xs font-medium">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                            Google
                        </button>
<button className="flex items-center justify-center gap-2 h-9 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors text-white text-xs font-medium">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg>
                            GitHub
                        </button>
</div>
<p className="text-center text-xs text-zinc-500">
                        Don't have an account? 
                        <button @click="currentView = 'signup'" className="text-white hover:underline">Sign up</button>
</p>
</div>
</div>
</div>

<div style={{display: 'none'}} x-show="currentView === 'signup'" x-transition.opacity.duration.300ms="">
<div className="flex flex-col items-center justify-center min-h-[60vh] max-w-sm mx-auto">
<div className="w-full space-y-6">
<div className="text-center space-y-2">
<h1 className="text-2xl font-semibold tracking-tight text-white">Create an account</h1>
<p className="text-sm text-zinc-500">Enter your details to get started</p>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Password</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" placeholder="Create a password" type="password"/>
</div>
<button @click="signup()" className="w-full bg-white text-black hover:bg-zinc-200 transition-colors h-9 rounded-md text-sm font-medium flex items-center justify-center">
                            Sign Up
                        </button>
</div>
<p className="text-center text-xs text-zinc-500">
                        Already have an account? 
                        <button @click="currentView = 'login'" className="text-white hover:underline">Log in</button>
</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" style={{display: 'none'}} x-show="uploadMode" x-transition.opacity.duration.200ms="">
<div @click.away="resetForm()" className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl shadow-black w-full max-w-lg overflow-hidden relative">
<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
<h3 className="text-sm font-medium text-white">Upload Photograph</h3>
<button @click="resetForm()" className="text-zinc-500 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="p-6 space-y-6">
<div className="relative group w-full aspect-video rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-500 transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden">
<input @change="handleFile" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file"/>
<div className="flex flex-col items-center gap-2 text-zinc-500 group-hover:text-zinc-400 transition-colors" x-show="!previewUrl">
<div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:image-plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"></path><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path><circle cx="9" cy="9" r="2"></circle></g></svg>
</div>
<span className="text-xs font-medium">Click to browse or drag file</span>
</div>
<img :src="previewUrl" className="absolute inset-0 w-full h-full object-cover" style={{display: 'none'}} x-show="previewUrl"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-0" style={{display: 'none'}} x-show="previewUrl">
<span className="text-xs font-medium text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">Change Image</span>
</div>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500">Title</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Ex. Midnight in Tokyo" type="text" x-model="newTitle"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500">Description</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none" placeholder="Add technical details or a story..." rows="3" x-model="newDesc"></textarea>
</div>
</div>
</div>
<div className="px-6 py-4 bg-zinc-900/30 border-t border-zinc-900 flex justify-end gap-3">
<button @click="resetForm()" className="px-4 py-2 rounded-md text-xs font-medium text-zinc-400 hover:text-white transition-colors">Cancel</button>
<button :className="previewUrl ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'" :disabled="!previewUrl" @click="publish()" className="px-4 py-2 rounded-md text-xs font-medium transition-colors flex items-center gap-2 bg-zinc-800 text-zinc-500 cursor-not-allowed" disabled="disabled">
<span>Publish</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</main>
<footer className="max-w-5xl mx-auto px-6 border-t border-zinc-900 py-8 flex items-center justify-between text-zinc-600">
<p className="text-xs">© 2023 Lumina Gallery. Design by Linear.</p>
<div className="flex gap-4">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
</footer>


    </>
  );
}
