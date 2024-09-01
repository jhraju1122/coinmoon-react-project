import React from 'react';

const Footer = () => {
  return (
    <div>

      <footer className="footer bg-neutral  text-neutral-content grid-rows-2">
        <div class="container mx-auto">
          <div className='grid grid-cols-4 text-[15px] gap-8 m-auto'>
            <div className='grid grid-cols-1 font-semibold'>
              <h6 className="footer-title">CRYPTOCURRENCY RANKING</h6>
              <a className="link link-hover p-1">List of all coins</a>
              <a className="link link-hover p-1">Submit a coin</a>
              <a className="link link-hover p-1">Request a token update</a>

              <div className='grid grid-cols-1 font-semibold'>
                <h6 className="footer-title mt-5">AUDIT</h6>
                <a className="link link-hover p-1">Smart contract audit</a>
                <a className="link link-hover p-1">Audited coins</a>
              </div>
            </div>
            <div className='grid grid-cols-1 font-semibold'>
              <h6 className="footer-title">ADVERTISING</h6>
              <a className="link link-hover p-1">Ads</a>
              <a className="link link-hover p-1">Marketing services</a>
              <a className="link link-hover p-1">Email promotion</a>

              <div className='grid grid-cols-1 font-semibold'>
                <h6 className="footer-title mt-5">Company</h6>
                <a className="link link-hover p-1">Partners</a>
                <a className="link link-hover p-1">Media kit</a>
                <a className="link link-hover p-1">Contact us</a>
              </div>
            </div>

            <div className='grid grid-cols-1 font-semibold '>
              <h6 className="footer-title">BLOG</h6>
              <a className="link link-hover p-1"> News</a>
              <a className="link link-hover p-1">Finance</a>
              <a className="link link-hover p-1">DeFi news</a>
              <a className="link link-hover p-1">Dapps</a>
              <a className="link link-hover p-1">GameFi</a>
              <a className="link link-hover p-1">Exchange news</a>
              <a className="link link-hover p-1">Launchpad news</a>
              <a className="link link-hover p-1"> Altcoins</a>
              <a className="link link-hover p-1"> NFT</a>
              <a className="link link-hover p-1">Tutorials</a>
            </div>
            <div className='grid grid-cols-1 font-semibold'>
              <h6 className="footer-title">ADD ASSETS</h6>
              <a className="link link-hover p-1">Submit a coin</a>
              <a className="link link-hover p-1">Submit a presale coin</a>
              <a className="link link-hover p-1">Submit an airdrop</a>
              <a className="link link-hover p-1">Request an update</a>

              <div className='grid grid-cols-1 font-semibold'>
                <h6 className="footer-title">LEGAL</h6>
                <a className="link link-hover p-1">Terms & Conditions</a>
                <a className="link link-hover p-1">Privacy policy</a>
                <a className="link link-hover p-1">Cookie statement</a>
                <a className="link link-hover p-1">Cookie statement</a>
                <a className="link link-hover p-1"> Disclaimer</a>
                <a className="link link-hover p-1">Operating entities</a>
              </div>

     
            </div>
            <div class='container mx-auto flex w-[100%]'>
                
            </div>

          </div>
        </div>

      </footer>
    
    </div>
  );
};

export default Footer;