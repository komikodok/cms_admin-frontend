/* eslint-disable react/prop-types */
const Container = ({children}) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
        {children}
    </div>
  )
}

export default Container
