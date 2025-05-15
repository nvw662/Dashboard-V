"use client";


import React, { useState } from 'react';

import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar, ComposedChart, Area 
} from 'recharts';



const websitePerformanceData = [
  { name: 'Jan', uptime: 99.98, responseTime: 245, errors: 3 },
  { name: 'Feb', uptime: 99.99, responseTime: 230, errors: 2 },
  { name: 'Mar', uptime: 99.97, responseTime: 220, errors: 4 },
  { name: 'Apr', uptime: 99.995, responseTime: 235, errors: 1 },
  { name: 'May', uptime: 99.99, responseTime: 215, errors: 2 },
  { name: 'Jun', uptime: 99.985, responseTime: 225, errors: 3 }
];

export default function OhDearCharts() {
  const [activeChart, setActiveChart] = useState('performance');

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="space-y-6">
        {/* Chart Navigation */}
        <div className="flex justify-center space-x-4 mb-4">
          <button 
            onClick={() => setActiveChart('performance')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeChart === 'performance' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Performance
          </button>
          <button 
            onClick={() => setActiveChart('uptime')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeChart === 'uptime' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Uptime & Errors
          </button>
        </div>

        {/* Performance Chart */}
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === 'performance' ? (
              <ComposedChart data={websitePerformanceData} className="bg-gray-900 p-4 rounded-lg">
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis yAxisId="left" stroke="#6B7280" />
                <YAxis yAxisId="right" orientation="right" stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    borderColor: '#374151',
                    color: '#F3F4F6'
                  }} 
                />
                <Area 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="uptime" 
                  stroke="#10B981" 
                  fill="rgba(16, 185, 129, 0.2)" 
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="responseTime" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                />
              </ComposedChart>
            ) : (
              <BarChart data={websitePerformanceData} className="bg-gray-900 p-4 rounded-lg">
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    borderColor: '#374151',
                    color: '#F3F4F6'
                  }} 
                />
                <Bar dataKey="uptime" fill="#10B981" />
                <Bar dataKey="errors" fill="#EF4444" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}