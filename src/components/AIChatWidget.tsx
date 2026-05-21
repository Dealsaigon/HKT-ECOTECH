import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Xin chào! Tôi là trợ lý AI của HKT ECOTECH. Tôi có thể giúp gì cho bạn hôm nay?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // We store the chat instance so it remembers history
  const chatRef = useRef<any>(null);

  useEffect(() => {
    // Initialize chat when component mounts
    try {
      const apiKey = import.meta.env.GEMINI_API_KEY;
      if (!apiKey) {
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'Bạn là trợ lý AI thân thiện và chuyên nghiệp của nền tảng HKT ECOTECH. Nhiệm vụ của bạn là tư vấn, giải đáp thắc mắc của khách hàng về các giải pháp chuyển đổi xanh, nông nghiệp bền vững, theo dõi lượng khí thải carbon, ứng dụng blockchain trong nông nghiệp và các cơ hội hợp tác, tài trợ tại Đồng bằng Sông Cửu Long. Hãy trả lời ngắn gọn, súc tích, lịch sự và nhiệt tình bằng tiếng Việt.',
        }
      });
    } catch (error) {
      console.error('Error initializing Gemini Chat:', error);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        throw new Error('Chat session is not initialized');
      }

      const response = await chatRef.current.sendMessage({ message: userMsg });
      
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev, 
        { role: 'model', text: 'Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform duration-300 z-50 ${isOpen ? 'scale-0' : 'scale-100 hover:-translate-y-1'}`}
        aria-label="Open AI Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-surface rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-primary text-on-primary rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <h3 className="font-semibold">HKT ECOTECH AI</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-on-primary/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-container-lowest">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-secondary text-on-secondary' : 'bg-primary-container text-on-primary-container'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div 
                className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-secondary text-on-secondary rounded-tr-none' 
                    : 'bg-surface-container text-on-surface rounded-tl-none border border-outline-variant/20'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-primary-container text-on-primary-container">
                <Bot className="w-4 h-4" />
              </div>
              <div className="max-w-[75%] px-4 py-3 rounded-2xl rounded-tl-none bg-surface-container text-on-surface border border-outline-variant/20 flex items-center">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-3 bg-surface border-t border-outline-variant/20 rounded-b-2xl flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nhập câu hỏi của bạn..."
            className="flex-1 bg-surface-container-low border border-outline-variant/50 rounded-full px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 bg-primary text-on-primary rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
