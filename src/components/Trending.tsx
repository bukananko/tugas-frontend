import { trendingList } from "@/constant";
import Image from "next/image";
import StarIcon from "./ui/StarIcon";
import Button from "./ui/Button";

const Trending = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl">Browser Our Trending</h1>
      <p className="text-2xl md:text-4xl text-primary">Receipt</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-11">
        {trendingList.map((trending, i) => (
          <div
            key={i}
            style={{ backgroundColor: trending.bgcolor }}
            className="lg:w-72 p-3 md:p-6 space-y-7 rounded-2xl drop-shadow-xl hover:scale-105 transition duration-200 cursor-pointer">
            <figure className="size-16 md:size-28">
              <Image
                alt={trending.name}
                src={trending.img}
                width={110}
                height={110}
                className="rounded-md w-full"
              />
            </figure>

            <div>
              <h3 className="text-lg md:text-2xl">{trending.name}</h3>

              <p className="md:text-lg text-primary mb-2">
                {trending.category}
              </p>

              <div className="flex items-center gap-0.5">
                {new Array(trending.rating).fill(0).map((_, i) => (
                  <StarIcon key={i} />
                ))}

                {new Array(Math.abs(trending.rating - 5))
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon key={i} variant="gray" />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center mt-16">
        <Button className="px-7">All Receipt</Button>
      </div>
    </section>
  );
};

export default Trending;

// next lanjut ini.
