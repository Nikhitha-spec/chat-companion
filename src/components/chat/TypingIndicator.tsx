import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex gap-4 p-4 rounded-2xl max-w-[85%] mr-auto bg-chat-ai-bg text-chat-ai-fg"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      <div className="flex items-center gap-1 py-2">
        <motion.span
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        />
        <motion.span
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.span
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};
