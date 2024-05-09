import { Link } from "react-router-dom";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Patients = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row px-4 h-full m-0 ">
      <div className="flex flex-[2_2_0%] flex-col  p-6 ">
        <div className="hidden md:flex ">
          <div className="user-name flex gap-3 items-center">
            <PersonOutlineRoundedIcon fontSize="large" />
            <h1 className="text-3xl text-gray-700 ">Anna Sergeeva</h1>
          </div>
        </div>
        <div className="mt-6">
          <h1 className=" flex text-2xl text-[#21513b] items-center gap-2">
            Patient List <ArrowForwardIosIcon />
            <span>
              <p className="text-[20px] text-gray-500"> Anna Sergeeva</p>
            </span>
          </h1>
        </div>
        <div className="mt-4 flex-col md:flex-row bg-white rounded-lg p-8 justify-between flex gap-6 items-center">
          <div className="flex gap-6 items-center">
            <img className="w-[80px]" src="/avatar-anisha.png" />
            <span className="text-gray-500">
              <h1 className="text-2xl font-semibold">Anna Sergeeva</h1>
              <p>sergeeva327@gmail.com</p>
            </span>
          </div>
          <div className="flex space-x-6">
            <VideocamOutlinedIcon
              fontSize="large"
              className="bg-blue-200 rounded-full "
            />
            <LocalPhoneOutlinedIcon
              fontSize="large"
              className="bg-blue-200 rounded-full "
            />
            <MoreHorizRoundedIcon
              fontSize="large"
              className="bg-blue-200 rounded-full "
            />
          </div>
        </div>

        <div className="details grid grid-cols-2 md:grid-cols-4 p-6 gap-6 bg-white mt-6">
          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Date of Birth</h1>
            <p className="text-xl font-semibold">23.04.1999</p>
          </span>
          <span className="space-y-4">
            <h1 className="text-gray-600 text-md">Address</h1>
            <p className="text-xl font-semibold">Ukraine, Kyiv</p>
          </span>
          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Marital Status</h1>
            <p className="text-xl font-semibold">Married</p>
          </span>
          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Insurance</h1>
            <p className="text-xl font-semibold">Med right</p>
          </span>

          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Social Number</h1>
            <p className="text-xl font-semibold">0012445</p>
          </span>

          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Phone Number</h1>
            <p className="text-xl font-semibold">+38099000000</p>
          </span>

          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Gender</h1>
            <p className="text-xl font-semibold">Female</p>
          </span>

          <span className="space-y-3">
            <h1 className="text-gray-600 text-md">Registered On</h1>
            <p className="text-xl font-semibold">3 Oct, 2018</p>
          </span>
        </div>

        <div className="second-col flex flex-col md:flex-row justify-between bg-white p-6 items-center mt-6">
          <div className="flex flex-col md:flex-row items-center justify-around rounded-full text-md flex gap-8 py-2 px-6 bg-gray-100 ">
            <span className="bg-[#21513b] rounded-full text-white px-6 py-2">
              <h1>Upcoming Appointments</h1>
            </span>
            <span>
              <h1>Post Appointments</h1>
            </span>
          </div>
          <div className="flex text-[#21513b]  gap-3">
            <NoteAddOutlinedIcon fontSize="large" />
            <h1 className="text-lg text-[#21513b]">Add Appointments</h1>
          </div>
        </div>
       <div className="appointment-details space-y-6 mt-4 max-h-[250px] overflow-y-scroll">
       <div className="flex flex-col md:flex-row items-center justify-between bg-white py-4 px-6 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-4">
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Date</h1>
              <p className="text-xl font-semibold">July 23, 11am</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Symptoms</h1>
              <p className="text-xl font-semibold">Back Pain</p>
            </span>

            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Category</h1>
              <p className="text-xl font-semibold">Follow Up</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Doctor</h1>
              <p className="text-xl font-semibold">Dr. Carlos Espinoza</p>
            </span>
          </div>
          <div className="space-x-2">
            <Link
              to={""}
              className="rounded-full bg-[#e2c2e6] py-4 px-6 text-black"
            >
              <button>Confirmed</button>
            </Link>
          
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-4 px-6 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-4">
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Date</h1>
              <p className="text-xl font-semibold">July 23, 11am</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Symptoms</h1>
              <p className="text-xl font-semibold">Back Pain</p>
            </span>

            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Category</h1>
              <p className="text-xl font-semibold">Follow Up</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Doctor</h1>
              <p className="text-xl font-semibold">Dr. Carlos Espinoza</p>
            </span>
          </div>
          <div className="space-x-2">
            <Link
              to={""}
              className="rounded-full bg-[#e2c2e6] py-4 px-6 text-black"
            >
              <button>Confirmed</button>
            </Link>
          
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-4 px-6 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-4">
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Date</h1>
              <p className="text-xl font-semibold">July 23, 11am</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Symptoms</h1>
              <p className="text-xl font-semibold">Back Pain</p>
            </span>

            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Category</h1>
              <p className="text-xl font-semibold">Follow Up</p>
            </span>
            <span className="space-y-3">
              <h1 className="text-gray-600 text-md">Doctor</h1>
              <p className="text-xl font-semibold">Dr. Carlos Espinoza</p>
            </span>
          </div>
          <div className="space-x-2">
            <Link
              to={""}
              className="rounded-full bg-[#e2c2e6] py-4 px-6 text-black"
            >
              <button>Confirmed</button>
            </Link>
          
          </div>
        </div>
       </div>
      </div>

      <div className=" right-side container flex flex-col flex-1">
        <div>
          <div className="py-6 mb-12 second flex gap-4">
            <SearchRoundedIcon fontSize="large" />
            <NotificationsNoneRoundedIcon fontSize="large" />
            <div className="flex gap-2">
              <img className="w-[50px]" src="/avatar-michael.png" />
              <span>
                <h1 className="font-semibold flex text-xl">
                  Dr. Michael Brown
                </h1>
                <p>Heart Surgeon</p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <div className="flex justify-between py-6">
            <h1 className="text-2xl font-semibold">Documents</h1>
            <span className="flex gap-2 text-[#21513b]">
              <NoteAddOutlinedIcon />
              <p className="text-[#21513b] font-semibold">Add Files</p>
            </span>
          </div>

          <div className="flex  justify-between py-6">
            <div className="flex gap-4">
              <DescriptionOutlinedIcon />
              <p>Medical Prescription.pdf</p>
            </div>
            <div className="flex gap-2">
              <FileDownloadOutlinedIcon />
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="w-full border-b dark:border-black md:w-full mt-4" />
          <div className="flex  justify-between py-6">
            <div className="flex gap-4">
              <DescriptionOutlinedIcon />
              <p>X-Ray.pdf</p>
            </div>
            <div className="flex gap-2">
              <FileDownloadOutlinedIcon />
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="w-full border-b dark:border-black md:w-full mt-4" />
          <div className="flex  justify-between py-6">
            <div className="flex gap-4">
              <DescriptionOutlinedIcon />
              <p>Ultra Sound_heart.pdf</p>
            </div>
            <div className="flex gap-2">
              <FileDownloadOutlinedIcon />
              <MoreVertOutlinedIcon />
            </div>
          </div>
          <div className="w-full border-b dark:border-black md:w-full mt-4" />
          <div>
            <h1 className="text-xl text-gray-600 py-2 text-center">See all</h1>
          </div>
        </div>
        <div className="records p-6 bg-white rounded-lg mt-4">
          <div className="flex justify-between py-6">
            <h1 className="text-2xl font-semibold">Medical Records </h1>
            <span className="flex gap-2 text-[#21513b]">
              <NoteAddOutlinedIcon />
              <p className="text-[#21513b] font-semibold">Add record</p>
            </span>
          </div>

          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="details grid grid-cols-2 md:grid-cols-4 py-6 gap-8 bg-white">
                    <span>
                      <h1 className="text-gray-600 text-md">Date of Birth</h1>
                      <p className=" font-semibold">23.04.1999</p>
                    </span>
                    <span>
                      <h1 className="text-gray-600 text-md">Symptoms</h1>
                      <p className="font-semibold">Back Pain</p>
                    </span>
                    <span>
                      <h1 className="text-gray-600 text-md">Specialist</h1>
                      <p className="font-semibold">Dr. Michael Brown</p>
                    </span>
                    <div className="flex gap-2">
                      <FileDownloadOutlinedIcon />
                      <MoreVertOutlinedIcon />
                    </div>
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

          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="details grid grid-cols-2 md:grid-cols-4  gap-8 bg-white">
                    <span>
                      <h1 className="text-gray-600 text-md">Date of Birth</h1>
                      <p className=" font-semibold">23.04.1999</p>
                    </span>
                    <span>
                      <h1 className="text-gray-600 text-md">Symptoms</h1>
                      <p className="font-semibold">Back Pain</p>
                    </span>
                    <span>
                      <h1 className="text-gray-600 text-md">Specialist</h1>
                      <p className="font-semibold">Dr. Neil Scott</p>
                    </span>
                    <div className="flex gap-2">
                      <FileDownloadOutlinedIcon />
                      <MoreVertOutlinedIcon />
                    </div>
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
    </section>
  );
};

export default Patients;
