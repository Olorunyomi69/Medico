import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-sky-50 py-12 flex justify-around shadow-t-xl ">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center ">
        <div className="flex gap-6">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <XIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
        </div>

        <div>
          <h1 className="font-semibold text-4xl text-[#21513b]">Medico</h1>
        </div>

        <div className="flex items-center">
          <p className="text-center text-xl">
            Copyright &copy; Medico 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
