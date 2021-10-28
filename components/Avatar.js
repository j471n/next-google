import Image from "next/image";
export default function Avatar({ url, className }) {
  const defaultURL = "https://i.imgur.com/kGTbP8v.png";
  return (
    <Image
      className={`h-10 w-10 rounded-full cursor-pointer duration-150 hover:animate-pulse ${className}`}
      src={url ? url : defaultURL}
      alt="profile pic"
      width={40}
      height={40}
    />
  );
}
