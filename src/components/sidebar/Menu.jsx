/* eslint-disable react/prop-types */
import { useState } from "react"

const DropDownMenu = ({title, items, setCurrentPage}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
            className={`font-bold items-center m-2 cursor-pointer ${isOpen ? "h-auto" : "h-6"} overflow-hidden`}>
            <span className="p-2">{title}</span>
            <ol className={`flex flex-col items-center justify-center ${isOpen ? "translate-y-0" : "translate-y-full"} transition-all duration-300`}>
              {items.map((item, index) => (
                <li key={index} className="hover:bg-cyan-100 hover:text-slate-950 opacity-60 w-full rounded-xl py-2 px-10" onClick={() => setCurrentPage(item)}>{item}</li>
              ))}
            </ol>
          </div>
    )
}

export default DropDownMenu