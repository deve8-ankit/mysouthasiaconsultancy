import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppChatBox() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919316305258";

  const handleSend = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // opens WhatsApp WITHOUT page reload
    window.open(url, "_blank");

    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[99999] flex flex-col items-end">

      {/* CHAT WINDOW */}
      {open && (
        <div className="w-72 bg-white shadow-2xl rounded-xl overflow-hidden mb-3 border animate-in fade-in slide-in-from-bottom-5">

          {/* HEADER */}
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaWhatsapp />
              <span className="font-semibold text-sm">Chat with us</span>
            </div>

            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* BODY */}
          <div className="p-3 text-sm text-gray-600">
            👋 Hi! How can we help you?
          </div>

          {/* INPUT */}
          <div className="p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full border rounded-lg p-2 text-sm outline-none resize-none h-20"
            />
          </div>

          {/* SEND BUTTON */}
          <div className="p-3 pt-0">
            <button
              onClick={handleSend}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Send Message
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-pulse"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>
    </div>
  );
}