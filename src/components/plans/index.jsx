import React from "react";
import Link from "next/link";
import PlansCard from "./plansCard";

const Plans = () => {
  const planData = [
    {
      title: "Past & Current Seasons",
      tag: "TV Shows",
      image: "original.jpg",
    },
  ];
  return (
    <div className="bg-black py-[88px] w-full flex flex-col items-center gap-8">
      <div className="text-black flex flex-col gap-4 justify-center items-center">
        <h3 className="text-[#00ED82] font-medium uppercase">
          included in all types
        </h3>
        <div className="flex flex-col text-white justify-center items-center  gap-2.5">
          <h1 className=" text-[48px] font-semibold">All The TV You Love</h1>
          <p className=" max-w-3xl text-center text-[18px]">
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>
      {/* plans card */}
      {/* <PlansCard /> */}
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="h-[452px] w-[295px] rounded-xl hover:opacity-50 hover:p-2 hover:border-4 border-gray-300  relative opacity-75">
          <img src="/Images/original.jpg" className="rounded-sm"></img>
          <div className="absolute top-0 text-white font-bold z-10">
            <span>Past & Current Seasons</span>
            <h3 className="font-bold">TV Shows</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px] hover:opacity-50">
          <img src="\Images\original-1.jpg"></img>
          <div absolute top-0 text-white font-bold z-10>
            <span>New & Classic Movies</span>
            <h3 className="font-bold">Movies</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px] hover:opacity-50">
          <img src="\Images\original-2.jpg"></img>
          <div absolute top-0 text-white font-bold z-10>
            <span>GroundBreaking</span>
            <h3 className="font-bold">Hulu Originals</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px] hover:opacity-50">
          <img src="\Images\original-3.jpg"></img>
          <div className="absolute top-0 text-white font-bold z-10">
            <span>Add on</span>
            <h3 className="font-bold">Premiums</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
