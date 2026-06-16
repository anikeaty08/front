import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const loginForm = document.getElementById('loginForm');
        const loginView = document.getElementById('login-view');
        const splashView = document.getElementById('splash-view');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Animate out Login View
            loginView.classList.add('fade-out');
            
            // Add a small loading state to button (optional visual feedback)
            const btn = loginForm.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" class="text-xl"></iconify-icon>';

            setTimeout(() => {
                // 2. Hide Login completely
                loginView.classList.add('hidden');
                
                // 3. Prepare Splash View
                splashView.classList.remove('hidden');
                splashView.classList.add('flex');
                
                // 4. Trigger Fade In
                requestAnimationFrame(() => {
                    splashView.classList.remove('opacity-0');
                    splashView.classList.add('fade-in');
                });
                
            }, 600); // Wait for transition
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex justify-end items-center px-6 py-3 space-x-5 text-gray-400 select-none z-50 absolute top-0 right-0 w-full">
<iconify-icon className="text-xl hover:text-gray-600 cursor-pointer transition-colors" icon="solar:question-circle-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-gray-600 cursor-pointer transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<div className="h-4 w-[1px] bg-gray-300 mx-2"></div>
<iconify-icon className="text-xl hover:text-gray-600 cursor-pointer transition-colors" icon="solar:minimize-linear"></iconify-icon>
<iconify-icon className="text-lg hover:text-gray-600 cursor-pointer transition-colors" icon="solar:maximize-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-gray-600 cursor-pointer transition-colors" icon="solar:close-circle-linear"></iconify-icon>
</header>

<main className="flex-1 flex items-center justify-center w-full h-full relative">

<div className="view-transition flex w-full max-w-6xl items-center justify-between px-20 opacity-100 scale-100" id="login-view">

<div className="flex flex-col items-center max-w-lg text-center space-y-8">

<div className="relative w-80 h-64">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-3xl transform rotate-3 scale-95 opacity-50 shadow-lg border border-white"></div>
<div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-indigo-50/50 overflow-hidden relative group">

<div className="absolute top-5 left-5 right-5 h-2 bg-gray-100 rounded-full w-3/4"></div>
<div className="absolute top-10 left-5 h-2 bg-gray-50 rounded-full w-1/2"></div>

<div className="absolute bottom-10 w-[85%] h-14 bg-gradient-to-r from-blue-500 to-[#5D5FEF] rounded-xl shadow-lg flex items-center px-4 justify-between transform transition-transform group-hover:scale-105 duration-500">
<div className="h-1.5 w-1/3 bg-white/30 rounded-full"></div>
<div className="bg-white/20 p-1.5 rounded-lg flex text-white">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
</div>

<div className="absolute -top-3 -right-3 bg-white p-3 rounded-xl shadow-lg border border-indigo-50 text-[#5D5FEF]">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>

<div className="absolute -bottom-5 -left-2 text-[#5D5FEF] transform -rotate-12 opacity-80">
<iconify-icon icon="solar:plain-2-linear" width="56"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-3 mt-4">
<div className="flex justify-center">
<span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-1 rounded tracking-wide">AI助手</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">全过程伴随你设计</h1>
<p className="text-lg text-gray-500 font-light leading-relaxed">
                        基于规范文件进行规范问答<br/>
                        对话式驱动工具，快速串联工作流
                    </p>
</div>

<div className="flex space-x-2 pt-4">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-6 h-2 rounded-full bg-[#5D5FEF]"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-12 w-[480px] flex flex-col items-center border border-white relative z-10">

<div className="mb-6 flex items-center justify-center">
<div className="grid grid-cols-2 gap-1.5">
<div className="w-3.5 h-3.5 bg-[#5D5FEF] rounded-[2px] opacity-60"></div>
<div className="w-3.5 h-3.5 bg-[#5D5FEF] rounded-[2px]"></div>
<div className="w-3.5 h-3.5 bg-[#5D5FEF] rounded-[2px]"></div>
<div className="w-3.5 h-3.5 bg-[#5D5FEF] rounded-[2px] opacity-60"></div>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">广联达数维方案设计</h2>
<p className="text-base text-gray-400 font-light mb-10">登录个人账号</p>

<div className="flex space-x-10 mb-8 border-b border-gray-100 w-full justify-center">
<button className="pb-3 text-lg text-gray-400 hover:text-gray-600 transition-colors">短信登录</button>
<button className="pb-3 text-lg text-[#5D5FEF] font-medium border-b-2 border-[#5D5FEF]">密码登录</button>
</div>

<form className="w-full space-y-5" id="loginForm">
<div className="space-y-1 relative group">
<input className="custom-input w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-base text-gray-700 placeholder:text-gray-300 transition-all bg-gray-50/30 focus:bg-white" required="" type="text" value="crceg-admin"/>
<iconify-icon className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#5D5FEF] transition-colors" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="space-y-1 relative group">
<input className="custom-input w-full px-4 py-3.5 pl-11 rounded-xl border border-gray-200 text-base text-gray-700 placeholder:text-gray-300 transition-all bg-gray-50/30 focus:bg-white" required="" type="password" value="password"/>
<iconify-icon className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#5D5FEF] transition-colors" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
<button className="w-full bg-[#5D5FEF] hover:bg-[#4d4fcb] text-white text-lg font-medium py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
<span>登录</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>

<div className="flex w-full justify-between mt-5 text-sm">
<a className="text-gray-400 hover:text-gray-600" href="#">忘记密码?</a>
<a className="text-[#5D5FEF] hover:text-[#4d4fcb] font-medium" href="#">立即注册</a>
</div>
<div className="mt-10 mb-6 w-full border-t border-gray-100 pt-6 text-center">
<a className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium transition-colors text-sm" href="#">
                        前往登录企业账号 <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="text-xs text-gray-300 mt-auto flex flex-wrap justify-center gap-1">
<span>登录代表已阅读同意</span>
<a className="text-gray-500 hover:text-[#5D5FEF]" href="#">《用户协议》</a>
<span className="text-gray-300">&amp;</span>
<a className="text-gray-500 hover:text-[#5D5FEF]" href="#">《隐私政策》</a>
</div>
</div>
</div>

<div className="hidden absolute inset-0 z-50 flex-col items-center justify-center bg-[#F2F3F5] opacity-0 transition-opacity duration-700 overflow-hidden" id="splash-view">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-200/20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-200/20 blur-[100px] rounded-full"></div>
</div>
<div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-8">

<div className="flex items-center gap-16 md:gap-24 mb-20 animate-fade-in-up">

<div className="flex flex-col items-center gap-5 group cursor-default">
<div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-indigo-100 ring-1 ring-white/50 transition-transform duration-500 group-hover:scale-105">
<div className="grid grid-cols-2 gap-2 p-4">
<div className="h-4 w-4 rounded-[3px] bg-[#5D5FEF] opacity-90"></div>
<div className="h-4 w-4 rounded-[3px] bg-[#5D5FEF]"></div>
<div className="h-4 w-4 rounded-[3px] bg-[#5D5FEF]"></div>
<div className="h-4 w-4 rounded-[3px] bg-[#5D5FEF] opacity-60"></div>
</div>
</div>
<div className="text-center space-y-0.5">
<div className="text-lg font-semibold text-gray-900 tracking-tight">广联达</div>
<div className="text-[11px] font-bold tracking-[0.2em] text-[#5D5FEF]">CONCETTO</div>
</div>
</div>

<div className="flex flex-col justify-center h-24 pb-6">
<div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
</div>

<div className="flex flex-col items-center gap-5 group cursor-default">
<div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-[#0055AA] shadow-2xl shadow-blue-900/10 ring-1 ring-blue-700/10 transition-transform duration-500 group-hover:scale-105 overflow-hidden">

<iconify-icon className="text-white/90 text-4xl drop-shadow-lg relative z-10" icon="solar:buildings-2-bold"></iconify-icon>
<div className="absolute -bottom-4 -right-4 text-white/10 text-6xl">
<iconify-icon icon="solar:buildings-2-bold"></iconify-icon>
</div>
</div>
<div className="text-center space-y-0.5">
<div className="text-lg font-semibold text-gray-900 tracking-tight">中铁建工集团</div>
<div className="text-[11px] font-bold tracking-[0.15em] text-gray-400">CRCEG</div>
</div>
</div>
</div>

<div className="text-center space-y-6 max-w-4xl mx-auto">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
<span className="text-[#5D5FEF]">广联达CONCETTO</span><span className="mx-3 font-light text-gray-300">&amp;</span><span className="text-[#0055AA]">中铁建工定制版本</span>
</h1>
<p className="text-gray-400 font-medium text-sm tracking-widest uppercase pt-2 flex items-center justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#5D5FEF] animate-pulse"></span>
                        正在初始化企业环境...
                    </p>
</div>

<div className="mt-20 w-full max-w-sm">
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#5D5FEF] to-[#0055AA] w-1/3 animate-loading-slide rounded-full"></div>
</div>
<div className="mt-4 flex justify-between text-xs text-gray-400 font-medium">
<span>加载模块</span>
<span>84%</span>
</div>
</div>
</div>

<div className="absolute bottom-8 text-center">
<p className="text-[10px] text-gray-300 font-medium tracking-wide">VERSION 2.4.0 (CUSTOM BUILD 2024)</p>
</div>
</div>
</main>


    </>
  );
}
