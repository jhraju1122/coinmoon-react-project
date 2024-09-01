import React from 'react';
import { AiOutlineMessage } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";

const Footer2 = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content items-center p-4 justify-around">
  <aside className="w-52 h-20">
  <a href="#"><img src="https://i.ibb.co/gvxJQS0/horizontal-logo-small.png" alt="" /></a>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center  md:">
    <a href="#"> 
   <FaTelegramPlane className='text-2xl'></FaTelegramPlane>
    </a>
    <a href="#">
        <FaTwitter className='text-2xl'></FaTwitter>
    </a>
     <a href="#">
     <IoLogoYoutube className='text-2xl'></IoLogoYoutube>
     </a>
    <a href="#">
        <SiTiktok className='text-2xl'></SiTiktok>
    </a>
    <a href="#">
        <TbBrandGithubFilled className='text-2xl'></TbBrandGithubFilled>
    </a>
     
  </nav>

  <nav className='flex'>
    <BiMessageRoundedDots className='text-5xl'></BiMessageRoundedDots>
    <div className='text-xl'>
    <p>Any questions?</p> 
    <a href="#"><p className='text-purple-700'>Get in touch with us</p></a>
    </div>
   
  </nav>
</footer>
        </div>
    );
};

export default Footer2;