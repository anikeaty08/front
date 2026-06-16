import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons({ attrs: { stroke: 'currentColor', 'stroke-width': 1.5 }});
      const dl = document.getElementById('downloadBtn');
      if (dl) {
        dl.addEventListener('click', function (e) {
          e.preventDefault();
          const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
          const blob = new Blob([html], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'CAO-35-Marks.html';
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-neutral-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">CAO</span>
</div>
<div className="hidden sm:flex items-center gap-3 text-neutral-300">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span className="text-sm">Computer Architecture &amp; Organization</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative hidden md:block">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 rounded-md bg-neutral-900 text-neutral-200 placeholder-neutral-500 text-sm border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700 transition-colors" placeholder="Search topics..." type="text"/>
</div>
<a aria-label="Download this page" className="inline-flex items-center gap-2 text-sm text-neutral-200 px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors" href="#" id="downloadBtn">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Download</span>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Important Questions &amp; Answers — 35 Marks</h1>
<p className="mt-3 text-neutral-400 text-base">Modules covered: Introduction; Processor Organization. Designed for quick revision: crisp, point-scored answers.</p>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Total 35 Marks</span>
<span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">Part A: 5 × 3</span>
<span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">Part B: 2 × 10</span>
</div>
</div>
<div className="relative">
<img alt="abstract tech render" className="w-full h-40 sm:h-full object-cover rounded-lg border border-neutral-800" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 text-[10px] text-neutral-400 bg-neutral-950/60 px-2 py-1 rounded border border-neutral-800">Study Mode</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-3">
<div className="text-xs text-neutral-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layers"></i>
<span>Filter</span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-3 py-1.5 rounded-md bg-neutral-900 text-neutral-200 border border-neutral-800 hover:border-neutral-700 hover:text-white">All</button>
<button className="text-xs px-3 py-1.5 rounded-md bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-neutral-700">Module 1</button>
<button className="text-xs px-3 py-1.5 rounded-md bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-neutral-700">Module 2</button>
</div>
<div className="ml-auto text-xs text-neutral-400">
            Last updated: Oct 2025
          </div>
</div>
</section>

<main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">

<section className="space-y-4">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Part A — Short Answers (5 × 3 = 15 marks)</h2>
<span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">Module 1 + 2</span>
</div>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">Q1. Differentiate assembly language and machine language with an example. [3]</div>
<span className="text-[11px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">3 marks</span>
</div>
<div className="mt-3 text-sm text-neutral-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Representation: Machine language is binary opcodes; assembly is mnemonic form mapping 1:1 to opcodes.</li>
<li>Portability: Both are ISA-specific; assembly improves readability and maintainability.</li>
<li>Toolchain: Assembler translates assembly to machine code; no translation for raw machine code.</li>
</ul>
<div className="mt-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
<div className="text-[13px] text-neutral-400">Example (load immediate):</div>
<div className="mt-1 grid sm:grid-cols-2 gap-2 text-[13px]">
<div className="p-2 rounded bg-neutral-950 border border-neutral-800">
<span className="text-neutral-200">Assembly:</span> MOV R1, #5
                    </div>
<div className="p-2 rounded bg-neutral-950 border border-neutral-800">
<span className="text-neutral-200">Machine:</span> 0011 0001 0000 0101 (depends on ISA)
                    </div>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">Q2. Briefly explain the roles of PC, IR, MAR, MDR, and PSW/Flags. [3]</div>
<span className="text-[11px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">3 marks</span>
</div>
<div className="mt-3 text-sm text-neutral-300 grid sm:grid-cols-2 gap-3">
<ul className="list-disc pl-5 space-y-1">
<li>PC (Program Counter): Holds address of next instruction; auto-updates on fetch/branch.</li>
<li>IR (Instruction Register): Holds current instruction for decoding/execution.</li>
<li>MAR (Memory Address Register): Address sent to memory for read/write.</li>
</ul>
<ul className="list-disc pl-5 space-y-1">
<li>MDR (Memory Data Register): Data read from or written to memory.</li>
<li>PSW/Flags: Condition codes (Z, N, C, V, etc.) set by ALU, steer conditional branches.</li>
</ul>
</div>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">Q3. List the types of micro-operations with one register-transfer example each. [3]</div>
<span className="text-[11px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">3 marks</span>
</div>
<div className="mt-3 text-sm text-neutral-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Arithmetic: R2 ← R2 + R3; INC R1; DEC R4.</li>
<li>Logic: R1 ← R1 AND R2; R5 ← NOT R5; XOR for bitwise compare.</li>
<li>Shift: R3 ← shl R3; arithmetic shift-right preserves sign; rotate for circular shifts.</li>
</ul>
<div className="text-[12px] text-neutral-400">Implemented via ALU and barrel shifter; control signals select function per clock.</div>
</div>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">Q4. Describe stack use in subroutine call/return. [3]</div>
<span className="text-[11px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">3 marks</span>
</div>
<div className="mt-3 text-sm text-neutral-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>Call: Push return address (and possibly caller-saved registers/args) onto stack; PC ← target.</li>
<li>Activation record (stack frame): Parameters, return address, saved FP, locals.</li>
<li>Return: Pop frame, restore registers/FP, PC ← saved return address (RET).</li>
</ul>
<div className="text-[12px] text-neutral-400">Leaf functions may skip frame; re-entrant code avoids global state or uses callee-saved registers.</div>
</div>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">Q5. Summarize Flynn’s classification and contrast RISC vs CISC. [3]</div>
<span className="text-[11px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">3 marks</span>
</div>
<div className="mt-3 text-sm text-neutral-300 space-y-2">
<ul className="list-disc pl-5 space-y-1">
<li>SISD: Single instruction, single data (classic scalar CPU).</li>
<li>SIMD: Single instruction, multiple data (vector/SIMD lanes, GPUs).</li>
<li>MISD: Multiple instruction, same data (rare; redundant pipelines/TMR examples).</li>
<li>MIMD: Multiple instruction, multiple data (multicore, clusters).</li>
</ul>
<ul className="list-disc pl-5 space-y-1">
<li>RISC: Fixed-length, few addressing modes, load/store, deep pipelines, many registers.</li>
<li>CISC: Variable-length, rich addressing modes, microcoded complex ops, higher code density.</li>
</ul>
</div>
</div>
</article>
</section>

<div className="h-px bg-neutral-900"></div>

<section className="space-y-4">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Part B — Long Answers (2 × 10 = 20 marks)</h2>
<span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">Module 2 Focus</span>
</div>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">B1. Instruction set: types, formats, and addressing modes with examples and effective address (EA) expressions. [10]</div>
<span className="text-[11px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">10 marks</span>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-5 text-sm text-neutral-300">
<div className="space-y-3">
<div className="font-medium text-neutral-200">Instruction types</div>
<ul className="list-disc pl-5 space-y-1">
<li>Data processing: arithmetic/logic/shift (ADD, AND, SHL).</li>
<li>Data transfer: register-memory, memory-memory, load/store (LD, ST, MOV).</li>
<li>Control transfer: branches, calls, returns, traps (BEQ, JUMP, CALL, RET).</li>
<li>System: privileged, I/O, status ops.</li>
</ul>
<div className="font-medium text-neutral-200">Instruction formats</div>
<ul className="list-disc pl-5 space-y-1">
<li>0-address (stack): op acts on TOS, e.g., ADD uses top two stack items.</li>
<li>1-address: ACC-based, e.g., ADD X (ACC ← ACC + M[X]).</li>
<li>2-address: DEST ← DEST op SRC, e.g., ADD R1, R2.</li>
<li>3-address: R1 ← R2 op R3, explicit dest and 2 sources.</li>
<li>Fixed vs variable length: fixed eases pipelining; variable improves code density.</li>
</ul>
</div>
<div className="space-y-3">
<div className="font-medium text-neutral-200">Addressing modes (EA = effective address)</div>
<ul className="list-disc pl-5 space-y-1">
<li>Immediate: operand in instruction. EA: —; e.g., MOV R1, #10 (fast, no memory fetch).</li>
<li>Direct (absolute): EA = A. e.g., LD R1, [0x1000] (simple, reloc not flexible).</li>
<li>Indirect: EA = M[A] (one extra memory reference).</li>
<li>Register: operand in register. EA: —; e.g., ADD R1, R2.</li>
<li>Register indirect: EA = Rb; e.g., LD R1, [R2].</li>
<li>Indexed: EA = Rb + index; e.g., LD R1, [R2 + #4].</li>
<li>Base-relative: EA = Base + disp; supports relocation (Base = segment/GP).</li>
<li>PC-relative: EA = PC + disp; enables position-independent code and short branches.</li>
<li>Auto-inc/dec: use then update Rb (post/pre) for efficient array/stack access.</li>
</ul>
<div className="rounded-md border border-neutral-800 bg-neutral-900 p-3">
<div className="text-[13px] text-neutral-400">Example (pseudo-assembly):</div>
<pre className="mt-2 text-[12px] leading-5 text-neutral-200 overflow-auto"><code>; Sum A[i] for i=0..3 (Rb = base A)
CLR   R0               ; R0 = sum
LD    R1, #0           ; i = 0
LOOP: LD   R2, [Rb + R1*4]   ; Indexed (EA = Rb + R1*4)
      ADD  R0, R2           ; sum += A[i]
      ADD  R1, #1
      CMP  R1, #4
      BNE  LOOP             ; PC-relative branch</code></pre>
</div>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-5 text-sm">
<div className="space-y-2">
<div className="font-medium text-neutral-200">ALU and status flags</div>
<ul className="list-disc pl-5 text-neutral-300 space-y-1">
<li>Z (Zero): result == 0</li>
<li>N/S (Negative/Sign): MSB of result</li>
<li>C (Carry/Borrow): unsigned overflow/borrow</li>
<li>V (Overflow): signed overflow (e.g., + + → −)</li>
<li>Use in conditional branches (BEQ/BNE/BLT/BGE).</li>
</ul>
</div>
<div className="space-y-2">
<div className="font-medium text-neutral-200">Marking guide (suggested)</div>
<ul className="list-disc pl-5 text-neutral-300 space-y-1">
<li>Types (2), Formats (2), Modes (4), Example/EA (1), Flags (1) = 10</li>
</ul>
</div>
</div>
</div>
</article>

<article className="rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-950 transition-colors">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-200">B2. Instruction cycle; hardwired vs microprogrammed control; pipelining and hazards with mitigations; brief on Flynn classification. [10]</div>
<span className="text-[11px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">10 marks</span>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-5 text-sm text-neutral-300">
<div className="space-y-3">
<div className="font-medium text-neutral-200">Instruction cycle (with possible interrupt)</div>
<ul className="list-disc pl-5 space-y-1">
<li>Fetch: MAR ← PC; MDR ← M[MAR]; IR ← MDR; PC ← PC + instr_len.</li>
<li>Decode: control unit interprets opcode, reads registers, computes addressing.</li>
<li>Execute: ALU/Memory/Branch per instruction; set flags.</li>
<li>Memory access (if needed): additional read/write step.</li>
<li>Write-back: store results to register/memory.</li>
<li>Interrupt check: if IF=1 and pending, push PC/PSW; vector to ISR.</li>
</ul>
<div className="font-medium text-neutral-200">Control unit</div>
<ul className="list-disc pl-5 space-y-1">
<li>Hardwired: next-state logic (FSM, PLA). Pros: very fast, low overhead. Cons: inflexible; complex to modify.</li>
<li>Microprogrammed: control store with microinstructions. Pros: flexible, easier to extend ISA. Cons: slower (micro-sequencing), CS memory cost.</li>
</ul>
</div>
<div className="space-y-3">
<div className="font-medium text-neutral-200">Pipelining</div>
<ul className="list-disc pl-5 space-y-1">
<li>Basic stages: IF → ID → EX → MEM → WB; ideal speedup ≈ number of stages (ignoring hazards).</li>
<li>Structural hazards: resource conflict (e.g., single memory). Fix: separate I/D caches, multi-ports.</li>
<li>Data hazards: RAW/WAR/WAW; common RAW between dependent ops. Fix: forwarding/bypass, register renaming, stalls (NOPs).</li>
<li>Control hazards: branches change PC. Fix: predict (static/dynamic), delayed branch, early resolve.</li>
<li>Throughput vs latency: pipeline increases throughput, not single-instruction latency.</li>
</ul>
<div className="font-medium text-neutral-200">Flynn recap</div>
<ul className="list-disc pl-5 space-y-1">
<li>SISD (scalar), SIMD (vector/SIMD/GPU), MISD (rare), MIMD (multicore/NUMA/cluster).</li>
</ul>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-5 text-sm">
<div className="space-y-2">
<div className="font-medium text-neutral-200">RISC vs CISC (context)</div>
<ul className="list-disc pl-5 text-neutral-300 space-y-1">
<li>RISC favors simple, uniform pipelines; fixed-length instructions enable fast decode.</li>
<li>CISC often uses microcode; variable-length complicates decode but improves density.</li>
</ul>
</div>
<div className="space-y-2">
<div className="font-medium text-neutral-200">Marking guide (suggested)</div>
<ul className="list-disc pl-5 text-neutral-300 space-y-1">
<li>Cycle (3), Control comparison (2), Pipeline + hazards (4), Flynn (1) = 10</li>
</ul>
</div>
</div>
</div>
</article>
</section>

<section className="mt-4">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4 sm:p-5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="lightbulb"></i>
<div className="text-sm font-medium text-neutral-200">Exam tips</div>
</div>
<ul className="mt-2 text-sm text-neutral-300 list-disc pl-5 space-y-1">
<li>Draw clear block diagrams for structure/pipeline (even simple boxes/arrows) if allowed.</li>
<li>Quote EA formulas and name the addressing mode explicitly.</li>
<li>State flag effects after arithmetic and tie them to branch decisions.</li>
<li>For hazards, name the hazard type and one concrete mitigation.</li>
</ul>
</div>
</section>
</main>

<footer className="mt-10 border-t border-neutral-900">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-xs text-neutral-500 flex items-center justify-between">
<div>© 2025 CAO Prep</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300" href="#">Syllabus: Module 1–2</a>
<a className="hover:text-neutral-300" href="#">More Q&amp;A</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
