import React from "react";
import FeatherIcon from "feather-icons-react";
import Navbar from "Shared/Navbar/navbar";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import Menubar from "Shared/Menubar/menubar";

function Homescreen(params) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-primary-white h-screen px-10 md:px-20">
      <div className="flex flex-row justify-between h-24 md:py-8 py-4">
        <div className="font-semibold text-2xl text-primary md:m-0 my-2">
          Toury
        </div>
        <Navbar />
        <div className="flex flex-row gap-x-6">
          <img
            className="h-8 w-8 rounded-full md:m-0 my-2"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <FeatherIcon icon="moon" size="30" className="md:m-0 my-2" />
          <div className="md:hidden flex">
            <Hamburger toggled={isOpen} toggle={setOpen} size="26" />
          </div>
        </div>
      </div>
      {isOpen?<div><Menubar/> </div>:<div>
        <div className="pt-4">
          <p className="font-semibold text-l">Hey Raza ,</p>
          <p className="font-medium text-l text-accent-gray">Good Morning</p>
        </div>
        <div className="py-12 text-4xl md:text-5xl font-semibold">
          <p className="text-accent">
            Where
            <span className="text-primary">
              {" "}
              are you<br></br>going to go?
            </span>
          </p>
        </div>

        <div class="relative text-gray-600 w-auto md:w-2/5">
          <span class="z-10 font-normal text-center absolute rounded text-base items-center justify-center pl-3 py-4">
            <FeatherIcon
              icon="search"
              className="text-accent-gray"
              size="22"
            ></FeatherIcon>
          </span>
          <input
            type="search"
            name="serch"
            placeholder="Destination"
            class="bg-white h-14 w-full px-12 rounded-full text-sm focus:outline-none"
          />
          <span class="z-10 font-normal text-center absolute rounded text-base items-center justify-center right-0">
            <button
              type="button"
              class="rounded-full text-white px-6 py-3 items-center bg-primary  outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-2 mt-1 flex"
            >
              <span class="mx-2">Let's go</span>
              <FeatherIcon icon="arrow-right" size="18" />
            </button>
          </span>
        </div>
      </div>}
      
    </div>
  );
}

export default Homescreen;
