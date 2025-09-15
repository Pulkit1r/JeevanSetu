import React, { useState } from 'react';

// Import required components (you'll need to create these)
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Chart } from '@/components/charts/chart';
// import { VideoCall } from '@/components/video/video-call';
// import { LanguageSelector } from '@/components/language/language-selector';
// import { OfflineIndicator } from '@/components/offline/offline-indicator';



const HealthcareDashboard = () => {
  const [isOffline, setIsOffline] = useState(false);

  // Sample data for telemedicine app
  const healthStats = [
    { title: 'Active Consultations', value: '24', change: '+8%', trend: 'up', icon: '🩺' },
    { title: 'Patients Served Today', value: '156', change: '+12%', trend: 'up', icon: '👥' },
    { title: 'Offline Records Synced', value: '89', change: '+5%', trend: 'up', icon: '📱' },
    { title: 'Medicine Availability', value: '94%', change: '+2%', trend: 'up', icon: '💊' },
  ];

  const recentConsultations = [
    { id: 1, patient: 'Rajesh Kumar', doctor: 'Dr. Priya Sharma', time: '2 minutes ago', status: 'active', language: 'Hindi' },
    { id: 2, patient: 'Sunita Devi', doctor: 'Dr. Amit Singh', time: '15 minutes ago', status: 'completed', language: 'English' },
    { id: 3, patient: 'Vikram Patel', doctor: 'Dr. Neha Gupta', time: '1 hour ago', status: 'completed', language: 'Gujarati' },
    { id: 4, patient: 'Lakshmi Reddy', doctor: 'Dr. Rajesh Kumar', time: '2 hours ago', status: 'scheduled', language: 'Telugu' },
  ];

  const medicineAvailability = [
    { name: 'Paracetamol 500mg', pharmacy: 'Rural Health Center', stock: 'High', distance: '2.5 km' },
    { name: 'Amoxicillin 250mg', pharmacy: 'Village Medical Store', stock: 'Medium', distance: '1.8 km' },
    { name: 'Insulin Glargine', pharmacy: 'District Hospital', stock: 'Low', distance: '15 km' },
    { name: 'Metformin 500mg', pharmacy: 'Community Pharmacy', stock: 'High', distance: '3.2 km' },
  ];

  const aiSymptomResults = [
    { symptom: 'Fever + Headache', confidence: '85%', recommendation: 'Consult doctor within 24 hours', severity: 'moderate' },
    { symptom: 'Chest Pain', confidence: '92%', recommendation: 'Immediate medical attention required', severity: 'high' },
    { symptom: 'Cough + Cold', confidence: '78%', recommendation: 'Home care with rest and fluids', severity: 'low' },
  ];

  const offlineRecords = [
    { patient: 'Anita Sharma', lastSync: '2 hours ago', records: 12, status: 'synced' },
    { patient: 'Manoj Kumar', lastSync: '1 day ago', records: 8, status: 'pending' },
    { patient: 'Sushila Devi', lastSync: '3 hours ago', records: 15, status: 'synced' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rural Health Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Multilingual telemedicine platform for rural healthcare access</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Offline Indicator */}
              <div className={`flex items-center px-3 py-1 rounded-full text-sm ${
                isOffline ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isOffline ? 'bg-red-500' : 'bg-green-500'
                }`} />
                {isOffline ? 'Offline Mode' : 'Online'}
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Health Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                  <div className={`flex items-center text-sm mt-2 ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    <span className="font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Consultations */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Live Video Consultations</h2>
                <button className="px-4 py-2 bg-blue-600 dark:bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
                  Start New Consultation
                </button>
              </div>
              
              {/* Video Call Interface Placeholder */}
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-500 dark:text-gray-400">Video Call Interface</p>
                  {/* 
                  <VideoCall
                    roomId="consultation-123"
                    patientId="patient-456"
                    doctorId="doctor-789"
                    language={selectedLanguage}
                  />
                  */}
                </div>
              </div>

              {/* Recent Consultations */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900 dark:text-white">Recent Consultations</h3>
                {recentConsultations.map((consultation) => (
                  <div key={consultation.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        consultation.status === 'active' ? 'bg-green-500' :
                        consultation.status === 'completed' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{consultation.patient}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{consultation.doctor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{consultation.time}</p>
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {consultation.language}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Symptom Checker */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Symptom Checker</h2>
            
            {/* Symptom Input */}
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Describe your symptoms..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button className="w-full mt-2 px-4 py-2 bg-green-600 dark:bg-green-600 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-700 transition-colors">
                Analyze Symptoms
              </button>
            </div>

            {/* AI Results */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-white">Recent Analysis</h3>
              {aiSymptomResults.map((result, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{result.symptom}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      result.severity === 'high' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                      result.severity === 'moderate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                      'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    }`}>
                      {result.severity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{result.recommendation}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Confidence: {result.confidence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medicine Availability & Offline Records */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Medicine Availability */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Medicine Availability</h2>
            <div className="space-y-3">
              {medicineAvailability.map((medicine, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{medicine.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{medicine.pharmacy}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      medicine.stock === 'High' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      medicine.stock === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                      'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}>
                      {medicine.stock}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{medicine.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
              View All Pharmacies
            </button>
          </div>

          {/* Offline Health Records */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Offline Health Records</h2>
            <div className="space-y-3">
              {offlineRecords.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{record.patient}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{record.records} records</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      record.status === 'synced' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {record.status}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{record.lastSync}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 border border-green-200 dark:border-green-700 rounded-md hover:bg-green-50 dark:hover:bg-green-900 transition-colors">
              Sync All Records
            </button>
          </div>
        </div>

        {/* Quick Actions for Rural Healthcare */}
        <div className="mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 text-left border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">🩺</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Emergency Call</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Connect to nearest doctor</div>
              </button>
              <button className="p-4 text-left border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">📋</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Health Checkup</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Schedule routine checkup</div>
              </button>
              <button className="p-4 text-left border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">💊</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Medicine Search</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Find nearby pharmacies</div>
              </button>
              <button className="p-4 text-left border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Download Records</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">For offline access</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDashboard;
