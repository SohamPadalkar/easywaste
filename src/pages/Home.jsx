// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Leaf, Recycle } from "lucide-react";

export default function Home() {
    return (
        <div className="relative flex flex-col items-center justify-center h-[80vh] text-center overflow-hidden">
            {/* Floating Background Icons */}
            <motion.div
                className="absolute top-16 left-10 text-ecoGreen/30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <Leaf size={60} />
            </motion.div>

            <motion.div
                className="absolute bottom-20 right-12 text-ecoGreen/30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <Recycle size={80} />
            </motion.div>

            {/* Main Title */}
            <motion.h1
                className="text-8xl font-display font-extrabold text-ecoGreen drop-shadow-[0_0_25px_#00FF66]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="font-display text-8xl text-ecoGreen">Eco</h1>
            </motion.h1>

            <motion.p
                className="text-4xl font-display text-gray-200 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <p className="font-body text-gray-300">Is the new</p>
            </motion.p>

            <motion.h2
                className="text-6xl font-display font-bold flex items-center mt-2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                Drip <span className="ml-2 animate-bounce">🌱</span>
            </motion.h2>
        </div>
    );
}
