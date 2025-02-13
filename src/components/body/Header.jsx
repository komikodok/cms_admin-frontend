/* eslint-disable react/prop-types */
import { useState } from "react"
import SideBar from "../sidebar/SideBar";

const Header = ({setCurrentPage}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} setCurrentPage={setCurrentPage}/>
            <div className="bg-cyan-950 w-full h-14 flex">
                <button onClick={() => setIsOpen(!isOpen)} className="ml-auto mr-4 cursor-pointer">
                    <span className="font-bold text-cyan-100">Menu</span>
                </button>
            </div>
        </>
    )
}

export default Header