import Image from "next/image";
import InstagramIcon from "./InstagramIcon";
import PhoneIcon from "./PhoneIcon";
import MailIcon from "./MailIcon";
import { categoryList } from "@/constant";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="flex max-lg:flex-col items-start justify-between md:mx-20 md:px-16 md:py-20 p-3 max-lg:gap-12 bg-[#F9FFF6] rounded-3xl">
        <div className="space-y-5 md:w-96">
          <Image src="/logo.png" alt="Logo" width={207} height={50} />

          <p className="text-lightgray font-normal text-sm">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>

          <div className="flex items-center gap-2">
            <a
              href="mailto:elemesid@gmail.com"
              className="group w-max p-2 hover:bg-primary rounded-full">
              <MailIcon className="group-hover:text-white text-primary" />
            </a>

            <a
              href="tel:0888 1111 2222"
              className="group w-max p-2 hover:bg-primary rounded-full">
              <PhoneIcon className="group-hover:text-white text-primary" />
            </a>

            <a
              href="https://instagram.com"
              className="group w-max p-2 hover:bg-primary rounded-full">
              <InstagramIcon className="group-hover:text-white text-primary" />
            </a>
          </div>
        </div>

        <ul className="space-y-4">
          <h4 className="text-lg mb-8">Categories</h4>
          {categoryList.map((category, i) => (
            <li className="text-lightgray font-normal text-sm">
              {category.name}
            </li>
          ))}
        </ul>

        <ul className="space-y-4">
          <h4 className="text-lg mb-8">About Us</h4>
          <li className="text-lightgray font-normal text-sm">About Us</li>
          <li className="text-lightgray font-normal text-sm">FAQ</li>
          <li className="text-lightgray font-normal text-sm">Report Problem</li>
        </ul>

        <div className="space-y-5">
          <h4 className="text-lg">Newsletter</h4>
          <p className="text-sm text-lightgray font-normal w-60">
            Get now free 50% discount for alll products on your first order
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Your email address"
              className="p-2 px-4 outline-none border border-black rounded-tl-xl rounded-bl-xl placeholder:text-black"
            />
            <button className="bg-primary text-white px-2 rounded-tr-xl rounded-br-xl">
              Send
            </button>
          </div>

          <a
            href="mailto:elemesid@gmail.com"
            className="flex items-center gap-2">
            <MailIcon className="text-primary" />
            <span className="text-sm font-normal">elemesid@gmail.com</span>
          </a>

          <a href="tel:0888 1111 2222" className="flex items-center gap-2">
            <PhoneIcon className="text-primary" />
            <span className="text-sm font-normal"> 0888 1111 2222 </span>
          </a>
        </div>
      </div>

      <p className="text-center text-xs font-normal text-lightgray my-12">
        © 2021 Elemes id. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
