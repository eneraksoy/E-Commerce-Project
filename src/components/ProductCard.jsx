const ProductItem = ({ src, title }) => (
  <div className="relative h-full">
    <img src={src} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full lg:w-auto bg-[#2D8BC0BF] py-12 px-20 text-white">
      <h3 className="text-2xl w-2/3 font-bold pb-8">{title}</h3>
      <button className="py-2 mt-2 bg-transparent border rounded font-bold px-8">
        Explore Items
      </button>
    </div>
  </div>
);

const ProductCard = () => {
  return (
    <div className="">
      {/* Mobil İçin Düzen */}
      <div className="flex flex-col space-y-4 lg:hidden">
        <ProductItem
          src="/assets/mobile-product-week-1.jpg"
          title="Top Product Of the Week"
        />
        <ProductItem
          src="/assets/mobile-product-week-2.jpg"
          title="Top Product Of the Week"
        />
        <ProductItem
          src="/assets/mobile-product-week-3.jpg"
          title="Top Product Of the Week"
        />
      </div>

      {/* Masaüstü İçin Düzen */}
      <div className="hidden lg:flex lg:gap-4 ">
        <div className="w-1/2 ">
          <ProductItem
            src="/assets/desktop-product-week-1.jpg"
            title="Top Product Of the Week"
          />
        </div>
        <div className="w-1/2 flex flex-col space-y-4 h-full">
          <div className="h-1/2">
            <ProductItem
              src="/assets/desktop-product-week-2.jpg"
              title="Top Product Of the Week"
            />
          </div>
          <div className="h-1/2">
            <ProductItem
              src="/assets/desktop-product-week-3.jpg"
              title="Top Product Of the Week"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
