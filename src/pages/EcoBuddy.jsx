// src/pages/EcoBuddy.jsx
import { Award, Leaf, Star } from "lucide-react";

export default function EcoBuddy() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] space-y-6">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-ecoGreen/20 flex items-center justify-center border-4 border-ecoGreen shadow-[0_0_20px_#00FF66]">
                <Leaf size={64} className="text-ecoGreen" />
            </div>

            {/* Name */}
            <h1 className="text-3xl font-display font-bold">Eco Buddy</h1>
            <p className="text-gray-300">Your sustainability companion 🌍</p>

            {/* Achievements Card */}
            <div className="bg-black/50 backdrop-blur-lg p-6 rounded-2xl border border-ecoGreen/30 shadow-lg w-80">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="text-ecoGreen" /> Achievements
                </h2>
                <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center gap-3">
                        <Star className="text-yellow-400" /> Recycled 50+ items
                    </li>
                    <li className="flex items-center gap-3">
                        <Star className="text-yellow-400" /> Saved 20kg CO₂
                    </li>
                    <li className="flex items-center gap-3">
                        <Star className="text-yellow-400" /> Earned 5 rewards
                    </li>
                </ul>
            </div>
        </div>
    );
}
