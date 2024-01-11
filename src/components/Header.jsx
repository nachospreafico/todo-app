import bgMobileLight from "./../assets/bg-mobile-light.jpg";
import bgDesktopLight from "./../assets/bg-desktop-light.jpg";
import moonIcon from "./../assets/icon-moon.svg";
import { useTodoContext } from "../context/TodoContext";

const Header = () => {
  const { isMobile } = useTodoContext();

  return (
    <header className="w-full h-[200px] md:h-[300px]">
      <img
        src={isMobile ? bgMobileLight : bgDesktopLight}
        alt="background image"
        className="w-full object-cover max-h-[200px] md:max-h-[300px] absolute"
      ></img>
      <div className="max-w-[540px] m-auto relative">
        <h1 className="text-white font-medium text-3xl md:text-[40px] absolute top-12 md:top-14 xl:top-[70px] md:left-0 left-6 tracking-[.35em]">
          TODO
        </h1>
        <img
          src={moonIcon}
          alt="icon for dark or light mode"
          className="absolute top-12 md:top-14 xl:top-[70px] right-6 md:right-0"
        ></img>
      </div>
    </header>
  );
};

export default Header;
