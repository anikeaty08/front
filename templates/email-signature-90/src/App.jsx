import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<div className="bg-white p-8 border border-gray-200 shadow-sm rounded-xl flex items-center justify-center w-full max-w-xl">

<table border="0" cellpadding="0" cellspacing="0" className="font-sans text-gray-600 w-full text-left">
<tbody className="">
<tr className="">

<td className="pr-6" valign="top">
<table border="0" cellpadding="0" cellspacing="0" className="w-full">
<tbody className="">

<tr className="">
<td className="pb-0.5">
<span className="text-base font-semibold text-gray-900 tracking-tight">{{ FULL_NAME }}</span>
</td>
</tr>

<tr className="">
<td className="text-sm text-gray-500 pb-4">Design Lead | Tech Lead </td>
</tr>

<tr className="">
<td className="text-sm text-gray-700 pb-1">+55 11 99501-7301</td>
</tr>

<tr className="">
<td className="pb-1 text-sm">
<a className="hover:text-blue-800 underline decoration-blue-300 underline-offset-2 transition-colors text-blue-600" href="#">www.blueprintt.co</a>
</td>
</tr>

<tr className="">
<td className="pb-4 text-sm">
<a className="hover:text-blue-800 underline decoration-blue-300 underline-offset-2 transition-colors text-blue-600" href="#">LinkedIn</a>
</td>
</tr>
</tbody>
</table>
</td>

<td className="border-l border-gray-200 pl-6 w-48" valign="top">
<table border="0" cellpadding="0" cellspacing="0" className="w-full">
<tbody className="">
<tr className="">
<td className="pb-3">
<img alt="Blueprintt" className="h-auto object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/logo-bp-cinza.png" style={{display: 'block', maxWidth: '120px'}} width="120"/>
</td>
</tr>
<tr className="">
<td className="color:#5C8CFF; text-sm text-gray-500 pb-4">Conectamos ideias que definem o futuro dos negócios.</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr className="">
<td className="pt-3 border-t border-gray-100 text-sm" colspan="2">
<a className="hover:text-gray-600 underline decoration-gray-300 underline-offset-2 transition-colors flex items-center gap-1 font-medium text-gray-900" href="#">Próxima Conferência: HR Transformation Summit | 12 Maio</a>
</td>
</tr>
</tbody>
</table>

</div>

    </>
  );
}
