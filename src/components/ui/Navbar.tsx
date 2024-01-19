import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="px-3 py-5 md:h-24 md:py-2 md:px-40 flex items-center justify-between">
      <figure className="w-[150px] h-9 md:w-52 md:h-12">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="w-full"
        />
      </figure>

      <ul className="flex items-center gap-9 text-lightgray max-lg:hidden">
        <li>Home</li>
        <li>About</li>
        <li className="relative">
          <p>Promotions</p>
          <p className="absolute -top-4 right-0 rounded-full px-2 py-1 bg-red-500 text-white text-[8px] font-bold">
            HOT
          </p>
        </li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>

      <div className="flex items-center gap-6">
        <button className="max-md:hidden">Masuk</button>
        <Button className="text-sm">Daftar Sekarang</Button>
      </div>
    </header>
  );
};

export default Navbar;
