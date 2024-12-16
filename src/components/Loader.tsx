// SkeletonLoader.tsx

import Footer from "./Footer";
import Navbar from "./Navbar";

const SkeletonLoader = () => {
    return (
        <>

            <Navbar />
            <div className=" h-screen  flex justify-center items-center space-y-4 animate-pulse">

                <h1 className="text-6xl text-center font-bold">Loading Page....</h1>


            </div>

            <Footer /></>
    );
};

export default SkeletonLoader;
