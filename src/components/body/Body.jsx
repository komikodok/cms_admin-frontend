/* eslint-disable react/prop-types */
import Header from "./Header"

const Body = ({children, setCurrentPage}) => {
    return (
        <>
            <Header setCurrentPage={setCurrentPage}/>
            {children}
        </>
    )
}

export default Body