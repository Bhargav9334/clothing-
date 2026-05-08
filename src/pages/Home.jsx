import React from 'react';
import HomeHero from "../components/Home/HomeHero";
import CategorySection from "../components/Home/CategorySection";
import FeaturedItems from "../components/Home/FeaturedItems";
import AnnouncementBar from '../components/Home/AnnouncementBar';
import FeatureSection from '../components/Home/FeatureSection';
import NewItems from '../components/Home/NewItems';
// import Testimonial from '../components/Home/Testimonial';
import Accessories from '../components/Home/Accessories';
import LifestyleScroll from '../components/Home/LifestyleScroll';

const Home = () => {
  return (
    <main className="bg-black">
      <HomeHero navbarHeight={80} />
      <CategorySection />
      <FeaturedItems />
      <AnnouncementBar />
      <FeatureSection />
      <NewItems />
      {/* <Testimonial /> */}
      <Accessories />
      <LifestyleScroll />
    </main>
  );
};

export default Home;