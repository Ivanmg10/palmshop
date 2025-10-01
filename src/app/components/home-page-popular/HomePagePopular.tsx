"use client";

import Image from "next/image";
import { Item } from "@/app/types/types";
import { useEffect, useState } from "react";

interface Props {
  data: Item[];
}

export default function HomePagePopular({ data }: Props) {
  const [mostPopular, setMostPopular] = useState<Item[]>([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setMostPopular(data.slice(0, 8));
    }
  }, [data]);

  const clickShowAll = () => {
    if (showAll) {
      setMostPopular(data);
      setShowAll(false);
    } else {
      setMostPopular(data.slice(0, 8));
      setShowAll(true);
    }
  };

  return (
    <section className="flex flex-col w-full relative">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-2xl font-semibold cursor-default">Most Popular</p>
        <button
          className="text-white text-1xl px-5 font-semibold cursor-pointer"
          onClick={() => clickShowAll()}
        >
          {showAll ? "Show all" : "Show less"}
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {mostPopular.map((game) => (
          <article
            className="flex flex-col justify-center items-start gap-4 bg-[#161b22] p-2 rounded-xl  cursor-pointer col-span-1 hover:bg-[#242f3f] transition-colors duration-200 "
            key={game.id}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={game.image}
                alt={game.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
            <div className="p-3">
              <p className="text-xl font-semibold">{game.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
