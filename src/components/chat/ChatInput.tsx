import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-end gap-2 p-4 bg-chat-input-bg border border-border rounded-2xl shadow-lg">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent border-none outline-none",
            "text-foreground placeholder:text-muted-foreground",
            "min-h-[24px] max-h-[200px] py-1",
            "disabled:opacity-50"
          )}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || disabled}
          className="flex-shrink-0 rounded-xl h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};
