"use client";

import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";

export default function ProfilePage() {
  const [profileData] = useState({
    name: "Murari",
    username: "@murari_60c0c9b5",
    email: "starkrmurari@gmail.com",
    joinDate: "November 2, 2025",
    careerPath: "Employee",
    bio: "Funny Developer",
    remainingTime: "15 mins",
    usedTime: "0 s",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar
        selectedChannel="profile"
        onChannelSelect={() => {}}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1 overflow-hidden bg-white">
        {/* Mobile Header with Menu Toggle */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          {/* Header Section */}
          <div className="bg-purple-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl font-semibold">
                  M
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{profileData.name}</h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">{profileData.username}</p>
                </div>
              </div>
              <button className="px-3 py-2 sm:px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-4 sm:mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-1">Email</label>
                <p className="text-purple-600 font-medium">{profileData.email}</p>
              </div>

              {/* Join Date */}
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-1">Join Date</label>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-purple-600 font-medium">{profileData.joinDate}</p>
                </div>
              </div>

              {/* Career Path */}
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-1">Career Path</label>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <p className="text-orange-500 font-medium">{profileData.careerPath}</p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-1">Bio</label>
                <p className="text-purple-600 font-medium">{profileData.bio}</p>
              </div>
            </div>
          </div>

          {/* Talk Time Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-purple-600 mb-4 sm:mb-6">Talk Time</h2>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Circular Progress Indicator */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <svg className="transform -rotate-90 w-16 h-16 sm:w-20 sm:h-20">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="5"
                    fill="none"
                    className="sm:hidden"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#9333ea"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * 0.02}`}
                    strokeLinecap="round"
                    className="sm:hidden"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                    className="hidden sm:block"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#9333ea"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * 0.02}`}
                    strokeLinecap="round"
                    className="hidden sm:block"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-purple-600">98%</span>
                </div>
              </div>

              {/* Time Info */}
              <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-600 font-medium">Remaining Talk Time</span>
                  <span className="text-purple-600 font-semibold">{profileData.remainingTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Used</span>
                  <span className="text-gray-500 font-semibold">{profileData.usedTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

