 export default function Footer(){
return <footer className="shadow-[0_0_5px_0] shadow-gray-400 mt-10 dark:bg-gray-900 text-gray-500 dark:text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="text-lg font-semibold">JeevanSetu</h3>
                  <p className="text-sm text-gray-400">Multilingual Telemedicine</p>
                </div>
              </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 sm:gap-8">
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Video Consultations</li>
                <li>Offline Records</li>
                <li>Medicine Search</li>
                <li>AI Symptom Checker</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-inherit mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Emergency Support</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Languages</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>English</li>
                <li>हिन्दी</li>
                <li>ગુજરાતી</li>
                <li>తెలుగు</li>
                <li>தமிழ்</li>
                <li>বাংলা</li>
              </ul>
            </div>
          </div>
          <div className=" border-gray-800  pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 JeevanSetu. Designed for rural healthcare access across India.</p>
          </div>
        </div>
      </footer>
 }