import { Bot, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="font-semibold text-foreground">AI Assistant</h1>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Powered by Gemini
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-muted-foreground">Online</span>
      </div>
    </header>
  );
};
