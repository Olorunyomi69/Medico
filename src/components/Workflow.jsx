import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Workflow = [
  {
    icon: <img src='/shuttle.png'/>,
    Title: "Get Started Button",
    text: "Begin your journey by clicking the 'Get Started' button",
  },
  {
    icon: <img src='/log-in.png'/>,
    Title: "Sign In or Sign Up",
    text: "Choose whether you're a doctor or a patient and sign in or sign up to access our Health Management System",
  },
  {
    icon: <img src='/enjoy.png'/>,
    Title: "Enjoy Tailored Health management",
    text: "Once logged in, you'll enjoy personalized features designed to meet your specific healthcare needs. Our platform empowers you to take control of your health journey",
  },
  {
    icon: <img src='/experience.png'/>,
    Title: "Experience Seamless Care",
    text: "With our intuitive interface and comprehensive tools, managing your health has never been easier. Enjoy peace of mind knowing that you're supported every step of the way.",
  },
];

const Works = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="md:container flex flex-col px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-col">
        <div>
          <h1 className="text-3xl text-[#21513b]  font-semibold mb-4 ">
            How It Works
          </h1>
          <p className="text-xl">Experience it first hand</p>
        </div>

        <div className="flex flex-col max-w-sm xl:grid row-span-1  md:grid-cols-4 xl:items-center gap-2 mx-auto md:max-w-none md:mx-0 ">
          {Workflow.map((item, index) => (
            <motion.div initial={{ y: "7rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 3, type: "spring" }} key={item.Title} className="flex items-center space-x-2">
              <div className='flex flex-col p-3'>
              <span className="py-3 text-[#2c3d8f]">{item.icon}</span>
              <h2 className="font-bold text-xl mb-2">{item.Title}</h2>
              <p>{item.text}</p>
              </div>
              {index !== Workflow.length - 1 && <ArrowForwardIcon className="hidden text-[#2c3d8f]" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
