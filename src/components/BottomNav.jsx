// src/components/BottomNav.jsx
import { Home, Trophy, Recycle, Wallet, Share2 } from "lucide-react";

const tabs = [
    { id: 1, icon: <Home size={22} />, label: "Home" },
    { id: 2, icon: <Trophy size={22} />, label: "EcoBuddy" },
    { id: 3, icon: <Recycle size={22} />, label: "Upcycle" },
    { id: 4, icon: <Wallet size={22} />, label: "Wallet" },
    { id: 5, icon: <Share2 size={22} />, label: "HandOff" },
];

export default function BottomNav({ active, setActive }) {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-ecoGreen/50">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`flex flex-col items-center px-4 py-2 text-xs transition 
          ${active === tab.id ? "text-ecoGreen" : "text-gray-400"}`}
                >
                    {tab.icon}
                    <span className="mt-1">{tab.label}</span>
                </button>
            ))}
        </div>
    );
}
