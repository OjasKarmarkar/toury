import React from "react";
import FeatherIcon from "feather-icons-react";

function Navbar(params) {
  return (
    <div className="pt-1 hidden md:flex flex-row gap-x-12">
    <div className="flex flex-row gap-x-2 text-accent"><FeatherIcon icon="compass"/>Discover</div>
    <div className="flex flex-row gap-x-2 text-accent-gray"><FeatherIcon icon="search"/>Search</div>
    <div className="flex flex-row gap-x-2 text-accent-gray"><FeatherIcon icon="navigation"/>Explore</div>
    <div className="flex flex-row gap-x-2 text-accent-gray"><FeatherIcon icon="settings"/>Settings</div>
    </div>
  );
}

export default Navbar;
