import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobDescPopup = ({closeJobDesc,project}) => {

    // const accessToken = useSelector(state => state.login.accessToken);
    const accessToken = useSelector(state => state.login.accessToken) || localStorage.getItem('jwtToken');
    const [jobdesc, setJobDesc] = useState(project.description);
    const id = project.id;

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://13.233.123.209:8000/freelance/update/project/${id}`, {
                description : jobdesc,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.data.status === 200) {
                toast.success("Job description Updated Successfully")
                closeJobDesc();
            } else {
                console.log(response.data.message || 'Error updating the job description');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto mt-12">
                      <div className="fixed inset-0 bg-black opacity-50"></div>
                      <div className="flex items-center justify-center min-h-screen">
                      <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
                      <div className="flex justify-between items-center">
                          <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Edit Description</h1>
                          <button onClick={closeJobDesc} className="text-gray-500 hover:text-gray-700">
                              <i class="bi bi-x-lg"></i>
                          </button>
                      </div>
                      <div className='mt-8'>
                      <textarea name="" id="" cols="30" rows="5" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600'
                        value={jobdesc} 
                        onChange={e => setJobDesc(e.target.value)} ></textarea> 
                              <div className="mt-8 flex justify-end">
                              <Link to='' onClick={handleSave} state={{project}}><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
                              <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeJobDesc}>
                                  <Link to='' state={{project}}><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                              </div>     
                              </div>
                              </div>
                  </div>
                      </div>
                  </div>
      </>
  )
}

export default EditJobDescPopup