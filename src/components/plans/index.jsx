import React, { useState } from "react";
import Link from "next/link";
import PlansCard from "./plansCard";

const Plans = () => {
  const [toggleState, setToggleState] = useState(1);
  const tabData = [
    { name: "Live Sports", key: "live" },
    { name: "Breaking News", key: "breaking" },
    { name: "Biggest Event", key: "biggest" },
  ];
  const [selectedTab, setselectedTab] = useState("live");
  console.log(selectedTab, "TAB");

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
      <div className="relative w-full">
        <div className="w-full flex items-end  absolute h-[25.3%]">
          <div className="flex justify-start w-full container items-center gap-9 ml-[210px]">
            {tabData?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setselectedTab(item?.key)}
                  className={`px-px font-semibold text-white pb-4 ${
                    selectedTab === item?.key && "border-b-4"
                  }`}
                >
                  {item?.name}
                </button>
              );
            })}
          </div>
        </div>

        {selectedTab === "live" ? (
          <>
            {
              <div className=" flex flex-col justify-start items-start ml-52 absolute mt-60">
                <h1 className="font-bold text-[50px]">Live Sports</h1>
                <p className="mt-[8px] w-96">
                  Catch your games at home or on the go. Stream live games from
                  major college and pro leagues including the NCAA®, NBA, NHL,
                  NFL, and more.
                </p>
                <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-6">
                  <img
                    className=" rounded-full"
                    src="/Images/small-1.png"
                  ></img>
                  <img
                    className=" rounded-full"
                    src="/Images/small-2.png"
                  ></img>
                  <img
                    className=" rounded-full"
                    src="/Images/small-3.png"
                  ></img>
                  <img
                    className=" rounded-full"
                    src="/Images/small-4.png"
                  ></img>
                </div>
                <span className=" max-w-3xl text-[10px] mt-[24px]">
                  Live TV plan required. Regional restrictions, blackouts and
                  additional terms apply.<u>See details.</u>
                </span>
              </div>
            }
            {/* image div */}
            <div>
              <img
                className="w-[1881px] h-[870px] flex-wrap"
                src="Images/tab-image-2.jpg"
              ></img>
            </div>
          </>
        ) : selectedTab === "breaking" ? (
          <div>
            <div className="justify-start items-start ml-52  absolute  mt-60">
              <h1 className=" font-bold text-[50px]">Breaking News</h1>
              <p className="mt-[8px] w-96">
                Keep pace with what's going on locally and globally with trusted
                opinions from all the top news networks.
              </p>
              <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-5 mb-5">
                <img className=" rounded-full" src="/Images/abc-2.png"></img>
                <img className=" rounded-full" src="/Images/abc-3.png"></img>
                <img className=" rounded-full" src="/Images/abc-4.png"></img>
                <img className=" rounded-full" src="/Images/abc-5.png"></img>
              </div>

              <span className=" max-w-3xl text-[10px] mt-[24px] ">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply. <u>See details.</u>
              </span>
            </div>

            <div>
              <img
                className="w-[1881px] h-[870px] flex-wrap"
                src="Images/tab-image-1.jpg"
              ></img>
            </div>
          </div>
        ) : (
          <div>
            <div className="justify-start items-start ml-52 absolute mt-60">
              <h1 className=" font-bold text-[50px]">Biggest Event</h1>
              <p className="mt-[8px] w-96">
                Spectacular, can't-miss moments like the Olympics, Grammys®,
                Oscars®, Emmys®, and more.
              </p>
              <div className="flex flex-row gap-8 h-[55px] w-[55px] mt-5 mb-5">
                <img className=" rounded-full" src="/Images/big-2.jpg"></img>
                <img className=" rounded-full" src="/Images/big-3.jpg"></img>
                <img className=" rounded-full" src="/Images/big-4.jpg"></img>
                <img className=" rounded-full" src="/Images/big-1.jpg"></img>
              </div>
              <span className=" max-w-3xl text-[10px] mt-[24px]">
                Live TV plan required. Regional restrictions, blackouts and
                additional terms apply. <u>See details.</u>
              </span>
            </div>
            <div>
              <img
                className="w-[1881px] h-[870px] flex-wrap"
                src="Images/tab-image-3.jpg"
              ></img>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white h-[494px] w-[1902px]">
        <div className="flex flex-row gap-28 ml-[281px] h-[332px] w-[1320px] justify-center items-center text-slate-400 mb-8">
          <div>
            <h2 className="font-bold text-stone-600">BROWSE</h2>
            <h1 className="mt-1">Streaming Library</h1>
            <h1 className="mt-1">Live TV</h1>
            <h1 className="mt-1">Live News</h1>
            <h1 className="mt-1">Live Sports</h1>
          </div>
          <div className="mt-20">
            <h1 className="mt-1">TV Shows</h1>
            <h1 className="mt-1">Originals</h1>
            <h1 className="mt-1">Movies</h1>
            <h1 className="mt-1">Networks</h1>
            <h1 className="mt-1">Kids</h1>
            <h1 className="mt-1">FX</h1>
          </div>
          <div className="mt-4">
            <h1 className="mt-1">Max</h1>
            <h1 className="mt-1">Cinemax</h1>
            <h1 className="mt-1">Showtime</h1>
            <h1 className="mt-1">STARZ</h1>
          </div>
          <div className="mt-10">
            <h1 className="mt-1">Disney Bundle trio Basic</h1>
            <h1 className="w-36 mt-1">Disney Bundle trio Premium</h1>
            <h1 className="mt-1">Disney Bundle Duo Basic</h1>
            <h1 className="mt-1">Student Discount</h1>
          </div>
          <div>
            <h1 className="font-bold text-stone-600">HELP</h1>
            <h1 className="mt-1">Account & Billing</h1>
            <h1 className="mt-1">Plans & Pricing</h1>
            <h1 className="mt-1">Supported Device</h1>
            <h1 className="mt-1">Accessibility</h1>
          </div>
          <div>
            <h1 className="font-bold text-stone-600">ABOUT US</h1>
            <h1 className="mt-1">Shop hulu</h1>
            <h1 className="mt-1">Press</h1>
            <h1 className="mt-1">Jobs</h1>
            <h1 className="mt-1">Contact</h1>
          </div>
        </div>
        <div className="border-b-2 border-grey-400 w-[1320px] ml-72"></div>
        <div className=" h-[494px] w-[1902px]">
          <div className="h-[32px] w-[169px] flex flex-start gap-5 ml-80 mt-6">
            <img className="h-[30px] w-[30px]" src="Images/fb.png"></img>
            <img className="h-[30px] w-[30px]" src="Images/twitter.png"></img>
            <img className="h-[30px] w-[30px]" src="Images/utube.png"></img>
            <img className="h-[30px] w-[30px]" src="Images/insta.png"></img>
          </div>

          <div className="flex flex-row gap-16 text-slate-400 ml-80 mt-6 ">
            <h2 className="text-[14px]">© 2023 Hulu, LLC</h2>
            <h2 className="text-[14px]">About Ads</h2>
            <h2 className="text-[14px]">Privacy Policy</h2>
            <h2 className="text-[14px]">Do Not Sell My Personal Information</h2>
            <h2 className="text-[14px]">Your California Privacy Rights</h2>
            <h2 className="text-[14px]">TV Parental Guidelines</h2>
            <h2 className="text-[14px]">Site map</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
