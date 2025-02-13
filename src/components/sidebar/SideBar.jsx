/* eslint-disable react/prop-types */
import Menu from "./Menu"

const SideBar = ({isOpen, setIsOpen, setCurrentPage}) => {
  return (
    <div className={`text-4xl fixed top-0 left-0 ${isOpen ? "translate-y-0" : "-translate-y-full"} w-72 transition-all duration-300 ease-out`}>
      <header className="bg-slate-950 rounded-3xl h-14 flex justify-between mb-1">
        <div className="w-10 h-10 p-1 ml-4 my-auto">
          <img className="object-contain" src="admin.png" alt="" />
        </div>
        <h2 className="mr-auto my-auto p-1 text-cyan-100 text-xl font-bold">Admin</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer mr-4 my-auto p-1 text-cyan-100 text-xl hover:scale-130 font-bold transition-all duration-200">×</button>
      </header>
      <div className="bg-slate-950 h-full rounded-3xl text-cyan-100 text-sm p-5 flex flex-col">
        <Menu title="👤 Penyewa" items={["DaftarPenyewa", "RiwayatSewa"]} setCurrentPage={setCurrentPage}/>
        <Menu title="🏠 Manajemen Kos" items={["Ruangan", "StatusKetersediaan"]} setCurrentPage={setCurrentPage}/>
        <Menu title="💰 Keuangan" items={["Pembayaran", "LaporanKeuangan"]} setCurrentPage={setCurrentPage}/>
        {/* <Menu title="⚙️ Pengaturan" items={["ProfilAdmin"]}/> */}
      </div>
    </div>
  )
}

export default SideBar
