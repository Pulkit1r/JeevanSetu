import { ScrollToTop } from '@/components/index';
import React from 'react';

// Import required components
// import { PharmacyCard } from '@/components/pharmacy/PharmacyCard';
// import { Map } from '@/components/map/Map';
// import { SearchInput } from '@/components/ui/SearchInput';
// import { FilterDrawer } from '@/components/ui/FilterDrawer';

const MedicineAvailability: React.FC = () => {
  const pharmacies = [
    { id: 'p1', name: 'Rural Health Center', distance: '2.5 km', stock: 'High', address: 'Main Road, Village A' },
    { id: 'p2', name: 'Village Medical Store', distance: '1.8 km', stock: 'Medium', address: 'Market Square, Village B' },
    { id: 'p3', name: 'District Hospital Pharmacy', distance: '15 km', stock: 'Low', address: 'District HQ' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <ScrollToTop />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Medicine Availability</h1>
            <p className="text-gray-600 dark:text-gray-300">Real-time stock updates at nearby pharmacies</p>
          </div>
          {/* COMPONENT: <FilterDrawer /> for filters like distance, stock, open now */}
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">Filters</button>
        </div>

        {/* Search and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* COMPONENT: <Map markers={...} /> */}
            {/* ANIMATION: Pin drop on load; marker bounce on select */}
            <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300">Map Placeholder</p>
            </div>
          </div>
          <aside>
            <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-4">
              {/* COMPONENT: <SearchInput placeholder="Search medicine or pharmacy" /> */}
              <input className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm  dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Search medicine or pharmacy" />
              <div className="mt-4 space-y-3">
                {pharmacies.map((ph) => (
                  <div key={ph.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition  dark:bg-gray-750">
                    {/* COMPONENT: <PharmacyCard pharmacy={ph} /> */}
                    {/* ANIMATION: Staggered list reveal */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{ph.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{ph.address}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 rounded-full ${ph.stock === 'High' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : ph.stock === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>{ph.stock}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ph.distance}</p>
                      </div>
                    </div>
                    <button className="mt-2 w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Navigate</button>
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

export default MedicineAvailability;


