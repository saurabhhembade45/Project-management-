import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 18px",
    marginBottom: "6px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    color: isActive ? "#ffffff" : "#94a3b8",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    transition: "all 0.2s ease",
  });

  return (
    <div
      style={{
        width: "260px",
        minWidth: "260px",
        height: "100vh",
        backgroundColor: "#0f172a", // Zoho dark sidebar
        color: "white",
        padding: "20px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* LOGO / TITLE */}
      <h2
        style={{
          marginBottom: "30px",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        Projects
      </h2>

      {/* SECTION LABEL */}
      <p
        style={{
          fontSize: "11px",
          color: "#64748b",
          textTransform: "uppercase",
          marginBottom: "10px",
          letterSpacing: "1px",
        }}
      >
        More
      </p>

      {/* NAVIGATION LINKS */}

      <NavLink to="/more/insights/overview" style={linkStyle}>
        Overview
      </NavLink>

      <NavLink to="/more/insights/personal" style={linkStyle}>
        Personal Insights
      </NavLink>

      <NavLink to="/more/insights/team" style={linkStyle}>
        Team Comparison
      </NavLink>

      <NavLink to="/more/location/jobsites" style={linkStyle}>
        Job Sites
      </NavLink>

      <NavLink to="/more/people/employees" style={linkStyle}>
        Employees
      </NavLink>

      <NavLink to="/more/people/teams" style={linkStyle}>
        Teams
      </NavLink>

      <NavLink to="/more/people/clients" style={linkStyle}>
        Clients
      </NavLink>

      <NavLink to="/more/reports/attendance" style={linkStyle}>
  Reports
</NavLink>
      <NavLink to="/more/settings" style={linkStyle}>
        Settings
      </NavLink>

      {/* FOOTER SPACE */}
      <div style={{ marginTop: "auto", fontSize: "12px", color: "#64748b" }}>
        © Project Dashboard
      </div>
    </div>
  );
}