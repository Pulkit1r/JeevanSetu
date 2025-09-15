import React, { useState } from 'react';

// Import required components (create these in your project)
// import { VideoCall } from '@/components/video/VideoCall'; // Video call component
// import { DoctorCard } from '@/components/doctor/DoctorCard'; // Doctor profile card
// import { LanguageSelector } from '@/components/language/LanguageSelector'; // Language switcher
// import { SchedulePicker } from '@/components/schedule/SchedulePicker'; // Date/time picker
// import { Button } from '@/components/ui/Button';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

const Consultations: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const doctors = [
    { id: 'd1', name: 'Dr. Priya Sharma', specialty: 'General Physician', languages: ['hi', 'en'], rating: 4.8 },
    { id: 'd2', name: 'Dr. Amit Singh', specialty: 'Pediatrics', languages: ['en'], rating: 4.6 },
    { id: 'd3', name: 'Dr. Neha Gupta', specialty: 'Gynecology', languages: ['hi', 'en'], rating: 4.9 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Video Consultations</h1>
            <p className="text-gray-600 dark:text-gray-300">Connect with qualified doctors in your preferred language</p>
          </div>
          {/* Language Selector Component */}
          {/* COMPONENT: <LanguageSelector value={selectedLanguage} onChange={setSelectedLanguage} /> */}
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="px-3 py-2 border dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="te">తెలుగు</option>
            <option value="ta">தமிழ்</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>

        {/* Tabs: Live / Schedule */}
        {/* COMPONENT: Tabs for switching views */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Live Call / Scheduler */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Start or Schedule</h2>
                {/* COMPONENT: <Button>Start New Call</Button> */}
                <button className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-800">Start New Call</button>
              </div>

              {/* Video Area */}
              <div className="h-72 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-500 dark:text-gray-400">Video Call Interface</p>
                  {/* COMPONENT: <VideoCall roomId="room-xyz" language={selectedLanguage} /> */}
                  {/* ANIMATION: Fade-in when connecting; pulse for connecting state */}
                </div>
              </div>

              {/* Scheduler */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Schedule a Consultation</h3>
                {/* COMPONENT: <SchedulePicker onSubmit={...} /> */}
                {/* ANIMATION: Slide-up modal for confirmation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input type="date" className="px-3 py-2 border dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                  <input type="time" className="px-3 py-2 border dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                  <button className="px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-800">Confirm Slot</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Doctor List */}
          <aside>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Available Doctors</h2>
              <div className="space-y-3">
                {doctors.map((doc) => (
                  <div key={doc.id} className="p-3 rounded-lg border dark:border-gray-600 hover:shadow-sm transition bg-white dark:bg-gray-700">
                    {/* COMPONENT: <DoctorCard doctor={doc} /> */}
                    {/* ANIMATION: Staggered fade-in on list render */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{doc.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{doc.specialty} • {doc.languages.join(', ')}</p>
                      </div>
                      <div className="text-yellow-500 dark:text-yellow-400">⭐ {doc.rating}</div>
                    </div>
                    <button className="mt-2 w-full px-3 py-2 text-sm border dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Book</button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Consultations;


