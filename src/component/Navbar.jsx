import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="main bg-yellow-200 py-4 shadow-xl">
        <div className="container m-auto lg:flex md:flex flex-wrap justify-between items-center ">
             <div className="left">
                <h1 className='text-2xl font-semibold text-center'>Food App</h1>
             </div>
             <div className="right">
                <ul className='flex space-x-4 text-xl justify-center'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Services</li>
                </ul>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
