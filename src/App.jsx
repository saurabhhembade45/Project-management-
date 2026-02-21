import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* FULL WIDTH CONTENT */}
        <div
          style={{
            flex: 1,
            width: "100%",
            padding: "30px",
            backgroundColor: "#f5f7fb",
            overflowY: "auto",
          }}
        >
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;