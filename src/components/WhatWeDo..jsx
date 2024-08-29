const WhatWeDo = () => {
  return (
    <div className="">
      {/* Mobil Görünüm */}
      <div className="block md:hidden">
        <div className="pl-16 pr-24 py-10">
          <h3 className="text-[#23A6F0] font-bold mt-20">Featured Products</h3>
          <h2 className="text-5xl font-bold mt-6 ">We love what we do</h2>
          <p className="text-gray-500 mt-6 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-gray-500 mt-4 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="flex flex-row gap-2 mt-4 mx-6 ">
          <img src="/assets/mobile-what-we-do-1.png" className="" />
          <img src="/assets/mobile-what-we-do-2.png" className="ml-auto" />
        </div>
      </div>

      {/* Masaüstü Görünüm */}
      <div className="hidden md:flex  gap-6 mt-32 p-24">
        <div className="flex-1 flex gap-5">
          <img src="/assets/desktop-what-we-do-1.png" className="w-3/8 " />
          <img src="/assets/desktop-what-we-do-2.png" className="w-5/8 " />
        </div>
        <div className="flex-1 flex flex-col justify-center ">
          <h3 className="text-[#23A6F0] font-bold">Featured Products</h3>
          <h2 className="text-5xl font-bold mt-4">We love what we do</h2>
          <p className="text-gray-500 mt-4 p">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p className="text-gray-500 mt-2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
