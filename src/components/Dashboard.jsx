import React from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const messageHistory = [
    { date: "Apr 20", Successful: 900, Failed: 50 },
    { date: "Apr 21", Successful: 10000, Failed: 45 },
    { date: "Apr 22", Successful: 29000, Failed: 40 },
    { date: "Apr 23", Successful: 3100, Failed: 60 },
    { date: "Apr 24", Successful: 3500, Failed: 80 },
  ];

  const pieData = [
    { name: "Text", value: 80 },
    { name: "Media", value: 20 },
  ];

  const COLORS = ["#22c55e", "#3b82f6"];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-8 mb-8 text-center">
        <div>
          <h3 className="text-gray-500 mb-1">Successful Messages</h3>
          <p className="text-4xl font-bold text-green-500">12,400</p>
        </div>
        <div>
          <h3 className="text-gray-500 mb-1">Student Replies</h3>
          <p className="text-4xl font-bold text-blue-500">2,750</p>
        </div>
        <div>
          <h3 className="text-gray-500 mb-1">Delivered</h3>
          <p className="text-4xl font-bold text-gray-700">99.78%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Line Chart */}
        <div>
          <h3 className="font-semibold mb-3">Message History</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={messageHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Successful" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="Failed" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div>
          <h3 className="font-semibold mb-3">Messages by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
