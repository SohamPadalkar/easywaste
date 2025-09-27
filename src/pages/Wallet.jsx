// src/pages/Wallet.jsx
import bigBasketLogo from "../assets/bigbasket.svg";
import swiggyLogo from "../assets/swiggy.svg";
import zomatoLogo from "../assets/zomato.svg";

const vouchers = [
    { id: 1, brand: "BigBasket", logo: bigBasketLogo, value: "₹500" },
    { id: 2, brand: "Swiggy", logo: swiggyLogo, value: "₹300" },
    { id: 3, brand: "Zomato", logo: zomatoLogo, value: "₹250" },
];

export default function Wallet() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-6">
            <h1 className="font-display text-4xl text-ecoGreen mb-10">Your Wallet</h1>

            <div className="grid gap-6 w-full max-w-md">
                {vouchers.map((voucher) => (
                    <div
                        key={voucher.id}
                        className="flex items-center justify-between bg-gray-900 rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {/* Logo + Brand */}
                        <div className="flex items-center gap-4">
                            <img src={voucher.logo} alt={voucher.brand} className="h-10 w-10 object-contain" />
                            <span className="font-body text-xl">{voucher.brand} Voucher</span>
                        </div>

                        {/* Value */}
                        <span className="font-display text-ecoGreen text-lg font-bold">
                            {voucher.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
