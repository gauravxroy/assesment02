"use client";

import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdSubscriptions, MdOutlineAttachMoney, MdFeedback } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { BadgePlus, Eye } from "lucide-react"

export default function Summary() {
    const summary = [
        { label: "Total Users", value: "1,234", icon: <MdSubscriptions /> },
        { label: "Monthly Revenue", value: "$12,345", icon: <MdOutlineAttachMoney /> },
        { label: "New Signups", value: "56", icon: <FaArrowTrendUp /> },
        { label: "Feedback Received", value: "89", icon: <MdFeedback /> },
        { label: "Videos", value: "89", icon: <BiSolidVideos /> },
        { label: "Verified On", value: "22-04-2021", icon: <BadgePlus /> },
        { label: "Life Time Views", value: "22-04-2021", icon: <Eye /> },
        { label: "Monthly Views", value: "22-04-2021", icon: <FaArrowTrendUp /> },

    ];


    return (
        <>
            <Navbar />
            <main className='h-screen bg-gray-900 '>


                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
                    {summary.map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-6 rounded-lg shadow bg-white dark:bg-gray-800"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">{stat.icon}</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {stat.label}
                                    </p>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
            <Footer />
        </>
    )
}

