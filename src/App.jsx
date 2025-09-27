// src/App.jsx
import { useState } from "react";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import EcoBuddy from "./pages/EcoBuddy";
import Upcycle from "./pages/Upcycle";
import Wallet from "./pages/Wallet";
import HandOff from "./pages/HandOff";

export default function App() {
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-black to-black text-white font-body">
      <div className="p-6">
        {active === 1 && <Home />}
        {active === 2 && <EcoBuddy />}
        {active === 3 && <Upcycle />}
        {active === 4 && <Wallet />}
        {active === 5 && <HandOff />}
      </div>

      <BottomNav active={active} setActive={setActive} />
    </div>
  );
}
