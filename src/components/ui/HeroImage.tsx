import Image from "next/image";
import React from "react";
import StarIcon from "./StarIcon";

const HeroImage = ({ className }: { className?: string }) => {
  return (
    <figure
      className={`bg-gray-100/60 p-14 rounded-full relative ${className}`}>
      <Image src="/greensalad.png" width={412} height={414} alt="Green salad" />

      <div className="absolute flex items-center gap-4 bg-white/80 px-6 py-3 rounded-xl md:bottom-10 bottom-5 md:-left-7 drop-shadow-2xl">
        <Image src="/greensalad.png" width={53} height={53} alt="Green salad" />

        <div>
          <h3 className="text-sm font-semibold">Green Salad Tomato</h3>

          <p className="text-lightgray text-xs font-normal">Tomato</p>

          <div className="flex gap-1 items-center mt-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon variant="gray" />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default HeroImage;
