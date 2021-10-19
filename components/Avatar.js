import Image from "next/image";
export default function Avatar({ url, className }) {
  const defaultURL = "https://i.imgur.com/kGTbP8v.png";
  return (
    <Image
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url ? url : defaultURL}
      alt="profile pic"
      width={40}
      height={40}
    />
  );
}
