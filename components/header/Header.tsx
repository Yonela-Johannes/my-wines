import React from 'react'
import Image from 'next/image';
const Header = () => {
  return (
    <div>
      <div className='flex p-4'>
        <Image
          src="/assets/wine.png"
          className=""
          width={40}
          alt="logo"
          height={40}
        />
        <h1 className='text-primary font-bold text-[30px] font-blinker'>My Wines</h1>
      </div>
    </div>
  )
}

export default Header
