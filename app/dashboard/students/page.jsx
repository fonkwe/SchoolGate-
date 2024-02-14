"use client"

import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { data } from '@/data/data'
import Modal from '@/app/ui/dashboard/modal/modal'



const StudentPage = () => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <Fragment>
    <div className=' min-h-screen bg-[--var[--bg]]'>
        
        <div className='p-4'>
            <div className=' flex justify-between'>
                <button 
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2"
                  onClick={() => setShowModal(true)}
                >
                    Add Students</button>   
                <form className=' mb-2'>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                           aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                           fill="none" viewBox="0 0 20 20">
                           <path stroke="currentColor" stroke-linecap="round" 
                             stroke-linejoin="round" stroke-width="2" 
                             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                   <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                </div>
               </form>
            </div>
            <div className=' m-auto w-full p-4 overflow-y-auto bg-white border rounded-lg'>

                <div className=' p-2 grid md:grid-cols-4 my-3 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer' >
                    <span className=' text-gray-600 text-xl font-bold'>FullName</span>
                    <span className=' sm:text-left text-right text-gray-600 text-xl font-bold '>Class</span>
                    <span className=' hidden md:grid text-gray-600 text-xl font-bold'>Date of Birth</span>
                    <span className=' hidden sm:grid text-gray-600 text-xl font-bold'>Actions</span>
                </div>
                <ul>
                    {data?.map((order, id) => (
                        <li key={id} className=' grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 justify-between items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <div className='bg-purple-100 p-3 rounded-lg'>
                                <Image
                                  src="/profile.png"
                                  width={5}
                                  height={5}
                                  alt="Picture of the author"
                                />
                                </div>
                                <p className=' text-gray-600 pl-4'>{order.name.first + ' ' + order.name.second}</p>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>{order.class}</p>
                            <p className=' text-gray-600 hidden md:flex'>{order.date}</p>
                            <div className=' text-gray-600 sm:flex hidden justify-between items-center'>
                                <p>{order.Action}</p> 
                            </div>
                           
                        </li>
                    ))}
                </ul>

            </div>
            
        </div>

    </div>
         <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
    
  )
}

export default StudentPage