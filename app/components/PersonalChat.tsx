"use client"

import { useChat } from "@ai-sdk/react"
import { useEffect, useState } from "react"
import { DefaultChatTransport, type UIMessage } from "ai"

export function PersonaChat() {
  const [initialMessages, setInitialMessages] = useState<UIMessage[] | undefined>(undefined)

  useEffect(() => {
    fetch("/api/chat/history")
      .then((res) => res.json())
      .then((data) => setInitialMessages(data.messages))
      .catch(() => setInitialMessages([]))
  }, [])

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: initialMessages,
  })
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto">
      <div className="flex flex-col gap-2">
        {messages.map((m) => (
          <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className="inline-block rounded-lg px-3 py-2 bg-muted">
              {m.parts.map((p) => (p.type === "text" ? p.text : null))}
            </span>
          </div>
        ))}
        {status === "streaming" && <p className="text-sm text-muted-foreground">Thinking...</p>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Earl..."
          className="flex-1 rounded-md border px-3 py-2"
        />
        <button type="submit" className="rounded-md bg-primary px-4 py-2 text-white">
          Send
        </button>
      </form>
    </div>
  )
}