import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";

function Menubar({ show }) {
  if (show) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:hidden pt-8 flex flex-col gap-y-6 text-xl"
      >
        <div className="flex flex-row gap-x-8 items-center  text-accent">
          <FeatherIcon icon="compass" size="32" />
          Discover
        </div>
        <div className="flex flex-row gap-x-8 items-center text-accent-gray">
          <FeatherIcon icon="search" size="32" />
          Search
        </div>
        <div className="flex flex-row gap-x-8 items-center text-accent-gray">
          <FeatherIcon icon="navigation" size="32" />
          Explore
        </div>
        <div className="flex flex-row gap-x-8 items-center text-accent-gray">
          <FeatherIcon icon="settings" size="32" />
          Settings
        </div>
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}

export default Menubar;
