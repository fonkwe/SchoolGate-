import React from 'react'

const Modal = ({ isVisible, onClose }) => {
    if(!isVisible) return null;
    return (
        <div className=" fixed bg-black bg-opacity-25 inset-0 backdrop-blur-sm flex justify-center items-center">
            <div className=" w-100% flex flex-col">
                <button className=' text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className=' bg-white p-2 rounded'>
                <form className=" max-w-[90%] m-auto" >
                    <h1 className=" text-black text-2xl items-end justify-center ">Create Student Profile</h1>
                        <div className=" mb-5 text-black">
                          <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              id="name"
                              value="name"
                              className=' text-black'
                            />
                        </div>
                    <div className=" mb-5">
                        <label htmlFor="age">Age</label>
                           <input
                              type="number"
                              id="age"
                              value="age"
                            />
                    </div>
                    <div className=" mb-5">
                        <label htmlFor="email">Email</label>
                            <input
                               type="email"
                               id="email"
                               value="email"
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