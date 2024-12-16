"use client";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "../components/Loader"
import useStore from "@/store/store"
import { useEffect } from "react";
export default function History() {

    const { data, loading, fetchData } = useStore();
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000)
    }, [fetchData]);

    if (loading) {
        return < Loader />;
    }
    return (
        <>
            <Navbar />
            <main className=" bg-gray-900">
                <div className="p-6 space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">History</h1>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data.history.map((item: { date: string; event: string; user: string; details: string; status: string }, index: number) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 py-4 first:pt-0 last:pb-0"
                            >
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {item.date}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.event}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.user}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.details}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
