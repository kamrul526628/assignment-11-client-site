import React from 'react';
import contact from '../../../assets/images/showcase.svg'



const Contact = () => {
   
    return (
       <section>
           <h1 className='text-center text-4xl text-accent pb-6 '>Contact Us</h1>
           <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <img src={contact} className="w-3/4"/>
            </div>
            <div>
                <form>
                    
                    
                    <input type="text" placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs mb-5" /><br/>
                    
                    <input type="email" placeholder="Your Email" className="input input-bordered input-sm w-full max-w-xs mb-5" /><br/>
                    
                    <input type="text" placeholder="Your Message" className="input input-bordered input-md w-full max-w-xs mb-5" /><br/>
                    <button className="btn btn-wide btn-accent">Send Message</button>
                   
                </form>
            </div>
           </div>
       </section>
    );
};

export default Contact;