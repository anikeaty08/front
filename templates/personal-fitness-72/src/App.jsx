import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    function calculateCalories() {
      const age = parseFloat(document.getElementById('age').value) || 0;
      const weight = parseFloat(document.getElementById('weight').value) || 0;
      const height = parseFloat(document.getElementById('height').value) || 0;
      const gender = document.getElementById('gender').value;
      const activity = parseFloat(document.getElementById('activity').value) || 1.2;

      let bmr = 0;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const total = Math.round(bmr * activity);
      document.getElementById('calorieResult').textContent = total.toLocaleString() + ' kcal/day';
    }

    function previewPhoto(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('photoPreview').src = e.target.result;
        document.getElementById('photoPreviewWrap').classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }

    function addDiaryEntry() {
      const title = document.getElementById('entryTitle').value.trim();
      const text = document.getElementById('entryText').value.trim();
      const preview = document.getElementById('photoPreview').src;
      const hasPreview = preview && !preview.endsWith('#');

      if (!title && !text) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'rounded-3xl border border-zinc-200 bg-zinc-50 p-4';

      let photoMarkup = '';
      if (hasPreview) {
        photoMarkup = `
          <div class="mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Diary photo" class="h-48 w-full object-cover" />
          </div>
        `;
      }

      wrapper.innerHTML = `
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="text-sm font-medium text-zinc-900">${title || 'Daily diary entry'}</div>
            <div class="mt-1 text-xs leading-5 text-zinc-500">${text || 'No additional notes added.'}</div>
            ${photoMarkup}
          </div>
          <div class="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">Now</div>
        </div>
      `;

      const list = document.getElementById('diaryEntries');
      list.prepend(wrapper);

      if (hasPreview) {
        const gallery = document.getElementById('gallery');
        const item = document.createElement('div');
        item.className = 'overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100';
        item.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Uploaded progress" class="h-40 w-full object-cover" />`;
        gallery.prepend(item);
      }

      document.getElementById('entryTitle').value = '';
      document.getElementById('entryText').value = '';
      document.getElementById('photoInput').value = '';
      document.getElementById('photoPreview').src = '';
      document.getElementById('photoPreviewWrap').classList.add('hidden');
    }

    calculateCalories();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden">
<div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-emerald-50 via-white to-transparent"></div>
<header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm">
<iconify-icon icon="solar:heart-pulse-2-linear" style={{color: '#18181b'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-zinc-950">MVLG</div>
<div className="text-xs text-zinc-500">personal activity journal</div>
</div>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#dashboard">Dashboard</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#calculator">Calories</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#diary">Diary</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#profile">Profile</a>
</nav>
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:text-zinc-950">
<iconify-icon icon="solar:user-linear" style={{color: '#3f3f46'}} width="18"></iconify-icon>
          My Account
        </button>
</div>
</header>
<main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
<section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
<iconify-icon icon="solar:bolt-linear" style={{color: '#047857'}} width="16"></iconify-icon>
            Build consistency every day
          </div>
<div className="max-w-2xl">
<h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Track training, meals, photos, and personal progress in one place.
            </h1>
<p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
              A personal space for active people who want to calculate calories, keep a daily journal, upload progress photos, and monitor body changes over time.
            </p>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-zinc-500">Daily target</div>
<iconify-icon icon="solar:fire-linear" style={{color: '#f97316'}} width="18"></iconify-icon>
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">2,180</div>
<div className="mt-1 text-xs text-zinc-500">recommended kcal</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-zinc-500">Workouts this week</div>
<iconify-icon icon="solar:dumbbell-large-linear" style={{color: '#18181b'}} width="18"></iconify-icon>
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">5</div>
<div className="mt-1 text-xs text-zinc-500">strong consistency</div>
</div>
<div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-xs font-medium text-zinc-500">Weight change</div>
<iconify-icon icon="solar:graph-up-linear" style={{color: '#16a34a'}} width="18"></iconify-icon>
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">-2.4 kg</div>
<div className="mt-1 text-xs text-zinc-500">last 8 weeks</div>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Today overview</div>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Your active day</h2>
</div>
<div className="rounded-2xl bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">Updated now</div>
</div>
<div className="mt-6 grid gap-4">
<div className="rounded-2xl bg-zinc-50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-white p-2 shadow-sm">
<iconify-icon icon="solar:footsteps-linear" style={{color: '#18181b'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-800">Steps</div>
<div className="text-xs text-zinc-500">movement today</div>
</div>
</div>
<div className="text-sm font-semibold text-zinc-950">8,420</div>
</div>
<div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[70%] rounded-full bg-zinc-900"></div>
</div>
</div>
<div className="rounded-2xl bg-zinc-50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-white p-2 shadow-sm">
<iconify-icon icon="solar:cup-hot-linear" style={{color: '#18181b'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-800">Calories eaten</div>
<div className="text-xs text-zinc-500">from meals</div>
</div>
</div>
<div className="text-sm font-semibold text-zinc-950">1,640</div>
</div>
<div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[62%] rounded-full bg-emerald-600"></div>
</div>
</div>
<div className="rounded-2xl bg-zinc-50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-white p-2 shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" style={{color: '#18181b'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-800">Workout time</div>
<div className="text-xs text-zinc-500">exercise duration</div>
</div>
</div>
<div className="text-sm font-semibold text-zinc-950">58 min</div>
</div>
<div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[78%] rounded-full bg-sky-600"></div>
</div>
</div>
</div>
</div>
</section>
<section className="mt-10 grid gap-6 xl:grid-cols-[1fr_1fr_1fr]" id="dashboard">
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm xl:col-span-2" id="calculator">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Calorie calculator</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Estimate your daily calories</h3>
</div>
<div className="rounded-2xl bg-orange-50 p-3">
<iconify-icon icon="solar:calculator-linear" style={{color: '#ea580c'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Age</span>
<input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white" id="age" placeholder="Enter age" type="number" value="28"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Gender</span>
<select className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:bg-white" id="gender">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</label>
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Weight (kg)</span>
<input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white" id="weight" placeholder="Enter weight" type="number" value="74"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Height (cm)</span>
<input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white" id="height" placeholder="Enter height" type="number" value="178"/>
</label>
<label className="block sm:col-span-2">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Activity level</span>
<select className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:bg-white" id="activity">
<option value="1.2">Low activity</option>
<option value="1.375">Light exercise</option>
<option selected="" value="1.55">Moderate exercise</option>
<option value="1.725">High activity</option>
<option value="1.9">Very intense</option>
</select>
</label>
</div>
<div className="mt-6 flex flex-col gap-4 rounded-3xl bg-zinc-50 p-5 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500">Estimated maintenance calories</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950" id="calorieResult">2,180 kcal/day</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800" onclick="calculateCalories()">
<iconify-icon icon="solar:play-circle-linear" style={{color: '#ffffff'}} width="18"></iconify-icon>
              Calculate
            </button>
</div>
</div>
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Quick profile</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Personal info</h3>
</div>
<div className="rounded-2xl bg-sky-50 p-3">
<iconify-icon icon="solar:user-id-linear" style={{color: '#0284c7'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
<span className="text-sm text-zinc-500">Name</span>
<span className="text-sm font-medium text-zinc-900">Alex Carter</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
<span className="text-sm text-zinc-500">Goal</span>
<span className="text-sm font-medium text-zinc-900">Lean muscle</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
<span className="text-sm text-zinc-500">Current weight</span>
<span className="text-sm font-medium text-zinc-900">74 kg</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
<span className="text-sm text-zinc-500">Start weight</span>
<span className="text-sm font-medium text-zinc-900">76.4 kg</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
<span className="text-sm text-zinc-500">Body fat</span>
<span className="text-sm font-medium text-zinc-900">18%</span>
</div>
</div>
</div>
</section>
<section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm" id="diary">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Diary</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Write your daily log</h3>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700" onclick="addDiaryEntry()">
<iconify-icon icon="solar:add-circle-linear" style={{color: '#ffffff'}} width="18"></iconify-icon>
              Save entry
            </button>
</div>
<div className="mt-6 grid gap-4">
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Entry title</span>
<input className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white" id="entryTitle" placeholder="Upper body workout and meal notes" type="text"/>
</label>
<label className="block">
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">How did today go?</span>
<textarea className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white" id="entryText" placeholder="Write about your exercise, meals, energy level, mood, and recovery." rows="5"></textarea>
</label>
<div>
<span className="mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500">Add progress photo</span>
<label className="flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-zinc-300 bg-zinc-50 px-6 py-8 text-center transition hover:border-zinc-400 hover:bg-white">
<iconify-icon icon="solar:camera-linear" style={{color: '#52525b'}} width="24"></iconify-icon>
<span className="mt-3 text-sm font-medium text-zinc-700">Upload image</span>
<span className="mt-1 text-xs text-zinc-500">JPG, PNG or progress snapshot</span>
<input accept="image/*" className="hidden" id="photoInput" onchange="previewPhoto(event)" type="file"/>
</label>
<div className="mt-4 hidden overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50" id="photoPreviewWrap">
<img alt="Preview" className="h-56 w-full object-cover" id="photoPreview"/>
</div>
</div>
</div>
<div className="mt-8">
<div className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Recent entries</div>
<div className="space-y-3" id="diaryEntries">
<div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-medium text-zinc-900">Leg day and evening walk</div>
<div className="mt-1 text-xs text-zinc-500">Felt strong today. Finished squats, lunges, and 30 minutes of walking.</div>
</div>
<div className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">Today</div>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-6" id="profile">
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Progress photos</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Visual changes</h3>
</div>
<div className="rounded-2xl bg-violet-50 p-3">
<iconify-icon icon="solar:gallery-linear" style={{color: '#7c3aed'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3" id="gallery">
<div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100">
<img alt="Fitness progress" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-100">
<img alt="Fitness progress" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-500">Body changes</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Measurements</h3>
</div>
<div className="rounded-2xl bg-emerald-50 p-3">
<iconify-icon icon="solar:ruler-linear" style={{color: '#059669'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-6 space-y-4">
<div>
<div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
<span>Weight</span>
<span>76.4 → 74 kg</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[74%] rounded-full bg-zinc-900"></div>
</div>
</div>
<div>
<div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
<span>Waist</span>
<span>84 → 80 cm</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[68%] rounded-full bg-emerald-600"></div>
</div>
</div>
<div>
<div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
<span>Chest</span>
<span>98 → 101 cm</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[72%] rounded-full bg-sky-600"></div>
</div>
</div>
<div>
<div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
<span>Arms</span>
<span>33 → 35 cm</span>
</div>
<div className="h-2 overflow-hidden rounded-full bg-zinc-200">
<div className="h-full w-[60%] rounded-full bg-violet-600"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
