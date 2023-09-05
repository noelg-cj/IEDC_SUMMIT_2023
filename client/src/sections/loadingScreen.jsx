import React from 'react'
import loadingAnimation from '../assets/img/idea.gif'

const LoadingScreen = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-[100] bg-white flex flex-col items-center justify-center'>

        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] bg-transparent border-[#3866F2] border-[50px] md:border-[70px] lg:border-[100px] left-[-250px] md:left-[-350px] lg:left-[-450px] top-[-300px] lg:top-[-350px] opacity-40 absolute rounded-full z-20"></div>

        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] bg-transparent border-[#6F04D9] border-[30px] md:border-[50px] lg:border-[70px] right-[-250px] md:right-[-350px] lg:right-[-450px] bottom-[-350px] md:[-450px] lg:bottom-[-550px] opacity-40 absolute rounded-full z-20"></div>

        <img src={loadingAnimation} className='w-72' />
        <h4 className='font-darker-grotesque text-center font-semibold text-6xl'>IEDC SUMMIT 2023</h4>
        <h2 className='mt-10 font-dm-sans font-medium text-2xl text-slate-500'>Loading...</h2>
    </div>
  )
}

export default LoadingScreen