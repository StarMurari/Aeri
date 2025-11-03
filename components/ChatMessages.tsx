"use client";

import { useEffect, useRef } from "react";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
        year: date.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
      });
    }
  };

  let lastDate: string | null = null;
  let showDateDivider = false;

  return (
    <div className="flex-1 overflow-y-auto bg-white px-3 sm:px-4 md:px-6 py-3 sm:py-4">
      {messages.map((message, index) => {
        const messageDate = formatDate(message.timestamp);
        showDateDivider = messageDate !== lastDate && index > 0;
        if (showDateDivider) lastDate = messageDate;

        return (
          <div key={message.id}>
            {/* Date Divider */}
            {showDateDivider && (
              <div className="flex justify-center my-6">
                <span className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  {messageDate}
                </span>
              </div>
            )}
            {index === 0 && (
              <div className="flex justify-center my-6">
                <span className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  {formatDate(message.timestamp)}
                </span>
              </div>
            )}

            {/* Message */}
            <div
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"} mb-4`}
            >
              {!message.isOwn ? (
                // Aeri's messages (left side, light gray)
                <div className="flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-[70%]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 mt-1 relative">
                    {/* AERI Logo - small interconnected purple circles */}
                    <div className="absolute top-0 left-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-purple-600 rounded-full opacity-80"></div>
                    <div className="absolute top-1 left-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-purple-600 rounded-full opacity-80"></div>
                    <div className="absolute top-2 left-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-purple-600 rounded-full opacity-80"></div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 sm:px-4 sm:py-2.5">
                      <p className="text-sm sm:text-base text-gray-900 whitespace-pre-wrap break-words">
                        {message.text}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // User's messages (right side, purple)
                <div className="flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-[70%] flex-row-reverse ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-600 rounded-2xl rounded-tr-sm px-3 py-2 sm:px-4 sm:py-2.5">
                      <p className="text-sm sm:text-base text-white whitespace-pre-wrap break-words">
                        {message.text}
                      </p>
                    </div>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs sm:text-sm font-medium text-gray-600">Y</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
