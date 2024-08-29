import { useState } from "react";

const Products = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-2.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-3.png",
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-4.png",
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-5.png",
  },
];

const BestSeller = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  return (
    <div className="p-4 mt-10">
      {/* Mobil görünüm */}
      <div className="block md:hidden">
        <h2 className="text-center text-2xl font-bold">
          BESTSELLER <br />
          PRODUCTS
        </h2>
        <p className="text-center text-gray-500 mt-3">
          Problems trying to resolve the conflict between
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-8">
          {Products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg w-full text-center flex flex-col items-center"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover mb-4"
              />
              <h3 className="text-md font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.department}</p>
              <p className="text-md line-through text-gray-400">
                ${product.originalPrice.toFixed(2)}
              </p>
              <p className="text-lg font-bold text-green-600 ">
                ${product.discountedPrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        {visibleProducts < Products.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="bg-white text-[#23A6F0] px-8 py-2 rounded border border-[#23A6F0] font-bold  text-sm "
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </div>

      {/* Masaüstü görünüm */}
      <div className="hidden md:block">
        <h3 className="text-center font-bold text-gray-500">
          Featured Products
        </h3>
        <h2 className="text-center text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-center text-gray-500 mt-3">
          Problems trying to resolve the conflict between
        </p>
        <div className="flex gap-6 justify-center mt-8">
          {Products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg w-1/4 text-center"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover mb-4"
              />
              <h3 className="text-md font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.department}</p>
              <p className="text-md line-through text-gray-400">
                ${product.originalPrice.toFixed(2)}
              </p>
              <p className="text-lg font-bold text-green-600">
                ${product.discountedPrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        {visibleProducts < Products.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="bg-white text-[#23A6F0] px-8 py-2 rounded border border-[#23A6F0] font-bold  text-sm "
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
