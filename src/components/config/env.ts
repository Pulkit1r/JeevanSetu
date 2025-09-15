// Environment configuration for JeevanSetu
export const config = {
  // Google Gemini API Configuration
  geminiApiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'your_gemini_api_key_here',
  
  // Backend API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  
  // WebRTC Configuration
  webrtc: {
    stunServer: process.env.NEXT_PUBLIC_WEBRTC_STUN_SERVER || 'stun:stun.l.google.com:19302',
    turnServer: process.env.NEXT_PUBLIC_WEBRTC_TURN_SERVER || '',
  },
  
  // Emergency Services API
  emergency: {
    apiUrl: process.env.NEXT_PUBLIC_EMERGENCY_API_URL || 'https://api.emergency-services.com',
    apiKey: process.env.EMERGENCY_API_KEY || 'your_emergency_api_key_here',
  },
  
  // Pharmacy API
  pharmacy: {
    apiUrl: process.env.NEXT_PUBLIC_PHARMACY_API_URL || 'https://api.pharmacy-stock.com',
    apiKey: process.env.PHARMACY_API_KEY || 'your_pharmacy_api_key_here',
  },
  
  // Notification Service
  notifications: {
    vapidPublicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || 'your_vapid_public_key_here',
    vapidPrivateKey: process.env.VAPID_PRIVATE_KEY || 'your_vapid_private_key_here',
  },
  
  // Database
  database: {
    url: process.env.DATABASE_URL || 'your_database_url_here',
  },
  
  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret_here',
  },
};

export default config;

