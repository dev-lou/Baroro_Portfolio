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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "860px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          display: "flex",
          overflow: "hidden",
          minHeight: "480px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 10,
            background: "none",
            border: "1px solid #e5e7eb",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          ✕
        </button>

        {/* Left Sidebar */}
        <div style={{ width: "280px", flexShrink: 0, background: "#f9fafb", borderRight: "1px solid #e5e7eb", padding: "32px", display: "flex", flexDirection: "column" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", marginBottom: "16px", border: "2px solid #e5e7eb" }}>
            <img src="/profile.jpg" alt="Lou" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Lou Vincent Baroro</p>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#111827", marginBottom: "24px", lineHeight: 1.2 }}>Discovery Call</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#6b7280" }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>30 minutes</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#6b7280" }}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>Google Meet</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#6b7280" }}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#374151" }}>Asia/Manila</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ flex: 1, padding: "32px", background: "white" }}>
          {isConfirmed ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "16px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}>✓</div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#111827" }}>Meeting Scheduled!</h3>
              <p style={{ color: "#6b7280", fontSize: "14px" }}>A calendar invitation has been sent to your email.</p>
            </div>
          ) : (
            <>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#111827", marginBottom: "24px" }}>Select a Date & Time</h3>
              <div style={{ display: "flex", gap: "32px" }}>
                {/* Calendar */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span style={{ fontWeight: 800, color: "#111827" }}>{monthName} {year}</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button onClick={handlePrevMonth} style={{ background: "#f3f4f6", border: "none", borderRadius: "6px", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#374151" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      </button>
                      <button onClick={handleNextMonth} style={{ background: "#f3f4f6", border: "none", borderRadius: "6px", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#374151" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px", marginBottom: "8px", textAlign: "center" }}>
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
                      <div key={d} style={{ fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", padding: "4px 0" }}>{d}</div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
                    {Array.from({ length: emptySlots }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                      const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                      // Dynamic realistic availability (some weekdays)
                      const isAvail = !isWeekend && [12, 14, 15, 16, 17, 21, 22, 23, 24, 28, 29, 30].includes(day);
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          disabled={!isAvail}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                          style={{
                            aspectRatio: "1",
                            border: "none",
                            borderRadius: "50%",
                            fontSize: "13px",
                            fontWeight: isAvail ? 700 : 400,
                            cursor: isAvail ? "pointer" : "default",
                            background: isSelected ? "#111827" : isAvail ? "#f3f4f6" : "transparent",
                            color: isSelected ? "white" : isAvail ? "#111827" : "#d1d5db",
                            transition: "all 0.15s",
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div style={{ width: "180px" }}>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#374151", marginBottom: "12px" }}>{monthName.substring(0, 3)} {selectedDate}, {year}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {TIMES.map(time => {
                        const isSel = selectedTime === time;
                        return (
                          <div key={time} style={{ display: "flex", gap: "6px" }}>
                            <button
                              onClick={() => setSelectedTime(time)}
                              style={{
                                flex: 1,
                                padding: "10px 8px",
                                borderRadius: "10px",
                                border: isSel ? "2px solid #111827" : "2px solid #e5e7eb",
                                background: isSel ? "#111827" : "white",
                                color: isSel ? "white" : "#111827",
                                fontSize: "13px",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.15s",
                              }}
                            >
                              {time}
                            </button>
                            {isSel && (
                              <button
                                onClick={handleConfirm}
                                style={{
                                  padding: "10px 12px",
                                  borderRadius: "10px",
                                  border: "none",
                                  background: "#2563eb",
                                  color: "white",
                                  fontSize: "12px",
                                  fontWeight: 800,
                                  cursor: "pointer",
                                }}
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
