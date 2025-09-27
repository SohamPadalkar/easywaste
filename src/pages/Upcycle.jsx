// src/pages/Upcycle.jsx
import { useState } from "react";
import { Smartphone, Laptop, Monitor, Tablet, CheckCircle2 } from "lucide-react";

const items = [
    { id: 1, name: "Smartphone", icon: Smartphone },
    { id: 2, name: "Laptop", icon: Laptop },
    { id: 3, name: "Monitor", icon: Monitor },
    { id: 4, name: "Tablet", icon: Tablet },
];

export default function Upcycle() {
    const [selected, setSelected] = useState([]);

    const toggleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-display font-bold mb-6">♻️ Upcycle</h1>
            <p className="text-gray-300 mb-8">Select the items you’re recycling</p>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = selected.includes(item.id);

                    return (
                        <button
                            key={item.id}
                            onClick={() => toggleSelect(item.id)}
                            className={`flex flex-col items-center justify-center p-6 rounded-xl border transition-all shadow-lg
                ${isActive
                                    ? "bg-ecoGreen/20 border-ecoGreen text-ecoGreen shadow-[0_0_20px_#00FF66]"
                                    : "bg-black/50 border-gray-700 text-gray-300 hover:border-ecoGreen/40"
                                }`}
                        >
                            {isActive ? (
                                <CheckCircle2 size={40} className="mb-2" />
                            ) : (
                                <Icon size={40} className="mb-2" />
                            )}
                            <span className="font-medium">{item.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
