'use client'
import { ScrollToTop } from '@/components/index';
import React, { useState } from 'react';

// Import required components
// import { Textarea } from '@/components/ui/Textarea';
// import { Button } from '@/components/ui/Button';
// import { ResultCard } from '@/components/symptoms/ResultCard';
// import { Suggestions } from '@/components/symptoms/Suggestions';

const SymptomChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');

  const results = [
    { label: 'Viral Fever', severity: 'low', recommendation: 'Home care and hydration', confidence: '78%' },
    { label: 'Malaria (possible)', severity: 'moderate', recommendation: 'Consult a doctor within 24 hours', confidence: '65%' },
    { label: 'Typhoid (unlikely)', severity: 'low', recommendation: 'Monitor symptoms, consult if persists', confidence: '40%' },
  ];

  return (
    
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <ScrollToTop />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Symptom Checker</h1>
            <p className="text-gray-600 dark:text-gray-300">Optimized for low-bandwidth areas and multilingual input</p>
          </div>
         
        </div>

        {/* Input */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Describe your symptoms</label>
          {/* COMPONENT: <Textarea autosize lowDataMode /> */}
          <textarea className="w-full h-28 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="e.g., Fever for 3 days, headache, chills" value={input} onChange={(e) => setInput(e.target.value)} />

          {/* Controls */}
          <div className="mt-3 flex items-center gap-3">
            {/* COMPONENT: <Button loading={...}>Analyze</Button> */}
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md">Analyze</button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">Clear</button>
            {/* COMPONENT: toggle for Low Data Mode */}
            <label className="ml-auto text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700" /> Low Data Mode
            </label>
          </div>

          {/* ANIMATION: Shimmer placeholder while AI is analyzing */}
        </div>

        {/* Results */}
        <div className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Possible Conditions</h2>
          {results.map((r, idx) => (
            <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              {/* COMPONENT: <ResultCard result={r} /> */}
              {/* ANIMATION: Expand/collapse for details */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{r.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{r.recommendation}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${r.severity === 'high' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : r.severity === 'moderate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'}`}>{r.severity}</span>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Confidence: {r.confidence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Next Steps</h3>
          {/* COMPONENT: <Suggestions /> tailored to severity */}
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Schedule a video consultation for further guidance</li>
            <li>Find nearby pharmacies for over-the-counter medicines</li>
            <li>Save this assessment to your health records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;


