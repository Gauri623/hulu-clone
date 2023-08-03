import React from "react";

function PlansCard({ allData }) {
  return (
    <div className="h-[452px] w-[295px] hover:opacity-50">
      <img src="/Images/original.jpg" />
      <div className="absolute">
        <span>{allData?.title || ""}</span>
        <h3 className="font-bold">{allData?.description || ""}</h3>
      </div>
    </div>
  );
}

export default PlansCard;
