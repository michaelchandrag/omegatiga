import Menu from "./components/Menu";
import Button from "./components/Button";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavLink = ({ label, href }) => {
  return (
    <motion.button
      className="navlink cursor-pointer [border:none] pt-[3px] pb-0 pl-0 pr-4 bg-[transparent] flex flex-col items-start justify-start"
      whileHover={{
        "--textColor": "#EA6F37",
        "--fontWeight": 500,
        "--filterOpacity": 1,
        "--bgColor": "#1D1D1F",
      }}
      initial={{
        "--textColor": "white",
        "--fontWeight": 400,
        "--filterOpacity": 0,
        "--bgColor": "#020203",
      }}
      style={{
        "--textColor": "white",
        "--fontWeight": 400,
        "--filterOpacity": 0,
        "--bgColor": "#020203",
      }}
    >
      <div
        className="relative navlink-container rounded-11xl bg-gray-600 h-[38px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-4 box-border"
        style={{ backgroundColor: "var(--bgColor)" }}
      >
        <a
          className="text-color-white-solid [text-decoration:none] relative text-sm font-space-grotesk text-center"
          style={{
            color: "var(--textColor)",
            fontWeight: "var(--fontWeight)",
          }}
          href={href} // Set the href dynamically
        >
          {label} {/* Render the customizable label */}
        </a>
        <motion.div
          className="navlink-filter absolute left-[-12px] top-[43px] w-[94px] h-[74px] bg-[#ea6f37] rounded-[159px] blur-[29px]"
          style={{ opacity: "var(--filterOpacity)" }}
        ></motion.div>
      </div>
    </motion.button>
  );
};

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[114.7px] flex flex-row items-start justify-start sticky top-[0] z-[99] max-w-full ${className}`}
    >
      <div className="h-[202px] w-[202px] absolute !m-[0] bottom-[-87.3px] left-[0px] [filter:blur(80px)] rounded-[50%] bg-coral-200" />
      <div className="self-stretch flex-1 flex flex-row items-center justify-between py-6 px-8 box-border shrink-0 max-w-full gap-5 z-[1]">
        <div className="w-full flex flex-col items-start justify-start">
          <img
            className="w-[100px] flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="w-full flex justify-center">
          <NavLink label="Home" href="#home"/>
          <NavLink label="About" href="#about"/>
          <NavLink label="Features" href="#features"/>
        </div>
        <div className="w-full flex flex-col items-start justify-end pt-0 px-0 pb-[11.3px] box-border">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start max-w-full">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <Button property1="Default" label="Try Demo Version" href="/syntherra-demo-version" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
