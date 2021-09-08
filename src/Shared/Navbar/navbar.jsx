import React from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import Avatardropdown from "Shared/Dropdown/dropdown";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import Menubar from "Shared/Menubar/menubar";

function Navcomponents() {
  return (
    <div className="pt-1 hidden md:flex flex-row md:gap-x-12 text-accent-gray">
      <NavLink
        exact activeClassName="text-accent"
        to="/"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-row gap-x-2"
      >
        <FeatherIcon icon="compass" />
        Discover
      </NavLink>
      <NavLink
        to="/search"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110 flex flex-row gap-x-2"
      >
        <FeatherIcon icon="search" />
        Search
      </NavLink>
      <NavLink
        to="/browse"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110 flex flex-row gap-x-2"
      >
        <FeatherIcon icon="navigation" />
        Explore
      </NavLink>
      <NavLink
        to="/user/settings"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110 flex flex-row gap-x-2"
      >
        <FeatherIcon icon="settings" />
        Settings
      </NavLink>
    </div>
  );
}

function Navbar({ openCallback }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="z-20 flex flex-col">
      <div className="flex flex-row justify-between h-24 md:py-8 py-4">
        <div className="font-semibold text-2xl text-primary md:m-0 my-2">
          Toury
        </div>

        <Navcomponents />

        <div className="flex flex-row gap-x-6">
          <Avatardropdown />
          <FeatherIcon icon="moon" size="30" className="md:m-0 my-2" />
          <div className="md:hidden flex">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(opened) => openCallback(opened)}
              size="26"
            />
          </div>
        </div>
      </div>
      <Menubar show={isOpen} />
    </div>
  );
}

export default Navbar;
