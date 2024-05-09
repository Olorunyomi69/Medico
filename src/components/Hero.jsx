import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative bg-[#21513b]  pt-24 md:pb-24 flex flex-col justify-center items-center space-y-8 sm:space-y-0">
      <div className="container flex flex-col-reverse justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2  justify-center">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="max-w-md text-4xl font-bold text-[#d4e451] md:text-5xl md:text-left"
          >
            Making Healthcare Better Together
          </motion.h1>
          <p className="max-w-md text-[#d4e451] md:text-left">
            A unified platform for patients and doctors to collaborate on better
            health.
          </p>

          <Link to={"/"}>
            <button className="rounded-xl bg-[#e2c2e6] py-3 max-w-md px-6 text-black">
              Get Started
            </button>
          </Link>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring" }}
        >
          <img
            className="w-[70%] rounded-lg"
            src="/hero-image.jpg"
            alt="hero-image"
          />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute md:-bottom-12 mb-12">
        <div className="flex flex-wrap justify-center rounded-xl border-2 bg-white p-10 space-y-4 sm:space-y-0 sm:space-x-24">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl">
              <CountUp start={300} end={800} duration={4} />+
            </h1>
            <h1 className="text-lg sm:text-xl">Happy Patients</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl">
              <CountUp start={1} end={6} duration={6} />
            </h1>
            <h1 className="text-lg sm:text-xl">National Awards</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl">
              <CountUp start={1} end={12} duration={4} />
            </h1>
            <h1 className="text-lg sm:text-xl">Experienced Specialists</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl">
              <CountUp start={1} end={5} duration={6} />+
            </h1>
            <h1 className="text-lg sm:text-xl">Years of Experience</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
