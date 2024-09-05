import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1080px] m-auto grid md:grid-cols-8 max-w-[600px]  px-2 md:px-0'>
            
            <div className='flex flex-col col-span-5 justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>Organize your shipments at its best</p>
                <h1 className='md:leading-[72px]  md:text-6xl text-5xl font-semibold'>Tracking <span className='text-[#20B486]'>5000+</span> Medicines
                    from <span  className='text-[#20B486]'>300</span> Pharmacies 
                    & Companies everyday
                </h1>
                {/* <p className='py-2 text-lg text-gray-600'>Various </p> */}
                
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
            </div>
            
            <img  src={`https://static.vecteezy.com/system/resources/previews/012/440/309/original/open-capsule-medical-3d-illustration-png.png`} className="md:order-last col-span-3 order-first" />



        </div>
        

    </div>
  )
}

export default Hero