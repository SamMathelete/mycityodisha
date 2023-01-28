import Header from "./Header";
import Footer from "./Footer";
import ChatbotButton from "./ChatbotButton";
import { FC, ReactNode } from "react";
import EnquiryButton from "./EnquiryButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ChatbotButton />
      <EnquiryButton />
      <Footer />
    </>
  );
};

export default Layout;
