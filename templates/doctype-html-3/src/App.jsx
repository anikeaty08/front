import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        // Initialize icons
        window.lucide?.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Password visibility toggles
        document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-toggle-password');
            const input = document.getElementById(targetId);
            if (!input) return;

            const nowVisible = input.getAttribute('type') === 'password';
            input.setAttribute('type', nowVisible ? 'text' : 'password');

            // Toggle icons
            const eye = btn.querySelector('.icon-eye');
            const eyeOff = btn.querySelector('.icon-eye-off');
            if (eye && eyeOff) {
              if (nowVisible) {
                eye.classList.remove('hidden');
                eyeOff.classList.add('hidden');
              } else {
                eye.classList.add('hidden');
                eyeOff.classList.remove('hidden');
              }
            }

            // Update ARIA
            btn.setAttribute('aria-pressed', nowVisible ? 'true' : 'false');
            btn.setAttribute('aria-label', nowVisible ? 'Hide password' : 'Show password');
          });
        });

        // Tab behavior (preview/code) with accessibility
        const tablists = document.querySelectorAll('[role="tablist"]');
        tablists.forEach((tablist) => {
          const tabs = tablist.querySelectorAll('[role="tab"]');
          tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => activateTab(tab));
            tab.addEventListener('keydown', (e) => {
              const key = e.key;
              let newIndex = index;
              if (key === 'ArrowRight') newIndex = (index + 1) % tabs.length;
              if (key === 'ArrowLeft') newIndex = (index - 1 + tabs.length) % tabs.length;
              if (key === 'Home') newIndex = 0;
              if (key === 'End') newIndex = tabs.length - 1;

              if (newIndex !== index && (key === 'ArrowRight' || key === 'ArrowLeft' || key === 'Home' || key === 'End')) {
                e.preventDefault();
                const nextTab = tabs[newIndex];
                nextTab.focus();
                activateTab(nextTab);
              }
            });
          });
        });

        function activateTab(tab) {
          const card = tab.getAttribute('data-card');
          const tabType = tab.getAttribute('data-tab'); // 'preview' or 'code'
          if (!card || !tabType) return;

          // Update tabs UI within the same tablist
          const currentList = tab.closest('[role="tablist"]');
          currentList?.querySelectorAll('[role="tab"]').forEach((t) => {
            const isSelected = t === tab;
            t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
            t.setAttribute('tabindex', isSelected ? '0' : '-1');
            // Style toggling
            t.classList.toggle('border-teal-600', isSelected);
            t.classList.toggle('text-slate-900', isSelected);
            t.classList.toggle('text-slate-500', !isSelected);
            t.classList.toggle('border-transparent', !isSelected);
          });

          // Update panels
          const targetKey = `${card}:${tabType}`;
          document.querySelectorAll(`[data-card-panel^="${card}:"]`).forEach((panel) => {
            const isTarget = panel.getAttribute('data-card-panel') === targetKey;
            panel.classList.toggle('hidden', !isTarget);
            panel.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
            if (isTarget) {
              // Re-run icons within newly visible panel
              window.lucide?.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<section className="rounded-lg border border-slate-200 bg-white shadow-sm">

<div className="px-5 py-3 border-b border-slate-200">
<div aria-label="Card 1 tabs" className="flex items-center gap-6" role="tablist">
<button aria-controls="panel-1-preview" aria-selected="true" className="tab-btn pb-2 text-sm font-medium border-b-2 border-teal-600 text-slate-900" data-card="1" data-tab="preview" id="tab-1-preview" role="tab" tabindex="0">
            Settings — Account details
          </button>
<button aria-controls="panel-1-code" aria-selected="false" className="tab-btn pb-2 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700" data-card="1" data-tab="code" id="tab-1-code" role="tab" tabindex="-1">
            Code (TS)
          </button>
</div>
</div>

<div aria-hidden="false" aria-labelledby="tab-1-preview" className="px-5 py-4" data-card-panel="1:preview" id="panel-1-preview" role="tabpanel" tabindex="0">
<h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
<p className="mt-2 text-sm text-slate-600">Manage your personal details, workspace governance and notifications.</p>
<div className="mt-6 border-b border-slate-200">
<nav aria-label="Tabs" className="-mb-px flex gap-6">
<a aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600" href="#">Account details</a>
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Workspaces</a>
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Billing</a>
</nav>
</div>

<section className="mt-6">
<h2 className="text-sm font-medium text-slate-900">Email</h2>
<p className="mt-1 text-sm text-slate-600">Update your email address associated with this workspace.</p>
<div className="mt-4 max-w-xl">
<label className="text-xs font-medium text-slate-600" htmlFor="email">Update email address</label>
<input className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="mt-4">
<button className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md" type="button">Update email</button>
</div>
</section>
<div className="mt-6 border-t border-slate-200"></div>

<section className="mt-6">
<h2 className="text-sm font-medium text-slate-900">Password</h2>
<p className="mt-1 text-sm text-slate-600">Update your password associated with this workspace.</p>
<div className="mt-4 max-w-xl">
<label className="text-xs font-medium text-slate-600" htmlFor="current-password">Current password</label>
<div className="relative mt-2">
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" id="current-password" placeholder="password" type="password"/>
<button aria-label="Show password" aria-pressed="false" className="absolute inset-y-0 right-1.5 my-auto inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100" data-toggle-password="current-password" type="button">
<i className="icon-eye h-4 w-4 hidden" data-lucide="eye"></i>
<i className="icon-eye-off h-4 w-4" data-lucide="eye-off"></i>
</button>
</div>
</div>
<div className="mt-4 max-w-xl">
<label className="text-xs font-medium text-slate-600" htmlFor="new-password">New password</label>
<div className="relative mt-2">
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" id="new-password" placeholder="password" type="password"/>
<button aria-label="Show password" aria-pressed="false" className="absolute inset-y-0 right-1.5 my-auto inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100" data-toggle-password="new-password" type="button">
<i className="icon-eye h-4 w-4 hidden" data-lucide="eye"></i>
<i className="icon-eye-off h-4 w-4" data-lucide="eye-off"></i>
</button>
</div>
</div>
<div className="mt-4">
<button className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md" type="button">Update password</button>
</div>
</section>
</div>

<div aria-hidden="true" aria-labelledby="tab-1-code" className="hidden p-4" data-card-panel="1:code" id="panel-1-code" role="tabpanel" tabindex="0">
<pre className="rounded-lg border border-slate-200 bg-slate-50 p-4 overflow-x-auto text-xs text-slate-700"><code>
// SettingsAccountDetailsCard.tsx
import React, { useEffect } from "react";

declare global {
  interface Window { lucide?: any }
}

export function SettingsAccountDetailsCard(): JSX.Element {
  useEffect(() =&gt; {
    window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  }, []);

  return (
    &lt;section className="rounded-lg border border-slate-200 bg-white shadow-sm"&gt;
      &lt;div className="px-5 py-4"&gt;
        &lt;h1 className="text-2xl font-semibold tracking-tight"&gt;Settings&lt;/h1&gt;
        &lt;p className="mt-2 text-sm text-slate-600"&gt;
          Manage your personal details, workspace governance and notifications.
        &lt;/p&gt;

        &lt;div className="mt-6 border-b border-slate-200"&gt;
          &lt;nav className="-mb-px flex gap-6" aria-label="Tabs"&gt;
            &lt;a href="#" aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600"&gt;Account details&lt;/a&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Workspaces&lt;/a&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Billing&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;

        &lt;section className="mt-6"&gt;
          &lt;h2 className="text-sm font-medium text-slate-900"&gt;Email&lt;/h2&gt;
          &lt;p className="mt-1 text-sm text-slate-600"&gt;Update your email address associated with this workspace.&lt;/p&gt;

          &lt;div className="mt-4 max-w-xl"&gt;
            &lt;label htmlFor="email" className="text-xs font-medium text-slate-600"&gt;Update email address&lt;/label&gt;
            &lt;input id="email" type="email" placeholder="john@company.com"
                   className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" /&gt;
          &lt;/div&gt;

          &lt;div className="mt-4"&gt;
            &lt;button type="button" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md"&gt;
              Update email
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/section&gt;

        &lt;div className="mt-6 border-t border-slate-200"&gt;&lt;/div&gt;

        &lt;section className="mt-6"&gt;
          &lt;h2 className="text-sm font-medium text-slate-900"&gt;Password&lt;/h2&gt;
          &lt;p className="mt-1 text-sm text-slate-600"&gt;Update your password associated with this workspace.&lt;/p&gt;

          &lt;div className="mt-4 max-w-xl"&gt;
            &lt;label htmlFor="current-password" className="text-xs font-medium text-slate-600"&gt;Current password&lt;/label&gt;
            &lt;div className="relative mt-2"&gt;
              &lt;input id="current-password" type="password" placeholder="password"
                     className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" /&gt;
              &lt;span className="pointer-events-none absolute inset-y-0 right-2 flex items-center"&gt;
                &lt;i data-lucide="eye-off" className="h-4 w-4 text-slate-500"&gt;&lt;/i&gt;
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="mt-4 max-w-xl"&gt;
            &lt;label htmlFor="new-password" className="text-xs font-medium text-slate-600"&gt;New password&lt;/label&gt;
            &lt;div className="relative mt-2"&gt;
              &lt;input id="new-password" type="password" placeholder="password"
                     className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-400" /&gt;
              &lt;span className="pointer-events-none absolute inset-y-0 right-2 flex items-center"&gt;
                &lt;i data-lucide="eye-off" className="h-4 w-4 text-slate-500"&gt;&lt;/i&gt;
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="mt-4"&gt;
            &lt;button type="button" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md"&gt;
              Update password
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
        </code></pre>
</div>
</section>

<section className="mt-10 rounded-lg border border-slate-200 bg-white shadow-sm">

<div className="px-5 py-3 border-b border-slate-200">
<div aria-label="Card 2 tabs" className="flex items-center gap-6" role="tablist">
<button aria-controls="panel-2-preview" aria-selected="true" className="tab-btn pb-2 text-sm font-medium border-b-2 border-teal-600 text-slate-900" data-card="2" data-tab="preview" id="tab-2-preview" role="tab" tabindex="0">
            General — Workspaces
          </button>
<button aria-controls="panel-2-code" aria-selected="false" className="tab-btn pb-2 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700" data-card="2" data-tab="code" id="tab-2-code" role="tab" tabindex="-1">
            Code (TS)
          </button>
</div>
</div>
<div aria-hidden="false" aria-labelledby="tab-2-preview" className="px-5 py-4" data-card-panel="2:preview" id="panel-2-preview" role="tabpanel" tabindex="0">
<h1 className="text-2xl font-semibold tracking-tight">General</h1>
<p className="mt-2 text-sm text-slate-600">Manage your personal details, workspace governance and notifications.</p>
<div className="mt-6 border-b border-slate-200">
<nav aria-label="Tabs" className="-mb-px flex gap-6">
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Account details</a>
<a aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600" href="#">Workspaces</a>
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Details</a>
</nav>
</div>
<section className="mt-6">
<h2 className="text-sm font-medium text-slate-900">Workspace settings</h2>
<p className="mt-1 text-sm text-slate-600">Optimize your workspace with customizable settings and advanced features</p>
<div className="mt-4 space-y-4">
<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-3 flex items-center justify-between border-b border-slate-200">
<span className="text-sm font-medium text-slate-900">Enable beta analytics features</span>
<div className="flex items-center">
<input className="sr-only peer" id="toggle-beta-a" type="checkbox"/>
<label className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100" htmlFor="toggle-beta-a">
<span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span>
<span className="sr-only">Enable beta analytics features</span>
</label>
</div>
</div>
<div className="px-5 py-4">
<p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  <a className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 rounded" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</p>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-3 flex items-center justify-between border-b border-slate-200">
<span className="text-sm font-medium text-slate-900">Enable test mode</span>
<div className="flex items-center">
<input className="sr-only peer" id="toggle-test-a" type="checkbox"/>
<label className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100" htmlFor="toggle-test-a">
<span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span>
<span className="sr-only">Enable test mode</span>
</label>
</div>
</div>
<div className="px-5 py-4">
<p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
                  <a className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100 rounded" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</p>
</div>
</div>
</div>
<div className="mt-6 border-t border-slate-200">
<div className="px-5 py-4 flex items-center justify-end gap-3">
<button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-sm font-medium rounded-md" type="button">Cancel</button>
<button className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md" type="button">Save settings</button>
</div>
</div>
</section>
</div>
<div aria-hidden="true" aria-labelledby="tab-2-code" className="hidden p-4" data-card-panel="2:code" id="panel-2-code" role="tabpanel" tabindex="0">
<pre className="rounded-lg border border-slate-200 bg-slate-50 p-4 overflow-x-auto text-xs text-slate-700"><code>
// GeneralWorkspacesCard.tsx
import React, { useEffect } from "react";

declare global {
  interface Window { lucide?: any }
}

export const GeneralWorkspacesCard: React.FC = () =&gt; {
  useEffect(() =&gt; {
    window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  }, []);

  return (
    &lt;section className="rounded-lg border border-slate-200 bg-white shadow-sm"&gt;
      &lt;div className="px-5 py-4"&gt;
        &lt;h1 className="text-2xl font-semibold tracking-tight"&gt;General&lt;/h1&gt;
        &lt;p className="mt-2 text-sm text-slate-600"&gt;Manage your personal details, workspace governance and notifications.&lt;/p&gt;

        &lt;div className="mt-6 border-b border-slate-200"&gt;
          &lt;nav className="-mb-px flex gap-6" aria-label="Tabs"&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Account details&lt;/a&gt;
            &lt;a href="#" aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600"&gt;Workspaces&lt;/a&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Details&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;

        &lt;section className="mt-6"&gt;
          &lt;h2 className="text-sm font-medium text-slate-900"&gt;Workspace settings&lt;/h2&gt;
          &lt;p className="mt-1 text-sm text-slate-600"&gt;Optimize your workspace with customizable settings and advanced features&lt;/p&gt;

          &lt;div className="mt-4 space-y-4"&gt;
            &lt;div className="rounded-lg border border-slate-200 bg-white"&gt;
              &lt;div className="px-5 py-3 flex items-center justify-between border-b border-slate-200"&gt;
                &lt;span className="text-sm font-medium text-slate-900"&gt;Enable beta analytics features&lt;/span&gt;
                &lt;div className="flex items-center"&gt;
                  &lt;input id="toggle-beta-a" type="checkbox" className="sr-only peer" /&gt;
                  &lt;label htmlFor="toggle-beta-a" className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"&gt;
                    &lt;span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"&gt;&lt;/span&gt;
                    &lt;span className="sr-only"&gt;Enable beta analytics features&lt;/span&gt;
                  &lt;/label&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="px-5 py-4"&gt;
                &lt;p className="text-sm text-slate-600"&gt;
                  Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  &lt;a href="#" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium rounded"&gt;Learn more&lt;i data-lucide="external-link" className="ml-1 h-3.5 w-3.5"&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="rounded-lg border border-slate-200 bg-white"&gt;
              &lt;div className="px-5 py-3 flex items-center justify-between border-b border-slate-200"&gt;
                &lt;span className="text-sm font-medium text-slate-900"&gt;Enable test mode&lt;/span&gt;
                &lt;div className="flex items-center"&gt;
                  &lt;input id="toggle-test-a" type="checkbox" className="sr-only peer" /&gt;
                  &lt;label htmlFor="toggle-test-a" className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-100"&gt;
                    &lt;span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"&gt;&lt;/span&gt;
                    &lt;span className="sr-only"&gt;Enable test mode&lt;/span&gt;
                  &lt;/label&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="px-5 py-4"&gt;
                &lt;p className="text-sm text-slate-600"&gt;
                  Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod.
                  &lt;a href="#" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium rounded"&gt;Learn more&lt;i data-lucide="external-link" className="ml-1 h-3.5 w-3.5"&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="mt-6 border-t border-slate-200"&gt;
            &lt;div className="px-5 py-4 flex items-center justify-end gap-3"&gt;
              &lt;button type="button" className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-sm font-medium rounded-md"&gt;Cancel&lt;/button&gt;
              &lt;button type="button" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md"&gt;Save settings&lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};
        </code></pre>
</div>
</section>

<section className="mt-10 rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="px-5 py-3 border-b border-slate-200">
<div aria-label="Card 3 tabs" className="flex items-center gap-6" role="tablist">
<button aria-controls="panel-3-preview" aria-selected="true" className="tab-btn pb-2 text-sm font-medium border-b-2 border-teal-600 text-slate-900" data-card="3" data-tab="preview" id="tab-3-preview" role="tab" tabindex="0">
            General — Add-Ons
          </button>
<button aria-controls="panel-3-code" aria-selected="false" className="tab-btn pb-2 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700" data-card="3" data-tab="code" id="tab-3-code" role="tab" tabindex="-1">
            Code (TS)
          </button>
</div>
</div>
<div aria-hidden="false" aria-labelledby="tab-3-preview" className="px-5 py-4" data-card-panel="3:preview" id="panel-3-preview" role="tabpanel" tabindex="0">
<h1 className="text-2xl font-semibold tracking-tight">General</h1>
<p className="mt-2 text-sm text-slate-600">Manage your personal details, workspace governance and notifications.</p>
<div className="mt-6 border-b border-slate-200">
<nav aria-label="Tabs" className="-mb-px flex gap-6">
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Account details</a>
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Users</a>
<a aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600" href="#">Add-Ons</a>
</nav>
</div>
<section className="mt-6">
<h2 className="text-sm font-medium text-slate-900">Upgrade options</h2>
<p className="mt-1 text-sm text-slate-600">Do more with your data and unlock new insights with our advanced features and add-ons.</p>
<div className="mt-4 space-y-4">

<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-4">
<div className="text-xs text-slate-500">$25/month</div>
<div className="mt-1 text-sm font-medium text-slate-900">Query Caching</div>
<p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
<label className="inline-flex items-center gap-3">
<input className="sr-only peer" id="addon-cache-a" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"><span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span></span>
<span className="text-sm text-slate-700">Activate</span>
</label>
<a className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-4">
<div className="text-xs text-slate-500">$100/month</div>
<div className="mt-1 text-sm font-medium text-slate-900">Advanced Bot Protection</div>
<p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
<label className="inline-flex items-center gap-3">
<input className="sr-only peer" id="addon-bot-a" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"><span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span></span>
<span className="text-sm text-slate-700">Activate</span>
</label>
<a className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-4">
<div className="text-xs text-slate-500">$90/month</div>
<div className="mt-1 text-sm font-medium text-slate-900">Observability Analytics</div>
<p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
</div>
<div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
<label className="inline-flex items-center gap-3">
<input className="sr-only peer" id="addon-observe-a" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"><span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span></span>
<span className="text-sm text-slate-700">Activate</span>
</label>
<a className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</div>
</div>
</div>
<div className="mt-6 border-t border-slate-200">
<div className="px-5 py-4 flex items-center justify-end">
<button className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md" type="button">Upgrade plan</button>
</div>
</div>
</section>
</div>
<div aria-hidden="true" aria-labelledby="tab-3-code" className="hidden p-4" data-card-panel="3:code" id="panel-3-code" role="tabpanel" tabindex="0">
<pre className="rounded-lg border border-slate-200 bg-slate-50 p-4 overflow-x-auto text-xs text-slate-700"><code>
// GeneralAddOnsCard.tsx
import React, { useEffect } from "react";

declare global {
  interface Window { lucide?: any }
}

export function GeneralAddOnsCard(): JSX.Element {
  useEffect(() =&gt; {
    window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  }, []);

  return (
    &lt;section className="rounded-lg border border-slate-200 bg-white shadow-sm"&gt;
      &lt;div className="px-5 py-4"&gt;
        &lt;h1 className="text-2xl font-semibold tracking-tight"&gt;General&lt;/h1&gt;
        &lt;p className="mt-2 text-sm text-slate-600"&gt;Manage your personal details, workspace governance and notifications.&lt;/p&gt;

        &lt;div className="mt-6 border-b border-slate-200"&gt;
          &lt;nav className="-mb-px flex gap-6" aria-label="Tabs"&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Account details&lt;/a&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Users&lt;/a&gt;
            &lt;a href="#" aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600"&gt;Add-Ons&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;

        &lt;section className="mt-6"&gt;
          &lt;h2 className="text-sm font-medium text-slate-900"&gt;Upgrade options&lt;/h2&gt;
          &lt;p className="mt-1 text-sm text-slate-600"&gt;Do more with your data and unlock new insights with our advanced features and add-ons.&lt;/p&gt;

          &lt;div className="mt-4 space-y-4"&gt;
            {[
              { price: "$25/month", title: "Query Caching" },
              { price: "$100/month", title: "Advanced Bot Protection" },
              { price: "$90/month", title: "Observability Analytics" },
            ].map((x, i) =&gt; (
              &lt;div key={i} className="rounded-lg border border-slate-200 bg-white"&gt;
                &lt;div className="px-5 py-4"&gt;
                  &lt;div className="text-xs text-slate-500"&gt;{x.price}&lt;/div&gt;
                  &lt;div className="mt-1 text-sm font-medium text-slate-900"&gt;{x.title}&lt;/div&gt;
                  &lt;p className="mt-2 text-sm text-slate-600"&gt;
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  &lt;/p&gt;
                &lt;/div&gt;
                &lt;div className="flex items-center justify-between border-t border-slate-200 px-5 py-3"&gt;
                  &lt;label className="inline-flex items-center gap-3"&gt;
                    &lt;input type="checkbox" className="sr-only peer" /&gt;
                    &lt;span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"&gt;
                      &lt;span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"&gt;&lt;/span&gt;
                    &lt;/span&gt;
                    &lt;span className="text-sm text-slate-700"&gt;Activate&lt;/span&gt;
                  &lt;/label&gt;
                  &lt;a href="#" className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800"&gt;
                    Learn more&lt;i data-lucide="external-link" className="ml-1 h-3.5 w-3.5"&gt;&lt;/i&gt;
                  &lt;/a&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            ))}

          &lt;/div&gt;

          &lt;div className="mt-6 border-t border-slate-200"&gt;
            &lt;div className="px-5 py-4 flex items-center justify-end"&gt;
              &lt;button type="button" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md"&gt;Upgrade plan&lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
        </code></pre>
</div>
</section>

<section className="mt-10 rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="px-5 py-3 border-b border-slate-200">
<div aria-label="Card 4 tabs" className="flex items-center gap-6" role="tablist">
<button aria-controls="panel-4-preview" aria-selected="true" className="tab-btn pb-2 text-sm font-medium border-b-2 border-teal-600 text-slate-900" data-card="4" data-tab="preview" id="tab-4-preview" role="tab" tabindex="0">
            General — Workspaces (alt)
          </button>
<button aria-controls="panel-4-code" aria-selected="false" className="tab-btn pb-2 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700" data-card="4" data-tab="code" id="tab-4-code" role="tab" tabindex="-1">
            Code (TS)
          </button>
</div>
</div>
<div aria-hidden="false" aria-labelledby="tab-4-preview" className="px-5 py-4" data-card-panel="4:preview" id="panel-4-preview" role="tabpanel" tabindex="0">
<h1 className="text-2xl font-semibold tracking-tight">General</h1>
<p className="mt-2 text-sm text-slate-600">Manage your personal details, workspace governance and notifications.</p>
<div className="mt-6 border-b border-slate-200">
<nav aria-label="Tabs" className="-mb-px flex gap-6">
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Account details</a>
<a aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600" href="#">Workspaces</a>
<a className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700" href="#">Details</a>
</nav>
</div>
<section className="mt-6">
<h2 className="text-sm font-medium text-slate-900">Workspace settings</h2>
<p className="mt-1 text-sm text-slate-600">Optimize your workspace with customizable settings and advanced features</p>
<div className="mt-4 space-y-4">
<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-3 text-sm font-medium text-slate-900 border-b border-slate-200">Enable beta analytics features</div>
<div className="px-5 py-4 flex items-start justify-between gap-4">
<p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  <a className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium ml-1" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</p>
<label className="mt-1 inline-flex items-center gap-3">
<input className="sr-only peer" id="toggle-beta-b" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600">
<span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span>
</span>
</label>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white">
<div className="px-5 py-3 text-sm font-medium text-slate-900 border-b border-slate-200">Enable test mode</div>
<div className="px-5 py-4 flex items-start justify-between gap-4">
<p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod.
                  <a className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium ml-1" href="#">Learn more<i className="ml-1 h-3.5 w-3.5" data-lucide="external-link"></i></a>
</p>
<label className="mt-1 inline-flex items-center gap-3">
<input className="sr-only peer" id="toggle-test-b" type="checkbox"/>
<span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600">
<span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"></span>
</span>
</label>
</div>
</div>
</div>
<div className="mt-6 border-t border-slate-200">
<div className="px-5 py-4 flex items-center justify-end gap-3">
<button className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-sm font-medium rounded-md" type="button">Cancel</button>
<button className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md" type="button">Save settings</button>
</div>
</div>
</section>
</div>
<div aria-hidden="true" aria-labelledby="tab-4-code" className="hidden p-4" data-card-panel="4:code" id="panel-4-code" role="tabpanel" tabindex="0">
<pre className="rounded-lg border border-slate-200 bg-slate-50 p-4 overflow-x-auto text-xs text-slate-700"><code>
// GeneralWorkspacesAltCard.tsx
import React, { useEffect } from "react";

declare global {
  interface Window { lucide?: any }
}

export function GeneralWorkspacesAltCard(): JSX.Element {
  useEffect(() =&gt; {
    window.lucide?.createIcons({ attrs: { "stroke-width": 1.5 } });
  }, []);

  return (
    &lt;section className="rounded-lg border border-slate-200 bg-white shadow-sm"&gt;
      &lt;div className="px-5 py-4"&gt;
        &lt;h1 className="text-2xl font-semibold tracking-tight"&gt;General&lt;/h1&gt;
        &lt;p className="mt-2 text-sm text-slate-600"&gt;Manage your personal details, workspace governance and notifications.&lt;/p&gt;

        &lt;div className="mt-6 border-b border-slate-200"&gt;
          &lt;nav className="-mb-px flex gap-6" aria-label="Tabs"&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Account details&lt;/a&gt;
            &lt;a href="#" aria-current="page" className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-teal-600"&gt;Workspaces&lt;/a&gt;
            &lt;a href="#" className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-700"&gt;Details&lt;/a&gt;
          &lt;/nav&gt;
        &lt;/div&gt;

        &lt;section className="mt-6"&gt;
          &lt;h2 className="text-sm font-medium text-slate-900"&gt;Workspace settings&lt;/h2&gt;
          &lt;p className="mt-1 text-sm text-slate-600"&gt;Optimize your workspace with customizable settings and advanced features&lt;/p&gt;

          &lt;div className="mt-4 space-y-4"&gt;
            &lt;div className="rounded-lg border border-slate-200 bg-white"&gt;
              &lt;div className="px-5 py-3 text-sm font-medium text-slate-900 border-b border-slate-200"&gt;Enable beta analytics features&lt;/div&gt;
              &lt;div className="px-5 py-4 flex items-start justify-between gap-4"&gt;
                &lt;p className="text-sm text-slate-600"&gt;
                  Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                  &lt;a href="#" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium ml-1"&gt;Learn more&lt;i data-lucide="external-link" className="ml-1 h-3.5 w-3.5"&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/p&gt;
                &lt;label className="mt-1 inline-flex items-center gap-3"&gt;
                  &lt;input id="toggle-beta-b" type="checkbox" className="sr-only peer" /&gt;
                  &lt;span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"&gt;
                    &lt;span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"&gt;&lt;/span&gt;
                  &lt;/span&gt;
                &lt;/label&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="rounded-lg border border-slate-200 bg-white"&gt;
              &lt;div className="px-5 py-3 text-sm font-medium text-slate-900 border-b border-slate-200"&gt;Enable test mode&lt;/div&gt;
              &lt;div className="px-5 py-4 flex items-start justify-between gap-4"&gt;
                &lt;p className="text-sm text-slate-600"&gt;
                  Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod.
                  &lt;a href="#" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-medium ml-1"&gt;Learn more&lt;i data-lucide="external-link" className="ml-1 h-3.5 w-3.5"&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/p&gt;
                &lt;label className="mt-1 inline-flex items-center gap-3"&gt;
                  &lt;input id="toggle-test-b" type="checkbox" className="sr-only peer" /&gt;
                  &lt;span className="relative inline-flex h-5 w-10 cursor-pointer items-center rounded-full bg-slate-200 transition-colors peer-checked:bg-teal-600"&gt;
                    &lt;span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transform transition-transform peer-checked:translate-x-5"&gt;&lt;/span&gt;
                  &lt;/span&gt;
                &lt;/label&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className="mt-6 border-t border-slate-200"&gt;
            &lt;div className="px-5 py-4 flex items-center justify-end gap-3"&gt;
              &lt;button type="button" className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 text-sm font-medium rounded-md"&gt;Cancel&lt;/button&gt;
              &lt;button type="button" className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 text-sm font-medium rounded-md"&gt;Save settings&lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/section&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
}
        </code></pre>
</div>
</section>



</main>

    </>
  );
}
