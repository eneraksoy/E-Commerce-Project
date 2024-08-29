const Footer = () => {
  const Section = ({ title, items }) => (
    <div className="mb-6 lg:mb-0">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <ul className="space-y-2 text-[#737373] font-bold">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      {/* Mobil Bölüm */}
      <div className="lg:hidden max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="mb-4 text-gray-500">
            the quick fox jumps over the lazy dog
          </p>
          <div className="flex space-x-4 text-[#23A6F0] gap-4">
            <button className="">
              <i className="fab fa-facebook-square text-2xl"></i>
            </button>
            <button className="">
              <i className="fab fa-instagram text-2xl"></i>
            </button>
            <button className="">
              <i className="fab fa-twitter text-2xl"></i>
            </button>
          </div>
        </div>

        <Section
          title="Company Info"
          items={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <Section
          title="Features"
          items={[
            "Business Marketing",
            "User Analytic",
            "Live Chat",
            "Unlimited Support",
          ]}
        />

        <div className="text-center text-base text-[#737373] font-bold pt-20">
          <p>Made With Love By</p>
          <p>Figmaland All Right Reserved</p>
        </div>
      </div>

      {/* Masaüstü Bölüm */}
      <div className="hidden lg:flex justify-between items-start max-w-7xl mx-auto">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="mb-4 text-gray-500">
            the quick fox jumps over the lazy dog
          </p>
          <div className="flex space-x-4 text-[#23A6F0] gap-4">
            <button className="">
              <i className="fab fa-facebook-square text-2xl"></i>
            </button>
            <button className="">
              <i className="fab fa-instagram text-2xl"></i>
            </button>
            <button className="">
              <i className="fab fa-twitter text-2xl"></i>
            </button>
          </div>
        </div>

        <Section
          title="Company Info"
          items={["About Us", "Carrier", "We are hiring", "Blog"]}
        />
        <Section
          title="Features"
          items={[
            "Business Marketing",
            "User Analytic",
            "Live Chat",
            "Unlimited Support",
          ]}
        />
      </div>

      <div className="hidden lg:block text-center text-base text-[#737373] font-bold pt-20">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
