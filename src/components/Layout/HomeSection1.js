import React from 'react'
import coinbase from '../images/coinbase.png'
import slack from '../images/slack.png'
import adobe from '../images/adobe.png'
import spotify from '../images/spotify.png'
import webflow from '../images/webflow.png'
import zoom from '../images/zoom.png'
import circlecheck from '../images/circlecheck.png'
import happyclient from '../images/happyclient.png'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import { Link } from 'react-router-dom'

const HomeSection1 = () => {
  return (
    <div>
        <h4 className="pt-16 font-cardo text-[20px]">Trusted by 4,000+ companies</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-32 mt-8 cursor-pointer">
    <div class="p-4">
        <img src={coinbase} alt="" />
    </div>
    <div class="p-4">
    <img src={spotify} alt="" />
    </div>
    <div class="p-4">
    <img src={slack} alt="" />
    </div>
    <div class="p-4">
    <img src={adobe} alt="" />
    </div>
    <div class="p-4">
    <img src={webflow} alt="" />
    </div>
    <div class="p-4">
    <img src={zoom} alt="" />
    </div>
</div>
<hr className='mx-28 my-9'/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-32 mt-6">
    <div class="relative p-10 md:ml-24">
        <div class="md:absolute md:top-0 md:left-0 w-[190px] h-[210px] md:w-[190px] md:h-[210px] rounded shadow-lg">
            <img src={client2} alt="" />
        </div>
        <div class="mt-4 md:absolute md:top-[65px] md:left-[170px] w-full md:w-[220px] h-auto md:h-[295px] rounded shadow-lg">
            <img src={client1} alt="" className="h-auto w-full md:h-[295px] md:w-[222px]"/>
        </div>
        <div class="mt-4 md:absolute md:top-[276.5px] md:left-[30px] p-6 w-[170px] h-[83px] rounded shadow-lg z-20 bg-white">
            <img src={happyclient} alt="" />
        </div>
    </div>
    <div class="p-4 text-left">
        <h4 className='font-cardo text-lg md:text-[23px] text-[#0A142F] mt-5'>Simple Solutions for Complex <br />Connections</h4>
        <p className='font-inter text-sm md:text-[13px] opacity-50 mt-3'>Welcome to our freelancing platform, your gateway to success in the digital realm! Our platform offers a straightforward approach to navigating the intricate web of professional connections, providing freelancers with a reliable and user-friendly interface.

Embrace the essence of simplicity as you curate your portfolio and showcase your diverse skills and expertise. From graphic designing to web development, each project resonates with clarity and purpose, leaving a lasting impression on potential clients.

Join us in navigating the dynamic landscape of freelancing with confidence and ease. Your portfolio is more than just a collection of works—it's a compelling narrative of your professional journey and achievements.</p>
        <div class="flex flex-wrap items-center space-x-3 mt-4">
            <img src={circlecheck} alt="" className='h-5 w-5'/>
            <span className='pr-6 font-inter text-[15px]'>High Analysis</span>
            <img src={circlecheck} alt="" className='h-5 w-5'/>
            <span className='font-inter text-[15px]'>Certified Institute</span>
        </div>
        {/* <div className='mt-7'>
            <Link to=''><span class="text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white font-semibold">Read More</span></Link>
        </div> */}
    </div>
</div>

    </div>
  )
}

export default HomeSection1