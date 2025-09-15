// API client for JeevanSetu backend services

import { config } from '@/config/env';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
  error?: string;
}

export interface ChatbotRequest {
  message: string;
  language?: string;
  type?: 'chat' | 'symptoms' | 'awareness';
  userId?: string;
}

export interface EmergencyRequest {
  type: 'medical' | 'accident' | 'fire' | 'police' | 'other';
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  description?: string;
  userId?: string;
}

export interface MedicineStockRequest {
  medicine?: string;
  location?: string;
}

export interface OutbreakAlertRequest {
  symptoms: string[];
  region: string;
  userId?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.apiUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Chatbot API
  async sendChatbotMessage(request: ChatbotRequest): Promise<ApiResponse<any>> {
    return this.request('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Emergency API
  async sendEmergencyRequest(request: EmergencyRequest): Promise<ApiResponse<any>> {
    return this.request('/api/emergency', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Medicine Stock API
  async getMedicineStock(request: MedicineStockRequest): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    if (request.medicine) params.append('medicine', request.medicine);
    if (request.location) params.append('location', request.location);

    return this.request(`/api/medicine-stock?${params.toString()}`);
  }

  // Outbreak Alert API
  async generateOutbreakAlert(request: OutbreakAlertRequest): Promise<ApiResponse<any>> {
    return this.request('/api/outbreak-alert', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Health Alerts API
  async getHealthAlerts(region?: string): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    if (region) params.append('region', region);

    return this.request(`/api/health-alerts?${params.toString()}`);
  }

  // Analytics API
  async getAnalytics(timeframe: string = 'daily'): Promise<ApiResponse<any>> {
    return this.request(`/api/analytics?timeframe=${timeframe}`);
  }

  // Health Check API
  async healthCheck(): Promise<ApiResponse<any>> {
    return this.request('/api/health');
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export individual API functions for convenience
export const chatbotApi = {
  sendMessage: (request: ChatbotRequest) => apiClient.sendChatbotMessage(request),
};

export const emergencyApi = {
  sendRequest: (request: EmergencyRequest) => apiClient.sendEmergencyRequest(request),
};

export const medicineApi = {
  getStock: (request: MedicineStockRequest) => apiClient.getMedicineStock(request),
};

export const outbreakApi = {
  generateAlert: (request: OutbreakAlertRequest) => apiClient.generateOutbreakAlert(request),
};

export const healthApi = {
  getAlerts: (region?: string) => apiClient.getHealthAlerts(region),
};

export const analyticsApi = {
  getData: (timeframe: string = 'daily') => apiClient.getAnalytics(timeframe),
};

export default apiClient;
