import React from 'react'
import { Link } from 'react-router-dom'

const EditTitlePopup = ({ closeEditTitle }) => {
  return (
    <>
    <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
                    <div className="flex justify-between items-center">
                        <h1 className="font-cardo text-[21px] text-[#031136] font-normal">Edit Title</h1>
                        <button onClick={closeEditTitle} className="text-gray-500 hover:text-gray-700">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='mt-10'>
                            <h1 className="font-inter text-[18px] text-[#031136] font-normal text-left">Your Title</h1>
                            <p className="font-inter text-[14px] text-[#031136] font-normal pt-2 text-left">Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience) </p>
                            <input type="text" className='border my-5 py-1.5 px-2 rounded-md w-full outline-none' placeholder='Python Developer'/>
                            <div className="mt-8 flex justify-end">
                            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                </div>
                    </div>
                </div>
    </>
  )
}

export default EditTitlePopup