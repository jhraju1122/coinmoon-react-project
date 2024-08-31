import React from 'react';
import { AiOutlineMessage } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
       


   <footer className="footer bg-neutral text-neutral-content grid-rows-2 p-10">
   <nav>
    <h6 className="footer-title">CRYPTOCURRENCY RANKING</h6>
    <a className="link link-hover">List of all coins</a>
    <a className="link link-hover">Submit a coin</a>
    <a className="link link-hover">Request a token update</a>
 
  </nav>
  <nav>
    <h6 className="footer-title">ADVERTISING</h6>
    <a className="link link-hover">Ads</a>
    <a className="link link-hover">Marketing services</a>
    <a className="link link-hover">Email promotion</a>
 
  </nav>
  
  <nav>
    <h6 className="footer-title">BLOG</h6>
    <a className="link link-hover"> News</a>
    <a className="link link-hover">Finance</a>
    <a className="link link-hover">DeFi news</a>
    <a className="link link-hover">Dapps</a>
    <a className="link link-hover">GameFi</a>
    <a className="link link-hover">Exchange news</a>
    <a className="link link-hover">Launchpad news</a>
    <a className="link link-hover"> Altcoins</a>
    <a className="link link-hover"> NFT</a>
    <a className="link link-hover">Tutorials</a>
  </nav>
  <nav>
    <h6 className="footer-title">ADD ASSETS</h6>
    <a className="link link-hover">Submit a coin</a>
    <a className="link link-hover">Submit a presale coin</a>
    <a className="link link-hover">Submit an airdrop</a>
    <a className="link link-hover">Request an update</a>
  </nav>
  <nav>
    <h6 className="footer-title">AUDIT</h6>
    <a className="link link-hover">Smart contract audit</a>
    <a className="link link-hover">Audited coins</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Partners</a>
    <a className="link link-hover">Media kit</a>
    <a className="link link-hover">Contact us</a>
   </nav>
  <nav>
    <h6 className="footer-title">LEGAL</h6>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie statement</a>
    <a className="link link-hover">Cookie statement</a>
    <a className="link link-hover"> Disclaimer</a>
    <a className="link link-hover">Operating entities</a>
  </nav>
</footer>
<footer className="footer bg-neutral text-neutral-content items-center p-4 ">
  <aside className="grid-flow-col items-center ml-28 mr-28">
  <a href="#">  <img className='w-[200px] h-[60px]' src="https://i.ibb.co/gvxJQS0/horizontal-logo-small.png" alt="" /></a>
 
 
  </aside>
  <nav className="grid-flow-col gap-4 md:justify-center md:justify-center ">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
      <p className='w-[100px] text-center ml-[-80px]'>CoinMooner © 2024</p>
    </a>
  </nav>
 

  <nav >
 
  <div className='flex'>
    <div> <AiOutlineMessage className='w-10 h-10 mr-3'></AiOutlineMessage></div>
    <div>
    <p>Any questions?</p>
    <p>Get in touch with us</p>
    </div>
  </div>
  </nav>
  
</footer>
        </div>
    );
};

export default Footer;