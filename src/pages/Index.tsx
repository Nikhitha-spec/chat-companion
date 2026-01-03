import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { EmptyState } from "@/components/chat/EmptyState";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-screen bg-background dark">
      <ChatHeader />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto chat-scrollbar p-4 md:p-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                  />
                ))}
                <AnimatePresence>
                  {isLoading && messages[messages.length - 1]?.role === "user" && (
                    <TypingIndicator />
                  )}
                </AnimatePresence>
              </>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-border bg-background/80 backdrop-blur-sm p-4 md:p-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearMessages}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear chat
                </Button>
              )}
            </div>
            <ChatInput onSend={sendMessage} disabled={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
