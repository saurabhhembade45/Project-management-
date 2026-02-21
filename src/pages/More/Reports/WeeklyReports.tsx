import React from "react";

const WeeklyReport: React.FC = () => {
  const weeklyStats = [
    { label: "Tasks Completed", value: 124 },
    { label: "New Issues", value: 18 },
    { label: "Meetings Held", value: 9 },
    { label: "Hours Logged", value: 312 },
  ];

  return (
    <div
      style={{
        padding: "10px 0",
        color: "#111827", // ✅ force readable text globally
      }}
    >
      {/* HEADER */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "20px",
        }}
      >
        Weekly Summary
      </h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "16px",
        }}
      >
        {weeklyStats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: "#FFFFFF", // ✅ white card (better contrast)
              padding: "22px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)", // ✅ Zoho style shadow
            }}
          >
            {/* LABEL */}
            <p
              style={{
                color: "#374151",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </p>

            {/* VALUE (MAIN FIX) */}
            <h3
              style={{
                fontSize: "30px",
                marginTop: "10px",
                fontWeight: 700,
                color: "#111827", // ✅ FIX — numbers now visible
              }}
            >
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyReport;