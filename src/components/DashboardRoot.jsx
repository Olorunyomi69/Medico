import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"



const DashboardRoot = () => {
  return (
        <div className="grid grid-cols-[15%_80%] md:grid-cols-[15%_80%]">
            <Sidebar/>
            <Outlet/>
        </div>
  )
}

export default DashboardRoot