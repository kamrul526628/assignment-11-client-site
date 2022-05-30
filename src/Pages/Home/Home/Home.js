import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Items from '../Items/Items';




const Home = () => {
   
    return (
       <div>
           <Banner></Banner>
           <Items></Items>
           
           
           <Contact></Contact>
           <Address></Address>
       </div>
    );
};

export default Home;