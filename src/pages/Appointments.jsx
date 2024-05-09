import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CalendarMonthRounded from "@mui/icons-material/CalendarMonthRounded";
import Table from "../components/Table";
const Appointments = () => {
  return (
    <section className="flex flex-col p-6 ">
      <div className="flex justify-between items-center  w-full mx-auto">
        <div className="flex items-center gap-2 p-6">
          <CalendarMonthRounded fontSize="large"/>
          <h1 className="text-2xl font-normal">Appointments</h1>
        </div>
        <div className="py-8  second flex items-center gap-4">
          <SearchRoundedIcon fontSize="large" />
          <NotificationsNoneRoundedIcon fontSize="large" />
          <div className="flex gap-2">
            <img className="w-[50px] h-[50px]" src="/avatar-michael.png" />
            <span>
              <h1 className="font-semibold flex text-xl">Dr. Michael Brown</h1>
              <p>Heart Surgeon</p>
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex p-6 space-x-4 bg-white rounded-lg shadow">
        <h2 className="font-semibold">Confirm Appointment(12)</h2>
        <h2 className="2font-semibold text-gray-400">Upcoming Appointment(8)</h2>
      </div>

      <div>
        <Table/>
      </div>
    </section>
  );
};

export default Appointments;


