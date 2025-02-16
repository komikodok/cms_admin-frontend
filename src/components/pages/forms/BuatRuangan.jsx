/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react"

const BuatRuangan = ({openForm, setOpenForm}) => {
    const [formData, setFormData] = useState({
        room_number: "",
        status: "",
        price: "",
        images: []
    })

    const handleChange = async (e) => {
        if (e.target.type === "file") {
            setFormData({
                ...formData,
                images: e.target.files,
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("room_number", formData.room_number);
        formDataToSend.append("status", formData.status);
        formDataToSend.append("price", formData.price);
        if (formData.images) {
            for (let i = 0; i < formData.images.length; i++) {
                formDataToSend.append("images[]", formData.images[i]);
            }
        }

        try {
            const response = await axios.post(
                "http://localhost:8000/api/rooms",
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                    },
                }
            );
            console.log("Data: ", response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <>
            <div className={`${openForm ? "fixed inset-0 bg-black opacity-60 z-10" : "hidden"}`}></div>
            <div className={`${openForm ? "scale-100" : "scale-0"} transition-transform duration-900 ease-out
                shadow-md shadow-zinc-500 fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 
                md:w-[70%] lg:w-[50%] w-[90%] h-auto border-3 border-cyan-900 ring-2 ring-white rounded-xl
                bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-8 z-20`}
            >
                <button 
                    className="cursor-pointer absolute -top-[6%] -right-[5%] flex justify-center items-center w-10 h-10"
                    onClick={() => {
                        setOpenForm(false);
                        setFormData({
                            room_number: "",
                            status: "",
                            price: "",
                            images: []
                        });
                    }} 
                >
                    <strong className="text-3xl text-red-700 m-auto hover:scale-120 active:scale-80 transition-transform duration-300">×</strong>
                </button>

                <div className="w-full flex justify-start items-center mb-12 h-12">
                    <strong className="text-3xl text-cyan-950 border-b-2 border-cyan-950">Buat Data Ruangan Baru</strong>
                </div>
                
                <form 
                    action=""
                    className="flex flex-col gap-8"
                    onSubmit={handleSubmit} 
                >

                    <input 
                        type="text" 
                        name="room_number"
                        value={formData.room_number}
                        placeholder="Nomor ruangan" 
                        className="outline-none rounded-lg h-12 p-2 font-semibold text-gray-500 border border-teal-900 focus:border-2 focus:border-cyan-900" 
                        onChange={handleChange}/>

                    <select 
                        name="status"
                        value={formData.status}
                        className="rounded-lg h-12 cursor-pointer outline-none p-2 font-semibold text-gray-900 border border-teal-900 focus:border-2 focus:border-cyan-900"
                        onChange={handleChange}
                    >
                        <option value="" hidden>Pilih status</option>
                        <option value="available">Tersedia</option>
                        <option value="occupied">Tidak Tersedia</option>
                    </select>

                    <input
                        type="text" 
                        name="price"
                        value={formData.price}
                        placeholder="Harga"
                        className="rounded-lg h-12 outline-none p-2 font-semibold text-gray-500 border border-teal-900 focus:border-2 focus:border-cyan-900" 
                        onChange={handleChange}/>

                    <label 
                        htmlFor="fileInput"
                        className="cursor-pointer flex items-center justify-start p-3 h-12 w-full rounded-lg border border-teal-900 focus:border-2 focus:border-cyan-900 p-2 font-semibold text-gray-400 transition"
                    >
                        <span id="file-label" className="text-gray-900">Pilih File</span>
                        <input 
                            type="file" 
                            id="fileInput"
                            name="images[]"
                            accept="image/*"
                            className="hidden"
                            multiple
                            onChange={(e) => {
                                const fileLabel = document.getElementById("file-label");
                                fileLabel.textContent = e.target.files.length > 0 ? `${e.target.files.length} file dipilih` : "Pilih File";
                                handleChange(e);
                            }} 
                            required 
                        />
                    </label>

                    <div className="flex justify-end h-12">
                        <button 
                            type="submit"
                            className="border-3 border-cyan-950 cursor-pointer w-auto p-2 h-full rounded-xl bg-teal-900 hover:bg-teal-950 active:bg-cyan-950"
                        >
                            <span className="text-cyan-100">Buat Data</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BuatRuangan