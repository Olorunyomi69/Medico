import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const services = [
  {
    icon: <ManageAccountsIcon />,
    title: "Patient Management",
    description:
      "Seamlessly organize patient information, appointments, and interactions in one intuitive platform. Improve patient satisfaction with efficient communication and personalized care.",
  },

  {
    icon: <CalendarMonthIcon />,
    title: "Appointment Scheduling",
    description:
      "Simplify appointment scheduling for both staff and patients. Reduce no-shows with automated reminders and optimize your practice's schedule for maximum efficiency.",
  },

  {
    icon: <AnalyticsRoundedIcon />,
    title: "Analytics and Reporting",
    image: "analytics-reporting.jpg",
    description:
      "Leverage data-driven insights to enhance practice performance. Gain valuable insights into patient demographics, treatment outcomes, and financial metrics to make informed decisions and drive growth.",
  },

  {
    icon: <AccessTimeRoundedIcon />,
    title: "24/7 Support and Training",
    image: "support-training.jpg",
    description:
      "Access comprehensive support and training resources whenever you need them. Our dedicated team is here to assist you every step of the way, ensuring a smooth transition and ongoing success.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container flex flex-col  px-4 py-24 mx-auto mb-8  space-y-12 md:space-y-0 md:flex-col">
        <div>
          <h1 className="text-3xl text-[#2c3d8f] border-b-4 w-12 border-[#2c3d8f] font-semibold mb-4 ">
            Services
          </h1>
        </div>
        <div>
          <p className="text-xl">
            Our services are designed to offer you a sense of tranquility and
            healing, providing you with comppassionate support and evidence
            based treatment to get you feeling good about yourself again
          </p>
          <img className="m-8 rounded-lg" src="/service-image.jpg" />
        </div>
        <div className="flex flex-col gap-2 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0">
          {services.map((item) => (
            <div
              key={item.title}
              className="max-w-[300px] bg-white rounded-lg shadow-md p-6 "
            >
              <span className="flex justify-center py-3 text-[#2c3d8f]">
                {item.icon}
              </span>
              <h2 className="font-bold mb-2 text-xl">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
