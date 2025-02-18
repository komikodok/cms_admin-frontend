import { useEffect } from "react";

const DataRuangan = () => {
    useEffect(() => {
        let table = $("#table").DataTable();
        if (table) {
            table.destroy();
        }

        $("#table").DataTable({
            ajax: {
                url: "http://localhost:8000/api/rooms",
                type: "GET",
                dataSrc: "data",
            },
            columns: [
                { data: "room_number", title: "Nomor Ruangan"},
                { 
                    data: "status",
                    title: "Status",
                    render: (data) => {
                        return data === "available" 
                            ? "<span class='text-green-600 font-bold'>Tersedia</span>"
                            : "<span class='text-red-600 font-bold'>Penuh</span>";
                    }
                },
                { 
                    data: "price", 
                    title: "Harga",
                    render: (data) => `Rp ${new Intl.NumberFormat("id-ID").format(data)}`
                },
                { 
                    data: null, 
                    render: (data, type, row) => {
                        return `<button class="bg-blue-500 text-white px-4 py-2 rounded">Detail</button>`;
                    }
                },
            ],
            pageLength: 5,
            rowCallback: function(row, data, index) {
                if (index % 2 === 0) {
                    $(row).addClass('bg-white ');
                    $('td', row).addClass('text-blue-500')
                } else {
                    $(row).addClass('bg-cyan-100 ');
                    $('td', row).addClass('text-blue-500') 
                }
            }
        });

        return () => {
            $("#table").DataTable().destroy();
        };
    }, []);

    return (
        <div className="mt-6 px-10 text-center bg-white shadow-lg rounded-lg">
            <table id="table" className="w-full text-md">
                <thead className="bg-cyan-300 h-10">
                    <tr className="">
                        <th className="">Nomor Ruangan</th>
                        <th className="">Status</th>
                        <th className="">Harga</th>
                        <th className=""></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default DataRuangan;
