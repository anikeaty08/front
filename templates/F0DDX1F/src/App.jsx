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
      
    function questionnaireBuilder() {
      return {
        questions: [
          {
            id: Date.now(),
            text: 'What is your name?',
            type: 'text',
            options: [],
          }
        ],
        addQuestion() {
          this.questions.push({
            id: Date.now() + Math.random(),
            text: '',
            type: 'text',
            options: [],
          });
        },
        removeQuestion(i) {
          this.questions.splice(i, 1);
        },
        addOption(qIdx) {
          this.questions[qIdx].options.push('');
        },
        removeOption(qIdx, oIdx) {
          this.questions[qIdx].options.splice(oIdx, 1);
        },
        initSortable() {
          const el = this.$root.querySelector('[x-data] > div');
          Sortable.create(el, {
            handle: '.cursor-move',
            animation: 150,
            onEnd: evt => {
              const moved = this.questions.splice(evt.oldIndex, 1)[0];
              this.questions.splice(evt.newIndex, 0, moved);
            }
          });
        }
      }
    }
  
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
      
<div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg" x-data="questionnaireBuilder()" x-init="initSortable()">
<h2 className="text-2xl font-bold mb-4 text-gray-800">Questionnaire Builder</h2>
<div>
<template :key="q.id" x-htmlFor="(q, i) in questions">
<div :data-id="q.id" className="mb-3 bg-gray-50 border rounded shadow flex items-start group">
<div className="cursor-move px-2 py-3 flex items-center text-gray-400 hover:text-blue-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1 px-4 py-3">
<input className="w-full border-b bg-transparent outline-none text-lg font-medium text-gray-700 focus:border-blue-400" placeholder="Type your question here..." type="text" x-model="q.text"/>
<select className="mt-2 p-2 border rounded w-full" x-model="q.type">
<option value="text">Short Answer</option>
<option value="textarea">Paragraph</option>
<option value="radio">Multiple Choice</option>
<option value="checkbox">Checkboxes</option>
</select>
<div className="mt-2 space-y-2" x-show="q.type === 'radio' || q.type === 'checkbox'">
<template :key="oi" x-htmlFor="(option, oi) in q.options">
<div className="flex items-center space-x-2">
<input className="border px-2 py-1 flex-1 rounded" placeholder="Option..." type="text" x-model="q.options[oi]"/>
<button @click="removeOption(i, oi)" className="text-red-500 hover:text-red-700" title="Remove option">
                    ×
                  </button>
</div>
</template>
<button @click="addOption(i)" className="text-blue-500 text-sm hover:underline mt-1">
                + Add Option
              </button>
</div>
</div>
<button @click="removeQuestion(i)" className="p-3 text-gray-400 hover:text-red-600 focus:outline-none" title="Remove question">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</template>
</div>
<button @click="addQuestion()" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full font-semibold">
      + Add Question
    </button>
<hr className="my-6"/>
<h3 className="text-xl font-bold mb-2 text-gray-800">Preview</h3>
<form @submit.prevent="" className="space-y-4">
<template :key="q.id" x-htmlFor="q in questions">
<div>
<label className="block font-medium text-gray-700 mb-1" x-text="q.text"></label>
<template x-if="q.type === 'text'">
<input className="border p-2 rounded w-full" disabled="" type="text"/>
</template>
<template x-if="q.type === 'textarea'">
<textarea className="border p-2 rounded w-full" disabled="" rows="2"></textarea>
</template>
<template x-if="q.type === 'radio'">
<div>
<template :key="oi" x-htmlFor="(option, oi) in q.options">
<label className="inline-flex items-center mr-4">
<input :name="'q'+q.id" disabled="" type="radio"/>
<span className="ml-2" x-text="option"></span>
</label>
</template>
</div>
</template>
<template x-if="q.type === 'checkbox'">
<div>
<template :key="oi" x-htmlFor="(option, oi) in q.options">
<label className="inline-flex items-center mr-4">
<input :name="'q'+q.id" disabled="" type="checkbox"/>
<span className="ml-2" x-text="option"></span>
</label>
</template>
</div>
</template>
</div>
</template>
</form>
</div>


    </>
  );
}
