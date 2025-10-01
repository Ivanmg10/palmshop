import Image from "next/image";
import logo from "../../../../public/logo.png";

export default function MainFooter() {
  return (
    <footer className="flex flex-row justify-between items-center p-7 mt-10">
      <div className="flex flex-row items-center gap-4">
        <Image src={logo} alt="logo" width={75} height={75} />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <p className="cursor-default">Language: </p>
            <div className="flex flex-row gap-4">
              <p className="cursor-pointer text-[#1891ac]">English</p>
              <p className="cursor-pointer">Español</p>
              <p className="cursor-pointer">Français</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <p className="cursor-default">Currency: </p>
            <div className="flex flex-row gap-4">
              <p className="cursor-pointer text-[#1891ac]">USD</p>
              <p className="cursor-pointer">EUR</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="cursor-default">© 2023 Gamebuy</p>
      </div>
    </footer>
  );
}
