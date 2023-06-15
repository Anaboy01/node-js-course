import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import DashFooter from "./DashFooter"

const DashLayout = () => {
  return (
    <>
      <div className="dash-container">
            <DashHeader/>
            <Outlet/>
      </div>
            <DashFooter/>
    </>
  )
}

export default DashLayout