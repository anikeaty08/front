import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter uppercase text-black">DRIVESAVERS</div>
</div>
</nav>

<header className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-black mb-8">
<iconify-icon className="text-gray-500" icon="solar:shield-check-linear" width="16"></iconify-icon>
            Secure Data Recovery
        </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6 leading-tight">
            Recover Bitcoins with Data Recovery
        </h1>
<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            DriveSavers can recover bitcoins when wallet data is lost due to device failure, deletion, or corruption. Secure, confidential data recovery from the devices that store your wallet.
        </p>
</header>

<section className="max-w-6xl mx-auto px-6 py-16">
<div className="mb-12 max-w-3xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-4">What “Bitcoin Recovery” Really Means</h2>
<p className="text-base leading-relaxed text-gray-500">
                In most cases, “recover bitcoins” means recovering the walle data or key material needed to restore access. The outcome depends on where your Bitcoin was stored and what still exists on your devices or backups. The four situations below will help you identify which recovery path applies.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-black mb-5">
<iconify-icon icon="solar:buildings-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Custodial Account</h3>
<p className="text-sm leading-relaxed text-gray-500">
                    If your Bitcoin is held on an exchange or app that controls the keys, recovery is usually limited to account access (password reset, identity verification, 2FA, and support). A data recovery service is typically not involved unless a local wallet exists on a device.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-black mb-5">
<iconify-icon icon="solar:wallet-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Self-Custody Wallet</h3>
<p className="text-sm leading-relaxed text-gray-500">
                    If you control the keys, recovery depends on what artifacts still exist—wallet files, app data, backups, exported keys, or remnants in notes, screenshots, or password managers.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-black mb-5">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Device Failure or Unstable Storage</h3>
<p className="text-sm leading-relaxed text-gray-500">
                    If a computer, phone, or drive won’t boot, won’t mount, or is behaving erratically, avoid “fix” attempts. Continued use can change what’s stored and reduce what’s recoverable.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-black mb-5">
<iconify-icon icon="solar:shield-warning-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Scam or Wrong Address</h3>
<p className="text-sm leading-relaxed text-gray-500">
                    If Bitcoin was sent to the wrong address or you were scammed, it usually can’t be reversed. Preserve evidence, report the incident through official channels, and be wary of anyone promising guaranteed returns.
                </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200/60">
<div className="mb-12 max-w-3xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-4">Scenarios DriveSavers Can Recover Bitcoins From</h2>
<p className="text-base leading-relaxed text-gray-500">
                If you’ve lost access to Bitcoins, the problem is usually lost or inaccessible wallet data—not missing coins on the blockchain. Below are common situations where DriveSavers careful, device-based approach can recover the wallet data needed to restore access.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:devices-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Device Failure</h3>
<p className="text-sm text-gray-500 leading-relaxed">Dead laptop or desktop, external drive that won’t mount, failing SSD or hard drive, or a phone that won’t power on.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:trash-bin-minimalistic-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Deleted or Missing Wallet Data</h3>
<p className="text-sm text-gray-500 leading-relaxed">Wallet files or app data accidentally deleted, emptied from the recycle bin/trash, removed during a cleanup, or lost after a restore attempt.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:danger-triangle-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Corrupted Wallet Files or App Data</h3>
<p className="text-sm text-gray-500 leading-relaxed">Wallet software that crashes, won’t open, won’t sync, shows errors, or appears blank after an update or migration.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:lock-password-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Forgotten Wallet Password or Passphrase</h3>
<p className="text-sm text-gray-500 leading-relaxed">You still have the wallet files or app data, but you can’t unlock the wallet due to a forgotten password or passphrase.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Migration or Upgrade Problems</h3>
<p className="text-sm text-gray-500 leading-relaxed">Wallet moved to a new device, and something went wrong—missing files, broken backups, or an old computer/phone that won’t boot.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:document-text-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Lost or Overwritten Notes and Password Manager Entries</h3>
<p className="text-sm text-gray-500 leading-relaxed">Key details saved in notes, screenshots, email drafts, or password managers that were edited, overwritten, or partially removed.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-black shrink-0 mt-1" icon="solar:fire-square-linear" width="24"></iconify-icon>
<div>
<h3 className="text-base font-medium text-black mb-1">Physically Damaged Devices</h3>
<p className="text-sm text-gray-500 leading-relaxed">Water, fire, or impact damage that prevents normal access to the storage where wallet artifacts may still exist.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-12">
<div className="bg-white border border-red-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:siren-linear" width="18"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-black">What to Do Immediately When Bitcoin Access Is Lost</h2>
</div>
<p className="text-base text-gray-500 mb-8 leading-relaxed">
                    If you suspect you need to recover bitcoins, the safest first step is to secure the device or storage where your wallet data may still exist. Small “DIY” actions can overwrite or alter the artifacts needed to restore access.
                </p>
<ul className="space-y-5">
<li className="flex gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Stop Using the Device:</span>
<span className="text-sm text-gray-500">Power it down and do not install apps, updates, or recovery tools.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Do Not Format or Reinstall:</span>
<span className="text-sm text-gray-500">No factory resets, OS reinstalls, “repair disk” utilities, or cleanup apps that can alter what’s stored.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Avoid New Wallet Setups on the Same Device:</span>
<span className="text-sm text-gray-500">Creating a new wallet or syncing large files can overwrite older wallet remnants.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-black shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Preserve What You Have:</span>
<span className="text-sm text-gray-500">Keep the device, charger/cables, memory cards, and any related backups. Save screenshots of error messages and write down what happened right before access was lost.</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-black shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Gather Key Details:</span>
<span className="text-sm text-gray-500">Wallet/app name, approximate dates, device type (computer/phone/external drive), and anything you remember about where the wallet was stored (local files, app data, notes, password manager).</span>
</div>
</li>
<li className="flex gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:shield-warning-linear" width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-black">Be Scam-Aware:</span>
<span className="text-sm text-gray-500">Never share a seed phrase or private keys with anyone claiming “guaranteed recovery,” and avoid unsolicited messages offering to get your coins back.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200/60">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-12">How the Bitcoin Recovery Process Works</h2>
<div className="max-w-3xl border-l border-gray-200 ml-3 pl-8 py-2 relative flex flex-col gap-10">

<div className="relative">
<div className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-black"></div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Intake</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    When you contact DriveSavers, as with all recovery cases, we collect specific information and provide a free overnight shipping label. For bitcoin recovery cases, we also ask questions to help identify where wallet artifacts may exist, the condition of the original storage, what happened, and the wallet type you used (exchange vs self-custody, software vs hardware).
                </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Evaluation</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    When the job arrives at our lab, our engineers evaluate the device using a careful, evidence-preserving approach to avoid unnecessary modifications.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Technical Assessment</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    Once the customer approves the service, we determine what wallet data may still be present (wallet files, app data, databases, logs, notes, password manager remnants) and whether the device requires specialized handling.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Recovery Work</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    When there’s recoverable bitcoin data, we attempt to extract and reconstruct the wallet data needed to restore access. Every case is different, and results depend on what still remains.
                </p>
</div>

<div className="relative">
<div className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<h3 className="text-lg font-medium tracking-tight text-black mb-2">Results Review and Next Steps</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    Upon completion of our recovery efforts, our team will walk you through the results in detail. We’ll explain what wallet data or artifacts were identified, what was successfully recovered, and how those results impact your ability to restore access to your bitcoin. If recovery is possible, we’ll outline your next steps and, when appropriate, help you securely move any accessible bitcoin to a new wallet you create and control provide guidance on safely regaining access. If recovery isn’t feasible, we’ll clearly explain why—in plain, straightforward language—so you understand the outcome.
                </p>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="max-w-3xl mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Security and Confidentiality</h2>
<p className="text-base text-gray-400 leading-relaxed">
                    If you’ve lost access to your wallet, privacy matters as much as the technical work. DriveSavers is structured for sensitive recoveries, with strict handling procedures designed to protect your device and any recovered wallet artifacts throughout the entire process. If recovery provides usable wallet data, we keep the focus on confidential handling and clear next steps, including guidance on securely transferring any accessible bitcoin to a new wallet you create and control.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="border border-gray-800 bg-[#111] rounded-2xl p-6">
<h3 className="text-base font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
                        Controlled Access
                    </h3>
<p className="text-sm text-gray-400 leading-relaxed">Devices and recovered data are handled in accordance with documented security procedures, with access limited to authorized personnel involved in the case.</p>
</div>
<div className="border border-gray-800 bg-[#111] rounded-2xl p-6">
<h3 className="text-base font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:eye-closed-linear" width="18"></iconify-icon>
                        Confidential Handling
                    </h3>
<p className="text-sm text-gray-400 leading-relaxed">Wallet files, key material, and related artifacts are handled with the highest level of sensitivity. Recovery efforts focus on retrieving wallet data and providing guidance on securely transferring any accessible bitcoin to a new wallet you create and controlRecovery efforts are focused on restoring access to Bitcoin.</p>
</div>
<div className="border border-gray-800 bg-[#111] rounded-2xl p-6">
<h3 className="text-base font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:history-linear" width="18"></iconify-icon>
                        Evidence-Preserving
                    </h3>
<p className="text-sm text-gray-400 leading-relaxed">We prioritize recovery methods that minimize changes to original media, helping protect both confidentiality and maximize recoverability.</p>
</div>
<div className="border border-gray-800 bg-[#111] rounded-2xl p-6">
<h3 className="text-base font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:chat-line-linear" width="18"></iconify-icon>
                        Clear Expectations
                    </h3>
<p className="text-sm text-gray-400 leading-relaxed">We stay in communication throughout the process and are upfront about what’s feasible given the device's condition and content.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16 text-center border-b border-gray-200/60">
<div className="max-w-2xl mx-auto">
<div className="flex justify-center mb-6">
<iconify-icon className="text-gray-300" icon="solar:star-circle-linear" width="48"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Reviews and Trust</h2>
<p className="text-base text-gray-500 leading-relaxed">
                Bitcoin recovery demands absolute trust. You’re trusting someone with highly sensitive data, and the wrong choice can permanently compromise your ability to regain access. Look for consistent, verified customer experiences and a recovery process that prioritizes security and careful handling from start to finish.
            </p>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-8 text-center">Frequently Asked Questions About Recovering Bitcoins</h2>
<div className="space-y-1">
<details className="group border-b border-gray-200 py-4" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you recover bitcoins if my computer won’t turn on?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">Yes, in many cases, the goal is to recover the wallet data stored on a damaged or corrupted device. Stop using the computer and have us evaluate it so that the storage can be handled safely.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you recover a deleted Bitcoin wallet file?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">Sometimes. If the file or app data was deleted, recovery depends on whether the underlying data was overwritten. Avoid reinstalling software or saving new data to the same device.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you recover bitcoins without a seed phrase?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">It depends on whether wallet artifacts still exist on a device or backup. If there’s recoverable wallet data, it may be possible to restore access without the seed phrase.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    What if I forgot my wallet password or passphrase?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">If the wallet files still exist, there may be options depending on the wallet type and what artifacts are available. An evaluation will help determine what can be attempted.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you recover bitcoins from a damaged SSD or hard drive?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">If the storage device contains wallet artifacts, recovery may be possible even when the device won’t mount or is failing. Avoid DIY “repair” tools and keep the device powered off until it’s assessed.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you recover bitcoins from a phone with a broken screen?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">There may be a recovery path. The key is preserving the device state and avoiding resets or updates.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    Can you reverse a Bitcoin transaction sent to the wrong address?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">Bitcoin transactions typically can’t be reversed once confirmed. If this happened, focus on preserving records and reporting through official channels.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    I was scammed—can my bitcoins be recovered?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">Scam outcomes vary and are often limited. Preserve evidence (messages, transaction IDs, wallet addresses) and be cautious of anyone promising guaranteed recovery.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    How do you keep my wallet data confidential?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">We use strict handling procedures and limit access to authorized personnel working on your case. Our process is designed to keep recovered wallet artifacts protected throughout the recovery.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    What should I do before attempting DIY recovery?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">DIY attempts are not recommended as they may cause. It cause futher damaged. Stop using the device and avoid actions that write new data to it, such as installs, restores, resets, and repair utilities. Preserving the original state can make a big difference.</p>
</div>
</details>
<details className="group border-b border-gray-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-black hover:text-gray-600 transition-colors text-base select-none">
                    What information should I have ready when I contact you?
                    <span className="transition duration-300 group-open:rotate-180 text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="pt-3 pb-1">
<p className="text-gray-500 text-sm leading-relaxed">Be ready to describe the device type, what happened, the wallet/app name (if known), and any related storage or backups. Even small details can help guide the evaluation.</p>
</div>
</details>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs font-semibold tracking-tighter uppercase text-black">DRIVESAVERS</div>
<div className="text-xs text-gray-400">Secure &amp; Confidential Data Recovery</div>
</div>
</footer>

    </>
  );
}
