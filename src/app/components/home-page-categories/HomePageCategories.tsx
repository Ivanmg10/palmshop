import Image from "next/image";

interface Props {
  categories: string[];
}

export default function HomePageCategories({ categories }: Props) {
  console.log(categories);
  return (
    <section className="flex flex-col w-full relative">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-2xl font-semibold cursor-default">
          Select categories
        </p>
      </div>
      <ul className="flex flex-row flex-wrap gap-4 mt-10">
        {categories.map((categorie) => (
          <li
            className="flex flex-col justify-center items-center text-center gap-4 bg-[#161b22] p-5 rounded-xl hover:scale-y-120 hover:scale-x-110 transition-transform cursor-pointer w-1/10"
            key={categorie}
          >
            {/* <Image
              src={console.image}
              alt={console.name}
              width={50}
              height={50}
            /> */}
            <p>{categorie}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
