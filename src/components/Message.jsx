import React, { useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !message) {
      alert("Please upload a CSV and enter a message");
      return;
    }
    setUploading(true);
    // Just simulate upload process
    setTimeout(() => {
      alert("Messages processed successfully!");
      setMessages((prev) => [
        ...prev,
        { to: "All Contacts", message: message, status: "Sent" },
      ]);
      setUploading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white flex flex-col items-center px-4 py-10">
      {/* Header */}
      <header className="w-full max-w-4xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm p-6 mb-10 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          📡 College Bulk Messaging
        </h1>
      </header>

      {/* Upload Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl border border-gray-100 p-6 md:p-8 mb-8 transition-all hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          📤 Send Bulk Messages
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Student CSV / Excel File
            </label>
            <input
              type="file"
              accept=".csv, .xlsx"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message Content
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-50"
          >
            {uploading ? "Uploading & Sending..." : "Send Messages"}
          </button>
        </form>
      </div>

      {/* Recent Messages */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8 transition-all hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
          📨 Recent Message Logs
        </h2>

        {messages.length === 0 && (
          <p className="text-gray-500 text-sm">No messages found yet.</p>
        )}

        <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
          {messages.map((m, i) => (
            <div
              key={i}
              className="py-3 flex flex-col md:flex-row md:justify-between md:items-center"
            >
              <div>
                <p className="text-sm text-gray-700">
                  <strong>To:</strong> {m.to}
                </p>
                <p className="text-gray-800">{m.message}</p>
              </div>
              <p className="text-sm font-medium mt-1 md:mt-0 text-green-600">
                {m.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Message;
