import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";


function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[35rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>{" "}
        <div className={SocialStyle}>
          <Twitter />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTube />
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, recusandae id. Assumenda eveniet, tenetur culpa placeat neque ab.
      </span>
    </div>
  );
}

export default Footer;