import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Menubar({ show }) {
  if (show) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:hidden pt-8 flex flex-col gap-y-6 text-xl text-accent-gray"
      >
         <NavLink
        exact activeClassName="text-accent"
        to="/"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-row gap-x-8"
      >
        <FeatherIcon icon="compass" />
        Discover
      </NavLink>
      <NavLink
        to="/search"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-105 flex flex-row gap-x-8"
      >
        <FeatherIcon icon="search" />
        Search
      </NavLink>
      <NavLink
        to="/browse"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-105 flex flex-row gap-x-8"
      >
        <FeatherIcon icon="navigation" />
        Explore
      </NavLink>
      <NavLink
        to="/user/settings"
        activeClassName="text-accent"
        className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-105 flex flex-row gap-x-8"
      >
        <FeatherIcon icon="settings" />
        Settings
      </NavLink>
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}

export default Menubar;
