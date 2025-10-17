import React, { useState } from "react";
import Papa from "papaparse";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle CSV Upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    if (uploadedFile && uploadedFile.type === "text/csv") {
      Papa.parse(uploadedFile, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data.map((row, index) => ({
            id: index,
            ...row,
          }));
          setTableData(data);
          setSelectedRows([]);
        },
      });
    } else {
      alert("Please upload a valid CSV file.");
      setTableData([]);
    }
  };

  // Handle single checkbox
  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(tableData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  // Send message to selected students
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a CSV file first.");
    if (!message.trim()) return alert("Please enter a message.");
    if (selectedRows.length === 0)
      return alert("Please select at least one student.");

    setUploading(true);

    const selectedContacts = tableData.filter((row) =>
      selectedRows.includes(row.id)
    );

    setTimeout(() => {
      alert("Messages sent successfully!");
      setMessages((prev) => [
        ...prev,
        {
          recipients: selectedContacts.map((c) => c.Name || c.name || "Unnamed"),
          message,
          status: "Sent",
        },
      ]);
      setUploading(false);
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      {/* Header */}
      <header className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-10 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          College Bulk Messaging
        </h1>
      </header>

      {/* Upload and Message Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl border border-gray-100 p-6 md:p-8 mb-8 transition-all hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Send Bulk Messages
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Student CSV File
            </label>
            <input
              type="file"
              accept=".csv"
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

          {/* CSV Table */}
          {tableData.length > 0 && (
            <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-md p-6 mb-8 overflow-x-auto transition-all hover:shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Uploaded CSV Preview
              </h2>
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-3 py-2 text-left">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={
                          selectedRows.length === tableData.length &&
                          tableData.length > 0
                        }
                      />
                    </th>
                    {Object.keys(tableData[0])
                      .filter((key) => key !== "id")
                      .map((key, i) => (
                        <th
                          key={i}
                          className="border px-3 py-2 text-left text-gray-700"
                        >
                          {key}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition">
                      <td className="border px-3 py-2">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleCheckboxChange(row.id)}
                        />
                      </td>
                      {Object.entries(row)
                        .filter(([key]) => key !== "id")
                        .map(([key, val], j) => (
                          <td key={j} className="border px-3 py-2">
                            {val}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-50"
          >
            {uploading ? "Sending Messages..." : "Send Messages"}
          </button>
        </form>
      </div>

      {/* Message Logs */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-100 shadow-md p-6 md:p-8 transition-all hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Message Logs
        </h2>

        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm">No messages sent yet.</p>
        ) : (
          <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
            {messages.map((m, i) => (
              <div
                key={i}
                className="py-3 flex flex-col md:flex-row md:justify-between md:items-center"
              >
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>To:</strong> {m.recipients.join(", ")}
                  </p>
                  <p className="text-gray-800">{m.message}</p>
                </div>
                <p className="text-sm font-medium mt-1 md:mt-0 text-green-600">
                  {m.status}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
