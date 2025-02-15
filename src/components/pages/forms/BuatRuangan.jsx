import { useState } from "react"

const BuatRuangan = ({openForm, setOpenForm}) => {
    const [formData, setFormData] = useState({
        room_number: "",
        status: "",
        price: "",
        images: []
    })

    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <div className={`${openForm ? "fixed inset-0 bg-black opacity-60 z-10" : "hidden"}`}></div>
            <div className={`${openForm ? "scale-100" : "scale-0"} transition-transform duration-900 ease-out
                bg-white shadow-md shadow-zinc-500 fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 
                sm:w-auto w-[90%] h-[90%] rounded-xl p-8 z-20`}
            >
                <button onClick={() => setOpenForm(false)} className="cursor-pointer absolute -top-[5%] -right-[5%] flex justify-center items-center w-10 h-10">
                    <strong className="text-3xl text-red-700 m-auto">×</strong>
                </button>
                
                <form 
                    action=""
                    className="grid grid-cols-1 gap-4">

                    <div className="flex flex-col border">
                        <label htmlFor="room_number">Nomor Ruangan</label>
                        <input type="text" name="room_number" id="room_number" />
                    </div> 

                    <div className="flex flex-col border">
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status">
                            <option value="availabel">Tersedia</option>
                            <option value="occupied">Penuh</option>
                        </select>
                    </div>

                    <div className="flex flex-col border">
                        <label htmlFor="price">Harga</label>
                        <input type="text" name="price" id="price" />
                    </div>

                    <div className="flex flex-col border">
                        <label htmlFor="images">Kirim Gambar Ruangan</label>
                        <input type="file" name="images[]" id="images" accept="image/*" multiple required />
                    </div>

                    <div className="flex flex-col border col-span-2">
                        <button onSubmit={handleSubmit} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BuatRuangan