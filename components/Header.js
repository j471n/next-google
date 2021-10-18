import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

export default function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white font-sans">
      <div className="flex w-full p-6 items-center ">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-md max-w-3xl flex-grow items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={ router.query.term}
          />

          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-400 cursor-pointer" />

          <button type="submit" onClick={search}>
            <SearchIcon className="h-6 text-blue-500 pl-2 cursor-pointer" />
          </button>
        </form>

        <Avatar className="ml-auto hidden sm:inline-flex" />


      </div>
        <HeaderOptions />
    </header>
  );
}
