import React, { useState, useEffect } from 'react'
import Paragraph from '../components/paragraph'
import CET from '../assets/img/about/CET.png'

const About = () => {
  const aboutSections = [
    {
        header: "ABOUT KSUM",
        heading: "Kerala Startup Mission",
        content: (
            <>
                <p>The Kerala Startup Mission (KSUM) is the nodal agency of the government of Kerala for promoting entrepreneurship in the state. It is also the implementing body for the Kerala Technology Startup Policy that supports the state’s startup ecosystem through the various schemes and support programs. KSUM was founded in 2006, with the goal to promote technology-based entrepreneurship activities and to create the infrastructure and ecosystem required to support high-end technology-based startup businesses.</p>

                <p>KSUM acts as a springboard for budding entrepreneurs who wish to launch themselves into the world of technology-based careers and has helped develop several innovative products and solutions. </p>
            </>
        )
    },
    {
        header: "ABOUT THE HOST",
        heading: "College of Engineering, Trivandrum (CET)",
        content: (
            <>
                The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd July 1939 during the reign of the Travancore King, Sri Chithira Thirunal Balarama Varma. CET is the Kerala's oldest technical institution. It currently offers undergraduate, graduate and research programs in eight branches of engineering and has been affiliated to the APJ Abdul Kalam Technological University.
            </>
        )
    }
  ]

  return (
    <>
        <div className='w-10/12 xs:w-11/12 py-10 space-y-10 min-h-[80vh] font-dm-sans lg:flex place-items-center'>
            <div className='flex-1 lg:pr-20 box-border rounded-lg'>
                <div className = "min-w-5/6 h-96 bg-slate-400 overflow-hidden">
                    <img src={CET} alt="image of cet" />
                </div>
            </div>
            <div className='flex-1'>

                <Paragraph header={aboutSections[0].header} heading={aboutSections[0].heading} content={aboutSections[0].content} />
            </div>
        </div>

        <div className='w-10/12 xs:w-11/12 min-h-[80vh] font-dm-sans lg:flex place-items-center'>
            <div className='flex-1'>
                <Paragraph header={aboutSections[1].header} heading={aboutSections[1].heading} content={aboutSections[1].content} />
            </div>
            <div className='flex-1 lg:pl-20 box-border overflow-hidden'>
                <div className="min-w-5/6 h-96 bg-slate-400 rounded-lg">
                    <img src={CET} alt="image of cet" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About