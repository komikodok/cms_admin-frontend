import { useEffect } from "react";
import "../../../../datatable.css"

const DataRuangan = ({openData}) => {
    useEffect(() => {
        if (!openData) return;
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
                { data: "room_number"},
                { 
                    data: "status",
                    orderable: false,
                    render: (data) => {
                        return data === "available" 
                        ? "<span class='text-green-600 font-bold'>Tersedia</span>"
                        : "<span class='text-red-600 font-bold'>Penuh</span>";
                    }
                },
                { 
                    data: "price", 
                    orderable: false,
                    render: (data) => `Rp ${new Intl.NumberFormat("id-ID").format(data)}`
                },
                { 
                    data: null,
                    orderable: false,
                    render: () => {
                        return `<button class="bg-blue-500 text-white m-2 px-4 py-2 rounded">Detail</button>`;
                    }
                },
            ],
            pageLength: 5,
            rowCallback: function(row, data, index) {
                if (index % 2 === 0) {
                    $(row).addClass('bg-white');
                } else {
                    $(row).addClass('bg-cyan-100');
                }
            },
            language: {
                search: "Cari: ",
                lengthMenu: "Tampilkan _MENU_ data per halaman",
                info: "Menampilkan _START_ - _END_ dari _TOTAL_ data",
                infoEmpty: "Tidak ada data yang tersedia",
                zeroRecords: "Data tidak ditemukan",
                paginate: {
                    first: "«",
                    previous: "<",
                    next: ">",
                    last: "»",
                    0: "Halaman _PAGE_"
                },
            },
            dom:  "<'flex justify-end'<'dataTables_filter'f>>" +
                "<'table-container'tr>" +
                "<'flex justify-between text-blue-950 !font-bold mt-4'<'dataTables_info'i><'dataTables_paginate'p><'dataTables_length'l>>",
            drawCallback: function() {
                setTimeout(() => {
                    console.log($(".dataTables_paginate nav ul").html());
                    $("#table thead").addClass("bg-cyan-300 h-10");
                    $("#table thead th").addClass("text-blue-950 font-bold");
                    $("#table tbody td").addClass("text-blue-500 font-semibold");

                    $(".dataTables_paginate nav ul").addClass("flex gap-4 text-blue-950 !font-bold")
                    $(".dataTables_filter").addClass("m-2")
                    $(".dataTables_filter input").addClass("outline-none border border-cyan-300 focus:border-2 focus:border-cyan-500 rounded-lg")
                    $(".dataTables_length label").addClass("text-blue-950 !font-bold");
                    $(".dataTables_length label select").addClass("outline-none rounded-lg border border-cyan-300 focus:border-2 focus:border-cyan-500");
                }, 300);
            }
        });

        return () => {
            $("#table").DataTable().destroy();
        };
    }, [openData]);

    return (
        <div className={`mt-6 px-2 md:px-14 lg:px-20 bg-white shadow-lg rounded-lg ${openData ? "scale-100 translate-y-0" : "scale-0 translate-y-full"} transition-transform duration-900`}>
            <table id="table" className="w-full text-md">
                <thead>
                    <tr>
                        <th>Nomor Ruangan</th>
                        <th>Status</th>
                        <th>Harga</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default DataRuangan;
