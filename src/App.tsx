import { useState } from "react";
import "./App.css";
import LoginMockup from "./components/LoginMockup";
import RegisterMockup from "./components/RegisterMockup";
import DashboardMockup from "./components/DashboardMockup";

type Screen = "login" | "register" | "dashboard";

function App() {
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <main className="app">
      <header className="mockup-header">
        <h1>Revenfy - Mockup de Baja Fidelidad</h1>

        <div className="navigation">
          <button onClick={() => setScreen("login")}>
            Inicio de sesión
          </button>

          <button onClick={() => setScreen("register")}>
            Registro
          </button>

          <button onClick={() => setScreen("dashboard")}>
            Dashboard
          </button>
        </div>
      </header>

      {screen === "login" && <LoginMockup />}

      {screen === "register" && <RegisterMockup />}

      {screen === "dashboard" && <DashboardMockup />}
    </main>
  );
}

export default App;