/* eslint-disable react/prop-types */
import { useState } from "react"
import Menu from "./Menu"
import TombolSideBar from "./TombolSideBar"

const SideBar = ({currentPage, setCurrentPage}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <TombolSideBar isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)}/>
      <div className={`text-4xl fixed top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-66 transition-all duration-300 ease-out z-50`}>
        <header className="bg-slate-950 rounded-r-2xl h-14 flex justify-between mb-1">
          <div className="w-10 h-10 p-1 ml-4 my-auto">
            <img className="object-contain" src="admin.png" alt="" />
          </div>
          <h2 className="mr-auto my-auto p-1 text-cyan-100 text-xl font-bold">Admin</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer mr-4 my-auto p-1 text-cyan-100 text-xl hover:scale-130 font-bold transition-all duration-200">×</button>
        </header>
        <div className="bg-slate-950 h-full rounded-r-2xl text-cyan-100 text-sm p-5 flex flex-col">
          <Menu title="🏠 Manajemen Kos" items={[{component: "Ruangan", name: "Ruangan"}, {component: "StatusKetersediaan", name: "Status Ruangan"}]} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <Menu title="👤 Penyewa" items={[{component: "DaftarPenyewa", name: "Daftar Penyewa"}, {component: "RiwayatSewa", name: "Riwayat Sewa"}]} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <Menu title="💰 Keuangan" items={[{component: "Pembayaran", name: "Tagihan & Pembayaran"}, {component: "LaporanKeuangan", name: "Laporan Keuangan"}]} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          {/* <Menu title="⚙️ Pengaturan" items={["ProfilAdmin"]}/> */}
        </div>
      </div>
    </>
  )
}

export default SideBar
