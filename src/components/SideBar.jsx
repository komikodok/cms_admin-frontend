const SideBar = () => {
  function handleClick() {
    console.log("Button click");
  }
  return (
    <>
      <div className="text-4xl h-full w-96 max-md:w-0 max-md:-translate-x-20 transition-all duration-300">
        <header className="bg-slate-950 h-14 flex">
          <div className="w-10 h-10 p-1 ml-2 my-auto">
            <img className="object-contain" src="..\public\admin.png" alt="" />
          </div>
          <h2 className="text-cyan-100 text-sm mt-3 ml-2">Admin System</h2>
        </header>
        <div className="bg-slate-950 h-full text-cyan-100 text-sm p-3">
          <button onClick={handleClick}>
            <strong href="#" className="">Menu</strong>
          </button>
          <button onClick={handleClick}>
            <strong href="#" className="">Menu</strong>
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBar
