import React from "react";
import DashCard from "../../Components/Card/DashCard";
import { LiaFirstOrder } from "react-icons/lia";
import Bid from '../../DataStore/Bids.json'

export default function Dashboard() {
    const blength = Bid.length;

    const dashCard = [
        {
            icon: <LiaFirstOrder />,
            text: "Total Order",
            number: 123123,
        },
        {
            icon: <LiaFirstOrder />,
            text: "Bids",
            number: blength,
        },
        {
            icon: <LiaFirstOrder />,
            text: "Visitors",
            number: 98765,
        },
        {
            icon: <LiaFirstOrder />,
            text: "New Customers",
            number: 5432,
        }
    ];

    return (
        <div className="flex gap-1 w-full h-screen bg-gray-100">
            {/* Main Dashboard */}
            <main className="flex-1 p-1 overflow-y-auto">
                {/* Welcome Message */}
                <div className="bg-white p-1 mb-1 rounded shadow text-[var(--var-red-col)] font-semibold text-sm sm:text-base">
                    Welcome !!! Vansh
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {dashCard.map((e, index) => (
                        <DashCard
                            key={index}
                            icon={e.icon}
                            text={e.text}
                            number={e.number}
                        />
                    ))}
                </div>
                {/* Select Chart */}
                <div className="flex mt-2 flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 w-full p-2 bg-[var(--var-red-col)] text-white rounded-md shadow-md">
                    <span className="text-base font-medium">Select the Chart</span>

                    <select
                        className="w-full sm:w-auto px-3 py-2 bg-white text-black rounded-md border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                    >
                        <option value="">Total Order</option>
                        <option value="">Bids</option>
                        <option value="">Visitors</option>
                        <option value="">New Customers</option>
                    </select>
                </div>

            </main>


        </div>
    );
}
