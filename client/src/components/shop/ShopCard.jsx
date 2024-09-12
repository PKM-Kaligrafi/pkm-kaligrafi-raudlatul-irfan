import Image from "next/image";

export default function ShopCard() {
  return (
    <div className="font-ptserif">
      <div className="flex aspect-[3/4] w-36 items-end justify-end rounded-2xl bg-[#092928]">
        <div className="aspect-square w-12 rounded-full bg-[#E9B472]">
          <Image
            src="/svg/icon/plus.svg"
            width={100}
            height={100}
            className="w-full p-4"
          />
        </div>
      </div>
      <h1 className="font-semibold">Lorem</h1>
      <p className="text-xs">Rp 10.000,00</p>
    </div>
  );
}
