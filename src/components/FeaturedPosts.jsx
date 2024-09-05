import React from "react";

const FeaturedPosts = () => {
  // Post verilerini bir dizi olarak tanımlıyoruz.
  const posts = [
    {
      imageMobile: "/assets/mobile-featured-posts-1.png",
      imageDesktop: "/assets/desktop-featured-posts-1.png",
      tag: "Sale",
      department: "English Department",
      title: "Graphic Design",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: "4.9",
      price: "$6.48",
      originalPrice: "$16.48",
      sales: "15 Sales",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      time: "22h",
      lessons: "64 Lessons",
      progress: "Progress",
    },
    {
      imageMobile: "/assets/mobile-featured-posts-2.png",
      imageDesktop: "/assets/desktop-featured-posts-2.png",
      tag: "Sale",
      department: "English Department",
      title: "Graphic Design",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: "4.9",
      price: "$6.48",
      originalPrice: "$16.48",
      sales: "15 Sales",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      time: "22h",
      lessons: "64 Lessons",
      progress: "Progress",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-sm font-medium text-[#23A6F0] text-center mb-1">
        Practice Advice
      </h2>
      <h2 className="text-4xl font-bold text-center mb-6">Featured Posts</h2>

      {/* Mobil Tasarım */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative">
              <img src={post.imageMobile} alt={post.title} className="w-full" />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2 gap-3">
                <span className="text-[#8EC2F2]">{post.department}</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>
                  <i className="fa-regular fa-clock text-[#23A6F0]"></i> 22
                  April 2021
                </span>
                <span className="flex items-center space-x-1">
                  <span>
                    <i className="fa-solid fa-chart-area text-[#23856D]"></i> 10
                    comments
                  </span>
                </span>
              </div>
              <a
                href="#"
                className="text-gray-500 text-sm font-bold mt-2 inline-block"
              >
                Learn More{" "}
                <i className="fa-solid fa-chevron-right text-[#23A6F0]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Masaüstü Tasarım */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-lg border border-gray-200"
          >
            <div className="relative md:w-1/2">
              <img
                src={post.imageDesktop}
                alt={post.title}
                className="w-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
              <div className="absolute bottom-4 inset-x-0 flex gap-5 justify-center">
                <button className="bg-white p-3 rounded-full ">
                  <i className="fa-regular fa-heart "></i>
                </button>
                <button className="bg-white p-3 rounded-full ">
                  <i className="fa-solid fa-shopping-cart "></i>
                </button>
                <button className="bg-white p-3 rounded-full ">
                  <i className="fa-solid fa-eye "></i>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex">
                  <span className="text-s font-bold text-[#23A6F0]">
                    {post.department}
                  </span>
                  <span className="ml-auto text-xs bg-[#1A1A1A] text-white rounded-full px-2 py-1 ">
                    <i className="fa-solid fa-star text-yellow-400"></i>{" "}
                    {post.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.description}</p>
                <span className="text-sm text-gray-500 font-bold">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i> {post.sales}
                </span>
                <div className="flex items-center text-sm text-gray-500 my-2">
                  <span className=" text-gray-300 font-bold">
                    {post.originalPrice}
                  </span>
                  <span className="text-[#23856D] font-bold ml-2">
                    {post.price}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  {post.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mb-4 text-gray-500">
                  <span className="text-sm ">
                    <i className="fa-regular fa-clock text-[#23A6F0]"></i>{" "}
                    {post.time}
                  </span>
                  <span className="text-sm ">
                    <i className="fa-regular fa-chart-bar text-[#E77C40]"></i>{" "}
                    {post.lessons}
                  </span>
                  <span className="text-sm ">
                    {" "}
                    <i className="fa-solid fa-chart-area text-[#23856D]"></i>{" "}
                    {post.progress}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded-full hover:bg-[#23A6F0] hover:text-white transition"
                >
                  Learn More {""}
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
