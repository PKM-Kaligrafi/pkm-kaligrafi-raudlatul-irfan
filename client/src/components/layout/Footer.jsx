export default function Footer() {
  return (
    <div className="mt-8">
      <div className="text-2xs mx-6 flex flex-col items-center gap-6 border-b-2 border-t-2 border-[#092928] py-4 font-ptserif text-xs font-semibold">
        <h1>Raudlatul Irfan</h1>
        <div className="flex gap-4">
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xs">Lorem Ipsum</h1>
          <div className="text-4xs flex flex-col font-normal">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <p className="text-4xs w-full py-2 text-center font-ptserif">
        Copyright &copy; 2024 Raudlatul Irfan All Rights Reserved
      </p>
    </div>
  );
}
