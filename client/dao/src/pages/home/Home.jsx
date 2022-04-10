import React from "react";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/hero/Hero";
import BodyContents from "../../components/card/BodyContents";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <BodyContents />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
