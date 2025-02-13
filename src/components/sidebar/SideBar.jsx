import { useState } from "react"
import Menu from "./Menu"

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`text-4xl fixed top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-72 transition-all duration-300`}>
        <header className="bg-slate-950 rounded-full h-14 flex justify-between mb-1">
          <div className="w-10 h-10 p-1 ml-4 my-auto">
            <img className="object-contain" src="admin.png" alt="" />
          </div>
          <h2 className="mr-auto my-auto p-1 text-cyan-100 text-xl font-bold">Admin</h2>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer mr-4 my-auto p-1 text-cyan-100 text-xl hover:scale-130 font-bold transition-all duration-200">×</button>
        </header>
        <div className="bg-slate-950 h-full rounded-3xl text-cyan-100 text-sm p-5 flex flex-col">
          <Menu title="🏠 Manajemen Kos" items={["Ruangan", "Status Ketersediaan"]}/>
          <Menu title="💰 Keuangan" items={["Tagihan & Pembayaran", "Laporan Keuangan"]}/>
          <Menu title="👤 Penyewa" items={["Daftar Penyewa", "Riwayat sewa"]}/>
          <Menu title="⚙️ Pengaturan" items={["Profil Admin"]}/>
        </div>
      </div>
    </>
  )
}

export default SideBar
