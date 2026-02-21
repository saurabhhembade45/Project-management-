import { Routes, Route } from "react-router-dom";

<Routes>

  {/* ================= MORE SECTION ROUTES ================= */}

  {/* Insights Pages */}
  <Route path="/more/insights/overview" element={<Overview />} />
  <Route path="/more/insights/personal" element={<PersonalInsights />} />
  <Route path="/more/insights/team" element={<TeamComparison />} />

  {/* Location Pages */}
  <Route path="/more/location/jobsites" element={<JobSites />} />

  {/* People Pages */}
  <Route path="/more/people/employees" element={<Employees />} />
  <Route path="/more/people/teams" element={<Teams />} />
  <Route path="/more/people/clients" element={<Clients />} />

  {/* Reports Pages */}
  <Route path="/more/reports/attendance" element={<Attendance />} />

  {/* Settings Page */}
  <Route path="/more/settings" element={<Settings />} />

</Routes>