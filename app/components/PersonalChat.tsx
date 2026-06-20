"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { ArrowUp, Sparkles } from "lucide-react";

export function PersonaChat() {
  const [initialMessages, setInitialMessages] = useState<
    UIMessage[] | undefined
  >(undefined);

  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("/api/chat/history")
      .then((res) => res.json())
      .then((data) => setInitialMessages(data.messages))
      .catch(() => setInitialMessages([]));
  }, []);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    messages: initialMessages,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    sendMessage({
      text: input,
    });

    setInput("");
  };

  const suggestions = [
    "Tell me about your projects",
    "What technologies do you use?",
    "Show me your system design articles",
    "What is your backend expertise?",
  ];

  return (
    <div
      className="
        mx-auto
        max-w-4xl
        overflow-hidden
        rounded-3xl
        border
        bg-background/70
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.08)]
      "
    >
      {/* Header */}
      <div className="border-b px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />

            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-30" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              AI Assistant - Persona
            </h3>

            <p className="text-xs text-muted-foreground">
              Ask about Earl Jan Do's Projects, Architecture, Blogs and Experience
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="
          flex
          min-h-[500px]
          max-h-[600px]
          flex-col
          gap-4
          overflow-y-auto
          p-6
        "
      >
        {messages.length === 0 && (
          <div className="flex flex-1 flex-col items-center justify-center">
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-violet-500
                to-blue-500
                text-white
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <h3 className="mb-2 text-lg font-semibold">
              What would you like to know?
            </h3>

            <p className="mb-6 text-center text-sm text-muted-foreground">
              Ask me anything about Earl's projects, experience,
              technologies, blogs or system design content.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    transition
                    hover:bg-muted
                  "
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => {
          const text = message.parts
            .filter((part) => part.type === "text")
            .map((part) => part.text)
            .join("");

          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={
                isUser
                  ? "flex justify-end"
                  : "flex items-start gap-3"
              }
            >
              {!isUser && (
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-500
                    to-violet-500
                    text-white
                  "
                >
                  <Sparkles className="h-4 w-4" />
                </div>
              )}

              <div
                className={
                  isUser
                    ? `
                      max-w-[80%]
                      rounded-2xl
                      rounded-br-md
                      bg-primary
                      px-4
                      py-3
                      text-primary-foreground
                    `
                    : `
                      max-w-[85%]
                      rounded-2xl
                      rounded-tl-md
                      border
                      bg-muted/40
                      px-4
                      py-3
                    `
                }
              >
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          );
        })}

        {/* Streaming Indicator */}
        {status === "streaming" && (
          <div className="flex items-center gap-2 pl-12">
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="
          border-t
          bg-background/60
          p-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            bg-background
            px-3
            py-2
          "
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Earl's projects..."
            className="
              flex-1
              border-none
              bg-transparent
              text-sm
              outline-none
            "
          />

          <button
            type="submit"
            disabled={!input.trim() || status === "streaming"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-primary
              text-white
              transition
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}