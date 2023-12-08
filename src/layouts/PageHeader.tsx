import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";

import Button from "../component/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={` gap-4 flex-shrink-0 items-center ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <p className="text-xl font-bold font-sans">MADExTUBE</p>
      </div>
      <form
        className={`flex-grow  justify-center gap-4  ${
          showFullWidthSearch ? "flex" : " hidden  md:flex "
        }`}>
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0">
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="seach"
            placeholder="Search"
            className=" w-full py-1 px-4 text-lg  rounded-l-full border border-secondary-border shadow-inner shadow-secondary  focus:border-blue-600 outline-none"
          />
          <Button className=" flex-shrink-0 py-2 px-5 rounded-r-full  border-secondary-border border border-l-0 ">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}>
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className=" md:hidden"
          size="icon"
          variant="ghost">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
