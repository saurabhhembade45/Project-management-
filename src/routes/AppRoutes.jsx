import { Routes, Route, Navigate } from "react-router-dom";

/* ===== INSIGHTS ===== */
import Overview from "../pages/More/Insights/Overview";
import PersonalInsights from "../pages/More/Insights/PersonalInsights";
import TeamComparison from "../pages/More/Insights/TeamComparison";
import Reports from "../pages/More/Reports/Reports"; 
/* ===== LOCATION ===== */
import JobSites from "../pages/More/Location/JobSites";

/* ===== PEOPLE ===== */
import Employees from "../pages/More/People/Employees";
import Teams from "../pages/More/People/Teams";
import Clients from "../pages/More/People/Clients";

/* ===== REPORTS ===== */
import Attendance from "../pages/More/Reports/AttendanceReport";
import DynamicReport from "../pages/More/Reports/DynamicReports";
import WeeklyReport from "../pages/More/Reports/WeeklyReports";

/* ===== SETTINGS ===== */
import Settings from "../pages/More/Settings/Settings";

function AppRoutes() {
  return (
    <Routes>
      {/* ===== DEFAULT ROUTE ===== */}
      <Route
        path="/"
        element={<Navigate to="/more/insights/overview" replace />}
      />

      {/* ===== INSIGHTS ===== */}
      <Route path="/more/insights/overview" element={<Overview />} />
      <Route path="/more/insights/personal" element={<PersonalInsights />} />
      <Route path="/more/insights/team" element={<TeamComparison />} />

      {/* ===== LOCATION ===== */}
      <Route path="/more/location/jobsites" element={<JobSites />} />

      {/* ===== PEOPLE ===== */}
      <Route path="/more/people/employees" element={<Employees />} />
      <Route path="/more/people/teams" element={<Teams />} />
      <Route path="/more/people/clients" element={<Clients />} />

      {/* ===== REPORTS ===== */}
     {/* ===== REPORTS (TABS) ===== */}
<Route path="/more/reports" element={<Reports />}>
  <Route path="attendance" element={<Attendance />} />
  <Route path="dynamic" element={<DynamicReport />} />
  <Route path="weekly" element={<WeeklyReport />} />
</Route>

      {/* ===== SETTINGS ===== */}
      <Route path="/more/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;