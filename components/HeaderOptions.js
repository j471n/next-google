import HeaderOption from "./HeaderOption";

import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
export default function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 dark:text-gray-400 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] dark:border-gray-700">
      {/* Left */}

      <div className="flex space-x-6 justify-evenly sm:justify-start w-full sm:w-auto  ">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Map" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="hidden space-x-4  sm:inline-flex">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}
