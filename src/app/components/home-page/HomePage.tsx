"use client";

import { useEffect, useState } from "react";
import HomePageCategories from "../home-page-categories/HomePageCategories";
import HomePagePopular from "../home-page-popular/HomePagePopular";
import HomePageSearch from "../home-page-search/HomePageSearch";
import { Item } from "@/app/types/types";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const cats = [...new Set(data.map((item: Item) => item.category))];

      //IMPORTAMOS MAS CATEGORIAS AUNQUE ESTAS NO EXISTAN EN LA API
      cats.push("mobile", "games", "movies", "books", "music");

      setCategories(cats);
    }
  }, [data]);

  return (
    <main className="flex flex-col items-center gap-25 min-h-screen">
      <HomePageSearch />
      <HomePageCategories categories={categories} />
      <HomePagePopular data={data} />
    </main>
  );
}
