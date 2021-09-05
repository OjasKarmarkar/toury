import React from "react";
import FeatherIcon from "feather-icons-react";

function Menubar(params) {
  return (
    <div className="pt-8 flex flex-col gap-y-6 text-xl">
    <div className="flex flex-row gap-x-8 items-center  text-accent"><FeatherIcon icon="compass" size="32"/>Discover</div>
    <div className="flex flex-row gap-x-8 items-center text-accent-gray"><FeatherIcon icon="search" size="32"/>Search</div>
    <div className="flex flex-row gap-x-8 items-center text-accent-gray"><FeatherIcon icon="navigation" size="32"/>Explore</div>
    <div className="flex flex-row gap-x-8 items-center text-accent-gray"><FeatherIcon icon="settings" size="32"/>Settings</div>
    </div>
  );
}

export default Menubar;
