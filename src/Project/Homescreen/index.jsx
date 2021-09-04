import React from "react";
import FeatherIcon from "feather-icons-react";

function Homescreen(params) {
  return (
    <div className="bg-primary-white h-screen">
      <div className="flex flex-row justify-between h-24 py-8 px-20">
        <div className="font-semibold text-2xl text-bg-primary-text">Toury</div>
        <div className="flex flex-row gap-x-6">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <FeatherIcon icon="moon" size="30" />
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
