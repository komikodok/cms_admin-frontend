import { useState } from "react"
import BuatRuangan from "../forms/BuatRuangan";

const StatusKetersediaan = () => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <>
            <div className="">
                Status Ketersediaan Ruangan
            </div>
            <button onClick={() => setOpenForm(!openForm)} className="w-20 h-20 bg-cyan-100 cursor-pointer">
                <h2>Buat Ruangan</h2>
            </button>
            <BuatRuangan openForm={openForm} setOpenForm={setOpenForm} />
        </>
    )
}

export default StatusKetersediaan