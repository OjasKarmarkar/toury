import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";

function Homescreen(params) {
  const mapOptions = {
    fullscreenControl: false,
    disableDefaultUI: true,
  };
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <div className="flex flex-row w-full">
          {" "}
          <div className="flex flex-col md:w-2/5">
            {" "}
            <div className="pt-4">
              <p className="font-semibold text-l">Hey Ojas ,</p>
              <p className="font-medium text-l text-accent-gray">
                Good Morning
              </p>
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
            <div class="relative text-gray-600 w-auto">
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
              <div className="pt-12 font-semibold text-xl">
                <p>Top Destinations</p>
                <div className="mr-8 flex flex-row gap-x-4 mt-6">
                  {" "}
                  <img
                    src="https://images.unsplash.com/photo-1562979314-bee7453e911c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                    alt=" random imgee"
                    className="w-1/3 object-fill  object-center rounded-2xl shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                    alt=" random imgee"
                    className="w-1/3  object-fill  object-center rounded-2xl shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80"
                    alt=" random imgee"
                    className="w-1/3  object-fill  object-center rounded-2xl shadow-md"
                  />{" "}
                </div>
                <div className="mr-8 flex flex-row gap-x-14 text-lg mt-6">
                  <div className="w-1/3"> Mumbai</div>
                  <div className="w-1/3 "> Goa</div>
                  <div className="w-1/3 "> Ladakh</div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="w-3/5 pt-4">
            <div className="rounded-3xl overflow-hidden h-full ml-60 mr-20 bg-primary">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAzCx0IyBV-EAdXloYgWag2VbHtJAihb_Q",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={mapOptions}
              ></GoogleMapReact>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Homescreen;
