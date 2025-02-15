/* eslint-disable react/prop-types */
const TombolSideBar = ({ isOpen, setIsOpen }) => {
    return (
      <button 
        onClick={setIsOpen} 
        className={`group fixed bottom-5 left-5 h-14 w-14 flex items-center justify-center 
        cursor-pointer transition-all duration-900 hover:scale-110 active:scale-90 z-50
        ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      >
        <span className="text-3xl group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-200 ease-out">
          {isOpen ? "📝" : "📄"}
        </span>
      </button>
    );
  };
  
  export default TombolSideBar;
  