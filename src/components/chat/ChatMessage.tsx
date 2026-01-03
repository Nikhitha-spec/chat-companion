import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex gap-4 p-4 rounded-2xl max-w-[85%]",
        isUser
          ? "ml-auto bg-chat-user-bg text-chat-user-fg"
          : "mr-auto bg-chat-ai-bg text-chat-ai-fg"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser
            ? "bg-primary-foreground/20"
            : "bg-primary/10"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <Bot className="w-4 h-4 text-primary" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium mb-1 opacity-70">
          {isUser ? "You" : "AI Assistant"}
        </p>
        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </div>
      </div>
    </motion.div>
  );
};
