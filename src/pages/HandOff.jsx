// src/pages/HandOff.jsx
export default function HandOff() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
            <h1 className="font-display text-4xl text-ecoGreen mb-8">
                Hand Off Your Old Electronics
            </h1>

            {/* Options Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                {["Phone", "TV", "AC", "Washing Machine", "Laptop", "Fridge"].map(
                    (item) => (
                        <button
                            key={item}
                            className="px-6 py-4 rounded-xl bg-gray-800 hover:bg-ecoGreen hover:text-black font-body font-medium transition"
                        >
                            {item}
                        </button>
                    )
                )}
            </div>

            {/* Action Button */}
            <button className="px-8 py-3 rounded-2xl bg-ecoGreen text-black font-display text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                Schedule Pickup
            </button>
        </div>
    );
}
