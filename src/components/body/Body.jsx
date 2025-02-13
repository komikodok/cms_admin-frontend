/* eslint-disable react/prop-types */
import Header from "./Header"

const Body = ({currentPage, setCurrentPage}) => {
    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
            {currentPage}
        </>
    )
}

export default Body