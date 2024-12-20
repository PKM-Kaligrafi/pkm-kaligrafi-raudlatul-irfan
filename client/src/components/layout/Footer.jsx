import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0">
      <div className="text-2xs mx-6 flex flex-col items-center gap-6 border-b-2 border-t-2 border-[#092928] py-6 font-ptserif text-xs font-semibold md:mx-8 md:flex-row md:justify-between md:border-t-0">
        <h1 className="md:px-10 md:text-base">Raudlatul Irfan</h1>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-4xs flex flex-col items-center gap-2 -space-y-2 font-normal md:flex-row md:gap-20 md:space-y-0 md:text-xs">
              <Link href="/">Home</Link>
              <Link href="/service">Service</Link>
              <Link href="/about-us">About</Link>
              <Link href="/shop">Shop</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full px-8 py-2 text-center font-ptserif text-xs md:py-4 md:text-left md:text-xs">
        Copyright &copy; 2024 Raudlatul Irfan All Rights Reserved
      </p>
    </div>
  );
}
