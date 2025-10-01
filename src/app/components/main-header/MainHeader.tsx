export default function MainHeader() {
  return (
    <header className="flex flex-row justify-between items-center h-30 px-4 py-4 sticky top-0 z-50 bg-[#090c10]">
      <div>
        <p className="font-bold text-2xl cursor-default">Gamebuy 2.0</p>
      </div>

      <nav>
        <ul className="flex flex-row gap-6 font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
