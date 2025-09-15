import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { geminiAssistant, ChatMessage } from '@/lib/gemini';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Trash2, 
  Settings, 
  Key,
  Heart,
  Activity,
  Info
} from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [apiKey, setApiKey] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSubmit(apiKey.trim());
      setApiKey('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <Card className="w-full max-w-md p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            API Key Required
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Please enter your Google Gemini API key to use the health assistant. Your key will be stored locally in your browser.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter your Gemini API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full"
          />
          <div className="flex gap-2">
            <Button type="submit" className="flex-1" disabled={!apiKey.trim()}>
              Save API Key
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  const getTypeIcon = () => {
    switch (message.type) {
      case 'symptom':
        return <Activity className="w-3 h-3" />;
      case 'awareness':
        return <Info className="w-3 h-3" />;
      default:
        return <Heart className="w-3 h-3" />;
    }
  };

  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isUser 
          ? 'bg-chatbot-user-bubble text-chatbot-text-user' 
          : 'bg-chatbot-ai-bubble text-chatbot-text-ai border'
      }`}>
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          </div>
          {!isUser && (
            <div className="text-muted-foreground">
              {getTypeIcon()}
            </div>
          )}
        </div>
        <div className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};

export default  () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const [chatMode, setChatMode] = useState<'general' | 'symptom' | 'awareness'>('general');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load chat history when component mounts
    const history = geminiAssistant.getChatHistory();
    setMessages(history);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const checkApiKey = () => {
    if (!geminiAssistant.isConfigured()) {
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  const handleApiKeySubmit = (key: string) => {
    if (geminiAssistant.setApiKey(key)) {
      toast({
        title: "API Key Saved",
        description: "Your Gemini API key has been saved successfully!",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to save API key. Please try again.",
        variant: "destructive",
      });
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!checkApiKey()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      let response: string;
      
      switch (chatMode) {
        case 'symptom':
          response = await geminiAssistant.analyzeSymptoms(userMessage, language);
          break;
        case 'awareness':
          response = await geminiAssistant.getHealthAwareness(userMessage, language);
          break;
        default:
          response = await geminiAssistant.chat(userMessage, language);
      }

      // Refresh messages from the assistant (which includes the new ones)
      setMessages(geminiAssistant.getChatHistory());
      
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    geminiAssistant.clearChatHistory();
    setMessages([]);
    toast({
      title: "Chat Cleared",
      description: "Your chat history has been cleared.",
    });
  };

  const getChatModeTitle = () => {
    switch (chatMode) {
      case 'symptom':
        return 'Symptom Analysis';
      case 'awareness':
        return 'Health Awareness';
      default:
        return 'General Health Chat';
    }
  };

  const getChatModeIcon = () => {
    switch (chatMode) {
      case 'symptom':
        return <Activity className="w-4 h-4" />;
      case 'awareness':
        return <Info className="w-4 h-4" />;
      default:
        return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-chatbot transition-transform hover:scale-105 z-50 ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] flex flex-col shadow-chatbot z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-primary">
            <div className="flex items-center gap-2 text-primary-foreground">
              {getChatModeIcon()}
              <div>
                <h3 className="font-semibold">JeevanSetu Health Assistant</h3>
                <p className="text-xs opacity-90">{getChatModeTitle()}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Controls */}
          <div className="p-3 border-b space-y-2">
            <div className="flex gap-2">
              <Select value={chatMode} onValueChange={(value: 'general' | 'symptom' | 'awareness') => setChatMode(value)}>
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      General Chat
                    </div>
                  </SelectItem>
                  <SelectItem value="symptom">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Symptom Analysis
                    </div>
                  </SelectItem>
                  <SelectItem value="awareness">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Health Awareness
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">EN</SelectItem>
                  <SelectItem value="Hindi">HI</SelectItem>
                  <SelectItem value="Spanish">ES</SelectItem>
                  <SelectItem value="French">FR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsApiKeyModalOpen(true)}
                className="flex-1"
              >
                <Settings className="w-3 h-3 mr-1" />
                API Key
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearHistory}
                className="flex-1"
                disabled={messages.length === 0}
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Clear
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                  <Bot className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <p className="text-sm">Hello! I'm your health assistant.</p>
                  <p className="text-xs mt-1">Ask me about health topics, symptoms, or general wellness.</p>
                </div>
              ) : (
                messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))
              )}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-chatbot-ai-bubble border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Ask about ${chatMode === 'symptom' ? 'your symptoms' : chatMode === 'awareness' ? 'health topics' : 'health questions'}...`}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSubmit={handleApiKeySubmit}
      />
    </>
  );
};