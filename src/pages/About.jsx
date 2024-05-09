const About = () => {
  return (
    <section>
      <div className="container pt-24 pb-24 px-4 flex flex-col mx-auto space-y-8 sm:space-y-0">
        <div>
          <div>
            <h1 className="text-[#2c3d8f] text-3xl font-semibold  mb-4">
              About Us
            </h1>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className=" flex flex-col justify-between  bg-white rounded-l-lg shadow-md p-6   max-w-md">
              <div>
                <h1 className="text-5xl font-bold leading-snug ">
                  Our Dream Is To Make Healthcare Better Together
                </h1>
              </div>

              <div>
                <p className="text-xl">
                  At Medico, our mission is simple: to make healthcare better
                  together. We believe that by empowering both doctors and
                  patients, we can transform the healthcare experience and
                  improve outcomes for everyone.
                </p>
              </div>
            </div>
            <div className="max-w-xl">
              <div>
                <img
                  className="rounded-r-xl  w-full"
                  src="/about.jpg"
                  alt="doctor and happy patient"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex space-x-8 m-4 ">
                  <div className="flex flex-col items-center bg-white rounded-l-lg shadow-md max-w-sm p-6">
                    <h1 className="text-2xl font-semibold  sm:text-3xl">
                      800+
                    </h1>
                    <h1 className="text-lg sm:text-xl">Happy Patients</h1>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-l-lg shadow-md max-w-sm p-6">
                    <h1 className="text-2xl font-semibold sm:text-3xl">6</h1>
                    <h1 className="text-lg sm:text-xl">National Awards</h1>
                  </div>
                </div>
                <div className="flex space-x-8 m-4">
                  <div className="flex flex-col items-center bg-white rounded-l-lg shadow-md max-w-sm p-6">
                    <h1 className="text-2xl font-semibold sm:text-3xl">12</h1>
                    <h1 className="sm:text-[0.95rem]">
                      Experienced Specialists
                    </h1>
                  </div>
                  <div className="flex flex-col items-center bg-white rounded-l-lg shadow-md max-w-sm p-6">
                    <h1 className="text-2xl font-semibold sm:text-3xl">5+</h1>
                    <h1 className="sm:text-[0.95rem]">Years of experience</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
