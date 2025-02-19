import Body from "./components/body/Body"
import Container from "./components/Container"
import DaftarPenyewa from "./components/pages/penyewa/DaftarPenyewa"
import RiwayatSewa from "./components/pages/penyewa/RiwayatSewa"
import LaporanKeuangan from "./components/pages/keuangan/LaporanKeuangan"
import Pembayaran from "./components/pages/keuangan/Pembayaran"
import Ruangan from "./components/pages/manajemen_kos/Ruangan"
import StatusKetersediaan from "./components/pages/manajemen_kos/StatusKetersediaan"
import SideBar from "./components/sidebar/SideBar"
import { useState } from "react"

const pages  = {
  DaftarPenyewa: <DaftarPenyewa/>,
  RiwayatSewa: <RiwayatSewa/>,
  LaporanKeuangan: <LaporanKeuangan/>,
  Pembayaran: <Pembayaran/>,
  Ruangan: <Ruangan/>,
  StatusKetersediaan: <StatusKetersediaan/>
}

function App() {
  const [currentPage, setCurrentPage] = useState("StatusKetersediaan");
  return (
      <Container>
        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Body>
          {pages[currentPage]}
        </Body>
      </Container>
  )
}

export default App
