import Image from "next/image";

export default function TopValue({img, title, p1, p2})
{
    return (
        <div className="flex flex-col items-center">
                <Image
                  src={`/svg/icon/${img}`}
                  alt="booking"
                  className="rounded-full p-3 bg-[#092928]"
                  width={60}
                  height={60}
                />
                <a className="item-center mt-2 justify-center font-ptserif md:text-lg font-black text-md">
                  {title}
                </a>
                <p className="item-center justify-center font-ptserif text-2xs font-light md:text-xs">
                  {p1}
                </p>
                <p className="item-center justify-center font-ptserif text-2xs font-light md:text-xs">
                  {p2}
                </p>
              </div>
    )
}