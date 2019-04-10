import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactCard from './components/ContactCard';
import productsData from './data/productData';
import Product from './components/Product';

function App2(){
  const fName = 'Nimbus';
  const lName = 'Cloud';

  const productComponents = productsData.map(item =>
                                        <Product key={item.id} product={item}/>
                                        );

  return(
      <div>
        <Header />
        <h1>Hello {fName + ' ' + lName}!</h1>

        <div>
          {productComponents}
        </div>

        <ContactCard
          name="Mr. Whiskerson"
          imgUrl="http://placekitten.com/300/200"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <ContactCard
          name="Fluffykins"
          imgUrl="http://placekitten.com/400/200"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Footer />
      </div>

  );
}

export default App2;
