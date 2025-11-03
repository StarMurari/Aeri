"use client";

import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import Link from "next/link";

export default function InboxPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar
        selectedChannel="inbox"
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
          <h1 className="text-lg font-semibold text-gray-900">Inbox</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Inbox</h1>
          <div className="bg-gray-50 rounded-xl p-8 sm:p-12 text-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-base sm:text-lg">No messages yet</p>
            <p className="text-gray-500 text-sm mt-2">Your inbox is empty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

