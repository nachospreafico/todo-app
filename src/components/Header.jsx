import bgMobileLight from "./../assets/bg-mobile-light.jpg";
import bgDesktopLight from "./../assets/bg-desktop-light.jpg";
import bgMobileDark from "./../assets/bg-mobile-dark.jpg";
import bgDesktopDark from "./../assets/bg-desktop-dark.jpg";
import moonIcon from "./../assets/icon-moon.svg";
import sunIcon from "./../assets/icon-sun.svg";
import { useTodoContext } from "../context/TodoContext";

const Header = () => {
  const { isMobile, darkMode, toggleDarkMode } = useTodoContext();

  return (
    <header className="w-full h-[200px] md:h-[300px]">
      <img
        src={
          isMobile
            ? darkMode
              ? bgMobileDark
              : bgMobileLight
            : darkMode
            ? bgDesktopDark
            : bgDesktopLight
        }
        alt="background image"
        className="w-full object-cover max-h-[200px] md:max-h-[300px] absolute"
      ></img>
      <div className="max-w-[540px] m-auto relative">
        <h1 className="text-white font-medium text-3xl md:text-[40px] absolute top-12 md:top-14 xl:top-[70px] md:left-0 left-6 tracking-[.35em]">
          TODO
        </h1>
        <img
          src={darkMode ? sunIcon : moonIcon}
          onClick={toggleDarkMode}
          alt="icon for dark or light mode"
          className="cursor-pointer absolute top-12 md:top-14 xl:top-[70px] right-6 md:right-0"
        ></img>
      </div>
    </header>
  );
};

export default Header;
