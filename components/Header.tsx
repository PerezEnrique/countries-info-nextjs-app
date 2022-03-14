import { IconContext } from "react-icons";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  darkTheme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ darkTheme, toggleTheme }: HeaderProps) {
  return (
    <IconContext.Provider value={{ className: "header__btn__icon" }}>
      <header className="header">
        <h1>Countries info</h1>
        <button
          className="header__btn"
          onClick={() => toggleTheme((prevStatus) => !prevStatus)}
          aria-pressed={darkTheme}
        >
          {!darkTheme ? (
            <IoMoonOutline aria-hidden="true" />
          ) : (
            <IoMoonSharp aria-hidden="true" />
          )}
          Dark mode
        </button>
      </header>
    </IconContext.Provider>
  );
}
