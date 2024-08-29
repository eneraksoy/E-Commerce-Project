import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      {/* Mobil İçerik */}
      <section className="relative flex lg:hidden">
        <img
          src="/assets/mobile-header-1.png"
          className="w-7/12 object-cover"
        />
        <img
          src="/assets/mobile-header-2.png"
          className="w-5/12 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center  px-6">
          <h1 className="text-3xl font-bold text-center leading-tight w-1/2">
            Multicoloured Tie-dye Sweater
          </h1>
          <p className="mt-2 text-lg text-center w-1/2">
            We know how large objects will act.
          </p>
          <button className="mt-10 px-6 py-2 bg-transparent border border-white text-white rounded font-bold">
            Shop Now
          </button>

          <Button className="text-white" variant="outline" size={"lg"}>
            Shop Now
          </Button>
        </div>
      </section>

      {/* Desktop İçerik */}
      <section className="hidden lg:flex relative mx-auto">
        <div className="w-1/2 h-[80vh] flex flex-col justify-center items-center bg-cover bg-no-repeat bg-[url('/assets/desktop-header-1.png')]">
          <div className="text-white max-w-md">
            <h2 className="text-xl font-bold">SUMMER 2020</h2>
            <h1 className="text-5xl font-bold leading-tight w-3/4">
              Multicoloured Tie-dye Sweater
            </h1>
            <p className="mt-4 text-xl w-3/4">
              We know how large objects will act.
            </p>
            <button className="mt-6 px-8 py-3 bg-transparent border border-white text-white rounded font-bold">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[80vh] bg-cover bg-no-repeat bg-[url('/assets/desktop-header-2.png')]">
          {/* Sağ taraf sadece görsel */}
        </div>
      </section>
    </>
  );
};

export default Hero;
