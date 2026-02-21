import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const tabStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: "10px 18px",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: "8px",
  color: isActive ? "#ffffff" : "#1F2937",
  backgroundColor: isActive ? "#2563eb" : "#E5E7EB",
  transition: "0.2s",
});

const Reports: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      
      {/* ✅ HEADER FIXED */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        Reports
      </h1>

      {/* ===== TABS ===== */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <NavLink to="attendance" style={tabStyle}>
          Attendance
        </NavLink>

        <NavLink to="dynamic" style={tabStyle}>
          Dynamic Report
        </NavLink>

        <NavLink to="weekly" style={tabStyle}>
          Weekly Report
        </NavLink>
      </div>

      {/* CONTENT AREA */}
      <div
        style={{
          background: "#F3F4F6",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          minHeight: "70vh",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Reports;