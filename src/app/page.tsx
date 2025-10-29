import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Hero from "../../components/Home/Hero"; 
import Services from "../../components/Home/Services"; 
import Pricing from "../../components/Home/Pricing"; 
import Navbar from "../../components/Layout/Navbar";





export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}
