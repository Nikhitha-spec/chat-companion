import { motion } from "framer-motion";
import { MessageSquare, Zap, Brain, Sparkles } from "lucide-react";

export const EmptyState = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat naturally like you would with a friend",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Get real-time streaming responses",
    },
    {
      icon: Brain,
      title: "Intelligent Answers",
      description: "Powered by advanced AI technology",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full px-4 py-12"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Welcome to AI Chat
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Start a conversation with your AI assistant. Ask anything and get intelligent responses instantly.
      </p>
      <div className="grid gap-4 w-full max-w-md">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
