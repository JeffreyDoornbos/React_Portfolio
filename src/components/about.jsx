import cv from "../assets/CV.png";

const About = () => {
  return (
    <div
      className="flex items-center justify-center py-20 md:py-[91px]"
      id="about"
    >
      <div className="px-14 md:max-w-md lg:max-w-[515px]">
        <div className="mb-5 font-roboto-slab text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl">
          <span>Waarom moet je mij inhuren</span>
        </div>
        <div className="mb-5 text-justify font-poppins text-[13px] font-medium text-light lg:text-[15px]">
          <span>
           Snelle developer misschien wel de beste :) kan meerdere talen. en ben goedkoop
          </span>
        </div>
        <button  className="rounded-md bg-accent/80 py-2 px-4 font-roboto text-xs font-semibold text-white transition-all hover:bg-accent md:rounded-lg md:px-5 md:text-[13px] lg:text-[15px]">
      <a href="https://drive.google.com/file/d/1v4S0E8LNZWxMdt4r7zypqgkl9fGSPhQG/view?usp=share_link" target="_blank">Download CV</a>
        </button>
      </div>
    </div>
  );
};

export default About;
