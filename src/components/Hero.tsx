import Button from "./ui/Button";
import HeroImage from "./ui/HeroImage";

const Hero = () => {
  return (
    <section className="flex gap-40 items-center mt-10">
      <div className="flex flex-col gap-8 md:w-[482px]">
        <h1 className="text-primary text-5xl md:text-[64px] md:leading-[64px]">
          Good Food Us Good Mood
        </h1>

        <HeroImage className="lg:hidden" />

        <p className=" md:text-lg text-lightgray font-normal">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>

        <div className="flex gap-4">
          <Button>Daftar Sekarang</Button>
          <Button variant="secondary">About Us</Button>
        </div>
      </div>

      <HeroImage className="max-lg:hidden" />
    </section>
  );
};

export default Hero;
