import Image from "next/image";
import shopping from "../../../../public/shopping.svg";
import shopping_2 from "../../../../public/shopping_2.svg";

export default function HomePageSearch() {
  return (
    <section className="flex flex-col items-center w-full h-150 relative bg-[#161b22] rounded-4xl">
      <Image
        src={shopping}
        alt="logo"
        className="absolute right-20 bottom-0 p-5 z-20"
        width={500}
        height={500}
      />

      <Image
        src={shopping_2}
        alt="logo"
        className="absolute right-0 top-0 p-5 z-10"
        width={500}
        height={500}
      />

      <div className="absolute top-1/3 left-30 cursor-default w-1/3">
        <p className="text-white text-5xl font-bold">Store for people</p>
        <p className="text-white text-2xl">shopping with joy</p>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-white rounded-full py-2 px-5 mt-5 text-black"
        />
      </div>
    </section>
  );
}
