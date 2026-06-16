import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
25: '#fcfcfd',
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



        // Image Preview Logic
        function previewImage(input) {
            const placeholder = document.getElementById('upload-placeholder');
            const previewContainer = document.getElementById('image-preview');
            const previewImg = document.getElementById('preview-img');

            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImg.src = e.target.result;
                    placeholder.classList.add('hidden');
                    previewContainer.classList.remove('hidden');
                    previewContainer.classList.add('flex');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // Form Submission Logic
        document.getElementById('adoption-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = document.getElementById('adoption-form');
            const successMsg = document.getElementById('success-message');
            const mainTitle = document.querySelector('h1');
            const subTitle = document.querySelector('p.text-lg');

            // Simulate API delay and UI transition
            const btn = form.querySelector('button[type="submit"]');
            const originalBtnText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="18" class="animate-spin"></iconify-icon> Processing...';

            setTimeout(() => {
                // Hide header text for focus
                if(mainTitle) mainTitle.style.display = 'none';
                if(subTitle) subTitle.style.display = 'none';

                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                
                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white transition-transform group-hover:scale-95">
<iconify-icon icon="lucide:paw-print" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-slate-900">FindYourPet</span>
</a>
<div className="hidden sm:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Adopt</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Stories</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Sign In</a>
</div>
</div>
</nav>

<main className="mx-auto max-w-3xl px-6 py-12 lg:py-16">

<div className="mb-10 text-center sm:text-left">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Give Your Pet for Adoption</h1>
<p className="mt-3 text-lg text-slate-500 font-light">Help your pet find a safe and loving home by providing their details below.</p>
</div>

<div className="hidden animate-fade-in-up" id="success-message">
<div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Thank you!</h2>
<p className="mt-2 max-w-md text-slate-500">Your pet details have been submitted and will be reviewed by our team before being listed for adoption.</p>
<button className="mt-8 rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all" onclick="location.reload()">
                    Submit Another
                </button>
</div>
</div>

<form className="space-y-8" id="adoption-form">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8">
<div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
<iconify-icon icon="lucide:dog" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900">Pet Information</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2">

<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="pet-name">Pet Name</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="pet-name" placeholder="e.g. Bella" required="" type="text"/>
</div>

<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="pet-type">Pet Type</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-25 px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="pet-type" required="">
<option disabled="" selected="" value="">Select Type</option>
<option value="dog">Dog</option>
<option value="cat">Cat</option>
<option value="bird">Bird</option>
<option value="rabbit">Rabbit</option>
<option value="other">Other</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>

<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="breed">Breed</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="breed" placeholder="e.g. Golden Retriever" type="text"/>
</div>

<div className="col-span-2 grid grid-cols-2 gap-6 sm:col-span-1">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="age">Age (Years)</label>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="age" min="0" placeholder="2" step="0.1" type="number"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="gender">Gender</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-25 px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="gender" required="">
<option disabled="" selected="" value="">Select</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="col-span-2">
<label className="mb-3 block text-xs font-medium uppercase tracking-wide text-slate-500">Is the pet vaccinated?</label>
<div className="flex gap-4">
<label className="relative flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 transition-all hover:bg-slate-50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50/50 has-[:checked]:text-indigo-700">
<input checked="" className="peer h-4 w-4 accent-indigo-600" name="vaccinated" type="radio" value="yes"/>
<span className="text-sm font-medium">Yes, Vaccinated</span>
</label>
<label className="relative flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 transition-all hover:bg-slate-50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50/50 has-[:checked]:text-indigo-700">
<input className="peer h-4 w-4 accent-indigo-600" name="vaccinated" type="radio" value="no"/>
<span className="text-sm font-medium">No / Not Sure</span>
</label>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8">
<div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-600">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900">Details &amp; Photo</h2>
</div>
<div className="space-y-6">

<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="about">About the Pet</label>
<textarea className="w-full resize-y rounded-lg border border-slate-200 bg-slate-25 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="about" placeholder="Describe personality, behavior, health notes, or special care instructions..." rows="4"></textarea>
</div>

<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Pet Photo</label>
<div className="group relative mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 transition-colors hover:border-indigo-400 hover:bg-indigo-50/10">
<input accept="image/*" className="absolute inset-0 z-10 cursor-pointer opacity-0" onchange="previewImage(this)" type="file"/>

<div className="text-center transition-all" id="upload-placeholder">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors" icon="lucide:upload-cloud" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="mt-4 flex text-sm text-slate-600">
<span className="relative cursor-pointer rounded-md bg-transparent font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">Upload a file</span>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-slate-400">PNG, JPG, GIF up to 5MB</p>
</div>

<div className="hidden h-48 w-full items-center justify-center overflow-hidden rounded-lg" id="image-preview">
<img alt="Pet Preview" className="h-full w-full object-cover" id="preview-img" src=""/>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-8">
<div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-slate-900">Contact Information</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="owner-name">Your Name</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:user" width="16"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="owner-name" placeholder="John Doe" required="" type="text"/>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="email">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:mail" width="16"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="phone">Phone Number</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:phone" width="16"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500" htmlFor="location">City / Location</label>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" icon="lucide:map-pin" width="16"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-slate-25 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" id="location" placeholder="San Francisco, CA" required="" type="text"/>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-3 px-1">
<div className="flex h-5 items-center">
<input className="peer h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" id="consent" name="consent" required="" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-slate-700" htmlFor="consent">I confirm that the information provided is accurate.</label>
<p className="text-slate-500">I agree to give this pet up for adoption responsibly and understand the terms of service.</p>
</div>
</div>

<div className="pt-4">
<button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="submit">
<span>Submit for Adoption</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</form>
</main>

<footer className="mt-12 border-t border-slate-200 py-10">
<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
<p className="text-xs text-slate-400">© 2023 Find Your Pet. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
