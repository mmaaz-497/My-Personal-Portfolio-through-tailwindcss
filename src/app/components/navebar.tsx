import React from 'react'

const Navebar = () => {
  return (
    <div className="container pt-8 w-[1932px] h-[100px]">
    <div className="flex justify-between items-center ">
        <div className="text-2xl font-medium ml-[150px]">Muhammad Maaz</div>
      <ul className="gap-10 md:gap-16 hidden md:flex ">
        <li className="menuLink"><a href="#hero">Home</a></li>
        <li className="menuLink"><a href="#about">About</a></li>
        <li className="menuLink"><a href="#skills">Skills</a></li>
        <li className="menuLink"><a href="#contact">Contact</a></li>
      </ul>
    </div>
</div>
  )
}

export default Navebar
