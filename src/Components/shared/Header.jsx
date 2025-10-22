import React from 'react'

const Header = ({title , text}) => {
  return (
    <div className='  max-w-[600px] mx-auto flex flex-col justify-center items-center text-center   '>
      <p className='text-sm text-primary dark:text-secondary'>{text}</p>
      <h1 className='text-2xl sm:text-3xl font-bold dark:text-white'>{title}</h1>
      <p className='text-gray-400 text-sm tracking-wide '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam hic harum voluptas deleniti odio minus laboriosam quidem minima blanditiis </p>
    </div>
  )
}

export default Header
