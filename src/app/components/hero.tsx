import React from 'react'

const Hero = () => {
  return (
    <div className="container grid grid-cols-2 justify-center ml-[150px]">
      <div className="w-52 h-52 rounded-full overflow-hidden flex">
        <img src="/images/logo.jpg" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="text-[80px] font-medium">
        <p>I am</p>
        <p>Muhammad</p>
        <p>Maaz</p>
      </div>
    </div>
  );
}

export default Hero
