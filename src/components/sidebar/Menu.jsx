/* eslint-disable react/prop-types */
import { useState } from "react"

const Menu = ({title, items, currentPage, setCurrentPage}) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div 
            onMouseOver={() => setOpenMenu(true)}
            onMouseOut={() => setOpenMenu(false)}
            onClick={() => setOpenMenu(prev => !prev)}
            className={`font-bold items-center m-2 cursor-pointer ${openMenu ? "h-auto" : "h-6"} overflow-hidden`}
        >
            <span className="p-2">{title}</span>
            <ol className={`flex flex-col items-center justify-center ${openMenu ? "translate-y-0" : "translate-y-full"} transition-all duration-300`}>
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className={`hover:bg-cyan-100 hover:text-slate-950 hover:opacity-80 opacity-40 w-full rounded-xl py-2 px-10 ${currentPage === item.component && "opacity-80"}`} 
                  onClick={() => setCurrentPage(item.component)}
                >
                  {item.name} {currentPage === item.component && "🐤"}
                </li>
              ))}
            </ol>
          </div>
    )
}

export default Menu