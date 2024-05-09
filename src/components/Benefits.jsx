import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section>
      <div className="container flex flex-col justify-between gap-5 px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row">
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring" }}
        >
          <h1 className="text-6xl text-[#21513b]  font-semibold mb-4 ">
            Why Choose Us?
          </h1>
          <div className="flex flex-col gap-8 mt-8">
            <div>
              <span className="flex md:flex-row gap-3 items-center">
                <CheckCircleIcon className="text-[#21513b]" />
                <h1 className="text-3xl font-semibold">Doctors</h1>
              </span>
              <p className="text-xl md:max-w-md md:mt-3">
                With Medico you can Secure communication with patients, monitor
                patients remotely, get improved care coordination, manage
                appointments.
              </p>
            </div>
            <div>
              <span className="flex md:flex-row gap-3 items-center">
                <CheckCircleIcon className="text-[#21513b]" />
                <h1 className="text-3xl font-semibold">Patients</h1>
              </span>
              <p className="text-xl md:max-w-md md:mt-3">
                With Medico you can Secure communication with Doctors, book
                appointments, get improved care coordination.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="w-full max-w-4xl p-5 pb-10 mb-10 gap-5 columns-2 space-y-5 items-center">
          <motion.img
            initial={{ y: "-7rem", opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="rounded-tr-[200px] pt-2 bg-red-200"
            src="/third.png"
          />
          <motion.img
            initial={{ y: "7rem", opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="rounded-tl-[200px] bg-orange-300"
            src="/fourth.png"
          />
          <motion.img
            initial={{ x: "7rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="rounded-br-[200px] bg-blue-100"
            src="/first.png"
          />
          <motion.img
            initial={{ x: "-4rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="rounded-bl-[200px] bg-[#e2c2e6]"
            src="/second.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
