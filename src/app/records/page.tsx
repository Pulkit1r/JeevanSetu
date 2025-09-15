'use client'
import { ScrollToTop } from '@/components/index';
import { IconDots } from '@tabler/icons-react';
import { span } from 'motion/react-client';
import React from 'react';

// Import required components
// import { RecordCard } from '@/components/records/RecordCard';
// import { SyncStatus } from '@/components/offline/SyncStatus';
// import { Button } from '@/components/ui/Button';
// import { SearchInput } from '@/components/ui/SearchInput';

const RecordsOffline: React.FC = () => {
  const records = [
    { id: 'r1', patient: 'Anita Sharma', lastUpdated: '2 hours ago', size: '2.4 MB',  active:'active',status: 'synced' },
    { id: 'r2', patient: 'Manoj Kumar', lastUpdated: '1 day ago', size: '1.1 MB', active:'active', status: 'pending' },
    { id: 'r3', patient: 'Sushila Devi', lastUpdated: '3 hours ago', size: '3.0 MB', active:'closed', status: 'synced' },
  ];

  return (
    <div className="min-h-screen p-6">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Offline Health Records</h1>
            <p className="text-gray-500">Access and manage your health records without internet</p>
          </div>
          {/* COMPONENT: <SyncStatus /> shows offline/online and last sync */}
          <div className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">Online</div>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* COMPONENT: <SearchInput placeholder="Search patient or file" /> */}
          <input className="flex-1 px-3 py-2 border rounded-md text-sm" placeholder="Search patient or file" />
          {/* COMPONENT: <Button>Sync All</Button> */}
          <div className='flex gap-3'>
          <button className="px-4 py-2 cursor-pointer  bg-green-600 text-white rounded-md">Sync All</button>
          {/* COMPONENT: <Button variant="outline">Export</Button> */}
          <button className="px-4 py-2  cursor-pointer border rounded-md">Export</button>
          </div>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {records.map((rec) => (
            <div key={rec.id} className="p-4  rounded-lg border shadow-sm">
              {/* COMPONENT: <RecordCard record={rec} /> */}
              {/* ANIMATION: Subtle hover lift; skeletons on load */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-primary">{rec.patient}</p>
                  <p className="text-xs text-primary">Last updated {rec.lastUpdated}</p>
                </div>
                <div className='flex gap-x-5'>
                <span className={`text-xs px-2 py-1 inline-flex items-center rounded-full ${rec.active === 'active' ? ' bg-red-300 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{rec.active==="active" && <span className="block w-1 h-1 mr-1 rounded-full animate-fadeInOut bg-red-700"></span>}{rec.active}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${rec.status === 'synced' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{rec.status}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                <span>{rec.size}</span>
                <div className="space-x-2">
                  <button className="px-3 py-1 border font-semibold cursor-pointer text-gray-200 bg-green-500 rounded-md">Open</button>
                  <button className="px-3 py-1 border font-semibold cursor-pointer text-gray-200 bg-red-500 rounded-md">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Storage Bar */}
        <div className="mt-6  border rounded-lg p-4">
          <p className="text-sm font-medium  mb-2">Storage Usage</p>
          {/* COMPONENT: Progress bar */}
          {/* ANIMATION: Progress fill animated to current value */}
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full" style={{ width: '62%' }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">62% used • 1.9 GB free</p>
        </div>
      </div>
    </div>
  );
};

export default RecordsOffline;


