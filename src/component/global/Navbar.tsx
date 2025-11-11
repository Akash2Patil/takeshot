import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between item-center max-w-6xl mx-auto py-3'>
        <div className='text-4xl'>
            TakeShot
        </div>
        <div className='flex gap-3 items-center'>
            <a href='#'>github</a>
            <a href='#'>Linkdein</a>
            <button className='shadow-lg rounded p-2 cursor-pointer'>Toggle</button>
        </div>
    </div>
  )
}

export default Navbar