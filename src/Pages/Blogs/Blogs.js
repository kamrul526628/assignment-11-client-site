import React from 'react';



const Blogs = () => {
    
   
    return (
       <section className='px-12'>
           <div className='pt-12'>
               <h4 className='text-3xl'>1. Difference between javascript and nodejs</h4>
               <p>
                <span className='text-xl'><u>Answer:</u> </span>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>2.When should you use nodejs and when should you use mongodb</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. NodeJS's responsibilty is especially to execute your application.
               </p>
           </div>
           <div className='pt-12'>
               <h4 className='text-3xl'>3.Differences between sql and nosql databases.</h4>
               <p>
                <span className='text-xl'><u>Answer:</u>  </span>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
               </p>
           </div>
           
           
       </section>
    );
};

export default Blogs;