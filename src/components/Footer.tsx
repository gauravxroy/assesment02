
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <>

            <footer className="bg-white  dark:bg-gray-800 text-gray-900 dark:text-gray-200 shadow-md   ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                    <p className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 "> developed by @gaurav </p>
                    <div className="flex justify-center ">

                        <ul className="flex gap-4 flex-wrap mt-2 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6"><FaGithub size={24} /></a>
                            </li>

                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6"><FaLinkedin size={24} /></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer