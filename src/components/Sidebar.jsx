import { Link, useLocation } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CalendarMonthRounded from "@mui/icons-material/CalendarMonthRounded";
import AssessmentIcon from '@mui/icons-material/Assessment';
import Person3 from "@mui/icons-material/Person3";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const Data = [
  {
    link: "/dashboard",
    title: "Dashboard",
    icon: <GridViewRoundedIcon />,
  },
  {
    link: "/dashboard/patients",
    title: "Patients",
    icon: <Diversity1Icon />,
  },
  {
    link: "/dashboard/appointments",
    title: "Appointments",
    icon: <CalendarMonthRounded />,
  },
  {
    link: "/dashboard/reports",
    title: "Reports",
    icon: <AssessmentIcon />,
  },
  {
    link: "/account",
    title: "Account",
    icon: <Person3 />,
  },
];

function getLinkClass(currentPath, link) {
  return `flex gap-2 ml-6 py-4 px-2 items-center rounded-3xl ${
    currentPath === link
      ? "bg-[#f3f4f6] text-black rounded-r-none w-[120%]"
      : ""
  }`;
}

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className=" md:flex p-8 flex-col items-center min-h-screen bg-green-800">
      <div>
        <Link to="../">
          <h1 className="hidden xl:block text-[#d4e451] text-center md:text-3xl ">
            Medico
          </h1>
        </Link>
      </div>

      <span className="hidden xl:block w-full border-b dark:border-gray-400 md:w-full mt-6" />

      <div className=" flex flex-col items-center  space-y-6 mt-4 xl:hidden">
       
       <div>
          <Link to="../">
            <h1 className="text-[#d4e451] text-center md:text-3xl ">Medico</h1>
          </Link>
        </div>
        <span className="w-full border-b dark:border-gray-400 mt-6" />
        <Link to="/dashboard" className="block py-2 px-4 text-white">
          <GridViewRoundedIcon />
        </Link>
        <Link to="/dashboard/patients" className="block py-2 px-4 text-white">
          <Diversity1Icon />
        </Link>
        <Link
          to="/dashboard/appointments"
          className="block py-2 px-4 text-white"
        >
          <CalendarMonthRounded />
        </Link>
        <Link to="/dashboard/reports" className="block py-2 px-4 text-white">
          <AssessmentIcon />
        </Link>
        <Link to="/dashboard/accounts" className="block py-2 px-4 text-white">
          <Person3 />
        </Link>
       
      </div>

      <ul className="hidden xl:flex flex-col space-y-6 text-white py-8 ">
        {Data.map((val, key) => (
          <Link to={val.link} key={key}>
            <li className={getLinkClass(currentPath, val.link)}>
              <div id="icon">{val.icon}</div>
              <div className="text-xl" id="title">
                {val.title}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
