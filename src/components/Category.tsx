import { categoryList } from "@/constant";
import Image from "next/image";

const Category = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl">Browser Our Category</h1>
      <p className="text-2xl md:text-4xl text-primary">Receipt</p>

      <div className="w-full max-lg:overflow-hidden max-lg:overflow-x-scroll">
        <div className="flex gap-3 py-5 items-center lg:justify-center mt-11">
          {categoryList.map((category, i) => (
            <div
              key={i}
              style={{ backgroundColor: category.bgcolor }}
              className="flex flex-[0_0_230px] gap-2 py-10 justify-center items-center flex-col hover:scale-105 transition duration-200 cursor-pointer space-y-7 rounded-md drop-shadow-lg">
              <Image
                alt={category.name}
                src={category.icon}
                width={50}
                height={50}
              />

              <div className="text-center">
                <h3>{category.name}</h3>
                <p className="text-sm font-normal">
                  {category.totalItems} Items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
