import React, { useState, useEffect} from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'
import dollarimg from '../../components/images/doller3.png'

const AddBidAmount = ({projectData}) => {
console.log(projectData,"bid page")

  return (
    <>
    <Navbar/>
    <div className=' container-sm px-36'>
        <div className=' mt-10  border border-[#E7E8F2] py-10 px-10 rounded-lg'>
        <h1 className=' text-2xl font-cardo font-semibold text-left'>Job Details</h1>
            <div className=' flex flex-row mt-6'>
                <div className=' basis-8/12'>
                <h1 className=' text-xl font-inter font-medium text-left'>Shopping Website</h1>
                <div className=' flex flex-row'>
                <div className=' basis-4/12 mt-5'><div  class="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1]  rounded-xl text-sm font-semibold text-green-800 py-[3px] dark:bg-[#dffdee] dark:hover:bg-[#dffdee]  w-[90%] bg-opacity-[60%]">Scripting & Automation</div></div>
                <div className=' basis-4/12 mt-5 ml-2'><p className=' text-sm font-medium font-inter text-left opacity-[50%]'>Posted 22 hours ago</p></div>
                </div>
                <p className='font-inter text-[15px] font-medium mt-3 text-left opacity-[70%]'>The primary goal of an online shopping site is to sell goods and services online. This project deals with developing an e- commerce website for online shopping. It provides the user with a catalogue of different goods and services available for purchase in the store.</p>
                <p className=' mt-3 text-base font-semibold text-green-600 text-left'>more</p>
                <Link><p className='mb-5 mt-3 text-base font-semibold text-green-600 text-left'>View more job details</p></Link>
                </div>
                <div className=' basis-1/12'></div>
                <div className=' basis-3/12 border-l border-[#E7E8F2]'>
                    <div className=' flex flex-row ml-4'>
                        <div className=' basis-3/12'><i class="fa fa-user-secret" aria-hidden="true"></i></div>
                        <div className=' basis-6/12'>
                            <p className=' text-[14px] font-normal text-left'>Expert</p>
                            <p className=' text-[12px] font-normal text-left opacity-50'>Experience level</p>
                        </div>
                    </div>
                    <div className=' flex flex-row ml-4 mt-4'>
                        <div className=' basis-3/12'><i class="bi bi-alarm-fill"></i></div>
                        <div className=' basis-6/12'>
                            <p className=' text-[14px] font-normal text-left'>$18.00 - $50.00</p>
                            <p className=' text-[12px] font-normal text-left opacity-50'>Hourly Range</p>
                        </div>
                    </div>
                    <div className=' flex flex-row ml-4 mt-4'>
                        <div className=' basis-3/12'><i class="bi bi-clock-history"></i></div>
                        <div className=' basis-9/12'>
                            <p className=' text-[14px] font-normal text-left'>More than 30 hrs/week</p>
                            <p className=' text-[12px] font-normal text-left opacity-50'>Hourly</p>
                        </div>
                    </div>
                    <div className=' flex flex-row ml-4 mt-4'>
                        <div className=' basis-3/12'><i class="bi bi-calendar-check"></i></div>
                        <div className=' basis-8/12'>
                            <p className=' text-[14px] font-normal text-left'>More than 6 months</p>
                            <p className=' text-[12px] font-normal text-left opacity-50'>Project Length</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' mt-5' />
            <h1 className='text-base font-medium font-inter text-left mt-5'>Skills & Experties</h1>
            <div className="text-left mt-5">
            <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-24 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className=" text-center">Python</p>
            </div>
            <div className="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-24 text-green-800 px-3 py-[3px] font-semibold text-sm dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className="text-center">React</p>
            </div>
            </div>
        </div>
        <div className=' mt-10 border border-[#E7E8F2] py-10 px-10 rounded-lg'>
        <h1 className=' text-2xl font-cardo font-semibold text-left'>Add Bid</h1>
        <p className='text-base font-inter font-medium text-left mt-7'>What is the rate you'd like to bid for this job?</p>
        <div className=' flex flex-row'>
            <div className=' basis-8/12'>
            <div>
            <div className="flex items-center mt-4">
                <div className="flex flex-col justify-center w-2/3"> 
                    <h1 className="font-medium text-[18px] text-[#031136] font-cardo text-left">Hourly Rate</h1>
                    <p className="font-inter text-[14px] text-[#031136] font-normal text-left opacity-50">Total amount the client will see</p>
                </div>
                <div className="flex items-center space-x-2"> 
                    <input
                        type="text"
                        placeholder='$0.00'
                        className='border py-1.5 px-2 rounded-md w-56 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 text-right'
                    /> 
                    <span>/hr</span>
                </div>
            </div>

            <div className="border-b opacity-60 my-5"></div>

            <div className="flex items-center mt-4">
                <div className="flex flex-col justify-center w-2/3">
                    <h1 className="font-cardo text-[18px] text-[#031136] font-medium text-left">10% Alanced Service Fee</h1>
                </div>
                <div className="flex items-center space-x-2"> 
                    <input
                        type="text"
                        placeholder='$0.00'
                        className='py-1.5 px-2 rounded-md w-56 border-none text-right cursor-not-allowed bg-none'
                        disabled
                    /> 
                    <span>/hr</span>
                </div>
            </div>

            <div className="border-b opacity-60 my-5"></div>

            <div className="flex items-center mt-4">
                <div className="flex flex-col justify-center w-2/3">
                    <h1 className="font-cardo text-[18px] text-[#031136] font-medium text-left">You'll Receive</h1>
                    <p className="font-inter text-[14px] text-[#031136] font-normal text-left opacity-50">The estimated amount you'll receive after service fees</p>
                </div>
                <div className="flex items-center space-x-2"> 
                    <input
                        type="text"
                        placeholder='$0.00'
                        className='border py-1.5 px-2 rounded-md w-56 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 text-right'
                        disabled
                    /> 
                    <span>/hr</span>
                </div>
            </div>
        </div>
            </div>
            <div className=' basis-4/12'>
            <img src={dollarimg} alt="" className=' h-28 w-28 mx-auto' />
            <p className=' opacity-[50%] font-normal text-sm mt-3'>Includes Alanced Hourly Protection.</p>
            </div>
        </div>
        </div>
        <div className=' mt-10 border border-[#E7E8F2] py-10 px-10 rounded-lg'>
            <h1 className='text-base font-inter font-medium text-left'>How long will this project take?</h1>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-[#797979] text-sm font-inter font-normal rounded-lg mt-4 focus:ring-green-500 focus:border-green-500 block w-[22%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option selected>Select a duration</option>
              <option value="">More than 6 months</option>
              <option value="">3 to 6 months</option>
              <option value="">1 to 3 months</option>
              <option value="">Less than 1 month</option>
            </select>
        </div>
        <div className=' mt-10 border border-[#E7E8F2] py-10 px-10 rounded-lg'>
        <h1 className=' text-2xl font-cardo font-semibold text-left'>Additional details</h1>
            <h1 className='text-base font-inter font-medium text-left mt-8'>Cover Letter</h1>
            <div class="w-full mx-auto">
            <textarea id="message" name="message" class="mt-3 w-full h-32 px-3 py-2 border-2 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500  dark:focus:ring-green-500 dark:focus:border-green-500"></textarea>
        </div>
        </div>
        <div className=' flex flex-row mt-5'>
        <div className=' basis-3/12'><button className='h-10 w-52 text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-5 text-base font-semibold rounded'>Send Proposal</button></div>
        <div class="p-0.5 mt-5 rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
        <Link to=''><button class="px-2 py-1 bg-[#f8faf9] rounded"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-bold text-sm py-[4px] px-[16px]">Cancel</p></button></Link>
        </div>
        </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default AddBidAmount