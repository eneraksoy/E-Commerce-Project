import Header from "./Header";
import Footer from "./Footer";

const PageContent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageContent;
