import React, { useState } from "react";
import Link from "next/link";
import PlansCard from "./plansCard";

const Plans = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    console.log(index);
  };
  return (
    <div className="bg-black py-[88px] w-full flex flex-col items-center gap-8">
      <div className="text-black flex flex-col gap-4 justify-center items-center">
        <h3 className="text-[#00ED82] font-medium uppercase">
          included in all types
        </h3>
        <div className="flex flex-col text-white justify-center items-center gap-2.5">
          <h1 className="text-[50px] font-bold">All The TV You Love</h1>
          <p className=" max-w-3xl text-center text-[18px]">
            Watch full seasons of exclusive streaming series, current-season
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>
      {/* plans card */}
      {/* <PlansCard /> */}
      <div className="flex flex-row justify-center items-center gap-10 mt-6 cursor-pointer">
        <div className="h-[452px] w-[295px] rounded-xl hover:opacity-50  hover:border-4 border-gray-300  relative opacity-75">
          <img src="/Images/original.jpg" className="rounded-sm"></img>
          <div className="absolute top-0 text-white font-bold z-10  mx-4 mt-2 ">
            <span>Past & Current Seasons</span>
            <h3 className="font-bold text-[24px]">TV Shows</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px]  rounded-xl hover:opacity-50 hover:border-4 border-gray-300  relative opacity-75">
          <img src="\Images\original-1.jpg" className="rounded-sm"></img>
          <div className="absolute top-0 text-white font-bold z-10 mx-4 mt-2">
            <span>New & Classic Movies</span>
            <h3 className="font-bold text-[24px]">Movies</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px] rounded-xl hover:opacity-50  hover:border-4 border-gray-300  relative opacity-75">
          <img src="\Images\original-2.jpg" className="rounded-sm"></img>
          <div className="absolute top-0 text-white font-bold z-10  mx-4 mt-2">
            <span>GroundBreaking</span>
            <h3 className="font-bold text-[24px]">Hulu Originals</h3>
          </div>
        </div>

        <div className="h-[452px] w-[295px] rounded-xl hover:opacity-50 hover:border-4 border-gray-300  relative opacity-75">
          <img src="\Images\original-3.jpg" className="rounded-sm"></img>
          <div className="absolute top-0 text-white font-bold z-10  mx-4 mt-2">
            <span>Add on</span>
            <h3 className="font-bold text-[24px]">Premiums</h3>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-28">
        <h3 className="text-[#00ED82]">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
        </h3>
        <h1 className="text-white font-bold text-[48px]">
          Live TV Makes It Better
        </h1>
        <p className="max-w-3xl text-center text-[18px] mt-8 font-medium">
          Make the switch from cable. Get 90+ top channels on Hulu (With Ads) +
          Live TV with your favorite live sports, news, and events - plus the
          entire Hulu streaming library. With Unlimited DVR, store Live TV
          recordings for up to nine months and fast-forward through your DVR
          content. Access endless entertainment with Disney+ and live sports
          with ESPN+.
        </p>
        <span className="max-w-3xl text-center text-[10px] mt-8 text-gray-400">
          Regional restrictions, blackouts and Live TV terms apply. Access
          content from each service separately. Location data required to watch
          certain content. Unlimited DVR recording is not available for
          on-demand shows.
        </span>
        <h3 className="text-[16px] mt-6 font-bold underline">
          VIEW CHANNELS IN YOUR AREA →
        </h3>
      </div>
      <div>
        <span className="font-bold animate-bounce flex text-3xl mt-4">
          <div className="rotate-180"> ^ </div>
        </span>
      </div>

      <div className="" onClick={() => toggleTab()}>
        <div className="flex flex-col justify-start items-start max-w-md ">
          <h2 className="mt-6 font-medium underline">Live Sports</h2>
          <h1 className="mt-6 font-medium">Live Sports</h1>
          <p className="mt-6">
            Catch your games at home or on the go. Stream live games from major
            college and pro leagues including the NCAA®, NBA, NHL, NFL, and
            more.
          </p>
          <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-5">
            <img className=" rounded-full" src="/Images/small-1.png"></img>
            <img className=" rounded-full" src="/Images/small-2.png"></img>
            <img className=" rounded-full" src="/Images/small-3.png"></img>
            <img className=" rounded-full" src="/Images/small-4.png"></img>
          </div>
          <span className="mt-6 max-w-3xl text-[10px]">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. <u>See details.</u>
          </span>
        </div>
      </div>

      <div className="" onClick={() => toggleTab()}>
        <div className="flex flex-col justify-start items-start max-w-md">
          <h2 className="mt-6 font-medium underline">Breaking News</h2>
          <h1 className="mt-6 font-medium "> Breaking News</h1>
          <p className="mt-6">
            Keep pace with what's going on locally and globally with trusted
            opinions from all the top news networks.
          </p>
          <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-5">
            <img className=" rounded-full" src="/Images/abc-2.png"></img>
            <img className=" rounded-full" src="/Images/abc-3.png"></img>
            <img className=" rounded-full" src="/Images/abc-4.png"></img>
            <img className=" rounded-full" src="/Images/abc-5.png"></img>
          </div>
          <span className="mt-6 max-w-3xl text-[10px]">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. <u>See details.</u>
          </span>
        </div>
      </div>

      <div className="" onClick={() => toggleTab()}>
        <div className="flex flex-col justify-start items-start max-w-md">
          <h2 className="mt-6 font-medium underline">Biggest Event</h2>
          <h1 className="mt-6 font-medium ">Biggest Event</h1>
          <p className="mt-6">
            Spectacular, can't-miss moments like the Olympics, Grammys®,
            Oscars®, Emmys®, and more.
          </p>
          <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-5">
            <img className=" rounded-full" src="/Images/big-2.jpg"></img>
            <img className=" rounded-full" src="/Images/big-3.jpg"></img>
            <img className=" rounded-full" src="/Images/big-4.jpg"></img>
            <img className=" rounded-full" src="/Images/big-1.jpg"></img>
          </div>
          <span className="mt-6 max-w-3xl text-[10px]">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. <u>See details.</u>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Plans;
