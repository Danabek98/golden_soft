import React from 'react';
import Header from '../components/Headers';
import Cover from '../components/Cover';
import WhyUs from '../components/whyUs';
import Categories from '../components/Categories';
import FamousProducts from '../components/FamousProducts';


const Home = () => {
    return (
      <>
        <Header />
        <Cover />
        <WhyUs />
        <Categories />
        <FamousProducts />
      </>
    );
  };
  
  export default Home;
