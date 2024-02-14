import React from 'react'

const Modal = ({ isVisible, onClose }) => {
    if(!isVisible) return null;
    return (
        <div className=" fixed bg-black bg-opacity-25 inset-0 backdrop-blur-sm flex justify-center items-center">
            <div className=" w-100% flex flex-col">
                <button className=' text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className=' bg-white p-2 rounded'>
                <form className="max-w-md mx-auto" >
                    <h1 className=" text-black text-2xl items-end justify-center font-bold mb-4 ">Create Student Profile</h1>
                        <div className=" mb-4 ">
                          <label htmlFor="name" className="block font-semibold">Name</label>
                            <input
                              type="text"
                              id="name"
                              value="name"
                              className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    <div className=" mb-4">
                        <label htmlFor="age" className="block font-semibold">Age</label>
                           <input
                              type="number"
                              id="age"
                              value="age"
                              className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                    </div>
                    <div className=" mb-4">
                    <label htmlFor="email" className="block font-semibold">Email</label>
                            <input
                               type="email"
                               id="email"
                               value="email"
                               className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
    
        </div>
      )
    }
export default Modal