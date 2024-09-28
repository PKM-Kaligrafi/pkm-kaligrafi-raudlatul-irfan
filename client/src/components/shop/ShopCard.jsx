import Image from "next/image";

export default function ShopCard(key) {
  return (
    <div className="font-ptserif">
      <div className="relative flex aspect-[3/4] w-36 items-end justify-end rounded-2xl bg-[#092928] md:w-80">
        <Image
          src="/webp/caligraphy01.webp"
          width={100}
          height={100}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute aspect-square w-12 rounded-full bg-[#E9B472] md:w-20">
          <Image
            src="/svg/icon/plus.svg"
            width={100}
            height={100}
            className="w-full p-4"
          />
        </div>
      </div>
      <h1 className="font-semibold md:text-2xl">Lorem</h1>
      <p className="text-xs md:text-xl">{item.price}</p>
    </div>
  );
}
