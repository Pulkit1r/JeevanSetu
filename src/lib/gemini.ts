"use client"
import { GoogleGenerativeAI } from '@google/generative-ai';

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  type: 'general' | 'symptom' | 'awareness';
}

class GeminiHealthAssistant {
  private genAI: GoogleGenerativeAI | null = null;
  private chatHistory: ChatMessage[] = [];
  private apiKey: string | null = null;

  constructor() {
    // Initialize with API key from localStorage if available
    this.initializeFromStorage();
  }

  private initializeFromStorage() {
    
    if(typeof window === 'undefined') return;

    const storedKey = localStorage.getItem('gemini_api_key');
    const storedHistory = localStorage.getItem('chatbot_history');
    
    if (storedKey) {
      this.setApiKey(storedKey);
    }
    
    if (storedHistory) {
      try {
        this.chatHistory = JSON.parse(storedHistory).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Error parsing chat history:', error);
        this.chatHistory = [];
      }
    }
  }

  public setApiKey(key: string): boolean {
    try {
      this.apiKey = key;
      this.genAI = new GoogleGenerativeAI(key);
      localStorage.setItem('gemini_api_key', key);
      return true;
    } catch (error) {
      console.error('Error setting API key:', error);
      return false;
    }
  }

  public isConfigured(): boolean {
    return this.genAI !== null && this.apiKey !== null;
  }

  private saveHistory() {
    localStorage.setItem('chatbot_history', JSON.stringify(this.chatHistory));
  }

  private addToHistory(role: 'user' | 'ai', content: string, type: 'general' | 'symptom' | 'awareness' = 'general') {
    const message: ChatMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
      type
    };
    this.chatHistory.push(message);
    this.saveHistory();
  }

  private getSystemPrompt(type: 'general' | 'symptom' | 'awareness', language: string): string {
    const basePrompt = `You are a helpful health assistant for JeevanSetu telemedicine platform. Always respond in ${language}. Be empathetic, professional, and provide accurate health information. Always recommend consulting healthcare professionals for serious concerns.`;
    
    switch (type) {
      case 'symptom':
        return `${basePrompt} Analyze the symptoms provided and suggest possible conditions, severity levels (mild/moderate/severe), and next steps. Always emphasize consulting a doctor for proper diagnosis.`;
      case 'awareness':
        return `${basePrompt} Provide educational health information, prevention tips, and general awareness about health topics in an easy-to-understand manner.`;
      default:
        return `${basePrompt} Answer general health-related questions, provide basic health advice, and offer emotional support when needed.`;
    }
  }

  private async generateResponse(message: string, type: 'general' | 'symptom' | 'awareness', language: string): Promise<string> {
    if (!this.isConfigured()) {
      throw new Error('Gemini API not configured. Please provide your API key.');
    }

    try {
      const model = this.genAI!.getGenerativeModel({ model: "gemini-1.5-flash" });
      const systemPrompt = this.getSystemPrompt(type, language);
      
      const prompt = `${systemPrompt}\n\nUser query: ${message}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error: any) {
      console.error('Error generating response:', error);
      
      if (error.message?.includes('API_KEY_INVALID')) {
        throw new Error('Invalid API key. Please check your Gemini API key.');
      } else if (error.message?.includes('QUOTA_EXCEEDED')) {
        throw new Error('API quota exceeded. Please check your Gemini API usage limits.');
      } else {
        throw new Error('Sorry, I encountered an error. Please try again later.');
      }
    }
  }

  public async chat(message: string, language: string = 'English'): Promise<string> {
    try {
      this.addToHistory('user', message, 'general');
      const response = await this.generateResponse(message, 'general', language);
      this.addToHistory('ai', response, 'general');
      return response;
    } catch (error: any) {
      const errorMessage = error.message || 'Sorry, I encountered an error processing your message.';
      this.addToHistory('ai', errorMessage, 'general');
      throw error;
    }
  }

  public async analyzeSymptoms(message: string, language: string = 'English'): Promise<string> {
    try {
      this.addToHistory('user', message, 'symptom');
      const response = await this.generateResponse(message, 'symptom', language);
      this.addToHistory('ai', response, 'symptom');
      return response;
    } catch (error: any) {
      const errorMessage = error.message || 'Sorry, I encountered an error analyzing your symptoms.';
      this.addToHistory('ai', errorMessage, 'symptom');
      throw error;
    }
  }

  public async getHealthAwareness(message: string, language: string = 'English'): Promise<string> {
    try {
      this.addToHistory('user', message, 'awareness');
      const response = await this.generateResponse(message, 'awareness', language);
      this.addToHistory('ai', response, 'awareness');
      return response;
    } catch (error: any) {
      const errorMessage = error.message || 'Sorry, I encountered an error providing health information.';
      this.addToHistory('ai', errorMessage, 'awareness');
      throw error;
    }
  }

  public getChatHistory(): ChatMessage[] {
    return [...this.chatHistory];
  }

  public clearChatHistory(): void {
    this.chatHistory = [];
    localStorage.removeItem('chatbot_history');
  }

  public getLastMessages(count: number = 10): ChatMessage[] {
    return this.chatHistory.slice(-count);
  }
}

// Export singleton instance
export const geminiAssistant = new GeminiHealthAssistant();