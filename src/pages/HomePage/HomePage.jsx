import React from "react";
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import Sidebar from "../../components/Sidebar";
import MostPopular from "../../components/MostPopular";
import ReadyToWearSection from "../../components/ReadyToWearSection";
import ShopByCollection from "../../components/ShopByCollection";
import JewellerySection from "../../components/JewellerySection";
import WinterCollection from "../../components/WinterCollection";
import FootwearSection from "../../components/FootwearSection";
import ShawlsSection from "../../components/ShawlsSection";


const HomePage = ({searchText}) => {
  return (
    <div className="homepage-container">
      <div className="main-div">
        <div className="left">
          <Sidebar />
        </div>

        <div className="right">
          {/* Hero Section */}
          <section className="hero-section">
            <MainCarousel />
          </section>

          {/* Winter Collection Section */}
          <section className="home-section">
            <WinterCollection />
          </section>

          {/* Ready to Wear Section */}
          <section className="home-section">
            <ReadyToWearSection />
          </section>

          {/* Shop by Collection Section */}
          <section className="home-section">
            <ShopByCollection />
          </section>

          {/* Jewellery Section */}
          <section className="home-section">
            <JewellerySection />
          </section>

          {/* Shawls Section */}
          <section className="home-section">
            <ShawlsSection />
          </section>

          {/* Footwear Section */}
          <section className="home-section">
            <FootwearSection />
          </section>

          {/* Most Popular Section */}
          <section className="home-section">
            <MostPopular searchText={searchText} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default HomePage;



