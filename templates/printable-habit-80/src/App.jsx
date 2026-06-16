import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                            for(let i=1; i<=31; i++) {
                                document.write(`<th class="border-l border-b border-black text-[9px] font-medium text-center w-auto">${i}</th>`);
                            }
                        


                        for(let row=0; row<12; row++) {
                            document.write(`<tr class="h-8">`);
                            // Name Cell
                            document.write(`<td class="border-r border-b border-black bg-transparent"></td>`);
                            // 31 Day Cells
                            for(let day=1; day<=31; day++) {
                                document.write(`<td class="border-l border-b border-black"></td>`);
                            }
                            document.write(`</tr>`);
                        }
                    


                            for(let i=1; i<=31; i++) {
                                document.write(`<td class="border-l border-b border-black text-center text-[8px] font-medium">${i}</td>`);
                            }
                        


                            for(let i=1; i<=31; i++) {
                                document.write(`<td class="border-l border-black"></td>`);
                            }
                        


                                for(let i=1; i<=31; i++) {
                                    document.write(`<div class="flex-1 border-r border-neutral-100 last:border-0 h-full"></div>`);
                                }
                            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="page-container bg-white w-[210mm] min-h-[297mm] mx-auto p-12 shadow-xl border border-neutral-200 flex flex-col relative box-border">

<div className="flex flex-col items-center mb-8 relative">

<div className="absolute left-0 bottom-1 flex flex-col items-start">
<div className="flex items-end gap-2">
<span className="text-xs font-bold uppercase tracking-widest">Month:</span>
<div className="w-32 border-b border-black h-4"></div>
</div>
</div>

<h1 className="text-2xl font-semibold tracking-tight uppercase">Getting 1% Better Each Day</h1>
<h2 className="text-xs font-medium tracking-[0.3em] uppercase mt-1 text-neutral-600">31 Day Dashboard</h2>
</div>


<div className="w-full mb-10">
<table className="w-full border-collapse border border-black table-fixed">
<thead>
<tr className="h-8">

<th className="border-r border-b border-black w-40 text-left pl-2 text-[10px] font-bold uppercase tracking-wider">Habit</th>


</tr>
</thead>
<tbody>


</tbody>
</table>
</div>

<div className="flex-grow flex flex-col justify-end">

<div className="w-full mb-6">
<table className="w-full border-collapse border border-black table-fixed">

<tr className="h-6">
<td className="w-20 border-r border-b border-black bg-neutral-50 text-center text-[9px] font-bold uppercase tracking-wider">Day</td>

</tr>

<tr className="h-8">
<td className="border-r border-black text-center text-[9px] font-bold uppercase tracking-wider">Hours</td>

</tr>
</table>
</div>

<div className="w-full">

<div className="flex justify-between items-end mb-2">
<h3 className="text-xs font-bold uppercase tracking-widest">Work Hours Graph</h3>
<span className="text-[9px] text-neutral-500 uppercase tracking-wide">0h - 12h Scale</span>
</div>

<div className="w-full h-48 border border-black flex">

<div className="w-10 border-r border-black flex flex-col justify-between items-end py-0 pr-1 text-[8px] font-medium text-neutral-500 bg-neutral-50 relative">

<span className="absolute top-0 -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">12h</span>
<span className="absolute top-[16.66%] -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">10h</span>
<span className="absolute top-[33.33%] -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">8h</span>
<span className="absolute top-[50%] -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">6h</span>
<span className="absolute top-[66.66%] -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">4h</span>
<span className="absolute top-[83.33%] -translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">2h</span>
<span className="absolute bottom-0 translate-y-1/2 right-1.5 bg-neutral-50 px-0.5">0h</span>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="border-b border-neutral-300 w-full h-0"></div> 
<div className="w-full h-0"></div> 
</div>

<div className="absolute inset-0 flex w-full h-full pointer-events-none">

</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
