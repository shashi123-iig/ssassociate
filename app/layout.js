import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SS Associate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20"> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
