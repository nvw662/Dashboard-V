"use client";
import React from 'react';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow h-40">
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow h-40">
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow h-40">

        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow md:col-span-2 lg:col-span-1 h-40">
        </div>
        

        <div className="bg-gray-800 p-6 rounded-lg shadow h-40">
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow h-40">
        </div>
      </div>
    </div>
  );
}