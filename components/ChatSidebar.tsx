"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ChatSidebarProps {
  selectedChannel: string;
  onChannelSelect: (channelId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ChatSidebar({
  selectedChannel,
  onChannelSelect,
  isOpen = true,
  onClose,
}: ChatSidebarProps) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-white border-r border-gray-200 
        flex flex-col h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* AERI Logo and Branding */}
      <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" onClick={onClose}>
          {/* AERI Logo - interconnected purple circles */}
          <div className="relative w-10 h-10">
            <div className="absolute top-0 left-0 w-6 h-6 bg-purple-600 rounded-full opacity-80"></div>
            <div className="absolute top-2 left-4 w-6 h-6 bg-purple-600 rounded-full opacity-80"></div>
            <div className="absolute top-4 left-2 w-6 h-6 bg-purple-600 rounded-full opacity-80"></div>
          </div>
          <span className="text-xl sm:text-2xl font-semibold text-gray-900">AERI</span>
        </Link>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Close sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Workspace Section */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 sm:py-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-1">
          WORKSPACE
        </h3>
        
        <div className="space-y-2">
          {/* Meet Aeri - Active State (Purple Pill) */}
          <Link
            href="/p/talk"
            onClick={onClose}
            className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-full text-left transition-colors ${
              pathname === "/p/talk"
                ? "bg-purple-600 text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-5 h-5 flex items-center justify-center ${
                pathname === "/p/talk" ? "text-white" : "text-gray-600"
              }`}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className="font-medium">Meet Aeri</span>
            </div>
            {pathname === "/p/talk" && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </Link>

          {/* Inbox */}
          <Link
            href="/p/inbox"
            onClick={onClose}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-left transition-colors ${
              pathname === "/p/inbox"
                ? "bg-purple-50 text-purple-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Inbox</span>
          </Link>

          {/* Profile */}
          <Link
            href="/p/profile"
            onClick={onClose}
            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-left transition-colors ${
              pathname === "/p/profile"
                ? "bg-purple-50 text-purple-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">Profile</span>
          </Link>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            QUICK ACTIONS
          </h3>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-1">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Get assistance with Aeri features and setup
            </p>
            <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-3 sm:p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-sm sm:text-base">
              M
            </div>
            <span className="font-medium text-gray-900 text-sm sm:text-base">Murari</span>
          </div>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
