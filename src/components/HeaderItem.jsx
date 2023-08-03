import { useRouter } from "next/router";
import React from "react";

function HeaderItem({ Icon, title, linkTo = "" }) {
  const router = useRouter();

  const handleIconClick = () => {
    router.push(`/${linkTo}`);
    // router.push(`${linkTo}`);
  };
  return (
    <div
      onClick={() => handleIconClick()}
      className="flex flex-col items-center cursor-pointer group
         w-12 sm:w-20 hover:text-white"
    >
      {Icon && <Icon className="h-8 mb-1 group-hover:animate-bounce" />}
      <p
        className="opacity-0 group-hover:opacity-100
            tracking-widest"
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
