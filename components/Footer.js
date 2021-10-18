import { GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    fetch("http://ip-api.com/json/?fields=country,city")
      .then((res) => res.json())
      .then((data) => setCurrentCountry(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 dark:bg-secondary-dark text-sm ">
      {currentCountry && (
        <div className="px-8 py-3 flex items">
          <a href="https://ipinfo.io/" target="_blank">
            <LocationMarkerIcon className="h-5 text-gray-500 mr-2" />
          </a>
          <p className="capitalize">{`${currentCountry.city}, ${currentCountry.country}`}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 sm:gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral since
          2007
        </div>

        <div className=" flex justify-center space-x-8 whitespace-nowrap md:justify-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>

        <div className="flex justify-center space-x-8 md:ml-auto ">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Setting</p>
        </div>
      </div>
    </footer>
  );
}
