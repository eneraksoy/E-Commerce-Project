const BestServices = () => {
  return (
    <div className="p-4">
      <h3 className="text-center text-gray-500 font-semibold">
        Featured Products
      </h3>
      <h2 className="text-center text-2xl font-bold mt-2">THE BEST SERVICES</h2>
      <p className="text-center text-gray-500 mt-2">
        Problems trying to resolve the conflict between
      </p>

      {/* Mobil Görünüm */}
      <div className="block md:hidden mt-8">
        <div className="text-center mb-8">
          <i className="fas fa-smile text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Easy Wins</h4>
          <p className="text-gray-500 mt-2">Get your best looking smile now!</p>
        </div>

        <div className="text-center mb-8">
          <i className="fas fa-building text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Concrete</h4>
          <p className="text-gray-500 mt-2">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="text-center mb-8">
          <i className="fas fa-chart-line text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Hack Growth</h4>
          <p className="text-gray-500 mt-2">
            Overcome any hurdle or any other problem.
          </p>
        </div>
      </div>

      {/* Masaüstü Görünüm */}
      <div className="hidden md:flex justify-center gap-8 mt-8">
        <div className="text-center">
          <i className="fas fa-smile text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Easy Wins</h4>
          <p className="text-gray-500 mt-2">Get your best looking smile now!</p>
        </div>

        <div className="text-center">
          <i className="fas fa-building text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Concrete</h4>
          <p className="text-gray-500 mt-2">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="text-center">
          <i className="fas fa-chart-line text-[#23A6F0] text-3xl mb-4"></i>
          <h4 className="text-xl font-bold">Hack Growth</h4>
          <p className="text-gray-500 mt-2">
            Overcome any hurdle or any other problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
