"use client";

import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatMessages from "@/components/ChatMessages";
import MessageInput from "@/components/MessageInput";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
}

export default function TalkPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey Murari, nice to meet you! I'm Aeri, think of me as your networking sidekick.",
      sender: "Aeri",
      timestamp: new Date(Date.now() - 86400000 - 3600000),
      isOwn: false,
    },
    {
      id: "2",
      text: "I'm here to help you connect with the right people and open up new opportunities.",
      sender: "Aeri",
      timestamp: new Date(Date.now() - 86400000 - 3300000),
      isOwn: false,
    },
    {
      id: "3",
      text: "Anytime you want to chat or need a hand, just ping me. I'm always around!",
      sender: "Aeri",
      timestamp: new Date(Date.now() - 86400000 - 3000000),
      isOwn: false,
    },
    {
      id: "4",
      text: "hey murari :) how's your day going so far? still surviving the developer life with a bit of humor, i hope?",
      sender: "Aeri",
      timestamp: new Date(Date.now() - 86400000 - 1800000),
      isOwn: false,
    },
    {
      id: "5",
      text: "haha nice, that's the spirit! so what are you working on these days, murari? any fun projects or just the usual bug-hunting marathon?",
      sender: "Aeri",
      timestamp: new Date(Date.now() - 86400000 - 900000),
      isOwn: false,
    },
    {
      id: "6",
      text: "Hello aeri",
      sender: "You",
      timestamp: new Date(Date.now() - 7200000),
      isOwn: true,
    },
    {
      id: "7",
      text: "Yes",
      sender: "You",
      timestamp: new Date(Date.now() - 6000000),
      isOwn: true,
    },
    {
      id: "8",
      text: "Yes, developing a cab booking website and dashboard using next.js",
      sender: "You",
      timestamp: new Date(Date.now() - 5400000),
      isOwn: true,
    },
  ]);

  const [selectedChannel, setSelectedChannel] = useState("meet-aeri");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "You",
      timestamp: new Date(),
      isOwn: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-white">
      <ChatSidebar
        selectedChannel={selectedChannel}
        onChannelSelect={setSelectedChannel}
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
          <h1 className="text-lg font-semibold text-gray-900">Meet Aeri</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
        <div className="flex-1 overflow-y-auto">
          <ChatMessages messages={messages} />
        </div>
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
