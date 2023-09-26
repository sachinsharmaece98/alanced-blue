import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import profilepic from '../../../components/images/profilepic.png'
import verify from '../../../components/images/verify.png'
import locations from '../../../components/images/location.png'
import { useState } from 'react'
import FreelancerProjectsPopup from '../../freelancer/AllPopup/FreelancerProjectsPopup'


const ViewProposalPopup = ({ closeViewProposal }) => {

    const location = useLocation();
  const project = location.state && location.state.project;

  const [isFreelancerProjectsOpen, setIsFreelancerProjectsOpen] = useState(false);

  const openFreelancerProjects = () => {
    setIsFreelancerProjectsOpen(true);
  };

  const closeFreelancerProjects = () => {
    setIsFreelancerProjectsOpen(false);
  };
    
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-10 mt-20">
    <div className="fixed inset-0 bg-black opacity-10"></div>
  <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 h-[94%] z-20 overflow-y-scroll">
    <div className='flex flex-row'>
        <div className='basis-6/12 cursor-pointer'><i class="bi bi-chevron-left font-bold text-black text-lg" onClick={closeViewProposal}></i></div>
        <div className=' basis-6/12'>
            <Link to="" state={{project}}>
            <div className=' text-right font-cardo font-normal text-base'>
            <i class="bi bi-box-arrow-up-right"></i> Open proposal in a new window
            </div>
            </Link>
        </div>
    </div>
    <div className=' container px-2'>
    <div className="flex mt-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30">
  <div className="flex-[20%] p-6">
  <div className="relative w-24 h-24">
                    <img src={profilepic} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div class="absolute bottom-3 right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
  </div>
  <div className="flex-[30%] py-6">
  <div className="flex items-center">
                <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">Ayan Jain
            </h1>
                <img className="h-4 w-4" src={verify} alt="Verification" />
            </div>
            <div className="flex items-center my-1">
                <img src={locations} alt="Location" className="h-[13px] mr-1" />
                <p className="text-[#797979] text-[14px] font-inter">Indore, India</p>
            </div>
            <p className="text-green-600 text-[16px] font-inter py-3 font-semibold cursor-pointer hover:underline">View Profile</p>
  </div>
  <div className="flex-[50%] p-6 text-right">
  <Link to=''><span class="inline-block text-sm px-10 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-4 font-semibold">Message</span></Link>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
                <Link to=''><button class="px-11 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p></button></Link>
            </div>
  </div>
</div>
        <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Applicant</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2">Ayan has applied to or been invited to your or your company's job {project.title} </p>
    </div>
    <div class="w-full md:w-[70%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Proposal Details</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold">$30.00/hr</h1>
        <p className="text-[#031136] opacity-50 text-[14px] font-inter font-semibold">Proposed bid</p>
    </div>
</div>
<div className="border-b opacity-60 my-3"></div>
<h1 className="font-cardo text-xl text-[#031136] font-normal">Cover Letter</h1>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-4">Hello, I am software developer working as a full stack Mean developer, I can do this work with good efficiency in less time, please let me know when we can connect and discuss further for this and other projects.</p>
    </div>
    </div>
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <h1 className="font-cardo text-xl text-[#031136] font-normal">View Profile</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2 pb-6">Full Stack Development</p>
    <Link to=''><span class="text-sm px-16 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">All Work</span></Link>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <h1 className="font-cardo text-xl text-[#031136] font-normal">Hours Per Week</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter pb-6">more than 30 hrs/week</p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Languages</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>English : <span className='opacity-50'>Native or Bilingual</span></p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Hindi : <span className='opacity-50'>Native or Bilingual</span></p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal pt-6">Education</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>BSC (CS)</p>
    <p className='font-inter text-[#0A142F] text-[14px] opacity-50'>Davv</p>
    <p className='font-inter text-[#0A142F] text-[14px] opacity-50'>2018-2021</p>
        </div>
    </div>
    <div class="w-full md:w-[70%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Full Stack Developer</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold inline-block">$5.00/hr</h1>
    </div>
</div>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-5">Hello, I am software developer working as a full stack Mean developer, I can do this work with good efficiency in less time, please let me know when we can connect and discuss further for this and other projects.</p>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Portfolio</h1>
    <div className="flex flex-wrap -mx-2">  
        <div className='w-1/3 px-2 cursor-pointer' onClick={openFreelancerProjects}>  
            <div className='w-full h-[165px] mt-4 border border-gray-100 overflow-hidden'>
                <img 
                    src={profilepic} 
                    alt="" 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',  
                        width: '100%', 
                        height: '100%' 
                    }}
                />
            </div>
            <p className='font-inter text-green-600 text-[13px] pt-2 overflow-hidden whitespace-nowrap overflow-ellipsis hover:text-green-700 underline font-semibold'>Project Title</p>
        </div>
        {isFreelancerProjectsOpen && <FreelancerProjectsPopup closeFreelancerProjects={closeFreelancerProjects} project={project}/>}
</div>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Skills</h1>
    <div className="text-left mt-5">
        <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
        <p className=" text-center">html</p>
    </div>
    <div className="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-24 text-green-800 px-3 py-[3px] font-semibold text-sm dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
        <p className="text-center">React</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Employment history</h1>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">Graphic Designer | Wiz91 Technologies</h1>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>January 2021 - Present</p>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">UI/UX Designer | ABC Technologies</h1>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>April 2020 - January 2021</p>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[20px] text-[#031136] font-normal cursor-pointer">Show More</h1>
    </div>
    </div>
    </div>
  </div>
</>)
}

export default ViewProposalPopup