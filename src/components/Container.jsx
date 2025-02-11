/* eslint-disable react/prop-types */
const Container = ({children}) => {
  return (
    <div className="h-screen overflow-hidden flex">
        {children}
    </div>
  )
}

export default Container
