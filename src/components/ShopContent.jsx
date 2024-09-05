import { useState } from "react";

const items = [
  { imageUrl: "/assets/mobile-product-week-3.jpg", title: "CLOTHS", count: 5 },
  { imageUrl: "/assets/mobile-product-week-3.jpg", title: "CLOTHS", count: 5 },
  { imageUrl: "/assets/mobile-product-week-3.jpg", title: "CLOTHS", count: 5 },
  { imageUrl: "/assets/mobile-product-week-3.jpg", title: "CLOTHS", count: 5 },
  { imageUrl: "/assets/mobile-product-week-3.jpg", title: "CLOTHS", count: 5 },
];

const Products = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 15.48,
    discountedPrice: 6.48,
    imageUrl: "/assets/mobile-bestseller-1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

const ShopContent = () => {
  const [visibleProducts, setVisibleProducts] = useState(5);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <div className="p-4 mt-10">
      {/* Mobil görünüm */}
      <div className="block md:hidden">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Shop</h1>
          <div className="breadcrumb mb-4">
            <span>Home</span> &gt; <span>Shop</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <h2 className="text-white text-lg font-bold">{item.title}</h2>
                  <p className="text-white">{item.count} Items</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
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
                <div className="flex items-center space-x-2 mb-4">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {visibleProducts < Products.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreProducts}
                className="bg-white text-[#23A6F0] px-8 py-2 rounded border border-[#23A6F0] font-bold text-sm"
              >
                LOAD MORE PRODUCTS
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Masaüstü görünüm */}
      <div className="hidden md:block">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Shop</h1>
          <div className="breadcrumb mb-4">
            <span>Home</span> &gt; <span>Shop</span>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
                  <h2 className="text-white text-lg font-bold">{item.title}</h2>
                  <p className="text-white">{item.count} Items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
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
                <div className="flex justify-center space-x-2 mb-4">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {visibleProducts < Products.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreProducts}
                className="bg-white text-[#23A6F0] px-8 py-2 rounded border border-[#23A6F0] font-bold text-sm"
              >
                LOAD MORE PRODUCTS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
