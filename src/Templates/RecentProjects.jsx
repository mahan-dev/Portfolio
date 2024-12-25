import React from "react";
import blogPic from "../assets/recent-templates-images/blog-pic.jpg";
import bookPic from "../assets/recent-templates-images/bookapp-pic.jpg";
import cryptoPic from "../assets/recent-templates-images/cryptoApp-pic.jpg";
import shopPic from "../assets/recent-templates-images/shopRedux-pic.jpg";
import codeIcon from "../assets/recent-templates-images/code.svg";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <section className="recent_wrapper">
      <h4 className="recent_title">Recent Projects</h4>

      <section className="recent_content">
        <div className="flex flex-col ">
          <img src={blogPic} alt="" width={400} />
          <div className="mx-2">
            <p className="mt-3">
              for showing deails of user's post and post comments
            </p>
            <div className="flex  justify-end mt-4 gap-2 items-center">
              <Link to={"https://github.com/mahan-dev/blogSite"} className="hover:bg-[#ccc] p-2 transition-all rounded-md text-[0.8rem]">show Code</Link>
              <img src={codeIcon} alt="" width={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <img src={bookPic} alt="" width={400} />
          <div className="flex flex-col flex-grow mx-2 h-full">
            <p className="flex flex-grow mt-3">search for book for buying it</p>
            <div className="flex  justify-end mt-4 gap-2 items-center">
              <Link to={"https://github.com/mahan-dev/bookApp"} className="hover:bg-[#ccc] p-2 transition-all rounded-md text-[0.8rem]">show Code</Link>
              <img src={codeIcon} alt="" width={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={cryptoPic} alt="" width={400} />
          <div className="flex flex-col mx-2 h-full">
            <p className="flex flex-grow mt-3">you can see the live crypto price in this app</p>
            <div className="flex  justify-end mt-4 gap-2 items-center">
              <Link to={"https://github.com/mahan-dev/cryptoApp"} className="hover:bg-[#ccc] p-2 transition-all rounded-md text-[0.8rem]">show Code</Link>
              <img src={codeIcon} alt="" width={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={shopPic} alt="" width={400} />
          <div className="mx-2">
            <p className="mt-3">shop is for buying and sale product purposes</p>
            <div className="flex  justify-end mt-4 gap-2 items-center">
              <Link to={"https://github.com/mahan-dev/shop_redux"} className="hover:bg-[#ccc] p-2 transition-all rounded-md text-[0.8rem]">show Code</Link>
              <img src={codeIcon} alt="" width={30} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RecentProjects;
