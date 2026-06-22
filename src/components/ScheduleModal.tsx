"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function ModalContent({ onClose }: { onClose: () => void }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)); // June 2026
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setIsConfirmed(false);
        setSelectedDate(null);
        setSelectedTime(null);
        setCurrentDate(new Date(2026, 5, 1)); // Reset back to June 2026 on close
      }, 300);
    }, 2500);
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  // JS getDay(): Sun=0, Mon=1...
  // We want Mon=0... Sun=6
  const emptySlots = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const TIMES = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[860px] bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[480px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-md"
        >
          ✕
        </button>

        {/* Left Sidebar */}
        <div className="w-full md:w-[280px] shrink-0 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-6 md:p-8 flex flex-col">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border-2 border-gray-200 hidden md:block">
            <img src="/profile.jpg" alt="Lou" className="w-full h-full object-cover" />
          </div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Lou Vincent Baroro</p>
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-tight">Discovery Call</h2>

          <div className="flex flex-col gap-3 mt-auto">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span className="text-sm font-semibold text-gray-700">30 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              <span className="text-sm font-semibold text-gray-700">Google Meet</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span className="text-sm font-semibold text-gray-700">Asia/Manila</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6 md:p-8 bg-white overflow-y-auto">
          {isConfirmed ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12 md:py-0">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">✓</div>
              <h3 className="text-2xl font-black text-gray-900">Meeting Scheduled!</h3>
              <p className="text-gray-500 text-sm">A calendar invitation has been sent to your email.</p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-extrabold text-gray-900 mb-6">Select a Date & Time</h3>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Calendar */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-extrabold text-gray-900">{monthName} {year}</span>
                    <div className="flex gap-2">
                      <button onClick={handlePrevMonth} className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      </button>
                      <button onClick={handleNextMonth} className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
                      <div key={d} className="text-[11px] font-bold text-gray-400 uppercase py-1">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: emptySlots }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                      const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                      const isAvail = !isWeekend && [12, 14, 15, 16, 17, 21, 22, 23, 24, 28, 29, 30].includes(day);
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          disabled={!isAvail}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                          className={`
                            aspect-square rounded-full text-sm transition-all duration-150 flex items-center justify-center
                            ${isSelected ? "bg-gray-900 text-white font-bold" : ""}
                            ${!isSelected && isAvail ? "bg-gray-100 text-gray-900 font-bold hover:bg-gray-200" : ""}
                            ${!isAvail ? "text-gray-300 font-normal cursor-default" : ""}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div className="w-full md:w-[180px] mt-6 md:mt-0">
                    <p className="text-sm font-bold text-gray-700 mb-3">{monthName.substring(0, 3)} {selectedDate}, {year}</p>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2">
                      {TIMES.map(time => {
                        const isSel = selectedTime === time;
                        return (
                          <div key={time} className={`flex ${isSel ? 'col-span-2' : ''} gap-1.5`}>
                            <button
                              onClick={() => setSelectedTime(time)}
                              className={`
                                flex-1 px-2 py-2 rounded-lg border-2 text-sm font-bold transition-all duration-150
                                ${isSel ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"}
                              `}
                            >
                              {time}
                            </button>
                            {isSel && (
                              <button
                                onClick={handleConfirm}
                                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold transition-colors"
                              >
                                Next
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ScheduleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(<ModalContent onClose={onClose} />, document.body);
}
