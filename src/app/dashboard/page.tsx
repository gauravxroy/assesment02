import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/Barchart";
export default function DashboardLayout() {


    return (
        <>
            <Navbar />
            <main className=" bg-slate-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

                <div className="col-span-1 sm:col-span-2 md:col-span-2">

                    <PieChart />
                </div>


                <div className="col-span-1">
                    <BarChart />

                </div>


                <div className="col-span-1 ">
                    <BarChart />
                </div>


                <div className="col-span-1 sm:col-span-2">
                    <PieChart />
                </div>
            </main>


            <Footer />
        </>
    );
}
