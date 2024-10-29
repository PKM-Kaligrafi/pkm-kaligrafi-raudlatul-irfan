export default function Footer() {
  return (
    <div className="bottom-0 mt-20 md:mt-32">
      <div className="mx-6 flex flex-col items-center gap-6 border-b-2 border-t-2 border-[#092928] py-6 font-ptserif text-2xs text-xs font-semibold md:mx-8 md:flex-row md:justify-between md:border-t-0">
        <h1 className="md:px-10 md:text-base">Raudlatul Irfan</h1>
        <div className="flex gap-4 md:hidden">
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col items-center md:items-start">
            {/* <h1 className="text-3xs md:text-base">Lorem Ipsum</h1> */}
            <div className="flex flex-col -space-y-2 text-4xs items-center font-normal md:space-y-0 md:text-xs md:flex-row md:gap-20">
              <p>Home</p>
              <p>Service</p>
              <p>About</p>
              <p>Shop</p>
            </div>
          </div>
          {/* <div className="hidden flex-col items-center md:flex md:items-start">
            <h1 className="text-3xs md:text-base">Lorem Ipsum</h1>
            <div className="flex flex-col -space-y-2 text-4xs font-normal md:space-y-0 md:text-xs">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="hidden flex-col items-center md:flex md:items-start">
            <h1 className="text-3xs md:text-base">Lorem Ipsum</h1>
            <div className="flex flex-col -space-y-2 text-4xs font-normal md:space-y-0 md:text-xs">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>*/}
        </div> 
        <div className="hidden flex-col gap-4 md:flex">
          <div className="h-5 w-5 rounded-full bg-[#092928]"></div>
          <div className="h-5 w-5 rounded-full bg-[#092928]"></div>
          <div className="h-5 w-5 rounded-full bg-[#092928]"></div>
        </div>
      </div>
      <p className="w-full px-8 py-2 text-center font-ptserif text-4xs md:py-4 md:text-left md:text-xs">
        Copyright &copy; 2024 Raudlatul Irfan All Rights Reserved
      </p>
    </div>
  );
}
