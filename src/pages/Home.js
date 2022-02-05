import React from 'react';
import ContextProvider from '../store/context';
import Main from '../components/Main';
import Header from '../ui/Header';
import Layout from '../ui/Layout';

const Home = ({products}) => {
  console.log(products);
  return  <ContextProvider>
  <Layout>
    <Header />
    <Main products={products} />
  </Layout>
</ContextProvider>;
};

export default Home;
