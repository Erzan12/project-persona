"use client";

import { useState } from "react";

export default function ChatHome() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    setAnswer(data.answer);
  }

  return (
    <div className="p-10">
      <textarea
        className="border p-2"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={send}
        className="bg-black text-white p-2"
      >
        Ask
      </button>

      <div className="mt-5">
        {answer}
      </div>
    </div>
  );
}