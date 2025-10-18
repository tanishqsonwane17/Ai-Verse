import React, { useState } from "react";
import axios from "axios";

const ScriptMind = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/ai/generate", {
        message: input,
      });

      console.log("AI Response:", res.data); // ✅ Check what backend sends

      // Backend se exact key mil rahi hai?
      const botText =
        res.data.reply ||
         res.data.aiMessage ||
        res.data.response ||
        res.data.text ||
        "No response found.";

      const botReply = { sender: "bot", text: botText };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error(err);
      const errorMsg = { sender: "bot", text: "Error fetching response!" };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setLoading(false);
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">💬 Strict AI Chat</h1>

      <div className="flex flex-col w-full max-w-md bg-gray-800 rounded-2xl p-4 overflow-y-auto flex-grow">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`my-2 p-3 rounded-xl max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-600 self-end"
                : "bg-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-md mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-3 bg-gray-700 rounded-l-xl outline-none"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 px-4 rounded-r-xl font-semibold disabled:bg-gray-600"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ScriptMind;
