import BiotechIcon from "@mui/icons-material/Biotech";
import Person3Icon from "@mui/icons-material/Person3";

const Cta = () => {
  return (
    <section className="md:h-md">
      <div className="flex flex-col justify-center md:h-[400px] items-center container mx-auto">
        <h1 className="text-6xl text-[#21513b] mb-8">
          Let&apos;s Make Health Better Together
        </h1>
        <div>
          <div className="flex py-4 gap-4">
            <div className="rounded-xl bg-[#e2c2e6] py-3 px-6 ">
              <button>
                Sign In as a Doctor <BiotechIcon />
              </button>
            </div>
            <div className="rounded-xl bg-[#e2c2e6] py-3 px-6 ">
              <button>
                Sign In as a Patient <Person3Icon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
