import React from 'react';
import { SiAeromexico } from "react-icons/si";
 const Card1 = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
          
            {/* card 1  */}
       <div id='coins-card' className="card bg-neutral text-neutral-content">
  <div className="card-body ">
     <div className='flex w-[100%] justify-between'>
           <div>
           <th className='text-xl'>New Coins</th> <br />
           <td className='flex'><span className='text-2xl text-white'>1</span><SiAeromexico className='text-2xl top-3 ml-3'></SiAeromexico>Atua AI STUA</td>
           </div>

            <div className=''>
            <th >Submitted</th> <br />
            <td >2 hours ago</td>
            </div>
     </div>
     
     </div>
     </div>
            {/* card 2  */}
       <div id='coins-card' className="card bg-neutral text-neutral-content">
  <div className="card-body ">
     <div className='flex w-[100%] justify-between'>
           <div>
           <th className='text-xl'>New Coins</th> <br />
           <td className='flex'><span className='text-2xl text-white'>1</span><SiAeromexico className='text-2xl top-3 ml-3'></SiAeromexico>Atua AI STUA</td>
           </div>

            <div className=''>
            <th >Submitted</th> <br />
            <td >2 hours ago</td>
            </div>
     </div>
     
     </div>
     </div>
            {/* card 3  */}
       <div id='coins-card' className="card bg-neutral text-neutral-content">
  <div className="card-body ">
     <div className='flex w-[100%] justify-between'>
           <div>
           <th className='text-xl'>New Coins</th> <br />
           <td className='flex'><span className='text-2xl text-white'>1</span><SiAeromexico className='text-2xl top-3 ml-3'></SiAeromexico>Atua AI STUA</td>
           </div>

            <div className=''>
            <th >Submitted</th> <br />
            <td >2 hours ago</td>
            </div>
     </div>
     
     </div>
     </div>
            

        </div>
    );
};

export default Card1;