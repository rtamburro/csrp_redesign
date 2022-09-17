import React from 'react'
import { BsFaceBook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer className='bg-[#389AF4] pt-4 pb-4 flex flex-row items-center justify-evenly'>
        <div className=''>
            <h4 className=''>The Official CSRP State Refereee Committee for the United States Referee Program</h4>
            <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]'>
                <IconContext.Provider value={{ color: "#4267B2"}}>
                    <div className='p-3 duration-300 ease-in bg-white rounded-full shadow-lg cursor-pointer hover:scale-105'>
                        <AiFillFacebook size={28} />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#1DA1F2"}}>
                    <div className='p-3 duration-300 ease-in bg-white rounded-full shadow-lg cursor-pointer hover:scale-105'>
                        <AiFillTwitterCircle size={28} />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "black"}}>
                    <div className='p-3 duration-300 ease-in bg-white rounded-full shadow-lg cursor-pointer hover:scale-105'>
                        <AiFillInstagram size={28} />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "red"}}>
                    <div className='p-3 duration-300 ease-in bg-white rounded-full shadow-lg cursor-pointer hover:scale-105'>
                        <AiFillYoutube size={28} />
                    </div>
                </IconContext.Provider>
            </div>
        </div>
        <div className=''>
            <h4>Newsletter</h4>
            <form>
                <div className="grid w-full gap-4 py-3 md:grid-cols-2">
                    <div className='flex flex-col'>
                        <input placeholder='Name' className='flex p-2 border-2 border-gray-300 rounded-lg' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <input placeholder='Email' className='flex p-2 border-2 border-gray-300 rounded-lg' type="email" />
                    </div>
                </div>
                <button className='w-full p-2 mt-4 uppercase duration-300 ease-in bg-transparent border-2 hover:scale-105 '>Subscribe</button>
            </form>
            
        </div>
        
    </footer>
  )
}

export default Footer