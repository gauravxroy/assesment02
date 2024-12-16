"use client";

import { useState } from "react";

export default function FilterTabs() {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { id: "all", label: "All" },
        { id: "recent", label: "Recent" },
        { id: "critical", label: "Critical" },
    ];

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        if (tabId == "recent") return "recent data";
    };

    return (
        <div className="">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`px-4  text-sm font-medium ${activeTab === tab.id
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>


        </div>
    );
}
