import { useState } from "react";
import BuatRuangan from "../forms/BuatRuangan";
import DataRuangan from "./DataRuangan";
import axios from "axios";

const StatusKetersediaan = () => {
    const [openForm, setOpenForm] = useState(false);
    const [openData, setOpenData] = useState(false);
    const [text, setText] = useState("Lihat Semua Ruangan")

    const handleClick = async () => {
        setOpenData(!openData);
        openData ? setText("Lihat Semua Ruangan") : setText("Tutup Ruangan")
    }

    return (
        <>
            <div className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-5 shadow-md shadow-cyan-700">
                <strong className="text-3xl">🏠 Manajemen Kos</strong>
                <h2 className="text-lg font-semibold mt-2 opacity-90">Status Ketersediaan Ruangan</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="flex flex-col items-center justify-center w-full lg:w-[80%] mx-auto h-40 bg-red-500 text-white text-xl font-semibold rounded-xl shadow-md">
                    🚫 Ruangan Tidak Tersedia
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-[80%] mx-auto h-40 bg-green-500 text-white text-xl font-semibold rounded-xl shadow-md">
                    ✅ Ruangan Tersedia
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => setOpenForm(true)}
                    className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-700 active:scale-95 transition transform duration-200"
                >
                    <span className="font-semibold">Buat Ruangan</span>
                </button>

                <button
                    onClick={handleClick}
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 active:scale-95 transition transform duration-200"
                >
                    <span className="font-semibold">{text}</span>
                </button>
            </div>

            <BuatRuangan openForm={openForm} setOpenForm={setOpenForm} />

            {openData && <DataRuangan />}

        </>
    );
};

export default StatusKetersediaan;
