import React from "react";

const DynamicReport: React.FC = () => {
  const data = [
    { project: "Website Redesign", progress: 78, team: "Design" },
    { project: "Mobile App", progress: 54, team: "Development" },
    { project: "API Platform", progress: 92, team: "Backend" },
    { project: "Analytics Dashboard", progress: 35, team: "Data Team" },
  ];

  return (
    <div>
      <h2
  style={{
    fontSize: "20px",
    fontWeight: 700,
    color: "#111827", // ✅ DARK BLACK TEXT
    marginBottom: "20px",
  }}
>
  Project Performance Report
</h2>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "16px",
            padding: "16px",
            borderRadius: "10px",
            background: "#F9FAFB",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{item.project}</strong>
            <span>{item.progress}%</span>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              height: "8px",
              background: "#E5E7EB",
              borderRadius: "6px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                width: `${item.progress}%`,
                height: "100%",
                background: "#2563EB",
                borderRadius: "6px",
              }}
            />
          </div>

          <p style={{ marginTop: "8px", color: "#6B7280" }}>
            Team: {item.team}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DynamicReport;