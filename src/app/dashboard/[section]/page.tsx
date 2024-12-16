"use client"
import { useParams } from "next/navigation";
import Summary from "@/components/Summary";
import History from "@/components/History"
export default function DashboardSection() {
    const params = useParams(); // Get dynamic route parameter
    const { section } = params;

    const renderContent = () => {
        switch (section) {
            case "summary":
                return <Summary />
            case "history":
                return <History />;
            default:
                return <p>Not found. Please check the URL.</p>;
        }
    };

    return (
        <div className="">

            {renderContent()}
        </div>
    );
}
