import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Chart from "../components/Chart"
import Timeline from "../components/BasicTimeline"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Dashboard = () => {
  return (
   <section className="flex flex-col">
   <div className="flex justify-between w-full mx-auto">
   <div className="p-6">
      <h1 className="text-2xl py-2 font-bold">Welcome Dr. Michael Brown</h1>
      <p className="text-gray-500">Check the latest updates on your account</p>
    </div>
    <div className="py-6 mb-12 second flex gap-4">
            <SearchRoundedIcon fontSize="large" />
            <NotificationsNoneRoundedIcon fontSize="large" />
            <div className="flex gap-2">
              <img className="w-[50px] h-[50px]" src="/avatar-michael.png" />
              <span>
                <h1 className="font-semibold flex text-xl">
                  Dr. Michael Brown
                </h1>
                <p>Heart Surgeon</p>
              </span>
            </div>
          </div>
   </div>
   <div className="flex flex-col xl:flex-row justify-between w-full p-6">
    
    <div className=" left-side flex flex-col flex-[2_2_0%]  justify-between gap-3  p-6 ">
  <div className="first-half flex flex-col xl:flex-row space-x-4">
  <div className="grid md:grid-cols-2 gap-5">
    <div className="rounded-lg shadow p-4">
      <h1 className="font-semibold text-lg">Online Consultations</h1>
      <p className="text-gray-500">Today</p>
      <span className="flex justify-between items-center mt-4"><h1 className="text-3xl text-lime-600">12</h1> <p>view all</p></span>
    </div>

    <div className="rounded-lg shadow p-4">
      <h1 className="font-semibold text-lg">Offline Consultations</h1>
      <p className="text-gray-500">Today</p>
      <span className="flex justify-between items-center mt-4"><h1 className="text-3xl text-lime-600">2</h1> <p>view all</p></span>
    </div>

    <div className="rounded-lg shadow p-6">
      <h1 className="font-semibold text-lg">Satisfied Patients</h1>
      <span className="flex max-w-fit bg-gray-200 rounded-lg p-1"><p className="text-green-400">+5%</p></span>
      <span className="flex justify-between items-center mt-4"><h1 className="text-3xl text-lime-600">250+</h1> <p>view all</p></span>
    </div>

    <div className="rounded-lg shadow p-6">
      <h1 className="font-semibold text-lg">Patients per month</h1>
      <span className="flex items-center gap-2"><p className="text-gray-400">This month</p><p className="text-green-400 rounded-lg max-w-fit bg-gray-200 p-1">+12%</p></span>
      <span className="flex justify-between items-center mt-4"><h1 className="text-3xl text-lime-600">430</h1> <p>view all</p></span>
    </div>

   </div>
    <div className="flex">
      <Chart/>
    </div>

  </div>
  <div >
    <h1 className="text-xl font-semibold my-4 ">Last Notifications</h1>
    
    <div className="appointment-details space-y-6 mt-4 max-h-[350px] pr-6 overflow-y-scroll">
    <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="details flex justify-between gap-6 items-center rounded-lg bg-white p-6">
                    
                    <span className="flex gap-4">
                    <CircleIcon className="text-lime-600"/>
                      <p className="font-semibold">Dr. John Kennedy sent you an invitation to the meeting</p>
                    </span>

                    <span className="flex flex-end items-center gap-3">
                      <button className="bg-lime-600 text-lime-200 py-3 px-6 rounded-full">Mark as read</button>
                      <KeyboardArrowDownIcon/>
                    </span>
              
                   
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="py-4">
                  Good day Dr. Brown I hope you are doing well, this message is a reminder of the meeting set for 12 noon later today.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="details flex justify-between gap-6 items-center rounded-lg bg-white p-6">
                    
                    <span className="flex gap-4">
                    <CircleIcon className="text-lime-600"/>
                      <p className="font-semibold">Confirmed Appointment</p>
                    </span>

                    <span className="flex flex-end items-center gap-3">
                      <button className="bg-lime-600 text-lime-200 py-3 px-6 rounded-full">Mark as read</button>
                      <KeyboardArrowDownIcon/>
                    </span>
              
                   
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-4">
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Patient</h1>
              <p className="text-xl font-semibold">Ben Affleck</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Symptoms</h1>
              <p className="text-xl font-semibold">Back Pain</p>
            </span>

            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Time</h1>
              <p className="text-xl font-semibold">July 23, 9:00 - 10:00</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Number</h1>
              <p className="text-xl font-semibold">+380000000008</p>
            </span>
          </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="details flex justify-between gap-6 items-center rounded-lg bg-white p-6">
                    
                    <span className="flex gap-4">
                    <CircleIcon className="text-lime-600"/>
                      <p className="font-semibold">Dr. John Kennedy sent you an invitation to the meeting</p>
                    </span>

                    <span className="flex flex-end items-center gap-3">
                      <button className="bg-lime-600 text-lime-200 py-3 px-6 rounded-full">Mark as read</button>
                      <KeyboardArrowDownIcon/>
                    </span>
              
                   
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
    </div>
  </div>
  
  </div>
    
    

    <div className="2 flex flex-col flex-1  bg-white rounded-lg shadow">
    <div className="flex flex-col container">
    <h1 className="font-semibold px-6 py-4 text-xl">Your Schedule</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar />
    </LocalizationProvider>
    </div>

  <div>
    <Timeline/>
  </div>
    </div>

   </div>
   </section>
  );
};

export default Dashboard;